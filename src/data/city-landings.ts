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
    seoTitle: "Cash for Gold in Alexandria, VA | Instant Payout",
    metaDescription:
      "Selling gold in Alexandria, VA? Get a free appraisal and instant payout at our nearest store in Annandale, 15 minutes away. 4.9★, 500+ reviews.",
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
    seoTitle: "Sell Gold in Fairfax, VA | Instant Payout, 4.9★ Rated",
    metaDescription:
      "Sell gold in Fairfax, VA? Our Chantilly store is 12–15 minutes west on Route 50 — free appraisal, instant payout. 4.9★ from 500+ reviews.",
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
  {
    slug: "cash-for-gold-herndon",
    city: "Herndon",
    region: "VA",
    seoTitle: "Sell Gold in Herndon, VA | 22k & 24k Paid at True Purity",
    metaDescription:
      "Sell gold in Herndon, VA: our Chantilly store is 10-15 minutes down Route 28. Free testing, instant payout, 22k/24k paid at full purity. 4.9★, 500+ reviews.",
    heroTitle: "Cash for Gold in Herndon, VA",
    heroSubtitle:
      "We don't have a storefront in Herndon itself, but our Chantilly store is a quick 10-15 minute run south on Route 28 (Sully Road) — your gold is tested while you watch and paid out in cash the same visit.",
    intro:
      "Looking for cash for gold in Herndon? Honest answer up front: **our nearest store is in Chantilly, not Herndon** — but since Herndon sits right on Route 28, that's a **10-15 minute straight drive south** to our counter on Lee Jackson Memorial Highway. There's a second option too: our Vienna/McLean store, about 15-20 minutes east on the Dulles Toll Road, which is often the easier run from the Reston side of town. At either counter you watch your items get tested and weighed on a calibrated scale, hear a number tied to the live spot price, and take cash home the same trip.\n\nOne thing that sets Herndon apart from the rest of our coverage area: a lot of the gold we see from here is **high-karat 22k and 24k jewelry** — Indian and Middle Eastern wedding sets, bangles, and chains that carry far more gold per gram than the typical American 14k piece. That's exactly where choosing careful **gold buyers in Herndon's area** pays off, because a buyer who lazily quotes everything \"like 14k\" is underpaying a 22k bangle by more than a third. We test every piece for its actual purity and price it at that purity, whether it's a 24k temple necklace or a 10k class ring.",
    whyLocalTitle: "Why Herndon sellers should skip the mail-in envelope",
    whyLocal:
      "With a mail-in gold buyer, your jewelry rides off in a prepaid envelope and the offer arrives after your gold is already in someone else's building — and for high-karat pieces especially, you have no way to confirm they tested it as 22k instead of quietly grading it lower. Selling in person keeps the leverage with you: **the karat test and the scale reading happen in front of your eyes**, you can ask why a piece graded the way it did, and if the number falls short, your jewelry goes back in your bag and you drive home.\n\nFrom Herndon, that in-person trip barely costs you anything. Route 28 runs straight past the airport traffic down to Route 50, putting the **Chantilly counter about 10-15 minutes from almost anywhere in town** — a shorter errand than most Dulles-corridor commutes. If you're closer to the Toll Road on the Reston side, Vienna/McLean is an easy eastbound run instead. Either way you're **paid in cash before you head back up the road**, not waiting on a check to survive the mail twice.",
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
        a: "We take the live spot price per troy ounce, divide by 31.1 for a per-gram rate, then multiply by your item's purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k, roughly 91.7% for 22k, and 99.9% for 24k — and its weight on our scale. Plain scrap gold carries a small refining margin for melting and assaying, standard bullion gold coins pay 90% of live spot, and coins, designer pieces, and gemstone jewelry are appraised separately since they can be worth more than the metal alone.",
      },
      {
        q: "Which store is closer to Herndon — Chantilly or Vienna?",
        a: "Chantilly, for most of town: it's about 10-15 minutes straight down Route 28 to Route 50, one road nearly the whole way. Vienna/McLean is about 15-20 minutes east on the Dulles Toll Road, which can be the quicker choice if you live near the Reston line or already commute toward Tysons. Both pay the same way — tested in front of you, cash the same visit.",
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
      "Point the car down Route 28 — our Chantilly store is 10-15 minutes south of Herndon, and your gold can be tested, quoted, and paid in cash before you're back through town.",
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
      "There's no gold buyer inside South Riding itself, but our Chantilly store is 10–15 minutes east on Route 50 — get your jewelry tested in front of you and drive home with cash the same trip.",
    intro:
      "Looking for cash for gold in South Riding? Here's the straight answer: **we don't have a counter inside the community**, but our **Chantilly store sits right on Route 50 (Lee Jackson Memorial Highway)**, about 10–15 minutes east of the Dulles South area — the same road you already take toward Fair Oaks. Your items are tested and weighed on a calibrated scale while you watch, quoted against the **live spot price**, and paid in cash before you head back west.\n\nSouth Riding's gold looks different from what comes out of Northern Virginia's older towns, and we price it accordingly. Because most of the community was built from the late 1990s on, we see far more **modern pieces — 14k wedding sets, upgraded engagement rings, everyday chains, kids' jewelry, and gifts from good years** — than dusty estate boxes. That's exactly the kind of gold that's easy to underestimate: it's stamped, it's real, and it adds up quickly on the scale, which is why families searching for **gold buyers near South Riding** often walk out of Chantilly with more than they expected.",
    whyLocalTitle: "Why South Riding sellers should skip the mail-in envelope",
    whyLocal:
      "Mail-in gold buyers ask you to seal your wedding set in a padded envelope, hand it to a carrier, and hope the offer that comes back days later is fair — with your jewelry already in someone else's facility. Selling in person reverses that entirely: **your gold stays in your hands until you've heard the number and agreed to it**. You watch the karat test, you watch the scale, and if the offer doesn't work, you drive home with everything you came with.\n\nFrom South Riding, that in-person option is unusually painless. The Chantilly counter is **one road the whole way — Route 50 east, about 10–15 minutes** from the town center, no highway merges and no parking garages. That's less time than boxing and shipping your jewelry would take, and instead of tracking an envelope for a week, you're **paid in cash the same visit**.",
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
        a: "We start with the live spot price per troy ounce, divide by 31.1 for a per-gram price, then multiply by your item's karat purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k — and its weight on our scale. Plain scrap gold has a small refining margin deducted to cover melting and assaying, and standard bullion gold coins pay 90% of the live spot price. Coins, designer pieces, and gemstone jewelry are appraised separately, since they're often worth more than their metal content.",
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
      "Point the car east on Route 50 — our Chantilly store is 10–15 minutes from South Riding, and your gold is tested, quoted, and paid in cash in a single visit.",
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
      "We don't have a storefront in Centreville itself, but our Chantilly location is just 8–12 minutes north up Route 28 — your gold gets tested in front of you and paid out in cash the same visit.",
    intro:
      "Looking for cash for gold in Centreville? Honest answer up front: **we don't have a store inside Centreville**, but few places in Northern Virginia are better positioned to sell. Centreville sits where **Route 28, Route 29, and I-66 come together**, and that junction puts you within about 15 minutes of two of our counters in opposite directions — **Chantilly, 8–12 minutes north up Route 28 and Route 50**, and **Manassas, 12–15 minutes south down Centreville Road**. At either one, your items are tested and weighed on a calibrated scale while you watch, quoted against the live spot price, and paid in cash before you leave.\n\nThat crossroads location also means Centreville is one of the more competitive corners of the NoVA gold market — several buyers operate within a short drive, and that competition works in a seller's favor: nobody around here holds onto customers with lowball offers for long. What **gold buyers in Centreville** searches actually bring through our doors is a steady mix of everyday karat jewelry, inherited pieces, gold and silver coins, and the occasional luxury watch or designer item. Much of it is inherited or simply never worn, and people are **often surprised what a small pile is worth** once each piece is tested at its true karat and priced at today's spot.",
    whyLocalTitle: "Why Centreville sellers beat the mail-in envelope without leaving Route 28",
    whyLocal:
      "Mail-in gold buyers ask you to seal your jewelry into a prepaid envelope, surrender it to a shipping label, and wait days for an offer you can't watch being calculated. In person, the whole transaction stays in front of you: **you see the karat test, you see the scale reading, and your gold stays in your possession until you accept a number**. If the offer doesn't work, you pocket your jewelry and you're back on 28 in two minutes — no return shipping, no chasing a check.\n\nFrom Centreville, going in person barely costs you anything. Very few towns without their own store have **two buying counters within about 15 minutes in opposite directions**: head north on Route 28 to Route 50 and you're at our **Chantilly** store in 8–12 minutes, or run south down Centreville Road and you're at **Manassas** in 12–15 — whichever matches the direction your day is already going. Either drive is shorter than a post-office round trip, and it ends with **cash in hand the same visit**.",
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
        a: "Your quote starts with the live spot price per troy ounce, divided by 31.1 to get a per-gram price, then multiplied by your item's karat purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k — and its weight on our scale. Plain scrap gold has a small refining margin deducted to cover melting and assaying, standard bullion gold coins pay 90% of the live spot price, and coins, designer pieces, and gemstone jewelry are appraised separately since they can be worth more than their metal content.",
      },
      {
        q: "Is a small amount of inherited gold even worth bringing in?",
        a: "Almost always, yes. A lot of what Centreville sellers bring us is inherited or unworn — a few rings, a broken chain, a handful of old coins — and small piles routinely add up to more than people expect once each piece is tested at its true karat and priced at today's spot. There's no minimum and the appraisal is free, so it costs you nothing to find out.",
      },
      {
        q: "How long does selling gold near Centreville actually take?",
        a: "Usually 10–20 minutes at the counter for a typical batch of jewelry — no appointment needed at either Chantilly or Manassas. We test and weigh each piece in front of you, quote a price against the live spot, and if you accept, you're paid in cash on the spot. Larger estate lots or collectible coins can take a bit longer since those get appraised individually.",
      },
    ],
    relatedPosts: [
      "we-buy-estate-gold-jewelry",
      "understanding-the-cash-for-gold-process",
      "is-cash-for-gold-worth-it",
    ],
    closingCta:
      "Head 8–12 minutes north on Route 28 to our Chantilly store and find out what that Centreville jewelry box is really worth — cash in hand before you're back on I-66.",
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
      "There's no gold buyer inside Bristow itself, but our Manassas store is only 10–12 minutes away via Linton Hall Road and Route 28 — your jewelry gets tested in front of you and you drive home with cash the same trip.",
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
        a: "We start with the live spot price per troy ounce, divide by 31.1 to get a per-gram price, then multiply by your item's karat purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k — and its weight on our scale. Plain scrap gold has a small refining margin deducted to cover melting and assaying, and standard bullion gold coins pay 90% of the live spot price. Coins, designer pieces, and gemstone jewelry are appraised separately, since they're often worth more than their metal content.",
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
      "We don't have a storefront in Gainesville itself, but our Manassas location is only 12–15 minutes southeast via Route 29 or Linton Hall Road — your gold is tested in front of you and you walk out with cash the same visit.",
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
        a: "Your quote starts with the live spot price per troy ounce, divided by 31.1 for a per-gram price, then multiplied by your item's karat purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k — and its weight on our scale. Plain scrap gold has a small refining margin deducted to cover melting and assaying, and standard bullion gold coins pay 90% of the live spot price. Coins, designer pieces, and gemstone jewelry are appraised separately, since they're often worth more than their metal content.",
      },
      {
        q: "Which store is closer to Gainesville — Manassas or Chantilly?",
        a: "Manassas, clearly: about 12–15 minutes southeast, straight down Route 29 from the Virginia Gateway area or via Linton Hall Road from Piedmont and the neighborhoods south of I-66. Chantilly is about 18–20 minutes northeast via I-66 and Route 28 — a solid choice if you're already commuting that direction. Both counters test in front of you and pay the same visit, so pick whichever road matches your day.",
      },
      {
        q: "Do you buy gold coins and silver from Gainesville sellers?",
        a: "Yes — and coins show up often in the estate lots we see from Gainesville, sometimes tucked in the same box as the jewelry. Standard bullion gold coins pay 90% of the live spot price, silver is tested and bought at its own spot-based rate, and anything potentially collectible — old dates, mint marks, graded slabs — is appraised individually rather than priced as melt. Don't clean coins before coming in, and bring any paperwork or albums as-is.",
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
      "We don't have a storefront in Woodbridge yet — our closest counter is in Manassas, about 20–25 minutes west on the Prince William Parkway. It's one highway, one trip, and you drive home with cash instead of waiting on a mail-in check.",
    intro:
      "Searching for cash for gold in Woodbridge? Honest answer first: **our nearest store is in Manassas, not Woodbridge** — about **20–25 minutes west on the Prince William Parkway**, one road across the county from Lake Ridge or Dale City. That's a longer run than some of the towns we serve, and we won't pretend otherwise. What you get for the drive is the part a mail-in envelope can never offer: your items tested and weighed on a calibrated scale while you watch, a quote tied to the **live spot price**, and an **instant payout** in cash before you head back east. If you're on the northern side of town, our Annandale store — roughly 25 minutes up I-95 toward the Beltway — is a solid second option.\n\nWoodbridge is one of Prince William County's **oldest and most diverse communities**, and the gold that comes out of it shows both sides of that. From the **antique and craft shops of Historic Occoquan** come genuinely old pieces — estate settings, early pocket watches, odd lots of old coins — that deserve an appraisal for age and maker, not a trip to the melt pile. From Dale City and the Route 1 corridor comes jewelry from every tradition you can name, in every karat from 10k to 24k. Careful **gold buyers in Woodbridge** searches should end with someone who tests each piece at its true purity and knows when a piece is worth more than its weight — that's exactly how our Manassas counter works.",
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
        a: "Your quote starts with the live spot price per troy ounce, divided by 31.1 for a per-gram price, then multiplied by your item's karat purity — 41.7% for 10k, 58.3% for 14k, 75% for 18k — and its weight on our scale. Plain scrap gold has a small refining margin deducted to cover melting and assaying, and standard bullion gold coins pay 90% of the live spot price. Coins, designer pieces, and gemstone jewelry are appraised separately, since they're often worth more than their metal content.",
      },
      {
        q: "Is the drive from Woodbridge to Manassas really worth it to sell gold?",
        a: "For most sellers, yes — and we'd rather you decide with the real numbers. It's about 20–25 minutes each way on the Prince William Parkway, and the appraisal itself usually takes 10–20 minutes, so the whole errand fits in an afternoon. In exchange, you keep your gold in hand until you accept a price, watch every test yourself, and leave with an instant payout instead of shipping your jewelry to a stranger and waiting days for an offer you can't watch being made.",
      },
      {
        q: "Do you buy gold and silver coins from Woodbridge collectors?",
        a: "Yes. Standard bullion gold coins — American Eagles, Krugerrands, Maple Leafs, and similar — pay 90% of the live spot price. Collectible and older coins, including the kind that surface from Occoquan-area collections, are appraised individually because dates, mint marks, and condition can put their value well above the metal content. Leave them uncleaned and bring any grading slabs, albums, or paperwork you have.",
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
];

export const getCityLanding = (slug: string): CityLanding | undefined =>
  CITY_LANDINGS.find((c) => c.slug === slug);
