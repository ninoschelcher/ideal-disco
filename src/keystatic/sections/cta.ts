import { fields } from "@keystatic/core";

import { link, sectionBlock, title } from "./fields";

export const cta = sectionBlock("Oproep (kader met knoppen)", {
  title,
  text: fields.text({ label: "Tekst", multiline: true }),
  primary: link("Hoofdknop"),
  secondary: link("Tweede knop"),
});
