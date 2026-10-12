import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/icons";

type Fact = { icon: IconName; text: string };

type FactListProps = { facts: readonly Fact[] };

/** A wrapping row of short facts, each behind a small icon. */
export function FactList({ facts }: FactListProps) {
  if (!facts.length) {
    return null;
  }

  return (
    <ul className="flex flex-wrap gap-x-7 gap-y-3 text-[0.9375rem] font-medium text-ink-soft">
      {facts.map((fact, index) => (
        <li key={index} className="inline-flex items-center gap-2">
          <Icon name={fact.icon} className="size-5 text-rust" />
          {fact.text}
        </li>
      ))}
    </ul>
  );
}
