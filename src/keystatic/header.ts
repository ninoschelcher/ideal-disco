import { fields, singleton } from "@keystatic/core";

import { link } from "./sections/fields";

export const header = singleton({
  label: "Header",
  path: "content/header",
  schema: {
    links: fields.array(
      fields.object({
        label: fields.text({ label: "Tekst" }),
        href: fields.text({
          label: "Link",
          description:
            "Een pagina (/over-mij) of een blok op de homepage (/#tarieven).",
        }),
      }),
      {
        label: "Menu",
        itemLabel: (props) => props.fields.label.value || "Link",
      },
    ),
    cta: link("Knop rechts in het menu"),
  },
});
