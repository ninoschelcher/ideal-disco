import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MarkdocContent } from "@/components/markdoc-content";
import { getPage, getPages } from "@/lib/content";

export const dynamicParams = false;

export default async function CmsPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <article className="space-y-6">
      <header className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Page
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">{page.title}</h1>
        {page.description ? (
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {page.description}
          </p>
        ) : null}
      </header>
      <MarkdocContent content={page.content} />
    </article>
  );
}

export async function generateStaticParams() {
  const pages = await getPages();

  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) {
    return { title: "Not found" };
  }

  return {
    title: page.title,
    description: page.description,
  };
}
