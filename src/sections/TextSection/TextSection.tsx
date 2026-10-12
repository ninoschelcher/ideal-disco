import { Paragraphs } from "@/components/Paragraphs";
import { Eyebrow } from "@/components/ui/Eyebrow";

import type { SectionProps } from "@/sections/types";

export function TextSection({ eyebrow, title, body }: SectionProps<"text">) {
  return (
    <div className="flex max-w-prose flex-col gap-5">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      {title ? <h2 className="text-display-2">{title}</h2> : null}
      <Paragraphs text={body} className="text-ink-soft" />
    </div>
  );
}
