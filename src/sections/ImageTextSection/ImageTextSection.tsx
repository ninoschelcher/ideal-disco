import { Paragraphs } from "@/components/Paragraphs";
import { SectionImage } from "@/components/SectionImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cx } from "@/lib/cx";
import type { SectionProps } from "@/sections/types";

export function ImageTextSection({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  imagePosition,
}: SectionProps<"imageText">) {
  return (
    <div className="grid items-center gap-x-20 gap-y-10 md:grid-cols-2">
      <SectionImage
        src={image}
        alt={imageAlt}
        className={cx("mx-auto", imagePosition === "right" && "md:order-last")}
      />
      <div className="flex flex-col gap-4">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h2 className="text-display-2">{title}</h2>
        <Paragraphs text={body} className="text-ink-soft" />
      </div>
    </div>
  );
}
