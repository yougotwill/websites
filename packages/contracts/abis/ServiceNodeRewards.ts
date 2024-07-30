// This file is generated by the generate-abis script. Do not modify it manually.

/**
 * Generated ABI for the ServiceNodeRewards contract.
 */
export const ServiceNodeRewardsAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'AddressEmptyCode',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'AddressInsufficientBalance',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'serviceNodeID',
        type: 'uint64',
      },
    ],
    name: 'BLSPubkeyAlreadyExists',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'serviceNodeID',
        type: 'uint64',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'X',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Y',
            type: 'uint256',
          },
        ],
        internalType: 'struct BN256G1.G1Point',
        name: 'pubkey',
        type: 'tuple',
      },
    ],
    name: 'BLSPubkeyDoesNotMatch',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'serviceNodeID',
        type: 'uint64',
      },
      {
        internalType: 'address',
        name: 'contributor',
        type: 'address',
      },
    ],
    name: 'CallerNotContributor',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ContractAlreadyStarted',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ContractNotStarted',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'required',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'provided',
        type: 'uint256',
      },
    ],
    name: 'ContributionTotalMismatch',
    type: 'error',
  },
  {
    inputs: [],
    name: 'DeleteSentinelNodeNotAllowed',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'serviceNodeID',
        type: 'uint64',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
    ],
    name: 'EarlierLeaveRequestMade',
    type: 'error',
  },
  {
    inputs: [],
    name: 'EnforcedPause',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ExpectedPause',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FailedInnerCall',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'contributor',
        type: 'address',
      },
    ],
    name: 'FirstContributorMismatch',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'numSigners',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'requiredSigners',
        type: 'uint256',
      },
    ],
    name: 'InsufficientBLSSignatures',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidBLSProofOfPossession',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidBLSSignature',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidInitialization',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'serviceNodeID',
        type: 'uint64',
      },
      {
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'currenttime',
        type: 'uint256',
      },
    ],
    name: 'LeaveRequestTooEarly',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MaxContributorsExceeded',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotInitializing',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NullRecipient',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'OwnableInvalidOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'OwnableUnauthorizedAccount',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'expectedRecipient',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'providedRecipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'serviceNodeID',
        type: 'uint256',
      },
    ],
    name: 'RecipientAddressDoesNotMatch',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RecipientRewardsTooLow',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'SafeERC20FailedOperation',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'serviceNodeID',
        type: 'uint64',
      },
    ],
    name: 'ServiceNodeDoesntExist',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'serviceNodeID',
        type: 'uint64',
      },
      {
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'currenttime',
        type: 'uint256',
      },
    ],
    name: 'SignatureExpired',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'serviceNodeID',
        type: 'uint64',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
    ],
    name: 'SmallContributorLeaveTooEarly',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newMax',
        type: 'uint256',
      },
    ],
    name: 'BLSNonSignerThresholdMaxUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint64',
        name: 'version',
        type: 'uint64',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint64',
        name: 'serviceNodeID',
        type: 'uint64',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'X',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Y',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct BN256G1.G1Point',
        name: 'pubkey',
        type: 'tuple',
      },
    ],
    name: 'NewSeededServiceNode',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint64',
        name: 'serviceNodeID',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'X',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Y',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct BN256G1.G1Point',
        name: 'pubkey',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'serviceNodePubkey',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'serviceNodeSignature1',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'serviceNodeSignature2',
            type: 'uint256',
          },
          {
            internalType: 'uint16',
            name: 'fee',
            type: 'uint16',
          },
        ],
        indexed: false,
        internalType: 'struct IServiceNodeRewards.ServiceNodeParams',
        name: 'serviceNode',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'stakedAmount',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct IServiceNodeRewards.Contributor[]',
        name: 'contributors',
        type: 'tuple[]',
      },
    ],
    name: 'NewServiceNode',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'recipientAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'previousBalance',
        type: 'uint256',
      },
    ],
    name: 'RewardsBalanceUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'recipientAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'RewardsClaimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint64',
        name: 'serviceNodeID',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'X',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Y',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct BN256G1.G1Point',
        name: 'pubkey',
        type: 'tuple',
      },
    ],
    name: 'ServiceNodeLiquidated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint64',
        name: 'serviceNodeID',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'returnedAmount',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'X',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Y',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct BN256G1.G1Point',
        name: 'pubkey',
        type: 'tuple',
      },
    ],
    name: 'ServiceNodeRemoval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint64',
        name: 'serviceNodeID',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'X',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Y',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct BN256G1.G1Point',
        name: 'pubkey',
        type: 'tuple',
      },
    ],
    name: 'ServiceNodeRemovalRequest',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newExpiry',
        type: 'uint256',
      },
    ],
    name: 'SignatureExpiryUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newRequirement',
        type: 'uint256',
      },
    ],
    name: 'StakingRequirementUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    inputs: [],
    name: 'LIST_SENTINEL',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_PERMITTED_PUBKEY_AGGREGATIONS_LOWER_BOUND',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_SERVICE_NODE_REMOVAL_WAIT_TIME',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'SMALL_CONTRIBUTOR_DIVISOR',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'SMALL_CONTRIBUTOR_LEAVE_DELAY',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_aggregatePubkey',
    outputs: [
      {
        internalType: 'uint256',
        name: 'X',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'Y',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_lastHeightPubkeyWasAggregated',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_numPubkeyAggregationsForHeight',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'X',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Y',
            type: 'uint256',
          },
        ],
        internalType: 'struct BN256G1.G1Point',
        name: 'blsPubkey',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'sigs0',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sigs1',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sigs2',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sigs3',
            type: 'uint256',
          },
        ],
        internalType: 'struct IServiceNodeRewards.BLSSignatureParams',
        name: 'blsSignature',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'serviceNodePubkey',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'serviceNodeSignature1',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'serviceNodeSignature2',
            type: 'uint256',
          },
          {
            internalType: 'uint16',
            name: 'fee',
            type: 'uint16',
          },
        ],
        internalType: 'struct IServiceNodeRewards.ServiceNodeParams',
        name: 'serviceNodeParams',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'stakedAmount',
            type: 'uint256',
          },
        ],
        internalType: 'struct IServiceNodeRewards.Contributor[]',
        name: 'contributors',
        type: 'tuple[]',
      },
    ],
    name: 'addBLSPublicKey',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'X',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Y',
            type: 'uint256',
          },
        ],
        internalType: 'struct BN256G1.G1Point',
        name: 'blsPubkey',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'sigs0',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sigs1',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sigs2',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sigs3',
            type: 'uint256',
          },
        ],
        internalType: 'struct IServiceNodeRewards.BLSSignatureParams',
        name: 'blsSignature',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'serviceNodePubkey',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'serviceNodeSignature1',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'serviceNodeSignature2',
            type: 'uint256',
          },
          {
            internalType: 'uint16',
            name: 'fee',
            type: 'uint16',
          },
        ],
        internalType: 'struct IServiceNodeRewards.ServiceNodeParams',
        name: 'serviceNodeParams',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'stakedAmount',
            type: 'uint256',
          },
        ],
        internalType: 'struct IServiceNodeRewards.Contributor[]',
        name: 'contributors',
        type: 'tuple[]',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'addBLSPublicKeyWithPermit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'aggregatePubkey',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'X',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Y',
            type: 'uint256',
          },
        ],
        internalType: 'struct BN256G1.G1Point',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'allServiceNodeIDs',
    outputs: [
      {
        internalType: 'uint64[]',
        name: 'ids',
        type: 'uint64[]',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'X',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Y',
            type: 'uint256',
          },
        ],
        internalType: 'struct BN256G1.G1Point[]',
        name: 'pubkeys',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'allServiceNodePubkeys',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'X',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Y',
            type: 'uint256',
          },
        ],
        internalType: 'struct BN256G1.G1Point[]',
        name: 'pubkeys',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'blsNonSignerThreshold',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'blsNonSignerThresholdMax',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'claimRewards',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'designatedToken',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'foundationPool',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'hashToG2Tag',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'foundationPool_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'stakingRequirement_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxContributors_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'liquidatorRewardRatio_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'poolShareOfLiquidationRatio_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'recipientRatio_',
        type: 'uint256',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'serviceNodeID',
        type: 'uint64',
      },
    ],
    name: 'initiateRemoveBLSPublicKey',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isStarted',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'X',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Y',
            type: 'uint256',
          },
        ],
        internalType: 'struct BN256G1.G1Point',
        name: 'blsPubkey',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'sigs0',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sigs1',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sigs2',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sigs3',
            type: 'uint256',
          },
        ],
        internalType: 'struct IServiceNodeRewards.BLSSignatureParams',
        name: 'blsSignature',
        type: 'tuple',
      },
      {
        internalType: 'uint64[]',
        name: 'ids',
        type: 'uint64[]',
      },
    ],
    name: 'liquidateBLSPublicKeyWithSignature',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'liquidateTag',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'liquidatorRewardRatio',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxContributors',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxPermittedPubkeyAggregations',
    outputs: [
      {
        internalType: 'uint256',
        name: 'result',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nextServiceNodeID',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pendingOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'poolShareOfLiquidationRatio',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proofOfPossessionTag',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'recipientRatio',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'recipients',
    outputs: [
      {
        internalType: 'uint256',
        name: 'rewards',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'claimed',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'removalTag',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'serviceNodeID',
        type: 'uint64',
      },
    ],
    name: 'removeBLSPublicKeyAfterWaitTime',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'X',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Y',
            type: 'uint256',
          },
        ],
        internalType: 'struct BN256G1.G1Point',
        name: 'blsPubkey',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'sigs0',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sigs1',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sigs2',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sigs3',
            type: 'uint256',
          },
        ],
        internalType: 'struct IServiceNodeRewards.BLSSignatureParams',
        name: 'blsSignature',
        type: 'tuple',
      },
      {
        internalType: 'uint64[]',
        name: 'ids',
        type: 'uint64[]',
      },
    ],
    name: 'removeBLSPublicKeyWithSignature',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rewardTag',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'X',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'Y',
                type: 'uint256',
              },
            ],
            internalType: 'struct BN256G1.G1Point',
            name: 'pubkey',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'addr',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'stakedAmount',
                type: 'uint256',
              },
            ],
            internalType: 'struct IServiceNodeRewards.Contributor[]',
            name: 'contributors',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct IServiceNodeRewards.SeedServiceNode[]',
        name: 'nodes',
        type: 'tuple[]',
      },
    ],
    name: 'seedPublicKeyList',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'blsPublicKey',
        type: 'bytes',
      },
    ],
    name: 'serviceNodeIDs',
    outputs: [
      {
        internalType: 'uint64',
        name: 'serviceNodeID',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'serviceNodeID',
        type: 'uint64',
      },
    ],
    name: 'serviceNodes',
    outputs: [
      {
        components: [
          {
            internalType: 'uint64',
            name: 'next',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'prev',
            type: 'uint64',
          },
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'X',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'Y',
                type: 'uint256',
              },
            ],
            internalType: 'struct BN256G1.G1Point',
            name: 'pubkey',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'addedTimestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'leaveRequestTimestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'deposit',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'addr',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'stakedAmount',
                type: 'uint256',
              },
            ],
            internalType: 'struct IServiceNodeRewards.Contributor[]',
            name: 'contributors',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct IServiceNodeRewards.ServiceNode',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'serviceNodesLength',
    outputs: [
      {
        internalType: 'uint256',
        name: 'count',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newMax',
        type: 'uint256',
      },
    ],
    name: 'setBLSNonSignerThresholdMax',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newExpiry',
        type: 'uint256',
      },
    ],
    name: 'setSignatureExpiry',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newRequirement',
        type: 'uint256',
      },
    ],
    name: 'setStakingRequirement',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'signatureExpiry',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakingRequirement',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'start',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalNodes',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipientAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'recipientRewards',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'sigs0',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sigs1',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sigs2',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sigs3',
            type: 'uint256',
          },
        ],
        internalType: 'struct IServiceNodeRewards.BLSSignatureParams',
        name: 'blsSignature',
        type: 'tuple',
      },
      {
        internalType: 'uint64[]',
        name: 'ids',
        type: 'uint64[]',
      },
    ],
    name: 'updateRewardsBalance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'updateServiceNodesLength',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
