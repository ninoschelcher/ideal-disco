import { fields } from "@keystatic/core";

import { eyebrow, paragraphs, sectionBlock } from "./fields";

export const text = sectionBlock("Tekst", {
  eyebrow,
  title: fields.text({ label: "Titel" }),
  body: paragraphs,
});
