import type { ComponentProps } from "react";

import { cx } from "@/lib/cx";

export function Badge({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cx(
        "self-start rounded-full bg-marigold px-3 py-1 text-[0.8125rem] font-semibold text-ink",
        className,
      )}
      {...props}
    />
  );
}
