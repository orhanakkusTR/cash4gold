import Link from "next/link";
import { MapPin, Phone, Navigation } from "lucide-react";
import { LOCATIONS } from "@/data/business";
import { OpenStatus } from "@/components/open-status";

/**
 * Compact four-store strip for the bottom of blog articles (and reusable
 * elsewhere). Gives every post a set of store cards that link to the location
 * pages and Google Maps — good for conversion and internal linking.
 */
export function LocationsStrip({
  heading = "Sell at any of our four Northern Virginia stores",
  subheading = "Free, no-obligation appraisal, tested and weighed in front of you, instant payout the same visit. No appointment needed.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="border-t border-hairline bg-cream-50/60 py-14">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">{heading}</h2>
          <p className="mt-3 text-muted">{subheading}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LOCATIONS.map((l) => (
            <div
              key={l.slug}
              className="flex h-full flex-col gap-3 rounded-2xl border border-hairline bg-white p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-gold)]"
            >
              <div>
                <h3 className="font-display text-lg font-extrabold">
                  <Link href={`/locations/${l.slug}`} className="text-foreground transition-colors hover:text-gold-700">
                    {l.city}
                  </Link>
                </h3>
                <a
                  href={l.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-start gap-1.5 text-sm text-muted transition-colors hover:text-gold-700"
                >
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-500" />
                  {l.street}, {l.city}, {l.region} {l.postalCode}
                </a>
              </div>
              <OpenStatus hours={l.hours} tone="dark" compact />
              <div className="mt-auto flex flex-col gap-2 pt-1 sm:flex-row">
                <a
                  href={`tel:${l.phoneHref}`}
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-3 py-2 text-sm font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5 sm:min-h-0"
                >
                  <Phone className="h-4 w-4" strokeWidth={2.5} /> {l.phone}
                </a>
                <a
                  href={l.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Directions to the ${l.city} store`}
                  className="inline-flex min-h-11 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border-2 border-gold-500/50 px-3 py-2 text-sm font-semibold text-gold-700 transition-all hover:-translate-y-0.5 hover:bg-gold-50 sm:min-h-0"
                >
                  <Navigation className="h-4 w-4" />
                  <span className="sm:hidden">Directions</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
