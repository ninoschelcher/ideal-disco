import type { ComponentProps } from "react";

import { cx } from "@/lib/cx";

export type CardTone = "cream" | "white" | "ink";

const tones: Record<CardTone, string> = {
  // For cards on a `soft` band.
  cream: "bg-cream",
  white: "bg-white border border-line",
  ink: "bg-ink text-cream-soft",
};

type CardProps = ComponentProps<"article"> & { tone?: CardTone };

export function Card({ tone = "white", className, ...props }: CardProps) {
  return (
    <article
      className={cx(
        "flex min-w-0 flex-col gap-3 rounded-[20px] p-6 md:rounded-card md:p-8",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: ComponentProps<"h3">) {
  return <h3 className={cx("text-display-3", className)} {...props} />;
}
