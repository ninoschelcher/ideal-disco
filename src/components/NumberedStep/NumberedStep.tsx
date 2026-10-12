import { cx } from "@/lib/cx";

// The design warms up from amber to rust across the steps.
const accents = [
  "border-amber text-amber",
  "border-orange text-orange",
  "border-rust text-rust",
];

type NumberedStepProps = {
  /** Zero-based position; sets the number and accent color. */
  index: number;
  title: string;
  points: readonly string[];
};

/** A step in an <ol>: big number, title and bullet points. */
export function NumberedStep({ index, title, points }: NumberedStepProps) {
  return (
    <li
      className={cx(
        "flex flex-col gap-1.5 border-l-2 pl-5 md:gap-3 md:border-t-2 md:border-l-0 md:pt-6 md:pl-0",
        accents[index % accents.length],
      )}
    >
      <span
        className="font-display text-[2.5rem] leading-none md:text-[3.5rem]"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="text-display-3 text-ink">{title}</h3>
      {points.length ? (
        <ul className="flex list-disc flex-col gap-1.5 pl-5 text-ink-soft">
          {points.map((point, pointIndex) => (
            <li key={pointIndex}>{point}</li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}
