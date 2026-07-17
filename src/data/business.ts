// =============================================================================
// SINGLE SOURCE OF TRUTH, business data (NAP, categories, locations).
// Never hardcode phone/address/hours in components. Import from here.
// Keeping NAP identical everywhere is critical for local SEO.
//
// CATEGORY / URL STRUCTURE mirrors the original cashforgoldva.com taxonomy:
//   /jewelry, /precious-metals, /precious-stones, /coins, /watches + sub-pages.
// Electronics are intentionally excluded (owner no longer buys them).
// =============================================================================

// -----------------------------------------------------------------------------
// FEATURE FLAGS, toggle features without deleting code.
// SHOW_CALCULATOR: the /gold-calculator instant estimator. Hidden for launch.
// Flip to true to restore the page, its nav/footer/banner links, and sitemap
// entry. While false, the route redirects home so existing blog links don't 404.
// -----------------------------------------------------------------------------
export const SHOW_CALCULATOR = false;

export const SITE = {
  name: "Cash for Gold VA",
  legalName: "Cash for Gold VA",
  shortName: "CFG VA",
  tagline: "Northern Virginia's trusted gold, silver & diamond buyer, instant payout, fair prices.",
  domain: "https://cashforgoldva.com",
  email: "info@cashforgoldva.com",
  rating: { value: 4.9, count: 500 },
  priceRange: "$$",
  // Opens the Chantilly (14025 US-50) Google Maps place — reviews shown on the panel.
  reviewsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJ__8afoRGtokR1ebhblLGOkk",
  social: {
    facebook: "https://facebook.com/cashforgoldva",
    youtube: "https://youtube.com/@cashforgoldva",
    google: "https://g.page/cashforgoldva",
    yelp: "https://www.yelp.com/search?find_desc=Cash+for+Gold+VA",
  },
} as const;

export type Hours = { day: string; open: string; close: string | null };

// Per-location hours. Source of truth for OpenStatus, schema, and hours displays.
const CHANTILLY_HOURS: Hours[] = [
  { day: "Monday", open: "10:00", close: "19:00" },
  { day: "Tuesday", open: "10:00", close: "19:00" },
  { day: "Wednesday", open: "10:00", close: "19:00" },
  { day: "Thursday", open: "10:00", close: "19:00" },
  { day: "Friday", open: "10:00", close: "19:00" },
  { day: "Saturday", open: "10:00", close: "19:00" },
  { day: "Sunday", open: "12:00", close: "17:00" },
];

const ANNANDALE_HOURS: Hours[] = [
  { day: "Monday", open: "10:00", close: "18:00" },
  { day: "Tuesday", open: "10:00", close: "18:00" },
  { day: "Wednesday", open: "10:00", close: "18:00" },
  { day: "Thursday", open: "10:00", close: "18:00" },
  { day: "Friday", open: "10:00", close: "18:00" },
  { day: "Saturday", open: "10:00", close: "18:00" },
  { day: "Sunday", open: "12:00", close: "17:00" },
];

const MANASSAS_HOURS: Hours[] = [
  { day: "Monday", open: "09:00", close: "18:00" },
  { day: "Tuesday", open: "09:00", close: "18:00" },
  { day: "Wednesday", open: "09:00", close: "19:00" },
  { day: "Thursday", open: "09:00", close: "18:00" },
  { day: "Friday", open: "09:00", close: "18:00" },
  { day: "Saturday", open: "09:00", close: "18:00" },
  { day: "Sunday", open: "11:00", close: "16:00" },
];

const VIENNA_HOURS: Hours[] = [
  { day: "Monday", open: "10:00", close: "18:00" },
  { day: "Tuesday", open: "10:00", close: "18:00" },
  { day: "Wednesday", open: "10:00", close: "18:00" },
  { day: "Thursday", open: "10:00", close: "18:00" },
  { day: "Friday", open: "10:00", close: "18:00" },
  { day: "Saturday", open: "10:00", close: "18:00" },
  { day: "Sunday", open: "", close: null }, // Closed
];

export type Location = {
  slug: string;
  city: string;
  name: string;
  phone: string;
  phoneHref: string;
  street: string;
  region: string;
  postalCode: string;
  geo: { lat: number; lng: number };
  mapUrl: string;
  hours: Hours[];
  neighborhoods: string[];
  image: string;
  // Virginia Precious Metals Dealer Permit. Omit for stores whose number
  // hasn't been provided — render nothing permit-related when absent.
  // `issuer` intentionally omitted until confirmed; never invent one.
  permit?: { number: string; issuer?: string };
};

export const LOCATIONS: Location[] = [
  {
    slug: "chantilly",
    city: "Chantilly",
    name: "Cash for Gold VA, Chantilly",
    phone: "(571) 224-5279",
    phoneHref: "+15712245279",
    street: "14025 Lee Jackson Memorial Hwy",
    region: "VA",
    postalCode: "20151",
    geo: { lat: 38.8857, lng: -77.4214 },
    mapUrl: "https://maps.app.goo.gl/D5Zz1AfXzC98KSMs5",
    hours: CHANTILLY_HOURS,
    neighborhoods: ["Fairfax", "Herndon", "South Riding", "Centreville"],
    image: "/photos/storefront-chantilly.jpg",
    permit: { number: "PMG26-037" },
  },
  {
    slug: "annandale",
    city: "Annandale",
    name: "Cash for Gold VA, Annandale",
    phone: "(571) 290-8020",
    phoneHref: "+15712908020",
    street: "7262 Columbia Pike",
    region: "VA",
    postalCode: "22003",
    geo: { lat: 38.8304, lng: -77.1962 },
    mapUrl: "https://maps.app.goo.gl/rDZpb3hueHhVyUqU8",
    hours: ANNANDALE_HOURS,
    neighborhoods: ["Alexandria", "Falls Church", "Springfield", "Bailey's Crossroads", "Lincolnia"],
    image: "/photos/storefront-annandale.jpg",
    permit: { number: "PMG26-038" },
  },
  {
    slug: "manassas",
    city: "Manassas",
    name: "Cash for Gold VA, Manassas",
    phone: "(571) 359-0146",
    phoneHref: "+15713590146",
    street: "9013 Centreville Rd",
    region: "VA",
    postalCode: "20110",
    geo: { lat: 38.7651, lng: -77.4753 },
    mapUrl: "https://maps.app.goo.gl/pN7PUhTA3iiKUgYq6",
    hours: MANASSAS_HOURS,
    neighborhoods: ["Bristow", "Gainesville", "Centreville", "Woodbridge"],
    image: "/photos/storefront-manassas.jpg",
  },
  {
    slug: "vienna",
    city: "Vienna",
    name: "Cash for Gold VA, Vienna / McLean",
    phone: "(703) 889-0532",
    phoneHref: "+17038890532",
    street: "8453 Tyco Rd #C",
    region: "VA",
    postalCode: "22182",
    geo: { lat: 38.9187, lng: -77.2311 },
    mapUrl: "https://maps.app.goo.gl/E85G9QrAJLDVpsK29",
    hours: VIENNA_HOURS,
    neighborhoods: ["McLean", "Tysons", "Oakton", "Falls Church"],
    image: "/photos/storefront-vienna.jpg",
    permit: { number: "PMG26-036" },
  },
];

// Chantilly is the primary contact line shown in generic CTAs sitewide
// (hero, banners, CTA bands, header). Per-location pages use their own number.
export const PRIMARY_LOCATION = LOCATIONS.find((l) => l.slug === "chantilly") ?? LOCATIONS[0];
export const PRIMARY_PHONE = PRIMARY_LOCATION.phone;
export const PRIMARY_PHONE_HREF = PRIMARY_LOCATION.phoneHref;

// --- Category taxonomy (mirrors original site URLs) -------------------------

export type GalleryItem = { name: string; image: string; note: string; group?: string; href?: string; count?: number };

export type SubCategory = {
  slug: string;     // e.g. "sell-gold" → /precious-metals/sell-gold
  name: string;     // "Gold"
  action: string;   // "Sell Gold"
  short: string;
  intro: string;
  items: string[];
  keywords: string[];
  // Illustrative "types we buy" showcase (by type, not for sale). Optional -
  // pages render a product gallery only when present.
  gallery?: GalleryItem[];
  // Distinct representative image for subcategory cards. Optional - templates
  // fall back to the parent category image when not set.
  cardImage?: string;
  // ~1000-char SEO category description (expandable on the page). Optional -
  // falls back to a name-templated placeholder until real copy is written.
  longDescription?: string;
};

export type Category = {
  slug: string;     // "precious-metals" → /precious-metals
  name: string;     // "Precious Metals"
  nav: string;      // short nav label, "Metals"
  icon: string;     // lucide icon name
  image: string;
  short: string;
  intro: string;
  keywords: string[];
  // ~1000-char SEO category description (expandable on the page). Optional -
  // falls back to a name-templated placeholder until real copy is written.
  longDescription?: string;
  subcategories: SubCategory[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "jewelry",
    name: "Jewelry",
    nav: "Jewelry",
    icon: "Sparkles",
    image: "/categories/jewelry-ring.jpg",
    short: "Designer, estate, antique & scrap jewelry, valued for metal, stones & maker.",
    intro:
      "We buy fine and designer jewelry of every kind, from signed pieces by Tiffany, Cartier, and Van Cleef & Arpels to estate collections and broken scrap gold. Each item is valued for its precious metal, its stones, and its maker, so you get full worth, not just melt value.",
    keywords: ["sell jewelry near me", "jewelry buyer northern virginia", "sell designer jewelry", "sell estate jewelry"],
    longDescription:
      "When you sell jewelry in Northern Virginia, the piece in your hand is often worth far more than its gold weight alone, and that is exactly what we account for. We buy designer, estate, antique, and scrap jewelry across our four local stores, evaluating each piece on three things: its precious metal at the live spot price, any diamonds or gemstones, and the value of the maker or period. A signed Cartier or Tiffany piece, an inherited collection, or a drawer of broken chains each gets a careful, in-person appraisal from a trained buyer, with the offer explained out loud and tested in front of you. There is never any obligation to sell and never a fee to find out what your jewelry is worth. Whether you are downsizing, settling an estate, or simply clearing out unworn pieces, you get a fair, transparent, market-based offer and instant payout the same day. Bring a single ring or an entire jewelry box to any of our Annandale, Manassas, Chantilly, or Vienna/McLean locations and see why we are the jewelry buyer Northern Virginia families trust.",
    subcategories: [
      {
        slug: "sell-gold-jewelry",
        name: "Gold Jewelry",
        action: "Sell Gold Jewelry",
        short: "All karats, any condition — rings, chains, bracelets & more, tested on the spot.",
        intro:
          "We buy gold jewelry of every karat and from every corner of the world. Rings, necklaces, bracelets, earrings, and pendants, wearable or broken, are tested with an XRF analyzer for exact purity and paid against the live gold spot price.",
        items: ["Rings", "Necklaces & chains", "Bracelets", "Earrings", "Pendants & charms", "Wearable or broken"],
        keywords: ["sell gold jewelry", "gold jewelry buyer northern virginia", "sell gold rings", "cash for gold jewelry"],
        longDescription:
          "Gold jewelry is what we are best known for, and valuing it should be simple, fast, and completely transparent. We buy gold jewelry in every karat, 8K, 9K, 10K, 14K, 18K, 21K, 22K, and 24K, from every country, in any condition. Rings, necklaces, chains, bracelets, earrings, pendants, and charms are each tested with an XRF analyzer, the same technology refineries use, to confirm exact karat and purity, then weighed on a calibrated scale and priced against the live gold spot price. Every reading and every number is shown to you, explained out loud, with no pressure and no obligation. As a local business with four Northern Virginia stores, you keep your jewelry until you accept the offer and walk out paid the same visit. Bring your gold jewelry to our Annandale, Manassas, Chantilly, or Vienna/McLean location for a free, transparent appraisal.",
        cardImage: "/products/jewelry/necklace.jpg",
        gallery: [
          { name: "Gold Rings", image: "/products/jewelry/ring.jpg", note: "All karats, fine & designer" },
          { name: "Necklaces & Chains", image: "/products/jewelry/necklace.jpg", note: "Gold & gemstone" },
          { name: "Bracelets & Bangles", image: "/products/jewelry/bangles.jpg", note: "Gold & diamond" },
          { name: "Earrings", image: "/products/jewelry/earrings.jpg", note: "Studs, hoops & drops" },
        ],
      },
      {
        slug: "sell-silver-jewelry",
        name: "Silver Jewelry",
        action: "Sell Silver Jewelry",
        short: "Sterling .925 & above — rings, chains, bracelets & more, priced to the gram.",
        intro:
          "Most people have no idea what their silver jewelry is worth. We test every sterling piece in front of you, show you the purity, weight, and live spot price, and make you a fair offer, all for free.",
        items: ["Sterling rings", "Necklaces & chains", "Bracelets", "Earrings", "Pendants", "Marked .925 or tested"],
        keywords: ["sell silver jewelry", "silver jewelry buyer", "sell sterling silver jewelry", "cash for silver jewelry"],
        longDescription:
          "Silver jewelry is one of the most commonly undervalued things people own, because sterling moves with the market every day and few buyers price it honestly. We do. We buy sterling silver rings, necklaces, chains, bracelets, earrings, and pendants marked .925 or sterling, or we test them on site to confirm purity. Each piece is weighed on a calibrated scale and priced against the live silver spot price, with every step explained before you decide. There is no minimum, no fee to find out what you have, and no obligation to sell. Because we buy locally across four Northern Virginia stores, you keep your pieces until you accept and walk out paid the same visit. Bring your silver jewelry to our Annandale, Manassas, Chantilly, or Vienna/McLean location for a free, transparent appraisal.",
        cardImage: "/sell/silver-jewelry.webp",
      },
      {
        slug: "sell-your-scrap-gold-jewelry",
        name: "Scrap Gold Jewelry",
        action: "Sell Scrap Gold Jewelry",
        short: "Broken chains, single earrings, bent rings & dental gold, paid by weight & karat.",
        intro:
          "Don't throw away broken or mismatched gold. Scrap gold jewelry, tangled chains, single earrings, bent rings, clasps, and even dental gold, still holds real value based on its weight and karat purity. We test everything in front of you and pay the live spot price.",
        items: ["Broken & tangled chains", "Single or mismatched earrings", "Bent or damaged rings", "Clasps & charms", "Dental gold", "Class rings"],
        keywords: ["sell scrap gold", "scrap gold buyer", "sell broken gold jewelry", "cash for scrap gold"],
        longDescription:
          "Scrap gold is the easiest jewelry to undervalue and one of the most common things people throw away or sit on for years. It should not be. Broken chains, single earrings, bent or outdated rings, clasps, charms, class rings, and even dental gold all carry real value based on two numbers: their weight in grams and their karat purity. When you sell scrap gold to us, we sort it by karat, test each piece in front of you to confirm purity, and weigh it on a calibrated scale, then pay against the live gold spot price with no melting fees hidden in the math. There is no minimum, no need to clean or repair anything, and no obligation to sell once you see the offer. Tangled lots, mismatched pieces, and damaged jewelry are all welcome and valued the same transparent way. Bring your scrap gold to any of our four Northern Virginia stores for a free appraisal and instant payout.",
        cardImage: "/products/jewelry/chains.jpg",
        gallery: [
          { name: "Broken & Tangled Chains", image: "/products/jewelry/chains.jpg", note: "Any karat, paid by weight" },
          { name: "Old Gold Lots", image: "/products/jewelry/goldlot.jpg", note: "Mixed & unsorted gold" },
          { name: "Mismatched & Single Pieces", image: "/products/jewelry/mismatched.jpg", note: "Odd earrings & charms" },
          { name: "Worn or Damaged Jewelry", image: "/products/jewelry/damaged.jpg", note: "Bent, broken or scrap" },
        ],
      },
      {
        slug: "sell-your-estate-jewelry",
        name: "Estate Jewelry",
        action: "Sell Estate Jewelry",
        short: "Inherited & pre-owned fine jewelry valued for metal, stones and craftsmanship.",
        intro:
          "Estate jewelry, inherited or pre-owned fine pieces, often carries value far beyond its metal. Our trained buyers evaluate the gold or platinum, the diamonds and gemstones, and the craftsmanship to make you a fair, no-pressure offer on single pieces or entire collections.",
        items: ["Inherited fine jewelry", "Diamond & gemstone pieces", "Gold & platinum settings", "Designer & signed pieces", "Full estate collections"],
        keywords: ["sell estate jewelry", "estate jewelry buyer", "sell inherited jewelry", "where to sell estate jewelry"],
        longDescription:
          "Estate jewelry, inherited or pre-owned fine pieces, frequently holds value well beyond its metal, and selling it well means having every layer recognized. Our trained buyers appraise the gold or platinum at the live spot price, grade any diamonds and gemstones separately, and account for designer signatures and craftsmanship that the resale market rewards. Whether you are settling a loved one's estate, parting with pieces you no longer wear, or selling a full collection, you get an honest, no-pressure offer on single items or the whole lot. We encourage you to bring any original boxes, receipts, or certificates, since provenance can meaningfully raise the value. Nothing is tested out of your sight, and there is never a fee or obligation to sell. Selling estate jewelry locally also means you keep your pieces until you accept the offer, with instant payout the same visit, rather than mailing irreplaceable items away. Visit any of our Annandale, Manassas, Chantilly, or Vienna/McLean locations to meet an estate jewelry buyer who values every layer of your pieces.",
        cardImage: "/products/jewelry/ring.jpg",
        gallery: [
          { name: "Gold Rings", image: "/products/jewelry/ring.jpg", note: "Fine & designer rings" },
          { name: "Necklaces & Chains", image: "/products/jewelry/necklace.jpg", note: "Gold & gemstone" },
          { name: "Earrings", image: "/products/jewelry/earrings.jpg", note: "Studs, hoops & drops" },
          { name: "Bracelets & Bangles", image: "/products/jewelry/bangles.jpg", note: "Gold & diamond" },
          { name: "Brooches & Pins", image: "/products/jewelry/brooch.jpg", note: "Signed & fine pieces" },
        ],
      },
      {
        slug: "sell-your-antique-jewelry",
        name: "Antique Jewelry",
        action: "Sell Antique Jewelry",
        short: "Victorian, Art Deco & vintage pieces appraised by period and maker.",
        intro:
          "Antique and vintage jewelry, Victorian, Edwardian, Art Deco, and Retro pieces, is appraised for its period, craftsmanship, materials, and maker. We recognize the collectible premium these pieces command, not just their gold weight.",
        items: ["Victorian & Edwardian pieces", "Art Deco & Retro jewelry", "Antique engagement rings", "Vintage brooches & lockets", "Cameos & filigree"],
        keywords: ["sell antique jewelry", "antique jewelry buyer", "vintage jewelry buyer", "sell victorian jewelry"],
        longDescription:
          "Antique and vintage jewelry asks for an experienced eye, because its worth lives as much in period, maker, and craftsmanship as in its gold or stones. We appraise Victorian, Edwardian, Art Deco, and Retro pieces, antique engagement rings, brooches, lockets, cameos, and filigree on their full merits, recognizing the collectible premium genuine period pieces command rather than treating them as scrap. Before you sell antique jewelry, do not clean, polish, or repair it, since original condition and patina often matter to value. Bring any documentation you have, and let our buyer evaluate the era, materials, and signatures in front of you. Every offer is transparent and carries no obligation, and you keep the piece until you decide. If an item turns out to be worth more through specialized channels than its metal alone, we will tell you. For a fair, knowledgeable appraisal of vintage and antique pieces, visit any of our four Northern Virginia locations and walk out with instant payout if you choose to sell.",
        cardImage: "/products/jewelry/victorian.jpg",
        gallery: [
          { name: "Victorian & Mourning", image: "/products/jewelry/victorian.jpg", note: "1837-1901 era pieces" },
          { name: "Vintage Pearls", image: "/products/jewelry/pearls.jpg", note: "Natural & cultured" },
          { name: "Estate Collections", image: "/products/jewelry/estate-collection.jpg", note: "Full inherited sets" },
          { name: "Antique Jewelry Boxes", image: "/products/jewelry/box.jpg", note: "Whole collections welcome" },
        ],
      },
      {
        slug: "sell-designer-jewelry",
        name: "Name Brand Jewelry",
        action: "Sell Designer Jewelry",
        short: "Tiffany, Cartier & David Yurman valued for the brand, not just the metal.",
        intro:
          "Designer jewelry holds value well beyond its metal, and most buyers only pay you for the gold. We evaluate name brand pieces for what they actually are, with the brand, craftsmanship, and collector demand included. The evaluation is free, done on camera, in a secure environment.",
        items: ["Tiffany & Co.", "Cartier & Bulgari", "David Yurman", "Van Cleef & Arpels", "Other recognized brands", "Signed & hallmarked pieces"],
        keywords: ["sell designer jewelry", "sell tiffany jewelry", "sell cartier jewelry", "sell david yurman"],
        longDescription:
          "Designer jewelry is one of the most commonly undervalued things people sell, because the typical buyer weighs it like scrap and ignores the name on the piece. We do not. A signed Tiffany & Co., Cartier, David Yurman, Bulgari, or Van Cleef & Arpels piece carries worth in its brand, design, and craftsmanship on top of its gold or platinum and any diamonds or gemstones, and we evaluate all of it. Our buyers verify the maker's marks and hallmarks, assess the metal at the live spot price, grade the stones separately, and then add the brand premium that the resale market genuinely pays, with the whole calculation explained in front of you, on camera, in a secure setting. There is no fee to find out what your designer jewelry is worth and no obligation to sell once you see the number. Original boxes, pouches, and receipts help and can raise the offer, so bring whatever you kept. Because we buy locally across four Northern Virginia stores, your piece stays with you until you accept, with payment before you leave. Bring your Tiffany, Cartier, or other signed jewelry to our Annandale, Manassas, Chantilly, or Vienna/McLean location for a free, knowledgeable appraisal.",
        gallery: [
          { name: "Tiffany & Co.", image: "/products/jewelry/tiffany.webp", note: "Signed sterling & gold" },
          { name: "Cartier", image: "/products/jewelry/cartier.webp", note: "Love, Trinity & more" },
          { name: "David Yurman", image: "/products/jewelry/yurman.webp", note: "Cable & gemstone pieces" },
          { name: "Van Cleef & Arpels", image: "/products/jewelry/vca.webp", note: "Alhambra & signed" },
          { name: "Bulgari", image: "/products/jewelry/bulgari.webp", note: "B.zero1, Serpenti & more" },
          { name: "Other Signed Brands", image: "/products/jewelry/signed.webp", note: "Recognized makers" },
        ],
      },
    ],
  },
  {
    slug: "precious-metals",
    name: "Precious Metals",
    nav: "Metals",
    icon: "Coins",
    image: "/categories/precious-metals-v2.jpg",
    short: "Gold, silver, platinum & palladium, bullion, scrap & jewelry at live spot.",
    intro:
      "We buy all four precious metals, gold, silver, platinum, and palladium, in every form: jewelry, bullion, bars, rounds, scrap, and industrial. Every item is tested for purity and weighed in front of you, then paid against the current market spot price.",
    keywords: ["sell precious metals", "gold buyer near me", "sell bullion northern virginia", "precious metals buyer"],
    longDescription:
      "When you sell precious metals, the only number that should matter is the live market price, and that is the foundation of every offer we make. We buy gold, silver, platinum, and palladium in every form, jewelry, bars, rounds, bullion, scrap, coins, and industrial, testing each item for purity and weighing it on a calibrated scale right in front of you. Your payout is then calculated against the current spot price for that metal, with the math shown openly and no lowball gimmicks. There is no minimum quantity, no fee to get an appraisal, and no obligation to sell. Because we operate four storefronts across Northern Virginia rather than a mail-in service, you keep your metal until you accept the offer and walk out paid the same day. Whether you are selling a single gold ring, a box of sterling flatware, or a stack of bullion bars, you get a fast, transparent, market-based offer. Bring your gold, silver, platinum, or palladium to any of our Annandale, Manassas, Chantilly, or Vienna/McLean locations.",
    subcategories: [
      {
        slug: "sell-gold",
        name: "Gold",
        action: "Sell Gold",
        cardImage: "/products/gold/pamp.jpg",
        short: "10K–24K jewelry, scrap, bullion & coins paid by live spot price.",
        intro:
          "We buy gold in every form, 10K to 24K jewelry, scrap and broken pieces, dental gold, bars, and bullion. Every item is tested in front of you and paid against the live gold spot price, with no lowball gimmicks. On recognized gold bullion bars and rounds we typically pay 85-90% of the live spot price.",
        items: ["Gold jewelry (10K–24K)", "Scrap & broken gold", "Gold bullion & bars", "Dental gold", "Gold coins", "Class rings & chains"],
        keywords: ["sell gold near me", "cash for gold", "sell gold jewelry", "gold buyer northern virginia"],
        longDescription:
          "Gold is what we are known for, and selling yours should be simple, fast, and completely transparent. We buy gold in every form, 10K to 24K jewelry, scrap and broken pieces, dental gold, bullion bars, and coins, and we value all of it the same honest way: the live gold spot price, converted to a per-gram figure, multiplied by your item's karat purity and weight. Each piece is tested and weighed in front of you, and the offer is explained out loud before you decide. There is no obligation, no fee, and no pressure, only a fair, market-based number and instant payout if you accept. Knowing your karat and weight helps you ballpark the range before you ever walk in. As a local business with four Northern Virginia storefronts, we let you keep your gold until you agree to the price, unlike mail-in buyers who quote you only after your gold is gone. For cash for gold you can trust, visit our Annandale, Manassas, Chantilly, or Vienna/McLean location for a free appraisal.",
        gallery: [
          { name: "PAMP Suisse Bar", image: "/products/gold/pamp.jpg", note: ".9999 fine" },
          { name: "Credit Suisse Bar", image: "/products/gold/creditsuisse.jpg", note: ".9999 fine" },
          { name: "Valcambi Bar", image: "/products/gold/valcambi.jpg", note: ".9999 fine" },
          { name: "Perth Mint Bar", image: "/products/gold/perthbar.jpg", note: ".9999 fine" },
          { name: "1 oz Gold Bars", image: "/products/gold/bar1oz.jpg", note: "Any mint or brand" },
          { name: "10 oz & Kilo Bars", image: "/products/gold/bar10oz.jpg", note: "Any mint or brand" },
        ],
      },
      {
        slug: "sell-silver",
        name: "Silver",
        action: "Sell Silver",
        cardImage: "/products/silver/bar1oz.jpg",
        short: "Sterling, flatware, bars, rounds & pre-1965 coins at competitive rates.",
        intro:
          "From sterling flatware and jewelry to silver bullion, rounds, and pre-1965 US coins, we pay fair, transparent prices based on weight, purity, and the current silver spot price. On .999 silver bullion bars and rounds the offer typically runs 85-90% of the live spot price.",
        items: ["Sterling silver jewelry", "Silver bullion & bars", "Silver rounds", "Silverware & flatware", "Pre-1965 US coins"],
        keywords: ["sell silver near me", "silver buyer", "sell sterling silver", "cash for silver"],
        longDescription:
          "Silver adds up faster than most people expect, and we make selling it straightforward. We buy sterling silver jewelry and flatware, silver bullion bars and rounds, and pre-1965 US 90% silver coins, paying a fair, transparent price based on weight, purity, and the live silver spot price. Sterling is stamped .925, and we test and weigh every item in front of you so you can see exactly how the offer is reached. There is no minimum, no appraisal fee, and no obligation to sell, whether you bring a single tea set, a drawer of flatware, or a box of bullion and junk silver. Because silver trades at a lower price per ounce than gold, quantity matters, and we welcome large lots as readily as single pieces. As a local silver buyer with four Northern Virginia stores, we pay instant payout the same visit and let you keep your silver until you accept. Bring your sterling, bullion, or coins to our Annandale, Manassas, Chantilly, or Vienna/McLean location for a free, no-pressure appraisal.",
        gallery: [
          { name: "1 oz Silver Bar", image: "/products/silver/bar1oz.jpg", note: "Any mint or brand" },
          { name: "5 oz Silver Bar", image: "/products/silver/bar5oz.jpg", note: "Any mint or brand" },
          { name: "10 oz Silver Bar", image: "/products/silver/bar10oz.jpg", note: "Any mint or brand" },
          { name: "100 oz Silver Bar", image: "/products/silver/bar100oz.jpg", note: "Any mint or brand" },
          { name: "Kilo Silver Bar", image: "/products/silver/barkilo.jpg", note: "1 kg · .999" },
        ],
      },
      {
        slug: "sell-platinum",
        name: "Platinum",
        action: "Sell Platinum",
        cardImage: "/products/platinum/eagle.jpg",
        short: "Platinum jewelry, bars & bullion valued on purity and live spot.",
        intro:
          "Platinum is rarer and denser than gold, and we pay accordingly. Bring platinum jewelry, wedding bands, bars, and bullion, we verify the purity and weigh it in front of you for a fair, market-based offer.",
        items: ["Platinum jewelry", "Platinum wedding bands", "Platinum bullion & bars", "Platinum settings", "Industrial platinum"],
        keywords: ["sell platinum", "platinum buyer near me", "sell platinum jewelry", "cash for platinum"],
        longDescription:
          "Platinum is rarer and denser than gold, and a fair buyer pays accordingly. We purchase platinum jewelry, wedding bands, settings, bars, bullion, and coins, verifying the purity, commonly stamped 950 or .9995, and weighing each piece in front of you before making a market-based offer. Because platinum is so dense, even a modest band can carry meaningful value, and your payout is calculated against the live platinum spot price with the math shown openly. There is no fee to find out what your platinum is worth and no obligation to sell once you see the number. Many people do not realize a white-metal ring is platinum rather than white gold, and the difference matters; we identify it correctly so you are paid for what you actually have. As a local business with four Northern Virginia storefronts, we pay instant payout the same day and let you keep your items until you accept. Whether you sell platinum jewelry or bullion, bring it to our Annandale, Manassas, Chantilly, or Vienna/McLean location for a free, transparent appraisal.",
        gallery: [
          { group: "Platinum Coins", name: "American Platinum Eagle", image: "/products/platinum/eagle.jpg", note: "US Mint · .9995" },
          { group: "Platinum Coins", name: "Canadian Platinum Maple Leaf", image: "/products/platinum/maple.jpg", note: "RCM · .9995" },
          { group: "Platinum Coins", name: "Austrian Platinum Philharmonic", image: "/products/platinum/philharmonic.jpg", note: ".9995 fine" },
          { group: "Platinum Coins", name: "Australian Platinum Kangaroo", image: "/products/platinum/australian.jpg", note: "Perth Mint · .9995" },
          { group: "Platinum Bars", name: "PAMP Platinum Bar", image: "/products/platinum/pamp.jpg", note: ".9995 fine" },
          { group: "Platinum Bars", name: "10 oz Platinum Bar", image: "/products/platinum/bar10oz.jpg", note: "Any mint or brand" },
          { group: "Platinum Bars", name: "Platinum Bars", image: "/products/platinum/bars.jpg", note: "Any size or brand" },
        ],
      },
      {
        slug: "sell-your-palladium",
        name: "Palladium",
        action: "Sell Palladium",
        cardImage: "/products/palladium/eagle.jpg",
        short: "Palladium bullion, jewelry & coins, one of the most valuable metals.",
        intro:
          "Palladium has become one of the most valuable precious metals. We buy palladium bullion, bars, coins, and jewelry, paying a transparent price based on weight, purity, and the live palladium market.",
        items: ["Palladium bullion & bars", "Palladium coins", "Palladium jewelry", "Industrial palladium"],
        keywords: ["sell palladium", "palladium buyer", "cash for palladium", "where to sell palladium"],
        longDescription:
          "Palladium has quietly become one of the most valuable precious metals, and many sellers do not realize how much theirs is worth. We buy palladium bullion, bars, rounds, coins such as the American and Canadian Palladium Eagle and Maple Leaf, and the occasional piece of palladium jewelry, paying a transparent price based on weight, purity, and the live palladium market. Every item is verified and weighed in front of you, and the offer is explained before you decide, with no fee and no obligation. Palladium is often confused with platinum or white gold, so correct identification matters, and our buyers test to be sure you are paid for the right metal. Because palladium prices can move sharply, we base offers on the current spot price the day you visit. As a local palladium buyer with four Northern Virginia stores, we pay instant payout and let you keep your metal until you accept the offer. Bring your palladium to our Annandale, Manassas, Chantilly, or Vienna/McLean location for a free appraisal.",
        gallery: [
          { group: "Palladium Coins", name: "American Palladium Eagle", image: "/products/palladium/eagle.jpg", note: "US Mint · .9995" },
          { group: "Palladium Coins", name: "Canadian Palladium Maple Leaf", image: "/products/palladium/maple.jpg", note: "RCM · .9995" },
          { group: "Palladium Bars", name: "Credit Suisse Palladium Bar", image: "/products/palladium/creditsuisse.jpg", note: ".9995 fine" },
          { group: "Palladium Bars", name: "Palladium Bars", image: "/products/palladium/bars.jpg", note: "Any size or brand" },
          { group: "Palladium Bars", name: "Palladium Rounds", image: "/products/palladium/round.jpg", note: ".999 fine" },
        ],
      },
      {
        slug: "sell-sterling-silver-sets",
        name: "Sterling Silver Sets",
        action: "Sell Sterling Silver",
        cardImage: "/products/silver/flatware.webp",
        short: "Flatware, tea sets & serving pieces, weighed and paid on real silver content.",
        intro:
          "That silver set in your cabinet is worth real money, and we will prove it. Sterling silver flatware, tea sets, and serving pieces are priced by weight and silver content, and with silver where it is today, you may be sitting on more than you think. We weigh everything in front of you, on camera, in a secure setting.",
        items: ["Sterling flatware sets", "Tea & coffee services", "Candlesticks & trays", "Serving pieces & hollowware", "Marked .925 or sterling", "Weighted & hollow pieces accepted"],
        keywords: ["sell sterling silver flatware", "sell silver tea set", "silverware buyer near me", "sell sterling silver set"],
        longDescription:
          "Inherited silverware you never use, or a flatware set that has sat in the cabinet for years, is one of the most overlooked things people own, and sterling silver is priced by weight and silver content rather than sentiment. We buy sterling flatware sets, serving pieces, tea and coffee services, candlesticks, trays, and hollowware, all marked .925 or sterling, weighing every piece on a calibrated scale in front of you and paying against the live silver spot price. Some pieces are weighted or hollow, with non-silver material adding heft, and we account for that honestly so you are paid for the silver you actually have and never misled. There is no minimum, no need to polish anything, and no obligation to sell once you see the number. Because silver trades well below gold per ounce, a full set adds up faster than people expect, and large lots are welcome as readily as a single tray. As a local buyer with four Northern Virginia storefronts, we pay before you leave and let you keep your set until you accept. Bring your sterling flatware or tea service to our Annandale, Manassas, Chantilly, or Vienna/McLean location for a free, transparent appraisal.",
        gallery: [
          { name: "Sterling Flatware Sets", image: "/products/silver/flatware.webp", note: "Forks, spoons & knives" },
          { name: "Tea & Coffee Services", image: "/products/silver/teaset.webp", note: ".925 & sterling" },
          { name: "Candlesticks", image: "/products/silver/candlesticks.webp", note: "Weighted pieces accepted" },
          { name: "Trays & Serving Pieces", image: "/products/silver/tray.webp", note: "Hollowware welcome" },
          { name: "Serving Sets", image: "/products/silver/serving.webp", note: "Marked sterling" },
        ],
      },
      {
        slug: "sell-dental-gold",
        name: "Dental Gold",
        action: "Sell Dental Gold",
        short: "Gold crowns, bridges & fillings tested for real gold content and paid by weight.",
        intro:
          "That old crown in your drawer is worth more than you think. Gold dental crowns, bridges, and fillings are made from real gold alloys and carry real value. Most people throw them away without knowing. Bring them in, we test them for gold content, weigh them, and pay you on the spot, on camera, in a secure setting.",
        items: ["Gold crowns & caps", "Gold bridges", "Gold fillings", "Inlays & onlays", "Mixed dental alloy scrap", "Attached to tooth is fine"],
        keywords: ["sell dental gold", "dental gold buyer", "sell gold crown", "cash for dental gold"],
        longDescription:
          "Gold dental work is one of the most commonly discarded sources of real value, because few people realize a crown or bridge is made from a genuine gold alloy worth money. We test dental gold for its actual gold content with an XRF analyzer, weigh it on a calibrated scale, and pay against the live gold spot price, all in front of you and explained out loud. Crowns, caps, bridges, fillings, inlays, onlays, and mixed dental scrap are all welcome, and you do not need to remove any attached tooth material first, since we account for it when we calculate the offer. Dental alloys vary in purity, so composition affects the payout, and we show you exactly how we reach the number rather than quoting a vague flat rate. There is no minimum, no fee to find out what you have, and no obligation to sell. Because we buy locally across four Northern Virginia stores, you keep your items until you accept and walk out paid the same visit. Bring your dental gold to our Annandale, Manassas, Chantilly, or Vienna/McLean location for a free, transparent test and appraisal.",
        cardImage: "/sell/dental-gold.webp",
      },
      {
        slug: "sell-gold-filled-plated",
        name: "Gold Filled / Plated",
        action: "Check Gold Filled or Plated",
        short: "Know the difference, gold filled has real value, plated usually does not.",
        intro:
          "Not everything that looks like gold is the same. Gold filled items have a real layer of gold bonded to a base metal and do carry value. Gold plated items have only a microscopic coating, usually too thin to buy. Not sure what you have? Bring it in. We test it for free, on camera, and tell you exactly what it is.",
        items: ["Gold filled marked GF", "Marked 1/20 14K or 1/10 10K", "Gold filled chains & cases", "Plated items: usually cannot buy", "Free identification either way"],
        keywords: ["sell gold filled jewelry", "gold filled vs plated", "is gold plated worth money", "sell gold filled"],
        longDescription:
          "Gold filled and gold plated are easy to confuse, and the difference decides whether an item is worth selling. Gold filled pieces have a real, legally specified layer of gold mechanically bonded to a base metal, often marked GF, 1/20 14K, or 1/10 10K, and that layer carries enough gold to be worth evaluating case by case. Gold plated items, by contrast, have only a microscopically thin electroplated coating, typically far too little gold to purchase, which is why most buyers, including us, generally cannot pay for them. Rather than leave you guessing, we test your items for free, on camera, in a secure setting, identify exactly what you have, and explain honestly what we can or cannot offer and why. When gold filled material is present in enough quantity, we assess it on its gold content and weight and make a fair offer; when an item is only plated, we tell you plainly so you do not waste a trip elsewhere. There is never a fee or any obligation. Bring anything marked GF or anything you are unsure about to our Annandale, Manassas, Chantilly, or Vienna/McLean location and we will tell you what it really is.",
        cardImage: "/sell/gold-filled-plated.webp",
      },
    ],
  },
  {
    slug: "precious-stones",
    name: "Precious Stones",
    nav: "Diamonds",
    icon: "Gem",
    image: "/categories/diamonds.jpg",
    short: "Certified diamonds 1.5ct and above, GIA, IGI, AGS or HRD graded, paid at serious prices.",
    intro:
      "We buy certified diamonds that meet our standards, and we pay serious prices for them. If you have a loose diamond of 1.5 carats or above with a GIA, IGI, AGS, HRD, or equivalent internationally recognized certificate, bring it in for a fair, no-pressure evaluation. Not sure whether your stone qualifies? Call us first and we will tell you in 60 seconds.",
    keywords: ["sell certified diamonds", "diamond buyer northern virginia", "sell GIA diamond", "sell loose diamonds"],
    longDescription:
      "Selling a diamond rewards a careful, certificate-based appraisal, and as a diamond buyer serving Northern Virginia we focus on the stones where we can pay you the most: loose certified diamonds of 1.5 carats and above. If your stone carries a GIA, IGI, AGS, HRD, or equivalent internationally recognized grading report, our buyers evaluate it on the 4Cs exactly as the certificate states, cut, color, clarity, and carat, then cross-reference the current diamond market to make a serious, transparent offer. That certificate is what lets us pay competitively rather than the cautious numbers uncertified stones force. To be clear about what we buy, we do not purchase diamonds under 1.5 carats, uncertified stones, or lab-grown diamonds. If your diamond is still in its setting we can help there too, since we also buy diamond and gemstone jewelry along with the gold or platinum mounting at its live metal value. Not sure whether your stone qualifies? Get in touch before you visit and we will tell you in about a minute. Every evaluation is free, explained in plain terms, and carries no obligation, and because we buy in person you keep your diamond until you accept, with instant payout before you leave rather than mailing a valuable stone away. Prefer to sell other valuables the same day? We also buy gold and precious metals, coins, and luxury watches at transparent, live-market prices. Bring your certified diamond to any of our four Northern Virginia locations, or find your nearest store, for a fair, expert offer.",
    subcategories: [
      {
        slug: "sell-diamonds",
        name: "Diamonds",
        action: "Sell Diamonds",
        short: "Certified loose diamonds 1.5ct and above, GIA, IGI, AGS or HRD, graded on the 4Cs.",
        intro:
          "We buy loose certified diamonds of 1.5 carats and above, graded by GIA, IGI, AGS, HRD, or an equivalent internationally recognized lab. We evaluate the stone on the 4Cs as the certificate states, cross-reference the current market, and make a serious offer. We do not buy diamonds under 1.5 carats, uncertified stones, or lab-grown diamonds. Not sure if yours qualifies? Call us and we will tell you in 60 seconds.",
        items: ["Loose certified diamonds 1.5ct+", "GIA, IGI, AGS or HRD graded", "Round, princess & oval cuts", "Emerald, cushion & fancy cuts", "Bring the original certificate"],
        keywords: ["sell certified diamonds", "sell GIA diamond", "diamond buyer northern virginia", "sell loose diamonds"],
        longDescription:
          "A diamond's value comes down to the 4Cs, cut, color, clarity, and carat, and the cleanest way for us to pay you a serious price is to start from an independent grading report. As a certified diamond buyer in Northern Virginia, we buy loose diamonds of 1.5 carats and above graded by GIA, IGI, AGS, HRD, or an equivalent internationally recognized lab, evaluating the stone exactly as the certificate states and cross-referencing the live diamond market before we make an offer. That report is what lets us pay competitively instead of the cautious, lower numbers uncertified stones force. So there is no wasted trip, here is what we do not buy: diamonds under 1.5 carats, uncertified stones, lab-grown diamonds, and stones with certificates from labs we do not recognize. If your diamond is still mounted, we also buy diamond engagement rings and fine jewelry, paying for the center stone plus the gold or platinum setting at its live metal value. Not sure whether your stone qualifies? Get in touch before you come in and we will tell you in about a minute. Every evaluation is free, explained in plain terms, and carries no obligation, and because we buy in person you keep your diamond until you accept, with instant payout before you leave rather than mailing a valuable stone away. Bring your certified diamond and its report to any of our four Northern Virginia locations, or find your nearest store, for a fair, expert offer, and if you also have coins or luxury watches to sell, we will appraise those the same visit.",
        gallery: [
          { name: "Round Brilliant", image: "/products/diamonds/round.webp", note: "Certified 1.5ct & above" },
          { name: "Princess Cut", image: "/products/diamonds/princess.webp", note: "Certified 1.5ct & above" },
          { name: "Oval Cut", image: "/products/diamonds/oval.webp", note: "Certified 1.5ct & above" },
          { name: "Emerald Cut", image: "/products/diamonds/emerald.webp", note: "Certified 1.5ct & above" },
          { name: "Cushion & Fancy Cuts", image: "/products/diamonds/cushion.webp", note: "Certified 1.5ct & above" },
          { name: "GIA, IGI, AGS & HRD", image: "/products/diamonds/certified.jpg", note: "Recognized labs only" },
        ],
      },
    ],
  },
  {
    slug: "coins",
    name: "Coins",
    nav: "Coins",
    icon: "CircleDollarSign",
    image: "/categories/gold-coins.jpg",
    short: "Collectible, antique, gold & silver coins, and full collections.",
    intro:
      "We buy collectible and bullion coins of every kind, US gold and silver, Morgan and Peace dollars, foreign gold, graded slabs, and entire inherited collections. Numismatic value is recognized here, not just melt weight.",
    keywords: ["sell coins near me", "coin buyer northern virginia", "sell coin collection", "numismatic coin buyer"],
    longDescription:
      "Selling coins is different from selling scrap metal, because a coin can be worth its precious-metal content, a numismatic premium for rarity and condition, or both, and a good buyer pays whichever is higher. We buy US and foreign gold and silver coins, Morgan and Peace dollars, American Eagles, pre-1933 US gold, graded slabs, and entire inherited collections, evaluating each for melt value at the live spot price and for collectible worth based on date, mint mark, and grade. Bring coins exactly as they are; do not clean them, since cleaning can erase numismatic value, and leave graded coins in their holders. Every appraisal is free and carries no obligation, and bullion offers are tied openly to the current market. Whether you have a single Gold Eagle, a bag of junk silver, or a collection built over decades, you get a careful, honest evaluation and instant payout the same day. Bring your coins or full collection to any of our four Northern Virginia locations for a free, expert appraisal from the coin buyer Northern Virginia collectors trust.",
    subcategories: [
      {
        slug: "sell-gold-coins",
        name: "Gold Coins",
        action: "Sell Gold Coins",
        cardImage: "/coins/age/age-001.jpg",
        short: "Typically 85-90% of spot for standard bullion coins, plus numismatic premium on rare dates.",
        intro:
          "We typically pay 85-90% of the live gold spot price for standard bullion gold coins, American Gold Eagles and Buffalos, Krugerrands, Maple Leafs, and more, and we show you exactly how we got there. Have a rare or key-date coin? We know numismatics too, and collector demand can push your offer above melt value.",
        items: ["American Gold Eagles & Buffalos", "Krugerrands & Maple Leafs", "Pre-1933 US gold coins", "Foreign gold coins", "Graded gold slabs"],
        keywords: ["sell gold coins", "gold coin buyer", "sell gold eagles", "where to sell gold coins"],
        longDescription:
          "Gold coins are among the easiest items to sell at a fair price, because the popular ones are standardized, recognized, and quick to verify. We buy American Gold Eagles and Buffalos, South African Krugerrands, Canadian Maple Leafs, British Britannias, pre-1933 US gold, and foreign gold coins, valuing each on its gold content at the live spot price plus any collectible premium. Standard bullion coins are paid close to their melt value because they resell easily, while proof, graded, or key-date coins can be worth more, so mention or bring any certificates and original packaging. Every coin is verified and the offer explained in front of you, with no fee and no obligation to sell. As a local buyer with four Northern Virginia storefronts, we pay instant payout the same day and let you keep your coins until you accept. For the simplest way to sell gold coins, visit our Annandale, Manassas, Chantilly, or Vienna/McLean location for a free appraisal.",
        gallery: [
          { name: "All Gold Coins", image: "/coins/all-gold-coins.jpg", note: "Every gold coin we buy", href: "/coins/sell-gold-coins/all-gold-coins", count: 920 },
          { name: "American Gold Eagle", image: "/coins/age/age-001.jpg", note: "US Mint · 22K", href: "/coins/sell-gold-coins/american-gold-eagle", count: 327 },
          { name: "American Gold Buffalo", image: "/coins/buffalo/buf-005.jpg", note: "US Mint · .9999", href: "/coins/sell-gold-coins/american-gold-buffalo", count: 57 },
          { name: "Canadian Gold Coins", image: "/coins/canadian/cad-033.jpg", note: "Maple Leafs & more · RCM", href: "/coins/sell-gold-coins/canadian-gold-coins", count: 96 },
          { name: "British Gold Coins", image: "/coins/british/brit-010.jpg", note: "Britannias & Sovereigns · Royal Mint", href: "/coins/sell-gold-coins/british-gold-coins", count: 79 },
          { name: "Gold Krugerrands", image: "/coins/krugerrand/krug-007.jpg", note: "South African Mint · 22K", href: "/coins/sell-gold-coins/gold-krugerrands", count: 42 },
          { name: "Pre-33 US Gold Coins", image: "/coins/pre33/pre33-012.jpg", note: "Liberty, Indian & Saint-Gaudens", href: "/coins/sell-gold-coins/pre-33-us-gold-coins", count: 200 },
          { name: "Chinese Gold Panda", image: "/coins/panda/panda-041.jpg", note: "People's Bank of China · .999", href: "/coins/sell-gold-coins/chinese-gold-pandas", count: 46 },
          { name: "Mexican Gold Coins", image: "/coins/mexican/mex-001.jpg", note: "Libertads & Pesos · Mexican Mint", href: "/coins/sell-gold-coins/mexican-gold-coins", count: 31 },
          { name: "European Gold Coins", image: "/coins/european/euro-012.jpg", note: "Sovereigns, Francs, Coronas & Ducats", href: "/coins/sell-gold-coins/european-gold-coins", count: 36 },
        ],
      },
      {
        slug: "sell-silver-coins",
        name: "Silver Coins",
        action: "Sell Silver Coins",
        cardImage: "/coins/british-silver/british-silver-007.jpg",
        short: "Morgan & Peace dollars, Silver Eagles & pre-1965 US silver.",
        intro:
          "From Morgan and Peace dollars to American Silver Eagles and pre-1965 90% silver coins, we buy silver coins by the piece or the bag, paying for both their silver content and any numismatic value.",
        items: ["Morgan & Peace dollars", "American Silver Eagles", "Pre-1965 US silver (90%)", "Silver half dollars & quarters", "Junk silver bags"],
        keywords: ["sell silver coins", "silver coin buyer", "sell morgan dollars", "sell silver eagles"],
        longDescription:
          "Silver coins range from modern bullion to 19th-century classics, and we buy across the whole spectrum, by the single coin or the full bag. American Silver Eagles, Morgan and Peace dollars, pre-1965 US 90% silver, half dollars, quarters, and foreign silver are all valued for their silver content at the live spot price and for any numismatic premium their date, mint mark, or condition carries. Junk silver bags are weighed and paid on their silver content, while key dates and better-grade pieces are evaluated individually so collectible value is not overlooked. Do not clean your coins before selling, since cleaning can reduce numismatic worth, and leave any graded coins in their holders. Every appraisal is free, transparent, and without obligation. Because silver is priced per ounce well below gold, quantity matters, and we welcome large lots as readily as a single dollar. Whether you sell silver coins by the piece or the bag, visit any of our four Northern Virginia locations for a fair evaluation and instant payout the same visit.",
        gallery: [
          { name: "All Silver Coins", image: "/coins/all-silver-coins.jpg", note: "Every silver coin we buy", href: "/coins/sell-silver-coins/all-silver-coins", count: 832 },
          { name: "American Silver Eagle", image: "/coins/silver-eagle/silver-eagle-002.jpg", note: "US Mint · .999", href: "/coins/sell-silver-coins/american-silver-eagle", count: 190 },
          { name: "Silver Dollars", image: "/coins/silver-dollar/silver-dollar-019.jpg", note: "Morgan & Peace · 90% silver", href: "/coins/sell-silver-coins/silver-dollars", count: 159 },
          { name: "Canadian Silver Coins", image: "/coins/canadian-silver/canadian-silver-007.jpg", note: "Maple Leafs & more · RCM", href: "/coins/sell-silver-coins/canadian-silver-coins", count: 80 },
          { name: "British Silver Coins", image: "/coins/british-silver/british-silver-011.jpg", note: "Britannias & Royal Arms · Royal Mint", href: "/coins/sell-silver-coins/british-silver-coins", count: 38 },
          { name: "90% Junk Silver", image: "/coins/junk-silver/junk-silver-027.jpg", note: "Pre-1965 US · 90/40/35%", href: "/coins/sell-silver-coins/junk-silver", count: 56 },
          { name: "Mexican Silver Libertads", image: "/coins/mexican-silver-libertad/mexican-silver-libertad-005.jpg", note: "Banco de México · .999", href: "/coins/sell-silver-coins/mexican-silver-libertads", count: 70 },
          { name: "Australian Silver Coins", image: "/coins/australian-silver/australian-silver-007.jpg", note: "Kookaburras & Kangaroos · Perth Mint", href: "/coins/sell-silver-coins/australian-silver-coins", count: 155 },
          { name: "Chinese Silver Panda", image: "/coins/chinese-silver-panda/chinese-silver-panda-001.jpg", note: "China Mint · .999", href: "/coins/sell-silver-coins/chinese-silver-pandas", count: 8 },
          { name: "Silver Krugerrand", image: "/coins/silver-krugerrand/silver-krugerrand-005.jpg", note: "South African Mint · .999", href: "/coins/sell-silver-coins/silver-krugerrands", count: 12 },
          { name: "America the Beautiful 5 oz", image: "/coins/atb-silver/atb-silver-021.jpg", note: "US Mint · 5 oz .999", href: "/coins/sell-silver-coins/america-the-beautiful", count: 62 },
        ],
      },
      {
        slug: "sell-collectible-coins",
        name: "Collectible Coins",
        action: "Sell Collectible Coins",
        cardImage: "/coins/silver-dollar/silver-dollar-019.jpg",
        short: "Numismatic & graded coins valued for rarity, grade & demand.",
        intro:
          "Collectible coins are worth far more than their metal when rarity and condition align. We evaluate key dates, mint marks, and graded slabs (PCGS/NGC) to pay a fair numismatic price for individual coins or whole collections.",
        items: ["Key-date US coins", "PCGS / NGC graded slabs", "Proof & mint sets", "Error & variety coins", "Complete collections"],
        keywords: ["sell collectible coins", "numismatic coin buyer", "sell graded coins", "sell coin collection"],
        longDescription:
          "Collectible coins can be worth many times their metal value when rarity and condition align, and capturing that premium takes a numismatic eye rather than a scale. We evaluate key-date US coins, mint-mark varieties, proof and mint sets, error coins, and PCGS or NGC graded slabs, pricing each on the factors collectors actually pay for: date, mintage, grade, and demand. Leave graded coins sealed in their holders and do not clean raw coins, since cleaning can sharply reduce numismatic value. Whether you have a single key date, a binder built over decades, or an inherited collection you are unsure about, we appraise it carefully and explain how each piece is valued, with no fee and no obligation to sell. If a coin is worth more than its melt, we pay for that, not just the metal. Inherited collections are welcome in full. Bring your collectible or graded coins to any of our four Northern Virginia locations for an honest appraisal from a numismatic coin buyer, and instant payout if you choose to sell.",
        gallery: [
          { name: "Morgan & Peace Dollars", image: "/products/coins/morgan.jpg", note: "Key dates & CC mint marks" },
          { name: "Graded / Slabbed Coins", image: "/products/coins/slab.jpg", note: "PCGS & NGC certified" },
          { name: "Classic US Type Coins", image: "/products/coins/classic-us.jpg", note: "Walking Liberty, Barber & more" },
          { name: "Key-Date & Rare Coins", image: "/products/coins/rare.jpg", note: "Scarce dates & varieties" },
          { name: "Collections & Albums", image: "/products/coins/collection.jpg", note: "Whole sets & estates" },
        ],
      },
      {
        slug: "sell-antique-coins",
        name: "Antique Coins",
        action: "Sell Antique Coins",
        cardImage: "/coins/mexican/mex-024.jpg",
        short: "Ancient, colonial & early world coins appraised by an expert eye.",
        intro:
          "Antique coins, ancient, colonial, and early world issues, require an expert eye. We appraise their age, origin, metal, and condition to make you an honest offer on pieces that often carry significant historical value.",
        items: ["Ancient & medieval coins", "Colonial & early US coins", "Early world & foreign coins", "Historic commemoratives"],
        keywords: ["sell antique coins", "antique coin buyer", "sell old coins", "where to sell ancient coins"],
        longDescription:
          "Antique coins, ancient Greek, Roman, and Byzantine issues, colonial and early US coppers and silver, gold sovereigns, and early world coinage, demand an experienced eye, and we appraise them on age, origin, metal, rarity, and condition rather than weight alone. These pieces often carry historical and collector value well beyond their gold or silver, and an offer based only on melt would shortchange you. Bring your old coins exactly as they are; cleaning an antique coin can destroy much of its value, so leave the patina and any holders intact, and include any provenance or attribution you have. Every appraisal is free, carries no obligation, and is explained in plain terms so you understand what you have. Whether it is a single inherited piece or a box of old foreign and early American coins, our buyers take the time to identify and value each correctly. For a knowledgeable antique coin buyer who appraises historic pieces with care, visit any of our four Northern Virginia locations and walk out with instant payout if you decide to sell.",
        gallery: [
          { name: "Pre-1933 US Gold", image: "/products/coins/pre33.jpg", note: "Liberty & Saint-Gaudens" },
          { name: "Gold Sovereigns & Crowns", image: "/products/coins/sovereign.jpg", note: "Victorian-era European gold" },
          { name: "Ancient Coins", image: "/products/coins/ancient.jpg", note: "Greek, Roman & Byzantine" },
          { name: "Colonial & Early US", image: "/products/coins/colonial.jpg", note: "Large cents & early issues" },
          { name: "1800s US Silver", image: "/products/coins/silver-1800s.jpg", note: "Seated Liberty & Bust coins" },
          { name: "Antique World Coins", image: "/products/coins/world.jpg", note: "British, European & beyond" },
        ],
      },
    ],
  },
  {
    slug: "watches",
    name: "Watches",
    nav: "Watches",
    icon: "Watch",
    image: "/categories/watches-rolex.webp",
    short: "Rolex, Omega, Cartier & other luxury watches, researched and paid at real market value.",
    intro:
      "Luxury watches are not like gold, you cannot just weigh them. We know the watch market and research current secondary-market prices before we make an offer on your Rolex, Omega, Cartier, or other fine timepiece. The evaluation is free, done on camera, with no pressure.",
    keywords: ["sell luxury watch near me", "watch buyer northern virginia", "sell my rolex", "where to sell a watch"],
    longDescription:
      "Selling a luxury watch is nothing like selling scrap metal, because its value has almost nothing to do with weight and everything to do with the market. A Rolex, Omega, Cartier, Breitling, Patek Philippe, or Audemars Piguet is worth what collectors and dealers are paying for that exact brand, model, and reference today, adjusted for condition, service history, and whether you still have the original box and papers. We do this every day, so we research the current secondary-market price before we make an offer rather than guessing or lowballing. Every watch is examined and discussed in front of you, on camera, in a secure environment, and the offer is explained in plain terms with no fee and no obligation to sell. Box, papers, and service records all add value, so bring whatever you have. Because we buy locally across four Northern Virginia storefronts, your watch stays with you until you accept, and you walk out paid the same visit rather than mailing a valuable timepiece away on faith. Bring your Rolex or other fine watch to our Annandale, Manassas, Chantilly, or Vienna/McLean location for a free, knowledgeable appraisal.",
    subcategories: [
      {
        slug: "sell-rolex",
        name: "Rolex",
        action: "Sell My Rolex",
        short: "Submariner, Datejust, Daytona & every reference, priced at real market value.",
        intro:
          "We buy Rolex watches of every model and reference, Submariner, Datejust, Daytona, GMT-Master, Day-Date, and more. We research the current market for your exact reference before we make an offer, on camera, with no pressure. Box and papers increase the value.",
        items: ["Submariner & Sea-Dweller", "Datejust & Day-Date", "Daytona & GMT-Master", "Oyster Perpetual & Explorer", "Vintage & discontinued references", "Box, papers & service records"],
        keywords: ["sell my rolex", "rolex buyer near me", "sell rolex watch", "where to sell a rolex"],
        cardImage: "/categories/watches-rolex.webp",
        longDescription:
          "Rolex holds its value better than almost any watch on the market, and a fair offer starts with knowing exactly what you have. We buy every Rolex model and reference, the Submariner, Datejust, Daytona, GMT-Master, Day-Date, Oyster Perpetual, Explorer, and vintage or discontinued pieces, and we price each one on its specific reference number, condition, and current secondary-market demand rather than a flat melt figure. The Daytona and steel sports models in particular can command strong premiums, so correct identification matters and we take the time to get it right in front of you. Original box, papers, and service records all raise the offer, so bring whatever you kept. Every evaluation is free, done on camera in a secure setting, and explained out loud with no obligation to sell. Because we are a local buyer with four Northern Virginia storefronts, your Rolex stays in your hands until you accept, and you are paid the same visit rather than shipping it off and waiting. To sell your Rolex to a buyer who knows the market, visit our Annandale, Manassas, Chantilly, or Vienna/McLean location for a free appraisal.",
        gallery: [
          { name: "Submariner", image: "/products/watches/submariner.webp", note: "All references & dial variants" },
          { name: "Datejust", image: "/products/watches/datejust.webp", note: "Steel, two-tone & gold" },
          { name: "Daytona", image: "/products/watches/daytona.webp", note: "Steel & precious metal" },
          { name: "GMT-Master II", image: "/products/watches/gmt.webp", note: "Pepsi, Batman & more" },
          { name: "Day-Date President", image: "/products/watches/daydate.webp", note: "18K gold & platinum" },
          { name: "Oyster Perpetual", image: "/products/watches/oyster.webp", note: "Classic & discontinued" },
        ],
      },
      {
        slug: "sell-luxury-watches",
        name: "Luxury Watches",
        action: "Sell Luxury Watches",
        short: "Omega, Cartier, Patek, AP, Breitling & TAG Heuer, researched before we offer.",
        intro:
          "Beyond Rolex, we buy Omega, Cartier, Patek Philippe, Audemars Piguet, Breitling, TAG Heuer, and other recognized luxury brands. We research the current secondary-market price for your exact model before we make an offer, on camera, with no pressure.",
        items: ["Omega Speedmaster & Seamaster", "Cartier Tank & Santos", "Patek Philippe & Audemars Piguet", "Breitling & TAG Heuer", "Box, papers & service records", "Vintage & discontinued models"],
        keywords: ["sell luxury watch", "sell omega watch", "sell cartier watch", "watch buyer northern virginia"],
        cardImage: "/categories/watches-luxury.webp",
        longDescription:
          "A luxury watch from Omega, Cartier, Patek Philippe, Audemars Piguet, Breitling, or TAG Heuer carries value that a scale can never capture, and selling it well means having someone who actually follows the market. We evaluate each watch on its brand, model, reference, condition, and service history, then check current secondary-market prices before making an offer, so the number reflects what your piece is genuinely worth today. An Omega Speedmaster, a Cartier Tank, or a Patek complication each trade on their own demand, and we price them individually rather than lumping everything together. Original box, papers, and service records add real value, so bring whatever you have kept over the years. Every appraisal is free, done on camera in a secure environment, and explained clearly with no pressure and no obligation. As a local buyer with four Northern Virginia storefronts, we let you keep your watch until you accept the offer and pay you the same visit, rather than asking you to mail a valuable timepiece away. Bring your Omega, Cartier, or other fine watch to our Annandale, Manassas, Chantilly, or Vienna/McLean location for a free, expert appraisal.",
        gallery: [
          { name: "Omega Speedmaster", image: "/products/watches/speedmaster.webp", note: "Moonwatch & variants" },
          { name: "Omega Seamaster", image: "/products/watches/seamaster.webp", note: "Diver & Aqua Terra" },
          { name: "Cartier Tank & Santos", image: "/products/watches/cartier.webp", note: "Steel & gold" },
          { name: "Patek Philippe", image: "/products/watches/patek.webp", note: "Calatrava, Nautilus & more" },
          { name: "Audemars Piguet", image: "/products/watches/ap.webp", note: "Royal Oak & references" },
          { name: "Breitling & TAG Heuer", image: "/products/watches/breitling.webp", note: "Sport & chronograph" },
        ],
      },
    ],
  },
];

export const VALUE_PROPS = [
  { icon: "BadgeDollarSign", title: "Best Value", desc: "Live spot-price offers tested in front of you, consistently higher than mall kiosks and mail-in services." },
  { icon: "PackageOpen", title: "We Accept Many Items", desc: "Gold, silver, platinum, diamonds, designer jewelry, and collectible coins, all under one roof." },
  { icon: "Banknote", title: "Instant Payout", desc: "Walk out paid the same visit. No waiting, no checks in the mail, no surprises." },
  { icon: "ShieldCheck", title: "Professional & Simple", desc: "A transparent, no-pressure appraisal from trained buyers. Honest pricing without gimmicks." },
] as const;

export const PROCESS_STEPS = [
  { n: 1, title: "Bring In What You Have", desc: "No need to sort, clean, or research anything. Bring your jewelry, coins, watches, and flatware, even the pieces you are unsure about. We have seen it all." },
  { n: 2, title: "We Sort & Group It", desc: "We go through every item with you, one by one. Gold grouped by karat, coins by type, watches evaluated on their own. Nothing left guessed at." },
  { n: 3, title: "Tested on the Spot", desc: "Each piece goes through our XRF analyzer, the same technology refineries use, to find its exact metal content. You watch every test, on camera." },
  { n: 4, title: "We Calculate Your Offer", desc: "Every item goes into our system and is priced against the live spot price for gold, silver, platinum, or palladium. You see every line and number." },
  { n: 5, title: "You Review & Sign", desc: "We print a full itemized receipt with every item and price listed. You review it and you sign. No surprises." },
  { n: 6, title: "You Get Paid", desc: "We pay you by check on the spot, drawn on a local bank so you can cash it the same day. No waiting, no checks in the mail." },
] as const;

export type ReviewSource = "google" | "yelp" | "facebook";
export type Testimonial = { name: string; avatar: string; rating: number; text: string; source: ReviewSource };

// Real 5-star Google reviews for the Chantilly store (14025 US-50). Pulled
// verbatim from the live Google Business Profile — do NOT edit the wording.
// `avatar` = the reviewer's Google profile photo, vendored under /public/reviews/.
export const TESTIMONIALS: Testimonial[] = [
  { name: "Greg Forbes", avatar: "/reviews/greg-forbes.webp", rating: 5, source: "google", text: "I got almost 50% more here than offered by a jeweler in Herndon (they know who they are; there's only 1 in downtown Herndon). Ethan was courteous, prompt, and efficient. 5 stars for the shop and 5 stars for the service." },
  { name: "Mike Schlesiger", avatar: "/reviews/mike-schlesiger.webp", rating: 5, source: "google", text: "The first place to go if you have old jewelry and want to sell gold or silver. Absolutely knowledgeable advice, very, very friendly. Fair prices and very straightforward. Highly recommended without reservation." },
  { name: "Alex Wilkinson", avatar: "/reviews/alex-wilkinson.webp", rating: 5, source: "google", text: "I had a great experience here. I met with Sam. He was super helpful. They buy gold and silver, including Morgan Silver Dollars. I will definitely visit again. 10/10." },
  { name: "Jamal Reed", avatar: "/reviews/jamal-reed.webp", rating: 5, source: "google", text: "This place blows all the other places out of the water. Fair prices and buy Tiffany sets! Sam was extremely helpful and knowledgeable! This is the 2nd time I have been here and it keeps getting better." },
  { name: "Jeanette Snook", avatar: "/reviews/jeanette-snook.webp", rating: 5, source: "google", text: "Mr. Sam provided excellent customer service with my transaction, honest, removed stones for me before selling rings for the weight of the gold. Would definitely come back!" },
  { name: "Suzanne Eways", avatar: "/reviews/suzanne-eways.webp", rating: 5, source: "google", text: "Great experience. Mr. Sam was very patient, reliable and accommodating. We were given an extremely fair price and educated us about the process. We are repeat customers and would come back anytime. We recommend this establishment to anyone." },
  { name: "Sean Donovan", avatar: "/reviews/sean-donovan.webp", rating: 5, source: "google", text: "I had a great experience working with Sam selling my gold from Thailand and received a great offer well over my first quote." },
  { name: "Bejan Djavadi", avatar: "/reviews/bejan-djavadi.webp", rating: 5, source: "google", text: "Sam was amazingly helpful and the transaction was painless. They buy silver bullion coins." },
  { name: "Renee Vitale", avatar: "/reviews/renee-vitale.webp", rating: 5, source: "google", text: "From start to finish our experience with Ethan at Cash For Gold in Chantilly was exceptional. Ethan's kind, calm and patient demeanor will make us repeat customers." },
  { name: "Tammy Johnson", avatar: "/reviews/tammy-johnson.webp", rating: 5, source: "google", text: "It was a flawless and easy transaction. Ethan was personable, polite and professional. I would recommend this business to anyone!" },
];

// Helpers --------------------------------------------------------------------

export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);

export const getSubcategory = (categorySlug: string, subSlug: string) =>
  getCategory(categorySlug)?.subcategories.find((s) => s.slug === subSlug);

export const getLocation = (slug: string) => LOCATIONS.find((l) => l.slug === slug);

/** Flat list of every subcategory with its parent, for nav, sitemap, static params. */
export const ALL_SUBCATEGORIES = CATEGORIES.flatMap((c) =>
  c.subcategories.map((s) => ({ category: c, sub: s })),
);
