import { Band, type BandTone } from "@/components/ui/Band";
import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { CtaSection } from "@/sections/CtaSection";
import { FaqSection } from "@/sections/FaqSection";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { HeroSection } from "@/sections/HeroSection";
import { ImageTextSection } from "@/sections/ImageTextSection";
import { PricingSection } from "@/sections/PricingSection";
import { ProfileSection } from "@/sections/ProfileSection";
import { StepsSection } from "@/sections/StepsSection";
import { TextSection } from "@/sections/TextSection";
import { TimelineSection } from "@/sections/TimelineSection";
import {
  type BandedBlock,
  isOpeningBlock,
  type OpeningBlock,
  type SectionBlock,
} from "@/sections/types";

/**
 * Renders a page's Keystatic sections. Opening blocks (hero, profile) sit on
 * the page background; every other block gets a band, alternating soft and
 * cream. The timeline is always ink, taking its turn in the alternation.
 */
export function Sections({ sections }: { sections: readonly SectionBlock[] }) {
  let bandIndex = 0;

  return sections.map((block, index) => {
    if (isOpeningBlock(block)) {
      return (
        <OpeningSection key={index} block={block} heading={index === 0 ? "h1" : "h2"} />
      );
    }

    const alternate: BandTone = bandIndex++ % 2 === 0 ? "soft" : "cream";
    const tone: BandTone = block.discriminant === "timeline" ? "ink" : alternate;
    // Links like #contact or #faq jump to the first block of that type.
    const isFirstOfType =
      sections.findIndex((s) => s.discriminant === block.discriminant) === index;

    return (
      <Band
        key={index}
        id={isFirstOfType ? block.discriminant : undefined}
        tone={tone}
        className="scroll-mt-4"
      >
        <BandedSection block={block} tone={tone} />
      </Band>
    );
  });
}

function OpeningSection({ block, heading }: { block: OpeningBlock; heading: "h1" | "h2" }) {
  switch (block.discriminant) {
    case "hero":
      return <HeroSection {...block.value} as={heading} />;
    case "profile":
      return <ProfileSection {...block.value} as={heading} />;
  }
}

function BandedSection({ block, tone }: { block: BandedBlock; tone: BandTone }) {
  switch (block.discriminant) {
    case "features":
      return <FeaturesSection {...block.value} tone={tone} />;
    case "steps":
      return <StepsSection {...block.value} />;
    case "pricing":
      return <PricingSection {...block.value} />;
    case "about":
      return <AboutSection {...block.value} />;
    case "imageText":
      return <ImageTextSection {...block.value} />;
    case "timeline":
      return <TimelineSection {...block.value} />;
    case "faq":
      return <FaqSection {...block.value} />;
    case "contact":
      return <ContactSection {...block.value} />;
    case "cta":
      return <CtaSection {...block.value} tone={tone} />;
    case "text":
      return <TextSection {...block.value} />;
  }
}
