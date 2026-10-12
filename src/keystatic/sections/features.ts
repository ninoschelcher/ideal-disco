import { fields } from "@keystatic/core";

import { iconOptions } from "@/lib/icons";

import { eyebrow, intro, sectionBlock, title } from "./fields";

export const features = sectionBlock("Kaarten met icoon", {
  eyebrow,
  title,
  intro,
  items: fields.array(
    fields.object({
      icon: fields.select({
        label: "Icoon",
        options: iconOptions,
        defaultValue: "heart",
      }),
      title: fields.text({ label: "Titel" }),
      text: fields.text({ label: "Tekst", multiline: true }),
    }),
    {
      label: "Kaarten",
      itemLabel: (props) => props.fields.title.value || "Kaart",
    },
  ),
});
