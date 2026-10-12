import { CtaPanel } from "@/components/CtaPanel";
import type { BandTone } from "@/components/ui/Band";
import type { SectionProps } from "@/sections/types";

type CtaSectionProps = SectionProps<"cta"> & { tone: BandTone };

export function CtaSection({ tone, ...panel }: CtaSectionProps) {
  // The panel contrasts with the band it sits on.
  return <CtaPanel {...panel} tone={tone === "soft" ? "cream" : "soft"} />;
}
