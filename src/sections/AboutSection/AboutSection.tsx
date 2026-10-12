import { ArchImage } from "@/components/ArchImage";
import { Paragraphs } from "@/components/Paragraphs";
import { Eyebrow } from "@/components/ui/Eyebrow";

import type { SectionProps } from "@/sections/types";

export function AboutSection({
  eyebrow,
  title,
  image,
  imageAlt,
  body,
  quote,
}: SectionProps<"about">) {
  return (
    <div className="grid items-center gap-x-18 gap-y-8 md:grid-cols-[minmax(0,30rem)_1fr]">
      <ArchImage src={image} alt={imageAlt} />
      <div className="flex flex-col gap-5">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h2 className="text-display-2">{title}</h2>
        <Paragraphs text={body} className="text-ink-soft" />
        {quote ? (
          <blockquote className="font-display text-2xl text-rust italic md:text-[1.625rem]">
            “{quote}”
          </blockquote>
        ) : null}
      </div>
    </div>
  );
}
