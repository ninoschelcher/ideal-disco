import { collection, config, fields, singleton } from "@keystatic/core";

import { footer } from "./src/keystatic/footer";
import { header } from "./src/keystatic/header";
import { sections } from "./src/keystatic/sections";
import { seo } from "./src/keystatic/seo";

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
      // Home is built from sections only, so it's stored as content/home.yaml.
      schema: {
        title: fields.text({
          label: "Titel",
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: "Omschrijving",
          multiline: true,
        }),
        sections,
        seo,
      },
    }),
    header,
    footer,
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
        seo,
      },
    }),
  },
});
