// City LANDING pages — homepage-style local landing pages for cities where we
// have NO physical store, targeting "cash for gold <city>" searches and driving
// visitors to the nearest store. Served at root `/cash-for-gold-<city>` via the
// top-level `[category]` dispatcher (same pattern as categories + blog posts).
//
// Each city needs GENUINELY UNIQUE local content (neighborhoods, nearest-store
// drive detail, local specifics) — templated/thin city pages read as doorway
// pages and get penalized. `nearest[0]` is the closest store (the primary CTA).

export type CityNearby = {
  slug: string; // must match a LOCATIONS slug
  drive: string; // human drive description from this city to that store
};

export type CityLanding = {
  slug: string; // full root slug, e.g. "cash-for-gold-alexandria"
  city: string; // "Alexandria"
  region: string; // "VA"
  seoTitle: string; // <title>, ≤65 chars, distinct from H1
  metaDescription: string;
  heroTitle: string; // H1
  heroSubtitle: string;
  intro: string; // paragraphs separated by \n\n
  whyLocalTitle: string;
  whyLocal: string; // paragraphs separated by \n\n
  neighborhoods: { name: string; note: string }[];
  nearestIntro: string;
  nearest: CityNearby[]; // ordered, closest first
  faqs: { q: string; a: string }[];
  relatedPosts: string[]; // 3 blog slugs for the "keep reading" cards
  closingCta: string;
};

export const CITY_LANDINGS: CityLanding[] = [
  {
    slug: "cash-for-gold-alexandria",
    city: "Alexandria",
    region: "VA",
    seoTitle: "Cash for Gold in Alexandria, VA | Instant Cash Payout",
    metaDescription:
      "Selling gold in Alexandria, VA? Get a free appraisal and instant cash at our nearest store in Annandale, 15 minutes away. 4.9★, 500+ reviews.",
    heroTitle: "Cash for Gold in Alexandria, VA",
    heroSubtitle:
      "We don't have a storefront in Alexandria, but our Annandale location is a straight 15-minute drive west on Route 236 — bring your gold in today and walk out with cash the same visit.",
    intro:
      "If you're searching for cash for gold in Alexandria, here's the honest answer: our **nearest physical store isn't in Alexandria itself**, it's a short drive away in **Annandale**, with a second option in Vienna toward Tysons. Both are real storefronts where you watch us test and weigh your items on a calibrated scale, get an offer tied to the live spot price, and **leave with cash the same day** — no mailing, no waiting on a check.\n\nWe've bought gold, silver, diamonds, and watches from customers across Old Town, Del Ray, Rosemont, the West End, and the Eisenhower/Carlyle corridor for years. That local track record matters: it means we know what a **genuine Victorian brooch from an Old Town estate** is worth beyond melt, and we can spot a real class ring versus a plated one from Del Ray without guessing.",
    whyLocalTitle: "Why sell your gold in Alexandria locally instead of mailing it in",
    whyLocal:
      "Mail-in gold buyers ask you to ship your jewelry to a facility you'll never see, then wait days for an offer you have to accept sight unseen before you get paid. If you sell locally near Alexandria instead, you **keep physical possession of your gold until you agree to a number**. You watch it get weighed and tested in front of you, ask questions in real time, and either take the cash or walk out with your jewelry still in your pocket.\n\nFor Alexandria residents, the drive to Annandale is short enough that it isn't really a tradeoff — it's Little River Turnpike or the Beltway, **about 15 minutes** from most of the city. That's faster than a round trip to the post office and back, and you're **paid in cash before you leave the parking lot**, not a check that clears in a week.",
    neighborhoods: [
      {
        name: "Old Town",
        note: "Historic rowhomes here often hold estate and antique pieces — Victorian filigree, Art Deco settings, inherited signet rings — that can appraise well above simple melt value, so we look at craftsmanship and age before we ever talk weight.",
      },
      {
        name: "Del Ray & Rosemont",
        note: "These neighborhoods tend to bring in everyday karat gold: class rings, wedding bands, and jewelry passed down through a few generations, which we test on the spot to confirm the actual karat stamp.",
      },
      {
        name: "West End",
        note: "A mix of newer households means we regularly see broken chains, mismatched earrings, and old gold that's been sitting in a drawer for years — all of it still has scrap value even if it's not wearable.",
      },
      {
        name: "Eisenhower & Carlyle corridor",
        note: "This area's newer condos and offices bring in more modern designer jewelry and luxury watches, which we appraise individually since brand and condition can push the price well past what the gold alone weighs out to.",
      },
    ],
    nearestIntro:
      "Since Alexandria doesn't have a Cash for Gold VA storefront yet, here are the two nearest locations where you can get paid in person today.",
    nearest: [
      { slug: "annandale", drive: "about 15 minutes west on Little River Turnpike (Route 236) or the Beltway" },
      { slug: "vienna", drive: "a bit farther north toward Tysons, off Route 123" },
    ],
    faqs: [
      {
        q: "Where can I sell gold in Alexandria, VA?",
        a: "There's no Cash for Gold VA store inside Alexandria city limits. The closest option is our Annandale location at 7262 Columbia Pike, about 15 minutes away via Little River Turnpike or the Beltway. Vienna/McLean at 8453 Tyco Rd #C is a bit farther if that's more convenient for your commute.",
      },
      {
        q: "I have antique jewelry from an Old Town estate — is it worth more than the gold weight?",
        a: "Often, yes. Antique and estate pieces — Victorian, Edwardian, or Art Deco settings especially — can carry design, craftsmanship, or collector value beyond their melt weight. We appraise those pieces individually rather than just weighing them, so bring documentation or provenance if you have it.",
      },
      {
        q: "Do I need an appointment to sell gold near Alexandria?",
        a: "No appointment is required at either the Annandale or Vienna location. Walk in during business hours, and we'll test, weigh, and quote your items on the spot.",
      },
      {
        q: "How is my payout calculated?",
        a: "We start with the live spot price per troy ounce, divide by 31.1 to get a per-gram price, then multiply by your item's karat purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k — and its weight. A small refining margin applies to plain scrap gold. Coins and designer or gemstone pieces are appraised separately since they're often worth more than their metal content.",
      },
      {
        q: "Is it better to sell locally than mail my gold in?",
        a: "For most people, yes. Mail-in buyers require you to ship your items before you know the offer and wait days for payment. Selling in person near Alexandria means you keep your jewelry in hand, watch it tested on a calibrated scale, and get cash the same visit if you accept the price.",
      },
    ],
    relatedPosts: [
      "we-buy-estate-gold-jewelry",
      "selling-gold-jewelry",
      "is-cash-for-gold-worth-it",
    ],
    closingCta:
      "Skip the mail-in wait — bring your gold to our Annandale store, 15 minutes from Alexandria, or call ahead to ask what your pieces might be worth.",
  },
];

export const getCityLanding = (slug: string): CityLanding | undefined =>
  CITY_LANDINGS.find((c) => c.slug === slug);
