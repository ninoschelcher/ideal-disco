"use client";

import { useState } from "react";

import { type Cta, CtaButton } from "@/components/CtaButton";
import { NavLink } from "@/components/NavLink";

type MobileMenuProps = {
  links: readonly Cta[];
  cta: Cta;
};

export function MobileMenu({ links, cta }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
        className="flex size-12 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-line-strong text-ink"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>
      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Hoofdmenu"
          className="absolute inset-x-0 top-full z-10 flex flex-col border-b border-line bg-cream-soft px-5 pt-2 pb-6"
        >
          <div className="flex flex-col">
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={close}
                className="flex min-h-13 items-center border-b border-line font-display text-[1.625rem] text-ink no-underline last:border-b-0"
                activeClassName="text-terracotta"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <CtaButton link={cta} onClick={close} className="mt-4" />
        </nav>
      ) : null}
    </div>
  );
}
