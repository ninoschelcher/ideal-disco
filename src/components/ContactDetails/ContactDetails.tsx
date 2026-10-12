type ContactDetailsProps = {
  email: string;
  phone: string;
  region: string;
};

/** Email, phone and service area; each line only when filled in. */
export function ContactDetails({ email, phone, region }: ContactDetailsProps) {
  return (
    <div className="flex flex-col gap-2 font-medium">
      {email ? <a href={`mailto:${email}`}>{email}</a> : null}
      {phone ? <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a> : null}
      {region ? <span className="text-ink-soft">Werkgebied: {region}</span> : null}
    </div>
  );
}
