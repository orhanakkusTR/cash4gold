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
];

export const getCityLanding = (slug: string): CityLanding | undefined =>
  CITY_LANDINGS.find((c) => c.slug === slug);
