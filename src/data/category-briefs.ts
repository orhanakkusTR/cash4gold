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
    headline: "We Pay 90% of Spot for Gold Coins — No Haggling, No Games",
    description:
      "We pay 90% of the current gold spot price for standard bullion gold coins — and we'll tell you exactly how we got there. Every calculation is done in front of you, on camera, in a secure setting. The evaluation is free.\n\nHave a rare coin? We know numismatics too. Key dates, mint marks, and collector demand can push your offer above melt value. Bring it in and find out what you actually have.",
    whatWeBuy:
      "American Gold Eagles, Canadian Maple Leafs, South African Krugerrands, Mexican Gold Pesos, pre-1933 US gold coins, and any gold bullion coins.",
    pricing:
      "Standard bullion coins: 90% of live spot price. Rare or numismatic coins: evaluated for collector premium above melt value. All calculations shown to you on the spot.",
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

  "precious-metals/sell-bullion-bars": {
    headline: "We Pay 90% of Spot for Gold, 85% for Silver Bullion — Every Time",
    description:
      "No surprises, no lowball offers. We pay 90% of spot for gold bullion and 85% for .999 silver bullion — and we show you the math before you decide. Every bar is verified for authenticity, weighed on calibrated scales, and evaluated on camera in a fully secured environment. The check is free.",
    whatWeBuy:
      "Gold and silver bars and rounds of all sizes — PAMP, Credit Suisse, Engelhard, Johnson Matthey, and other recognized mints. .999 fine silver bars and rounds. Ingots and privately minted rounds also considered.",
    pricing:
      "Gold bullion: 90% of live spot price. .999 silver bullion: 85% of live spot price. Weight and purity verified on site. All calculations shown to you before you decide.",
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
