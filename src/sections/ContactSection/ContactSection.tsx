import Image from "next/image";

import { ContactDetails } from "@/components/ContactDetails";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { illustrationImage } from "@/lib/brand-images";
import type { SectionProps } from "@/sections/types";

export function ContactSection({
  eyebrow,
  title,
  intro,
  email,
  phone,
  region,
}: SectionProps<"contact">) {
  return (
    <div className="grid items-start gap-x-18 gap-y-10 md:grid-cols-2">
      <div className="flex flex-col gap-6">
        <SectionHeader eyebrow={eyebrow} title={title} intro={intro} />
        <ContactDetails email={email} phone={phone} region={region} />
        <Image
          src={illustrationImage}
          alt=""
          className="mt-3 w-full max-w-[26.25rem] max-md:hidden"
        />
      </div>
      <ContactForm
        accessKey={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}
        email={email}
      />
    </div>
  );
}
