import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHero, CtaBand } from "@/components/page-parts";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CoinListingGrid, type CoinItem } from "@/components/coin-listing-grid";
import { AMERICAN_GOLD_EAGLES } from "@/data/american-gold-eagle";
import { AMERICAN_GOLD_BUFFALOS } from "@/data/american-gold-buffalo";
import { CANADIAN_GOLD_COINS } from "@/data/canadian-gold-coins";
import { BRITISH_GOLD_COINS } from "@/data/british-gold-coins";
import { GOLD_KRUGERRANDS } from "@/data/gold-krugerrands";
import { PRE33_US_GOLD_COINS } from "@/data/pre33-us-gold-coins";
import { CHINESE_GOLD_PANDAS } from "@/data/chinese-gold-pandas";
import { MEXICAN_GOLD_COINS } from "@/data/mexican-gold-coins";
import { EUROPEAN_GOLD_COINS } from "@/data/european-gold-coins";
import { ALL_GOLD_COINS } from "@/data/all-gold-coins";
import { ALL_SILVER_COINS } from "@/data/all-silver-coins";
import { AMERICAN_SILVER_EAGLES } from "@/data/american-silver-eagle";
import { CANADIAN_SILVER_COINS } from "@/data/canadian-silver-coins";
import { BRITISH_SILVER_COINS } from "@/data/british-silver-coins";
import { AUSTRALIAN_SILVER_COINS } from "@/data/australian-silver-coins";
import { SILVER_DOLLARS } from "@/data/silver-dollars";
import { CHINESE_SILVER_PANDAS } from "@/data/chinese-silver-pandas";
import { JUNK_SILVER } from "@/data/junk-silver";
import { MEXICAN_SILVER_LIBERTADS } from "@/data/mexican-silver-libertads";
import { SILVER_KRUGERRANDS } from "@/data/silver-krugerrands";
import { ATB_SILVER_COINS } from "@/data/atb-silver-coins";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";
import { getSubcategory } from "@/data/business";

// Third-level "item" pages: a specific coin type under a subcategory, e.g.
// /coins/sell-gold-coins/american-gold-eagle. Only the keys registered below
// exist; every other three-segment path 404s (dynamicParams = false).
type ItemPage = {
  crumb: string;
  eyebrow: string;
  label: string; // used in the "Showing X of N {label} products" line
  title: ReactNode;
  description: string;
  metaTitle: string;
  metaDescription: string;
  coins: CoinItem[];
  // Optional coin-specific depth (Wave 3). Pages without these render as before.
  sections?: { heading: string; paras: string[] }[]; // prose blocks below the grid
  faqs?: { q: string; a: string }[]; // coin-specific FAQs (visible + FAQPage JSON-LD)
  related?: { href: string; label: string }[]; // internal links (hub, sibling coin, locations)
};

const ITEM_PAGES: Record<string, ItemPage> = {
  // ---- Silver ----
  "coins/sell-silver-coins/all-silver-coins": {
    crumb: "All Silver Coins",
    eyebrow: "Silver Coins · All Silver Coins",
    label: "silver coin",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">silver coins</span>
      </>
    ),
    description:
      "Every silver coin we buy in one place — American Silver Eagles, Canadian Maple Leafs, British and Australian silver, Morgan and Peace dollars, and more. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell Silver Coins in Northern VA | Every Coin We Buy",
    metaDescription:
      "Every silver coin we buy sits here — bullion and collectible alike. We weigh the silver, judge any premium, and settle up the same visit across four Northern Virginia stores.",
    coins: ALL_SILVER_COINS,
    sections: [
      {
        heading: "How we price any silver coin you bring",
        paras: [
          "This listing pulls together all the silver coins we handle, and one idea runs through every offer: we pay for the silver a coin contains. Its fineness and weight — pure .999 bullion, a 90% vintage US strike, or something in between — tell us the actual silver present, and the day's silver price converts that into a figure you watch us build.",
          "On top of the metal, a few coins are worth more. Classic Morgan and Peace dollars, scarce dates, and certified or proof pieces can carry a numismatic premium, so we weigh the silver first and then study the date, mint, and grade before the number is final. Whatever you sell, you are settled up on the day itself, with none of it sent by mail.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Bring your silver in any mix — single coins, full tubes, rolls, bags of older US silver, or a whole inherited box — with any certificates or graded holders kept alongside. We also ask each seller to present valid photo identification.",
          "There is nothing to schedule. Drop into any store while we are open; the appraisal costs nothing and we talk you through it, and the call is yours — say yes for payment right away, or take your coins back with none of it to settle.",
        ],
      },
    ],
    faqs: [
      { q: "Can I sell several types of silver coin at once?", a: "Yes — that is what this page is for. Bring Eagles, Maples, Morgan dollars, junk silver and more together; each is weighed and valued on its own silver content and any collector merit, and totalled into a single offer." },
      { q: "How do you decide what my silver is worth?", a: "Openly. Each coin is weighed and tested, its silver anchored to the current market, and any premium for a collectible date or grade spelled out, so the make-up of the offer is visible before you agree." },
      { q: "Do you buy common silver, not just rare coins?", a: "Absolutely. Ordinary bullion and worn 90% US coins are welcome and are paid on their silver content. Scarcer or graded pieces simply get a premium on top where collectors support it." },
      { q: "Is the appraisal free and no-obligation?", a: "Always. We never charge to look at your silver, and there is no commitment — take the offer and you are paid immediately, or walk away with your coins, no fee either way." },
    ],
    related: [
      { href: "/coins/sell-silver-coins/american-silver-eagle", label: "Sell American Silver Eagles" },
      { href: "/coins/sell-gold-coins/all-gold-coins", label: "Sell gold coins" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  "coins/sell-silver-coins/american-silver-eagle": {
    crumb: "American Silver Eagle",
    eyebrow: "Silver Coins · American Silver Eagle",
    label: "American Silver Eagle",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">American Silver Eagles</span>
      </>
    ),
    description:
      "The most popular silver bullion coin in the world — 1 oz .999 fine, from 1986 to today, bullion, proof and graded. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell American Silver Eagles in Northern VA | All Years & Grades",
    metaDescription:
      "How we price American Silver Eagles: live silver spot on 1 oz .999 fine content, on-site testing, and premiums for proof and certified coins — paid the same visit in Northern Virginia.",
    coins: AMERICAN_SILVER_EAGLES,
    sections: [
      {
        heading: "How we price your American Silver Eagle",
        paras: [
          "An American Silver Eagle holds one troy ounce of .999 fine silver, so its worth on any given day comes straight from the current silver spot price. Because silver costs a fraction of what gold does per ounce, the dollar amounts stay modest — yet the approach never changes: every figure is open, anchored to the live market, and talked through with you at the counter.",
          "Each coin is authenticated and weighed while you watch. A plain bullion Eagle sells for roughly its silver content, while proof, burnished, and slab-graded pieces — plus a handful of scarce dates — can be worth more, and any premium like that is built into the offer whenever the market allows.",
          "You collect payment on the same trip, before you head out the door; nothing is mailed and no check has to clear. Since the quote rides the live silver market, it stands the moment we give it and shifts only as spot moves.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Bring your Eagles in whatever form they are in — loose, stacked in tubes or a monster box, in capsules, or still sealed in Mint packaging — and include any grading slabs or paperwork if the coins are certified. You will also need a current government-issued photo ID; we ask every seller for one at all of our stores.",
          "There is no need to book ahead. Stop by any of our four Northern Virginia stores for a free, unhurried appraisal, and take the number only if it works for you: say yes and payment is in your hand right then; say no and your Eagles go home with you, no fee either way.",
        ],
      },
    ],
    faqs: [
      { q: "How much is an American Silver Eagle worth?", a: "That comes down to the live silver spot price, since the coin is a full ounce of .999 fine silver. An everyday bullion Eagle sits near its silver value, while proof, burnished, or graded examples can fetch more. Either way, you see the exact number before deciding." },
      { q: "Do you buy tubes and monster boxes of Silver Eagles?", a: "Absolutely — a single coin, several full tubes, or a factory-sealed monster box are all welcome, and we value them against the live silver price. Bring whatever you have and we will count and appraise it at no charge." },
      { q: "Are proof or graded Silver Eagles worth more?", a: "Often, yes. Proof and burnished issues, coins sealed in PCGS or NGC holders, and certain hard-to-find dates can trade above their metal value; we reflect that in the offer whenever the market rewards it." },
      { q: "Do I need the original box or certificate?", a: "For ordinary bullion, no — the silver content is what we pay on. When a coin is proof or graded, keeping its packaging, paperwork, or sealed holder lets us confirm the grade and can lift what we pay." },
    ],
    related: [
      { href: "/coins/sell-silver-coins", label: "All silver coins we buy" },
      { href: "/coins/sell-silver-coins/silver-dollars", label: "Sell silver dollars" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  "coins/sell-silver-coins/canadian-silver-coins": {
    crumb: "Canadian Silver Coins",
    eyebrow: "Silver Coins · Canadian Silver Coins",
    label: "Canadian Silver Coin",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">Canadian silver coins</span>
      </>
    ),
    description:
      "Silver Maple Leafs and every Royal Canadian Mint silver coin — .9999 fine, bullion and special issues, all years. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell Canadian Silver Coins in Northern VA | Maple Leafs & More",
    metaDescription:
      "Silver Maple Leafs are .9999 fine — some of the purest silver bullion struck. We weigh the silver, price it to the live market, and pay the same day in Northern Virginia.",
    coins: CANADIAN_SILVER_COINS,
    sections: [
      {
        heading: "How we price your Canadian silver coins",
        paras: [
          "The Royal Canadian Mint strikes its silver very pure — the Silver Maple Leaf runs .9999 fine, cleaner than most bullion its size. A coin is an ounce of silver, so the offer opens with that ounce read against the current silver rate, about as clear-cut as a valuation gets.",
          "The piece is checked, rested on the scale, and its silver matched straight to the live rate. Common Maples move near that mark, while the wildlife series, special finishes, and holdered coins may fetch a shade more, worked in when collectors are after them. You leave settled that day, with none of it to post.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Carry your Maples exactly as they sit — one by one, in mint tubes, in flips, or in monster-box sleeves — with any assay cards or holders kept together. A current photo ID is required when you sell.",
          "There is no visit to arrange. Look in during business hours for a free, unrushed valuation talked through plainly, then it rests with you: agree and the money changes hands at once, or hold on to the coins and go with nothing to pay.",
        ],
      },
    ],
    faqs: [
      { q: "Does the .9999 purity make a Silver Maple worth more?", a: "Purity is a selling point, but the figure still tracks the ounce of silver at the live rate. That soft, pure surface marks easily, which can count on a graded coin though never on plain bullion." },
      { q: "Will you buy the wildlife and special-series Maples?", a: "Yes — Call of the Wild, Birds of Prey, coloured and privy-mark strikes and the rest. Ordinary ones settle on their silver; scarcer or holdered releases can bring a premium we honour when buyers support it." },
      { q: "My Maples have milk spots — does that hurt the price?", a: "Those pale spots are a familiar trait of pure silver and leave the metal content untouched, so a bullion Maple still earns its whole ounce. They bear on price only when a coin. grade is the thing being sold." },
      { q: "Do you handle sealed tubes or a full monster box of Maples?", a: "We do — a single coin, a sealed tube, or an entire monster box all work. We tally them with you and value the whole lot on the live silver rate at no cost." },
    ],
    related: [
      { href: "/coins/sell-silver-coins", label: "All silver coins we buy" },
      { href: "/coins/sell-silver-coins/american-silver-eagle", label: "Sell American Silver Eagles" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  "coins/sell-silver-coins/british-silver-coins": {
    crumb: "British Silver Coins",
    eyebrow: "Silver Coins · British Silver Coins",
    label: "British Silver Coin",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">British silver coins</span>
      </>
    ),
    description:
      "Silver Britannias, Royal Arms, Queen's Beasts, Tudor Beasts and every Royal Mint silver coin — bullion, proof and multi-ounce. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell British Silver Coins in Northern VA | Britannias & Royal Arms",
    metaDescription:
      "Royal Mint silver — Britannias, Royal Arms and the Beasts series — is fine bullion with popular designs. We price the silver and any premium and pay you the same visit.",
    coins: BRITISH_SILVER_COINS,
    sections: [
      {
        heading: "How we price your British silver coins",
        paras: [
          "Royal Mint silver is, first and last, bullion. A Britannia, a Royal Arms, or a coin from the Queen's and Tudor Beasts lines holds an ounce of fine silver — the recent strikes at .9999 — so where the price starts is that ounce set against the day's silver rate. These designs enjoy a wide following, and once in a while that carries a coin beyond its metal.",
          "Once the piece is proven and weighed, the live rate is applied to its silver and the total is put in front of you. Bullion sits near that mark; larger multi-ounce coins, the more collected Beasts, and proof or holdered pieces may ask a premium, which we allow where buyers are genuinely there. Your money is settled before you step out, none of it posted.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Keep the coins as they arrived — bare, tubed, in wallets, or in Royal Mint cases — and rest any certificates or slabs beside them. Sellers show government-issued photo ID before we pay.",
          "There is nothing to book. Look in during trading hours for a free, easy valuation put in plain words, and the say-so is yours: agree and the payment follows immediately, or hold on to the coins and leave under no obligation.",
        ],
      },
    ],
    faqs: [
      { q: "Do the Beasts series silver coins carry collector value?", a: "They sometimes do. Underneath they are fine silver, settled on their ounce, but the best-loved designs and the scarce or holdered strikes can change hands above metal, which we make room for when buyers are paying it." },
      { q: "Will you buy the heavier two-ounce and ten-ounce British coins?", a: "Yes. The larger Britannia and Beasts formats are welcome and are settled on the whole of their silver at the live rate, with a premium wherever a scarce or graded piece warrants one." },
      { q: "Does an early Britannia beat a current one?", a: "Normally the silver rules whatever the year. A handful of first or low-mintage Britannias catch collector attention, and where that lift is real our buyer works it into the number." },
      { q: "Can I hand over a mixed box of Royal Mint silver?", a: "Certainly. Britannias, Royal Arms, Beasts, and commemoratives may be sold in one go — we separate them, weigh each on its silver, and total a single clear figure for everything." },
    ],
    related: [
      { href: "/coins/sell-silver-coins", label: "All silver coins we buy" },
      { href: "/coins/sell-silver-coins/australian-silver-coins", label: "Sell Australian silver coins" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  "coins/sell-silver-coins/australian-silver-coins": {
    crumb: "Australian Silver Coins",
    eyebrow: "Silver Coins · Australian Silver Coins",
    label: "Australian Silver Coin",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">Australian silver coins</span>
      </>
    ),
    description:
      "Perth Mint silver — Kookaburras, Kangaroos, Koalas, Lunar series and more, .9999 fine in every size. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell Australian Silver Coins in Northern VA | Kookaburras & Kangaroos",
    metaDescription:
      "Perth Mint silver — Kookaburras, Koalas, Kangaroos and Lunar coins — mixes pure bullion with limited mintages. We value the silver and any premium and pay you the same day.",
    coins: AUSTRALIAN_SILVER_COINS,
    sections: [
      {
        heading: "How we price your Australian silver coins",
        paras: [
          "Perth Mint silver is .9999 fine, and the range is unusually varied: the Kookaburra, Koala, and Lunar series change designs and often have capped mintages, while the Kangaroo is a straightforward bullion coin. Every one starts from the silver it holds — commonly an ounce, sometimes larger — measured against the current silver price.",
          "The coin is checked and weighed, and its silver is read onto the live market so the maths is plain. Standard bullion sits near metal value; a limited-mintage Lunar, an early Kookaburra, or a graded piece can draw collector demand, and that premium goes into the offer when it is real. You are paid during the visit, never by mail.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Bring your Perth Mint coins however they travel — loose, in capsules, in tubes, or in the mint's display cards — and include any certificates or graded holders. You will need to bring a valid photo ID.",
          "No visit needs booking. Trading hours are all you need — step in for a free, easy appraisal we set out plainly, then decide at your pace: accept for money in hand, or take the coins away owing us nothing.",
        ],
      },
    ],
    faqs: [
      { q: "Do limited-mintage Australian coins sell above silver value?", a: "They can. Capped-mintage Lunar, Koala and early Kookaburra issues sometimes attract collectors beyond their metal, though the .9999 silver is always covered at the live price, with any true premium sitting above that." },
      { q: "Do you buy the large kilo and ten-ounce Perth Mint coins?", a: "Yes — the heavier Kookaburra and Lunar sizes up to a kilo are welcome and paid on their full silver weight, plus any collector premium a scarce or graded piece supports." },
      { q: "Are Perth Mint Kangaroos just bullion?", a: "Largely, yes — the annual Silver Kangaroo is a pure bullion coin valued on its silver ounce. That makes it quick to appraise and pay, with premiums reserved for the more limited series." },
      { q: "Can I sell a mixed Perth Mint collection together?", a: "Certainly. Kookaburras, Koalas, Kangaroos and Lunar coins can all be sold in one go; we weigh and value each on its silver and any collector interest, then combine it into a single offer." },
    ],
    related: [
      { href: "/coins/sell-silver-coins", label: "All silver coins we buy" },
      { href: "/coins/sell-silver-coins/british-silver-coins", label: "Sell British silver coins" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  "coins/sell-silver-coins/silver-dollars": {
    crumb: "Silver Dollars",
    eyebrow: "Silver Coins · Silver Dollars",
    label: "Silver Dollar",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">silver dollars</span>
      </>
    ),
    description:
      "Morgan and Peace dollars, modern Morgan and Peace reissues, and classic US silver dollars — circulated to graded. We value both the silver content and the numismatic premium. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell Silver Dollars in Northern VA | Morgan & Peace Dollars",
    metaDescription:
      "Morgan and Peace dollars are worth their silver and often far more. We read the date, mint mark and grade, weigh the silver, and make a serious offer, paid the same visit.",
    coins: SILVER_DOLLARS,
    sections: [
      {
        heading: "How we price your silver dollars",
        paras: [
          "A Morgan or Peace dollar carries two prices at once. One is the metal: these coins are 90% silver with roughly three-quarters of an ounce apiece, and that silver is always covered at the live rate. The other is the coin's collector standing, which for many issues climbs far above the silver — occasionally into several multiples of it.",
          "So we look far more closely here than at ordinary bullion. Each dollar is proven genuine, its silver weighed, and then its date, mint mark, and degree of wear are studied, because a rarity such as an 1893-S or a Carson City strike — or a top grade — can rewrite the figure completely. Any real collector value shows up in what we offer, handed to you on the day rather than mailed.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Leave the coins untouched, and above all do not polish them: collectors prize an original surface, and a cleaned dollar routinely brings less. Old rolls, flips, or certification slabs should travel in with you. As with any purchase, please have photo identification ready.",
          "There is nothing to schedule. Stop by any store while we are open for a patient, thorough valuation spelled out for you, and take your time deciding: say yes and the payment is immediate, or carry the coins home owing nothing at all.",
        ],
      },
    ],
    faqs: [
      { q: "Could my Morgan and Peace dollars beat their silver value?", a: "Very often. The 90% silver is always covered, yet the date, mint mark, and grade can pile a large collector premium on top — a scarce Carson City or a key date may fetch several times its metal, which our buyer judges one coin at a time." },
      { q: "Is it wise to shine up my old dollars before selling?", a: "It is not. Polishing wipes away the original surface that collectors want and tends to drop the price. Hand them over untouched, even dark or toned, and their real condition will speak for itself." },
      { q: "Will you take well-worn dollars, or only nice ones?", a: "Worn and pristine alike. A heavily circulated Morgan or Peace still earns its silver plus any premium the date carries, while a sharp certified example is weighed on its grade too — bring either." },
      { q: "Do modern reissues and commemorative dollars count?", a: "They do. Recent Morgan and Peace reissues and US silver commemoratives are all bought, settled on their silver, with something extra where a particular release or grade has earned it." },
    ],
    related: [
      { href: "/coins/sell-silver-coins", label: "All silver coins we buy" },
      { href: "/coins/sell-silver-coins/junk-silver", label: "Sell 90% junk silver" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  "coins/sell-silver-coins/chinese-silver-pandas": {
    crumb: "Chinese Silver Pandas",
    eyebrow: "Silver Coins · Chinese Silver Pandas",
    label: "Chinese Silver Panda",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">Chinese Silver Pandas</span>
      </>
    ),
    description:
      "The China Mint's .999 fine silver coin with its ever-changing panda design — 30 gram and classic 1 oz issues, bullion and sealed. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell Chinese Silver Pandas in Northern VA | All Years",
    metaDescription:
      "Silver Pandas get a fresh design every year, giving some dates a collector following. We value the silver first, weigh any premium, and pay you the same visit in Northern VA.",
    coins: CHINESE_SILVER_PANDAS,
    sections: [
      {
        heading: "How we price your Chinese Silver Pandas",
        paras: [
          "Among world silver coins the Panda stands apart for one habit: a brand-new design every year. That yearly change, together with .999 fineness, has turned particular issues into favourites among collectors. Modern coins weigh 30 grams while earlier ones were struck as a full ounce, and whatever you hold, the figure begins with the silver it carries at the moment's spot rate.",
          "A brief authentication and a turn on the scale are all it takes, and then the metal is matched to the live rate so the number is plain to see. A run-of-the-mill sealed Panda lands close to that; a debut year, an elusive date, or a slabbed example can draw collector interest, folded in whenever it is genuine. Whatever you settle on changes hands the day you visit.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Most Pandas arrive in factory plastic, and leaving them sealed is the smart move: it both verifies the coin and shields the mirror finish from marks. Any mint sheets or certified holders are worth carrying in alongside. Photo ID is checked for every sale we make.",
          "Nothing has to be set up beforehand. Swing by while the doors are open for a free, relaxed look we walk through together, and the verdict is entirely yours: agree and the cash is exchanged straight away, or decline and your Pandas simply go back with you, no charge.",
        ],
      },
    ],
    faqs: [
      { q: "Why can a Silver Panda beat its silver value?", a: "Since the artwork changes annually, specific years and low-mintage or slabbed coins gather a following that lifts them beyond metal. We always cover the ounce of silver first and layer any authentic collector premium above it." },
      { q: "Is it a mistake to break the mint seal on a Panda?", a: "It usually is — keep it intact. Factory packaging both authenticates the coin and preserves the delicate surface, and either can help the price. A full appraisal is possible without ever opening it." },
      { q: "Which Panda sizes do you take?", a: "Both the current 30-gram strikes and the older one-ounce coins, whatever the date. We settle each on the precise silver it weighs against the live rate, adding any premium a collectible year deserves." },
      { q: "Does an older Panda always beat a newer one?", a: "Not as a rule — the silver leads for most coins whatever their age. A small group of early or scarce dates hold extra value that our buyer spots and works into the figure where it genuinely stands." },
    ],
    related: [
      { href: "/coins/sell-silver-coins", label: "All silver coins we buy" },
      { href: "/coins/sell-silver-coins/american-silver-eagle", label: "Sell American Silver Eagles" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  "coins/sell-silver-coins/junk-silver": {
    crumb: "90% Junk Silver",
    eyebrow: "Silver Coins · 90% Junk Silver",
    label: "junk silver lot",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">junk silver</span>
      </>
    ),
    description:
      "Pre-1965 90%, 40% and 35% US silver coins — dimes, quarters, half dollars and war nickels, sold by face value. We pay on the silver content at the live spot price. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell Junk Silver in Northern VA | 90%, 40% & 35% US Silver Coins",
    metaDescription:
      "Pre-1965 US silver coins are bought for the silver in them, by weight against the live market. Bring a jar or bags of them for a free count and same-visit payment.",
    coins: JUNK_SILVER,
    sections: [
      {
        heading: "How we price your junk silver",
        paras: [
          "\"Junk silver\" just means circulated US coins made of real silver, worth their metal rather than a collector premium. Pre-1965 dimes, quarters, and half dollars are 90% silver; Kennedy halves from 1965 to 1970 are 40%; and wartime nickels from 1942 to 1945 are 35%. We pay on the silver each group actually contains, priced to the day's market.",
          "There is no need to sort a jar yourself — we weigh the coins, apply the right fineness to each type, and total the silver against the live price in front of you. Valued purely as metal, condition is irrelevant here: a worn coin pays exactly like a sharp one. Everything is settled the day you come in, with nothing posted.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Bring it all in whatever it lives in — a coffee can, a drawer, paper rolls, or cloth bags — mixed dates and denominations are fine, and we will separate the types as we count. Every seller provides a current government photo ID.",
          "Nothing needs booking. Come by any location in opening hours; we count and weigh the lot for free, explain the figure, and then it is your decision: accept for payment on the spot, or take your coins back at no cost.",
        ],
      },
    ],
    faqs: [
      { q: "How do you value a mixed jar of old US coins?", a: "We separate it by type — 90% dimes, quarters and halves, 40% Kennedy halves, and 35% war nickels — weigh each group, and apply its silver fineness against the live price. The counting is free and done in front of you." },
      { q: "Does the condition of junk silver matter?", a: "No. Because these coins are paid on their silver content, a worn coin is worth the same as a crisp one of the same type. Wear only affects coins sold for a collector grade, which junk silver is not." },
      { q: "Are any 'junk' coins secretly worth more than melt?", a: "Occasionally a key date or a better-grade coin turns up in a lot. As we sort, our buyer keeps an eye out and will flag anything worth more than its silver, so you are not paid melt for a collectible coin." },
      { q: "Do you buy 40% halves and silver war nickels?", a: "Yes — 1965–1970 Kennedy halves at 40% and 1942–1945 Jefferson nickels at 35% are both bought, each paid on its own silver content alongside any 90% coins in the same lot." },
    ],
    related: [
      { href: "/coins/sell-silver-coins", label: "All silver coins we buy" },
      { href: "/coins/sell-silver-coins/silver-dollars", label: "Sell silver dollars" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  "coins/sell-silver-coins/mexican-silver-libertads": {
    crumb: "Mexican Silver Libertads",
    eyebrow: "Silver Coins · Mexican Silver Libertads",
    label: "Mexican Silver Libertad",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">Mexican Silver Libertads</span>
      </>
    ),
    description:
      "The Banco de México's .999 fine Libertad — 1/20 oz to 1 kilo, bullion and proof, plus the classic Onza and 100 Pesos. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell Mexican Silver Libertads in Northern VA | All Sizes & Years",
    metaDescription:
      "The Silver Libertad is .999 fine and famously low-mintage, so some earn a real premium. We weigh the silver, judge the date, and pay you the same visit in Northern Virginia.",
    coins: MEXICAN_SILVER_LIBERTADS,
    sections: [
      {
        heading: "How we price your Mexican Silver Libertads",
        paras: [
          "The Banco de México Libertad is .999 fine silver and comes in an unusually wide spread of sizes — from a tiny 1/20 oz up to a full kilo, alongside the classic Onza. Its worth begins with the silver it holds, weighed against the current price, which is straightforward to show for any size in the set.",
          "What makes Libertads interesting is scarcity: mintages are often small, so particular years and the proof issues can trade well above their metal. Our buyer verifies the coin, weighs its silver, and reads the date before settling the figure, adding a premium where collectors genuinely pay one. You are paid the same visit, nothing posted away.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Bring your Libertads however you keep them — loose, in capsules, in tubes, or in mint sets — and include any certificates or graded holders. Photo identification is required from anyone selling to us.",
          "There is nothing to arrange in advance. Just walk in while we are trading for a free, careful appraisal laid out clearly, then it is your choice: agree for immediate payment, or take the coins home with nothing to settle.",
        ],
      },
    ],
    faqs: [
      { q: "Why can Silver Libertads be worth more than their silver?", a: "Libertad mintages are frequently low, so certain dates and the proof coins develop strong collector demand that can lift them above metal. The .999 silver is always covered whatever the coin, and any genuine premium is added over it." },
      { q: "Do you buy the small fractional Libertads?", a: "Yes — the whole range from 1/20 oz up through the Onza and the larger kilo pieces. Each is paid on its exact silver weight at the live price, plus a premium where a scarce or graded coin supports one." },
      { q: "Are proof Libertads worth keeping separate?", a: "It helps. Proof Libertads often carry a higher premium than bullion, so pointing them out lets us appraise them on their own merits rather than as plain silver." },
      { q: "What is an Onza and do you take it?", a: "The Onza is the classic one-ounce Libertad, and yes, we buy every type. It is valued on its silver content against the live market, with any collector premium a particular date or finish earns." },
    ],
    related: [
      { href: "/coins/sell-silver-coins", label: "All silver coins we buy" },
      { href: "/coins/sell-silver-coins/silver-krugerrands", label: "Sell Silver Krugerrands" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  "coins/sell-silver-coins/silver-krugerrands": {
    crumb: "Silver Krugerrands",
    eyebrow: "Silver Coins · Silver Krugerrands",
    label: "Silver Krugerrand",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">Silver Krugerrands</span>
      </>
    ),
    description:
      "South Africa's 1 oz .999 fine silver Krugerrand — bullion and premium finishes, every year since 2017. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell Silver Krugerrands in Northern VA | All Years",
    metaDescription:
      "The Silver Krugerrand is a modern one-ounce .999 bullion coin. We check it, weigh the silver, and price it to the live market, with payment handed over the same visit.",
    coins: SILVER_KRUGERRANDS,
    sections: [
      {
        heading: "How we price your Silver Krugerrands",
        paras: [
          "The silver Krugerrand is a newer coin — first struck in 2017 — carrying the same famous design as the gold original, now in one ounce of .999 fine silver. It is a pure bullion piece, so its value is simply that ounce of silver measured against the day's price, quick and clean to work out with you.",
          "Our buyer authenticates the coin, weighs it, and reads the live silver market onto its content. Standard bullion Krugerrands trade right around that value; the odd proof or premium-finish coin can be worth a bit more, which we allow for when buyers will pay it. You collect payment during the visit, with nothing shipped off.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Bring your silver Krugerrands as they come — loose, in tubes, or in capsules — with any certificates or graded holders you happen to have. We do need to see valid photo ID to buy.",
          "No booking is necessary. Drop in during opening hours for a free, straightforward appraisal explained openly, then decide freely: accept and the money is yours at once, or take the coins away at no charge.",
        ],
      },
    ],
    faqs: [
      { q: "Are Silver Krugerrands rare?", a: "Not especially — as a modern bullion coin the everyday issues are common and are paid on their silver content at the live price. A few proof or special-finish Krugerrands can carry a premium, which we recognise where it is real." },
      { q: "How is the silver Krugerrand different from the gold one?", a: "It shares the design but is one ounce of .999 fine silver rather than gold, so it is valued on the live silver market. That makes it far more affordable and just as quick for us to appraise and pay." },
      { q: "Do you buy every year of the silver Krugerrand?", a: "Yes — every year since the 2017 debut, in bullion and premium finishes. Each is paid on its silver ounce against the current market, with any collector premium a special issue supports." },
      { q: "Can I sell silver and gold Krugerrands together?", a: "Of course. Bring both and we value the silver coins on the silver market and the gold coins on the gold market, then give you one combined offer for the lot." },
    ],
    related: [
      { href: "/coins/sell-silver-coins", label: "All silver coins we buy" },
      { href: "/coins/sell-gold-coins/gold-krugerrands", label: "Sell Gold Krugerrands" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  "coins/sell-silver-coins/america-the-beautiful": {
    crumb: "America the Beautiful 5 oz",
    eyebrow: "Silver Coins · America the Beautiful",
    label: "America the Beautiful coin",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">America the Beautiful coins</span>
      </>
    ),
    description:
      "The US Mint's 5 oz .999 fine America the Beautiful series — all 56 national park and site designs, bullion and burnished. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell America the Beautiful 5 oz Silver Coins in Northern VA",
    metaDescription:
      "Each America the Beautiful coin is five ounces of .999 silver, so it carries real weight. We price the silver to the live market and hand you payment the same visit.",
    coins: ATB_SILVER_COINS,
    sections: [
      {
        heading: "How we price your America the Beautiful coins",
        paras: [
          "The America the Beautiful series is unusual for its size: each coin is a hefty five ounces of .999 fine silver, roughly three inches across, issued across 56 national-park and site designs. Because every coin holds five ounces, its value is that silver weight against the current price — a larger number per coin than most one-ounce bullion.",
          "We authenticate the coin, weigh it, and read the live silver market onto its five ounces so the figure is clear. Plain bullion issues trade near metal value; the low-mintage burnished (P-mint) versions and graded examples can draw collectors, and that premium is added when demand is genuine. Payment is made during the visit, never by mail.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "These coins are large, so they usually come in their own capsules or boxes — bring them that way, with any certificates or graded holders included. Selling requires a current, valid photo ID as well.",
          "You do not need to book. Come by any branch in opening hours for a free, unhurried appraisal we explain step by step, then choose as you wish: say yes for money in hand, or carry the coins out again at no charge.",
        ],
      },
    ],
    faqs: [
      { q: "How much silver is in an America the Beautiful coin?", a: "Five troy ounces of .999 fine silver each — five times a standard one-ounce coin — so a single piece is paid on that full five ounces at the live silver price, and a small stack adds up quickly." },
      { q: "Are the burnished (P) versions worth more?", a: "They can be. The burnished, low-mintage P-mint coins are scarcer than the plain bullion strikes and can attract collectors above metal value, a premium we recognise when the market supports it." },
      { q: "Do you buy the whole 56-design set?", a: "Yes — individual coins or a complete set of designs are welcome. Each is valued on its five ounces of silver, with any collector premium a burnished or graded piece earns added on top." },
      { q: "Do these coins need their capsules to sell?", a: "Not to be valued — a bullion coin is paid on its silver either way. Keeping the capsule or box does protect the large surface from marks, which can matter on a graded or burnished example." },
    ],
    related: [
      { href: "/coins/sell-silver-coins", label: "All silver coins we buy" },
      { href: "/coins/sell-silver-coins/american-silver-eagle", label: "Sell American Silver Eagles" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  // ---- Gold ----
  "coins/sell-gold-coins/all-gold-coins": {
    crumb: "All Gold Coins",
    eyebrow: "Gold Coins · All Gold Coins",
    label: "gold coin",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">gold coins</span>
      </>
    ),
    description:
      "Every gold coin we buy in one place — American Eagles and Buffalos, Canadian Maple Leafs, British Britannias and Sovereigns, Krugerrands, pre-1933 US gold, Pandas, Mexican and European coins. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell Gold Coins in Northern VA | Every Coin We Buy",
    metaDescription:
      "Whatever gold coin you hold — modern bullion or historic issue — we weigh its gold, judge any collector value, and pay you the same visit across four Northern Virginia stores.",
    coins: ALL_GOLD_COINS,
    sections: [
      {
        heading: "How we price any gold coin you bring",
        paras: [
          "This page gathers every gold coin we handle in one place, and the principle behind each offer is the same: we pay on the gold inside. A coin's fineness and weight — whether it is 24-karat pure, 22-karat, or a 90% old-world alloy — tell us how much actual gold it holds, and the live spot price turns that into a starting figure you can watch us reach.",
          "From there, some coins are worth more than their metal. Proof and certified moderns, first-year or key-date issues, and historic pieces in strong condition can carry a collector premium, so our buyer weighs each coin and reads its date, mint, and grade before settling the number. Whatever you sell, you are paid during the same visit, with nothing shipped off.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Bring your gold coins in any mix and any container — a single piece, a full tube, a dealer's envelope, or a whole inherited collection — and along with any grading paperwork or slabbed coins you keep. Bring photo ID as well — it is required to sell.",
          "No appointment is needed anywhere. Call in during opening hours for a free appraisal we explain as we go, and the choice is always yours: take the offer for immediate payment, or keep your coins and leave with no cost and no pressure.",
        ],
      },
    ],
    faqs: [
      { q: "Can I sell different kinds of gold coins in one visit?", a: "Yes — that is exactly what this listing is for. Bring Eagles, Maples, Krugerrands, Sovereigns, old US gold and anything else together; we appraise each on its own gold content and merit, then give you one combined offer." },
      { q: "How do I know I'm getting a fair number?", a: "Because the appraisal is open. We weigh and test in front of you, tie the gold to the live spot price, and explain any collector premium, so you can see how every dollar of the offer is built before you decide." },
      { q: "Do you only buy well-known coins?", a: "No. Popular bullion is the easiest to price, but we also buy fractional pieces, world coins, and historic gold. If it is genuine gold, bring it in and we will value it on its content and any collector interest." },
      { q: "Is there any obligation once you make an offer?", a: "None at all. The valuation is free and carries no commitment — accept it and you are paid on the spot, or walk away with your coins. There is never a fee for having your gold appraised." },
    ],
    related: [
      { href: "/coins/sell-gold-coins/american-gold-eagle", label: "Sell American Gold Eagles" },
      { href: "/coins/sell-silver-coins/all-silver-coins", label: "Sell silver coins" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  "coins/sell-gold-coins/american-gold-eagle": {
    crumb: "American Gold Eagle",
    eyebrow: "Gold Coins · American Gold Eagle",
    label: "American Gold Eagle",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">American Gold Eagles</span>
      </>
    ),
    description:
      "Every size and finish, from 1986 to today — 1 oz, 1/2 oz, 1/4 oz and 1/10 oz, bullion, proof, burnished and certified. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell American Gold Eagles in Northern VA | All Years, Sizes & Proofs",
    metaDescription:
      "How we price American Gold Eagles: live gold spot on 22-karat content, on-site testing, and premiums for proof and certified coins — paid the same visit at 4 Northern Virginia locations.",
    coins: AMERICAN_GOLD_EAGLES,
    sections: [
      {
        heading: "How we price your American Gold Eagle",
        paras: [
          "Every American Gold Eagle is priced off the live gold spot price at the moment you sell. The coin is 22-karat (91.67% fine) gold, and each one holds a full troy ounce — or the marked fraction: 1/2, 1/4 or 1/10 oz — of pure gold, so its metal value is straightforward to calculate transparently in front of you.",
          "We test and weigh every coin on-site with professional equipment, confirm it is genuine, and show you the numbers. Bullion Eagles trade close to their gold content; proof, burnished, and certified (graded) Eagles can carry a collector premium above melt, and we account for that when the market supports it.",
          "You are paid the same visit, before you leave — no mail-in wait. Because the offer follows the live market, it is firm at the time we make it and can move with the spot price.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Bring the coins themselves — loose, in tubes, capsules, or their original Mint packaging — plus any certificates or grading slabs (PCGS, NGC) if your Eagles are certified. A valid, unexpired government photo ID is required to sell; that is our policy at all four of our stores.",
          "No appointment is needed. Walk into any of our four Northern Virginia locations, watch the free appraisal, and decide with no pressure: like the offer and you are paid on the spot; if not, you keep your coins.",
        ],
      },
    ],
    faqs: [
      { q: "Do you buy fractional American Gold Eagles?", a: "Yes — we buy 1 oz, 1/2 oz, 1/4 oz and 1/10 oz Gold Eagles. Each is priced on its actual gold content at the live spot price, plus any premium for proof or certified pieces." },
      { q: "Are older Gold Eagles worth more than newer ones?", a: "For bullion coins the year usually matters little — value tracks the gold content. Certain proof, burnished, or key-date certified Eagles can carry a collector premium, which we factor in when the market supports it." },
      { q: "Do I need the box and certificate to sell?", a: "Not for bullion coins — we can value those on gold content alone. For proof or graded Eagles, original Mint packaging and certificates (or an intact PCGS/NGC slab) help confirm condition and can support a higher offer." },
      { q: "How is my Gold Eagle offer calculated?", a: "We weigh and test the coin, take its pure-gold content, and apply the live spot price, then add any collector premium for proof or certified pieces. Every step is shown to you before you decide." },
    ],
    related: [
      { href: "/coins/sell-gold-coins", label: "All gold coins we buy" },
      { href: "/coins/sell-gold-coins/american-gold-buffalo", label: "Sell American Gold Buffalos" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  "coins/sell-gold-coins/american-gold-buffalo": {
    crumb: "American Gold Buffalo",
    eyebrow: "Gold Coins · American Gold Buffalo",
    label: "American Gold Buffalo",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">American Gold Buffalos</span>
      </>
    ),
    description:
      "The US Mint's .9999 fine 24-karat gold coin, from 2006 to today — bullion, proof and certified. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell American Gold Buffalos in Northern VA | .9999 Fine, All Years",
    metaDescription:
      "Selling an American Gold Buffalo? We pay on its full ounce of 24-karat gold at the live spot price, test it on-site, and hand you payment the same visit in Northern Virginia.",
    coins: AMERICAN_GOLD_BUFFALOS,
    sections: [
      {
        heading: "How we price your American Gold Buffalo",
        paras: [
          "The Gold Buffalo is the US Mint's 24-karat coin — .9999 fine, a full troy ounce of pure gold with no alloy to discount. That makes its value refreshingly simple: whatever an ounce of gold is trading for right now sets the floor for what we pay.",
          "Our buyer verifies the coin and weighs it in front of you, then reads the number off the live spot market. Regular bullion Buffalos change hands right around their gold value; proof and certified issues in an NGC or PCGS holder can earn a premium, and we add that in when demand justifies it. You leave with your money the same day — no shipping, no waiting on a mailed cheque.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Have your Buffalos with you in any condition — bare, in a tube, in a capsule, or in the Mint's box — and bring the grading slab or certificate along if a coin has been graded. Every seller shows a current photo ID before we buy.",
          "Skip the appointment and simply come by any Northern Virginia branch during opening hours. The appraisal is free and unhurried, the offer is explained line by line, and you walk out either paid or still holding your coins — the choice is entirely yours.",
        ],
      },
    ],
    faqs: [
      { q: "How is a Gold Buffalo different from a Gold Eagle for selling?", a: "The Buffalo is pure 24-karat gold, while the Eagle is a 22-karat alloy; both hold one ounce of gold, so both are paid on that ounce at the live spot price. Condition, proof status, and grading affect any premium on either coin." },
      { q: "Do you buy proof and graded Gold Buffalos?", a: "Yes. Bullion, proof, burnished, and slabbed (NGC/PCGS) Buffalos are all bought here. A graded proof can bring more than its melt value, and we reflect that in the number whenever the market rewards it." },
      { q: "Does the year on my Buffalo change what it's worth?", a: "For everyday bullion the mint year rarely moves the price — the gold content leads. A small number of proof or low-mintage graded dates carry collector interest, which we take into account when it applies." },
      { q: "Will you pay for a scratched or worn Buffalo?", a: "Of course. A bullion coin's gold content does not change with a mark or two, so an ordinary worn Buffalo is still paid on its full ounce of gold. Wear only matters where a coin is graded and its condition drives a premium." },
    ],
    related: [
      { href: "/coins/sell-gold-coins", label: "All gold coins we buy" },
      { href: "/coins/sell-gold-coins/american-gold-eagle", label: "Sell American Gold Eagles" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  "coins/sell-gold-coins/canadian-gold-coins": {
    crumb: "Canadian Gold Coins",
    eyebrow: "Gold Coins · Canadian Gold Coins",
    label: "Canadian Gold Coin",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">Canadian gold coins</span>
      </>
    ),
    description:
      "Gold Maple Leafs and every Royal Canadian Mint gold coin — 1 oz, 1/2 oz, 1/4 oz, 1/10 oz and 1/20 oz, .9999 and .99999 fine. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell Canadian Gold Coins in Northern VA | Maple Leafs & More",
    metaDescription:
      "Gold Maple Leafs and Royal Canadian Mint coins are among the purest bullion made. We weigh, verify and pay on their gold at the live price, same visit, across Northern Virginia.",
    coins: CANADIAN_GOLD_COINS,
    sections: [
      {
        heading: "How we price your Canadian gold coins",
        paras: [
          "The Gold Maple Leaf and its Royal Canadian Mint siblings are struck at .9999 fine — and some newer issues at an extraordinary .99999. Every one carries the gold weight stamped on its face, whether that is a full ounce or a fractional 1/2, 1/4, 1/10 or 1/20 oz, so working out the metal value in front of you takes seconds.",
          "We confirm the coin is authentic, put it on the scale, and match the current gold price to its stated content. Standard bullion Maples settle near that figure; graded or special Royal Canadian Mint releases can carry something extra, which we include when collectors are paying for it. Payment is handed over during the same visit, with no envelopes and no clearing period.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Carry your Maples in however they are stored — singly, in mint tubes, in flips, or in original assay cards — and keep any certificates or graded holders together with the coins. A valid photo ID is asked of each person selling.",
          "Booking ahead is unnecessary. Drop in during business hours, watch a no-cost appraisal that we explain step by step, and decide without any push: accept and the money is yours on the spot, decline and the coins stay with you.",
        ],
      },
    ],
    faqs: [
      { q: "Are Gold Maple Leafs worth more than other bullion coins?", a: "Their purity is higher than most — .9999 or even .99999 fine — but the payout still follows the gold content at the live spot price. Extremely soft, pure gold can scratch easily, and heavy marks can matter on graded coins, though not on ordinary bullion." },
      { q: "Do you buy fractional Maple Leafs?", a: "We do — 1 oz down to 1/20 oz. Each fraction is paid on the exact gold weight printed on the coin, priced against the current market, plus any premium a graded or special issue earns." },
      { q: "What about older Royal Canadian Mint gold coins?", a: "We buy Maples of every year and other RCM gold such as the Call of the Wild and wildlife series. Common bullion tracks its gold value; scarcer graded pieces can bring a collector premium we account for when it applies." },
      { q: "My Maple Leaf has milk spots — can I still sell it?", a: "Yes. Those pale spots are a surface quirk of pure gold and do not change how much metal is in the coin, so a bullion Maple is still paid on its full gold content. They only weigh on price where a coin's grade is what carries a premium." },
    ],
    related: [
      { href: "/coins/sell-gold-coins", label: "All gold coins we buy" },
      { href: "/coins/sell-gold-coins/american-gold-eagle", label: "Sell American Gold Eagles" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  "coins/sell-gold-coins/british-gold-coins": {
    crumb: "British Gold Coins",
    eyebrow: "Gold Coins · British Gold Coins",
    label: "British Gold Coin",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">British gold coins</span>
      </>
    ),
    description:
      "Gold Britannias, Sovereigns, Queen's Beasts, Tudor Beasts and every Royal Mint gold coin — bullion, proof and certified, all sizes. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell British Gold Coins in Northern VA | Britannias & Sovereigns",
    metaDescription:
      "From modern Britannias to historic Sovereigns, Royal Mint gold spans pure bullion and collector pieces. We appraise both the gold and the premium, and pay you the same visit.",
    coins: BRITISH_GOLD_COINS,
    sections: [
      {
        heading: "How we price your British gold coins",
        paras: [
          "British gold splits into two families, and we handle each on its own merits. Modern Britannias are .9999-fine bullion whose worth is set by their gold weight against the day's spot price; the classic Sovereign is 22-karat and holds just under a quarter-ounce of gold, so much of its value is metal too — but older dates and choice grades can be sought after by collectors.",
          "Whatever you bring, our buyer authenticates it, weighs it, and shows how the figure is reached. Bullion Britannias track the gold market closely, while Sovereigns, Queen's Beasts, Tudor Beasts, and graded Royal Mint issues may earn more than melt, and we factor that premium in when the market calls for it. You are paid before you leave, with nothing posted away.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Bring the coins as you keep them — loose, in tubes, in coin wallets, or in Royal Mint presentation cases — and set out any certificates or graded holders alongside them. Please bring photo identification; all sellers present one.",
          "There is nothing to schedule. Call in during trading hours for a free, relaxed valuation talked through in plain terms, then choose freely: agree and you are paid immediately, or hold on to your coins and walk away with no obligation.",
        ],
      },
    ],
    faqs: [
      { q: "Are old Sovereigns worth more than their gold?", a: "Sometimes. Every Sovereign's offer starts from its 22-karat gold content at the live price. Certain reigns, dates, and mint marks — or high grades — attract collectors, and where that premium is real we build it into the offer." },
      { q: "Do you buy half Sovereigns and fractional Britannias?", a: "Yes — half Sovereigns, quarter and tenth Britannias, and the larger sizes are all bought. Each is paid on its precise gold weight against the current market, plus any collector premium the piece supports." },
      { q: "Will you buy a Sovereign mounted in jewellery?", a: "We will. A mounted Sovereign is still gold, so we value the coin's gold content and the metal of the mount together. If the mount is a fine piece in its own right, that is reflected too." },
      { q: "Do Queen's Beasts and Tudor Beasts sell for a premium?", a: "They can. These Royal Mint series are .9999 bullion at heart, but popular designs and low-mintage or graded examples sometimes trade above their gold value, which we recognise when demand supports it." },
    ],
    related: [
      { href: "/coins/sell-gold-coins", label: "All gold coins we buy" },
      { href: "/coins/sell-gold-coins/european-gold-coins", label: "Sell European gold coins" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  "coins/sell-gold-coins/gold-krugerrands": {
    crumb: "Gold Krugerrands",
    eyebrow: "Gold Coins · Gold Krugerrands",
    label: "Gold Krugerrand",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">Gold Krugerrands</span>
      </>
    ),
    description:
      "The world's original modern bullion coin — South African Gold Krugerrands in 1 oz, 1/2 oz, 1/4 oz and 1/10 oz, every year. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell Gold Krugerrands in Northern VA | All Sizes & Years",
    metaDescription:
      "The Krugerrand is the world's most traded bullion coin. We read its gold content against the live market, check it at the counter, and settle up with you the same day.",
    coins: GOLD_KRUGERRANDS,
    sections: [
      {
        heading: "How we price your Gold Krugerrands",
        paras: [
          "Krugerrands were the coin that started modern bullion, and they remain one of the easiest to value. Each holds its stated weight of pure gold — a full ounce or a 1/2, 1/4 or 1/10 fraction — inside a 22-karat copper-gold blend that gives the coin its warm colour and hard-wearing surface. We pay on the gold inside, priced to the live market.",
          "Because Krugerrands are so widely recognised, most trade tightly around their gold value with little fuss. Our buyer proves the coin, weighs it, and lays out the maths so you can see exactly how the number lands. You collect payment on the day, with nothing shipped and no wait to clear.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Bring your Krugerrands however they travel — loose in a pocket, in tubes, or in capsules — and there is rarely paperwork with them, though anything you do have is welcome. As with any sale, as always, we will need to see your valid photo ID.",
          "No booking is needed at any branch. Come in while we are open for a free appraisal we talk through openly, then make your call: take the offer and the cash is yours right away, or keep the coins and head out with no cost either way.",
        ],
      },
    ],
    faqs: [
      { q: "Is a Krugerrand pure gold?", a: "Not quite — it is 22-karat, mixing gold with a little copper for durability, but it still contains a full stated ounce (or fraction) of pure gold. We pay on that gold weight, so the copper does not reduce your offer." },
      { q: "Do the year or the mint matter on a Krugerrand?", a: "For bullion coins, almost never — value follows the gold content. A few proof Krugerrands and certain graded pieces draw collector interest, and where a genuine premium exists we add it to the figure." },
      { q: "Do you buy fractional Krugerrands?", a: "Yes, all four sizes — the full ounce plus the half, quarter and tenth. Every one is paid on its own gold weight at the live price, so a mix of sizes is counted and valued piece by piece." },
      { q: "Are Krugerrands easy to sell?", a: "They are among the simplest coins to sell precisely because they are so well known — a quick, confident appraisal and a clear price. Bring one coin or a whole collection and we will handle the lot on the spot." },
    ],
    related: [
      { href: "/coins/sell-gold-coins", label: "All gold coins we buy" },
      { href: "/coins/sell-gold-coins/canadian-gold-coins", label: "Sell Canadian gold coins" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  "coins/sell-gold-coins/pre-33-us-gold-coins": {
    crumb: "Pre-33 US Gold Coins",
    eyebrow: "Gold Coins · Pre-33 US Gold Coins",
    label: "Pre-33 US Gold Coin",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">Pre-33 US gold coins</span>
      </>
    ),
    description:
      "Historic pre-1933 US gold — $2.50, $5, $10 and $20 Liberty, Indian and Saint-Gaudens coins, circulated to graded. We value both the gold content and the numismatic premium. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell Pre-1933 US Gold Coins in Northern VA | Liberty, Indian, Saint-Gaudens",
    metaDescription:
      "Pre-1933 US gold is worth its metal and often much more. We weigh the gold and read the date, mint and grade, then make a serious offer and pay you the same visit.",
    coins: PRE33_US_GOLD_COINS,
    sections: [
      {
        heading: "How we price your pre-1933 US gold coins",
        paras: [
          "These coins are unusual because two values sit inside them at once. First there is the gold: $2.50, $5, $10 and $20 Liberty, Indian, and Saint-Gaudens pieces are 90% gold, and your offer starts from that gold weight at the live market price. Second there is the history — for many dates the collector value runs well past melt.",
          "So our appraisal looks harder than it does for plain bullion. We authenticate the coin, weigh its gold, and then read the date, mint mark, and state of preservation, because a scarce year or a high grade can multiply what a coin is worth. Where that numismatic premium is real, it is in our offer — and you are paid the same visit, never by mail.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Bring the coins exactly as they are, and please do not clean them — original surfaces matter to collectors, and a polished coin can be worth less. Keep any old holders, envelopes, or grading slabs with them. Sellers provide a government-issued photo ID before a purchase.",
          "No appointment is required. Visit any branch in opening hours for a careful, unrushed appraisal explained in full, then decide at your own pace: accept and you are paid on the spot; prefer to think it over and your coins go home with you." ,
        ],
      },
    ],
    faqs: [
      { q: "Are my old US gold coins worth more than melt?", a: "Often, yes — that is what sets pre-1933 gold apart from bullion. Every coin's offer starts from its 90% gold content, and scarce dates, mint marks, or high grades can add a substantial collector premium on top, which our buyer assesses coin by coin." },
      { q: "Should I clean my coins before selling?", a: "Please don't. Cleaning strips the original surface collectors prize and can lower a coin's value. Bring it as found — even dark or toned — and we will judge it on its true condition." },
      { q: "Do you buy circulated pre-1933 gold, not just graded coins?", a: "We buy both. A worn, ungraded Liberty or Saint-Gaudens is still valued on its gold plus any date or type premium; a certified high-grade coin is assessed on its grade as well. Either is welcome." },
      { q: "What denominations of pre-1933 US gold do you take?", a: "The full range — $2.50 and $5 quarter and half eagles, $10 eagles, and $20 double eagles across the Liberty, Indian, and Saint-Gaudens types. Each is appraised on its own gold content and collector merit." },
    ],
    related: [
      { href: "/coins/sell-gold-coins", label: "All gold coins we buy" },
      { href: "/coins/sell-gold-coins/american-gold-eagle", label: "Sell American Gold Eagles" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  "coins/sell-gold-coins/chinese-gold-pandas": {
    crumb: "Chinese Gold Pandas",
    eyebrow: "Gold Coins · Chinese Gold Pandas",
    label: "Chinese Gold Panda",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">Chinese Gold Pandas</span>
      </>
    ),
    description:
      "The People's Bank of China's .999 fine gold coin with its ever-changing panda design — every size and year, bullion and sealed. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell Chinese Gold Pandas in Northern VA | All Years & Sizes",
    metaDescription:
      "Gold Pandas change design every year, which gives some a collector following. We value the gold first, weigh any premium second, and pay you the same visit in Northern Virginia.",
    coins: CHINESE_GOLD_PANDAS,
    sections: [
      {
        heading: "How we price your Chinese Gold Pandas",
        paras: [
          "The Panda is .999 fine gold, and unlike most bullion its artwork is redrawn every single year — a habit that has built a genuine collector base for certain dates. Newer coins are measured in grams (a 30-gram flagship and smaller pieces), while older Pandas came in ounce sizes; whichever you hold, the starting point is the gold it contains at the live price.",
          "Our buyer confirms the coin, weighs it, and prices its gold to the current market. Ordinary sealed bullion Pandas trade close to that value, but a first-year, key-date, or graded Panda can attract a premium among collectors, and we include it when the demand is truly there. Payment reaches you the same visit, with nothing to post or wait on.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Pandas are usually sold sealed in their original mint plastic, and it is best to leave them that way — the seal helps confirm the coin and protects the finish. Bring any assay cards or graded holders too. Valid photo identification is required from everyone selling here.",
          "You do not need to arrange anything in advance. Come by during opening hours for a free, unhurried appraisal set out clearly, then choose as you wish: say yes and the money is handed over there and then, or say no and keep your coins with no charge.",
        ],
      },
    ],
    faqs: [
      { q: "Why can some Gold Pandas be worth more than their gold?", a: "Because the design changes yearly, particular dates and low-mintage or graded Pandas develop a collector following that can push them above melt. Every coin's offer still starts from its .999 gold content, with any real premium added on top." },
      { q: "Should I break the sealed plastic on my Panda?", a: "No — keep it sealed. The original mint packaging helps verify the coin and preserves its surface, both of which can support the value. We can appraise it fully without opening it." },
      { q: "Do you buy gram-sized and older ounce Pandas?", a: "Yes, both. Modern gram coins (30 g and smaller) and the earlier 1 oz and fractional-ounce Pandas are all bought, each paid on its exact gold weight at the live market plus any collector premium." },
      { q: "Are older Pandas better to sell than new ones?", a: "Not automatically — most trade on gold content regardless of age. A handful of early or scarce dates carry extra collector value, which our buyer identifies and prices in when it genuinely applies." },
    ],
    related: [
      { href: "/coins/sell-gold-coins", label: "All gold coins we buy" },
      { href: "/coins/sell-gold-coins/american-gold-buffalo", label: "Sell American Gold Buffalos" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  "coins/sell-gold-coins/mexican-gold-coins": {
    crumb: "Mexican Gold Coins",
    eyebrow: "Gold Coins · Mexican Gold Coins",
    label: "Mexican Gold Coin",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">Mexican gold coins</span>
      </>
    ),
    description:
      "Gold Libertads and the classic Mexican Peso series — 2, 2.5, 5, 10, 20 and 50 Pesos, plus fractional Libertads. We value both gold content and collector premium. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell Mexican Gold Coins in Northern VA | Libertads & Pesos",
    metaDescription:
      "Mexican gold runs from pure Libertads to the historic Peso series and the big 50 Pesos Centenario. We pay on the gold and any collector value, same-visit, in Northern Virginia.",
    coins: MEXICAN_GOLD_COINS,
    sections: [
      {
        heading: "How we price your Mexican gold coins",
        paras: [
          "Mexico has minted some of the most striking gold coins in the hemisphere, and they fall into a couple of groups. The modern Libertad is .999 fine bullion valued on its gold weight; the older Peso pieces — 2, 2.5, 5, 10, 20 and the famous 50 Pesos Centenario — are 90% gold, and their gold content anchors the price, though certain dates carry collector appeal.",
          "We prove each coin, weigh it, and price its gold to the live market so the figure is transparent. A 50 Pesos Centenario, for instance, holds well over an ounce of gold and is paid accordingly; scarcer dated Pesos and graded Libertads can bring a premium, which we recognise when collectors are paying for it. You are paid the same visit, with nothing mailed.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Bring your Mexican gold however you keep it — loose, in tubes, in flips, or in old bank sleeves — and include any certificates or graded holders. As with every purchase, you will be asked for current photo ID, as ever.",
          "Nothing needs booking. Stop in during opening hours for a free, easygoing appraisal that we walk through with you, and then it is your decision entirely: agree and the payment is immediate, or hold your coins and leave with no obligation whatsoever.",
        ],
      },
    ],
    faqs: [
      { q: "How much gold is in a 50 Pesos Centenario?", a: "A 50 Pesos coin contains roughly 1.2 troy ounces of pure gold within its 90% alloy, which makes it one of the heaviest gold coins people commonly sell. We pay on that full gold content at the live price." },
      { q: "Are Mexican Libertads pure gold?", a: "The modern gold Libertad is .999 fine and valued on its gold weight against the current market. Fractional Libertads are bought too, each paid on its own gold content, plus any premium a scarcer or graded piece brings." },
      { q: "Do old Peso coins have collector value?", a: "Some do. Every Peso is valued first on its 90% gold, but particular dates and well-preserved or graded examples can carry a numismatic premium that our buyer assesses individually." },
      { q: "Do you buy the smaller 2 and 2.5 Peso coins?", a: "Yes — the entire Peso range from the small 2 and 2.5 Pesos up to the 50 Pesos is welcome. Each is valued on its gold weight at the live market, with collector premiums added where they genuinely exist." },
    ],
    related: [
      { href: "/coins/sell-gold-coins", label: "All gold coins we buy" },
      { href: "/coins/sell-gold-coins/european-gold-coins", label: "Sell European gold coins" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
  "coins/sell-gold-coins/european-gold-coins": {
    crumb: "European Gold Coins",
    eyebrow: "Gold Coins · European Gold Coins",
    label: "European Gold Coin",
    title: (
      <>
        Sell your <span className="text-gold-shimmer">European gold coins</span>
      </>
    ),
    description:
      "Old-world gold — British Sovereigns, Swiss and French 20 Francs, Austrian Coronas and Ducats, and more, circulated to graded. We value both the gold content and any collector premium. Bring yours to any of our 4 Northern Virginia locations for a free appraisal and instant payout.",
    metaTitle: "Sell European Gold Coins in Northern VA | Sovereigns, Francs & Coronas",
    metaDescription:
      "Old-world gold — Francs, Coronas, Ducats and Sovereigns — is often 90% fine with fractional gold weights. We calculate the content and any premium and pay you the same day.",
    coins: EUROPEAN_GOLD_COINS,
    sections: [
      {
        heading: "How we price your European gold coins",
        paras: [
          "Continental gold coins were made to circulate, so most are around 90% fine and carry tidy fractional gold weights rather than round ounces. A Swiss or French 20 Francs holds a little under a fifth of an ounce; Austrian Coronas and Ducats, Dutch Guilders, German Marks, and British Sovereigns each have their own set weight. We start every valuation from that gold content at the live price.",
          "Our buyer identifies and authenticates the coin, weighs it, and shows how its gold translates into a number. Many of these coins trade close to melt as everyday gold, but scarcer dates, better grades, and sought-after types can command a premium, which we include when the market bears it. Payment is made the same visit, never posted away.",
        ],
      },
      {
        heading: "What to bring and what to expect",
        paras: [
          "Bring the coins as they are, mixed types and countries included — loose, in 2x2 flips, in tubes, or in old collection folders — with any tickets or graded holders kept alongside. A photo ID is needed from every seller, as always.",
          "There is no need to arrange a visit. Drop by while we are open for a free, patient appraisal explained clearly, and the decision stays with you: accept the offer and you are paid straight away, or keep your coins and go with nothing owed.",
        ],
      },
    ],
    faqs: [
      { q: "How do you value a 20 Francs or similar European coin?", a: "We take its fineness and weight — usually 90% gold in a fixed fractional size — and price that gold content against the live market. Any collector premium for a scarce date, type, or grade is then added where it genuinely applies." },
      { q: "I have a mix of old European coins — will you take them all?", a: "Yes. Sovereigns, Francs, Coronas, Ducats, Guilders, Marks and more can all be sold together. We sort them by type, weigh and value each on its own gold, and total the offer in front of you." },
      { q: "Are these coins worth only their gold?", a: "Gold sets the floor for every coin. Beyond that, rarer years, mint marks, and higher grades can lift certain pieces above melt, and our buyer flags those and prices the premium in when collectors support it." },
      { q: "Do you buy Ducats and other unusual denominations?", a: "We do — Austrian and Dutch Ducats, restrikes, and less common European denominations are all bought. Each is valued on its precise gold weight, plus any numismatic premium the specific coin carries." },
    ],
    related: [
      { href: "/coins/sell-gold-coins", label: "All gold coins we buy" },
      { href: "/coins/sell-gold-coins/british-gold-coins", label: "Sell British gold coins" },
      { href: "/locations", label: "Our 4 Northern Virginia locations" },
    ],
  },
};

// Single source of truth for which coin item pages exist. Consumed by
// generateStaticParams below AND by sitemap.ts, so the sitemap can never drift
// out of sync with the pages actually generated.
export const COIN_ITEM_SLUGS = Object.keys(ITEM_PAGES);

const key = (category: string, sub: string, item: string) => `${category}/${sub}/${item}`;

export function generateStaticParams() {
  return Object.keys(ITEM_PAGES).map((k) => {
    const [category, sub, item] = k.split("/");
    return { category, sub, item };
  });
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; sub: string; item: string }>;
}): Promise<Metadata> {
  const { category, sub, item } = await params;
  const page = ITEM_PAGES[key(category, sub, item)];
  if (!page) return {};
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: `/${category}/${sub}/${item}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription, images: ["/og/og-image.jpg"] },
  };
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ category: string; sub: string; item: string }>;
}) {
  const { category, sub, item } = await params;
  const page = ITEM_PAGES[key(category, sub, item)];
  if (!page) notFound();

  // Parent crumb label from data — "Gold Coins" was hardcoded, mislabeling the
  // 11 silver pages (visible breadcrumb AND BreadcrumbList schema).
  const parentCrumb = getSubcategory(category, sub)?.name ?? "Coins";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: parentCrumb, url: `/${category}/${sub}` },
          { name: page.crumb, url: `/${category}/${sub}/${item}` },
        ]}
      />
      {page.faqs && page.faqs.length > 0 && <FaqJsonLd faqs={page.faqs} />}
      <PageHero
        eyebrow={page.eyebrow}
        crumbs={[
          { name: "Home", href: "/" },
          { name: parentCrumb, href: `/${category}/${sub}` },
          { name: page.crumb, href: `/${category}/${sub}/${item}` },
        ]}
        title={page.title}
        description={page.description}
      />

      <section className="container-page pt-20 pb-10">
        <CoinListingGrid coins={page.coins} label={page.label} />
      </section>

      {/* Coin-specific depth (Wave 3): pricing/process, related links, FAQs. */}
      {page.sections?.map((sec) => (
        <section key={sec.heading} className="container-page py-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-foreground">{sec.heading}</h2>
            {sec.paras.map((p, i) => (
              <p key={i} className="mt-4 text-base leading-relaxed text-muted">{p}</p>
            ))}
          </div>
        </section>
      ))}

      {page.related && page.related.length > 0 && (
        <section className="container-page pt-4 pb-2">
          <div className="mx-auto max-w-3xl flex flex-wrap gap-2.5">
            {page.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="inline-flex items-center gap-1 rounded-full border border-gold-500/40 px-4 py-2 text-sm font-medium text-gold-700 transition-colors hover:bg-gold-50"
              >
                {r.label} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {page.faqs && page.faqs.length > 0 && (
        <section className="mt-14 bg-cream-100 py-12 sm:py-16">
          <div className="container-page">
            <SectionHeading eyebrow="FAQ" title={<><span className="font-extrabold">{page.crumb}:</span> common questions</>} />
            <div className="mx-auto mt-10 max-w-3xl divide-y divide-hairline">
              {page.faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.05}>
                  <details className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium text-foreground">
                      {f.q}
                      <span className="text-gold-500 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-muted">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
