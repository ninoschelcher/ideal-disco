import Link from "next/link";
import type { ComponentProps } from "react";

import { cx } from "@/lib/cx";

export type ButtonVariant = "primary" | "outline" | "accent";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center rounded-full px-7 font-semibold no-underline transition-colors";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-terracotta text-on-primary hover:bg-terracotta-dark hover:text-on-primary",
  outline:
    "border-[1.5px] border-terracotta text-terracotta hover:bg-terracotta hover:text-on-primary",
  // For dark (ink) surfaces.
  accent: "bg-marigold text-ink hover:bg-gold hover:text-ink",
};

const sizes: Record<Size, string> = {
  md: "min-h-13",
  sm: "min-h-11 px-5.5 text-[0.9375rem]",
};

type StyleProps = { variant?: ButtonVariant; size?: Size };

function buttonClasses({ variant = "primary", size = "md" }: StyleProps) {
  return cx(base, variants[variant], sizes[size]);
}

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: StyleProps & ComponentProps<typeof Link>) {
  return (
    <Link className={cx(buttonClasses({ variant, size }), className)} {...props} />
  );
}

export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: StyleProps & ComponentProps<"button">) {
  return (
    <button
      type={type}
      className={cx(buttonClasses({ variant, size }), "cursor-pointer", className)}
      {...props}
    />
  );
}
