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
  // --- Regional-hub variant (NoVA umbrella page) -----------------------------
  // When set, the [category] dispatcher renders the bespoke <NovaLanding> flagship
  // layout instead of the standard nearest-store city page: video hero, ALL four
  // stores (not just the two nearest), and a dedicated silver / sterling-sets
  // section. `nearest` here lists all four stores (its `drive` string is reused
  // as each store's coverage-corridor blurb). `neighborhoods` become NoVA regions.
  variant?: "region";
  heroSubtitleBold?: string; // a phrase inside heroSubtitle to render as <strong>
  silverTitle?: string; // H2 for the silver / sterling-sets section
  silver?: string; // paragraphs separated by \n\n (uses **bold** markers)
};

export const CITY_LANDINGS: CityLanding[] = [
  {
    slug: "cash-for-gold-northern-virginia",
    city: "Northern Virginia",
    region: "VA",
    variant: "region",
    seoTitle: "Cash for Gold in Northern Virginia (NoVA) | 4 Stores",
    metaDescription:
      "Sell gold, silver & jewelry at 4 Cash for Gold VA stores across Northern Virginia (NoVA). Free appraisal, instant payout, 4.9★ from 500+ reviews.",
    heroTitle: "Cash for Gold Across Northern Virginia",
    heroSubtitle:
      "Four real storefronts across NoVA — Annandale, Chantilly, Manassas, and Vienna/Tysons. Walk in with your items, watch the appraisal happen, and get paid the same visit.",
    heroSubtitleBold: "paid the same visit",
    intro:
      "Northern Virginia is not one place. It stretches from the apartment towers of Alexandria and Arlington inside the Beltway, out along I-66 through Fairfax and into Prince William County, and up Route 7 through Tysons toward Loudoun. A single gold-buying shop can't realistically serve all of that — and mailing your jewelry to a stranger in an envelope shouldn't be the alternative. That's why **Cash for Gold VA operates four physical stores across Northern Virginia (NoVA)**: Annandale on Columbia Pike, Chantilly on Route 50, Manassas on Centreville Road, and Vienna in the Tysons area on Tyco Road. Wherever you are in NoVA, there's a real counter a short drive away.\n\nEvery appraisal works the same way at all four locations, and it happens **in front of you, not in a back room**. We test your gold, silver, and platinum for purity, weigh it on a **calibrated scale you can see**, and price it against the **live spot price** at that moment. Then we explain the number. There's no fee for any of this, and no obligation attached to it — the appraisal is free whether you sell or not.\n\nYour items **stay in your hands until you agree to a price**. If the offer works for you, you get an **instant payout** — paid the same visit, before you leave the store. If it doesn't, you walk out with everything you walked in with, plus a real number to compare anywhere else. That transparency is a big part of why we hold a **4.9★ Google rating across 500+ reviews**, making us one of the region's most-reviewed precious-metals buyers.",
    silverTitle: "Selling silver and sterling sets in Northern Virginia",
    silver:
      "Gold gets the attention, but some of the most valuable things people bring us are silver — and most of it has been sitting in a dining-room cabinet for decades. **Inherited sterling flatware sets, tea services, serving trays, and hollowware** are exactly the items families underestimate. A full sterling flatware service can run to several pounds of .925 silver, and **quantity is where silver adds up**: individually modest pieces become a meaningful payout when the whole set goes on the scale. We check the hallmarks, **test each piece to confirm .925 sterling** (and separate out any silverplate, honestly, so you're not guessing), weigh everything on a **calibrated scale in front of you**, and price it against the **live silver spot price** that day.\n\nWe buy the full range of silver, not just sets: **sterling silver jewelry, silver bars and rounds, .999 bullion**, and **pre-1965 US 90% \"junk silver\" coins** — dimes, quarters, and half dollars whose value is in their silver content, not their face value. If you've inherited a box of coins or a felt-lined chest of flatware and have no idea what it's worth, bring it to any of our four Northern Virginia stores. The appraisal is free, there's no obligation, and if you sell, it's an **instant payout the same visit**.",
    whyLocalTitle: "Why sell locally in Northern Virginia instead of mailing it away",
    whyLocal:
      "Mail-in gold buyers ask you to seal your jewelry — often the most valuable small objects you own — into an envelope, send it to an address you've never visited, and wait for a number decided out of your sight. If you decline, you wait again for the items to come back. At a real counter, none of that applies. You **watch the testing and the weighing yourself**, you hear how the offer was calculated against the live spot price, and your items **never leave your sight** until you've said yes.\n\nThe usual downside of selling locally is that \"local\" means one shop across town in Beltway traffic. Our four stores remove that problem: **Annandale covers the inner Beltway**, **Chantilly covers the Route 50 and Dulles corridor**, **Manassas covers Prince William County and I-66 west**, and **Vienna/Tysons covers the Route 7 corridor**. From almost anywhere in Northern Virginia, one of them is a short drive. And when you sell, you're **paid before you leave** — an instant payout the same visit, not a check that clears in a week or a bank transfer you have to chase.",
    neighborhoods: [
      {
        name: "Arlington & Alexandria",
        note: "Inside the Beltway, our Annandale store at 7262 Columbia Pike is the closest counter — straight out Route 236 or Columbia Pike from Alexandria, Bailey's Crossroads, and South Arlington. Most trips are 15–20 minutes, far quicker than mailing valuables away and waiting a week.",
      },
      {
        name: "Fairfax County",
        note: "Central Fairfax County sits between two of our stores. Springfield, Lincolnia, and Falls Church are minutes from Annandale on Columbia Pike; Fairfax City and points west along Route 50 are closer to Chantilly. Either way, the appraisal is identical — tested and weighed in front of you, priced on the live spot.",
      },
      {
        name: "Prince William County",
        note: "Our Manassas store at 9013 Centreville Rd anchors the western end of the region. Bristow, Gainesville, and Haymarket reach it easily off I-66 or Route 28, and Woodbridge and Dale City can avoid the trek up I-95 entirely. Prince William sellers don't need to drive into Fairfax to get a fair number.",
      },
      {
        name: "Loudoun County",
        note: "Loudoun residents are closest to Chantilly at 14025 Lee Jackson Memorial Hwy, just south of the county line off Route 28 or Route 50. South Riding is practically next door, and Ashburn and Sterling are a quick run down the Loudoun County Parkway or Route 28 — no Toll Road required.",
      },
      {
        name: "Tysons & McLean",
        note: "Our Vienna store at 8453 Tyco Rd #C sits right in the Tysons area, just off Route 7 and Spring Hill. It's the natural stop for McLean, Great Falls, Oakton, and Vienna — and a fitting one for the corridor's fine jewelry, designer pieces, and luxury watches, all appraised the same transparent way as a gold chain.",
      },
      {
        name: "Reston & Herndon",
        note: "The Dulles corridor splits neatly between two stores: Herndon and western Reston are a short hop down Route 28 to Chantilly, while eastern Reston can follow the Toll Road or Route 7 to Vienna/Tysons. Pick whichever direction your day is already headed — the offer is built the same way at both.",
      },
    ],
    nearestIntro:
      "Four real storefronts, one consistent appraisal. Find the Northern Virginia location closest to you — each one buys gold, silver, diamonds, watches, and coins with the same free, in-person appraisal and instant payout.",
    nearest: [
      { slug: "annandale", drive: "Inner-Beltway hub — closest to Alexandria, Arlington, Falls Church & Springfield" },
      { slug: "vienna", drive: "Tysons-area store — serving McLean, Tysons, Oakton, Vienna & Great Falls" },
      { slug: "chantilly", drive: "Route 50 / Dulles corridor — serving Fairfax, Herndon, South Riding, Reston & Loudoun" },
      { slug: "manassas", drive: "Prince William County — serving Manassas, Bristow, Gainesville & Woodbridge" },
    ],
    faqs: [
      {
        q: "Is there cash for gold in NoVA (Northern Virginia)?",
        a: "Yes. Cash for Gold VA is a NoVA-based buyer with four stores across Northern Virginia — Annandale, Chantilly, Manassas, and Vienna/Tysons — so there's a real counter near you whether you're inside the Beltway, out in Prince William, or up in Loudoun. Every location gives a free, in-person appraisal against the live spot price and pays an instant payout the same visit.",
      },
      {
        q: "Where can I sell gold in Northern Virginia?",
        a: "Cash for Gold VA has four stores across Northern Virginia: Annandale (7262 Columbia Pike), Chantilly (14025 Lee Jackson Memorial Hwy), Manassas (9013 Centreville Rd), and Vienna/Tysons (8453 Tyco Rd #C). Walk into any of them for a free, no-obligation appraisal — your items are tested and weighed in front of you and priced against the live spot price.",
      },
      {
        q: "Do you buy silver and sterling silver sets?",
        a: "Yes — silver is a core part of what we buy, not an afterthought. That includes sterling silver jewelry, silver bars and bullion, pre-1965 US 90% junk silver coins, and especially inherited sterling sets: flatware services, tea sets, serving pieces, and hollowware. We test each piece to confirm .925, weigh everything on a calibrated scale in front of you, and price it against the live silver spot. Full sets add up quickly by weight.",
      },
      {
        q: "How do you decide what my gold or silver is worth?",
        a: "Every offer is built the same way at all four stores: we test the item's purity, weigh it on a calibrated scale you can watch, and price it against the live spot price for that metal at that moment. Then we explain the number before you decide anything. Your items stay in your hands until you agree, and the appraisal is free either way.",
      },
      {
        q: "Which Cash for Gold VA location is closest to me?",
        a: "Roughly: Arlington, Alexandria, Falls Church, and Springfield are closest to Annandale. Western Fairfax, Herndon, South Riding, and Loudoun are closest to Chantilly. Prince William County — Manassas, Bristow, Gainesville, Woodbridge — is served by our Manassas store. McLean, Tysons, Vienna, and Oakton are closest to our Vienna store on Tyco Rd, right in the Tysons area.",
      },
      {
        q: "Do you pay on the spot?",
        a: "Yes. If you accept our offer, you get an instant payout — you're paid the same visit, before you leave the store. There's no check to wait on and no transfer to chase. If you decline the offer, you simply take your items home; the appraisal costs nothing and carries no obligation.",
      },
      {
        q: "What else do you buy besides gold and silver?",
        a: "Across all four Northern Virginia stores we buy platinum and palladium, diamonds and precious stones, fine and designer jewelry (Tiffany, Cartier, David Yurman, and similar), luxury watches including Rolex, coins from junk silver to collectible and bullion. If you're unsure whether something qualifies, bring it in — the appraisal is free.",
      },
    ],
    relatedPosts: ["cash-for-gold-nova-falls-church-va", "we-buy-estate-gold-jewelry", "we-pay-90-percent-for-gold-coins"],
    closingCta:
      "Wherever you are in Northern Virginia, one of our four stores is a short drive away. Call the location nearest you or just walk in — the appraisal is free, the testing happens in front of you, and if you sell, it's an instant payout the same visit.",
  },
  {
    slug: "cash-for-gold-alexandria",
    city: "Alexandria",
    region: "VA",
    seoTitle: "Cash for Gold in Alexandria, VA | Instant Payout",
    metaDescription:
      "Selling gold in Alexandria, VA? Get a free appraisal and instant payout at our nearest store in Annandale, 15 minutes away. 4.9★, 500+ reviews.",
    heroTitle: "Cash for Gold in Alexandria, VA",
    heroSubtitle:
      "We don't have a storefront in Alexandria, but our Annandale location is a straight 15-minute drive west on Route 236 — bring your gold in today and walk out paid the same visit.",
    intro:
      "If you're searching for cash for gold in Alexandria, here's the honest answer: our **nearest physical store isn't in Alexandria itself**, it's a short drive away in **Annandale**, with a second option in Vienna toward Tysons. Both are real storefronts where you watch us test and weigh your items on a calibrated scale, get an offer tied to the live spot price, and **leave paid the same day** — no mailing, no waiting on a check.\n\nAlexandria sellers make up a steady share of the walk-in traffic at our nearest stores — for most of the city, Annandale is a 15-minute drive you can make on a lunch break. And coming to a real counter is exactly why people choose local **gold buyers near Alexandria** over a mail-in envelope: a **genuine Victorian brooch from an Old Town estate** gets examined for its craftsmanship and age, not just weighed as melt, and a real class ring gets told apart from a plated one without guesswork.",
    whyLocalTitle: "Why sell your gold in Alexandria locally instead of mailing it in",
    whyLocal:
      "Mail-in gold buyers ask you to ship your jewelry to a facility you'll never see, then wait days for an offer you have to accept sight unseen before you get paid. If you sell locally near Alexandria instead, you **keep physical possession of your gold until you agree to a number**. You watch it get weighed and tested in front of you, ask questions in real time, and either take the cash or walk out with your jewelry still in your pocket.\n\nFor Alexandria residents, the drive to Annandale is short enough that it isn't really a tradeoff — it's Little River Turnpike or the Beltway, **about 15 minutes** from most of the city. That's faster than a round trip to the post office and back, and you're **paid before you leave the parking lot**, not a check that clears in a week.",
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
        a: "We start with the live spot price per troy ounce, divide by 31.1 to get a per-gram price, then multiply by your item's karat purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k — and its weight. For plain scrap gold a small refining margin is deducted to cover melting and assaying; standard bullion gold coins typically pay 85-90% of the live spot price. Designer or gemstone pieces are appraised separately, since they're often worth more than their metal content.",
      },
      {
        q: "Is it better to sell locally than mail my gold in?",
        a: "For most people, yes. Mail-in buyers require you to ship your items before you know the offer and wait days for payment. Selling in person near Alexandria means you keep your jewelry in hand, watch it tested on a calibrated scale, and get paid the same visit if you accept the price.",
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
    seoTitle: "Sell Gold in Fairfax, VA | Instant Payout, 4.9★ Rated",
    metaDescription:
      "Sell gold in Fairfax, VA? Our Chantilly store is 12–15 minutes west on Route 50 — free appraisal, instant payout. 4.9★ from 500+ reviews.",
    heroTitle: "Cash for Gold in Fairfax, VA",
    heroSubtitle:
      "We don't have a store in Fairfax itself, but our Chantilly location is a straight shot west on Route 50 — about 12 to 15 minutes — where your gold is tested in front of you and paid out on the spot.",
    intro:
      "Searching for cash for gold in Fairfax? Straight answer first: **we don't have a storefront inside Fairfax**, but we're closer than you might think. Our **Chantilly store sits right on Lee Jackson Memorial Highway (Route 50)**, roughly 8 miles and 12–15 minutes west of the city, and our Annandale store is about 15 minutes east on Little River Turnpike. At either counter, your items are tested and weighed on a calibrated scale while you watch, quoted against the **live spot price**, and paid before you leave.\n\nBecause Fairfax sits at the junction of I-66, US-50, Route 123, and the Fairfax County Parkway, almost anyone in the area is within a 15-minute drive of one of those two counters — which makes local **gold buyers in Fairfax** searches easy to act on the same afternoon. That matters more than convenience alone: a courthouse-era heirloom from an Old Town Fairfax family gets appraised for its age and workmanship, and a GMU class ring gets tested for its true karat, instead of both being tossed on the same melt pile the way a mail-in envelope would treat them.",
    whyLocalTitle: "Why Fairfax sellers do better in person than with mail-in gold buyers",
    whyLocal:
      "A mail-in buyer asks you to seal your jewelry in an envelope, trust a prepaid label, and wait for a stranger's offer with your gold already out of your hands. Selling in person flips that: **your items never leave your sight until you've agreed on a price**. You see the karat test, you see the scale reading, and if the number doesn't work for you, you put your jewelry back in your pocket and drive home — no return shipping, no fine print.\n\nFrom Fairfax, that in-person option costs you almost nothing in time. The **Chantilly counter is one road the whole way** — west on Route 50 past Fair Oaks, about 12–15 minutes door to door — and Annandale is a comparable run east on Route 236. Either trip is shorter than standing in line at the post office, and it ends with **paid the same visit** instead of a payment that arrives whenever the envelope does.",
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
        note: "Virginia's largest public university brings us students and faculty selling class rings, gold chains, and single earrings for a quick payout — small items that still add up fast once they're tested and weighed at real karat value.",
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
        a: "Yes. Standard bullion gold coins — American Eagles, Krugerrands, Maple Leafs, and similar — typically pay 85-90% of the live spot price. Collectible, rare, or graded coins are appraised individually, because dates, mint marks, and condition can put their value well above the gold content, so don't clean them and bring any grading slabs or paperwork you have.",
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
  {
    slug: "cash-for-gold-herndon",
    city: "Herndon",
    region: "VA",
    seoTitle: "Sell Gold in Herndon, VA | 22k & 24k Paid at True Purity",
    metaDescription:
      "Sell gold in Herndon, VA: our Chantilly store is 10-15 minutes down Route 28. Free testing, instant payout, 22k/24k paid at full purity. 4.9★, 500+ reviews.",
    heroTitle: "Cash for Gold in Herndon, VA",
    heroSubtitle:
      "We don't have a storefront in Herndon itself, but our Chantilly store is a quick 10-15 minute run south on Route 28 (Sully Road) — your gold is tested while you watch and paid out the same visit.",
    intro:
      "Looking for cash for gold in Herndon? Honest answer up front: **our nearest store is in Chantilly, not Herndon** — but since Herndon sits right on Route 28, that's a **10-15 minute straight drive south** to our counter on Lee Jackson Memorial Highway. There's a second option too: our Vienna/McLean store, about 15-20 minutes east on the Dulles Toll Road, which is often the easier run from the Reston side of town. At either counter you watch your items get tested and weighed on a calibrated scale, hear a number tied to the live spot price, and take cash home the same trip.\n\nOne thing that sets Herndon apart from the rest of our coverage area: a lot of the gold we see from here is **high-karat 22k and 24k jewelry** — Indian and Middle Eastern wedding sets, bangles, and chains that carry far more gold per gram than the typical American 14k piece. That's exactly where choosing careful **gold buyers in Herndon's area** pays off, because a buyer who lazily quotes everything \"like 14k\" is underpaying a 22k bangle by more than a third. We test every piece for its actual purity and price it at that purity, whether it's a 24k temple necklace or a 10k class ring.",
    whyLocalTitle: "Why Herndon sellers should skip the mail-in envelope",
    whyLocal:
      "With a mail-in gold buyer, your jewelry rides off in a prepaid envelope and the offer arrives after your gold is already in someone else's building — and for high-karat pieces especially, you have no way to confirm they tested it as 22k instead of quietly grading it lower. Selling in person keeps the leverage with you: **the karat test and the scale reading happen in front of your eyes**, you can ask why a piece graded the way it did, and if the number falls short, your jewelry goes back in your bag and you drive home.\n\nFrom Herndon, that in-person trip barely costs you anything. Route 28 runs straight past the airport traffic down to Route 50, putting the **Chantilly counter about 10-15 minutes from almost anywhere in town** — a shorter errand than most Dulles-corridor commutes. If you're closer to the Toll Road on the Reston side, Vienna/McLean is an easy eastbound run instead. Either way you're **paid the same visit before you head back up the road**, not waiting on a check to survive the mail twice.",
    neighborhoods: [
      {
        name: "Historic Downtown Herndon",
        note: "The blocks around the old Herndon Depot and the W&OD Trail hold some of the town's oldest houses, and with them come vintage and inherited pieces — old pocket watches, mid-century settings, jewelry passed down since long before the tech corridor arrived. We appraise age and workmanship on those before weight ever enters the conversation.",
      },
      {
        name: "McNair & the Dulles corridor",
        note: "The newer communities near the airport are home to much of Herndon's large South Asian and international population, which is why 22k and 24k wedding jewelry — bangles, bridal sets, coin pendants — is a genuine specialty at our nearby Chantilly counter. High-karat gold is worth substantially more per gram, and we test and pay at that true purity.",
      },
      {
        name: "Sugarland Run & Kingstream",
        note: "These townhome and single-family communities on the north side skew toward working professionals, so we tend to see modern pieces from here: designer jewelry, luxury watches, and newer diamond settings. Brand and condition can beat melt value, so those get appraised individually rather than weighed as scrap.",
      },
      {
        name: "Franklin Farm & Oak Hill",
        note: "The established family neighborhoods on the 20171 side bring in the steady, everyday side of the business — 14k wedding bands, broken chains, single earrings, and gold accumulated across a generation or two. Small pieces add up quickly once each one is tested at its real karat.",
      },
    ],
    nearestIntro:
      "There's no Cash for Gold VA storefront in Herndon yet, but the town sits at the corner of Route 28 and the Dulles Toll Road — and each of those roads leads almost directly to one of our two nearest stores.",
    nearest: [
      { slug: "chantilly", drive: "about 10-15 minutes south on Route 28 (Sully Road) to Route 50 — the closest store to Herndon" },
      { slug: "vienna", drive: "about 15-20 minutes east on the Dulles Toll Road toward Tysons, convenient from the Reston side" },
    ],
    faqs: [
      {
        q: "Where can I sell gold in Herndon, VA?",
        a: "There's no Cash for Gold VA store inside Herndon itself. The closest is our Chantilly location at 14025 Lee Jackson Memorial Hwy, Chantilly, VA 20151 — (571) 224-5279 — about 10-15 minutes south on Route 28. Our Vienna/McLean store at 8453 Tyco Rd #C, Vienna, VA 22182 — (703) 889-0532 — is roughly 15-20 minutes east via the Dulles Toll Road and often easier from the Reston side of town.",
      },
      {
        q: "Do you buy 22k and 24k Indian gold jewelry near Herndon?",
        a: "Yes — high-karat jewelry is one of the most common things Herndon sellers bring us. Indian and Middle Eastern wedding sets, bangles, and chains are usually 22k (about 91.7% pure) or 24k (about 99.9% pure), which means far more gold per gram than standard American 14k. We verify the purity with electronic and acid testing rather than trusting the stamp alone, then price at the tested karat — so a 22k bangle is paid as 22k, never rounded down.",
      },
      {
        q: "How much will I get paid for my gold from Herndon?",
        a: "We take the live spot price per troy ounce, divide by 31.1 for a per-gram rate, then multiply by your item's purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k, roughly 91.7% for 22k, and 99.9% for 24k — and its weight on our scale. Plain scrap gold carries a small refining margin for melting and assaying, standard bullion gold coins typically pay 85-90% of live spot, and coins, designer pieces, and gemstone jewelry are appraised separately since they can be worth more than the metal alone.",
      },
      {
        q: "Which store is closer to Herndon — Chantilly or Vienna?",
        a: "Chantilly, for most of town: it's about 10-15 minutes straight down Route 28 to Route 50, one road nearly the whole way. Vienna/McLean is about 15-20 minutes east on the Dulles Toll Road, which can be the quicker choice if you live near the Reston line or already commute toward Tysons. Both pay the same way — tested in front of you, paid the same visit.",
      },
      {
        q: "Do you buy luxury watches and designer jewelry from Herndon sellers?",
        a: "Yes. With so many tech-corridor professionals in Herndon, watches and branded jewelry come across our counter regularly. Those are appraised individually — brand, model, and condition often put the value well above the gold weight — so bring the box, papers, or extra links if you still have them, since original accessories raise the offer.",
      },
    ],
    relatedPosts: [
      "we-buy-estate-gold-jewelry",
      "selling-gold-jewelry",
      "cash-for-gold-close-to-me",
    ],
    closingCta:
      "Point the car down Route 28 — our Chantilly store is 10-15 minutes south of Herndon, and your gold can be tested, quoted, and paid the same visit before you're back through town.",
  },
  {
    slug: "cash-for-gold-south-riding",
    city: "South Riding",
    region: "VA",
    seoTitle: "Sell Gold Near South Riding, VA | Instant Payout",
    metaDescription:
      "Sell gold near South Riding, VA — our Chantilly store is 10–15 minutes east on Route 50. Free appraisal, instant payout. 4.9★, 500+ reviews.",
    heroTitle: "Cash for Gold in South Riding, VA",
    heroSubtitle:
      "There's no gold buyer inside South Riding itself, but our Chantilly store is 10–15 minutes east on Route 50 — get your jewelry tested in front of you and drive home paid the same trip.",
    intro:
      "Looking for cash for gold in South Riding? Here's the straight answer: **we don't have a counter inside the community**, but our **Chantilly store sits right on Route 50 (Lee Jackson Memorial Highway)**, about 10–15 minutes east of the Dulles South area — the same road you already take toward Fair Oaks. Your items are tested and weighed on a calibrated scale while you watch, quoted against the **live spot price**, and paid the same visit before you head back west.\n\nSouth Riding's gold looks different from what comes out of Northern Virginia's older towns, and we price it accordingly. Because most of the community was built from the late 1990s on, we see far more **modern pieces — 14k wedding sets, upgraded engagement rings, everyday chains, kids' jewelry, and gifts from good years** — than dusty estate boxes. That's exactly the kind of gold that's easy to underestimate: it's stamped, it's real, and it adds up quickly on the scale, which is why families searching for **gold buyers near South Riding** often walk out of Chantilly with more than they expected.",
    whyLocalTitle: "Why South Riding sellers should skip the mail-in envelope",
    whyLocal:
      "Mail-in gold buyers ask you to seal your wedding set in a padded envelope, hand it to a carrier, and hope the offer that comes back days later is fair — with your jewelry already in someone else's facility. Selling in person reverses that entirely: **your gold stays in your hands until you've heard the number and agreed to it**. You watch the karat test, you watch the scale, and if the offer doesn't work, you drive home with everything you came with.\n\nFrom South Riding, that in-person option is unusually painless. The Chantilly counter is **one road the whole way — Route 50 east, about 10–15 minutes** from the town center, no highway merges and no parking garages. That's less time than boxing and shipping your jewelry would take, and instead of tracking an envelope for a week, you're **paid the same visit**.",
    neighborhoods: [
      {
        name: "Central South Riding",
        note: "The original sections around the town green and golf course are full of households that bought in when the community was new — which means two decades of anniversaries, upgrades, and outgrown jewelry, and a lot of solid 14k that's been replaced but never sold.",
      },
      {
        name: "Stone Ridge",
        note: "The adjacent planned community shares South Riding's profile: younger families with modern pieces — engagement rings from a first marriage, mismatched gold earrings, baby bracelets — items we test and quote individually so nothing real gets dismissed as too small to matter.",
      },
      {
        name: "East Gate & Dulles Landing",
        note: "The retail corridor along Route 50 reflects what gets bought here in good years — designer jewelry and luxury watches — and those are appraised on brand, model, and condition, which can push an offer well past what the metal alone would weigh out to.",
      },
      {
        name: "Aldie & the Dulles South edge",
        note: "West of the planned neighborhoods, the older rural side of Loudoun County occasionally sends in inherited pieces from longtime local families — and anything with real age or craftsmanship gets appraised on its own merits instead of quoted as scrap.",
      },
    ],
    nearestIntro:
      "South Riding doesn't have a Cash for Gold VA storefront yet, but both of our nearest stores are a straight run along roads you already drive — Route 50 east or Route 28 south.",
    nearest: [
      { slug: "chantilly", drive: "about 10–15 minutes east on Route 50 (Lee Jackson Memorial Highway) — one road the whole way from South Riding" },
      { slug: "manassas", drive: "about 15–20 minutes south via Loudoun County Parkway and Route 28, often the quicker run from the southern edge of the community" },
    ],
    faqs: [
      {
        q: "Where can I sell gold in South Riding, VA?",
        a: "There's no gold-buying storefront inside South Riding itself. The closest is our Chantilly store at 14025 Lee Jackson Memorial Hwy, Chantilly, VA 20151 — (571) 224-5279 — about 10–15 minutes east on Route 50. Our Manassas store at 9013 Centreville Rd, Manassas, VA 20110 — (571) 359-0146 — is roughly 15–20 minutes south via Loudoun County Parkway and Route 28.",
      },
      {
        q: "My jewelry is all modern — is newer gold worth selling?",
        a: "Absolutely. Melt value depends on karat and weight, not age — a 14k chain bought at Dulles Landing five years ago is priced off the same live spot price as a decades-old piece. In fact, modern jewelry from a community like South Riding is often the easiest to quote: clear karat stamps, known brands, and good condition mean fewer unknowns and a fast, clean offer.",
      },
      {
        q: "I'm selling a ring after a divorce or an upgrade — how does that work?",
        a: "It's one of the most common reasons people come in, and we keep it simple and private. Bring the ring, we test the karat and weigh it in front of you, and any diamond is evaluated separately from the gold — center stones frequently carry more value than the band itself. You hear one combined number, and there's zero obligation if you'd rather think it over.",
      },
      {
        q: "How is my payout calculated?",
        a: "We start with the live spot price per troy ounce, divide by 31.1 for a per-gram price, then multiply by your item's karat purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k — and its weight on our scale. Plain scrap gold has a small refining margin deducted to cover melting and assaying, and standard bullion gold coins typically pay 85-90% of the live spot price. Coins, designer pieces, and gemstone jewelry are appraised separately, since they're often worth more than their metal content.",
      },
      {
        q: "Do you buy designer jewelry and luxury watches near South Riding?",
        a: "Yes — and they're evaluated as brand pieces, not melted-metal weight. Designer jewelry and luxury watches are appraised on maker, model, and condition at our Chantilly store, so bring the box, papers, or extra links if you still have them; original packaging and documentation can meaningfully raise the offer.",
      },
    ],
    relatedPosts: [
      "selling-gold-jewelry",
      "is-cash-for-gold-worth-it",
      "maximizing-your-profit-with-cash-for-gold",
    ],
    closingCta:
      "Point the car east on Route 50 — our Chantilly store is 10–15 minutes from South Riding, and your gold is tested, quoted, and paid in a single visit.",
  },
  {
    slug: "cash-for-gold-centreville",
    city: "Centreville",
    region: "VA",
    seoTitle: "Sell Gold in Centreville, VA | Two Stores Within 15 Min",
    metaDescription:
      "Sell gold in Centreville, VA? Our Chantilly store is 8–12 minutes north on Route 28 — free testing, instant payout. 4.9★ from 500+ reviews.",
    heroTitle: "Cash for Gold in Centreville, VA",
    heroSubtitle:
      "We don't have a storefront in Centreville itself, but our Chantilly location is just 8–12 minutes north up Route 28 — your gold gets tested in front of you and paid out the same visit.",
    intro:
      "Looking for cash for gold in Centreville? Honest answer up front: **we don't have a store inside Centreville**, but few places in Northern Virginia are better positioned to sell. Centreville sits where **Route 28, Route 29, and I-66 come together**, and that junction puts you within about 15 minutes of two of our counters in opposite directions — **Chantilly, 8–12 minutes north up Route 28 and Route 50**, and **Manassas, 12–15 minutes south down Centreville Road**. At either one, your items are tested and weighed on a calibrated scale while you watch, quoted against the live spot price, and paid before you leave.\n\nThat crossroads location also means Centreville is one of the more competitive corners of the NoVA gold market — several buyers operate within a short drive, and that competition works in a seller's favor: nobody around here holds onto customers with lowball offers for long. What **gold buyers in Centreville** searches actually bring through our doors is a steady mix of everyday karat jewelry, inherited pieces, gold and silver coins, and the occasional luxury watch or designer item. Much of it is inherited or simply never worn, and people are **often surprised what a small pile is worth** once each piece is tested at its true karat and priced at today's spot.",
    whyLocalTitle: "Why Centreville sellers beat the mail-in envelope without leaving Route 28",
    whyLocal:
      "Mail-in gold buyers ask you to seal your jewelry into a prepaid envelope, surrender it to a shipping label, and wait days for an offer you can't watch being calculated. In person, the whole transaction stays in front of you: **you see the karat test, you see the scale reading, and your gold stays in your possession until you accept a number**. If the offer doesn't work, you pocket your jewelry and you're back on 28 in two minutes — no return shipping, no chasing a check.\n\nFrom Centreville, going in person barely costs you anything. Very few towns without their own store have **two buying counters within about 15 minutes in opposite directions**: head north on Route 28 to Route 50 and you're at our **Chantilly** store in 8–12 minutes, or run south down Centreville Road and you're at **Manassas** in 12–15 — whichever matches the direction your day is already going. Either drive is shorter than a post-office round trip, and it ends with **paid the same visit**.",
    neighborhoods: [
      {
        name: "Virginia Run",
        note: "One of Centreville's established single-family communities from the late '80s and early '90s — households here have had decades to accumulate wedding sets, everyday 14k jewelry, and gift pieces that were worn twice, and those unworn items sell at exactly the same per-gram price as anything else once tested.",
      },
      {
        name: "Little Rocky Run",
        note: "Families in this neighborhood often come in during a downsizing or after settling a parent's estate, bringing mixed boxes of chains, bands, and coins — we test and quote each piece separately, so the real gold gets separated from the plated on the spot.",
      },
      {
        name: "Sully Station",
        note: "Sitting right along Route 28 on Centreville's north side, Sully Station is closest of all to our Chantilly counter — a quick run up past the Route 50 interchange — and tends to bring in modern pieces: designer jewelry, luxury watches, and newer gold where brand and condition get appraised on top of weight.",
      },
      {
        name: "Historic Centreville & Old Centreville Road",
        note: "The historic core around Old Centreville Road dates back to Civil War-era Centreville, and the townhomes and older properties nearby occasionally turn up genuinely old pieces — early pocket watches, antique settings, old coinage — which we appraise for age and collectibility before we ever talk melt weight.",
      },
    ],
    nearestIntro:
      "There's no Cash for Gold VA storefront in Centreville yet, but the Route 28 corridor puts two of our stores within about 15 minutes — one north, one south — so choose the direction that fits your errands.",
    nearest: [
      { slug: "chantilly", drive: "the closest store — about 8–12 minutes north up Route 28 to Route 50 (Lee Jackson Memorial Highway)" },
      { slug: "manassas", drive: "about 12–15 minutes south down Centreville Road (Route 28), often the quicker trip from Centreville's southern neighborhoods" },
    ],
    faqs: [
      {
        q: "Where can I sell gold in Centreville, VA?",
        a: "There's no Cash for Gold VA store inside Centreville itself, but two are within about 15 minutes. The nearest is our Chantilly location at 14025 Lee Jackson Memorial Hwy, Chantilly, VA 20151 — (571) 224-5279 — about 8–12 minutes north via Route 28 and Route 50. Our Manassas store at 9013 Centreville Rd, Manassas, VA 20110 — (571) 359-0146 — is roughly 12–15 minutes south straight down Centreville Road.",
      },
      {
        q: "Which store is closer to Centreville — Chantilly or Manassas?",
        a: "Chantilly, for most of Centreville: about 8–12 minutes north on Route 28, especially quick from Sully Station and anywhere near the Route 50 interchange. If you live on the southern side of town — closer to Route 29 or Compton Road — Manassas is a comparable 12–15 minutes down Centreville Road. Since both sit on the same Route 28 corridor, just pick the direction you're already driving.",
      },
      {
        q: "How much will I get for my gold in Centreville?",
        a: "Your quote starts with the live spot price per troy ounce, divided by 31.1 to get a per-gram price, then multiplied by your item's karat purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k — and its weight on our scale. Plain scrap gold has a small refining margin deducted to cover melting and assaying, standard bullion gold coins typically pay 85-90% of the live spot price, and coins, designer pieces, and gemstone jewelry are appraised separately since they can be worth more than their metal content.",
      },
      {
        q: "Is a small amount of inherited gold even worth bringing in?",
        a: "Almost always, yes. A lot of what Centreville sellers bring us is inherited or unworn — a few rings, a broken chain, a handful of old coins — and small piles routinely add up to more than people expect once each piece is tested at its true karat and priced at today's spot. There's no minimum and the appraisal is free, so it costs you nothing to find out.",
      },
      {
        q: "How long does selling gold near Centreville actually take?",
        a: "Usually 10–20 minutes at the counter for a typical batch of jewelry — no appointment needed at either Chantilly or Manassas. We test and weigh each piece in front of you, quote a price against the live spot, and if you accept, you're paid the same visit on the spot. Larger estate lots or collectible coins can take a bit longer since those get appraised individually.",
      },
    ],
    relatedPosts: [
      "we-buy-estate-gold-jewelry",
      "understanding-the-cash-for-gold-process",
      "is-cash-for-gold-worth-it",
    ],
    closingCta:
      "Head 8–12 minutes north on Route 28 to our Chantilly store and find out what that Centreville jewelry box is really worth — paid before you're back on I-66.",
  },
  {
    slug: "cash-for-gold-bristow",
    city: "Bristow",
    region: "VA",
    seoTitle: "Sell Gold Near Bristow, VA | Instant Payout, 10 Min Away",
    metaDescription:
      "Sell gold near Bristow, VA — our Manassas store is 10–12 minutes via Linton Hall Rd and Route 28. Free appraisal, instant payout. 4.9★, 500+ reviews.",
    heroTitle: "Cash for Gold in Bristow, VA",
    heroSubtitle:
      "There's no gold buyer inside Bristow itself, but our Manassas store is only 10–12 minutes away via Linton Hall Road and Route 28 — your jewelry gets tested in front of you and you drive home paid the same trip.",
    intro:
      "Searching for cash for gold in Bristow? Honest answer first: **we don't have a counter in Bristow itself**, but of every community we serve without its own storefront, Bristow has the shortest drive to one. Our **Manassas store sits on Centreville Road (Route 28), about 10–12 minutes away** — Linton Hall Road to Nokesville Road and you're there, roughly the same run as a trip to the commuter lot. Your items are tested and weighed on a calibrated scale while you watch, quoted against the **live spot price**, and paid before you head back down Linton Hall.\n\nBristow grew up fast — most of it was built in the 2000s as Prince William County's planned communities filled in around Braemar and Victory Lakes — and the gold that comes from here reflects that. We see **wedding and engagement sets from the years these neighborhoods were new, everyday 14k chains and bracelets, kids' baptism and birthday jewelry, and gifts that never quite matched**. None of it needs to be old to be worth real money: for families comparing **gold buyers near Bristow**, what matters is karat and weight on an honest scale, and a fifteen-year-old wedding band prices off the same live spot as any heirloom.",
    whyLocalTitle: "Why Bristow sellers should make the short drive instead of mailing gold in",
    whyLocal:
      "A mail-in gold buyer asks you to seal your ring into a prepaid envelope, send it to a facility you'll never see, and wait days for a take-it-or-leave-it offer with your gold already out of your hands. Selling in person keeps every step where you can see it: **the karat test happens in front of you, the scale reading happens in front of you, and your jewelry stays yours until you say yes to a number**. If the offer falls short, it goes back in your pocket and you're home before school pickup.\n\nAnd from Bristow, 'in person' is barely a trip at all. **Linton Hall Road to Route 28 puts our Manassas counter about 10–12 minutes from Braemar or Victory Lakes** — closer than most of the errands you already run toward Gainesville or the Promenade. Compare that with packaging your jewelry, driving to drop it off, and tracking an envelope for a week, and the local option wins on both speed and certainty: an **instant payout the same visit**, not a check that arrives whenever the mail does.",
    neighborhoods: [
      {
        name: "Braemar",
        note: "One of Prince William's signature planned communities from the early 2000s — households here are now one or two decades past their wedding years, which means upgraded rings, retired first wedding sets, and anniversary gold that's been replaced but never sold, all of it worth a real quote at today's spot.",
      },
      {
        name: "Victory Lakes",
        note: "The families who filled Victory Lakes as it was built tend to bring in milestone jewelry — push presents, sweet-sixteen pieces, outgrown kids' bracelets and earrings — small items individually, but tested piece by piece they add up faster than most sellers expect.",
      },
      {
        name: "Sheffield Manor",
        note: "This established townhome and single-family neighborhood off Linton Hall sends us the practical side of the business: broken chains, single earrings, and everyday 14k that's no longer worn — condition doesn't matter for melt value, so damaged pieces pay the same per gram as intact ones.",
      },
      {
        name: "Linton Hall Road corridor",
        note: "The retail stretch between Bristow and Gainesville is where much of this jewelry was bought in the first place, and it skews modern — branded pieces, diamond settings, and the occasional luxury watch, which we appraise on maker and condition rather than weighing as scrap.",
      },
    ],
    nearestIntro:
      "Bristow doesn't have a Cash for Gold VA storefront yet, but Route 28 connects it almost directly to two of our stores — Manassas just up the road, and Chantilly a straight run farther north.",
    nearest: [
      { slug: "manassas", drive: "about 10–12 minutes via Linton Hall Road and Route 28 (Nokesville Road) — the closest store to Bristow by a wide margin" },
      { slug: "chantilly", drive: "about 18–20 minutes north up Route 28, a good second option if your day is headed toward the Route 50 side" },
    ],
    faqs: [
      {
        q: "Where can I sell gold in Bristow, VA?",
        a: "There's no gold-buying storefront inside Bristow itself. The closest is our Manassas store at 9013 Centreville Rd, Manassas, VA 20110 — (571) 359-0146 — about 10–12 minutes away via Linton Hall Road and Route 28. Our Chantilly store at 14025 Lee Jackson Memorial Hwy, Chantilly, VA 20151 — (571) 224-5279 — is roughly 18–20 minutes north up Route 28 if that direction suits your day better.",
      },
      {
        q: "My jewelry was all bought in the last 10–20 years — is it worth selling?",
        a: "Yes — age has nothing to do with melt value. A 14k wedding band from a 2008 Braemar wedding is priced off the same live spot price, karat, and weight as gold twice its age. Newer jewelry is often the easiest to quote, too: clear karat stamps and good condition mean fewer unknowns and a faster offer. If a piece hasn't been worn since the kids outgrew it or the style changed, it's a candidate.",
      },
      {
        q: "How is my payout calculated?",
        a: "We start with the live spot price per troy ounce, divide by 31.1 to get a per-gram price, then multiply by your item's karat purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k — and its weight on our scale. Plain scrap gold has a small refining margin deducted to cover melting and assaying, and standard bullion gold coins typically pay 85-90% of the live spot price. Coins, designer pieces, and gemstone jewelry are appraised separately, since they're often worth more than their metal content.",
      },
      {
        q: "How long does it take to sell gold near Bristow?",
        a: "Plan on 10–20 minutes at the counter for a typical batch, plus the 10–12 minute drive from Bristow to our Manassas store — no appointment needed. We test and weigh each piece in front of you, quote against the live spot price, and if you accept, you're paid on the spot. The whole errand fits between drop-off and pickup, or before a show out at Jiffy Lube Live.",
      },
      {
        q: "Do you buy diamond rings and designer jewelry from Bristow sellers?",
        a: "Yes. Engagement rings, diamond earrings, and branded jewelry come across our Manassas counter from Bristow regularly, and they're never quoted on gold weight alone — the diamond is evaluated separately from the setting, and designer pieces are appraised on maker, model, and condition. Bring the box, certificate, or appraisal paperwork if you have it; documentation can raise the offer.",
      },
    ],
    relatedPosts: [
      "selling-gold-jewelry",
      "is-cash-for-gold-worth-it",
      "cash-for-gold-close-to-me",
    ],
    closingCta:
      "Take Linton Hall Road to Route 28 and you're at our Manassas store in 10–12 minutes — walk in with the jewelry Bristow outgrew and walk out with an instant payout.",
  },
  {
    slug: "cash-for-gold-gainesville",
    city: "Gainesville",
    region: "VA",
    seoTitle: "Sell Gold in Gainesville, VA | Estate Buyers, Instant Payout",
    metaDescription:
      "Sell gold in Gainesville, VA — our Manassas store is 12–15 min away via Route 29. Free appraisal, estate collections welcome, instant payout. 4.9★, 500+ reviews.",
    heroTitle: "Cash for Gold in Gainesville, VA",
    heroSubtitle:
      "We don't have a storefront in Gainesville itself, but our Manassas location is only 12–15 minutes southeast via Route 29 or Linton Hall Road — your gold is tested in front of you and you walk out paid the same visit.",
    intro:
      "Searching for cash for gold in Gainesville? Honest answer first: **we don't have a counter in Gainesville itself**, but our **Manassas store is about 12–15 minutes southeast** — an easy run down Route 29 or Linton Hall Road from anywhere near the I-66 interchange. Our Chantilly store is a second option, roughly 18–20 minutes northeast via I-66 and Route 28. At either counter, your items are tested and weighed on a calibrated scale while you watch, quoted against the **live spot price**, and paid before you head back up the road.\n\nGainesville has grown fast around Virginia Gateway and the Route 29 corridor, but a lot of what comes to us from here isn't new at all. Between **Heritage Hunt and the area's other established communities, whole-collection and downsizing appraisals are a genuine specialty** for us — a lifetime of wedding sets, anniversary pieces, and gifted jewelry that suddenly needs sorting when a household simplifies. That's the kind of job worth doing across a real counter with patient **gold buyers in Gainesville's corner of Prince William County**, where every piece gets tested individually instead of guessed at, and nothing real gets waved off as not worth weighing.",
    whyLocalTitle: "Why Gainesville sellers do better in person than mailing gold away",
    whyLocal:
      "Mail-in gold buyers are a particularly bad fit for the kind of selling Gainesville sends us. A single broken chain might survive an envelope fine — but a **downsizing household with thirty or forty pieces has no business shipping a collection to a facility they'll never see**, accepting one lump-sum offer with no way to know which pieces were graded as what. Across our counter, each item is tested and weighed separately in front of you, you hear how every number was reached, and **your jewelry stays in your hands until you agree to a price**. If the offer falls short, everything goes back in the box and you drive home.\n\nAnd from Gainesville, driving is barely a cost at all. The **Manassas counter is about 12–15 minutes southeast** — straight down Route 29, or via Linton Hall Road if you're on the Piedmont or Braemar side — which is shorter than most trips you already make to Virginia Gateway. You're **paid the same visit**, not waiting a week to learn what a stranger decided your grandmother's rings were worth.",
    neighborhoods: [
      {
        name: "Heritage Hunt",
        note: "One of the area's best-known 55+ active-adult communities is the heart of our Gainesville business: downsizing and estate gold. When decades of wedding sets, anniversary jewelry, and inherited pieces need to become something simpler, we appraise the whole collection patiently — piece by piece, no obligation — and buy everything from fine settings to plain scrap in one visit.",
      },
      {
        name: "Piedmont",
        note: "The gated golf-course community tends toward well-kept fine jewelry and luxury watches alongside everyday 14k and 18k pieces. Brand-name and gemstone items from here get appraised individually on maker and condition, since they're frequently worth more than their gold weight alone.",
      },
      {
        name: "Somerset Crossing",
        note: "This newer family neighborhood near the Route 29 interchange brings us the modern side of the ledger — upgraded engagement rings, mismatched earrings, chains that broke and never got fixed — clearly stamped pieces that quote quickly and add up faster than most sellers expect.",
      },
      {
        name: "Virginia Gateway & the Route 29 corridor",
        note: "Gainesville's retail hub is where much of this jewelry was bought in the first place, and it's also your on-ramp to selling it: Route 29 runs from Gateway straight down to our Manassas counter, so an appraisal fits into the same loop as a normal shopping errand.",
      },
    ],
    nearestIntro:
      "Gainesville doesn't have a Cash for Gold VA storefront yet, but sitting on the I-66/Route 29 interchange means both of our nearest stores are one familiar road away — Route 29 southeast or I-66 northeast.",
    nearest: [
      { slug: "manassas", drive: "the closest store — about 12–15 minutes southeast via Route 29, or Linton Hall Road from the Piedmont side of Gainesville" },
      { slug: "chantilly", drive: "about 18–20 minutes northeast via I-66 and Route 28, handy if your day already points toward the Dulles corridor" },
    ],
    faqs: [
      {
        q: "Where can I sell gold in Gainesville, VA?",
        a: "There's no Cash for Gold VA store inside Gainesville itself. The closest is our Manassas location at 9013 Centreville Rd, Manassas, VA 20110 — (571) 359-0146 — about 12–15 minutes southeast via Route 29 or Linton Hall Road. Our Chantilly store at 14025 Lee Jackson Memorial Hwy, Chantilly, VA 20151 — (571) 224-5279 — is roughly 18–20 minutes northeast via I-66 and Route 28.",
      },
      {
        q: "I'm downsizing and have a whole collection of inherited gold — how does selling an estate work?",
        a: "Bring everything, unsorted, exactly as it is — this is one of the most common appointments we handle from the Gainesville area, especially from Heritage Hunt households simplifying into a smaller home. We go through the collection with you at the counter, test each piece for its true karat, separate real gold from plated, and flag anything with age, maker's marks, or gemstones for individual appraisal instead of scrap pricing. You get one clear itemized offer, we take as much time as the collection needs, and there's zero obligation — if you'd rather sell part now and think about the rest, that's fine too.",
      },
      {
        q: "How much will I get for my gold from Gainesville?",
        a: "Your quote starts with the live spot price per troy ounce, divided by 31.1 for a per-gram price, then multiplied by your item's karat purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k — and its weight on our scale. Plain scrap gold has a small refining margin deducted to cover melting and assaying, and standard bullion gold coins typically pay 85-90% of the live spot price. Coins, designer pieces, and gemstone jewelry are appraised separately, since they're often worth more than their metal content.",
      },
      {
        q: "Which store is closer to Gainesville — Manassas or Chantilly?",
        a: "Manassas, clearly: about 12–15 minutes southeast, straight down Route 29 from the Virginia Gateway area or via Linton Hall Road from Piedmont and the neighborhoods south of I-66. Chantilly is about 18–20 minutes northeast via I-66 and Route 28 — a solid choice if you're already commuting that direction. Both counters test in front of you and pay the same visit, so pick whichever road matches your day.",
      },
      {
        q: "Do you buy gold coins and silver from Gainesville sellers?",
        a: "Yes — and coins show up often in the estate lots we see from Gainesville, sometimes tucked in the same box as the jewelry. Standard bullion gold coins typically pay 85-90% of the live spot price, silver is tested and bought at its own spot-based rate, and anything potentially collectible — old dates, mint marks, graded slabs — is appraised individually rather than priced as melt. Don't clean coins before coming in, and bring any paperwork or albums as-is.",
      },
    ],
    relatedPosts: [
      "we-buy-estate-gold-jewelry",
      "understanding-the-cash-for-gold-process",
      "maximizing-your-profit-with-cash-for-gold",
    ],
    closingCta:
      "Point the car down Route 29 or Linton Hall Road — our Manassas store is 12–15 minutes from Gainesville, and whether it's one ring or a whole downsizing collection, it's tested, quoted, and paid the same visit.",
  },
  {
    slug: "cash-for-gold-woodbridge",
    city: "Woodbridge",
    region: "VA",
    seoTitle: "Sell Gold in Woodbridge, VA | Instant Payout, 4.9★ Rated",
    metaDescription:
      "Sell gold in Woodbridge, VA — our Manassas store is 20–25 minutes west via Prince William Parkway. Free appraisal, instant payout. 4.9★, 500+ reviews.",
    heroTitle: "Cash for Gold in Woodbridge, VA",
    heroSubtitle:
      "We don't have a storefront in Woodbridge yet — our closest counter is in Manassas, about 20–25 minutes west on the Prince William Parkway. It's one highway, one trip, and you drive home paid instead of waiting on a mail-in check.",
    intro:
      "Searching for cash for gold in Woodbridge? Honest answer first: **our nearest store is in Manassas, not Woodbridge** — about **20–25 minutes west on the Prince William Parkway**, one road across the county from Lake Ridge or Dale City. That's a longer run than some of the towns we serve, and we won't pretend otherwise. What you get for the drive is the part a mail-in envelope can never offer: your items tested and weighed on a calibrated scale while you watch, a quote tied to the **live spot price**, and an **instant payout** before you head back east. If you're on the northern side of town, our Annandale store — roughly 25 minutes up I-95 toward the Beltway — is a solid second option.\n\nWoodbridge is one of Prince William County's **oldest and most diverse communities**, and the gold that comes out of it shows both sides of that. From the **antique and craft shops of Historic Occoquan** come genuinely old pieces — estate settings, early pocket watches, odd lots of old coins — that deserve an appraisal for age and maker, not a trip to the melt pile. From Dale City and the Route 1 corridor comes jewelry from every tradition you can name, in every karat from 10k to 24k. Careful **gold buyers in Woodbridge** searches should end with someone who tests each piece at its true purity and knows when a piece is worth more than its weight — that's exactly how our Manassas counter works.",
    whyLocalTitle: "Why Woodbridge sellers still come out ahead selling in person",
    whyLocal:
      "Let's do the honest math. A mail-in buyer saves you a 20-minute drive — and in exchange, your jewelry leaves in a prepaid envelope, gets graded by someone you'll never meet, and the offer lands days later with your gold already in their facility. Decline it and you're waiting on return shipping, hoping everything comes back as it left. Selling in person flips every one of those terms: **your gold never leaves your sight until you've agreed to a number**, you watch the karat test and the scale reading yourself, and if the offer falls short, it all goes back in your bag and you're back on the Parkway.\n\nFrom Woodbridge, that trade is still clearly worth it. The **Prince William Parkway runs straight from the Route 1 corridor to our Manassas counter** — no Beltway, no toll lanes, about 20–25 minutes door to door — and the visit itself usually takes 10–20 minutes. Compare that to a week of tracking an envelope, and the drive stops looking long: you leave after lunch and you're **home the same afternoon with an instant payout in hand**, not a check that clears whenever it clears.",
    neighborhoods: [
      {
        name: "Historic Occoquan",
        note: "The riverfront town's antique shops and craft district mean this corner of Woodbridge sends us genuinely old gold — estate rings, antique watch cases, pre-war settings, and coin lots from longtime collections. Anything with real age gets examined for maker's marks, era, and collectibility before melt weight is even mentioned, because on antique pieces the craftsmanship is often worth more than the metal.",
      },
      {
        name: "Lake Ridge",
        note: "These established family neighborhoods above the Occoquan Reservoir have had decades to accumulate gold — wedding sets, anniversary pieces, jewelry inherited from parents who bought here in the '70s and '80s. Lake Ridge also sits closest to the I-95 on-ramp, which makes our Annandale store a realistic alternative if your day already points north.",
      },
      {
        name: "Dale City",
        note: "One of the largest and most diverse communities in Prince William County, Dale City brings us jewelry from every tradition — high-karat chains and bangles alongside everyday American 14k — and every piece is tested electronically and paid at its actual purity, never rounded down to a convenient karat.",
      },
      {
        name: "Potomac Mills & Marumsco",
        note: "The neighborhoods around the outlet mall and the older Route 1 corridor skew practical: broken chains, outgrown pieces, single earrings, and jewelry being sold to fund something better. None of it is too small to bring — real gold is real gold on the scale, and small batches add up faster than most sellers expect.",
      },
    ],
    nearestIntro:
      "Woodbridge doesn't have a Cash for Gold VA storefront yet, and we'd rather tell you the real drive times than pretend we're around the corner — both of our nearest stores are a single-highway trip from most of town.",
    nearest: [
      { slug: "manassas", drive: "about 20–25 minutes west on the Prince William Parkway — one road from the Route 1 corridor, and the closest store to Woodbridge" },
      { slug: "annandale", drive: "about 25 minutes north up I-95 toward the Beltway, often the easier run from Lake Ridge and the northern side of town" },
    ],
    faqs: [
      {
        q: "Where can I sell gold in Woodbridge, VA?",
        a: "There's no Cash for Gold VA store inside Woodbridge itself. The closest is our Manassas location at 9013 Centreville Rd, Manassas, VA 20110 — (571) 359-0146 — about 20–25 minutes west via the Prince William Parkway. Our Annandale store at 7262 Columbia Pike, Annandale, VA 22003 — (571) 290-8020 — is roughly 25 minutes north up I-95 and can be quicker from Lake Ridge or anywhere near the Occoquan bridge. Both are real counters where your gold is tested in front of you and paid the same visit.",
      },
      {
        q: "I found antique jewelry in Occoquan — is it worth more than its gold weight?",
        a: "Quite possibly, and that's exactly why it shouldn't go to a buyer who only weighs. Pieces from the Occoquan antique circuit — Victorian and estate settings, old watch cases, early coins — can carry value in their age, maker, and collectibility that beats their melt price. We appraise those individually: we check hallmarks and maker's marks, consider the era and condition, and quote the higher of collectible value or metal value. Don't clean or polish antique pieces first, and bring any provenance you have.",
      },
      {
        q: "How much will I get paid for my gold from Woodbridge?",
        a: "Your quote starts with the live spot price per troy ounce, divided by 31.1 for a per-gram price, then multiplied by your item's karat purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k — and its weight on our scale. Plain scrap gold has a small refining margin deducted to cover melting and assaying, and standard bullion gold coins typically pay 85-90% of the live spot price. Coins, designer pieces, and gemstone jewelry are appraised separately, since they're often worth more than their metal content.",
      },
      {
        q: "Is the drive from Woodbridge to Manassas really worth it to sell gold?",
        a: "For most sellers, yes — and we'd rather you decide with the real numbers. It's about 20–25 minutes each way on the Prince William Parkway, and the appraisal itself usually takes 10–20 minutes, so the whole errand fits in an afternoon. In exchange, you keep your gold in hand until you accept a price, watch every test yourself, and leave with an instant payout instead of shipping your jewelry to a stranger and waiting days for an offer you can't watch being made.",
      },
      {
        q: "Do you buy gold and silver coins from Woodbridge collectors?",
        a: "Yes. Standard bullion gold coins — American Eagles, Krugerrands, Maple Leafs, and similar — typically pay 85-90% of the live spot price. Collectible and older coins, including the kind that surface from Occoquan-area collections, are appraised individually because dates, mint marks, and condition can put their value well above the metal content. Leave them uncleaned and bring any grading slabs, albums, or paperwork you have.",
      },
    ],
    relatedPosts: [
      "we-buy-estate-gold-jewelry",
      "selling-gold-jewelry",
      "is-cash-for-gold-worth-it",
    ],
    closingCta:
      "Take the Prince William Parkway west — our Manassas store is 20–25 minutes from Woodbridge, and your gold gets tested, quoted, and paid with an instant payout in a single trip.",
  },
  {
    slug: "cash-for-gold-mclean",
    city: "McLean",
    region: "VA",
    seoTitle: "Sell Gold in McLean, VA | Discreet Appraisal, Instant Payout",
    metaDescription:
      "Sell gold in McLean, VA — our Vienna/McLean store on Tyco Rd is 5–10 minutes away. Discreet expert appraisal of jewelry, watches & diamonds. 4.9★, 500+ reviews.",
    heroTitle: "Cash for Gold in McLean, VA",
    heroSubtitle:
      "Our Vienna/McLean store is practically next door — 5–10 minutes from most of McLean, on Tyco Rd in the Tysons area. Bring your gold, jewelry, or watch in for a discreet appraisal and walk out paid the same visit.",
    intro:
      "If you're searching for cash for gold in McLean, the good news is short: **our Vienna/McLean store is only about 5–10 minutes away**, on Tyco Rd just off Route 123 in the Tysons area — close enough that it carries McLean's name. There's no envelope, no waiting, no shipping your valuables anywhere: your items are tested and weighed on a calibrated scale in front of you, quoted against the **live spot price**, and paid the same visit.\n\nWhat crosses our counter from McLean is unlike anywhere else we serve. As one of the wealthiest communities in the United States, McLean sends us the **high end of the market — estate and fine jewelry, luxury watches, certified diamonds, and signed designer pieces from houses like Tiffany, Cartier, and Van Cleef & Arpels**. That's precisely why choosing your **gold buyers in McLean** carefully matters: pieces like these are routinely worth far more than their melt weight, and they deserve an appraiser who evaluates the maker, the stone, and the papers — not just the scale reading. That individual, discreet appraisal is exactly how our counter works.",
    whyLocalTitle: "Why McLean's high-value pieces should never go in a mail-in envelope",
    whyLocal:
      "For a broken 14k chain, a mail-in envelope is merely a bad deal. For the kind of pieces McLean households hold — **a Rolex, a signed Cartier bracelet, a GIA-certified two-carat diamond** — it's an unacceptable one. Mail-in buyers grade your valuables in a facility you'll never see, quote one number you can't watch being reached, and shipping insurance rarely reflects what a signed or certified piece is actually worth. Selling in person keeps every step where you can see it: **your items stay in your possession until you've agreed to a price**, you watch the testing yourself, and a piece worth more than its metal gets appraised as what it is, not weighed as what it contains.\n\nAnd from McLean, going in person costs you almost nothing — **the Vienna/McLean counter is about 5–10 minutes away**, a shorter run than most Tysons errands. The appraisal is unhurried and private: one seller, one appraiser, no audience. If the number works, you're **paid before you're back on Route 123**; if it doesn't, everything goes home with you exactly as it came in.",
    neighborhoods: [
      {
        name: "Downtown McLean",
        note: "The established homes around McLean Central and Old Dominion Drive hold decades of fine jewelry — anniversary diamonds, inherited settings, and pieces from the area's own jewelers — and our counter is close enough that an appraisal fits between two downtown errands.",
      },
      {
        name: "Langley",
        note: "Some of the most established wealth in Northern Virginia sits in Langley, and the estates here send us serious pieces: signed designer jewelry, important diamonds, and watch collections. Every one of those is appraised individually and discreetly — maker, papers, and condition first, melt weight last.",
      },
      {
        name: "Chesterbrook",
        note: "These family neighborhoods toward the Arlington line bring in the generational side of McLean's gold — estate boxes from a parent's home, wedding sets from decades back, and heirloom pieces where age and craftsmanship can beat the scale, so we check both before quoting.",
      },
      {
        name: "Salona Village & the Tysons edge",
        note: "The closest corner of McLean to our store — a few minutes down Route 123 — and the source of its most modern pieces: luxury watches, branded jewelry from the Tysons boutiques, and upgraded diamonds, all of which are appraised on brand, model, and condition rather than weight alone.",
      },
    ],
    nearestIntro:
      "McLean doesn't need a long drive to sell gold — our Vienna/McLean store carries the name for a reason. It's minutes from most of town, with Annandale as a second option to the south.",
    nearest: [
      { slug: "vienna", drive: "about 5–10 minutes from most of McLean — on Tyco Rd in the Tysons area, just off Route 123" },
      { slug: "annandale", drive: "about 15 minutes south via Route 123 or the Beltway, a handy second option if your day heads that way" },
    ],
    faqs: [
      {
        q: "Where can I sell gold in McLean, VA?",
        a: "The closest counter is our Vienna/McLean store at 8453 Tyco Rd #C, Vienna, VA 22182 — (703) 889-0532 — in the Tysons area just off Route 123, about 5–10 minutes from most of McLean. Our Annandale store at 7262 Columbia Pike, Annandale, VA 22003 — (571) 290-8020 — is roughly 15 minutes south via Route 123 or the Beltway. Both test your items in front of you and pay the same visit.",
      },
      {
        q: "Do you buy luxury watches, certified diamonds, and designer jewelry from McLean sellers?",
        a: "Yes — they're the heart of what McLean brings us. Rolex, Patek Philippe, and Cartier watches are appraised on model, condition, and completeness; certified diamonds are evaluated against their grading report; and signed pieces from Tiffany, Cartier, or Van Cleef & Arpels carry brand value far beyond their metal. None of these are quoted by weight. Bring the box, papers, GIA certificate, or extra links if you have them — original documentation meaningfully raises the offer.",
      },
      {
        q: "How is my payout calculated?",
        a: "For gold, we start with the live spot price per troy ounce, divide by 31.1 for a per-gram price, then multiply by your item's karat purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k — and its weight on our scale. Plain scrap gold has a small refining margin deducted for melting and assaying, and standard bullion gold coins typically pay 85-90% of the live spot price. Watches, certified diamonds, designer pieces, and collectible coins are appraised individually, since they're often worth far more than their metal content.",
      },
      {
        q: "Is the appraisal private? I'd rather not discuss what I'm selling in a crowded shop.",
        a: "Yes. High-value sales are handled one-on-one at the counter — your pieces, your appraiser, no audience — and we're happy to walk through each item's testing and valuation quietly and without hurry. Nothing obligates you to sell: many McLean sellers come in simply to learn what an inherited watch or an estate piece is worth, and either decision is fine with us.",
      },
      {
        q: "Should I sell an inherited estate piece as gold, or is it worth more intact?",
        a: "Bring it in before anyone melts anything. Estate jewelry from McLean homes — older signed pieces, handmade settings, important stones — is frequently worth more intact than as scrap, and we quote the higher of the two values. We check hallmarks, maker's marks, and stone quality first, and only price by weight if the piece genuinely carries no premium. Don't clean or polish it beforehand, and bring any paperwork or provenance you have.",
      },
    ],
    relatedPosts: [
      "list-of-top-20-name-brand-in-gold-jewelry",
      "we-buy-diamonds-more-than-1-carat-with-gia",
      "we-buy-estate-gold-jewelry",
    ],
    closingCta:
      "Our Vienna/McLean store is 5–10 minutes away on Tyco Rd — bring the watch, the ring, or the whole estate box for a discreet appraisal and an instant payout the same visit.",
  },
  {
    slug: "cash-for-gold-tysons",
    city: "Tysons",
    region: "VA",
    seoTitle: "Sell Gold in Tysons, VA | Store on Tyco Rd, Instant Payout",
    metaDescription:
      "Sell gold in Tysons, VA at our store right on Tyco Rd, off Route 7 near Tysons Corner. Free appraisal, instant payout. 4.9★ from 500+ reviews.",
    heroTitle: "Cash for Gold in Tysons, VA",
    heroSubtitle:
      "No drive across the county for this one — our Vienna/McLean store sits right in the Tysons area at 8453 Tyco Rd #C, just off Route 7, minutes from Tysons Corner Center and the Galleria. Walk in, watch your gold get tested, and walk out paid the same visit.",
    intro:
      "If you want to sell gold in Tysons, you're in the one part of Northern Virginia where we can skip the directions: **our store is right here**. The Vienna/McLean location at **8453 Tyco Rd #C sits just off Route 7 (Leesburg Pike)**, minutes from Tysons Corner Center, the Galleria, and the office towers along the Silver Line. Your items are tested and weighed on a calibrated scale while you watch, quoted against the **live spot price**, and paid the same visit before you're back on Route 7 — a genuine errand-sized trip, not a cross-county drive.\n\nThat matters in Tysons more than almost anywhere else we serve, because of what people here are selling. This is the region's luxury-retail hub — **jewelry bought at Cartier, Tiffany, and the Galleria's designer boutiques, watches from the mall's flagship stores** — and those pieces deserve a buyer who appraises brand, model, and condition, not one who tosses a signed piece on the melt pile. We evaluate designer and watch pieces individually, test everyday karat gold at its true purity, and quote both against real market numbers. Tens of thousands of people work in Tysons every day; for most of them, our counter is closer than their usual lunch spot.",
    whyLocalTitle: "Why selling gold in Tysons in person beats any mail-in envelope",
    whyLocal:
      "The mail-in pitch is convenience — but it asks you to seal your jewelry into a prepaid envelope, ship it to a facility you'll never see, and wait days for an offer made out of your sight. In Tysons, that trade makes no sense at all, because the in-person option is already more convenient: **our counter is physically in the neighborhood**. Your gold stays in your hands until you've heard a number you like, you watch the karat test and the scale reading yourself, and if the offer doesn't work, everything goes back in your bag and you're back at your desk.\n\nThe convenience math is lopsided. From the malls, The Boro, or any of the Silver Line offices, **Tyco Rd is a few minutes off Route 7** — closer than the post office run a mail-in envelope would require, and a typical appraisal takes 10–20 minutes at the counter. That's short enough to fit inside a lunch break, and it ends with an **instant payout**, not a week of tracking numbers and a check that clears whenever it clears.",
    neighborhoods: [
      {
        name: "Tysons Corner Center",
        note: "One of the largest malls on the East Coast is where a lot of local jewelry was bought in the first place — everyday 14k and 18k chains, diamond studs, upgrade rings — and our counter is just across Route 7, so trading yesterday's pieces takes less time than finding parking at the mall.",
      },
      {
        name: "Tysons Galleria",
        note: "The Galleria's luxury row — Cartier, Tiffany, Louis Vuitton, and the designer boutiques around them — means we see more signed jewelry and luxury watches from Tysons than anywhere else we serve. Those are appraised on maker, model, and condition, never melted-metal weight, so bring boxes, papers, and extra links if you have them.",
      },
      {
        name: "The Boro",
        note: "The new high-rise district around Whole Foods and the Greensboro station is full of residents who just downsized into condo living — and downsizing surfaces jewelry: pieces that don't fit the new chapter, inherited items in moving boxes, watches worn twice. We test and quote each one individually, with zero obligation.",
      },
      {
        name: "Silver Line corridor",
        note: "From Spring Hill to McLean station, the office towers hold tens of thousands of professionals — and our Tyco Rd counter sits right in that corridor, which is why the lunch-break appraisal is practically a Tysons specialty: in the door, tested, quoted, and paid, usually inside 20 minutes.",
      },
    ],
    nearestIntro:
      "This is the easy one: our Vienna/McLean store is right in the Tysons area, so the primary option isn't a drive at all — and Annandale backs it up if you're coming from the far side of the Beltway.",
    nearest: [
      { slug: "vienna", drive: "right here in Tysons — 8453 Tyco Rd #C, just off Route 7 (Leesburg Pike), minutes from Tysons Corner Center, the Galleria, and the Silver Line stations" },
      { slug: "annandale", drive: "about 12 minutes south via Gallows Road or the Beltway — a second option if you're headed that direction anyway" },
    ],
    faqs: [
      {
        q: "Where can I sell gold in Tysons, VA?",
        a: "Right here in the neighborhood: our Vienna/McLean store at 8453 Tyco Rd #C, Vienna, VA 22182 — (703) 889-0532 — sits in the Tysons area just off Route 7, minutes from Tysons Corner Center and the Galleria. Walk in, your gold is tested and weighed in front of you, and you're paid the same visit. If you're on the far side of the Beltway, our Annandale store at 7262 Columbia Pike, Annandale, VA 22003 — (571) 290-8020 — is about 12 minutes south.",
      },
      {
        q: "Do you buy luxury watches and designer jewelry from the Galleria brands?",
        a: "Yes — signed pieces are a specialty at our Tysons-area counter, because so much of the local jewelry was bought at Cartier, Tiffany, and the Galleria's other boutiques. Designer jewelry and luxury watches are appraised individually on brand, model, and condition, since a recognized maker's piece is usually worth well more than its gold weight. Bring the box, papers, receipts, or extra links if you still have them — original documentation and accessories raise the offer.",
      },
      {
        q: "How much will I get for my gold in Tysons?",
        a: "Your quote starts with the live spot price per troy ounce, divided by 31.1 for a per-gram price, then multiplied by your item's karat purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k — and its weight on our scale. Plain scrap gold has a small refining margin deducted to cover melting and assaying, and standard bullion gold coins typically pay 85-90% of the live spot price. Coins, designer pieces, gemstone jewelry, and watches are appraised separately, since they're often worth more than their metal content.",
      },
      {
        q: "Can I really sell gold on a lunch break in Tysons?",
        a: "Yes — it's one of the most common ways people use our Tyco Rd counter. A typical appraisal takes 10–20 minutes with no appointment needed: we test and weigh each piece in front of you, quote against the live spot price, and if you accept, you're paid the same visit on the spot. From the Silver Line offices, the malls, or The Boro, the store is a few minutes off Route 7, so the whole errand fits comfortably inside an hour.",
      },
      {
        q: "Do you buy diamond engagement rings in Tysons?",
        a: "Yes. Diamond rings are never quoted on gold weight alone — the stone is evaluated separately from the setting, and center stones frequently carry more value than the band itself. Larger and certified diamonds are appraised individually, so bring your GIA certificate or any appraisal paperwork if you have it. You hear one clear combined number at the counter, and there's zero obligation if you'd rather think it over.",
      },
    ],
    relatedPosts: [
      "list-of-top-20-name-brand-in-gold-jewelry",
      "we-buy-diamonds-more-than-1-carat-with-gia",
      "selling-gold-jewelry",
    ],
    closingCta:
      "No drive required — walk into our Tysons store at 8453 Tyco Rd #C (Vienna/McLean), just off Route 7, and turn that drawer of gold, watches, or designer pieces into an instant payout before your lunch break ends.",
  },
  {
    slug: "cash-for-gold-oakton",
    city: "Oakton",
    region: "VA",
    seoTitle: "Sell Gold Near Oakton, VA | Instant Payout in Vienna",
    metaDescription:
      "Sell gold near Oakton, VA — our Vienna store is just 8–12 minutes east on Route 123. Free heirloom-friendly appraisal, instant payout. 4.9★, 500+ reviews.",
    heroTitle: "Cash for Gold in Oakton, VA",
    heroSubtitle:
      "We don't have a storefront in Oakton itself, but our Vienna/McLean location is only about 8–12 minutes east on Route 123 toward Tysons — bring your jewelry in, watch it tested at the counter, and drive back home paid the same errand.",
    intro:
      "If you're looking to sell gold in Oakton, here's the plain answer: **our nearest counter is in Vienna, about 8–12 minutes east on Route 123 (Chain Bridge Road) toward Tysons** — close enough that it barely counts as leaving the neighborhood. Our Chantilly store is a second option, roughly 15 minutes west via I-66 and Route 50, if your day points toward the Route 28 side. At either counter, every piece is tested and weighed on a calibrated scale while you watch, quoted against the **live spot price**, and paid before you're back on 123.\n\nOakton's gold has a character of its own, and we appraise it that way. In a community where families have often held the same wooded-lot homes for decades, what comes out of the jewelry box is rarely last year's purchase — it's **a parent's wedding set, a grandmother's brooch, rings and chains that have quietly passed down two or three generations**, alongside well-kept everyday 14k that simply stopped being worn. That kind of collection deserves an unhurried look, not a rushed weigh-in: anything with age, maker's marks, or real craftsmanship gets appraised on its own merits before melt weight is ever discussed, which is exactly what a careful visit to a nearby counter — rather than a mail-in envelope — makes possible.",
    whyLocalTitle: "Why Oakton sellers keep heirlooms out of the mail",
    whyLocal:
      "Inherited and estate jewelry is precisely the wrong thing to seal into a prepaid envelope. A mail-in buyer receives your grandmother's ring as anonymous metal, grades it out of your sight, and sends back one number you can't question — and if a piece had craftsmanship or age worth more than its weight, you'll never know. Selling in person keeps every judgment where you can see it: **the karat test happens in front of you, the scale reading happens in front of you, and each piece can be discussed individually** before you decide anything. If the number doesn't feel right, the jewelry goes home with you, exactly as it arrived.\n\nAnd from Oakton, 'in person' asks almost nothing of your day. **Route 123 runs from Oakton's center straight to our Vienna counter in about 8–12 minutes** — a shorter trip than most school runs down Hunter Mill Road, with easy parking off Tyco Road when you arrive. There's no appointment needed and no obligation to sell: many Oakton households come in first just to learn what a collection is worth, then take their time deciding. Either way, when you do sell, it's an **instant payout the same visit** — not a check chasing an envelope through the mail.",
    neighborhoods: [
      {
        name: "Hunter Mill Road corridor",
        note: "The wooded lots and longtime households along Hunter Mill hold some of Oakton's deepest jewelry boxes — estate pieces, older wedding sets, and gold that's been in the same family since the houses were built. Collections like these get appraised piece by piece, with anything showing real age or craftsmanship valued beyond its melt weight.",
      },
      {
        name: "Oakton center & Route 123",
        note: "The neighborhoods around Oakton's crossroads sit closest of all to our Vienna counter — Chain Bridge Road runs there almost door to door in about ten minutes, which makes a free appraisal an easy add-on to any errand toward Vienna or Tysons.",
      },
      {
        name: "Waples Mill & the Fox Mill edge",
        note: "The quieter western side of Oakton leans toward established families and practical selling — retired wedding bands, everyday 14k that changed with the times, single earrings and broken chains — all of it worth the same per gram on the scale as anything showier once it's tested at true karat.",
      },
      {
        name: "Blake Lane & the Vienna line",
        note: "Where Oakton blends into Vienna, the townhomes and older single-family streets bring in a steady mix of generational and modern pieces, and residents here have the shortest trip of anyone — the Vienna store is essentially a straight shot up 123 past the Beltway side of Tysons.",
      },
    ],
    nearestIntro:
      "Oakton doesn't have a Cash for Gold VA storefront of its own, but it hardly needs one — our Vienna/McLean counter is one short run up Route 123, with Chantilly as a second option toward the west.",
    nearest: [
      { slug: "vienna", drive: "about 8–12 minutes east on Route 123 (Chain Bridge Road) toward Tysons — the closest store to Oakton by a comfortable margin" },
      { slug: "chantilly", drive: "about 15 minutes west via I-66 and Route 50, a good alternative if your day heads toward the Route 28 corridor" },
    ],
    faqs: [
      {
        q: "Where can I sell gold in Oakton, VA?",
        a: "There's no Cash for Gold VA store inside Oakton itself. The closest is our Vienna/McLean location at 8453 Tyco Rd #C, Vienna, VA 22182 — (703) 889-0532 — about 8–12 minutes east via Route 123 toward Tysons. Our Chantilly store at 14025 Lee Jackson Memorial Hwy, Chantilly, VA 20151 — (571) 224-5279 — is roughly 15 minutes west via I-66 and Route 50. Both are real counters where your gold is tested in front of you and paid the same visit.",
      },
      {
        q: "I have jewelry that's been in my family for generations — how do you handle heirloom pieces?",
        a: "Slowly and individually, which is the whole point of coming in person. Generational pieces from Oakton households often carry value beyond their gold weight — older craftsmanship, maker's marks, original gemstones, settings from eras jewelers no longer produce. We examine each piece before anything is weighed, flag whatever deserves appraisal above melt value, and walk you through how every number was reached. There's no obligation to sell anything, and many families come in first simply to understand what a collection is worth before making decisions.",
      },
      {
        q: "How is my payout calculated?",
        a: "We start with the live spot price per troy ounce, divide by 31.1 to get a per-gram price, then multiply by your item's karat purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k — and its weight on our scale. Plain scrap gold has a small refining margin deducted to cover melting and assaying, and standard bullion gold coins typically pay 85-90% of the live spot price. Coins, designer pieces, and gemstone jewelry are appraised separately, since they're often worth more than their metal content.",
      },
      {
        q: "Which store is closer to Oakton — Vienna or Chantilly?",
        a: "Vienna, and it isn't close: our Vienna/McLean counter on Tyco Road is about 8–12 minutes east via Route 123, essentially one road from Oakton's center. Chantilly is around 15 minutes west via I-66 and Route 50, which can suit you better if you live near the Waples Mill side or you're already headed toward the Dulles corridor. No appointment is needed at either — walk in during business hours.",
      },
      {
        q: "Do you buy silver, coins, and watches from Oakton sellers, or only gold?",
        a: "All of it. Beyond gold jewelry, we buy sterling silver and silver flatware, platinum, diamonds, designer jewelry, luxury watches, and coins — the full range of what tends to surface when an Oakton household sorts through decades of accumulation. Bullion gold coins typically pay 85-90% of live spot, potentially collectible coins are appraised individually for dates and mint marks, and watches are evaluated on brand, model, and condition, so bring boxes and paperwork if you still have them.",
      },
    ],
    relatedPosts: [
      "we-buy-estate-gold-jewelry",
      "selling-gold-jewelry",
      "is-cash-for-gold-worth-it",
    ],
    closingCta:
      "Take Route 123 east and you're at our Vienna store in about 8–12 minutes — bring the pieces that have waited in the drawer for years and leave with an instant payout the same quiet errand.",
  },
  {
    slug: "cash-for-gold-falls-church",
    city: "Falls Church",
    region: "VA",
    seoTitle: "Sell Gold in Falls Church, VA | Instant Payout Nearby",
    metaDescription:
      "Sell gold in Falls Church, VA — the Little City sits between our Annandale and Vienna stores, both under 15 minutes away. Instant payout. 4.9★, 500+ reviews.",
    heroTitle: "Cash for Gold in Falls Church, VA",
    heroSubtitle:
      "We don't have a storefront in Falls Church itself — but the Little City sits almost exactly between two of ours. Annandale is a straight 10–12 minute run south on Route 50 or the Beltway, and your gold is tested in front of you and paid the same visit.",
    intro:
      "Looking to sell gold in Falls Church? Honest answer first: **we don't have a counter inside the Little City**, but Falls Church may be the best-positioned place in Northern Virginia to sell anyway — it sits **almost exactly between two of our stores**, usually **under 15 minutes from either**. Our **Annandale store is the closest**, a straight run south on Route 50 or the Beltway, and our Vienna/McLean store is a quick trip west toward Tysons. At either counter, your items are tested and weighed on a calibrated scale while you watch, quoted against the **live spot price**, and paid before you're back through Seven Corners.\n\nThe gold that comes out of Falls Church is a genuine mix, and it deserves a buyer who treats it that way. This is a small, established independent city — long-tenured families in the walkable historic core, newer households filling in around them — so the same afternoon can bring us **an inherited ring from a family that's been in Falls Church for three generations, an everyday 14k chain from Pimmit Hills, and a designer piece bought up the road near Tysons**. Each of those is worth money for a different reason, which is exactly why every piece gets tested for its true karat and appraised on its own merits instead of tossed on one melt pile.",
    whyLocalTitle: "Why Falls Church sellers do better in person than with a mail-in envelope",
    whyLocal:
      "A mail-in gold buyer asks you to seal your jewelry into a prepaid envelope, ship it to a facility you'll never see, and wait days for a take-it-or-leave-it offer with your gold already out of your hands. Selling in person keeps every step where you can see it: **the karat test and the scale reading happen in front of you, and your jewelry stays yours until you agree to a number**. If the offer falls short, it goes back in your pocket and you're home in a quarter hour.\n\nAnd from Falls Church, 'in person' is about as easy as it gets anywhere in Northern Virginia, because **two counters bracket the city in opposite directions**. Head **south on Route 50 or the Beltway and you're at our Annandale store in about 10–12 minutes**; head west toward Tysons and Vienna/McLean is the same short trip. Either drive is shorter than a post-office round trip with a padded envelope — and it ends with an **instant payout**, not a check that arrives whenever the mail decides.",
    neighborhoods: [
      {
        name: "The Little City & historic Falls Church",
        note: "The walkable core of the independent city is home to families who've been here for generations, and their jewelry boxes show it — inherited rings, older settings, and estate pieces passed down since long before the region boomed. Anything with real age or craftsmanship gets appraised on its own merits before melt weight ever enters the conversation.",
      },
      {
        name: "Seven Corners & Bailey's Crossroads",
        note: "One of the most diverse corridors in Northern Virginia brings us gold from every tradition — high-karat chains and bangles alongside everyday American 14k — and every piece is tested electronically and paid at its actual purity, never rounded down to a convenient karat.",
      },
      {
        name: "Pimmit Hills",
        note: "This postwar neighborhood between Falls Church and Tysons sends us the practical side of the business: wedding bands, broken chains, single earrings, and 14k that hasn't been worn in years. Condition doesn't matter for melt value, and Pimmit Hills also sits closest of all to our Vienna/McLean counter.",
      },
      {
        name: "Idylwood",
        note: "Tucked between Route 7 and I-66 near the West Falls Church Metro, Idylwood skews toward a mix of longtime homeowners and newer arrivals — so we see both generational gold and modern designer pieces from here, and the branded items are appraised on maker and condition rather than weighed as scrap.",
      },
    ],
    nearestIntro:
      "Falls Church doesn't have a Cash for Gold VA storefront yet, but the Little City sits squarely between two of them — one south, one west — so pick the direction that matches your day.",
    nearest: [
      { slug: "annandale", drive: "the closest store — about 10–12 minutes straight south on Route 50 or the Beltway" },
      { slug: "vienna", drive: "about 10–12 minutes west toward Tysons, an easy run from Pimmit Hills and Idylwood" },
    ],
    faqs: [
      {
        q: "Where can I sell gold in Falls Church, VA?",
        a: "There's no Cash for Gold VA store inside Falls Church itself, but two are within roughly 15 minutes. The closest is our Annandale location at 7262 Columbia Pike, Annandale, VA 22003 — (571) 290-8020 — about 10–12 minutes south via Route 50 or the Beltway. Our Vienna/McLean store at 8453 Tyco Rd #C, Vienna, VA 22182 — (703) 889-0532 — is about 10–12 minutes west toward Tysons and often quicker from Pimmit Hills or Idylwood.",
      },
      {
        q: "Which store is closer to Falls Church — Annandale or Vienna?",
        a: "Annandale, for most of the city: it's a straight 10–12 minute run south on Route 50 or the Beltway, and it's clearly the shorter trip from Seven Corners and Bailey's Crossroads. If you're on the north side — Pimmit Hills, Idylwood, or anywhere near the West Falls Church Metro — Vienna/McLean is about the same 10–12 minutes west toward Tysons. Both counters test in front of you and pay the same visit, so just pick the direction you're already headed.",
      },
      {
        q: "How much will I get for my gold in Falls Church?",
        a: "Your quote starts with the live spot price per troy ounce, divided by 31.1 to get a per-gram price, then multiplied by your item's karat purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k — and its weight on our scale. Plain scrap gold has a small refining margin deducted to cover melting and assaying, and standard bullion gold coins typically pay 85-90% of the live spot price. Coins, designer pieces, and gemstone jewelry are appraised separately, since they're often worth more than their metal content.",
      },
      {
        q: "Does the karat stamp really change what my jewelry is worth?",
        a: "More than almost anything else. Karat is the percentage of actual gold in the piece — 10k is 41.7% pure, 18k is 75% — so a heavy 10k bracelet can be worth less than a lighter 18k ring, even though it feels more substantial in your hand. That's why we test every piece for its true purity rather than pricing by heft or trusting a worn stamp, and why sorting a mixed jewelry box at a real counter usually beats guessing at home.",
      },
      {
        q: "I have inherited jewelry with gemstones — is it worth more than the gold weight?",
        a: "Often, yes. Diamonds and quality gemstones are evaluated separately from the metal, and a recognizable maker or designer name can add value on top of both — so an inherited piece from a longtime Falls Church family may be worth well more than its weight on the scale. We quote the higher of collectible value or melt value, so don't pull stones or clean older pieces before coming in, and bring any paperwork you have.",
      },
    ],
    relatedPosts: [
      "cash-for-gold-nova-falls-church-va",
      "we-buy-estate-gold-jewelry",
      "is-cash-for-gold-worth-it",
    ],
    closingCta:
      "Point the car south on Route 50 — our Annandale store is 10–12 minutes from the Little City, and your gold is tested, quoted, and paid with an instant payout in a single trip.",
  },
  {
    slug: "cash-for-gold-springfield",
    city: "Springfield",
    region: "VA",
    seoTitle: "Sell Gold Near Springfield, VA | Instant Payout",
    metaDescription:
      "Selling gold in Springfield, VA? Our nearest store in Annandale is a 15-minute drive — free appraisal against live spot, instant payout. 4.9★, 500+ reviews.",
    heroTitle: "Cash for Gold in Springfield, VA",
    heroSubtitle:
      "We don't have a storefront in Springfield itself, but our Annandale store is about 15 minutes northeast via Braddock and Backlick — your gold is tested in front of you and you walk out paid the same visit.",
    intro:
      "Looking for cash for gold in Springfield? Honest answer first: **we don't have a counter in Springfield itself** — our nearest store is in **Annandale, about a 15-minute drive northeast** up Braddock Road and Backlick Road, or a quick hop up I-395 if the Mixing Bowl is behaving. Springfield is one of southeastern Fairfax County's oldest established suburbs, and the gold that comes from here shows it: households that have owned the same house since long before Springfield Mall became **Springfield Town Center** tend to hold **inherited rings, old wedding sets, sterling flatware, and karat gold that's been sitting in a dresser drawer for decades**. Whether it's an estate you're settling or a chain you haven't worn since the nineties, it's all worth a real number.\n\nGetting that number takes one short visit, and every step happens **in front of you, not in a back room**. We test each piece for purity, weigh it on a **calibrated scale you can watch**, and price it against the **live spot price** at that moment — then explain how we got there. The appraisal is **free and carries no obligation**, and your items **stay in your hands until you accept the offer**. Say yes and it's an **instant payout** — paid the same visit. Say no and everything goes home with you, along with a real figure to compare anywhere else. That's the process behind our **4.9★ Google rating across 500+ reviews**.",
    whyLocalTitle: "Why Springfield sellers do better at a real counter than in a mail-in envelope",
    whyLocal:
      "Mail-in gold buyers ask you to seal your jewelry — often the most valuable small things you own — into a prepaid envelope, ship it to a facility you'll never see, and wait for an offer calculated out of your sight. Decline it, and you wait again for your gold to survive the mail a second time. At a real counter, none of that applies: **you watch the karat test, you watch the scale, and your items never leave your possession** until you've agreed to a price.\n\nFor Springfield, the local option barely costs you anything. **Annandale is about 15 minutes up Braddock Road and Backlick Road** — or one exit's worth of I-395 — which is less time than a round trip to the post office, let alone the week a mail-in cycle takes. Anyone who commutes through the Mixing Bowl every day can fold the trip into an errand run. And when you sell, you're **paid before you leave the store** — paid the same visit, not a check that clears in a week or a transfer you have to chase.",
    neighborhoods: [
      {
        name: "North Springfield",
        note: "The closest part of Springfield to our Annandale counter — Braddock Road connects the two almost directly. These postwar streets hold some of the area's longest-tenured households, and the gold reflects it: mid-century wedding bands, old pocket watches, and coin collections started generations ago, which we appraise for age and collectibility before we ever talk melt weight.",
      },
      {
        name: "West Springfield",
        note: "The established family neighborhoods off Old Keene Mill and Rolling Road are classic estate-gold territory — parents downsizing, adult children settling a family home, jewelry boxes accumulated over forty years. We test and quote every piece separately, so real karat gold gets sorted from plated keepsakes on the spot instead of guessed at.",
      },
      {
        name: "Saratoga & Rolling Valley",
        note: "These 1970s-era communities on Springfield's southern side send us the practical middle of the business: everyday 14k chains, retired wedding sets, single earrings, and broken pieces that stopped being wearable years ago. Condition doesn't matter for melt value — a snapped chain pays the same per gram as an intact one.",
      },
      {
        name: "Newington & the Kingstowne edge",
        note: "The newer townhome communities along the I-95 corridor skew modern: designer jewelry, diamond settings, and the occasional luxury watch bought in a good year. Those are appraised on brand, model, and condition rather than weight alone, since a recognizable maker's mark can push the offer well past what the metal weighs out to.",
      },
    ],
    nearestIntro:
      "Springfield doesn't have a Cash for Gold VA storefront yet, but two of our stores are a short, familiar drive away — one straight up Braddock and Backlick, one up toward Tysons.",
    nearest: [
      { slug: "annandale", drive: "about 15 minutes northeast via Braddock Road and Backlick Road, or a quick hop up I-395" },
      { slug: "vienna", drive: "about 20 minutes north toward Tysons" },
    ],
    faqs: [
      {
        q: "Where can I sell gold near Springfield, VA?",
        a: "There's no Cash for Gold VA store inside Springfield itself. The closest is our Annandale location at 7262 Columbia Pike, Annandale, VA 22003 — (571) 290-8020 — about 15 minutes northeast via Braddock Road and Backlick Road, or a quick run up I-395. Our Vienna/Tysons store at 8453 Tyco Rd #C, Vienna, VA 22182 — (703) 889-0532 — is roughly 20 minutes north if that direction suits your day better.",
      },
      {
        q: "How far is the nearest gold buyer from Springfield?",
        a: "About 15 minutes. Our Annandale counter sits on Columbia Pike, reachable from most of Springfield via Braddock Road and Backlick Road — including West Springfield and North Springfield — or one short stretch of I-395 from the Franconia–Springfield side. It's a faster round trip than mailing your jewelry away, and unlike a mail-in envelope, you're paid the same visit.",
      },
      {
        q: "Do you buy silver, sterling flatware, and coins from Springfield sellers?",
        a: "Yes — and Springfield's established households bring us a lot of it. We buy sterling silver jewelry, flatware sets, tea services, silver bars and rounds, and pre-1965 US 90% junk silver coins, alongside gold coins and bullion. Sterling sets are tested piece by piece to confirm .925 — silverplate gets separated out honestly — and full flatware services add up quickly by weight on the scale.",
      },
      {
        q: "How is my gold valued?",
        a: "Three visible steps: we test each piece to confirm its actual purity rather than trusting the stamp, weigh it on a calibrated scale in front of you, and price it against the live spot price at that moment. Then we explain the number before you decide anything. Designer pieces, diamonds, and collectible coins are appraised individually, since brand, stones, or rarity can be worth more than the metal alone. The appraisal is free either way.",
      },
      {
        q: "Do I get paid on the spot?",
        a: "Yes. If you accept the offer, it's an instant payout — you're paid the same visit, before you leave the Annandale store. There's no check to wait on and no transfer to follow up about. If the number doesn't work for you, your items simply go home with you; the appraisal costs nothing and there's no obligation to sell.",
      },
    ],
    relatedPosts: ["we-buy-estate-gold-jewelry", "is-cash-for-gold-worth-it", "selling-gold-jewelry"],
    closingCta:
      "Point the car up Braddock or Backlick — our Annandale store is about 15 minutes from Springfield, and that drawer of old gold can be tested, quoted, and paid in a single visit. Call (571) 290-8020 or just walk in.",
  },
  {
    slug: "cash-for-gold-baileys-crossroads",
    city: "Bailey's Crossroads",
    region: "VA",
    seoTitle: "Sell Gold in Bailey's Crossroads, VA | 22k & 24k Paid",
    metaDescription:
      "Sell gold near Bailey's Crossroads, VA — our Annandale store is 7–10 minutes out Columbia Pike. Free appraisal, instant payout. 4.9★ from 500+ reviews.",
    heroTitle: "Cash for Gold in Bailey's Crossroads, VA",
    heroSubtitle:
      "We don't have a storefront in Bailey's Crossroads itself, but our Annandale store is practically next door — about 7–10 minutes straight out Columbia Pike — and you walk out paid the same visit.",
    intro:
      "Looking for cash for gold in Bailey's Crossroads? Honest answer first: **we don't have a counter at the crossroads itself**, but you may not find a shorter trip anywhere in Northern Virginia — our **Annandale store sits on the very same road**, about 7–10 minutes west out Columbia Pike (Route 244) from the Route 7 junction. No Beltway, no merges: the pike you already drive runs almost door to door from Skyline or Culmore to our counter at 7262 Columbia Pike.\n\nBailey's Crossroads is one of the most international communities in Northern Virginia, and the gold here reflects it. Alongside everyday 14k American jewelry, families around Skyline and Culmore hold **22k and 24k pieces — wedding sets, bangles, chains, coin pendants — from South Asian, Middle Eastern, Latin American, and East African traditions**, and high-karat gold carries far more gold per gram than a typical 14k piece. That's exactly why the appraisal method matters: we **test every piece for its actual karat and weigh it on a calibrated scale in front of you**, price it against the **live spot price** at that moment, and explain the number. A 22k bangle gets paid as 22k — never rounded down to a flat rate — and your items **stay in your hands until you accept**. If you do, it's an **instant payout, paid the same visit**; if you don't, everything goes home with you and the appraisal cost nothing.",
    whyLocalTitle: "Why Bailey's Crossroads sellers should skip the mail-in envelope",
    whyLocal:
      "Mail-in gold buyers ask you to seal your jewelry into a prepaid envelope, ship it to a facility you'll never see, and wait for an offer decided out of your sight — and for high-karat gold especially, you have no way to confirm they tested your 22k as 22k instead of quietly grading it lower. At a real counter, every step happens where you can watch it: **you see the karat test, you see the scale reading, and your gold never leaves your possession** until you've heard the number and said yes. If the offer falls short, it goes back in your bag and you're back on the pike in two minutes.\n\nFrom Bailey's Crossroads, choosing the counter over the envelope costs you almost nothing. **Annandale is one road away — about 7–10 minutes west on Columbia Pike**, or a quick run over via Leesburg Pike (Route 7) if that's the side of the crossroads you're on. That's shorter than the line at most post offices, and it ends differently: an **instant payout before you leave**, not a check that has to survive the mail twice.",
    neighborhoods: [
      {
        name: "Skyline",
        note: "The Skyline Towers and Skyline City high-rises hold thousands of households from around the world, and the jewelry that comes from here skews high-karat — 22k wedding sets, bangles, and chains bought abroad or gifted at weddings. Purity is where the money is with these pieces, so we test each one and pay at its true karat against the live spot.",
      },
      {
        name: "Culmore & Glen Forest",
        note: "The garden apartments along Leesburg Pike are home to longstanding Latin American, East African, and Middle Eastern communities, and we regularly see gold coin pendants, high-karat chains, and religious pieces from these traditions. Small items add up quickly once each is tested and weighed individually — nothing gets lumped into a flat lowball.",
      },
      {
        name: "Lake Barcroft",
        note: "The lakeside neighborhood just south of the crossroads is older and more established, and it tends to send us the estate side of the business: inherited rings, sterling flatware sets, designer jewelry, and the occasional luxury watch. Pieces with age, maker's marks, or brand value get appraised individually, since they're often worth more than their melt weight.",
      },
      {
        name: "Seven Corners",
        note: "The shopping crossroads just up Route 7 brings in the everyday mix — broken 14k chains, single earrings, outgrown jewelry, and old class rings pulled from a drawer. Condition doesn't matter for melt value: a snapped chain pays the same per gram as an intact one once it's on the scale.",
      },
    ],
    nearestIntro:
      "Bailey's Crossroads doesn't have a Cash for Gold VA storefront, but Columbia Pike runs almost straight to our nearest counter — and Route 7 leads to a second option toward Tysons.",
    nearest: [
      { slug: "annandale", drive: "about 7–10 minutes west, straight out Columbia Pike (Route 244) — the closest store by far, on the same road as the crossroads" },
      { slug: "vienna", drive: "about 15 minutes north via Route 7 toward Tysons" },
    ],
    faqs: [
      {
        q: "Where can I sell gold near Bailey's Crossroads, VA?",
        a: "There's no Cash for Gold VA store at the crossroads itself, but our Annandale location is about 7–10 minutes west, straight out Columbia Pike: 7262 Columbia Pike, Annandale, VA 22003 — (571) 290-8020. Our Vienna/Tysons store at 8453 Tyco Rd #C, Vienna, VA 22182 — (703) 889-0532 — is roughly 15 minutes north via Route 7 if that direction suits you better. Both give the same free, no-obligation appraisal.",
      },
      {
        q: "Do you buy 22k and 24k gold jewelry from Bailey's Crossroads sellers?",
        a: "Yes — high-karat jewelry is one of the most common things sellers from the Skyline and Culmore area bring us. 22k is about 91.7% pure gold and 24k about 99.9%, far more gold per gram than standard American 14k, so getting the karat right matters enormously. We verify purity with testing rather than trusting the stamp alone, then pay at the tested karat against the live spot price — a 22k bangle is priced as 22k, never quoted at a flat rate.",
      },
      {
        q: "How is my gold valued?",
        a: "Every offer is built the same way: we test each piece's purity, weigh it on a calibrated scale you can watch, and price it against the live spot price at that moment — so a 22k chain is paid at 22k purity and a 14k band at 14k, by actual weight. Then we explain the number before you decide anything. Your items stay in your hands until you agree, and the appraisal is free whether you sell or not.",
      },
      {
        q: "Do you buy silver, coins, and things besides gold?",
        a: "Yes. Beyond gold in all karats, we buy sterling silver jewelry, flatware and tea sets, silver bars and rounds, pre-1965 US 90% junk silver coins, platinum and palladium, diamonds and precious stones, fine and designer jewelry, luxury watches, coins from bullion to collectible. If you're not sure whether something qualifies, bring it along — the appraisal costs nothing.",
      },
      {
        q: "Do I get paid on the spot?",
        a: "Yes. If you accept the offer, it's an instant payout — you're paid the same visit, before you leave the store, with no check to wait on and no transfer to chase. If you decline, you simply take your items home. From Bailey's Crossroads, the whole round trip out Columbia Pike and back can fit inside a lunch break.",
      },
    ],
    relatedPosts: ["we-pay-90-percent-for-gold-coins", "we-buy-estate-gold-jewelry", "list-of-top-20-name-brand-in-gold-jewelry"],
    closingCta:
      "Point the car west on Columbia Pike — our Annandale store is 7–10 minutes from Bailey's Crossroads, and your gold is tested in front of you, quoted on the live spot, and paid the same visit. Call (571) 290-8020 or just walk in.",
  },
  {
    slug: "cash-for-gold-lincolnia",
    city: "Lincolnia",
    region: "VA",
    seoTitle: "Sell Gold Near Lincolnia, VA | Annandale Is 5 Min Away",
    metaDescription:
      "Sell gold near Lincolnia, VA — our Annandale store is 5–8 minutes up Route 236. Free appraisal, instant payout the same visit. 4.9★ from 500+ reviews.",
    heroTitle: "Cash for Gold in Lincolnia, VA",
    heroSubtitle:
      "We don't have a storefront in Lincolnia itself — but you barely need one, because our Annandale store is 5–8 minutes west along Little River Turnpike, practically next door. Bring your gold in and walk out paid the same visit.",
    intro:
      "Looking for cash for gold in Lincolnia? Honest answer first: **we don't have a counter inside Lincolnia** — but Lincolnia is Annandale's next-door neighbor, and our **Annandale store on Columbia Pike is a 5–8 minute drive west**, straight along Little River Turnpike (Route 236) or Lincolnia Road. That makes Lincolnia one of the closest communities to any of our counters — closer than almost anywhere else we serve. And what comes across that counter from Lincolnia has its own character: this is a small, quiet, established corner of Fairfax County, tucked between Annandale and Alexandria, where many homes have been in the same families for decades. That means **inherited and estate jewelry** — old karat gold that's sat in a dresser drawer since the seventies, class rings nobody wears, wedding bands passed down a generation or two.\n\nHere's exactly what happens when you bring it in. The appraisal is **free and carries no obligation**. We test each piece for purity and weigh it on a **calibrated scale in front of you** — not in a back room — then price it against the **live spot price** at that moment and explain the number. Your items **stay in your hands until you accept**. If you say yes, it's an **instant payout**: you're paid the same visit, before you leave. If you say no, everything goes home with you, plus a real number to compare anywhere else.",
    whyLocalTitle: "Why Lincolnia sellers have almost no reason to mail gold away",
    whyLocal:
      "Mail-in gold buyers ask you to seal your jewelry — often the most valuable small things you own — into a prepaid envelope, ship it to a facility you'll never see, and wait days for an offer calculated out of your sight. If you decline, you wait again for your items to ride the mail back. At a real counter, none of that applies: **you watch the testing and the weighing yourself**, you hear how the offer was built against the live spot price, and your gold **never leaves your sight** until you've agreed.\n\nFor most communities, the tradeoff for that transparency is a drive. From Lincolnia, there barely is one. The **Annandale counter is 5–8 minutes west on Route 236** — the same road that runs past your own neighborhood — which is genuinely less time than packaging jewelry and standing in line at the post office. And instead of tracking an envelope for a week, you're **paid before you leave the store**: an instant payout the same visit, not a check that clears whenever it clears.",
    neighborhoods: [
      {
        name: "Lincolnia Heights",
        note: "The mid-century core of the community, where many houses are still owned by the families who bought them decades ago. That's exactly the profile behind the estate boxes we see from here — old 14k wedding sets, brooches, and pocket watches — and anything with real age or craftsmanship gets appraised on its own merits before melt weight ever enters the conversation.",
      },
      {
        name: "Bren Mar Park",
        note: "The established brick homes on the Edsall Road side often come to us during a downsizing or after settling a parent's estate. Alongside karat gold, this is where inherited sterling flatware sets and old coin accumulations tend to surface — we test each piece, separate the sterling from the silverplate honestly, and weigh it all in front of you.",
      },
      {
        name: "Wakefield",
        note: "The family neighborhoods near the park bring in the everyday side of the business: class rings, broken chains, single earrings, and gold that stopped being worn years ago. Condition doesn't matter for melt value — a snapped chain pays the same per gram as an intact one once it's tested at its true karat.",
      },
      {
        name: "Pinecrest",
        note: "The golf-course community's townhomes skew a little newer than the rest of Lincolnia, and so does its jewelry — modern diamond settings, designer pieces, and the occasional luxury watch. Those get appraised individually on brand, model, and condition, since they're often worth well more than their metal content.",
      },
    ],
    nearestIntro:
      "Lincolnia doesn't have its own Cash for Gold VA storefront — it doesn't really need one, because our Annandale store sits just up the road, with Vienna/Tysons as a second option to the north.",
    nearest: [
      { slug: "annandale", drive: "just 5–8 minutes west along Little River Turnpike (Route 236) or Lincolnia Road — one of the closest stores to any area we serve" },
      { slug: "vienna", drive: "about 18 minutes north toward Tysons" },
    ],
    faqs: [
      {
        q: "Where can I sell gold near Lincolnia, VA?",
        a: "The closest place is our Annandale store at 7262 Columbia Pike, Annandale, VA 22003 — (571) 290-8020 — a 5–8 minute drive west from Lincolnia via Little River Turnpike (Route 236) or Lincolnia Road. Our Vienna/Tysons store at 8453 Tyco Rd #C, Vienna, VA 22182 — (703) 889-0532 — is about 18 minutes north if that direction suits your day better.",
      },
      {
        q: "How close is the nearest gold buyer to Lincolnia?",
        a: "Unusually close. Lincolnia sits directly next to Annandale along Route 236, so our Annandale counter is only 5–8 minutes away — closer than for almost any other community we serve without its own storefront. It's a shorter trip than mailing your jewelry away would take just to package and drop off.",
      },
      {
        q: "Do you buy silver, coins, and estate jewelry from Lincolnia sellers?",
        a: "Yes — estate items are a big part of what Lincolnia brings us. We buy gold in all karats (scrap, jewelry, coins, bullion), sterling silver jewelry and flatware or tea sets, silver bars, rounds, and pre-1965 junk silver coins, plus platinum, palladium, diamonds and precious stones, fine and designer jewelry, luxury watches. Bring the whole box as-is — we test and quote each piece separately, so real gold gets separated from plated on the spot.",
      },
      {
        q: "How is my gold valued?",
        a: "Every offer is built the same way: we test the piece's actual purity, weigh it on a calibrated scale you can watch, and price it against the live spot price at that moment — then explain the number before you decide anything. Older estate pieces with genuine age, maker's marks, or notable craftsmanship are appraised individually rather than quoted as scrap, since they can be worth more than their melt weight. The appraisal is free either way.",
      },
      {
        q: "Do I get paid on the spot?",
        a: "Yes. If you accept the offer, you get an instant payout — paid the same visit, before you leave the Annandale store. There's no check to wait on and nothing to chase. If you decline, your items simply go home with you; the appraisal costs nothing and carries no obligation.",
      },
    ],
    relatedPosts: ["we-buy-estate-gold-jewelry", "cash-for-gold-close-to-me", "is-cash-for-gold-worth-it"],
    closingCta:
      "You're practically already here — our Annandale store is 5–8 minutes from Lincolnia straight up Route 236. Call (571) 290-8020 or just walk in, and that drawer of old gold can be tested, quoted, and paid the same visit before you're back home.",
  },
  {
    slug: "cash-for-gold-reston",
    city: "Reston",
    region: "VA",
    seoTitle: "Sell Gold Near Reston, VA | Free Appraisal, Payout",
    metaDescription:
      "Sell gold near Reston, VA at our Chantilly store, ~15 min via Route 28. Free no-obligation appraisal vs the live spot price, instant payout. 4.9★, 500+ reviews.",
    heroTitle: "Cash for Gold in Reston, VA",
    heroSubtitle:
      "We don't have a storefront in Reston itself — but our Chantilly store is about 15 minutes southwest via Route 28, and everything happens in one visit: your gold is tested and weighed in front of you and you're paid the same visit.",
    intro:
      "Reston isn't an accidental suburb — it's a planned community, named for founder Robert E. Simon (the \"RES\" in RESton), that grew into the heart of Fairfax County's Dulles tech corridor. That history shows in what people here own: **diamond engagement rings and designer jewelry** from Reston Town Center's professional crowd, luxury watches earned over tech-industry careers, and **estate pieces** from families who've been here since the Lake Anne days in the 1960s. When it's time to turn some of that into cash, most Reston sellers face a choice between a mail-in envelope and a real counter — and we'd argue the counter wins every time.\n\nHere's how it works at our nearby Chantilly store. You bring your items in for a **free, no-obligation appraisal** — no appointment needed. Each piece is tested for karat and **weighed on a calibrated scale in front of you**, then priced against the **live spot price** of gold, silver, platinum, or palladium that day. You keep your items in hand until you decide to accept, and if you do, it's an **instant payout** — you walk out paid the same visit. If the number isn't right for you, you walk out with your jewelry and a free education on what it's worth.",
    whyLocalTitle: "Why Reston sellers should skip the mail-in kit",
    whyLocal:
      "Mail-in gold buyers ask you to seal your jewelry in an envelope, ship it across the country, and trust a stranger's quote on items you can no longer see. If the offer disappoints, you wait again for the return shipment — and hope everything comes back. At a **real counter**, none of that applies: you watch the testing, you see the scale, you hear the offer explained against the **live spot price**, and **your items never leave your sight** until you've said yes.\n\nFrom Reston, that counter is closer than most people's commute. Our Chantilly store sits on Route 50 about **15 minutes southwest via Route 28** — an easy run from Herndon-side and western Reston especially — and our Vienna/Tysons store is roughly 15–20 minutes east via the Dulles Toll Road or Route 7 if you're on the eastern side near Wiehle-Reston East. Either way, the whole trip fits inside a lunch hour: appraised, decided, and **paid before you leave the store**.",
    neighborhoods: [
      {
        name: "Reston Town Center",
        note: "The high-rises, offices, and upscale retail around Town Center — now with its own Silver Line Metro station — concentrate Reston's professional crowd. From here we regularly see diamond engagement rings, designer pieces from names like Tiffany, Cartier, and David Yurman, and luxury watches including Rolex. Branded and signed jewelry is appraised on brand, model, and condition — often worth well above its melt value — so it's never just weighed as scrap.",
      },
      {
        name: "Lake Anne",
        note: "Lake Anne Plaza was Reston's original village center, and some residents have been here since Robert E. Simon opened it in the 1960s. That means genuine estate and inherited jewelry: mid-century settings, old wedding sets, sterling flatware and tea services passed down through families. We evaluate age and workmanship on pieces like these before weight ever enters the conversation.",
      },
      {
        name: "South Lakes",
        note: "The established neighborhoods around South Lakes Drive and the Hunters Woods side bring in the everyday backbone of the business — 14k wedding bands, broken chains, single earrings, and small scrap gold accumulated over decades of family life. Small pieces add up faster than people expect once each one is tested at its true karat and priced against the live spot price.",
      },
      {
        name: "North Point",
        note: "Reston's newer northern village near Route 7 skews toward families and commuters, and the sell pile reflects it: modern diamond jewelry, newer designer pieces, gold coins and small bullion bought as gifts or investments. North Point is also well placed for the trip — Route 7 east runs toward our Vienna/Tysons store, while Fairfax County Parkway to Route 28 drops you at Chantilly.",
      },
    ],
    nearestIntro:
      "There's no Cash for Gold VA storefront inside Reston yet, but the town sits between two of our stores — Chantilly down Route 28 and Vienna/Tysons out the Dulles Toll Road — so wherever you are in Reston, one of them is a short drive.",
    nearest: [
      { slug: "chantilly", drive: "about 15 minutes southwest via Route 28 — quickest from Herndon-side and western Reston" },
      { slug: "vienna", drive: "about 15–20 minutes east via the Dulles Toll Road or Route 7, handy from eastern Reston near Wiehle-Reston East" },
    ],
    faqs: [
      {
        q: "Where can I sell gold near Reston, VA?",
        a: "The closest Cash for Gold VA store to Reston is our Chantilly location at 14025 Lee Jackson Memorial Hwy, Chantilly, VA 20151 — (571) 224-5279 — about 15 minutes southwest via Route 28, especially quick from western Reston and the Herndon side. Our Vienna/Tysons store at 8453 Tyco Rd #C, Vienna, VA 22182 — (703) 889-0532 — is roughly 15–20 minutes east via the Dulles Toll Road or Route 7, and often easier from eastern Reston near Wiehle-Reston East.",
      },
      {
        q: "Do you buy diamonds and designer jewelry from Reston sellers?",
        a: "Yes — and given Reston's professional, tech-corridor population, they're some of the most common items we see from town. Diamond engagement rings, designer jewelry from Tiffany, Cartier, and David Yurman, and luxury watches including Rolex are all appraised individually: brand, model, stone quality, and condition frequently put the value well above the metal weight alone. If you still have the box, papers, or receipts, bring them — original accessories can raise the offer.",
      },
      {
        q: "Do you buy silver and coins near Reston?",
        a: "Yes. We buy sterling silver jewelry, flatware and tea sets, silver bars and rounds, and pre-1965 \"junk silver\" US coins, plus gold coins and bullion. Collectible coins are evaluated for numismatic value — rarity, date, and condition — not just melted weight, so a collectible coin is never automatically priced as scrap metal.",
      },
      {
        q: "How do you figure out what my gold is worth?",
        a: "Every piece is tested for karat and weighed on a calibrated scale in front of you — you watch the whole process. We then price the tested purity and weight against the live spot price of gold, silver, platinum, or palladium at that moment and explain exactly how we got to the number. The appraisal is free with no obligation, and you keep your items in hand until you decide to accept.",
      },
      {
        q: "Will I get paid on the spot if I sell?",
        a: "Yes — accept the offer and it's an instant payout, paid the same visit. There's no check to wait on and no processing period: the drive from Reston, the appraisal, and the payout all fit in a single trip. Note that Virginia law requires sellers to be 18 or older.",
      },
    ],
    relatedPosts: ["we-buy-diamonds-more-than-1-carat-with-gia", "list-of-top-20-name-brand-in-gold-jewelry", "cash-for-gold-close-to-me"],
    closingCta:
      "Take Route 28 south about 15 minutes from Reston to our Chantilly store — free appraisal against the live spot price, tested in front of you, and an instant payout before you head back up the corridor.",
  },
  {
    slug: "cash-for-gold-sterling",
    city: "Sterling",
    region: "VA",
    seoTitle: "Sell Gold Near Sterling, VA | 15 Min Down Route 28",
    metaDescription:
      "Sell gold near Sterling, VA: our Chantilly store is 15–18 minutes down Route 28 — free in-person appraisal, instant payout. 4.9★ from 500+ Google reviews.",
    heroTitle: "Cash for Gold in Sterling, VA",
    heroSubtitle:
      "We don't have a storefront in Sterling — or anywhere in eastern Loudoun — but our Chantilly store is a straight 15–18 minute run south down Route 28, no Toll Road required, and you're paid the same visit you walk in.",
    intro:
      "Searching for cash for gold in Sterling? Honest answer first: **there's no Cash for Gold VA counter in Sterling itself**, and no storefront anywhere in eastern Loudoun County. But Sterling sits right on Route 28, and that road runs almost door to door to our **Chantilly store on Lee Jackson Memorial Highway — about 15–18 minutes south**, past the Dulles airport frontage, with **no Dulles Toll Road and no tolls at all**. If Route 7 fits your day better, our Vienna store in the Tysons area is roughly 20–22 minutes east on Leesburg Pike. Sterling has been an established community since long before the data centers arrived — from the 1960s streets of Sterling Park to the Potomac-side neighborhoods of Cascades and Lowes Island — and the jewelry boxes here reflect those decades: family estate pieces, everyday karat gold, coins tucked away since the '70s, and, from Sterling's large international community, **high-karat 22k and 24k jewelry** that deserves to be paid at its true purity.\n\nWhichever store you choose, the appraisal works the same way and it happens **entirely in front of you**. We test each piece for purity, weigh it on a **calibrated scale you can watch**, and build the offer from the **live spot price** at that moment — then we explain the number before you decide anything. The appraisal is **free with no obligation**, and your items **stay in your hands until you accept**. If you like the offer, it's an **instant payout** — you're paid the same visit. If you don't, you drive back up 28 with everything you brought and a real number to compare. That process is why we hold a **4.9★ Google rating across 500+ reviews**.",
    whyLocalTitle: "Why Sterling sellers do better at a real counter than in a mail-in envelope",
    whyLocal:
      "The mail-in alternative asks a lot: seal your jewelry — possibly a parent's estate pieces or a 22k wedding set — into a prepaid envelope, ship it to a building you'll never see, and wait for an offer calculated out of your sight. If you decline, you wait again for the return shipment and hope everything comes back. At a real counter, none of that risk exists. **You watch the purity test, you watch the scale, and your gold never leaves your possession until you've agreed to a price.** For high-karat pieces especially, that visibility matters: you can see for yourself that a 22k bangle is being tested and paid as 22k, not quietly graded like ordinary 14k.\n\nAnd from Sterling, going in person is a genuinely small errand. The **Chantilly counter is one road away — Route 28 south, about 15–18 minutes** from most of town, whether you're starting near Dulles Town Center, Sugarland Run, or Sterling Park. There's no Toll Road involved and no Beltway to fight; it's a shorter trip than plenty of people's daily run down the tech corridor. Best of all, the transaction actually finishes that day: if you accept the offer, you're **paid before you leave the store** — an instant payout, not a check riding back through the mail.",
    neighborhoods: [
      {
        name: "Sterling Park",
        note: "Sterling's original planned community, built out from the early 1960s, is where many of eastern Loudoun's longtime families still live — often in the same houses for decades. That longevity shows in what comes to our counter: estate jewelry from a parent's dresser, wedding bands from the '60s and '70s, and coin jars started generations ago. Older pieces get looked at for age and workmanship before anyone talks melt weight.",
      },
      {
        name: "Sugarland Run",
        note: "This 1970s planned community along the Sugarland Run stream valley mixes longtime homeowners with newer international families, so the jewelry runs the full range — everyday 14k chains and bands alongside high-karat 22k and 24k pieces. We test every item for its actual purity and pay at that tested karat, which matters most on exactly this kind of mixed box.",
      },
      {
        name: "Cascades & Lowes Island",
        note: "The newer Potomac-side communities on Sterling's north end skew modern: designer jewelry, diamond engagement upgrades, and luxury watches bought in good career years. Those are appraised individually on brand, model, and condition — which can put the offer well beyond what the metal alone would weigh out to — so bring boxes and papers if you still have them.",
      },
      {
        name: "Countryside & the Route 7 corridor",
        note: "The established neighborhoods near Algonkian Parkway and the Dulles Town Center stretch of Route 7 send us the practical middle of the business: downsizing boxes, sterling silver flatware sets, broken chains, and single earrings. Damaged gold pays the same per gram as intact gold, and full silver sets add up quickly by weight — and from this side of Sterling, the Route 7 run east to our Vienna/Tysons store can be the easier drive.",
      },
    ],
    nearestIntro:
      "Sterling doesn't have a Cash for Gold VA storefront yet, but the town's two main roads each lead almost directly to one of our stores — Route 28 south to Chantilly, or Route 7 east to Vienna/Tysons.",
    nearest: [
      { slug: "chantilly", drive: "about 15–18 minutes south down Route 28, no tolls" },
      { slug: "vienna", drive: "about 20–22 minutes east via Route 7 (Leesburg Pike) toward Tysons" },
    ],
    faqs: [
      {
        q: "Where can I sell gold near Sterling, VA?",
        a: "There's no Cash for Gold VA store inside Sterling or anywhere in eastern Loudoun County. The closest is our Chantilly location at 14025 Lee Jackson Memorial Hwy, Chantilly, VA 20151 — (571) 224-5279 — about 15–18 minutes south on Route 28, with no tolls. Our Vienna store at 8453 Tyco Rd #C, Vienna, VA 22182 — (703) 889-0532 — is roughly 20–22 minutes east via Route 7 (Leesburg Pike) in the Tysons area.",
      },
      {
        q: "How far is the nearest gold buyer from Sterling?",
        a: "About 15–18 minutes. From most of Sterling — Sterling Park, Sugarland Run, or the Dulles Town Center area — you take Route 28 south past the airport to Route 50, and our Chantilly store is right there on Lee Jackson Memorial Highway. It's one road nearly the whole way, and the Dulles Toll Road never enters into it. From Cascades, Lowes Island, or Countryside, Route 7 east to our Vienna/Tysons store is a comparable 20–22 minute option.",
      },
      {
        q: "Do you buy silver, coins, and things besides gold from Sterling sellers?",
        a: "Yes. Beyond gold in all karats — scrap, jewelry, coins, and bullion — we buy sterling silver jewelry, flatware and tea sets, silver bars and rounds, and pre-1965 US 90% junk silver coins, plus platinum and palladium, diamonds and precious stones, fine and designer jewelry, luxury watches. Collectible coins are appraised individually, since dates and condition can beat the metal value — so don't clean them, and bring any paperwork you have.",
      },
      {
        q: "How do you decide what my gold is worth?",
        a: "Every offer is built the same way: we test each piece for its actual purity — including verifying 22k and 24k jewelry at its true high karat rather than rounding it down — weigh it on a calibrated scale in front of you, and price it against the live spot price at that moment. Then we explain the number before you decide. The appraisal is free, there's no obligation, and your items stay in your hands until you agree.",
      },
      {
        q: "Do I get paid on the spot, or do I wait for a check?",
        a: "You're paid the same visit. If you accept the offer, it's an instant payout — paid before you leave the Chantilly or Vienna store, not a check to deposit or a transfer to chase. If you'd rather think it over, you simply take your items home; the appraisal costs nothing either way, and the number is yours to compare anywhere else.",
      },
    ],
    relatedPosts: ["cash-for-gold-loudoun-county-va", "we-buy-estate-gold-jewelry", "is-cash-for-gold-worth-it"],
    closingCta:
      "Point the car south on Route 28 — our Chantilly store is 15–18 minutes from Sterling, no tolls, and your gold can be tested, quoted, and paid out in a single visit. Call (571) 224-5279 or just walk in.",
  },
  {
    slug: "cash-for-gold-ashburn",
    city: "Ashburn",
    region: "VA",
    seoTitle: "Sell Gold Near Ashburn, VA | Free Appraisal, Payout",
    metaDescription:
      "Selling gold near Ashburn, VA? Cash for Gold VA in Chantilly is ~18–20 min down Route 28 — free in-person appraisal, instant payout, 4.9★ from 500+ reviews.",
    heroTitle: "Cash for Gold in Ashburn, VA",
    heroSubtitle:
      "We don't have a store in Ashburn itself — our Chantilly location is about 18–20 minutes south via Route 28 or Loudoun County Parkway. Get a free, no-obligation appraisal and walk out paid the same visit.",
    intro:
      "Ashburn has changed fast. What used to be Loudoun County farmland is now the heart of **Data Center Alley**, ringed by neighborhoods like Brambleton, Broadlands, and Ashburn Farm and anchored by One Loudoun and two Silver Line Metro stations. With that growth comes a steady flow of people relocating in and out of the region — and moving is exactly when jewelry boxes get opened. Modern **diamond engagement rings**, designer pieces from Tiffany, Cartier, and David Yurman, luxury watches, and inherited estate jewelry are the items we see most often from Ashburn sellers.\n\nHere's the honest part: we don't have a storefront in Ashburn or anywhere in Loudoun County. Our nearest store is in **Chantilly, about 18–20 minutes south via Route 28**. When you arrive, everything happens in front of you: your items are **tested and weighed on a calibrated scale** while you watch, we quote you against the **live spot price** for gold, silver, platinum, or palladium, and you keep possession of your items until you accept an offer. If you do, it's an **instant payout** — you're paid the same visit.",
    whyLocalTitle: "Why Ashburn sellers make the drive instead of mailing it in",
    whyLocal:
      "Mail-in gold buyers ask you to seal your jewelry in an envelope, ship it off, and wait for a number you can't watch being calculated. If you decline the offer, you wait again for your items to come back — and hope they do. Across a counter, none of that ambiguity exists. At our Chantilly store you see the **calibrated scale**, you see the karat testing, and you see the **live spot price** we're quoting against. Your items never leave your sight until you've agreed to sell.\n\nFrom most of Ashburn — Brambleton, Broadlands, Ashburn Village, One Loudoun — it's a straightforward run down **Route 28 or Loudoun County Parkway**, roughly 18 to 20 minutes. The appraisal is **free and no-obligation**, so the worst case is you drive home knowing exactly what your gold is worth. The best case: you accept the offer and leave with an **instant payout**, paid before you're back on Route 28. Our Google rating stands at **4.9★ across 500+ reviews**.",
    neighborhoods: [
      {
        name: "Brambleton",
        note: "One of Loudoun's newest large communities, full of young professional families who bought or received modern jewelry in the last decade. We regularly appraise contemporary diamond engagement rings and designer pieces from households like these. Newer jewelry often comes with receipts or certificates — bring them if you have them, though they're not required.",
      },
      {
        name: "Broadlands & Ashburn Farm",
        note: "These established neighborhoods have been home to families for twenty-plus years, which means more inherited and estate jewelry: sterling flatware and tea sets, older gold chains, class rings, and coin collections. We buy silver in all its forms — junk silver coins, bars, rounds, and sterling — alongside gold of every karat.",
      },
      {
        name: "Ashburn Village",
        note: "One of Ashburn's original communities, with a mix of long-time residents and newcomers near the Ashburn Metro station. Downsizing and estate cleanouts here often surface broken or single-earring gold, dated jewelry, and old coins — all of it sellable. Condition doesn't matter for scrap gold; it's valued by karat and weight.",
      },
      {
        name: "One Loudoun",
        note: "Ashburn's mixed-use town center draws a crowd that skews toward luxury watches and designer jewelry — Rolex, Cartier, Tiffany, David Yurman. These pieces are worth more than their melt value, and we appraise them as complete items, not scrap. Boxes and papers help the offer but aren't mandatory.",
      },
    ],
    nearestIntro:
      "Both of our closest stores sit along the same Route 28 corridor you already use — Chantilly first, then Manassas a few minutes further south.",
    nearest: [
      { slug: "chantilly", drive: "about 18–20 minutes south via Route 28 or Loudoun County Parkway" },
      { slug: "manassas", drive: "roughly 25 minutes south down Route 28" },
    ],
    faqs: [
      {
        q: "Where can I sell gold near Ashburn, VA?",
        a: "The nearest Cash for Gold VA store to Ashburn is in Chantilly at 14025 Lee Jackson Memorial Hwy, Chantilly, VA 20151 — (571) 224-5279 — about 18–20 minutes south via Route 28 or Loudoun County Parkway. No appointment is needed: your items are tested and weighed in front of you, the appraisal is free and no-obligation, and if you accept the offer you receive an instant payout the same visit.",
      },
      {
        q: "Do you buy diamond engagement rings from Ashburn sellers?",
        a: "Yes — diamond engagement rings are one of the most common items we see from Ashburn, given how many households here bought modern rings in recent years. We evaluate the diamond and the gold or platinum setting separately, so you're paid for both. Designer rings from Tiffany, Cartier, and similar houses are appraised as complete pieces, which typically means a stronger offer than melt value alone.",
      },
      {
        q: "Can I sell silver, coins, or bullion, not just gold?",
        a: "Yes. We buy sterling silver jewelry, flatware and tea sets, silver bars and rounds, and junk silver coins, plus gold coins and bullion, platinum, and palladium. Coin collections are welcome — collectible coins can carry numismatic value beyond their metal content, and we assess that in person.",
      },
      {
        q: "How do you decide what my gold is worth?",
        a: "Three things: karat, weight, and the live spot price. Your items are tested for purity and weighed on a calibrated scale in front of you, then we quote against the current market price of gold — not a number fixed days ago. You keep your items in hand until you decide to accept, and the appraisal costs nothing either way.",
      },
      {
        q: "Will I really be paid on the spot?",
        a: "Yes. If you accept our offer, it's an instant payout — you're paid the same visit, before you leave the store. There's no check to wait on, no bank transfer delay, and no obligation to sell if the number doesn't work for you.",
      },
    ],
    relatedPosts: ["cash-for-gold-loudoun-county-va", "we-buy-diamonds-more-than-1-carat-with-gia", "list-of-top-20-name-brand-in-gold-jewelry"],
    closingCta:
      "Ready to find out what your gold, diamonds, or watch are actually worth? Call our Chantilly store at (571) 224-5279 or drive down Route 28 to 14025 Lee Jackson Memorial Hwy — free appraisal, no obligation, and an instant payout if you sell.",
  },
  {
    slug: "cash-for-gold-burke",
    city: "Burke",
    region: "VA",
    seoTitle: "Sell Gold Near Burke, VA | Instant Payout, 15 Min Away",
    metaDescription:
      "Sell gold near Burke, VA — our Annandale store is about 15 minutes up Braddock Road. Free in-person appraisal, instant payout. 4.9★ from 500+ reviews.",
    heroTitle: "Cash for Gold in Burke, VA",
    heroSubtitle:
      "We don't have a storefront in Burke itself, but our Annandale store is about 15 minutes northeast up Braddock Road — your gold is tested in front of you and you're paid the same visit.",
    intro:
      "Searching for cash for gold in Burke? Honest answer first: **we don't have a counter in Burke itself** — but our **Annandale store is about 15 minutes northeast via Braddock Road**, a drive most Burke residents already make on autopilot. Burke is one of Fairfax County's most settled communities: Burke Centre's villages date to the late 1970s, and many families around Lake Braddock and Burke Lake have been in the same house for decades. That kind of tenure produces a very particular kind of gold — **inherited rings, class rings, old karat jewelry sitting in a dresser drawer since the '80s, sterling flatware in the dining-room hutch** — and it's exactly what we appraise every day.\n\nThe appraisal itself is simple and happens **entirely in front of you**. We test each piece for purity, weigh it on a **calibrated scale you can watch**, and quote a price against the **live spot price** at that moment — then we explain the number. The appraisal is **free with no obligation**, and your items **stay in your hands until you accept**. If you take the offer, it's an **instant payout** — you're paid the same visit. If not, everything goes home with you, along with a real number to compare anywhere else.",
    whyLocalTitle: "Why Burke sellers do better at a real counter than with a mail-in envelope",
    whyLocal:
      "Mail-in gold buyers ask you to seal your grandmother's ring into a prepaid envelope, ship it to a facility you'll never see, and wait for an offer calculated out of your sight — with your gold already in someone else's building. At a real counter, none of that applies: **you watch the purity test, you watch the scale, and your jewelry never leaves your possession until you've agreed to a price**. If the number falls short, it goes back in your pocket and you drive home.\n\nFrom Burke, that in-person option costs almost nothing in time. **Braddock Road runs straight up to our Annandale store — about 15 minutes** from Burke Centre or Lake Braddock, shorter than a round trip to the post office with a padded envelope. And there's a second option if your day points the other way: our **Chantilly store, roughly 18–20 minutes northwest via the Fairfax County Parkway**. Either way, if you sell, you're **paid before you leave** — paid the same visit, not a check that arrives whenever the mail does.",
    neighborhoods: [
      {
        name: "Burke Centre",
        note: "The heart of Burke — a large planned community from the late 1970s, organized into its own named villages around pools, paths, and the Burke Centre VRE station. Households that bought in when the villages were new have had four decades to accumulate gold: original wedding sets, anniversary jewelry, and pieces inherited from the generation before. Much of it hasn't been worn in years, and it prices off the same live spot as anything bought yesterday.",
      },
      {
        name: "Lake Braddock",
        note: "The established neighborhoods around the lake — and around Lake Braddock Secondary, one of the biggest schools in Virginia — send us the everyday side of the business: class rings, 14k chains, wedding bands, and single earrings whose partners vanished years ago. Each piece is tested at its true karat, so a real 10k class ring gets separated from a plated lookalike on the spot.",
      },
      {
        name: "Burke Lake & Fairfax Station",
        note: "South of Burke Lake Park, the larger lots toward Fairfax Station hold some of the area's longest-tenured households — and that's where estate boxes come from. Sterling flatware services, tea sets, coin collections, and jewelry passed down through two or three generations all get appraised piece by piece, with anything carrying real age or craftsmanship valued on its own merits rather than quoted as scrap.",
      },
      {
        name: "Cherry Run & Signal Hill",
        note: "These single-family neighborhoods on Burke's southern side are where a lot of downsizing happens — parents whose kids went through Cherry Run or White Oaks decades ago, now clearing out drawers before a move. Mixed bags are welcome: we test everything in front of you, sort the real gold and sterling from the costume pieces honestly, and quote only what's actually worth selling.",
      },
    ],
    nearestIntro:
      "Burke doesn't have a Cash for Gold VA storefront yet, but two of our stores bracket it — Annandale a straight run up Braddock Road, and Chantilly an easy trip up the Fairfax County Parkway.",
    nearest: [
      { slug: "annandale", drive: "about 15 minutes northeast via Braddock Road" },
      { slug: "chantilly", drive: "roughly 18–20 minutes northwest via the Fairfax County Parkway" },
    ],
    faqs: [
      {
        q: "Where can I sell gold near Burke, VA?",
        a: "There's no Cash for Gold VA store inside Burke itself. The closest is our Annandale location at 7262 Columbia Pike, Annandale, VA 22003 — (571) 290-8020 — about 15 minutes northeast via Braddock Road. Our Chantilly store at 14025 Lee Jackson Memorial Hwy, Chantilly, VA 20151 — (571) 224-5279 — is roughly 18–20 minutes northwest via the Fairfax County Parkway if that direction suits your day better.",
      },
      {
        q: "How far is the nearest gold buyer from Burke?",
        a: "About 15 minutes. From Burke Centre or Lake Braddock, Braddock Road runs almost directly to our Annandale counter — no highway required. Chantilly is the second option at roughly 18–20 minutes up the Fairfax County Parkway to Route 50. Both stores run the identical appraisal: tested and weighed in front of you, priced against the live spot, paid the same visit.",
      },
      {
        q: "Do you buy sterling silver flatware and estate jewelry from Burke families?",
        a: "Yes — and Burke is exactly the kind of community it comes from. Inherited sterling flatware sets, tea services, and estate jewelry boxes are welcome as-is: don't polish or sort anything first. We check hallmarks, test each piece to confirm .925 sterling (separating out silverplate honestly so you're not guessing), weigh it all on a calibrated scale in front of you, and price it against the live silver spot. Full flatware services add up quickly by weight.",
      },
      {
        q: "How do you decide what my gold is worth?",
        a: "Every offer is built the same way: we test the item's actual purity — not just the stamp — weigh it on a calibrated scale you can watch, and price it against the live spot price at that moment. Then we explain the number before you decide anything. Antique, designer, and gemstone pieces are appraised individually, since they can be worth more than their metal content. The appraisal is free and your items stay in your hands until you agree.",
      },
      {
        q: "Do you pay on the spot, or do I wait for a check?",
        a: "You're paid on the spot. If you accept the offer, it's an instant payout — paid the same visit, before you leave the Annandale or Chantilly store. There's no check to wait on and no transfer to chase. If you decline, you simply take your items home; the appraisal costs nothing either way.",
      },
    ],
    relatedPosts: ["we-buy-estate-gold-jewelry", "is-cash-for-gold-worth-it", "cash-for-gold-close-to-me"],
    closingCta:
      "Point the car up Braddock Road — our Annandale store is about 15 minutes from Burke, or call (571) 290-8020 first to ask what your pieces might be worth.",
  },
  {
    slug: "cash-for-gold-arlington",
    city: "Arlington",
    region: "VA",
    seoTitle: "Sell Gold in Arlington, VA | Free Appraisal, 4.9★",
    metaDescription:
      "Selling gold near Arlington, VA? Free appraisal at our Annandale store, 15–20 min via Rt 50 or I-395 — instant payout, paid same visit. 4.9★, 500+ reviews.",
    heroTitle: "Cash for Gold in Arlington, VA",
    heroSubtitle:
      "We don't have a storefront in Arlington itself, but our Annandale store is about 15–20 minutes west via Route 50 or I-395 — your gold is tested in front of you and you're paid the same visit.",
    intro:
      "Looking for cash for gold in Arlington? Honest answer first: **we don't have a store inside Arlington County** — and in a county this dense and this expensive per square foot, most gold buyers don't. Our **Annandale store is about 15–20 minutes west, via Route 50 (Arlington Boulevard) or I-395** depending on which side of the county you're on, and our Vienna store in the Tysons area is a similar run out I-66 for North Arlington. Both are real counters where you watch every step and drive home paid.\n\nArlington's gold is unusually varied for one county. The **Rosslyn–Ballston corridor and National Landing** skew young and professional, so from Clarendon, Courthouse, and Crystal City we see **modern designer jewelry, diamond engagement rings, and luxury watches** — pieces where brand and stones matter more than melt weight. From **North Arlington's established neighborhoods like Lyon Village and Country Club Hills**, it's the opposite: estate boxes, inherited wedding sets, and heirloom gold that's been in a family since long before the Metro arrived. Either way, the appraisal works the same: we **test and weigh your items on a calibrated scale in front of you**, price them against the **live spot price** at that moment, and explain the number. The appraisal is **free and carries no obligation** — your items stay in your hands until you accept, and if you do, it's an **instant payout the same visit**.",
    whyLocalTitle: "Why Arlington sellers do better at a real counter than with a mail-in envelope",
    whyLocal:
      "Mail-in gold buyers ask you to seal an engagement ring or a parent's estate jewelry into a prepaid envelope, send it to a facility you'll never see, and wait for an offer calculated out of your sight — with your gold already in someone else's building. At a real counter, the leverage stays with you: **you watch the purity test, you watch the scale reading, and your items never leave your possession until you've agreed to a price**. If the number falls short, everything goes back in your bag and you're back across the county line with a real figure to compare anywhere else.\n\nFrom Arlington, that in-person option costs you one short drive against the flow of traffic. **South Arlington — Shirlington, Columbia Pike, Crystal City — reaches our Annandale counter in about 15–20 minutes via I-395 or Route 50**, heading out of the county while everyone else fights their way in. **North Arlington can take I-66 to our Vienna store near Tysons** in about the same time. Either trip is shorter than a round trip to the post office, and it ends differently: you're **paid before you leave the store**, an instant payout the same visit, not a check that arrives whenever the envelope does.",
    neighborhoods: [
      {
        name: "Clarendon, Ballston & the R-B corridor",
        note: "The high-rises along the Orange and Silver lines are full of young professionals, and the jewelry that comes from here reflects it: modern engagement rings, designer pieces from Tiffany, Cartier, and David Yurman, and luxury watches including Rolex. Those are appraised on brand, model, stones, and condition — often worth well beyond what the metal alone would weigh out to — so bring boxes and papers if you still have them.",
      },
      {
        name: "Crystal City, Pentagon City & National Landing",
        note: "The Amazon HQ2 side of the county turns over fast — new arrivals, relocations, and upgrades — which means rings from a previous chapter, barely-worn gifts, and modern diamond settings. Diamonds are evaluated separately from their gold settings, since a center stone frequently carries more value than the band itself. From here, I-395 makes Annandale the quickest counter.",
      },
      {
        name: "Lyon Village & Country Club Hills",
        note: "North Arlington's established single-family neighborhoods hold decades of accumulation: inherited wedding sets, estate jewelry, sterling flatware services, and coin collections passed down through families who bought in generations ago. Anything with real age, maker's marks, or craftsmanship gets appraised on its own merits before melt weight ever enters the conversation. I-66 to our Vienna store is often the easier run from this side.",
      },
      {
        name: "Shirlington & Columbia Pike",
        note: "South Arlington brings the steady, everyday side of the business — 14k chains, broken bracelets, single earrings, and old gold that's been sitting in a drawer through a couple of moves. Condition doesn't matter for melt value, and small piles add up quickly once each piece is tested at its true karat. Columbia Pike itself runs almost straight to our Annandale counter.",
      },
    ],
    nearestIntro:
      "Arlington doesn't have a Cash for Gold VA storefront yet, but two of our stores bracket the county — Annandale to the southwest and Vienna/Tysons to the northwest — so pick whichever matches your side of Route 50.",
    nearest: [
      { slug: "annandale", drive: "about 15–20 minutes west via Route 50 (Arlington Boulevard) or I-395 — closest for South Arlington and Columbia Pike" },
      { slug: "vienna", drive: "about 15–20 minutes out I-66 toward Tysons — often the quicker run from North Arlington" },
    ],
    faqs: [
      {
        q: "Where can I sell gold near Arlington, VA?",
        a: "There's no Cash for Gold VA store inside Arlington County itself. The closest is our Annandale location at 7262 Columbia Pike, Annandale, VA 22003 — (571) 290-8020 — about 15–20 minutes west via Route 50 (Arlington Boulevard) or I-395, whichever is closer to your side of the county. Our Vienna/Tysons store at 8453 Tyco Rd #C, Vienna, VA 22182 — (703) 889-0532 — is roughly 15–20 minutes out I-66 and often quicker from North Arlington.",
      },
      {
        q: "Do you buy designer jewelry, diamonds, and luxury watches from Arlington sellers?",
        a: "Yes — with the R-B corridor and National Landing next door, they're a big share of what Arlington brings us. Designer jewelry from makers like Tiffany, Cartier, and David Yurman, diamond engagement rings, and luxury watches including Rolex are all appraised individually on brand, model, stones, and condition rather than weighed as scrap, since those factors often put the value well above the gold content. Original boxes, papers, and extra links raise the offer, so bring them if you have them.",
      },
      {
        q: "I inherited estate jewelry, silver, or coins from a North Arlington home — how do you handle that?",
        a: "Bring the whole box as-is — don't clean or sort anything, since cleaning can damage antique finishes and reduce collector value. We test each piece separately: real gold gets separated from plated on the spot, sterling flatware and hollowware are confirmed as .925 and weighed as a set, and coins with collectible dates or mint marks are appraised individually rather than priced as bullion. Anything with genuine age or craftsmanship is valued on its own merits before melt weight enters the conversation.",
      },
      {
        q: "How do you decide what my gold is worth?",
        a: "Every offer is built the same way: we test the item's actual purity, weigh it on a calibrated scale you can watch, and price it against the live spot price at that moment. Then we explain the number before you decide anything. Your items stay in your hands until you agree, and the appraisal is free and no-obligation either way — if the offer doesn't work, you take everything home along with a real figure to compare.",
      },
      {
        q: "Do you pay on the spot, or do I wait for a check?",
        a: "You're paid the same visit. If you accept the offer, it's an instant payout — paid before you leave the store, not a check to deposit or a transfer to chase. For most Arlington sellers the whole trip, including the drive from Clarendon or Crystal City, fits inside a long lunch break.",
      },
    ],
    relatedPosts: ["we-buy-estate-gold-jewelry", "selling-gold-jewelry", "is-cash-for-gold-worth-it"],
    closingCta:
      "Point the car west — our Annandale store at 7262 Columbia Pike is 15–20 minutes from most of Arlington via Route 50 or I-395. Call (571) 290-8020 or just walk in: the appraisal is free, the testing happens in front of you, and if you sell, it's an instant payout the same visit.",
  },
];

export const getCityLanding = (slug: string): CityLanding | undefined =>
  CITY_LANDINGS.find((c) => c.slug === slug);
