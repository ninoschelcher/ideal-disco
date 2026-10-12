import type { ComponentProps } from "react";

import { cx } from "@/lib/cx";

import { Container } from "@/components/ui/Container";

export type BandTone = "cream" | "soft" | "ink";

const tones: Record<BandTone, string> = {
  cream: "bg-cream text-ink",
  soft: "bg-cream-soft text-ink",
  ink: "bg-ink text-on-dark",
};

type BandProps = ComponentProps<"section"> & { tone?: BandTone };

/** A full-width page band with a centered container. Alternate `cream` and `soft`. */
export function Band({ tone = "cream", className, children, ...props }: BandProps) {
  return (
    <section className={cx("py-14 md:py-22", tones[tone], className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
