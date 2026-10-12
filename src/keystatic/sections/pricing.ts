import { fields } from "@keystatic/core";

import { eyebrow, intro, link, sectionBlock, textList, title } from "./fields";

export const pricing = sectionBlock("Tarieven", {
  eyebrow,
  title,
  intro,
  plans: fields.array(
    fields.object({
      name: fields.text({ label: "Naam" }),
      price: fields.text({
        label: "Prijs",
        description: "Zoals het op de site moet staan, bijv. '€ 450'.",
      }),
      points: textList("Wat zit erin"),
      featured: fields.checkbox({
        label: "Uitlichten",
        description: "Toont dit pakket in een donkere kaart.",
      }),
      badge: fields.text({
        label: "Label",
        description:
          "Bijv. 'Meest gekozen'. Alleen zichtbaar als het pakket is uitgelicht.",
      }),
      button: link("Knop"),
    }),
    {
      label: "Pakketten",
      itemLabel: (props) => props.fields.name.value || "Pakket",
    },
  ),
});
