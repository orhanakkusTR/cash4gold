import { SITE, type Location } from "@/data/business";

// Shared image Google may use as the SERP result thumbnail for city landing
// pages. Referenced in each page's WebPage schema (image + primaryImageOfPage) —
// the strongest signal we can give Google about which image to show. It cannot
// be forced, but a valid, prominent, square image here is the best lever.
// Prepare a bright, high-quality ~1200×1200 gold/jewelry photo (minimal text)
// and save it at public/og/serp-card.jpg.
export const SERP_IMAGE = { url: "/og/serp-card.jpg", width: 1200, height: 1200 };

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const openingHours = (loc: Location) =>
  loc.hours
    .filter((h) => h.close)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.open,
      closes: h.close,
    }));

function localBusiness(loc: Location) {
  return {
    "@type": "JewelryStore",
    "@id": `${SITE.domain}/locations/${loc.slug}#business`,
    name: loc.name,
    image: `${SITE.domain}/brand/logo.png`,
    url: `${SITE.domain}/locations/${loc.slug}`,
    telephone: loc.phone,
    priceRange: SITE.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.street,
      addressLocality: loc.city,
      addressRegion: loc.region,
      postalCode: loc.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: loc.geo.lat,
      longitude: loc.geo.lng,
    },
    openingHoursSpecification: openingHours(loc),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
    },
  };
}

/**
 * Site-wide Organization. Rendered once in root layout on every page.
 *
 * Note: we deliberately do NOT spread the individual location (JewelryStore)
 * nodes here. Each location's business schema — including its aggregateRating —
 * lives on its own page via <LocationJsonLd>. Emitting the same
 * `@id` (…/locations/<slug>#business) both here and on the location page made
 * Google merge the two nodes into one carrying two aggregateRatings, which
 * triggered the "review has multiple aggregate ratings" rich-result error.
 */
export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE.domain}#org`,
        name: SITE.name,
        url: SITE.domain,
        logo: `${SITE.domain}/brand/logo.png`,
        sameAs: Object.values(SITE.social),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: SITE.rating.value,
          reviewCount: SITE.rating.count,
        },
      }}
    />
  );
}

/** Single LocalBusiness for a location page. */
export function LocationJsonLd({ location }: { location: Location }) {
  return (
    <JsonLd
      data={{ "@context": "https://schema.org", ...localBusiness(location) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: `${SITE.domain}${it.url}`,
        })),
      }}
    />
  );
}

export function BlogPostingJsonLd({
  title,
  description,
  slug,
  date,
  image,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  image?: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        ...(image ? { image: `${SITE.domain}${image}` } : {}),
        datePublished: date,
        dateModified: date,
        url: `${SITE.domain}/${slug}`,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.domain}/${slug}` },
        author: { "@type": "Organization", name: SITE.name },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          logo: { "@type": "ImageObject", url: `${SITE.domain}/brand/logo.png` },
        },
      }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
  );
}

/**
 * WebPage node for city LANDING pages (/cash-for-gold-<city>) — geo-anchors the
 * page to its target city and references the site-wide Organization by @id only.
 * Deliberately NO JewelryStore/LocalBusiness node and NO aggregateRating here:
 * a store node with a `…/locations/<slug>#business` @id would collide with the
 * per-location schema and re-trigger the GSC "multiple aggregate ratings" error
 * (see OrganizationJsonLd). Referencing #org by @id does NOT duplicate its rating.
 */
export function CityWebPageJsonLd({
  slug,
  city,
  region,
  title,
  description,
}: {
  slug: string;
  city: string;
  region: string;
  title: string;
  description: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${SITE.domain}/${slug}#webpage`,
        url: `${SITE.domain}/${slug}`,
        name: title,
        description,
        image: `${SITE.domain}${SERP_IMAGE.url}`,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE.domain}${SERP_IMAGE.url}`,
          width: SERP_IMAGE.width,
          height: SERP_IMAGE.height,
        },
        about: {
          "@type": "Place",
          name: `${city}, ${region}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: city,
            addressRegion: region,
            addressCountry: "US",
          },
        },
        isPartOf: { "@type": "WebSite", url: SITE.domain, name: SITE.name },
        provider: { "@id": `${SITE.domain}#org` },
      }}
    />
  );
}
