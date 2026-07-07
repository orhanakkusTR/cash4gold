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
      "If you're searching for cash for gold in Alexandria, here's the honest answer: our **nearest physical store isn't in Alexandria itself**, it's a short drive away in **Annandale**, with a second option in Vienna toward Tysons. Both are real storefronts where you watch us test and weigh your items on a calibrated scale, get an offer tied to the live spot price, and **leave with cash the same day** — no mailing, no waiting on a check.\n\nAlexandria sellers make up a steady share of the walk-in traffic at our nearest stores — for most of the city, Annandale is a 15-minute drive you can make on a lunch break. And coming to a real counter is exactly why people choose local **gold buyers near Alexandria** over a mail-in envelope: a **genuine Victorian brooch from an Old Town estate** gets examined for its craftsmanship and age, not just weighed as melt, and a real class ring gets told apart from a plated one without guesswork.",
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
        a: "We start with the live spot price per troy ounce, divide by 31.1 to get a per-gram price, then multiply by your item's karat purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k — and its weight. For plain scrap gold a small refining margin is deducted to cover melting and assaying; standard bullion gold coins pay 90% of the live spot price. Designer or gemstone pieces are appraised separately, since they're often worth more than their metal content.",
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
  {
    slug: "cash-for-gold-fairfax",
    city: "Fairfax",
    region: "VA",
    seoTitle: "Sell Gold in Fairfax, VA | Instant Cash, 4.9★ Rated Buyer",
    metaDescription:
      "Sell gold in Fairfax, VA? Our Chantilly store is 12–15 minutes west on Route 50 — free appraisal, instant cash payout. 4.9★ from 500+ reviews.",
    heroTitle: "Cash for Gold in Fairfax, VA",
    heroSubtitle:
      "We don't have a store in Fairfax itself, but our Chantilly location is a straight shot west on Route 50 — about 12 to 15 minutes — where your gold is tested in front of you and paid out in cash on the spot.",
    intro:
      "Searching for cash for gold in Fairfax? Straight answer first: **we don't have a storefront inside Fairfax**, but we're closer than you might think. Our **Chantilly store sits right on Lee Jackson Memorial Highway (Route 50)**, roughly 8 miles and 12–15 minutes west of the city, and our Annandale store is about 15 minutes east on Little River Turnpike. At either counter, your items are tested and weighed on a calibrated scale while you watch, quoted against the **live spot price**, and paid in cash before you leave.\n\nBecause Fairfax sits at the junction of I-66, US-50, Route 123, and the Fairfax County Parkway, almost anyone in the area is within a 15-minute drive of one of those two counters — which makes local **gold buyers in Fairfax** searches easy to act on the same afternoon. That matters more than convenience alone: a courthouse-era heirloom from an Old Town Fairfax family gets appraised for its age and workmanship, and a GMU class ring gets tested for its true karat, instead of both being tossed on the same melt pile the way a mail-in envelope would treat them.",
    whyLocalTitle: "Why Fairfax sellers do better in person than with mail-in gold buyers",
    whyLocal:
      "A mail-in buyer asks you to seal your jewelry in an envelope, trust a prepaid label, and wait for a stranger's offer with your gold already out of your hands. Selling in person flips that: **your items never leave your sight until you've agreed on a price**. You see the karat test, you see the scale reading, and if the number doesn't work for you, you put your jewelry back in your pocket and drive home — no return shipping, no fine print.\n\nFrom Fairfax, that in-person option costs you almost nothing in time. The **Chantilly counter is one road the whole way** — west on Route 50 past Fair Oaks, about 12–15 minutes door to door — and Annandale is a comparable run east on Route 236. Either trip is shorter than standing in line at the post office, and it ends with **cash in hand the same visit** instead of a payment that arrives whenever the envelope does.",
    neighborhoods: [
      {
        name: "Old Town Fairfax",
        note: "As the county seat, the blocks around the historic courthouse hold some of the oldest homes in the area — and with them, inherited rings, pocket watches, and antique settings that can be worth more than their melt weight, so we appraise age and craftsmanship before quoting.",
      },
      {
        name: "Fair Oaks & Fair Lakes",
        note: "The shopping and office corridor along Route 50 and the Fairfax County Parkway skews modern: designer jewelry, luxury watches, and newer pieces where brand and condition drive the price, which is why we evaluate those individually instead of by weight alone.",
      },
      {
        name: "George Mason University area",
        note: "Virginia's largest public university brings us students and faculty selling class rings, gold chains, and single earrings for quick cash — small items that still add up fast once they're tested and weighed at real karat value.",
      },
      {
        name: "Mantua & Kings Park West",
        note: "These established neighborhoods on the eastern side of Fairfax lean toward generational gold — wedding bands, everyday 14k jewelry, and estate boxes passed down over decades — and they're the households for whom the Annandale store on Route 236 is often the quicker trip.",
      },
    ],
    nearestIntro:
      "There's no Cash for Gold VA storefront in Fairfax yet, but both of our nearest stores bracket the city — one west on Route 50, one east on Route 236 — so pick whichever direction matches your day.",
    nearest: [
      { slug: "chantilly", drive: "a straight shot west on Route 50 (Lee Jackson Memorial Highway), about 12–15 minutes from Fairfax" },
      { slug: "annandale", drive: "about 15 minutes east on Little River Turnpike (Route 236), handy from Mantua and Kings Park West" },
    ],
    faqs: [
      {
        q: "Where can I sell gold in Fairfax, VA?",
        a: "There's no Cash for Gold VA store inside Fairfax itself. The nearest is our Chantilly location at 14025 Lee Jackson Memorial Hwy, Chantilly, VA 20151 — (571) 224-5279 — about 12–15 minutes west on Route 50. Our Annandale store at 7262 Columbia Pike, Annandale, VA 22003 — (571) 290-8020 — is roughly 15 minutes east on Little River Turnpike and often quicker from the eastern side of Fairfax.",
      },
      {
        q: "Which store is closer to Fairfax — Chantilly or Annandale?",
        a: "Chantilly is closest for most of Fairfax: about 8 miles west on Route 50, a 12–15 minute drive past Fair Oaks. If you're in Mantua, Kings Park West, or anywhere near the Little River Turnpike side of the city, Annandale is about 7 miles east and roughly the same 15 minutes — go with whichever direction you're already headed.",
      },
      {
        q: "How much will I get for my gold in Fairfax?",
        a: "Your quote starts with the live spot price per troy ounce, divided by 31.1 for a per-gram price, then multiplied by your item's karat purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k — and its weight on our scale. Plain scrap gold has a small refining margin deducted for melting and assaying, while designer and gemstone pieces are appraised separately since they're often worth more than the metal alone.",
      },
      {
        q: "Do you buy gold coins from Fairfax sellers?",
        a: "Yes. Standard bullion gold coins — American Eagles, Krugerrands, Maple Leafs, and similar — pay 90% of the live spot price. Collectible, rare, or graded coins are appraised individually, because dates, mint marks, and condition can put their value well above the gold content, so don't clean them and bring any grading slabs or paperwork you have.",
      },
      {
        q: "I inherited jewelry from a Fairfax estate — should I sort or clean it before coming in?",
        a: "No — bring the whole box as-is. Cleaning can actually damage antique finishes and reduce collector value, and sorting isn't necessary because we test every piece anyway: gold gets separated from plated items on the spot, and anything with age, maker's marks, or notable craftsmanship gets appraised on its own rather than weighed as scrap.",
      },
    ],
    relatedPosts: [
      "top-places-to-sell-coins-in-fairfax",
      "we-buy-estate-gold-jewelry",
      "is-cash-for-gold-worth-it",
    ],
    closingCta:
      "Head 12–15 minutes west on Route 50 to our Chantilly store and turn that Fairfax jewelry box into cash before you're back for dinner.",
  },
];

export const getCityLanding = (slug: string): CityLanding | undefined =>
  CITY_LANDINGS.find((c) => c.slug === slug);
