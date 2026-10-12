import type { Metadata } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Oradoro",
    template: "%s | Oradoro",
  },
  description: "A Next.js site with Keystatic, ready for Cloudflare.",
  // Keep the site out of search engines until it launches. Remove this to
  // allow indexing.
  robots: { index: false, follow: false },
};

// Kept bare on purpose: site styles live in (site)/layout.tsx so they don't
// leak into the Keystatic admin UI under /keystatic.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      data-scroll-behavior="smooth"
      className={`${figtree.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
