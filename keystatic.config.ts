import { collection, config, fields, singleton } from "@keystatic/core";

import { sections } from "./src/keystatic/sections";

function getStorage() {
  const repo = process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO;

  if (!repo) {
    return { kind: "local" as const };
  }

  const [owner, name] = repo.split("/");

  return {
    kind: "github" as const,
    repo: { owner: owner ?? "", name: name ?? "" },
  };
}

const markdocContent = fields.markdoc({
  label: "Content",
  options: {
    image: {
      directory: "public/images/pages",
      publicPath: "/images/pages",
    },
  },
});

export default config({
  storage: getStorage(),
  singletons: {
    home: singleton({
      label: "Home",
      path: "content/home",
      format: { contentField: "content" },
      schema: {
        title: fields.text({ label: "Title" }),
        description: fields.text({
          label: "Description",
          multiline: true,
        }),
        sections,
        content: markdocContent,
      },
    }),
  },
  collections: {
    pages: collection({
      label: "Pages",
      slugField: "title",
      path: "content/pages/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({
          label: "Description",
          multiline: true,
        }),
        sections,
        content: markdocContent,
      },
    }),
  },
});
