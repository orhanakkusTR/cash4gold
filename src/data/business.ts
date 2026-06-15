// =============================================================================
// SINGLE SOURCE OF TRUTH, business data (NAP, categories, locations).
// Never hardcode phone/address/hours in components. Import from here.
// Keeping NAP identical everywhere is critical for local SEO.
//
// CATEGORY / URL STRUCTURE mirrors the original cashforgoldva.com taxonomy:
//   /jewelry, /precious-metals, /precious-stones, /coins  + their sub-pages.
// Watches & electronics are intentionally excluded (owner no longer buys them).
// =============================================================================

export const SITE = {
  name: "Cash for Gold VA",
  legalName: "Cash for Gold VA",
  shortName: "CFG VA",
  tagline: "Northern Virginia's trusted gold, silver & diamond buyer, instant cash, fair prices.",
  domain: "https://cashforgoldva.com",
  email: "info@cashforgoldva.com",
  rating: { value: 4.9, count: 342 },
  priceRange: "$$",
  // Elfsight Google Reviews widget id (renders live Google reviews client-side)
  elfsightReviewsAppId: "elfsight-app-c6841a77-1f47-4a9f-9259-0109f0f6fbdd",
  social: {
    facebook: "https://facebook.com/cashforgoldva",
    youtube: "https://youtube.com/@cashforgoldva",
    google: "https://g.page/cashforgoldva",
  },
} as const;

export type Hours = { day: string; open: string; close: string | null };

const STANDARD_HOURS: Hours[] = [
  { day: "Monday", open: "10:00", close: "18:00" },
  { day: "Tuesday", open: "10:00", close: "18:00" },
  { day: "Wednesday", open: "10:00", close: "18:00" },
  { day: "Thursday", open: "10:00", close: "18:00" },
  { day: "Friday", open: "10:00", close: "18:00" },
  { day: "Saturday", open: "10:00", close: "17:00" },
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
};

export const LOCATIONS: Location[] = [
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
    mapUrl: "https://maps.google.com/?q=7262+Columbia+Pike+Annandale+VA",
    hours: STANDARD_HOURS,
    neighborhoods: ["Falls Church", "Springfield", "Bailey's Crossroads", "Lincolnia"],
    image: "/photos/storefront-annandale.jpg",
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
    mapUrl: "https://maps.google.com/?q=9013+Centreville+Rd+Manassas+VA",
    hours: STANDARD_HOURS,
    neighborhoods: ["Bristow", "Gainesville", "Centreville", "Woodbridge"],
    image: "/photos/storefront-manassas.jpg",
  },
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
    mapUrl: "https://maps.google.com/?q=14025+Lee+Jackson+Memorial+Hwy+Chantilly+VA",
    hours: STANDARD_HOURS,
    neighborhoods: ["Fairfax", "Herndon", "South Riding", "Centreville"],
    image: "/photos/storefront-chantilly.jpg",
  },
  {
    slug: "vienna",
    city: "Vienna",
    name: "Cash for Gold VA, Vienna / McLean",
    phone: "(703) 889-0532",
    phoneHref: "+17038890532",
    street: "8453 Tyco Rd",
    region: "VA",
    postalCode: "22182",
    geo: { lat: 38.9187, lng: -77.2311 },
    mapUrl: "https://maps.google.com/?q=8453+Tyco+Rd+Vienna+VA",
    hours: STANDARD_HOURS,
    neighborhoods: ["McLean", "Tysons", "Oakton", "Falls Church"],
    image: "/photos/storefront-vienna.jpg",
  },
];

// Chantilly is the primary contact line shown in generic CTAs sitewide
// (hero, banners, CTA bands, header). Per-location pages use their own number.
const PRIMARY_LOCATION = LOCATIONS.find((l) => l.slug === "chantilly") ?? LOCATIONS[0];
export const PRIMARY_PHONE = PRIMARY_LOCATION.phone;
export const PRIMARY_PHONE_HREF = PRIMARY_LOCATION.phoneHref;

// --- Category taxonomy (mirrors original site URLs) -------------------------

export type GalleryItem = { name: string; image: string; note: string; group?: string };

export type SubCategory = {
  slug: string;     // e.g. "sell-gold" → /precious-metals/sell-gold
  name: string;     // "Gold"
  action: string;   // "Sell Gold"
  short: string;
  intro: string;
  items: string[];
  keywords: string[];
  // Illustrative "types we buy" showcase (by type, not for sale). Optional —
  // pages render a product gallery only when present.
  gallery?: GalleryItem[];
  // Distinct representative image for subcategory cards. Optional — templates
  // fall back to the parent category image when not set.
  cardImage?: string;
  // ~1000-char SEO category description (expandable on the page). Optional —
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
  // ~1000-char SEO category description (expandable on the page). Optional —
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
    subcategories: [
      {
        slug: "sell-your-scrap-gold-jewelry",
        name: "Scrap Gold Jewelry",
        action: "Sell Scrap Gold Jewelry",
        short: "Broken chains, single earrings, bent rings & dental gold, paid by weight & karat.",
        intro:
          "Don't throw away broken or mismatched gold. Scrap gold jewelry, tangled chains, single earrings, bent rings, clasps, and even dental gold, still holds real value based on its weight and karat purity. We test everything in front of you and pay the live spot price.",
        items: ["Broken & tangled chains", "Single or mismatched earrings", "Bent or damaged rings", "Clasps & charms", "Dental gold", "Class rings"],
        keywords: ["sell scrap gold", "scrap gold buyer", "sell broken gold jewelry", "cash for scrap gold"],
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
        cardImage: "/products/jewelry/victorian.jpg",
        gallery: [
          { name: "Victorian & Mourning", image: "/products/jewelry/victorian.jpg", note: "1837-1901 era pieces" },
          { name: "Vintage Pearls", image: "/products/jewelry/pearls.jpg", note: "Natural & cultured" },
          { name: "Estate Collections", image: "/products/jewelry/estate-collection.jpg", note: "Full inherited sets" },
          { name: "Antique Jewelry Boxes", image: "/products/jewelry/box.jpg", note: "Whole collections welcome" },
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
    subcategories: [
      {
        slug: "sell-gold",
        name: "Gold",
        action: "Sell Gold",
        short: "10K–24K jewelry, scrap, bullion & coins paid by live spot price.",
        intro:
          "We buy gold in every form, 10K to 24K jewelry, scrap and broken pieces, dental gold, bars, and bullion. Every item is tested in front of you and paid against the live gold spot price, with no lowball gimmicks.",
        items: ["Gold jewelry (10K–24K)", "Scrap & broken gold", "Gold bullion & bars", "Dental gold", "Gold coins", "Class rings & chains"],
        keywords: ["sell gold near me", "cash for gold", "sell gold jewelry", "gold buyer northern virginia"],
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
        short: "Sterling, flatware, bars, rounds & pre-1965 coins at competitive rates.",
        intro:
          "From sterling flatware and jewelry to silver bullion, rounds, and pre-1965 US coins, we pay fair, transparent prices based on weight, purity, and the current silver spot price.",
        items: ["Sterling silver jewelry", "Silver bullion & bars", "Silver rounds", "Silverware & flatware", "Pre-1965 US coins"],
        keywords: ["sell silver near me", "silver buyer", "sell sterling silver", "cash for silver"],
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
        short: "Platinum jewelry, bars & bullion valued on purity and live spot.",
        intro:
          "Platinum is rarer and denser than gold, and we pay accordingly. Bring platinum jewelry, wedding bands, bars, and bullion, we verify the purity and weigh it in front of you for a fair, market-based offer.",
        items: ["Platinum jewelry", "Platinum wedding bands", "Platinum bullion & bars", "Platinum settings", "Industrial platinum"],
        keywords: ["sell platinum", "platinum buyer near me", "sell platinum jewelry", "cash for platinum"],
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
        short: "Palladium bullion, jewelry & coins, one of the most valuable metals.",
        intro:
          "Palladium has become one of the most valuable precious metals. We buy palladium bullion, bars, coins, and jewelry, paying a transparent price based on weight, purity, and the live palladium market.",
        items: ["Palladium bullion & bars", "Palladium coins", "Palladium jewelry", "Industrial palladium"],
        keywords: ["sell palladium", "palladium buyer", "cash for palladium", "where to sell palladium"],
        gallery: [
          { group: "Palladium Coins", name: "American Palladium Eagle", image: "/products/palladium/eagle.jpg", note: "US Mint · .9995" },
          { group: "Palladium Coins", name: "Canadian Palladium Maple Leaf", image: "/products/palladium/maple.jpg", note: "RCM · .9995" },
          { group: "Palladium Bars", name: "Credit Suisse Palladium Bar", image: "/products/palladium/creditsuisse.jpg", note: ".9995 fine" },
          { group: "Palladium Bars", name: "Palladium Bars", image: "/products/palladium/bars.jpg", note: "Any size or brand" },
          { group: "Palladium Bars", name: "Palladium Rounds", image: "/products/palladium/round.jpg", note: ".999 fine" },
        ],
      },
    ],
  },
  {
    slug: "precious-stones",
    name: "Precious Stones",
    nav: "Diamonds",
    icon: "Gem",
    image: "/categories/diamonds.jpg",
    short: "Diamonds & gemstones, loose or set, certified or not, graded fairly.",
    intro:
      "Our GIA-trained buyers evaluate diamonds and precious gemstones on their true merits. Loose or mounted, certified or not, you get an honest, no-pressure offer based on a careful, in-person grading.",
    keywords: ["sell diamonds near me", "diamond buyer northern virginia", "sell gemstones", "sell loose diamonds"],
    subcategories: [
      {
        slug: "sell-diamonds",
        name: "Diamonds",
        action: "Sell Diamonds",
        short: "Loose & set, certified or not, graded on the 4 Cs.",
        intro:
          "Our GIA-trained buyers evaluate loose and mounted diamonds on the 4 Cs, cut, color, clarity, and carat. Certified or not, you get a fair, no-pressure offer on the spot, whether it's a single stone, an engagement ring, or a full piece of diamond jewelry.",
        items: ["Loose diamonds", "Certified diamonds (GIA/EGL)", "Engagement & wedding rings", "Diamond jewelry", "Estate diamonds"],
        keywords: ["sell diamonds near me", "diamond buyer", "sell engagement ring", "sell diamond jewelry"],
        gallery: [
          { name: "Loose Diamonds", image: "/products/diamonds/loose.jpg", note: "Any cut, color or clarity" },
          { name: "Engagement Rings", image: "/products/diamonds/ring.jpg", note: "Solitaires & halos" },
          { name: "Diamond Earrings", image: "/products/diamonds/earrings.jpg", note: "Studs & drops" },
          { name: "Tennis Bracelets", image: "/products/diamonds/bracelet.jpg", note: "Lines & bangles" },
          { name: "Diamond Necklaces", image: "/products/diamonds/necklace.jpg", note: "Pendants & tennis" },
          { name: "Certified & Graded", image: "/products/diamonds/certified.jpg", note: "GIA, EGL & uncertified" },
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
    subcategories: [
      {
        slug: "sell-gold-coins",
        name: "Gold Coins",
        action: "Sell Gold Coins",
        short: "US & foreign gold coins, Eagles, Krugerrands & graded slabs.",
        intro:
          "We buy gold coins of all kinds, American Gold Eagles and Buffalos, Krugerrands, Maple Leafs, pre-1933 US gold, and foreign gold coins. Bullion or numismatic, we pay a fair price based on gold content and collectible premium.",
        items: ["American Gold Eagles & Buffalos", "Krugerrands & Maple Leafs", "Pre-1933 US gold coins", "Foreign gold coins", "Graded gold slabs"],
        keywords: ["sell gold coins", "gold coin buyer", "sell gold eagles", "where to sell gold coins"],
        gallery: [
          { name: "American Gold Eagle", image: "/products/gold/eagle.jpg", note: "US Mint · 22K" },
          { name: "American Gold Buffalo", image: "/products/gold/buffalo.jpg", note: "US Mint · .9999" },
          { name: "Canadian Maple Leaf", image: "/products/gold/maple.jpg", note: "RCM · .9999" },
          { name: "South African Krugerrand", image: "/products/gold/krugerrand.jpg", note: "22K" },
          { name: "British Britannia", image: "/products/gold/britannia.jpg", note: "Royal Mint · .9999" },
          { name: "Austrian Philharmonic", image: "/products/gold/philharmonic.jpg", note: ".9999 fine" },
          { name: "Australian Kangaroo", image: "/products/gold/kangaroo.jpg", note: "Perth Mint · .9999" },
          { name: "Chinese Gold Panda", image: "/products/gold/panda.jpg", note: ".999 fine" },
          { name: "Mexican Gold Libertad", image: "/products/gold/libertad.jpg", note: ".999 fine" },
          { name: "European Gold Coins", image: "/products/gold/sovereign.jpg", note: "Sovereigns, Coronas & Ducats" },
          { name: "Pre-1933 US Gold", image: "/products/gold/pre33.jpg", note: "Liberty & Saint-Gaudens" },
        ],
      },
      {
        slug: "sell-silver-coins",
        name: "Silver Coins",
        action: "Sell Silver Coins",
        short: "Morgan & Peace dollars, Silver Eagles & pre-1965 US silver.",
        intro:
          "From Morgan and Peace dollars to American Silver Eagles and pre-1965 90% silver coins, we buy silver coins by the piece or the bag, paying for both their silver content and any numismatic value.",
        items: ["Morgan & Peace dollars", "American Silver Eagles", "Pre-1965 US silver (90%)", "Silver half dollars & quarters", "Junk silver bags"],
        keywords: ["sell silver coins", "silver coin buyer", "sell morgan dollars", "sell silver eagles"],
        gallery: [
          { name: "American Silver Eagle", image: "/products/silver/ase.jpg", note: "US Mint · .999" },
          { name: "Canadian Maple Leaf", image: "/products/silver/maple.jpg", note: "RCM · .9999" },
          { name: "Morgan & Peace Dollars", image: "/products/silver/morgan.jpg", note: "90% silver" },
          { name: "90% Junk Silver", image: "/products/silver/junk90.jpg", note: "Pre-1965 US coins" },
          { name: "British Britannia", image: "/products/silver/britannia.jpg", note: "Royal Mint · .999" },
          { name: "Austrian Philharmonic", image: "/products/silver/philharmonic.jpg", note: ".999 fine" },
          { name: "Mexican Libertad", image: "/products/silver/libertad.jpg", note: ".999 fine" },
          { name: "Australian Kookaburra", image: "/products/silver/kookaburra.jpg", note: "Perth Mint · .9999" },
          { name: "Chinese Silver Panda", image: "/products/silver/panda.jpg", note: ".999 fine" },
          { name: "Silver Krugerrand", image: "/products/silver/krugerrand.jpg", note: ".999 fine" },
          { name: "America the Beautiful 5 oz", image: "/products/silver/atb.jpg", note: ".999 fine" },
        ],
      },
      {
        slug: "sell-collectible-coins",
        name: "Collectible Coins",
        action: "Sell Collectible Coins",
        short: "Numismatic & graded coins valued for rarity, grade & demand.",
        intro:
          "Collectible coins are worth far more than their metal when rarity and condition align. We evaluate key dates, mint marks, and graded slabs (PCGS/NGC) to pay a fair numismatic price for individual coins or whole collections.",
        items: ["Key-date US coins", "PCGS / NGC graded slabs", "Proof & mint sets", "Error & variety coins", "Complete collections"],
        keywords: ["sell collectible coins", "numismatic coin buyer", "sell graded coins", "sell coin collection"],
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
        short: "Ancient, colonial & early world coins appraised by an expert eye.",
        intro:
          "Antique coins, ancient, colonial, and early world issues, require an expert eye. We appraise their age, origin, metal, and condition to make you an honest offer on pieces that often carry significant historical value.",
        items: ["Ancient & medieval coins", "Colonial & early US coins", "Early world & foreign coins", "Historic commemoratives"],
        keywords: ["sell antique coins", "antique coin buyer", "sell old coins", "where to sell ancient coins"],
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
];

export const VALUE_PROPS = [
  { icon: "BadgeDollarSign", title: "Best Value", desc: "Live spot-price offers tested in front of you, consistently higher than mall kiosks and mail-in services." },
  { icon: "PackageOpen", title: "We Accept Many Items", desc: "Gold, silver, platinum, diamonds, designer jewelry, and collectible coins, all under one roof." },
  { icon: "Banknote", title: "Instant Cash Payment", desc: "Walk out with cash in hand the same visit. No waiting, no checks in the mail, no surprises." },
  { icon: "ShieldCheck", title: "Professional & Simple", desc: "A transparent, no-pressure appraisal from trained buyers. Honest pricing without gimmicks." },
] as const;

export const PROCESS_STEPS = [
  { n: 1, title: "Bring Your Items", desc: "Stop by any of our four Northern Virginia locations, no appointment needed." },
  { n: 2, title: "Free Appraisal", desc: "We test and evaluate your items in front of you using professional equipment." },
  { n: 3, title: "Transparent Offer", desc: "Get a fair, market-based price with a clear explanation, zero obligation." },
  { n: 4, title: "Instant Cash", desc: "Accept the offer and walk out with cash in hand the same day." },
] as const;

export type Testimonial = { name: string; location: string; rating: number; text: string };

export const TESTIMONIALS: Testimonial[] = [
  { name: "Maria S.", location: "Annandale, VA", rating: 5, text: "Got way more for my old gold jewelry than the mall place offered. They tested everything in front of me and explained the price. Cash in hand in 15 minutes." },
  { name: "James R.", location: "Vienna, VA", rating: 5, text: "Sold a gold bracelet and some diamond earrings I inherited. Fair offer, no pressure, and they knew exactly what they were looking at. Highly recommend over the online buyers." },
  { name: "Priya K.", location: "Chantilly, VA", rating: 5, text: "Professional and honest. Brought in a mix of silver coins and broken jewelry and left happy. Will definitely come back." },
  { name: "Daniel M.", location: "Manassas, VA", rating: 5, text: "Quick, easy, and transparent. They paid spot price on my gold and silver coins. Great local business." },
  { name: "Aisha T.", location: "McLean, VA", rating: 5, text: "I shopped around three places before coming here, best offer by far on my diamond ring. Friendly and not pushy at all." },
  { name: "Robert L.", location: "Fairfax, VA", rating: 5, text: "Brought in my late father's coin collection. They took the time to go through every piece and paid more than I expected." },
  { name: "Elena V.", location: "Centreville, VA", rating: 5, text: "Sold a few gold chains and an old class ring. Clean store, professional staff, and instant cash. Couldn't be easier." },
  { name: "Marcus B.", location: "Herndon, VA", rating: 5, text: "Honest appraisal and fair pricing on my silver bullion. They explained the spot price and how they calculated the offer." },
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
