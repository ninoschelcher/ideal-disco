import type { Metadata } from "next";

import { MarkdocContent } from "@/components/markdoc-content";
import { getHome } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const home = await getHome();

  return {
    title: { absolute: home.title },
    description: home.description,
  };
}

export default async function HomePage() {
  const home = await getHome();

  return (
    <article className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">{home.title}</h1>
        {home.description ? (
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {home.description}
          </p>
        ) : null}
      </header>
      <MarkdocContent content={home.content} />
    </article>
  );
}
