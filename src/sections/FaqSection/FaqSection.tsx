import { FaqItem } from "@/components/FaqItem";
import { SectionHeader } from "@/components/ui/SectionHeader";

import type { SectionProps } from "@/sections/types";

export function FaqSection({ eyebrow, title, items }: SectionProps<"faq">) {
  return (
    <div className="mx-auto flex max-w-[53.75rem] flex-col gap-4 md:gap-8">
      <SectionHeader eyebrow={eyebrow} title={title} />
      <div className="flex flex-col">
        {items.map((item, index) => (
          <FaqItem key={index} {...item} defaultOpen={index === 0} />
        ))}
      </div>
    </div>
  );
}
