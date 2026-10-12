import { ButtonLink, type ButtonVariant } from "@/components/ui/Button";

export type Cta = { label: string; href: string };

type CtaButtonProps = {
  link: Cta;
  variant?: ButtonVariant;
  className?: string;
};

/** A button from a CMS link field; renders nothing until both parts are filled in. */
export function CtaButton({ link, variant, className }: CtaButtonProps) {
  if (!link.label || !link.href) {
    return null;
  }

  return (
    <ButtonLink href={link.href} variant={variant} className={className}>
      {link.label}
    </ButtonLink>
  );
}
