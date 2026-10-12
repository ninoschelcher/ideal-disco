import { Button } from "@/components/ui/Button";
import { Field, TextareaField } from "@/components/ui/Field";
import { cx } from "@/lib/cx";

type ContactFormProps = {
  /** Where the form posts to. Until there's a form handler, a `mailto:` URL. */
  action: string;
  className?: string;
};

export function ContactForm({ action, className }: ContactFormProps) {
  // A mailto: action opens the visitor's mail app with the fields as plain text.
  const isMailto = action.startsWith("mailto:");

  return (
    <form
      action={action}
      method="post"
      encType={isMailto ? "text/plain" : undefined}
      className={cx(
        "flex flex-col gap-4 rounded-[20px] border border-line bg-white p-6 md:gap-5 md:rounded-card md:p-9",
        className,
      )}
    >
      <Field label="Naam" id="contact-naam" name="Naam" autoComplete="name" required />
      <Field
        label="E-mailadres"
        id="contact-email"
        name="E-mailadres"
        type="email"
        autoComplete="email"
        required
      />
      <Field
        label="Uitgerekende datum"
        id="contact-datum"
        name="Uitgerekende datum"
        type="date"
      />
      <TextareaField label="Wat wil je me vertellen?" id="contact-bericht" name="Bericht" />
      <Button type="submit">Verstuur bericht</Button>
    </form>
  );
}
