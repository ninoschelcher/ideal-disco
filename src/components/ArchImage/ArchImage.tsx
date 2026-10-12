import Image from "next/image";

import { sunImage } from "@/lib/brand-images";
import { cx } from "@/lib/cx";

type ArchImageProps = {
  /** Public path of the image; without one the arch shows the brand sun. */
  src: string | null;
  alt: string;
  className?: string;
};

/** A portrait in the design's arch shape (round top, soft bottom corners). */
export function ArchImage({ src, alt, className }: ArchImageProps) {
  return (
    <div
      className={cx(
        "relative aspect-4/5 w-full overflow-hidden rounded-t-full rounded-b-[20px] bg-sand md:rounded-b-card",
        className,
      )}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element -- CMS images are served as-is (images.unoptimized)
        <img src={src} alt={alt} className="size-full object-cover" />
      ) : (
        <Image
          src={sunImage}
          alt=""
          className="absolute top-1/2 left-1/2 w-1/3 -translate-1/2 opacity-60"
        />
      )}
    </div>
  );
}
