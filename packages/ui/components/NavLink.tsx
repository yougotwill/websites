'use client';

import Link from 'next/link';
import { cn } from '../lib/utils';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

/** TODO: This was copied from the staking portal, investigate if we can turn it into a shared library */

export const navlinkVariants = cva(
  'hover:text-session-text-black hover:border-b-session-green border-b-2 border-b-transparent w-max',
  {
    variants: {
      active: {
        true: 'text-session-text-black border-b-session-green',
        false: '',
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

export type NavlinkVariantProps = VariantProps<typeof navlinkVariants>;

export type NavLinkProps = NavlinkVariantProps & {
  href: string;
  label?: string;
  children?: ReactNode;
  ariaLabel?: string;
  className?: string;
  unStyled?: boolean;
  htmlFor?: string;
  hideActiveIndicator?: boolean;
};

/**
 * Returns true of a href is to an external link
 * @param href the link
 */
export function isExternalLink(href: string): boolean {
  if (href.startsWith('http://')) {
    throw new Error(`http links are forbidden, use https. Link: ${href}`);
  }
  return href.startsWith('https://');
}

export function NavLink({
  href,
  label,
  children,
  ariaLabel,
  className,
  unStyled,
  hideActiveIndicator,
}: NavLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        !unStyled
          ? navlinkVariants({
              active:
                !hideActiveIndicator && href.length > 1
                  ? pathname.startsWith(href)
                  : pathname === href,
              className,
            })
          : className
      )}
      aria-label={ariaLabel}
      {...(isExternalLink(href)
        ? {
            target: '_blank',
            referrerPolicy: 'no-referrer',
          }
        : {})}
    >
      {children ?? label}
    </Link>
  );
}
