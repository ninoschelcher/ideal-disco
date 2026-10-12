import { fields, singleton } from "@keystatic/core";

export const footer = singleton({
  label: "Footer",
  path: "content/footer",
  schema: {
    name: fields.text({
      label: "Naam",
      description: "Naast het logo en in de copyrightregel.",
      validation: { isRequired: true },
    }),
    kvk: fields.text({
      label: "KvK-nummer",
      description: "Leeg laten om het niet te tonen.",
    }),
    links: fields.array(
      fields.object({
        label: fields.text({ label: "Tekst" }),
        href: fields.text({
          label: "Link",
          description: "Een pagina (/privacyverklaring) of een volledige URL.",
        }),
      }),
      {
        label: "Links",
        description: "Bijv. Instagram en de privacyverklaring.",
        itemLabel: (props) => props.fields.label.value || "Link",
      },
    ),
  },
});
