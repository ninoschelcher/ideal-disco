import { ButtonLink } from "@/components/ui/Button";

// Unmatched URLs render under the bare root layout, so pull in site styles here.
import "./globals.css";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-site flex-col items-start justify-center gap-5 px-5 py-24 antialiased md:px-6">
      <p className="text-eyebrow text-terracotta">404</p>
      <h1 className="text-display-2">Deze pagina bestaat niet</h1>
      <p className="text-ink-soft">
        Misschien is de pagina verplaatst of is de link niet helemaal goed.
      </p>
      <ButtonLink href="/" className="mt-3">
        Terug naar home
      </ButtonLink>
    </div>
  );
}
