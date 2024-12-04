'use client';
import { useQuery } from '@tanstack/react-query';
import { toast } from '@session/ui/lib/toast';
import { PubKey } from '@session/ui/components/PubKey';
import { formatNumber, formatPercentage } from '@/lib/locale-client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@session/ui/ui/table';
import Typography from '@session/ui/components/Typography';
import { useWallet } from '@session/wallet/hooks/wallet-hooks';
import { areHexesEqual } from '@session/util-crypto/string';
import Link from 'next/link';
import { Loading } from '@session/ui/components/loading';

// TODO: Delete route after testnet incentive program is over

function smartFormatPercentage(decimalPercent: number) {
  const maximumFractionDigits = decimalPercent > 0.0001 ? 4 : 6;
  return formatPercentage(decimalPercent, { maximumFractionDigits });
}

export default function PointsPage() {
  const { address } = useWallet();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['points'],
    queryFn: async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_POINTS_PROGRAM_API!);

      if (!res.ok) {
        toast.error('Failed to fetch points');
      }

      const data = await res.json();

      return (
        Object.entries(data.wallets) as Array<
          [
            string,
            {
              score: number;
              percent: number;
            },
          ]
        >
      ).sort((a, b) => b[1].score - a[1].score);
    },
  });

  return (
    <div className="mt-10 flex flex-col items-center gap-4">
      <div className="flex max-w-xl flex-col items-center gap-4 text-center">
        <Typography variant="h1">Testnet Leaderboard</Typography>
        <Typography variant="p">
          Track the top-performing wallets in the{' '}
          <Link
            target="_blank"
            href="https://token.getsession.org/testnet-incentive-program"
            className="text-session-green underline"
          >
            Session Testnet Incentive Program
          </Link>
          . Rankings are based on total points earned through running and staking to nodes.
        </Typography>
      </div>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <span>Something went wrong</span>
      ) : (
        <Table className="w-max max-w-xl">
          <TableHeader>
            <TableRow>
              <TableHead>Wallet Address</TableHead>
              <TableHead>Points</TableHead>
              <TableHead className="text-right">Percent</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map(([wallet, { score, percent }]) => (
              <TableRow
                key={wallet}
                className={
                  areHexesEqual(wallet, address)
                    ? 'bg-session-green text-session-black hover:bg-session-green-dark'
                    : 'hover:bg-session-green hover:text-session-black'
                }
              >
                <TableCell>
                  <PubKey pubKey={wallet} />
                </TableCell>
                <TableCell>{formatNumber(score)}</TableCell>
                <TableCell className="text-right">
                  {smartFormatPercentage(percent / 10000)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
