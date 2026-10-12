import type { ComponentProps } from "react";

import { cx } from "@/lib/cx";

// min-w-0 + appearance-none: iOS Safari gives date inputs an intrinsic min-width
// that ignores w-full and overflows narrow screens.
const control =
  "block w-full min-w-0 appearance-none rounded-field border border-field-border bg-field px-4 text-ink placeholder:text-ink-muted focus-visible:border-terracotta [&::-webkit-date-and-time-value]:text-left";

type FieldProps = { label: string; id: string };

export function Field({
  label,
  id,
  className,
  ...props
}: FieldProps & ComponentProps<"input">) {
  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <label htmlFor={id} className="text-[0.9375rem] font-semibold">
        {label}
      </label>
      <input id={id} className={cx(control, "min-h-12", className)} {...props} />
    </div>
  );
}

export function TextareaField({
  label,
  id,
  className,
  rows = 4,
  ...props
}: FieldProps & ComponentProps<"textarea">) {
  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <label htmlFor={id} className="text-[0.9375rem] font-semibold">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        className={cx(control, "resize-y py-3", className)}
        {...props}
      />
    </div>
  );
}
