// Per-page content briefs supplied by the business ("Category Content — Developer
// Handoff"). Keyed by full route path "category/sub". When a brief exists, the
// page hero shows the H1 "We Buy {name}" UNCHANGED with the `headline` below it,
// and the body renders Description, What We Buy, and Pricing Methodology sections.
// Twin pages (Rolex/Luxury, Estate/Antique) intentionally share the same brief.
export type CategoryBrief = {
  headline: string;
  description: string; // paragraphs separated by a blank line (\n\n)
  whatWeBuy: string;
  pricing: string;
};

export const CATEGORY_BRIEFS: Record<string, CategoryBrief> = {
  "jewelry/sell-gold-jewelry": {
    headline: "We Know Exactly What Your Gold Is Worth — Down to the Precise Karat",
    description:
      "Gold jewelry comes in all forms and from every corner of the world — and every piece is different. We use an XRF gold analyzer, the same technology used by refineries, to identify the exact karat and purity of your jewelry on the spot. No guessing, no estimates, no surprises.\n\nThe evaluation is free, done on camera, right in front of you, in a fully secured environment. You see every reading, we explain every number, and you decide — no pressure. If you like the offer, you get paid before you leave.",
    whatWeBuy:
      "Gold jewelry from all countries and all karats — 8K, 9K, 10K, 14K, 18K, 21K, 22K, 24K and everything in between. Rings, necklaces, bracelets, earrings, pendants, chains, charms — wearable or broken.",
    pricing:
      "Tested with XRF analyzer for exact karat and purity. Weighed on calibrated scales. Priced against the live gold spot price. Every number shown to you before you decide.",
  },

  "jewelry/sell-your-scrap-gold-jewelry": {
    headline: "Broken Gold Is Still Gold — We Pay Full Value No Matter the Condition",
    description:
      "A broken chain, a bent ring, a single earring with no match — if it's gold, it has value. Condition means nothing to us. What matters is the gold content, and we measure that precisely with our XRF analyzer.\n\nBring it in. The check is free, done on camera in front of you, in a secure setting. We test it, weigh it, show you the numbers, and make you an offer. You get paid before you leave.",
    whatWeBuy:
      "Broken chains, bent rings, mismatched earrings, gold nuggets, gold flakes, gold wire, dental gold, any gold scrap — all karats.",
    pricing:
      "XRF tested for exact purity. Priced by weight against live spot price. Condition does not affect payout — only gold content matters.",
  },

  "jewelry/sell-silver-jewelry": {
    headline: "Your Silver Is Worth More Than You Think — Find Out Today",
    description:
      "Most people have no idea what their silver jewelry is actually worth. Sterling silver fluctuates with the market daily, and the difference between a low offer and a fair one can be significant.\n\nWe test every piece in front of you, on camera, in a secure environment. The evaluation is completely free. We show you the purity, the weight, and the current spot price — then we make you an offer. You get paid before you leave.",
    whatWeBuy:
      "Sterling silver rings, necklaces, bracelets, earrings, pendants, chains — marked .925, sterling, or tested on site.",
    pricing:
      "Tested for purity, weighed on calibrated scales, priced against live silver spot price. Every step explained before you decide.",
  },

  "coins/sell-gold-coins": {
    headline: "Standard Gold Bullion Coins Pay 85-90% of Spot — No Haggling, No Games",
    description:
      "We typically pay 85-90% of the current gold spot price for standard bullion gold coins — and we'll tell you exactly how we got there. Every calculation is done in front of you, on camera, in a secure setting. The evaluation is free.\n\nHave a rare coin? We know numismatics too. Key dates, mint marks, and collector demand can push your offer above melt value. Bring it in and find out what you actually have.",
    whatWeBuy:
      "American Gold Eagles, Canadian Maple Leafs, South African Krugerrands, Mexican Gold Pesos, pre-1933 US gold coins, and any gold bullion coins.",
    pricing:
      "Standard bullion coins: typically 85-90% of live spot price. Rare or numismatic coins: evaluated for collector premium above melt value. All calculations shown to you on the spot.",
  },

  "coins/sell-silver-coins": {
    headline: "We Buy Silver Coins — Junk Silver, Rare Collectibles & Everything In Between",
    description:
      "Got a jar of old coins? A collection you inherited? We pay competitive rates based on current silver spot price — and we walk you through exactly how we calculated your offer. On camera, in front of you, in a secure environment. No charge to check.\n\nRare coins get special attention. If you have key dates or coins in exceptional condition, we evaluate them for numismatic value too.",
    whatWeBuy:
      "Pre-1965 US silver coins (dimes, quarters, half dollars), Morgan and Peace silver dollars, Walking Liberty half dollars, foreign silver coins, silver proof sets.",
    pricing:
      "Priced competitively based on silver content and current spot price. Rare or key-date coins evaluated for numismatic premium. All shown to you before you decide.",
  },

  // orphan — not rendered, kept for future bullion-bars page
  "precious-metals/sell-bullion-bars": {
    headline: "Bullion Bars & Rounds Paid at 85-90% of Live Spot — Every Time",
    description:
      "No surprises, no lowball offers. Standard gold and silver bullion typically brings 85-90% of the live spot price — and we show you the math before you decide. Every bar is verified for authenticity, weighed on calibrated scales, and evaluated on camera in a fully secured environment. The check is free.",
    whatWeBuy:
      "Gold and silver bars and rounds of all sizes — PAMP, Credit Suisse, Engelhard, Johnson Matthey, and other recognized mints. .999 fine silver bars and rounds. Ingots and privately minted rounds also considered.",
    pricing:
      "Standard gold and silver bullion: typically 85-90% of live spot price. Weight and purity verified on site. All calculations shown to you before you decide.",
  },

  "precious-stones/sell-diamonds": {
    headline: "We Buy Certified Diamonds — GIA, IGI, AGS & Major Certifications Accepted",
    description:
      "We buy diamonds that meet our standards — and we pay serious prices for them. If you have a certified diamond of 1.5 carats or above with a GIA, IGI, AGS, HRD, or equivalent internationally recognized certificate, bring it in. We evaluate it fairly, explain our offer, and you get paid before you leave.\n\nNot sure if your diamond qualifies? Call us before you come in — we'll tell you in 60 seconds.",
    whatWeBuy:
      "Loose certified diamonds 1.5 carats and above — GIA, IGI, AGS, HRD, or equivalent internationally recognized certification required. Round, princess, oval, emerald, and other cuts accepted. We do not buy: diamonds under 1.5 carats, uncertified stones, lab-grown diamonds, or diamonds with certificates from unrecognized grading labs.",
    pricing:
      "Diamonds evaluated on the 4Cs (cut, color, clarity, carat) as stated on the certificate, cross-referenced with current market pricing. We show you our evaluation before you decide.",
  },

  "watches/sell-rolex": {
    headline: "We Know the Watch Market — Get a Real Offer From People Who Do This Every Day",
    description:
      "Luxury watches are not like gold — you can't just weigh them. Market value depends on brand, model, reference number, condition, service history, and whether you have the original box and papers. We know all of this, and we research current secondary market prices before we make an offer.\n\nThe evaluation is free, done on camera, in a secure environment. No pressure, no rush. You get paid before you leave.",
    whatWeBuy:
      "Rolex (all models and references), Omega, Cartier, Breitling, TAG Heuer, Patek Philippe, Audemars Piguet, and other recognized luxury watch brands.",
    pricing:
      "Evaluated on brand, model, reference, condition, and current secondary market prices. Box and papers increase value. We research before we offer — no guessing.",
  },
  "watches/sell-luxury-watches": {
    headline: "We Know the Watch Market — Get a Real Offer From People Who Do This Every Day",
    description:
      "Luxury watches are not like gold — you can't just weigh them. Market value depends on brand, model, reference number, condition, service history, and whether you have the original box and papers. We know all of this, and we research current secondary market prices before we make an offer.\n\nThe evaluation is free, done on camera, in a secure environment. No pressure, no rush. You get paid before you leave.",
    whatWeBuy:
      "Rolex (all models and references), Omega, Cartier, Breitling, TAG Heuer, Patek Philippe, Audemars Piguet, and other recognized luxury watch brands.",
    pricing:
      "Evaluated on brand, model, reference, condition, and current secondary market prices. Box and papers increase value. We research before we offer — no guessing.",
  },

  "precious-metals/sell-platinum": {
    headline: "Platinum Is Rarer Than Gold — We Pay Accordingly",
    description:
      "Platinum is one of the rarest precious metals on earth, and most buyers don't pay what it's actually worth. We do. We test every piece with precision tools, weigh it on calibrated scales, and price it against the live platinum spot price — all in front of you, on camera, in a secure environment. Free to check.",
    whatWeBuy:
      "Platinum rings, bracelets, necklaces, pendants, estate platinum jewelry — marked PT950, PT900, PLAT, or tested on site.",
    pricing:
      "Tested for purity, weighed on calibrated scales, priced against live platinum spot price. Every number explained before you decide.",
  },

  "precious-metals/sell-sterling-silver-sets": {
    headline: "That Silver Set in Your Cabinet Is Worth Real Money — We'll Prove It",
    description:
      "Inherited silverware you never use? A flatware set collecting dust? Sterling silver is priced by weight and silver content — and with silver prices where they are, you may be sitting on more than you think.\n\nBring it in. We weigh everything in front of you, on camera, in a secure setting. The check is free. We explain every number and make you an offer. You get paid before you leave.",
    whatWeBuy:
      "Sterling silver flatware sets, serving pieces, tea sets, candlesticks, trays, hollowware — marked .925 or sterling. Weighted and hollow pieces accepted; we account for both appropriately.",
    pricing:
      "Weighed and priced based on actual silver content against live spot price. Weighted or hollow pieces assessed separately. All shown to you before you decide.",
  },

  "jewelry/sell-designer-jewelry": {
    headline: "Tiffany, Cartier, David Yurman — We Know What Designer Pieces Are Really Worth",
    description:
      "Designer jewelry holds value beyond the metal — and most buyers only pay you for the metal. We evaluate name brand pieces for what they actually are: brand, craftsmanship, and collector demand included. The evaluation is free, done on camera, in a secure environment.",
    whatWeBuy:
      "Tiffany & Co., Cartier, David Yurman, Bulgari, Van Cleef & Arpels, Pandora, and other recognized jewelry brands.",
    pricing:
      "Evaluated on metal content, gemstones, and brand premium. Designer pieces can command prices well above melt value. All explained to you before you decide.",
  },

  "precious-metals/sell-your-palladium": {
    headline: "Most Buyers Don't Know What Palladium Is Worth — We Do",
    description:
      "Palladium is a rare precious metal in the platinum group — and most gold buyers either don't recognize it or won't pay fairly for it. We test every piece with precision tools, identify the exact purity, and pay based on the live palladium spot price. Free to check, done on camera, in a secure environment.",
    whatWeBuy:
      "Palladium rings, bracelets, pendants, loose palladium, palladium scrap — marked PD500, PD950, or tested on site.",
    pricing:
      "Tested for purity, weighed on calibrated scales, priced against live palladium spot price. Every step shown to you.",
  },

  "jewelry/sell-your-estate-jewelry": {
    headline: "Old Jewelry Tells a Story — We Read It and Pay You What It's Worth",
    description:
      "Estate and antique jewelry can be worth significantly more than its metal content alone. Art Deco brooches, Victorian lockets, signed mid-century pieces — age, condition, maker, and collector demand all factor into the real value. We know the difference, and we evaluate accordingly.\n\nFree to check. Done on camera. Secure environment. You get paid before you leave.",
    whatWeBuy:
      "Victorian, Edwardian, Art Deco, Art Nouveau, and Mid-Century jewelry. Estate rings, brooches, pins, lockets, cameos, vintage signed pieces.",
    pricing:
      "Evaluated on metal content, gemstones, age, condition, and collector desirability. Rare or signed pieces may receive a premium above melt value.",
  },
  "jewelry/sell-your-antique-jewelry": {
    headline: "Old Jewelry Tells a Story — We Read It and Pay You What It's Worth",
    description:
      "Estate and antique jewelry can be worth significantly more than its metal content alone. Art Deco brooches, Victorian lockets, signed mid-century pieces — age, condition, maker, and collector demand all factor into the real value. We know the difference, and we evaluate accordingly.\n\nFree to check. Done on camera. Secure environment. You get paid before you leave.",
    whatWeBuy:
      "Victorian, Edwardian, Art Deco, Art Nouveau, and Mid-Century jewelry. Estate rings, brooches, pins, lockets, cameos, vintage signed pieces.",
    pricing:
      "Evaluated on metal content, gemstones, age, condition, and collector desirability. Rare or signed pieces may receive a premium above melt value.",
  },

  "precious-metals/sell-dental-gold": {
    headline: "That Old Crown in Your Drawer Is Worth More Than You Think",
    description:
      "Gold dental crowns, bridges, and fillings are made from real gold alloys — and they have real value. Most people throw them away without knowing what they're worth. Don't. Bring them in, we test them for exact gold content, weigh them, and pay you on the spot.\n\nFree to check. On camera. Secure environment. You get paid before you leave.",
    whatWeBuy: "Gold dental crowns, bridges, fillings, inlays, onlays, and mixed dental alloy scrap.",
    pricing:
      "Tested for gold content, weighed on calibrated scales, priced against live spot price. Alloy composition affects payout — we explain everything before you decide.",
  },

  "precious-metals/sell-gold-filled-plated": {
    headline: "Gold Filled or Gold Plated? Here's the Difference — and What We Can Buy",
    description:
      "Not everything that looks like gold is the same. Gold filled items have a real layer of gold mechanically bonded to a base metal — they do have value. Gold plated items have only a microscopic coating — typically too thin to buy.\n\nNot sure what you have? Bring it in. We'll test it for free, on camera, in a secure environment, and tell you exactly what it is and what — if anything — we can offer.",
    whatWeBuy:
      "Gold filled jewelry and items marked GF, 1/20 14K, or 1/10 10K — evaluated on a case by case basis. Gold plated items: we typically cannot purchase due to minimal gold content.",
    pricing:
      "Gold filled items tested and assessed for gold layer content and weight. Payout depends on gold content. Gold plated items generally cannot be purchased — but we'll always tell you why.",
  },
};

export const getBrief = (path: string): CategoryBrief | undefined => CATEGORY_BRIEFS[path];

// -----------------------------------------------------------------------------
// Per-page FAQs (Wave 3 / P1-14). Replaces the old boilerplate catFaqs/subFaqs
// templates that basted the same three questions onto every category and
// subcategory page. Keyed by route path: top-level category slug ("coins") and
// full subcategory path ("coins/sell-gold-coins"). Each page's visible FAQ
// accordion AND its FAQPage JSON-LD both read from the SAME array here, so the
// structured data always matches the questions on the page.
//
// Honesty (YMYL): every answer restates only facts the business already
// publishes on that page (purity, the 85-90%-of-spot bullion range, what we
// do/don't buy). No invented mintages, no fabricated pricing, no store
// anecdotes. Uniqueness: no two pages share an 8-word run — enforced by
// scripts/faq-uniqueness.mjs.
export type FaqItem = { q: string; a: string };

export const PAGE_FAQS: Record<string, FaqItem[]> = {
  // ===== Category pages (5) =====
  jewelry: [
    { q: "What kinds of jewelry do you buy?", a: "Gold, silver, and platinum jewelry in any condition, plus recognized designer names and diamond pieces — rings, chains, bracelets, earrings, pendants, and broken or single items alike." },
    { q: "Does my jewelry have to be in good condition?", a: "Not at all. Broken chains, bent rings, and unmatched earrings are valued on their metal content and any stones, so damaged pieces are worth just as much as wearable ones." },
    { q: "How do you decide what a piece is worth?", a: "We identify the metal and karat with an XRF analyzer, weigh it, and price it against the live market; designer or gem-set pieces are then assessed for brand and stone value on top." },
  ],
  "precious-metals": [
    { q: "Which metals do you buy?", a: "All four precious metals — gold, silver, platinum, and palladium — in every form, from jewelry and coins to bars, rounds, and industrial scrap." },
    { q: "How is a precious-metal offer calculated?", a: "Each item is tested for purity and weighed on a calibrated scale, then priced against that metal's live spot figure the day you visit, with the math shown openly." },
    { q: "Is there a minimum amount I can sell?", a: "No minimum and no appraisal fee. A single ring is as welcome as a box of bullion, and you owe nothing if you decline the offer." },
  ],
  "precious-stones": [
    { q: "What diamonds do you buy?", a: "Loose certified diamonds of 1.5 carats and above carrying a report from GIA, IGI, AGS, HRD, or another internationally recognized lab." },
    { q: "What don't you buy?", a: "We do not purchase diamonds under one and a half carats, uncertified stones, lab-grown diamonds, or stones graded by labs we do not recognize." },
    { q: "Can I sell a diamond that is still in its ring?", a: "Yes — we buy the mounted center stone along with the gold or platinum setting at its live metal value, so the whole piece sells at once." },
  ],
  coins: [
    { q: "What types of coins do you buy?", a: "US and foreign gold and silver coins, Morgan and Peace dollars, American Eagles, pre-1933 US gold, graded slabs, and entire inherited collections." },
    { q: "Do you pay only melt value?", a: "No. Every coin is checked for both its metal content and its numismatic worth from date, mint mark, and grade, and you are paid on whichever is higher." },
    { q: "Should I clean my coins first?", a: "Please don't. Cleaning can strip a coin's surface and wipe out collector value, and graded coins should stay sealed in their holders." },
  ],
  watches: [
    { q: "Which watch brands do you buy?", a: "Rolex, Omega, Cartier, Breitling, TAG Heuer, Patek Philippe, Audemars Piguet, and other recognized luxury names." },
    { q: "How do you price a luxury watch?", a: "Value comes from the exact brand, model, and reference plus condition and service history, so we research the current secondary-market price rather than weighing the watch." },
    { q: "Do the box and papers matter?", a: "Yes. The original box, papers, and any service records lift what a timepiece is worth, so bring whatever you still have." },
  ],

  // ===== Jewelry subcategories (6) =====
  "jewelry/sell-gold-jewelry": [
    { q: "What karats of gold jewelry do you accept?", a: "Everything from 8K and 9K through 10K, 14K, 18K, 21K, 22K, and 24K, whether the piece is wearable or broken." },
    { q: "How do you confirm the karat?", a: "An XRF analyzer, the same instrument refineries rely on, reads the exact purity on the spot, so the offer rests on a measured number rather than a guess." },
    { q: "Will you buy a single earring or a tangled chain?", a: "Yes. Odd, broken, and mismatched gold is priced purely on its gold content, so it pays the same per gram as an intact piece." },
  ],
  "jewelry/sell-silver-jewelry": [
    { q: "How do you know my jewelry is real silver?", a: "We look for a .925 or sterling stamp and test the piece on site, so plated or non-silver items are caught before any offer is made." },
    { q: "What is silver jewelry worth?", a: "Sterling is priced by weight against the silver market, which moves daily; you see the purity, the weight, and the current figure before deciding." },
    { q: "What silver jewelry do you take?", a: "Sterling rings, necklaces, bracelets, earrings, pendants, and chains, either marked .925 or confirmed by our test." },
  ],
  "jewelry/sell-your-scrap-gold-jewelry": [
    { q: "Does broken gold still have value?", a: "Yes. Condition is irrelevant to scrap; only the gold content matters, and we measure it precisely with an XRF analyzer." },
    { q: "What counts as scrap gold?", a: "Broken chains, bent rings, unmatched earrings, gold nuggets and flakes, gold wire, and dental gold, in any karat." },
    { q: "How is scrap gold priced?", a: "By weight against the day's spot figure once the purity is tested, so a dented or tangled item still pays exactly what its gold is worth." },
  ],
  "jewelry/sell-designer-jewelry": [
    { q: "Which designer brands do you buy?", a: "Tiffany & Co., Cartier, David Yurman, Bulgari, Van Cleef & Arpels, Pandora, and other recognized jewelry houses." },
    { q: "Do you pay more than melt for designer pieces?", a: "Often, yes. A signed piece is valued for its brand, craftsmanship, and collector demand, which can run well above the metal alone." },
    { q: "What if the piece is not signed or I lost the box?", a: "Bring it anyway; we assess the metal and stones regardless, and any brand premium is added where the piece can be authenticated." },
  ],
  "jewelry/sell-your-estate-jewelry": [
    { q: "What is estate jewelry?", a: "Previously owned and often older pieces — Victorian, Edwardian, Art Deco, Art Nouveau, and mid-century rings, brooches, lockets, and cameos." },
    { q: "Is old jewelry worth more than its gold?", a: "It can be. Age, maker, condition, and collector demand may lift a piece above melt, and signed or rare items in particular carry a premium." },
    { q: "Should I have inherited pieces cleaned first?", a: "There is no need, and polishing an older piece is best avoided, since original surfaces matter a great deal to collectors." },
  ],
  "jewelry/sell-your-antique-jewelry": [
    { q: "What makes a piece “antique”?", a: "Jewelry from historical periods such as the Victorian, Edwardian, Art Nouveau, and Art Deco eras, prized for craftsmanship and age rather than metal alone." },
    { q: "How do you value an antique piece?", a: "We weigh its metal and assess any gemstones, then factor in the era, the maker, and how sought-after the style is among today's collectors." },
    { q: "Can cleaning hurt an antique's value?", a: "Yes. A worn patina is often part of the appeal, so leave it untouched and let our buyer judge the piece exactly as found." },
  ],

  // ===== Precious-metals subcategories (7) =====
  "precious-metals/sell-gold": [
    { q: "How do you figure out what my gold is worth?", a: "The live gold price is converted to a per-gram rate, then multiplied by your item's tested karat purity and its weight on our scale." },
    { q: "What forms of gold do you buy?", a: "Jewelry from 10K to 24K, scrap and broken pieces, dental gold, coins, and bars; recognized gold bars and rounds typically bring 85-90% of the live gold spot price." },
    { q: "Can I estimate my payout before visiting?", a: "Knowing your item's karat and weight lets you ballpark the range, and we confirm both by testing right in front of you when you arrive." },
  ],
  "precious-metals/sell-silver": [
    { q: "What silver do you buy?", a: "Sterling jewelry and flatware, silver bullion bars and rounds, and pre-1965 US 90% silver coins." },
    { q: "How do you price silver bullion?", a: "On .999 silver bars and rounds the offer typically runs 85-90% of the live silver spot price, with the weight and purity verified in front of you." },
    { q: "Is it worth selling a large lot of silver?", a: "Very much so. Because silver trades far below gold per ounce, quantity adds up quickly, and big lots are as welcome as single pieces." },
  ],
  "precious-metals/sell-platinum": [
    { q: "How do I know if my ring is platinum?", a: "Platinum is usually stamped 950 or PLAT, and we test white-metal pieces to separate platinum from white gold, since the two are easily confused." },
    { q: "Why is platinum valued differently from gold?", a: "It is rarer and denser, so even a modest band can hold meaningful value; the offer is set against the live platinum spot figure." },
    { q: "What platinum items do you take?", a: "Platinum jewelry, wedding bands, settings, bars, bullion, and coins." },
  ],
  "precious-metals/sell-your-palladium": [
    { q: "What is palladium, and do you buy it?", a: "Palladium is a rare platinum-group metal that many buyers overlook; we purchase palladium bullion, bars, rounds, coins, and jewelry." },
    { q: "How is palladium priced?", a: "On its tested purity and weight against the current palladium market, which can move sharply, so the offer reflects the spot figure the day you visit." },
    { q: "Could my palladium be mistaken for something else?", a: "Easily. It is often confused with platinum or white gold, so we test each piece to be sure you are paid for the right metal." },
  ],
  "precious-metals/sell-sterling-silver-sets": [
    { q: "How is a silver flatware set valued?", a: "Every piece is weighed on a calibrated scale and priced on its actual silver content against the market, not on its resale as tableware." },
    { q: "What about weighted or hollow pieces?", a: "Candlesticks and some handles hold non-silver filler for stability; we account for that honestly so you are paid only for the real silver." },
    { q: "Do I need to polish the set first?", a: "No. Polishing changes nothing, since value rests on silver weight, and a full service often adds up to more than owners expect." },
  ],
  "precious-metals/sell-dental-gold": [
    { q: "Is dental gold actually worth money?", a: "Yes. Crowns, bridges, and fillings are made from genuine gold alloys, and we test them for their real gold content instead of writing them off." },
    { q: "Do I need to remove tooth material from a crown?", a: "No; attached tooth is fine, and it is accounted for when the offer is calculated on the gold alone." },
    { q: "How is dental gold priced?", a: "It is tested with an XRF analyzer and weighed, then valued at the live gold price, with the alloy's purity reflected in the figure." },
  ],
  "precious-metals/sell-gold-filled-plated": [
    { q: "What is the difference between gold filled and gold plated?", a: "Gold filled carries a real, legally specified layer of gold bonded to a base metal; gold plated has only a microscopic coating that is usually too thin to buy." },
    { q: "Can you buy my gold plated items?", a: "Generally no, because the coating holds too little gold to carry value, but we test them for free and tell you plainly what you have." },
    { q: "How do I know which one I own?", a: "Marks like GF, 1/20 14K, or 1/10 10K point to gold filled; if you are unsure, bring it in and we identify it at no charge." },
  ],

  // ===== Precious-stones subcategory (1) =====
  "precious-stones/sell-diamonds": [
    { q: "What diamonds do you buy?", a: "We take loose diamonds of one and a half carats or more that carry a GIA, IGI, AGS, or HRD grading report." },
    { q: "How is my diamond's price determined?", a: "We read the 4Cs — cut, color, clarity, and carat — exactly as your certificate states, then cross-reference the current diamond market." },
    { q: "What kinds of diamonds do you turn away?", a: "Stones below the 1.5-carat threshold, any uncertified or lab-grown diamond, and certificates from labs outside the recognized list." },
  ],

  // ===== Coins subcategories (4) =====
  "coins/sell-gold-coins": [
    { q: "How much do you pay for bullion gold coins?", a: "Standard bullion coins such as Gold Eagles, Buffalos, Krugerrands, and Maple Leafs typically pay 85-90% of gold's live spot price." },
    { q: "Can a gold coin be worth more than its metal?", a: "Yes. Proof, graded, and key-date coins can carry a collector premium, so bring any certificates or original packaging you have kept." },
    { q: "Which gold coins do you buy?", a: "American Gold Eagles and Buffalos, Krugerrands, Maple Leafs, Britannias, pre-1933 US gold, and foreign gold coins." },
  ],
  "coins/sell-silver-coins": [
    { q: "What silver coins do you buy?", a: "American Silver Eagles, Morgan and Peace dollars, pre-1965 US 90% silver, half dollars, quarters, and foreign silver, by the coin or the bag." },
    { q: "How is junk silver priced?", a: "Pre-1965 90% silver is weighed and paid on its silver content at the live spot price, while key dates are pulled out and valued individually." },
    { q: "Do you pay extra for rare silver coins?", a: "Yes. A coin's date, mint mark, or condition can add numismatic value above melt, so better-grade pieces are assessed one at a time." },
  ],
  "coins/sell-collectible-coins": [
    { q: "What makes a coin collectible?", a: "Rarity and condition. Key dates, mint-mark varieties, error coins, proof and mint sets, and PCGS or NGC graded slabs are valued for what collectors pay." },
    { q: "How do you price a graded coin?", a: "On the factors collectors actually reward — date, mintage, grade, and demand — rather than metal weight, and we explain how each piece is judged." },
    { q: "Should slabbed coins stay in their holders?", a: "Yes. Leave graded coins sealed and avoid cleaning raw ones, since a cleaned surface can sharply reduce a collectible coin's value." },
  ],
  "coins/sell-antique-coins": [
    { q: "What counts as an antique coin?", a: "Ancient Greek, Roman, and Byzantine issues, colonial and early US coppers and silver, gold sovereigns, and early world coinage." },
    { q: "Are antique coins valued only on their metal?", a: "No. Age, origin, rarity, and condition often carry historical and collector worth well beyond the gold or silver they contain." },
    { q: "Can I clean an old coin before selling?", a: "Please leave it be; cleaning an antique coin can destroy much of its value, so keep the patina and any holders intact." },
  ],

  // ===== Watches subcategories (2) =====
  "watches/sell-rolex": [
    { q: "Which Rolex models do you buy?", a: "Every reference — Submariner, Datejust, Daytona, GMT-Master, Day-Date, Oyster Perpetual, Explorer, and vintage or discontinued pieces." },
    { q: "How do you price a Rolex?", a: "On its exact reference number, condition, and current secondary-market demand; steel sports models and the Daytona in particular can command strong premiums." },
    { q: "Do I need the box and papers?", a: "They are not required, but keeping the box, papers, and service history raises the offer, so bring anything that came with the watch." },
  ],
  "watches/sell-luxury-watches": [
    { q: "Which luxury brands besides Rolex do you buy?", a: "Omega, Cartier, Patek Philippe, Audemars Piguet, Breitling, and TAG Heuer, among other recognized makers." },
    { q: "How is my watch's value determined?", a: "We assess the brand, model, reference, condition, and service history, then check current secondary-market prices so the offer reflects real demand." },
    { q: "Does paperwork affect the offer?", a: "Yes. Documentation like the original box, papers, and service records adds real value, so bring whatever you have held onto." },
  ],
};

export const getFaqs = (path: string): FaqItem[] | undefined => PAGE_FAQS[path];
