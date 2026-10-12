import { fields } from "@keystatic/core";

import { eyebrow, intro, sectionBlock, title } from "./fields";

export const timeline = sectionBlock("Tijdlijn (donker)", {
  eyebrow,
  title,
  intro,
  items: fields.array(
    fields.object({
      label: fields.text({
        label: "Jaar of getal",
        description: "Bijv. '2021' of '40+'.",
      }),
      text: fields.text({ label: "Omschrijving" }),
    }),
    {
      label: "Regels",
      itemLabel: (props) =>
        [props.fields.label.value, props.fields.text.value].filter(Boolean).join(" · ") ||
        "Regel",
    },
  ),
});
