import Markdoc, { type Node } from "@markdoc/markdoc";
import { createReader } from "@keystatic/core/reader";

import keystaticConfig from "../../keystatic.config";

function getReader() {
  return createReader(process.cwd(), keystaticConfig);
}

async function renderContent(content: () => Promise<{ node: unknown }>) {
  // Keystatic bundles its own copy of Markdoc, so its Node type doesn't line
  // up with ours even though the runtime shape is the same.
  const node = (await content()).node as Node;
  const errors = Markdoc.validate(node);

  if (errors.length) {
    throw new Error(errors.map((error) => error.error.message).join("\n"));
  }

  return Markdoc.transform(node);
}

export async function getHome() {
  const reader = getReader();
  const home = await reader.singletons.home.readOrThrow();

  return {
    title: home.title,
    description: home.description,
    content: await renderContent(home.content),
  };
}

export async function getPages() {
  const reader = getReader();
  const pages = await reader.collections.pages.all();

  return pages.map(({ slug, entry }) => ({
    slug,
    title: entry.title,
    description: entry.description,
  }));
}

export async function getPage(slug: string) {
  const reader = getReader();
  const page = await reader.collections.pages.read(slug);

  if (!page) {
    return null;
  }

  return {
    title: page.title,
    description: page.description,
    content: await renderContent(page.content),
  };
}
