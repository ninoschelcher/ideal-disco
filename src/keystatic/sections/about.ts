import { fields } from "@keystatic/core";

import { eyebrow, paragraphs, sectionBlock, title } from "./fields";

export const about = sectionBlock("Over mij (foto + tekst)", {
  eyebrow,
  title,
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
  body: paragraphs,
  quote: fields.text({ label: "Citaat", multiline: true }),
});
