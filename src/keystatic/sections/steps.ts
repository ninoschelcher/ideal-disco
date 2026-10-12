import { fields } from "@keystatic/core";

import { eyebrow, intro, sectionBlock, textList, title } from "./fields";

export const steps = sectionBlock("Stappen (genummerd)", {
  eyebrow,
  title,
  intro,
  items: fields.array(
    fields.object({
      title: fields.text({ label: "Titel" }),
      points: textList("Opsomming"),
    }),
    {
      label: "Stappen",
      itemLabel: (props) => props.fields.title.value || "Stap",
    },
  ),
});
