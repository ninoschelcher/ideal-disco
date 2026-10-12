import { FeatureCard } from "@/components/FeatureCard";
import type { BandTone } from "@/components/ui/Band";
import { SectionHeader } from "@/components/ui/SectionHeader";

import type { SectionProps } from "@/sections/types";

type FeaturesSectionProps = SectionProps<"features"> & { tone: BandTone };

export function FeaturesSection({ eyebrow, title, intro, items, tone }: FeaturesSectionProps) {
  // Cards contrast with the band they sit on.
  const cardTone = tone === "soft" ? "cream" : "white";

  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <SectionHeader eyebrow={eyebrow} title={title} intro={intro} layout="split" />
      {/* Flex-wrap rather than grid so a card left alone on a row stretches to fill it. */}
      <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:gap-6 md:*:flex-[1_1_15rem]">
        {items.map((item, index) => (
          <FeatureCard key={index} {...item} tone={cardTone} />
        ))}
      </div>
    </div>
  );
}
