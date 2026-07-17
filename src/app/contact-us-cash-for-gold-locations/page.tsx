import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { LOCATIONS } from "@/data/business";
import { CITY_LANDINGS } from "@/data/city-landings";
import { CityChips } from "@/components/city-chips";
import { FindStoreButton } from "@/components/find-store-button";
import { groupHours } from "@/lib/utils";
import { PageHero } from "@/components/page-parts";
import { Reveal } from "@/components/reveal";
import { OpenStatus } from "@/components/open-status";
import { CredentialsStrip } from "@/components/credentials-strip";
import { BreadcrumbJsonLd } from "@/components/json-ld";

const CONTACT_PATH = "/contact-us-cash-for-gold-locations";

// Turn any place name that has its own page — a store location or a city landing
// — into a bold link, in place, inside a plain-text sentence. Data-driven: as we
// add stores or city landings, matching names in prose start linking automatically.
const PLACE_LINKS: { name: string; href: string }[] = [
  ...LOCATIONS.map((l) => ({ name: l.city, href: `/locations/${l.slug}` })),
  ...CITY_LANDINGS.map((c) => ({ name: c.city, href: `/${c.slug}` })),
];

function linkifyPlaces(text: string) {
  if (PLACE_LINKS.length === 0) return text;
  const names = PLACE_LINKS.map((p) => p.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`\\b(${names.join("|")})\\b`, "g"));
  return parts.map((part, i) => {
    const link = PLACE_LINKS.find((p) => p.name === part);
    return link ? (
      <Link
        key={i}
        href={link.href}
        className="font-semibold text-gold-700 underline underline-offset-2 hover:text-gold-800"
      >
        {part}
      </Link>
    ) : (
      part
    );
  });
}

export const metadata: Metadata = {
  title: "Contact Us, Cash for Gold in Northern Virginia",
  description: "Visit or call Cash for Gold VA for a free, no-obligation appraisal on your gold, diamonds, jewelry, and coins. Four Northern Virginia locations, no appointment needed.",
  alternates: { canonical: CONTACT_PATH },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Contact", url: CONTACT_PATH }]} />
      <PageHero
        eyebrow="Contact"
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact", href: CONTACT_PATH }]}
        title={<>Visit or call your <span className="text-gold-shimmer">nearest location</span></>}
        description="Walk into any of our four Northern Virginia stores for a free, no-obligation appraisal and instant payout, no appointment needed. Or call ahead for a quick answer."
        actions={
          <a
            href={`tel:${(LOCATIONS.find((l) => l.slug === "chantilly") ?? LOCATIONS[0]).phoneHref}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-ink-950 shadow-[var(--shadow-gold)] transition-all hover:-translate-y-0.5 hover:bg-gold-400"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} /> Ask Us a Question
          </a>
        }
      />

      <section className="container-page py-16 sm:py-20">
        <h2 className="font-display text-2xl font-extrabold text-foreground">Our locations</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {LOCATIONS.map((l, i) => (
            <Reveal key={l.slug} delay={(i % 2) * 0.08}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-white shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]">
                {/* Storefront image with city + live status overlay */}
                <div className="relative aspect-[16/9] overflow-hidden bg-ink-900">
                  <Image
                    src={l.image}
                    alt={`Cash for Gold VA storefront in ${l.city}, VA`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-1.5 p-5 lg:flex-row lg:items-end lg:justify-between lg:gap-3">
                    <h3 className="font-display text-2xl font-extrabold">
                      <Link href={`/locations/${l.slug}`} className="text-cream-50 transition-colors hover:text-gold-300">
                        {l.city}
                      </Link>
                    </h3>
                    <OpenStatus hours={l.hours} tone="light" className="whitespace-nowrap" />
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col p-6">
                  <a
                    href={l.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-sm text-muted transition-colors hover:text-gold-700"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    {l.street}, {l.city}, {l.region} {l.postalCode}
                  </a>

                  <div className="mt-3 flex items-start gap-2 text-sm text-muted">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    <div className="w-full space-y-0.5">
                      {groupHours(l.hours).map((g) => (
                        <div key={g.label} className="flex justify-between gap-4">
                          <span className="font-medium text-foreground/70">{g.label}</span>
                          <span>{g.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                    <a
                      href={`tel:${l.phoneHref}`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-500 px-4 py-2.5 text-sm font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition-all hover:-translate-y-0.5 hover:bg-gold-400"
                    >
                      <Phone className="h-4 w-4" strokeWidth={2.5} /> {l.phone}
                    </a>
                    <a
                      href={l.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-gold-500/50 px-4 py-2.5 text-sm font-semibold text-gold-700 transition-all hover:-translate-y-0.5 hover:bg-gold-50"
                    >
                      <Navigation className="h-4 w-4" /> Directions
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {CITY_LANDINGS.length > 0 && (
        <section className="border-t border-hairline py-14 sm:py-16">
          <div className="container-page">
            <h2 className="font-display text-2xl font-extrabold text-foreground">Areas we also serve</h2>
            <p className="mt-2 max-w-3xl text-muted">
              No Cash for Gold VA store in your city yet?<br />
              These pages show your closest location and drive time, so you still know exactly where to sell.
            </p>
            <div className="mt-5">
              <CityChips items={CITY_LANDINGS} />
            </div>
            <div className="mt-7">
              <FindStoreButton />
            </div>
          </div>
        </section>
      )}

      {/* Helpful guidance — what to bring, what to expect, areas served */}
      <section className="bg-cream-100 py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div>
                <h2 className="font-display text-2xl font-extrabold text-foreground">How to reach us</h2>
                <p className="mt-4 text-muted">
                  Call the store nearest you using the numbers on the cards above, or simply walk in
                  during business hours, no appointment is ever required. A quick phone call is the
                  fastest way to confirm whether we buy a specific item or to get a ballpark on what
                  it may be worth before you make the trip. Every store is staffed by trained,
                  in-house buyers who appraise gold, silver, platinum, diamonds, fine jewelry, luxury
                  watches, and coins on the spot.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <h2 className="font-display text-2xl font-extrabold text-foreground">What to bring</h2>
                <ul className="mt-4 space-y-2.5 text-muted">
                  <li className="flex items-start gap-2.5">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-500" />
                    A valid government-issued photo ID (required for any purchase).
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-500" />
                    The items you would like to sell, broken or tangled pieces are welcome.
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-500" />
                    Any paperwork you have, GIA or IGI diamond reports, original boxes, or
                    receipts, since documentation can increase a designer or certified item&apos;s value.
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.04}>
              <div>
                <h2 className="font-display text-2xl font-extrabold text-foreground">What to expect</h2>
                <p className="mt-4 text-muted">
                  Your appraisal is free, friendly, and carries no obligation. We test and weigh every
                  item in front of you, explain how we reach each number, and base offers on current
                  market spot prices, never a lowball flat rate. If you accept, you are paid the same visit
                  immediately. If you would rather think it over, that is completely fine, there is
                  never any pressure to sell.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div>
                <h2 className="font-display text-2xl font-extrabold text-foreground">Areas we serve</h2>
                <p className="mt-4 text-muted">
                  {linkifyPlaces(
                    "Our four stores in Annandale, Manassas, Chantilly, and Vienna/McLean welcome sellers " +
                      "from across Northern Virginia, including Fairfax, Centreville, Falls Church, " +
                      "Arlington, Alexandria, Burke, Springfield, Reston, Herndon, and the surrounding " +
                      "Fairfax, Prince William, and Loudoun County communities. Wherever you are in the " +
                      "region, there is a Cash for Gold VA location nearby.",
                  )}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Accreditations, above the footer */}
      <section className="container-page py-16">
        <Reveal>
          <CredentialsStrip />
        </Reveal>
      </section>
    </>
  );
}
