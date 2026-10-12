import Image from "next/image";
import Link from "next/link";

import { sunImage } from "@/lib/brand-images";
import { cx } from "@/lib/cx";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cx(
        "flex items-center gap-2.5 no-underline md:gap-3",
        className,
      )}
    >
      <Image src={sunImage} alt="" className="size-9 md:size-11" priority />
      <span className="flex flex-col font-display leading-none text-rust">
        <span className="text-2xl font-semibold md:text-[1.75rem]">
          Oradoro
        </span>
      </span>
    </Link>
  );
}
