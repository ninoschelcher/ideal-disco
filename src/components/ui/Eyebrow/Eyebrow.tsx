import type { ComponentProps } from "react";

import { cx } from "@/lib/cx";

export type SurfaceTone = "light" | "dark";

type EyebrowProps = ComponentProps<"p"> & {
  /** `dark` for ink backgrounds. */
  tone?: SurfaceTone;
};

export function Eyebrow({ tone = "light", className, ...props }: EyebrowProps) {
  return (
    <p
      className={cx(
        "text-eyebrow",
        tone === "dark" ? "text-gold" : "text-terracotta",
        className,
      )}
      {...props}
    />
  );
}
