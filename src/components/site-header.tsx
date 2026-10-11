import Link from "next/link";

import { getPages } from "@/lib/content";

export async function SiteHeader() {
  const pages = await getPages();

  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Ideal Disco
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          {pages.map((page) => (
            <Link
              key={page.slug}
              href={`/${page.slug}`}
              className="hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              {page.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
