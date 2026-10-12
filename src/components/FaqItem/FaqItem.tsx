import { Paragraphs } from "@/components/Paragraphs";

type FaqItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

/** One accordion row. Native <details>, so it works without client JS. */
export function FaqItem({ question, answer, defaultOpen }: FaqItemProps) {
  return (
    <details className="group border-b border-line" open={defaultOpen}>
      <summary className="flex min-h-15 cursor-pointer list-none items-center justify-between gap-4 py-3.5 font-display text-[1.375rem] font-semibold md:min-h-16 md:py-4 md:text-[1.625rem] [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
          className="size-5.5 shrink-0 text-terracotta md:size-6"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" className="group-open:hidden" />
        </svg>
      </summary>
      <div className="flex max-w-prose flex-col gap-3 pb-5 text-ink-soft md:pb-6">
        <Paragraphs text={answer} />
      </div>
    </details>
  );
}
