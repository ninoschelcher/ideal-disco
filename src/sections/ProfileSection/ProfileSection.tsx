import { FactList } from "@/components/FactList";
import { HighlightedText } from "@/components/HighlightedText";
import { SunPortrait } from "@/components/SunPortrait";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { SectionProps } from "@/sections/types";

type ProfileSectionProps = SectionProps<"profile"> & {
  /** h1 when the block opens the page. */
  as?: "h1" | "h2";
};

/** A page-opening intro about a person: text and facts beside an arch portrait. */
export function ProfileSection({
  eyebrow,
  title,
  highlight,
  intro,
  facts,
  image,
  imageAlt,
  as: Heading = "h1",
}: ProfileSectionProps) {
  return (
    <section className="pt-12 pb-14 md:pt-18 md:pb-22">
      <Container className="grid items-center gap-x-20 gap-y-12 md:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col gap-5 md:gap-6">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <Heading className="text-display-1">
            <HighlightedText text={title} highlight={highlight} />
          </Heading>
          {intro ? (
            <p className="max-w-[34rem] text-lg text-ink-soft md:text-xl">{intro}</p>
          ) : null}
          <FactList facts={facts} />
        </div>
        <SunPortrait src={image} alt={imageAlt} className="mt-6 md:mt-0" />
      </Container>
    </section>
  );
}
