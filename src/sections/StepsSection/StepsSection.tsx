import { NumberedStep } from "@/components/NumberedStep";
import { SectionHeader } from "@/components/ui/SectionHeader";

import type { SectionProps } from "@/sections/types";

export function StepsSection({ eyebrow, title, intro, items }: SectionProps<"steps">) {
  return (
    <div className="flex flex-col gap-7 md:gap-12">
      <SectionHeader eyebrow={eyebrow} title={title} intro={intro} />
      <ol className="grid gap-7 md:grid-cols-[repeat(auto-fit,minmax(18.75rem,1fr))] md:gap-6">
        {items.map((item, index) => (
          <NumberedStep key={index} index={index} {...item} />
        ))}
      </ol>
    </div>
  );
}
