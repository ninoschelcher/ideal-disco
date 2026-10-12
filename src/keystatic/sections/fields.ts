import { type ComponentSchema, fields } from "@keystatic/core";

/** A block for `fields.blocks`, labelled in the editor by its title. */
export function sectionBlock<Fields extends Record<string, ComponentSchema>>(
  label: string,
  schema: Fields,
) {
  return {
    label,
    itemLabel: (props: { fields: { title?: { value: string } } }) =>
      props.fields.title?.value || label,
    schema: fields.object(schema),
  };
}

// Fields shared by several section blocks.

export const eyebrow = fields.text({
  label: "Kleine kop",
  description: "Korte tekst in hoofdletters boven de titel, bijv. 'Tarieven'.",
});

export const title = fields.text({
  label: "Titel",
  validation: { isRequired: true },
});

export const intro = fields.text({ label: "Introductie", multiline: true });

export const paragraphs = fields.text({
  label: "Tekst",
  description: "Laat een lege regel tussen alinea's.",
  multiline: true,
});

export function link(label: string) {
  return fields.object(
    {
      label: fields.text({ label: "Tekst op de knop" }),
      href: fields.text({
        label: "Link",
        description:
          "Een pagina (/over-mij), een blok op deze pagina (#contact) of een volledige URL.",
      }),
    },
    { label },
  );
}

export function textList(label: string) {
  return fields.array(fields.text({ label: "Punt" }), {
    label,
    itemLabel: (props) => props.value || "Punt",
  });
}
