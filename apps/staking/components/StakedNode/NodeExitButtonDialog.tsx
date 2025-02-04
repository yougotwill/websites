import NodeActionModuleInfo from '@/components/StakedNode/NodeActionModuleInfo';
import { NodeExitButton } from '@/components/StakedNode/NodeExitButton';
import useExitNode from '@/hooks/useExitNode';
import { SOCIALS } from '@/lib/constants';
import { REMOTE_FEATURE_FLAG } from '@/lib/feature-flags';
import { useRemoteFeatureFlagQuery } from '@/lib/feature-flags-client';
import { getNodeExitSignatures } from '@/lib/queries/getNodeExitSignatures';
import { useStakingBackendQueryWithParams } from '@/lib/staking-api-client';
import { ButtonDataTestId } from '@/testing/data-test-ids';
import type { Stake } from '@session/staking-api-js/client';
import { Social } from '@session/ui/components/SocialLinkList';
import { Loading } from '@session/ui/components/loading';
import { Progress, PROGRESS_STATUS } from '@session/ui/motion/progress';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from '@session/ui/ui/alert-dialog';
import { Button } from '@session/ui/ui/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { type ReactNode, useMemo } from 'react';
import { ErrorMessage } from '@/components/ErrorMessage';

export function NodeExitButtonDialog({ node }: { node: Stake }) {
  const dictionary = useTranslations('nodeCard.staked.exit');
  const { enabled: isNodeExitDisabled, isLoading: isRemoteFlagLoading } = useRemoteFeatureFlagQuery(
    REMOTE_FEATURE_FLAG.DISABLE_NODE_EXIT
  );

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <NodeExitButton />
      </AlertDialogTrigger>
      <AlertDialogContent dialogTitle={dictionary('dialog.title')} className="text-center">
        {isRemoteFlagLoading ? (
          <Loading />
        ) : isNodeExitDisabled ? (
          <NodeExitDisabled />
        ) : (
          <NodeExitDialog node={node} />
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}

function NodeExitDisabled() {
  const dictionary = useTranslations('nodeCard.staked.exit');
  return (
    <p>
      {dictionary.rich('disabledInfo', {
        link: (children: ReactNode) => (
          <Link
            className="text-session-green font-medium underline"
            href={SOCIALS[Social.Discord].link}
            referrerPolicy="no-referrer"
            target="_blank"
          >
            {children}
          </Link>
        ),
      })}
    </p>
  );
}

function NodeExitDialog({ node }: { node: Stake }) {
  const dictionary = useTranslations('nodeCard.staked.exit');
  const { data, isLoading, isError, isSuccess, refetch } = useStakingBackendQueryWithParams(
    getNodeExitSignatures,
    { nodePubKey: node.service_node_pubkey }
  );

  const [blsPubKey, timestamp, blsSignature, excludedSigners] = useMemo(() => {
    if (!data || !('result' in data) || !data.result)
      return [undefined, undefined, undefined, undefined];
    const { bls_pubkey, timestamp, signature, non_signer_indices } = data.result;

    return [bls_pubkey, timestamp, signature, non_signer_indices.map(BigInt)];
  }, [data]);

  return (
    <>
      {isSuccess && blsPubKey && timestamp && blsSignature && excludedSigners ? (
        <NodeExitContractWriteDialog
          node={node}
          blsPubKey={blsPubKey}
          timestamp={timestamp}
          blsSignature={blsSignature}
          excludedSigners={excludedSigners}
        />
      ) : isLoading ? (
        <Loading />
      ) : isError ? (
        <ErrorMessage
          refetch={refetch}
          message={dictionary.rich('error')}
          buttonText={dictionary('errorButton')}
          buttonDataTestId={ButtonDataTestId.Exit_Node_Error_Retry}
        />
      ) : null}
    </>
  );
}

function NodeExitContractWriteDialog({
  node,
  blsPubKey,
  timestamp,
  blsSignature,
  excludedSigners,
}: {
  node: Stake;
  blsPubKey: string;
  timestamp: number;
  blsSignature: string;
  excludedSigners?: Array<bigint>;
}) {
  const dictionary = useTranslations('nodeCard.staked.exit.dialog');
  const stageDictKey = 'nodeCard.staked.exit.stage' as const;
  const dictionaryStage = useTranslations(stageDictKey);

  const removeBlsPublicKeyWithSignatureArgs = useMemo(
    () => ({
      blsPubKey,
      timestamp,
      blsSignature,
      excludedSigners,
    }),
    [blsPubKey, timestamp, blsSignature, excludedSigners]
  );

  const {
    removeBLSPublicKeyWithSignature,
    fee,
    gasAmount,
    gasPrice,
    simulateEnabled,
    resetContract,
    status,
    errorMessage,
  } = useExitNode(removeBlsPublicKeyWithSignatureArgs);

  const handleClick = () => {
    if (simulateEnabled) {
      resetContract();
    }
    removeBLSPublicKeyWithSignature();
  };

  const isDisabled = !blsPubKey || !timestamp || !blsSignature;

  return (
    <>
      <NodeActionModuleInfo node={node} fee={fee} gasAmount={gasAmount} gasPrice={gasPrice} />
      <AlertDialogFooter className="mt-4 flex flex-col gap-8 sm:flex-col">
        <Button
          variant="destructive"
          rounded="md"
          size="lg"
          aria-label={dictionary('buttons.submitAria')}
          className="w-full"
          data-testid={ButtonDataTestId.Staked_Node_Exit_Dialog_Submit}
          disabled={isDisabled || simulateEnabled}
          onClick={handleClick}
        >
          {dictionary('buttons.submit')}
        </Button>
        {simulateEnabled ? (
          <Progress
            steps={[
              {
                text: {
                  [PROGRESS_STATUS.IDLE]: dictionaryStage('arbitrum.idle'),
                  [PROGRESS_STATUS.PENDING]: dictionaryStage('arbitrum.pending'),
                  [PROGRESS_STATUS.SUCCESS]: dictionaryStage('arbitrum.success'),
                  [PROGRESS_STATUS.ERROR]: errorMessage,
                },
                status,
              },
              {
                text: {
                  [PROGRESS_STATUS.IDLE]: dictionaryStage('network.idle'),
                  [PROGRESS_STATUS.PENDING]: dictionaryStage('network.pending'),
                  [PROGRESS_STATUS.SUCCESS]: dictionaryStage('network.success'),
                  [PROGRESS_STATUS.ERROR]: errorMessage,
                },
                status:
                  status === PROGRESS_STATUS.SUCCESS
                    ? PROGRESS_STATUS.SUCCESS
                    : PROGRESS_STATUS.IDLE,
              },
            ]}
          />
        ) : null}
      </AlertDialogFooter>
    </>
  );
}
