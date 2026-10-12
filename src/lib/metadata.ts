import type { Metadata } from "next";

type MetadataSource = {
  title: string;
  description: string;
  /** The Keystatic "SEO" group; empty fields fall back to title/description. */
  seo: { title: string; description: string };
};

/**
 * Page metadata from CMS content. A custom SEO title is used as-is; the page
 * title gets the " | Oradoro" template, except on Home (`absolute`).
 */
export function cmsMetadata(
  { title, description, seo }: MetadataSource,
  { absolute = false }: { absolute?: boolean } = {},
): Metadata {
  const metaTitle = seo.title || title;
  const metaDescription = seo.description || description || undefined;

  return {
    title: seo.title || absolute ? { absolute: metaTitle } : metaTitle,
    description: metaDescription,
    openGraph: { title: metaTitle, description: metaDescription },
  };
}
