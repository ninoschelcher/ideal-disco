import Link from "next/link";

import { MobileMenu } from "@/components/MobileMenu";
import { Logo } from "@/components/ui/Logo";
import { getPages } from "@/lib/content";

export async function Header() {
  const pages = await getPages();
  const links = pages.map((page) => ({
    href: `/${page.slug}`,
    label: page.title,
  }));

  return (
    <header className="relative border-b border-line">
      <div className="mx-auto flex w-full max-w-site items-center justify-between gap-8 px-5 py-3 md:px-6 md:py-5">
        <Logo />
        <nav
          aria-label="Hoofdmenu"
          className="hidden flex-wrap items-center gap-x-7 gap-y-2 text-[0.9375rem] font-medium md:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink no-underline hover:text-terracotta"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <MobileMenu links={links} />
      </div>
    </header>
  );
}
