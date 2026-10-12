import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Field, TextareaField } from "@/components/ui/Field";
import { cx } from "@/lib/cx";
import { siteUrl } from "@/lib/site";

const web3formsEndpoint = "https://api.web3forms.com/submit";

type ContactFormProps = {
  /**
   * Web3Forms access key. Without one (e.g. locally) the form falls back to a
   * mailto: action that opens the visitor's mail app.
   */
  accessKey?: string;
  /** Recipient for the mailto: fallback. */
  email: string;
  className?: string;
};

/** Contact form posting to Web3Forms, which emails it on and redirects to /bedankt. */
export function ContactForm({ accessKey, email, className }: ContactFormProps) {
  const isMailto = !accessKey;

  return (
    <form
      action={isMailto ? `mailto:${email}` : web3formsEndpoint}
      method="post"
      encType={isMailto ? "text/plain" : undefined}
      className={cx(
        "flex min-w-0 flex-col gap-4 rounded-[20px] border border-line bg-white p-6 md:gap-5 md:rounded-card md:p-9",
        className,
      )}
    >
      {accessKey ? (
        <>
          <input type="hidden" name="access_key" value={accessKey} />
          <input type="hidden" name="subject" value="Nieuw bericht via oradoro.nl" />
          <input type="hidden" name="from_name" value="Oradoro website" />
          <input type="hidden" name="redirect" value={`${siteUrl}/bedankt`} />
          {/* Honeypot: hidden from people, bots tick it and get rejected. */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
        </>
      ) : null}
      {/* "name" and "email" are Web3Forms' sender and reply-to fields. */}
      <Field label="Naam" id="contact-naam" name="name" autoComplete="name" required />
      <Field
        label="E-mailadres"
        id="contact-email"
        name="email"
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
      <div className="flex items-start gap-3 text-[0.9375rem]">
        <input
          type="checkbox"
          id="contact-akkoord"
          name="Akkoord privacyverklaring"
          value="Ja"
          required
          className="mt-1 size-5 shrink-0 cursor-pointer accent-terracotta"
        />
        <label htmlFor="contact-akkoord" className="text-ink-soft">
          Ik geef toestemming om mijn gegevens, waaronder mijn uitgerekende datum, te gebruiken
          om contact met mij op te nemen. Lees de{" "}
          <Link href="/privacyverklaring" className="underline underline-offset-4">
            privacyverklaring
          </Link>
          .
        </label>
      </div>
      <Button type="submit">Verstuur bericht</Button>
    </form>
  );
}
