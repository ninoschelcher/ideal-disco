import type { ComponentProps } from "react";

import { cx } from "@/lib/cx";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cx("mx-auto w-full max-w-site px-5 md:px-6", className)}
      {...props}
    />
  );
}
