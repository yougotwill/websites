'use client';

import {
  getVariableFontSizeForLargeModule,
  ModuleDynamicQueryText,
} from '@/components/ModuleDynamic';
import type { Stake } from '@session/sent-staking-js/client';
import { Module, ModuleTitle } from '@session/ui/components/Module';
import { useWallet } from '@session/wallet/hooks/useWallet';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import type { Address } from 'viem';
import { useStakingBackendQueryWithParams } from '@/lib/sent-staking-backend-client';
import { getStakedNodes } from '@/lib/queries/getStakedNodes';
import type { QUERY_STATUS } from '@/lib/query';
import { formatSENTBigInt } from '@session/contracts/hooks/SENT';
import { FEATURE_FLAG } from '@/lib/feature-flags';
import { useFeatureFlag } from '@/lib/feature-flags-client';

const getTotalStakedAmount = ({ stakes }: { stakes: Array<Stake> }) =>
  formatSENTBigInt(
    stakes.reduce((acc, stake) => {
      const stakedBalance = stake.staked_balance ?? BigInt(0);
      return typeof stakedBalance !== 'bigint' ? acc + BigInt(stakedBalance) : acc + stakedBalance;
    }, BigInt(0))
  );

function useTotalStakedAmount(params?: { addressOverride?: Address }) {
  const showMockNodes = useFeatureFlag(FEATURE_FLAG.MOCK_STAKED_NODES);
  const showNoNodes = useFeatureFlag(FEATURE_FLAG.MOCK_NO_STAKED_NODES);

  if (showMockNodes && showNoNodes) {
    console.error('Cannot show mock nodes and no nodes at the same time');
  }

  const { address: connectedAddress } = useWallet();
  const address = useMemo(
    () => params?.addressOverride ?? connectedAddress,
    [params?.addressOverride, connectedAddress]
  );

  const enabled = !!address;

  const { data, refetch, status } = useStakingBackendQueryWithParams(
    getStakedNodes,
    {
      address: address!,
    },
    { enabled }
  );

  const stakes = useMemo(() => {
    if (!address || showNoNodes) {
      return [];
    } else if (showMockNodes) {
      return [];
    }
    if (data && 'stakes' in data && Array.isArray(data.stakes)) {
      return data.stakes;
    }
    return [];
  }, [data, showMockNodes, showNoNodes]);

  const totalStakedAmount = useMemo(
    () => (stakes ? getTotalStakedAmount({ stakes }) : null),
    [stakes]
  );

  return { totalStakedAmount, status, refetch, enabled };
}

export default function BalanceModule({ addressOverride }: { addressOverride?: Address }) {
  const { totalStakedAmount, status, refetch, enabled } = useTotalStakedAmount({ addressOverride });
  const dictionary = useTranslations('modules.balance');
  const toastDictionary = useTranslations('modules.toast');
  const titleFormat = useTranslations('modules.title');
  const title = dictionary('title');

  return (
    <Module size="lg" variant="hero">
      <ModuleTitle>{titleFormat('format', { title })}</ModuleTitle>
      <ModuleDynamicQueryText
        status={status as QUERY_STATUS}
        enabled={enabled}
        fallback={0}
        errorToast={{
          messages: {
            error: toastDictionary('error', { module: title }),
            refetching: toastDictionary('refetching'),
            success: toastDictionary('refetchSuccess', { module: title }),
          },
          refetch,
        }}
        style={{
          fontSize: getVariableFontSizeForLargeModule(totalStakedAmount?.length ?? 6),
        }}
      >
        {totalStakedAmount}
      </ModuleDynamicQueryText>
    </Module>
  );
}
