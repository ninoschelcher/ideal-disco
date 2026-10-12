import { type Cta, CtaButton } from "@/components/CtaButton";
import { cx } from "@/lib/cx";

type CtaPanelProps = {
  title: string;
  text: string;
  primary: Cta;
  secondary: Cta;
  /** Panel fill; pick the one that contrasts with the band behind it. */
  tone?: "cream" | "soft";
};

/** A rounded box with a heading, a line of text and up to two buttons. */
export function CtaPanel({ title, text, primary, secondary, tone = "soft" }: CtaPanelProps) {
  return (
    <div
      className={cx(
        "flex flex-col gap-6 rounded-card p-7 md:flex-row md:items-center md:justify-between md:gap-12 md:rounded-[32px] md:px-12 md:py-14",
        tone === "soft" ? "bg-cream-soft" : "bg-cream",
      )}
    >
      <div className="flex max-w-[36rem] flex-col gap-3">
        <h2 className="font-display text-[2rem] leading-[1.1] font-medium md:text-[2.75rem]">
          {title}
        </h2>
        {text ? <p className="text-ink-soft">{text}</p> : null}
      </div>
      <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
        <CtaButton link={primary} />
        <CtaButton link={secondary} variant="outline" />
      </div>
    </div>
  );
}
