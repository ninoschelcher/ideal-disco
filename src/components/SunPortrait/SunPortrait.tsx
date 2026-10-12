import Image from "next/image";

import { ArchImage } from "@/components/ArchImage";
import { sunImage } from "@/lib/brand-images";
import { cx } from "@/lib/cx";

type SunPortraitProps = {
  src: string | null;
  alt: string;
  className?: string;
};

/** An arch portrait with the brand sun rising over its top-right edge. */
export function SunPortrait({ src, alt, className }: SunPortraitProps) {
  return (
    <div className={cx("relative mx-auto w-full max-w-110", className)}>
      <ArchImage src={src} alt={alt} />
      <Image
        src={sunImage}
        alt=""
        className="absolute -top-5 right-[4%] w-22 md:-top-7 md:w-30"
        priority
      />
    </div>
  );
}
