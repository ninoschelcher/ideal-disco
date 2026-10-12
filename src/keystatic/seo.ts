import { fields } from "@keystatic/core";

/** Optional overrides for search engines and link previews. */
export const seo = fields.object(
  {
    title: fields.text({
      label: "SEO-titel",
      description:
        "Titel in Google en in het tabblad. Leeg laten om de titel van de pagina te gebruiken.",
    }),
    description: fields.text({
      label: "SEO-omschrijving",
      description:
        "Korte samenvatting voor Google en bij gedeelde links (1–2 zinnen). Leeg laten om de omschrijving van de pagina te gebruiken.",
      multiline: true,
    }),
  },
  { label: "SEO" },
);
