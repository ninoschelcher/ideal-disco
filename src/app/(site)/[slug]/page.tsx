import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPage, getPages } from "@/lib/content";
import { PageBody } from "@/sections/PageBody";

export const dynamicParams = false;

export default async function CmsPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) {
    notFound();
  }

  return <PageBody {...page} />;
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
