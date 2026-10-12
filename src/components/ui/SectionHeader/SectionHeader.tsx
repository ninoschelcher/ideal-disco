import type { ReactNode } from "react";

import { Eyebrow, type SurfaceTone } from "@/components/ui/Eyebrow";
import { cx } from "@/lib/cx";

type SectionHeaderProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  /** `split` puts the intro beside the heading on wide screens. */
  layout?: "stacked" | "split";
  as?: "h1" | "h2";
  /** `dark` on ink backgrounds. */
  tone?: SurfaceTone;
};

/** Eyebrow, heading and optional intro at the top of a band. */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  layout = "stacked",
  as: Heading = "h2",
  tone = "light",
}: SectionHeaderProps) {
  const introColor = tone === "dark" ? "text-on-dark" : "text-ink-soft";

  const heading = (
    <div className="flex flex-col gap-3 md:gap-4">
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <Heading className={Heading === "h1" ? "text-display-1" : "text-display-2"}>
        {title}
      </Heading>
    </div>
  );

  if (layout === "split") {
    return (
      <div className="grid items-end gap-x-16 gap-y-5 md:grid-cols-2">
        {heading}
        {intro ? <div className={introColor}>{intro}</div> : null}
      </div>
    );
  }

  return (
    <div className="flex max-w-prose flex-col gap-5">
      {heading}
      {intro ? <div className={cx("text-lead", introColor)}>{intro}</div> : null}
    </div>
  );
}
