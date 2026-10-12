import Image from "next/image";

import { illustrationImage, sunImage } from "@/lib/brand-images";
import { cx } from "@/lib/cx";

/** The brand sun above the waves-and-baby illustration. */
export function HeroArt({ className }: { className?: string }) {
  return (
    <div className={cx("flex flex-col items-center", className)}>
      <Image src={sunImage} alt="" className="w-30 md:w-[42%] md:max-w-58" priority />
      <Image
        src={illustrationImage}
        alt="Illustratie van een zon boven warme golven die een slapende baby omarmen"
        className="mt-1 w-full max-w-140 md:mt-2"
        priority
      />
    </div>
  );
}
