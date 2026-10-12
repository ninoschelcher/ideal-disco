"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

import { cx } from "@/lib/cx";

type NavLinkProps = ComponentProps<typeof Link> & {
  href: string;
  /** Classes added when the link points at the current page. */
  activeClassName?: string;
};

/**
 * A menu link that marks itself as the current page. Links to a section
 * (/#tarieven) are never "current": they point within a page.
 */
export function NavLink({ href, className, activeClassName, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const isCurrent = !href.includes("#") && href === pathname;

  return (
    <Link
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      className={cx(className, isCurrent && activeClassName)}
      {...props}
    />
  );
}
