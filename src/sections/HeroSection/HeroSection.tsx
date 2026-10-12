import { CtaButton } from "@/components/CtaButton";
import { HeroArt } from "@/components/HeroArt";
import { HighlightedText } from "@/components/HighlightedText";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

import type { SectionProps } from "@/sections/types";

type HeroSectionProps = SectionProps<"hero"> & {
  /** h1 when the hero opens the page. */
  as?: "h1" | "h2";
};

export function HeroSection({
  eyebrow,
  title,
  highlight,
  intro,
  primary,
  secondary,
  as: Heading = "h1",
}: HeroSectionProps) {
  return (
    <section className="pt-10 pb-8 md:pt-18 md:pb-14">
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-5 md:gap-7">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <Heading className="text-display-1">
            <HighlightedText text={title} highlight={highlight} />
          </Heading>
          {intro ? (
            <p className="text-lead max-w-[34rem] text-ink-soft">{intro}</p>
          ) : null}
          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
            <CtaButton link={primary} />
            <CtaButton link={secondary} variant="outline" />
          </div>
        </div>
        <HeroArt className="max-md:order-first" />
      </Container>
    </section>
  );
}
