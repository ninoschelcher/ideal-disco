type TimelineItem = { label: string; text: string };

type TimelineProps = { items: readonly TimelineItem[] };

/** Year (or number) + description rows, for dark backgrounds. */
export function Timeline({ items }: TimelineProps) {
  return (
    <ul className="flex flex-col">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-baseline gap-6 border-b border-gold/25 py-5 last:border-b-0"
        >
          <span className="min-w-18 font-display text-2xl text-gold">{item.label}</span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
