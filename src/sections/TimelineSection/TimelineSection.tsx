import { Timeline } from "@/components/Timeline";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { SectionProps } from "@/sections/types";

/** Always on an ink band (see Sections). */
export function TimelineSection({ eyebrow, title, intro, items }: SectionProps<"timeline">) {
  return (
    <div className="grid gap-x-20 gap-y-8 md:grid-cols-[minmax(0,22.5rem)_1fr]">
      <SectionHeader eyebrow={eyebrow} title={title} intro={intro} tone="dark" />
      <Timeline items={items} />
    </div>
  );
}
