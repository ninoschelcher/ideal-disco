import Image from "next/image";

import { sunImage } from "@/lib/brand-images";

export function Footer() {
  return (
    <footer className="bg-ink py-10 text-[0.875rem] text-on-dark md:py-12 md:text-[0.9375rem]">
      <div className="mx-auto flex w-full max-w-site flex-col gap-4 px-5 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-3">
          <Image src={sunImage} alt="" className="size-9 md:size-10" />
          <span className="font-display text-[1.375rem] text-gold md:text-2xl">
            Oradoro
          </span>
        </div>
        <span>© {new Date().getFullYear()} Oradoro</span>
      </div>
    </footer>
  );
}
