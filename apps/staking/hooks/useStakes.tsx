import { getTotalStakedAmountForAddress } from '@/components/NodeCard';
import { isStakeRequestingExit, parseStakeState, STAKE_STATE } from '@/components/StakedNode/state';
import { CONTRIBUTION_CONTRACT } from '@/lib/constants';
import { getStakedNodes } from '@/lib/queries/getStakedNodes';
import { useStakingBackendQueryWithParams } from '@/lib/staking-api-client';
import {
  CONTRIBUTION_CONTRACT_STATUS,
  type ContributorContractInfo,
  type Stake,
} from '@session/staking-api-js/client';
import { areHexesEqual } from '@session/util-crypto/string';
import { useWallet } from '@session/wallet/hooks/useWallet';
import { useMemo } from 'react';
import type { Address } from 'viem';

export const sortingTotalStakedDesc = (
  a: Stake | ContributorContractInfo,
  b: Stake | ContributorContractInfo,
  address?: Address
) => {
  const stakedA = address ? getTotalStakedAmountForAddress(a.contributors, address) : 0;
  const stakedB = address ? getTotalStakedAmountForAddress(b.contributors, address) : 0;
  return stakedB - stakedA;
};
const stakeStateSortOrder = {
  [STAKE_STATE.DECOMMISSIONED]: 1,
  [STAKE_STATE.AWAITING_EXIT]: 2,
  [STAKE_STATE.RUNNING]: 3,
  [STAKE_STATE.DEREGISTERED]: 4,
  [STAKE_STATE.EXITED]: 5,
  [STAKE_STATE.UNKNOWN]: 6,
} as const;
const contractStateSortOrderIfOperator = {
  [CONTRIBUTION_CONTRACT_STATUS.WaitForFinalized]: 1,
  [CONTRIBUTION_CONTRACT_STATUS.WaitForOperatorContrib]: 2,
  [CONTRIBUTION_CONTRACT_STATUS.OpenForPublicContrib]: 3,
  [CONTRIBUTION_CONTRACT_STATUS.Finalized]: 4,
};

/**
 * Stakes are sorted by {@link stakeStateSortOrder} ascending
 * then by the amount staked by the connected wallet descending
 * then by the operator fee ascending
 *
 * NOTE: If both stakes are {@link STAKE_STATE.DECOMMISSIONED} then they are sorted by earned_downtime_blocks ascending
 * NOTE: If both stakes are {@link STAKE_STATE.AWAITING_EXIT} then they are sorted by requested_unlock_height ascending
 */
export function sortStakes(a: Stake, b: Stake, address?: Address, blockHeight = 0) {
  const stateA = parseStakeState(a, blockHeight);
  const stateB = parseStakeState(b, blockHeight);

  let priorityA = stakeStateSortOrder[stateA] ?? 999;
  let priorityB = stakeStateSortOrder[stateB] ?? 999;

  if (isStakeRequestingExit(a) && stateA !== STAKE_STATE.DEREGISTERED) {
    priorityA = stakeStateSortOrder[STAKE_STATE.AWAITING_EXIT] + 0.1;
  }

  if (isStakeRequestingExit(b) && stateB !== STAKE_STATE.DEREGISTERED) {
    priorityB = stakeStateSortOrder[STAKE_STATE.AWAITING_EXIT] + 0.1;
  }

  if (priorityA !== priorityB) {
    // Priority ascending
    return priorityA - priorityB;
  }

  // NOTE: By definition, if the priorities are the same the state is the same

  if (stateA === STAKE_STATE.DECOMMISSIONED || stateB === STAKE_STATE.DECOMMISSIONED) {
    // earned_downtime_blocks ascending
    return (
      (a.earned_downtime_blocks ?? Number.POSITIVE_INFINITY) -
      (b.earned_downtime_blocks ?? Number.POSITIVE_INFINITY)
    );
  }

  if (isStakeRequestingExit(a) || isStakeRequestingExit(b)) {
    // requested_unlock_height ascending
    return (
      (a.requested_unlock_height ?? Number.POSITIVE_INFINITY) -
      (b.requested_unlock_height ?? Number.POSITIVE_INFINITY)
    );
  }

  const stakeSort = sortingTotalStakedDesc(a, b, address);
  if (stakeSort) return stakeSort;

  // operator_fee ascending
  return (a.operator_fee ?? 0) - (b.operator_fee ?? 0);
}

/**
 * If the connected wallet is the contract operator, then the contracts are sorted by {@link contractStateSortOrderIfOperator}
 *
 * If the state is the same OR the connected wallet isn't the contract operator, then the contract are sorted by the total staked amount descending
 * then by the operator fee ascending
 */
export function sortContracts(
  a: ContributorContractInfo,
  b: ContributorContractInfo,
  address: Address
) {
  const operatorA = areHexesEqual(a.operator_address, address);
  const operatorB = areHexesEqual(b.operator_address, address);

  const priorityA = operatorA ? (contractStateSortOrderIfOperator[a.status] ?? 999) : 999;
  const priorityB = operatorB ? (contractStateSortOrderIfOperator[b.status] ?? 999) : 999;

  if (priorityA !== priorityB) {
    // Priority ascending
    return priorityA - priorityB;
  }

  const stakeSort = sortingTotalStakedDesc(a, b, address);
  if (stakeSort !== 0) {
    return stakeSort;
  }
  // fee ascending
  return (a.fee ?? 0) - (b.fee ?? 0);
}

export function useStakes(overrideAddress?: Address) {
  const { address: connectedAddress } = useWallet();
  const address = overrideAddress ?? connectedAddress;

  const enabled = !!address;

  const { data, isLoading, isFetching, refetch, isError, status } =
    useStakingBackendQueryWithParams(
      getStakedNodes,
      {
        address: address!,
      },
      { enabled }
    );

  const [stakes, contracts, addedBlsKeys, blockHeight, networkTime, network] = useMemo(() => {
    if (!address || !data) return [[], [], null, null, null];
    const stakesArr = 'stakes' in data && Array.isArray(data.stakes) ? data.stakes : [];
    const contractsArr = 'contracts' in data && Array.isArray(data.contracts) ? data.contracts : [];

    const net = 'network' in data && data.network ? data.network : null;

    const blockHeight =
      net && 'block_height' in net && net.block_height ? data.network.block_height : 0;

    const networkTime =
      net && 'block_timestamp' in net && net.block_timestamp ? data.network.block_timestamp : 0;

    const blsKeysObject =
      'added_bls_keys' in data && typeof data.added_bls_keys === 'object'
        ? data.added_bls_keys
        : {};

    const addedBlsKeysSet = new Set(Object.keys(blsKeysObject));

    const limitAgeJoiningTimestamp = Date.now() - CONTRIBUTION_CONTRACT.MAX_AGE_JOINING_MS;

    const addedAwaitingOperatorContracts = new Set();

    const filteredContracts = contractsArr.filter(({ pubkey_bls, node_add_timestamp, status }) => {
      switch (status) {
        case CONTRIBUTION_CONTRACT_STATUS.Finalized:
          /**
           * Should only include the finalised contracts with a recent `node_add_timestamp`.
           * If a contract is finalised and has a non-null `node_add_timestamp` it is related
           * to a node that is in the added list. Once that node exits the network, this value
           * will be null again. So a finalised contract with a null `node_add_timestamp`
           * relates to a node that once joined the network but has since exited.
           */
          return node_add_timestamp && node_add_timestamp * 1000 > limitAgeJoiningTimestamp;

        case CONTRIBUTION_CONTRACT_STATUS.WaitForOperatorContrib:
          /**
           * Only include one awaiting operator contract per bls key. This will should probably be
           * the latest created contract based on database insert order on the backend.
           */
          if (
            !addedBlsKeysSet.has(pubkey_bls.slice(2)) &&
            !addedAwaitingOperatorContracts.has(pubkey_bls)
          ) {
            addedAwaitingOperatorContracts.add(pubkey_bls);
            return true;
          }
          return false;

        default:
          return !addedBlsKeysSet.has(pubkey_bls.slice(2));
      }
    });

    stakesArr.sort((a, b) => sortStakes(a, b, address, blockHeight));
    filteredContracts.sort((a, b) => sortContracts(a, b, address));

    return [stakesArr, filteredContracts, addedBlsKeysSet, blockHeight, networkTime, net];
  }, [data, address]);

  return {
    stakes,
    contracts,
    addedBlsKeys,
    network,
    blockHeight,
    networkTime,
    refetch,
    isLoading,
    isFetching,
    isError,
    status,
    enabled,
  };
}
