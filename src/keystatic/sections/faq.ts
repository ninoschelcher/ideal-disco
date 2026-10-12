import { fields } from "@keystatic/core";

import { eyebrow, sectionBlock, title } from "./fields";

export const faq = sectionBlock("Veelgestelde vragen", {
  eyebrow,
  title,
  items: fields.array(
    fields.object({
      question: fields.text({ label: "Vraag" }),
      answer: fields.text({ label: "Antwoord", multiline: true }),
    }),
    {
      label: "Vragen",
      itemLabel: (props) => props.fields.question.value || "Vraag",
    },
  ),
});
