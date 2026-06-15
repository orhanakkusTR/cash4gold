import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Navigation, ArrowRight } from "lucide-react";
import { LOCATIONS, SITE } from "@/data/business";
import { PageHero, CtaBand } from "@/components/page-parts";
import { Reveal } from "@/components/reveal";
import { OpenStatus } from "@/components/open-status";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Our Locations, Gold Buyers Across Northern Virginia",
  description: "Four Cash for Gold VA locations: Annandale, Manassas, Chantilly, and Vienna/McLean. Find addresses, hours, and phone numbers. Free appraisals, instant cash.",
  alternates: { canonical: "/locations" },
};

const directionsUrl = (street: string, city: string, region: string, postal: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${street}, ${city}, ${region} ${postal}`)}`;

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Locations", url: "/locations" }]} />
      <PageHero
        eyebrow="Visit Us · 4 NoVA Locations"
        crumbs={[{ name: "Home", href: "/" }, { name: "Locations", href: "/locations" }]}
        title={<>Four locations across <span className="text-gold-shimmer">Northern Virginia</span></>}
        description="There's a Cash for Gold VA near you. Walk in during business hours, no appointment needed, for a free appraisal and instant cash."
      />

      <section className="container-page space-y-10 py-16 md:py-20">
        {LOCATIONS.map((l, i) => {
          const flip = i % 2 === 1;
          return (
            <Reveal key={l.slug} delay={(i % 2) * 0.05}>
              <div className="group grid overflow-hidden rounded-3xl border border-ink-900/8 bg-cream-50 shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-gold)] lg:grid-cols-2">
                {/* Storefront photo */}
                <Link
                  href={`/locations/${l.slug}`}
                  className={`relative block aspect-[16/11] overflow-hidden lg:aspect-auto lg:min-h-[22rem] ${flip ? "lg:order-2" : ""}`}
                  aria-label={`${l.city} storefront`}
                >
                  <Image
                    src={l.image}
                    alt={`Cash for Gold VA storefront in ${l.city}, VA`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-ink-950/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-cream-50 backdrop-blur-sm">
                    <MapPin className="h-3.5 w-3.5 text-gold-400" /> {l.city}, VA
                  </span>
                </Link>

                {/* Details */}
                <div className="flex flex-col justify-center gap-5 p-7 sm:p-9">
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{l.city}</h2>
                    <OpenStatus hours={l.hours} className="mt-2" />
                  </div>

                  <p className="flex items-start gap-2.5 text-muted">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                    {l.street}, {l.city}, {l.region} {l.postalCode}
                  </p>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">Also serving</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {l.neighborhoods.map((n) => (
                        <span key={n} className="rounded-full bg-gold-50 px-3 py-1 text-xs font-medium text-gold-700">
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-2.5">
                    <a
                      href={`tel:${l.phoneHref}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-3 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
                    >
                      <Phone className="h-4 w-4" /> {l.phone}
                    </a>
                    <a
                      href={directionsUrl(l.street, l.city, l.region, l.postalCode)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-500/50 px-5 py-3 text-sm font-semibold text-gold-700 transition-colors hover:bg-gold-50"
                    >
                      <Navigation className="h-4 w-4" /> Directions
                    </a>
                    <Link
                      href={`/locations/${l.slug}`}
                      className="inline-flex items-center gap-1 px-2 py-3 text-sm font-semibold text-foreground/70 transition-colors hover:text-gold-700"
                    >
                      Details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>

      <CtaBand
        title="Not sure which store is closest?"
        description={`Call ${SITE.rating.value}★-rated Cash for Gold VA and we'll point you to the nearest location for your free appraisal.`}
      />
    </>
  );
}
