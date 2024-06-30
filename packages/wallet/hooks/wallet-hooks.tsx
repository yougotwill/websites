import { SENT_DECIMALS, SENT_SYMBOL, addresses } from '@session/contracts';
import { CHAIN, chains } from '@session/contracts/chains';
import { useEns } from '@session/contracts/hooks/ens';
import { useMemo, useState } from 'react';
import { createWalletClient, custom, formatEther, type Address } from 'viem';
import { useAccount, useBalance, useConfig } from 'wagmi';
import { switchChain as switchChainWagmi } from 'wagmi/actions';
import { getEthereumWindowProvider } from '../lib/eth';
import { useArbName } from './arb';

/**
 * The status of a wallet.
 */
export enum WALLET_STATUS {
  /** The wallet is connecting. */
  CONNECTING = 'connecting',
  /** The wallet is reconnecting. */
  RECONNECTING = 'reconnecting',
  /** The wallet is connected. */
  CONNECTED = 'connected',
  /** The wallet is disconnected. */
  DISCONNECTED = 'disconnected',
}

/**
 * Parses the wallet connection status based on the provided flags.
 *
 * @returns The wallet connection status.
 */
const parseWalletStatus = ({
  isConnecting,
  isDisconnected,
  isConnected,
  isReconnecting,
}: {
  isConnecting: boolean;
  isDisconnected: boolean;
  isConnected: boolean;
  isReconnecting: boolean;
}): WALLET_STATUS => {
  if (isConnecting) return WALLET_STATUS.CONNECTING;
  if (isReconnecting) return WALLET_STATUS.RECONNECTING;
  if (isConnected) return WALLET_STATUS.CONNECTED;
  if (isDisconnected) return WALLET_STATUS.DISCONNECTED;
  return WALLET_STATUS.DISCONNECTED;
};

type UseWalletType = {
  /** The address of the wallet. */
  address?: Address;
  /** The ENS name of the wallet. */
  ensName?: string | null;
  /** The ENS avatar of the wallet. */
  ensAvatar?: string | null;
  /** The .arb name of the wallet. */
  arbName?: string | null;
  /** The balance of the wallet. */
  ethBalance?: string | null;
  /** The status of the wallet. */
  status: WALLET_STATUS;
  /** Whether the wallet is connected. */
  isConnected: boolean;
};

export function useWallet(): UseWalletType {
  const { address, isConnected, isConnecting, isDisconnected, isReconnecting } = useAccount();
  const { data: ethBalanceData } = useBalance({
    address,
    query: { enabled: isConnected },
  });
  const { ensName, ensAvatar } = useEns({
    address,
    enabled: isConnected,
  });

  const { arbName } = useArbName({ address });

  const ethBalance = useMemo(
    () => (ethBalanceData ? formatEther(ethBalanceData?.value) : null),
    [ethBalanceData]
  );

  const status = useMemo(
    () => parseWalletStatus({ isConnected, isConnecting, isDisconnected, isReconnecting }),
    [isConnected, isConnecting, isDisconnected, isReconnecting]
  );

  return { address, ensName, ensAvatar, arbName, status, isConnected, ethBalance };
}

export function useWalletChain() {
  const { chainId } = useAccount();
  const config = useConfig();

  const chain = useMemo(() => {
    if (!chainId) return null;

    //find the key where the value.id is equal to chainId

    const validChain = Object.keys(chains).find((key) => chains[key as CHAIN].id === chainId) as
      | CHAIN
      | undefined;
    if (!validChain) return null;

    return validChain;
  }, [chainId]);

  const switchChain = async (targetChain: CHAIN) =>
    switchChainWagmi(config, {
      chainId: chains[targetChain].id,
    });

  return { chain, switchChain };
}

export function useAddSessionTokenToWallet() {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { chain } = useWalletChain();

  const addToken = async () => {
    setIsPending(true);
    setIsSuccess(false);
    try {
      if (!chain || (chain !== CHAIN.MAINNET && chain !== CHAIN.TESTNET)) {
        throw new Error('Invalid chain');
      }

      const ethereumProvider = getEthereumWindowProvider();
      if (!ethereumProvider) {
        throw new Error('No ethereum provider detected in window object');
      }

      const walletClient = createWalletClient({
        chain: chains[chain],
        transport: custom(ethereumProvider),
      });

      const wasAdded = await walletClient.watchAsset({
        type: 'ERC20',
        options: {
          // The address of the token.
          address: addresses.SENT[chain],
          // A ticker symbol or shorthand, up to 5 characters.
          symbol: SENT_SYMBOL.replaceAll('$', ''),
          // The number of decimals in the token.
          decimals: SENT_DECIMALS,
          // A string URL of the token logo.
          image: '/images/icon.png',
        },
      });

      if (!wasAdded) {
        throw new Error('Failed to add token');
      }

      setIsSuccess(true);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Failed to add token');
      }
    } finally {
      setIsPending(false);
    }
  };
  return { addToken, error, isPending, isSuccess };
}

export function useAddChain() {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const addChain = async (chain: CHAIN) => {
    setIsPending(true);
    setIsSuccess(false);
    try {
      const ethereumProvider = getEthereumWindowProvider();
      if (!ethereumProvider) {
        throw new Error('No ethereum provider detected in window object');
      }

      const walletClient = createWalletClient({
        chain: chains[chain],
        transport: custom(ethereumProvider),
      });

      await walletClient.addChain({ chain: chains[chain] });

      setIsSuccess(true);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Failed to add chain');
      }
    } finally {
      setIsPending(false);
    }
  };
  return { addChain, error, isPending, isSuccess };
}
