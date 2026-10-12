import { Card, CardTitle, type CardTone } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/icons";

type FeatureCardProps = {
  icon: IconName;
  title: string;
  text: string;
  tone?: Extract<CardTone, "cream" | "white">;
};

export function FeatureCard({ icon, title, text, tone }: FeatureCardProps) {
  return (
    <Card tone={tone}>
      <Icon name={icon} className="size-8 text-rust md:size-10" />
      <CardTitle>{title}</CardTitle>
      <p className="text-ink-soft">{text}</p>
    </Card>
  );
}
