// This file is generated by the generate-abis script. Do not modify it manually.

/**
 * Generated ABI for the ServiceNodeContributionFactory contract.
 */
export const ServiceNodeContributionFactoryAbi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_stakingRewardsContract",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "contributorContract",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "serviceNodePubkey",
        "type": "uint256"
      }
    ],
    "name": "NewServiceNodeContributionContract",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "SENT",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "X",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "Y",
            "type": "uint256"
          }
        ],
        "internalType": "struct BN256G1.G1Point",
        "name": "blsPubkey",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "serviceNodePubkey",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "serviceNodeSignature1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "serviceNodeSignature2",
            "type": "uint256"
          },
          {
            "internalType": "uint16",
            "name": "fee",
            "type": "uint16"
          }
        ],
        "internalType": "struct IServiceNodeRewards.ServiceNodeParams",
        "name": "serviceNodeParams",
        "type": "tuple"
      }
    ],
    "name": "deployContributionContract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxContributors",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "stakingRewardsContract",
    "outputs": [
      {
        "internalType": "contract IServiceNodeRewards",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;