import { fields } from "@keystatic/core";

import { eyebrow, intro, link, sectionBlock, title } from "./fields";

export const hero = sectionBlock("Hero (bovenaan de pagina)", {
  eyebrow,
  title,
  highlight: fields.text({
    label: "Uitgelicht woord",
    description:
      "Een woord of zinsdeel uit de titel dat schuin en in oranje wordt getoond.",
  }),
  intro,
  primary: link("Hoofdknop"),
  secondary: link("Tweede knop"),
});
