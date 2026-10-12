import Image from "next/image";

import { illustrationImage } from "@/lib/brand-images";
import { cx } from "@/lib/cx";

type SectionImageProps = {
  /** Public path of an uploaded image; without one the brand illustration shows. */
  src: string | null;
  alt: string;
  className?: string;
};

export function SectionImage({ src, alt, className }: SectionImageProps) {
  if (!src) {
    return (
      <Image
        src={illustrationImage}
        alt={alt}
        className={cx("h-auto w-full max-w-140", className)}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- CMS images are served as-is (images.unoptimized)
    <img
      src={src}
      alt={alt}
      className={cx("h-auto w-full rounded-[20px] md:rounded-card", className)}
    />
  );
}
