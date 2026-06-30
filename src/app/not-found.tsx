import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { CATEGORIES } from "@/data/business";
import { NotFoundRedirect } from "@/components/not-found-redirect";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ink-950">
      <div className="container-page py-24 text-center">
        <p className="font-display text-7xl font-semibold text-gold-shimmer">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-cream-50">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-cream-100/70">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="mt-8">
          <ButtonLink href="/" size="lg">Back to home</ButtonLink>
        </div>
        <NotFoundRedirect seconds={11} />
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} className="rounded-full border border-cream-50/15 px-4 py-2 text-sm text-cream-100/80 transition-colors hover:border-gold-400/50 hover:text-gold-200">
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
