import { CtaButton } from "@/components/CtaButton";
import { MobileMenu } from "@/components/MobileMenu";
import { NavLink } from "@/components/NavLink";
import { Logo } from "@/components/ui/Logo";
import { getHeader } from "@/lib/content";

export async function Header() {
  const { links, cta } = await getHeader();

  return (
    <header className="relative border-b border-line">
      <div className="mx-auto flex w-full max-w-site items-center justify-between gap-8 px-5 py-3 md:px-6 md:py-5">
        <Logo />
        <nav
          aria-label="Hoofdmenu"
          className="hidden flex-wrap items-center justify-end gap-x-7 gap-y-2 text-[0.9375rem] font-medium md:flex"
        >
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              className="text-ink no-underline hover:text-terracotta"
              activeClassName="text-terracotta underline underline-offset-[6px]"
            >
              {link.label}
            </NavLink>
          ))}
          <CtaButton link={cta} className="min-h-11 px-5.5 font-medium" />
        </nav>
        <MobileMenu links={links} cta={cta} />
      </div>
    </header>
  );
}
