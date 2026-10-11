import Link from "next/link";

// Unmatched URLs render under the bare root layout, so pull in site styles here.
import "./globals.css";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen antialiased w-full max-w-3xl flex-col justify-center px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        That route is not in the Keystatic pages collection.
      </p>
      <Link href="/" className="mt-8 underline underline-offset-4">
        Back home
      </Link>
    </div>
  );
}
