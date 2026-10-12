import { fields } from "@keystatic/core";

import { eyebrow, paragraphs, sectionBlock, title } from "./fields";

export const imageText = sectionBlock("Afbeelding + tekst", {
  eyebrow,
  title,
  body: paragraphs,
  image: fields.image({
    label: "Afbeelding",
    description: "Leeg laten om de illustratie uit het logo te tonen.",
    directory: "public/images/sections",
    publicPath: "/images/sections",
  }),
  imageAlt: fields.text({ label: "Omschrijving van de afbeelding" }),
  imagePosition: fields.select({
    label: "Afbeelding staat",
    options: [
      { value: "left", label: "Links" },
      { value: "right", label: "Rechts" },
    ],
    defaultValue: "left",
  }),
});
