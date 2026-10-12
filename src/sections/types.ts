import type { SectionBlock } from "@/lib/content";

export type { SectionBlock };

export type SectionType = SectionBlock["discriminant"];

/** The props of a section: exactly what the Keystatic reader returns for that block. */
export type SectionProps<T extends SectionType> = Extract<
  SectionBlock,
  { discriminant: T }
>["value"];

/** Blocks that open a page on its background (no band) and hold the h1. */
const openingTypes = ["hero", "profile"] as const satisfies readonly SectionType[];

export type OpeningBlock = Extract<
  SectionBlock,
  { discriminant: (typeof openingTypes)[number] }
>;

export type BandedBlock = Exclude<SectionBlock, OpeningBlock>;

export function isOpeningBlock(block: SectionBlock): block is OpeningBlock {
  return (openingTypes as readonly SectionType[]).includes(block.discriminant);
}
