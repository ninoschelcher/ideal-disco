import { CtaButton, type Cta } from "@/components/CtaButton";
import { Badge } from "@/components/ui/Badge";
import { Card, CardTitle } from "@/components/ui/Card";
import { cx } from "@/lib/cx";

type PlanCardProps = {
  name: string;
  price: string;
  points: readonly string[];
  /** Shows the plan on a dark card with an accent button. */
  featured: boolean;
  badge: string;
  button: Cta;
};

export function PlanCard({ name, price, points, featured, badge, button }: PlanCardProps) {
  return (
    <Card tone={featured ? "ink" : "white"} className="gap-4 md:gap-5 md:px-8 md:py-9">
      {featured && badge ? <Badge>{badge}</Badge> : null}
      <CardTitle>{name}</CardTitle>
      {price ? (
        <p
          className={cx(
            "font-display text-[2.375rem] leading-none md:text-[2.75rem]",
            featured ? "text-gold" : "text-terracotta",
          )}
        >
          {price}
        </p>
      ) : null}
      <ul
        className={cx(
          "flex grow list-disc flex-col gap-1.5 pl-5",
          featured ? "text-on-dark" : "text-ink-soft",
        )}
      >
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <CtaButton
        link={button}
        variant={featured ? "accent" : "outline"}
        className="min-h-12"
      />
    </Card>
  );
}
