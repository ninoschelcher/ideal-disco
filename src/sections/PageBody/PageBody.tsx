import type { RenderableTreeNode } from "@markdoc/markdoc";

import { RichText } from "@/components/RichText";
import { Band } from "@/components/ui/Band";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { isEmptyContent } from "@/lib/content";
import { Sections } from "@/sections/Sections";
import { isOpeningBlock, type SectionBlock } from "@/sections/types";

type PageBodyProps = {
  title: string;
  description: string;
  sections: readonly SectionBlock[];
  /** Rich text after the sections (pages only; Home is sections-only). */
  content?: RenderableTreeNode;
};

/**
 * A CMS page: a title band (unless an opening block like the hero holds the
 * h1), the sections, then any rich-text content.
 */
export function PageBody({ title, description, sections, content }: PageBodyProps) {
  const opensWithBlock = sections[0] ? isOpeningBlock(sections[0]) : false;
  const bands = sections.filter((s) => !isOpeningBlock(s)).length;

  return (
    <>
      {opensWithBlock ? null : (
        <Band>
          <SectionHeader as="h1" title={title} intro={description} />
        </Band>
      )}
      <Sections sections={sections} />
      {!content || isEmptyContent(content) ? null : (
        <Band tone={bands % 2 === 0 ? "soft" : "cream"}>
          <RichText content={content} />
        </Band>
      )}
    </>
  );
}
