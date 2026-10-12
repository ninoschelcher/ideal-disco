import { fields } from "@keystatic/core";

import { iconOptions } from "@/lib/icons";

import { eyebrow, intro, sectionBlock, title } from "./fields";

export const profile = sectionBlock("Intro met foto (bovenaan de pagina)", {
  eyebrow,
  title,
  highlight: fields.text({
    label: "Uitgelicht woord",
    description: "Bijv. je naam: wordt schuin en in oranje getoond.",
  }),
  intro,
  facts: fields.array(
    fields.object({
      icon: fields.select({
        label: "Icoon",
        options: iconOptions,
        defaultValue: "pin",
      }),
      text: fields.text({ label: "Tekst" }),
    }),
    {
      label: "Feitjes",
      description: "Korte regels naast een icoon, bijv. je werkgebied of opleiding.",
      itemLabel: (props) => props.fields.text.value || "Feitje",
    },
  ),
  image: fields.image({
    label: "Foto",
    description: "Staand formaat werkt het best (4:5).",
    directory: "public/images/sections",
    publicPath: "/images/sections",
  }),
  imageAlt: fields.text({
    label: "Omschrijving van de foto",
    description: "Voor schermlezers, bijv. 'Portret van Anna'.",
  }),
});
