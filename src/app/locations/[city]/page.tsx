import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Phone, Clock, ArrowRight, Check, Navigation } from "lucide-react";
import { LOCATIONS, CATEGORIES, ALL_SUBCATEGORIES, getLocation, SITE } from "@/data/business";
import { formatHours } from "@/lib/utils";
import { PageHero, CtaBand } from "@/components/page-parts";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { OpenStatus } from "@/components/open-status";
import { CategoryCard } from "@/components/cards";
import { LocationJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) return {};
  const title = `${loc.city}, VA, Sell Gold, Diamonds & Coins for Cash`;
  return {
    title,
    description: `Cash for Gold VA in ${loc.city}: sell gold, silver, diamonds, jewelry & coins for instant payout. ${loc.street}. Call ${loc.phone}. ${SITE.rating.value}★ rated.`,
    alternates: { canonical: `/locations/${loc.slug}` },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) notFound();

  return (
    <>
      <LocationJsonLd location={loc} />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "/" },
        { name: "Locations", url: "/locations" },
        { name: loc.city, url: `/locations/${loc.slug}` },
      ]} />

      <PageHero
        eyebrow={`${loc.city}, Virginia`}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: loc.city, href: `/locations/${loc.slug}` },
        ]}
        title={<>Cash for Gold VA in <span className="text-gold-shimmer">{loc.city}</span></>}
        description={`Your local buyer of gold, silver, diamonds, jewelry, and collectible coins in ${loc.city}, VA. Free appraisals and instant payout, serving ${loc.neighborhoods.slice(0, 3).join(", ")} and beyond.`}
      />

      {/* Storefront photo + store info */}
      <section className="container-page grid gap-8 py-16 md:py-20 lg:grid-cols-2">
        <Reveal direction="right">
          <div className="relative h-full min-h-[20rem] overflow-hidden rounded-3xl border border-ink-900/8 shadow-[var(--shadow-card)]">
            <Image
              src={loc.image}
              alt={`Cash for Gold VA storefront in ${loc.city}, VA`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-950/70 px-3 py-1.5 text-sm font-semibold text-cream-50 backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-gold-400" /> {loc.street}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <div className="flex h-full flex-col rounded-3xl border border-ink-900/8 bg-cream-50 p-8 shadow-[var(--shadow-card)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">Store information</h2>
              <OpenStatus hours={loc.hours} />
            </div>
            <dl className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                <div>
                  <dt className="text-sm font-semibold text-foreground">Address</dt>
                  <dd>
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted transition-colors hover:text-gold-700"
                    >
                      {loc.street}, {loc.city}, {loc.region} {loc.postalCode}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                <div>
                  <dt className="text-sm font-semibold text-foreground">Phone</dt>
                  <dd><a href={`tel:${loc.phoneHref}`} className="text-gold-700 hover:text-gold-600">{loc.phone}</a></dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                <div>
                  <dt className="text-sm font-semibold text-foreground">Hours</dt>
                  <dd className="text-muted">
                    <table className="mt-1 text-sm">
                      <tbody>
                        {loc.hours.map((h) => (
                          <tr key={h.day}>
                            <td className="pr-6 font-extrabold text-foreground">{h.day}</td>
                            <td>{formatHours(h.open || "10:00", h.close)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </dd>
                </div>
              </div>
            </dl>
            <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
              <a href={`tel:${loc.phoneHref}`} className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-6 py-3.5 font-semibold text-ink-950 transition-transform hover:-translate-y-0.5">
                <Phone className="h-5 w-5" /> Call {loc.city}
              </a>
              <a
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gold-500/50 px-6 py-3.5 font-semibold text-gold-700 transition-colors hover:bg-gold-50"
              >
                <Navigation className="h-5 w-5" /> Directions
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Map */}
      <section className="container-page pb-4">
        <Reveal>
          <div className="h-[22rem] overflow-hidden rounded-3xl border border-ink-900/8 shadow-[var(--shadow-card)]">
            <iframe
              title={`Map of Cash for Gold VA ${loc.city}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${loc.name}, ${loc.street}, ${loc.city}, ${loc.region} ${loc.postalCode}`)}&output=embed`}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>

      {/* Neighborhoods */}
      <section className="bg-cream-100 py-14">
        <div className="container-page">
          <h2 className="font-display text-xl font-semibold text-foreground">Areas we serve from {loc.city}</h2>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {[loc.city, ...loc.neighborhoods].map((n) => (
              <span key={n} className="inline-flex items-center gap-1.5 rounded-full bg-cream-50 px-4 py-2 text-sm text-foreground/80 shadow-sm">
                <Check className="h-3.5 w-3.5 text-gold-500" /> {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services offered here */}
      <section className="container-page py-20">
        <SectionHeading eyebrow="What we buy" title={`We buy anything precious in ${loc.city}`} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 0.1}>
              <CategoryCard href={`/${c.slug}`} title={`Sell ${c.name}`} short={c.short} image={c.image} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {ALL_SUBCATEGORIES.map(({ category, sub }) => (
            <Link key={`${category.slug}-${sub.slug}`} href={`/${category.slug}/${sub.slug}`} className="rounded-full border border-gold-500/40 px-4 py-2 text-sm font-medium text-gold-700 transition-colors hover:bg-gold-50">
              {sub.name} <ArrowRight className="inline h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </section>

      <CtaBand title={`Visit our ${loc.city} location today`} description={`Stop by ${loc.street} or call ${loc.phone} for a free, no-obligation appraisal and instant payout.`} />
    </>
  );
}
