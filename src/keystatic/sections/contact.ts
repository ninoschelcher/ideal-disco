import { fields } from "@keystatic/core";

import { eyebrow, intro, sectionBlock, title } from "./fields";

export const contact = sectionBlock("Contact", {
  eyebrow,
  title,
  intro,
  email: fields.text({ label: "E-mailadres" }),
  phone: fields.text({ label: "Telefoonnummer" }),
  region: fields.text({ label: "Werkgebied" }),
});
