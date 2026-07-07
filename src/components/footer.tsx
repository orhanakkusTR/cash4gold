import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Star } from "lucide-react";
import { SITE, CATEGORIES, LOCATIONS, SHOW_CALCULATOR } from "@/data/business";
import { CITY_LANDINGS } from "@/data/city-landings";
import { GoogleG } from "@/components/google-rating";
import { OpenStatus } from "@/components/open-status";

export function Footer() {
  return (
    <footer className="bg-ink-950 text-cream-100/70">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center">
            <Image src="/brand/c4g-logo.png" alt="Cash for Gold VA" width={1993} height={395} sizes="256px" className="h-auto w-64 max-w-full" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed">{SITE.tagline}</p>
          <a
            href={(LOCATIONS.find((l) => l.slug === "chantilly") ?? LOCATIONS[0]).mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${SITE.rating.value} stars from ${SITE.rating.count}+ Google reviews`}
            className="mt-4 inline-flex items-center gap-3 rounded-2xl bg-cream-50 px-4 py-2.5 shadow-sm transition-transform hover:-translate-y-0.5"
          >
            <GoogleG className="h-7 w-7 shrink-0" />
            <span className="text-left">
              <span className="flex items-center gap-1.5">
                <span className="font-display text-lg font-bold leading-none text-ink-900">{SITE.rating.value}</span>
                <span className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                  ))}
                </span>
              </span>
              <span className="mt-0.5 block text-xs text-ink-900/60">{SITE.rating.count}+ Google reviews</span>
            </span>
          </a>
        </div>

        {/* What we buy */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-300">What We Buy</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="transition-colors hover:text-gold-200">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/precious-metals/sell-sterling-silver-sets" className="transition-colors hover:text-gold-200">
                Sterling Silver
              </Link>
            </li>
            <li>
              <Link href="/jewelry/sell-your-scrap-gold-jewelry" className="transition-colors hover:text-gold-200">
                Scrap Gold
              </Link>
            </li>
          </ul>
        </div>

        {/* Locations */}
        <div className="lg:col-span-2">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-300">Our Locations</h3>
          <ul className="mt-4 grid gap-5 sm:grid-cols-2">
            {LOCATIONS.map((l) => (
              <li key={l.slug} className="rounded-xl border border-cream-50/10 p-4 text-sm transition-colors hover:border-cream-50/20">
                <div className="flex items-center justify-between gap-2">
                  <Link href={`/locations/${l.slug}`} className="font-semibold text-cream-50 transition-colors hover:text-gold-200">
                    {l.city}
                  </Link>
                  <OpenStatus hours={l.hours} tone="light" compact />
                </div>
                <a
                  href={l.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-start gap-1.5 text-cream-100/60 transition-colors hover:text-gold-200"
                >
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-400" />
                  {l.street}, {l.city}, {l.region} {l.postalCode}
                </a>
                <a href={`tel:${l.phoneHref}`} className="mt-1 flex items-center gap-1.5 text-cream-100/80 transition-colors hover:text-gold-200">
                  <Phone className="h-3.5 w-3.5 text-gold-400" />
                  {l.phone}
                </a>
              </li>
            ))}
          </ul>
          {CITY_LANDINGS.length > 0 && (
            <p className="mt-4 text-sm text-cream-100/60">
              Also serving:{" "}
              {CITY_LANDINGS.map((c, i) => (
                <span key={c.slug}>
                  {i > 0 && ", "}
                  <Link href={`/${c.slug}`} className="text-cream-100/80 transition-colors hover:text-gold-200">
                    {c.city}
                  </Link>
                </span>
              ))}
            </p>
          )}
        </div>
      </div>

      <div className="rule-gold opacity-30" />
      <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream-100/50 sm:flex-row">
        <p>© {2026} {SITE.legalName}. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-5">
          {SHOW_CALCULATOR && <Link href="/gold-calculator" className="hover:text-gold-200">What&apos;s It Worth?</Link>}
          <Link href="/blog" className="hover:text-gold-200">Blog</Link>
          <Link href="/privacy" className="hover:text-gold-200">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gold-200">Terms</Link>
          <Link href="/contact-us-cash-for-gold-locations" className="hover:text-gold-200">Contact</Link>
        </div>
      </div>

    </footer>
  );
}
