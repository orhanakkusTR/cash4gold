"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, Phone, Navigation, Star, BadgeCheck, Banknote, Eye, ArrowUpRight } from "lucide-react";
import { LOCATIONS, SITE } from "@/data/business";
import { CITY_LANDINGS } from "@/data/city-landings";
import { STORE_ROUTES } from "@/data/store-finder-map";
import { OpenStatus } from "@/components/open-status";
import { GoogleG } from "@/components/google-rating";

type Store = (typeof LOCATIONS)[number];
type Place = { name: string; store: Store; note: string };

// Build a searchable place → nearest-store dictionary from the data we already
// maintain: every store's own city + the neighborhoods it serves, plus every
// city-landing city (whose `nearest[0]` is its closest store). No geocoding —
// this is a name-match finder, which is plenty for NoVA place names + ZIPs.
function buildPlaces(): Place[] {
  const out: Place[] = [];
  const seen = new Set<string>();
  const add = (name: string, store: Store, note: string) => {
    const key = name.trim().toLowerCase();
    if (!key || seen.has(key)) return;
    seen.add(key);
    out.push({ name: name.trim(), store, note });
  };
  const storeBySlug = (slug: string) => LOCATIONS.find((l) => l.slug === slug);

  // 0) Owner's authoritative routes FIRST — these win over anything auto-derived.
  for (const route of STORE_ROUTES) {
    const store = storeBySlug(route.store);
    if (!store) continue;
    for (const place of route.places) {
      const isZip = /^\d{5}$/.test(place.trim());
      add(place, store, isZip ? `ZIP ${place.trim()} — your nearest store is ${store.city}.` : `Closest store to ${place.trim()}: ${store.city}.`);
    }
  }

  // Store cities + their ZIPs (exact "the store is here")
  for (const l of LOCATIONS) {
    add(l.city, l, "You're right by this store.");
    add(l.postalCode, l, `${l.city} — ${l.postalCode}`);
  }
  // City-landing cities → their nearest store, with the drive blurb
  for (const c of CITY_LANDINGS) {
    const near = c.nearest[0];
    const store = LOCATIONS.find((l) => l.slug === near?.slug);
    if (store) add(c.city, store, `Closest store to ${c.city}: ${store.city}.`);
  }
  // Store neighborhoods (fills in places without a landing page)
  for (const l of LOCATIONS) {
    for (const n of l.neighborhoods) add(n, l, `We serve ${n} from our ${l.city} store.`);
  }
  return out;
}

const VALUE_PROPS = [
  { icon: BadgeCheck, label: "Free, no-obligation appraisal against the live spot price" },
  { icon: Eye, label: "Tested & weighed on a calibrated scale in front of you" },
  { icon: Banknote, label: "Instant payout — paid the same visit" },
];

function findMatch(places: Place[], query: string): Place | null {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return null;
  return (
    places.find((p) => p.name.toLowerCase() === q) ??
    places.find((p) => p.name.toLowerCase().startsWith(q)) ??
    places.find((p) => p.name.toLowerCase().includes(q)) ??
    null
  );
}

export function StoreFinder() {
  const places = useMemo(() => buildPlaces(), []);
  const [query, setQuery] = useState("");
  // Allow prefilling via URL hash for testing/sharing, e.g. /find-cash-for-gold-store#q=Reston.
  // Deferred a frame so it doesn't run setState synchronously inside the effect.
  useEffect(() => {
    const h = window.location.hash;
    if (!h.startsWith("#q=")) return;
    const id = requestAnimationFrame(() => setQuery(decodeURIComponent(h.slice(3))));
    return () => cancelAnimationFrame(id);
  }, []);
  const match = useMemo(() => findMatch(places, query), [places, query]);
  const searching = query.trim().length >= 2;

  return (
    <div>
      {/* Search input */}
      <div className="mx-auto max-w-xl">
        <label htmlFor="store-finder" className="sr-only">Enter your city, neighborhood, or ZIP</label>
        <div className="group relative">
          <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-900/40" />
          <input
            id="store-finder"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="City, neighborhood, or ZIP…"
            autoComplete="off"
            className="h-16 w-full rounded-full border border-gold-500/30 bg-white pl-14 pr-5 text-base text-ink-900 shadow-[var(--shadow-card)] outline-none transition-all placeholder:text-ink-900/40 focus:border-gold-500 focus:ring-4 focus:ring-gold-400/25 sm:text-lg"
          />
        </div>
        <p className="mt-3 text-center text-sm text-cream-100/60">
          Try <button type="button" onClick={() => setQuery("Alexandria")} className="inline-block py-2 -my-2 font-semibold text-gold-300 underline-offset-2 hover:underline">Alexandria</button>,{" "}
          <button type="button" onClick={() => setQuery("Reston")} className="inline-block py-2 -my-2 font-semibold text-gold-300 underline-offset-2 hover:underline">Reston</button>, or{" "}
          <button type="button" onClick={() => setQuery("Tysons")} className="inline-block py-2 -my-2 font-semibold text-gold-300 underline-offset-2 hover:underline">Tysons</button>
        </p>
      </div>

      {/* Results — announced to screen readers as they change */}
      <div className="mx-auto mt-10 max-w-2xl" role="status" aria-live="polite" aria-atomic="true">
        {searching && match && (
          <div>
            <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-gold-300">
              {match.note}
            </p>
            <StoreCard store={match.store} />
          </div>
        )}

        {searching && !match && (
          <div className="rounded-3xl border border-cream-50/15 bg-white/5 p-6 text-center backdrop-blur sm:p-8">
            <p className="text-pretty text-cream-100/80">
              We couldn&apos;t match &ldquo;{query}&rdquo; to a Northern Virginia place yet — but we have four stores across the region.
            </p>
            <Link href="/locations" className="mt-4 inline-flex items-center gap-1.5 font-semibold text-gold-300 hover:text-gold-200">
              See all four locations <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        {!searching && (
          <p className="text-balance text-center text-cream-100/50">
            Start typing above and we&apos;ll show you the closest store.
          </p>
        )}
      </div>

      {/* Impressive value props */}
      <div className="mx-auto mt-14 grid max-w-4xl gap-3 sm:grid-cols-2">
        {VALUE_PROPS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-start gap-3 rounded-2xl border border-cream-50/10 bg-white/5 p-4 backdrop-blur">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-500/15 text-gold-300 ring-1 ring-gold-400/30">
              <Icon className="h-5 w-5" />
            </span>
            <span className="pt-1 text-sm font-medium text-cream-100/85">{label}</span>
          </div>
        ))}
        {/* Google review badge — the real Google mark, not a plain star */}
        <div className="flex items-center gap-3 rounded-2xl border border-cream-50/10 bg-white/5 p-4 backdrop-blur">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-gold-400/30">
            <GoogleG className="h-5 w-5" />
          </span>
          <div className="pt-0.5">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-sm font-bold text-cream-50">{SITE.rating.value}</span>
              <span className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                ))}
              </span>
            </div>
            <span className="text-sm font-medium text-cream-100/70">{SITE.rating.count}+ Google reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StoreCard({ store }: { store: Store }) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-gold)] ring-1 ring-gold-500/30 sm:flex">
      <Link href={`/locations/${store.slug}`} className="relative block aspect-[4/3] sm:aspect-auto sm:w-2/5" aria-label={`${store.city} store`}>
        <Image src={store.image} alt={`Cash for Gold VA storefront in ${store.city}, VA`} fill sizes="(max-width:640px) 100vw, 40vw" className="object-cover" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-ink-950 shadow-[var(--shadow-gold)]">
          <MapPin className="h-3.5 w-3.5" /> Nearest store
        </span>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <div>
          <h3 className="font-display text-2xl font-extrabold">
            <Link href={`/locations/${store.slug}`} className="text-foreground transition-colors hover:text-gold-700">{store.city}</Link>
          </h3>
          <a href={store.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm text-muted underline-offset-2 transition-colors hover:text-gold-700 hover:underline">
            {store.street}, {store.city}, {store.region} {store.postalCode}
          </a>
        </div>
        <OpenStatus hours={store.hours} tone="dark" />
        <div className="mt-auto grid gap-2.5 pt-1 sm:grid-cols-2">
          <a href={`tel:${store.phoneHref}`} className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-4 text-sm font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5">
            <Phone className="h-4 w-4" strokeWidth={2.5} /> {store.phone}
          </a>
          <a href={store.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-gold-500/50 px-4 text-sm font-semibold text-gold-700 transition-all hover:-translate-y-0.5 hover:bg-gold-50">
            <Navigation className="h-4 w-4" /> Directions
          </a>
        </div>
      </div>
    </div>
  );
}
