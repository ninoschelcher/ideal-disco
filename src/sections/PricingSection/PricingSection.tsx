import { PlanCard } from "@/components/PlanCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

import type { SectionProps } from "@/sections/types";

export function PricingSection({ eyebrow, title, intro, plans }: SectionProps<"pricing">) {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <SectionHeader eyebrow={eyebrow} title={title} intro={intro} layout="split" />
      <div className="grid gap-5 md:grid-cols-[repeat(auto-fit,minmax(18.75rem,1fr))] md:gap-6">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
}
