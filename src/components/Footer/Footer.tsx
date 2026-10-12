import Image from "next/image";
import Link from "next/link";

import { sunImage } from "@/lib/brand-images";
import { getFooter } from "@/lib/content";

export async function Footer() {
  const { name, kvk, links } = await getFooter();

  return (
    <footer className="bg-ink py-10 text-[0.875rem] text-on-dark md:py-12 md:text-[0.9375rem]">
      <div className="mx-auto flex w-full max-w-site flex-col gap-4 px-5 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-3">
          <Image src={sunImage} alt="" className="size-9 md:size-10" />
          <span className="font-display text-[1.375rem] text-gold md:text-2xl">{name}</span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {kvk ? <span>KvK {kvk}</span> : null}
          {links.length ? (
            <nav aria-label="Footer" className="contents">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="text-gold hover:text-marigold">
                  {link.label}
                </Link>
              ))}
            </nav>
          ) : null}
          <span>
            © {new Date().getFullYear()} {name}
          </span>
        </div>
      </div>
    </footer>
  );
}
