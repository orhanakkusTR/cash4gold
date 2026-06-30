// Blog content pulled from the original cashforgoldva.com so the same URLs and
// titles are preserved (SEO continuity). Post bodies will be rewritten later;
// `body` (markdown) is filled in as real copy is brought over. Until then the
// page falls back to a name-templated placeholder so the design is reviewable.
//
// IMPORTANT: `slug` is a ROOT-LEVEL path (no /blog/ prefix) to match the legacy
// permalinks exactly, e.g. /gold-price-today. These are
// served by the single top-level dynamic route (src/app/[category]/page.tsx),
// which dispatches to the blog article when the slug is not a category.

export type BlogPost = {
  slug: string; // root-level, no leading slash
  title: string; // preserved verbatim from the legacy site; also the page H1
  seoTitle?: string; // distinct <title> for SERPs (≤70 chars, differs from H1)
  date: string; // ISO publish date (legacy date kept)
  category: string; // topical tag for display/filtering
  excerpt: string; // lead/summary
  body?: string; // markdown; filled as real content is migrated
  image?: string; // optional per-post cover override; falls back to BLOG_COVERS
};

export const BLOG_AUTHOR = "Cash for Gold VA";

// Newest first. Dates and titles match the legacy blog exactly.
export const POSTS: BlogPost[] = [
  {
    slug: "gold-price-today",
    title: "Gold Price Today: How to Read It and What It Means When You Sell",
    seoTitle: "Gold Price Today: What Your Gold Is Worth | Cash for Gold VA",
    date: "2026-02-26",
    category: "Gold Prices",
    excerpt:
      "The gold price today moves every few seconds, but the number in the headline is not the number you get paid. Here is how the daily spot price works, how it converts to what your gold is actually worth by gram and karat, and how to use it before you sell in Northern Virginia.",
    body: `Open any finance app and you will see a single figure for the gold price today. It updates every few seconds, jumps on news, and is quoted per troy ounce. What that figure does not tell you is the one thing you actually want to know: what your specific ring, chain, or coin is worth in cash right now.

We weigh and test gold across our four Northern Virginia stores every day, and the most common question we hear is some version of "the price is $X, so why is my offer different?" The short answer is that the headline price is for one troy ounce of pure gold, and almost nothing in your jewelry box is pure or weighs exactly an ounce. This guide shows you how to read the daily price and translate it into a realistic number before you ever walk in.

## What "the gold price today" actually measures

The price you see quoted is the **spot price**: the cost of one troy ounce of 24-karat (99.9% pure) gold for immediate delivery on the global market. A few things follow from that definition:

- **It is per troy ounce**, which is 31.1 grams, not the standard 28.35-gram ounce.
- **It is for pure gold.** Your 14k chain is only 58.3% gold by weight, so it is worth a little over half the spot price per gram.
- **It changes constantly** during market hours as traders react to interest rates, the dollar, and global demand.

So when a headline says gold is up, that is true for a pure ounce traded between banks. Your payout moves in the same direction, but it starts from your item's actual purity and weight.

## From spot price to your payout, step by step

Every honest offer is built from the same simple math. Here is the method we use in store, in the open, on a calibrated scale:

1. **Weigh the item** in grams.
2. **Find the spot price per gram.** Divide the per-ounce spot price by 31.1.
3. **Adjust for purity (karat).** Multiply by the gold fraction for that karat.
4. **Account for refining.** A small, standard refining margin is subtracted, because scrap gold has to be melted and assayed before it re-enters the market.

The purity fractions you need:

| Karat | Gold content | Stamp you may see |
|---|---|---|
| 24k | 99.9% | 999 |
| 18k | 75.0% | 750 |
| 14k | 58.3% | 585 |
| 10k | 41.7% | 417 |

**A worked example.** Say gold is quoted at $2,400 per troy ounce. That is about $77.17 per gram of pure gold. For a 14k chain weighing 20 grams:

> $77.17 per gram × 0.583 (14k purity) × 20 grams = about **$900 in pure-gold value** before the refining margin.

The same 20-gram chain in 10k would carry roughly $643 in gold value, because it holds less gold. This is why two chains that look identical can be worth very different amounts: karat and weight drive everything.

You do not have to do this by hand. Our [gold value calculator](/gold-calculator) pulls the live price and runs the same math in seconds, so you can get a realistic range at your kitchen table.

## Should you wait for a better price?

This is the honest part. Day-to-day gold moves are usually small, often well under one percent. On a typical piece of jewelry, waiting a few days for a slightly higher quote might change your payout by a few dollars, not a few hundred. Trying to time the exact top is something even professional traders rarely get right.

What matters far more than the perfect day is:

- **Selling at a fair share of spot.** A trustworthy buyer pays a transparent percentage of the live value, not a flat lowball.
- **Knowing your karat and weight** before you go, so you can sanity-check any offer.
- **Avoiding mail-in services** that quote you after your gold has already left your hands.

If you are holding **investment-grade bullion or recognized coins** rather than scrap jewelry, the calculation is different. Coins like the American Gold Eagle carry a premium over melt value, so timing and buyer choice matter more there.

## How we set offers in Northern Virginia

At Cash for Gold VA, every offer starts from the live spot price on the day you visit. We test purity in front of you, confirm weight on a calibrated scale, and explain the number out loud before you decide. There is never any obligation to sell, and our offers are always a range tied to the real market, never a single take-it-or-leave-it figure.

That transparency is why we hold a 4.9-star rating across hundreds of Google reviews. You can bring your items to any of our four locations:

- **Annandale**: 7262 Columbia Pike
- **Manassas**: 9013 Centreville Rd
- **Chantilly**: 14025 Lee Jackson Memorial Hwy
- **Vienna / McLean**: 8453 Tyco Rd #C

## Frequently asked questions

**What is the gold price today, and where can I check it?**
The live spot price is shown at the top of every page on our site and inside our [gold calculator](/gold-calculator). It reflects the global market for one troy ounce of pure gold and refreshes continuously during trading hours.

**How much is 1 gram of gold worth today?**
Divide the per-ounce spot price by 31.1 to get the pure-gold price per gram, then multiply by your item's purity. For 14k gold, that is roughly 58% of the pure price per gram.

**Will the gold price go up or down?**
No one can predict short-term moves reliably. Gold tends to rise when interest rates fall, the dollar weakens, or global uncertainty climbs, but day-to-day changes are usually small. For most jewelry sellers, the difference between today and next week is minor.

**Does a higher spot price mean a higher offer?**
Yes. Because every offer is built from the live spot price, a higher market price means a higher payout for the same item, all else equal.

Want to know what your specific pieces are worth at today's price? [Run the numbers in our calculator](/gold-calculator) or [stop by any location](/contact-us-cash-for-gold-locations) for a free, no-obligation appraisal.`,
  },
  {
    slug: "cash-for-gold-nova-falls-church-va",
    title: "Cash for Gold in Northern Virginia: A Regional Seller's Guide",
    seoTitle: "Cash for Gold in Northern Virginia | Where to Sell for Cash",
    date: "2025-12-02",
    category: "Locations",
    excerpt:
      "From Falls Church to Manassas, Northern Virginia has plenty of places to sell gold for cash. This regional guide explains how local prices are set, how to spot a fair buyer, and which Cash for Gold VA location is nearest you.",
    body: `Northern Virginia is one of the better places in the country to sell gold. The region is dense with established storefront buyers, demand is steady, and competition keeps offers honest. Whether you are in Falls Church, Annandale, Tysons, or out toward Manassas and Chantilly, you are rarely far from a fair, same-day offer.

This guide takes the regional view: how the local market works, what separates a trustworthy buyer from a tourist trap, and how to choose the right Cash for Gold VA location for where you live.

## The Northern Virginia gold market at a glance

Because so many buyers operate in NoVA, sellers here have leverage that people in rural areas do not. A few things to know about the regional market:

- **Offers track the global spot price.** No matter which city you sell in, a fair offer starts from the same live market price for gold.
- **Storefronts beat mail-in services.** Local buyers compete on reputation, so the better ones pay a transparent share of spot and explain it openly.
- **Reviews are the great equalizer.** A buyer with hundreds of genuine Google reviews has earned trust the hard way. Ours sits at 4.9 stars.

## How a fair offer is calculated, anywhere in NoVA

The math does not change from city to city. An honest buyer takes the live spot price per troy ounce, converts it to a per-gram price (spot divided by 31.1), adjusts for your item's karat purity, and multiplies by the weight. A small refining margin is subtracted because scrap gold has to be melted and re-assayed.

That is the entire formula. If a buyer cannot or will not explain it, that is your signal to walk. You can run the same calculation yourself on any item with our [gold value calculator](/gold-calculator).

## How to spot a trustworthy buyer

Wherever you sell in Northern Virginia, look for these signs:

1. **A physical storefront** you can return to, not a pop-up or kiosk.
2. **Testing and weighing in front of you**, never in a back room.
3. **An offer expressed as a range** tied to the live price, not a single lowball figure.
4. **No pressure and no fee** to get an appraisal.
5. **Verifiable reviews** from real local customers.

## Find your nearest location

Cash for Gold VA has four Northern Virginia stores, so one is usually close by:

- **Annandale**: 7262 Columbia Pike (closest to Falls Church, Bailey's Crossroads, and Springfield)
- **Vienna / McLean**: 8453 Tyco Rd #C (closest to Tysons, McLean, and Oakton)
- **Chantilly**: 14025 Lee Jackson Memorial Hwy (closest to Centreville, Fairfax, Herndon, and [Loudoun County](/cash-for-gold-loudoun-county-va))
- **Manassas**: 9013 Centreville Rd (closest to Gainesville, Bristow, and Prince William County)

Every location buys gold, silver, platinum, diamonds, designer jewelry, luxury watches, and coins, with free appraisals and instant payout.

## What to bring

Bring whatever you are thinking of selling, broken or whole, plus a photo ID. There is no need to sort, clean, or polish anything. We handle the sorting, testing, and weighing, and you decide whether to accept once you see the number.

## Frequently asked questions

**Where is the best place to sell gold in Northern Virginia?**
The best buyer is a local storefront that tests in front of you, pays a transparent share of the live spot price, and has strong reviews. Cash for Gold VA operates four such locations across the region.

**Does the city I sell in change my offer?**
No. A fair offer is built from the global spot price, your karat, and your weight, not your zip code. What changes between buyers is how much of that value they actually pay.

**Can I get an estimate before driving over?**
Yes. Our [calculator](/gold-calculator) gives you a realistic range using the live price, so you know roughly what to expect before you visit.

Find your closest store and [get a free, no-obligation appraisal](/contact-us-cash-for-gold-locations), or [estimate your items now](/gold-calculator).`,
  },
  {
    slug: "finding-the-best-cash-for-gold-options",
    title: "How to Choose a Trustworthy Cash for Gold Buyer",
    seoTitle: "How to Choose a Cash for Gold Buyer | Cash for Gold VA",
    date: "2025-12-02",
    category: "Guides",
    excerpt:
      "Not every gold buyer is created equal. Here are the signs of a trustworthy cash for gold business, the red flags to avoid, and the questions to ask before you hand over a single item.",
    body: `The hardest part of selling gold is not the gold; it is choosing who to sell it to. A search turns up dozens of buyers, from established storefronts to traveling buy-events, and they do not all play fair. Knowing how to tell them apart is the single most valuable skill a seller can have.

After years of buying gold in Northern Virginia, we can tell you that the trustworthy buyers all share the same handful of traits, and the ones to avoid share the same warning signs.

## Signs of a trustworthy buyer

Look for these before you sell anything:

- **A permanent storefront** you can return to, not a pop-up, kiosk, or hotel-ballroom event.
- **Testing and weighing in front of you** on a calibrated scale, never in a back room.
- **Offers tied to the live spot price**, shown as a fair range rather than one flat figure.
- **Free, no-obligation appraisals.** Finding out what your gold is worth should never cost you.
- **Genuine local reviews.** A long track record of real customers is hard to fake.

## Red flags to walk away from

- A buyer who **will not explain** how the offer was calculated.
- **High-pressure tactics** or a price that expires if you do not decide immediately.
- **No physical address** or a location that changes week to week.
- Offers quoted **before testing and weighing** your specific items.
- A request to **mail your gold away** before you see any number.

## Questions to ask any buyer

1. How do you calculate your offer?
2. What is today's spot price, and what share of it am I being paid?
3. Is the appraisal free, and am I under any obligation to sell?
4. Can I watch the testing and weighing?

A buyer who answers all four openly has earned your trust. For more on using reputation to vet a buyer, see our guide on [using reviews to find a trustworthy buyer](/understanding-cash-for-gold-services-reviews). To learn what a fair offer should look like, read [how to get the best cash for gold offer](/finding-the-best-cash-for-gold-offers).

## Where to start

Cash for Gold VA operates four Northern Virginia storefronts, in Annandale, Manassas, Chantilly, and Vienna/McLean, each offering free appraisals, transparent live-price offers, and instant payout. You can also [estimate your gold first](/gold-calculator) so you know what to expect.

## Frequently asked questions

**How do I find a trustworthy cash for gold buyer?**
Choose a permanent storefront that tests in front of you, ties offers to the live spot price, charges nothing for appraisals, and has genuine local reviews. Avoid pop-ups and mail-in services.

**What questions should I ask before selling?**
Ask how the offer is calculated, what share of spot you are paid, whether the appraisal is free, and whether you can watch the testing and weighing.

**Are traveling gold-buying events safe?**
They carry more risk because they lack a permanent location and accountability. A local storefront with a lasting reputation is the safer choice.

Ready to sell with confidence? [Visit any location](/contact-us-cash-for-gold-locations) or [estimate your gold now](/gold-calculator).`,
  },
  {
    slug: "how-bullion-banks-influence-gold-prices",
    title: "How Bullion Banks Influence Gold Prices (and Your Payout)",
    seoTitle: "How Bullion Banks Influence the Gold Price You Are Paid",
    date: "2025-12-02",
    category: "Precious Metals",
    excerpt:
      "Bullion banks sit at the center of the gold market, and their activity helps set the spot price your offer is based on. Here is how that chain connects the global market to the cash you receive locally.",
    body: `Most people selling a gold chain never think about bullion banks, yet these institutions help set the very price their offer is built on. Understanding the connection demystifies why your payout moves day to day and why a transparent buyer always points back to the same global number.

This is the companion to our overview of what bullion banks are. Here we focus on the practical link: how the global market reaches the counter where you sell.

## From the global market to your offer

The gold price is set on global wholesale markets where bullion banks are the primary players. They trade enormous volumes, provide liquidity, and help establish the benchmark spot price quoted worldwide. That spot price then flows downstream:

1. **Bullion banks and global markets** establish the live spot price for pure gold.
2. **Refiners and dealers** price physical gold off that benchmark.
3. **Local buyers** like us base every offer on the same live spot price, adjusted for your item's purity and weight.

So when you hear that gold hit a record, that figure originates in the same wholesale market the banks operate in, and it is the starting point for what your jewelry is worth today.

## Why your payout changes day to day

Because offers track the live spot price, they move with it. When global demand, interest rates, or the dollar shift the wholesale price, your potential payout shifts in the same direction. This is also why no honest local buyer can promise a fixed price weeks in advance: they are all working from a market they do not control.

You can watch this connection in real time. The live price shown in our [gold value calculator](/gold-calculator) is downstream of the very market bullion banks help set.

## What this means when you sell

- **There is no secret better price.** Every legitimate buyer starts from the same global spot price.
- **Transparency is the real differentiator.** What varies is the share of that value a buyer pays and how openly they explain it.
- **Timing matters less than you think** for everyday jewelry. Day-to-day moves are usually small.

## Frequently asked questions

**Do bullion banks set the price of my gold jewelry?**
Indirectly, yes. They help establish the global spot price that local offers are based on. Your specific payout then depends on your item's purity and weight.

**Why does my offer change from week to week?**
Because it tracks the live spot price, which moves with global market conditions. A higher spot price means a higher payout for the same item.

**Can a local buyer beat the global price?**
No. Every fair buyer works from the same spot price. The difference between buyers is how much of that value they pay and how clearly they explain it.

Want to see the live price in action? [Estimate your gold now](/gold-calculator) or [visit any location](/contact-us-cash-for-gold-locations) for a free appraisal.`,
  },
  {
    slug: "exploring-the-allure-of-chantilly-gold",
    title: "The Enduring Allure of Gold (and Selling It in Chantilly)",
    seoTitle: "Why Gold Holds Its Value, and Selling It in Chantilly, VA",
    date: "2025-12-02",
    category: "Gold",
    excerpt:
      "Gold has held its value and its fascination for thousands of years. Here is why the metal endures as a store of wealth, and what that means for buyers and sellers in the Chantilly area today.",
    body: `Few things have captivated people as consistently as gold. For thousands of years, across every civilization, it has stood for wealth, permanence, and beauty. That enduring appeal is not just sentiment; it is rooted in real qualities that still make gold valuable today, including for the families and collectors who buy and sell it around Chantilly.

We see that appeal in person every day, in heirloom rings, inherited coins, and pieces passed down through generations. Here is why gold holds its allure, and how that translates into real value locally.

## Why gold endures

Gold's lasting value comes from a rare combination of properties:

- **Scarcity.** Gold is genuinely rare and cannot be manufactured, which underpins its worth.
- **Durability.** It does not rust, tarnish, or corrode, so it survives for centuries in wearable condition.
- **Universality.** Gold is recognized and valued everywhere, making it one of the most liquid assets in the world.
- **Beauty.** Its warmth and workability have made it the metal of choice for fine jewelry across cultures.

These qualities are why gold has served as both adornment and store of value for millennia, and why it remains a dependable asset today.

## What this means for Chantilly buyers and sellers

That universal value has a very practical upside: gold is easy to appraise and sell anywhere, including close to home. In the Chantilly area, you do not need to mail anything away or accept a mystery price. A local storefront can value your gold transparently against the live global market and pay you the same day.

If you are ready to sell rather than just appreciate, our step-by-step guide on [how to sell used gold in Chantilly](/how-to-sell-used-gold-in-chantilly-va) walks through the process, and our [gold value calculator](/gold-calculator) gives you a quick estimate at today's price.

## From fascination to fair value

Whether your gold is a treasured heirloom or a drawer of forgotten chains, its value rests on the same qualities that have always made the metal special. When you decide to sell, the goal is simply to capture that value fairly: by knowing your karat and weight, understanding the live price, and choosing a buyer who explains every number.

Cash for Gold VA buys gold at our Chantilly store at 14025 Lee Jackson Memorial Hwy, along with three other Northern Virginia locations, with free appraisals and instant payout.

## Frequently asked questions

**Why has gold held its value for so long?**
Because it is scarce, durable, universally recognized, and beautiful. Those qualities have made it a store of value and a material for fine jewelry across every era.

**Where can I sell gold in Chantilly?**
At our Chantilly store on Lee Jackson Memorial Hwy. See our [Chantilly selling guide](/how-to-sell-used-gold-in-chantilly-va) for the full process, and [estimate your gold here](/gold-calculator).

**Is old or antique gold worth more?**
Sometimes. Antique and designer pieces can carry value beyond their metal. Have those appraised individually rather than sold by weight.

Ready to turn that allure into cash? [Estimate your gold](/gold-calculator) or [visit our Chantilly store](/contact-us-cash-for-gold-locations) for a free appraisal.`,
  },
  {
    slug: "maximizing-your-profit-with-cash-for-gold",
    title: "How to Maximize Your Payout When Selling Gold",
    seoTitle: "Get the Most Cash When Selling Gold | Cash for Gold VA",
    date: "2025-07-25",
    category: "Guides",
    excerpt:
      "Want the most cash for your gold? The biggest gains come from preparing your items the right way. Here is how to maximize your payout before you ever reach the counter.",
    body: `Most people leave money on the table not because they sold to a bad buyer, but because they prepared poorly. The good news: a little preparation reliably increases your payout, and none of it is complicated. Here is how to get the most for your gold.

We watch this play out daily. Two people can bring in similar piles and walk away with noticeably different checks, and the difference is almost always preparation.

## Know what you have

The single biggest factor in your payout is purity. Gold jewelry is stamped with its karat, and that drives value:

| Karat | Gold content |
|---|---|
| 18k | 75.0% |
| 14k | 58.3% |
| 10k | 41.7% |

Check clasps and inner bands, and sort by karat if you can. Knowing your weight and purity lets you estimate the value with our [gold value calculator](/gold-calculator) and recognize a fair offer instantly.

## Separate the pieces worth more than their metal

This is where real money hides. Do not sell these by weight:

- **Designer or signed pieces**, which carry a brand premium.
- **Items with genuine gemstones**, appraised separately from the gold — including [GIA-certified diamonds over a carat](/we-buy-diamonds-more-than-1-carat-with-gia).
- **Antique and estate pieces**, where age and craftsmanship add value.
- **Recognized bullion coins**, which carry a premium over melt.

Have each of these appraised individually so the premium is captured.

## Bring everything, as-is

Broken chains, single earrings, bent rings, and dental gold all carry full metal value. Do not throw anything out, and do not clean or repair pieces, which can reduce value on delicate or antique items.

## Then choose a fair buyer

Preparation only pays off if you sell to a transparent buyer. Once your items are ready, see [how to get the best offer](/finding-the-best-cash-for-gold-offers) and [how to choose a trustworthy buyer](/finding-the-best-cash-for-gold-options).

## Where to sell

Cash for Gold VA evaluates metal, gemstone, brand, and collectible value, not just weight, at four Northern Virginia locations with free appraisals and instant payout.

## Frequently asked questions

**How can I get the most money for my gold?**
Sort by karat, separate designer, gem-set, and antique pieces for individual appraisal, bring everything including broken items, and sell to a transparent buyer. Estimate first with our [calculator](/gold-calculator).

**Does cleaning my gold increase its value?**
No. Cleaning or repairing pieces can actually reduce value, especially on antiques. Bring items exactly as they are.

**Are broken pieces worth selling?**
Yes. Broken gold is valued by its metal content, the same per gram as intact pieces.

Ready to maximize your payout? [Estimate your gold](/gold-calculator) or [visit any location](/contact-us-cash-for-gold-locations) for a free appraisal.`,
  },
  {
    slug: "we-buy-diamonds-more-than-1-carat-with-gia",
    title: "We Buy Diamonds Over 1 Carat with GIA Certification",
    seoTitle: "Sell GIA-Certified Diamonds Over 1 Carat | Cash for Gold VA",
    date: "2025-07-25",
    category: "Diamonds",
    excerpt:
      "Selling a diamond over 1 carat with GIA certification? Learn how the 4 Cs and a GIA report drive your payout, why certified stones sell for more, and how to get a fair, same-day offer.",
    body: `A diamond over one carat is a significant asset, and a GIA certificate makes it far easier to sell at a fair price. The certificate removes the guesswork: instead of taking a buyer's word on quality, you have an independent, internationally trusted grading report that documents exactly what your stone is. This guide explains how that translates into your payout.

We buy GIA-certified diamonds across our Northern Virginia stores, and a credible certificate consistently leads to a stronger, faster offer because both sides are working from the same objective facts.

## Why GIA certification matters

The Gemological Institute of America is the most respected diamond grading authority in the world. A GIA report documents your diamond's exact characteristics, which means:

- **No quality disputes.** The grade is independent and verifiable.
- **A stronger resale market.** Certified stones are easier for a buyer to resell, so they can pay more.
- **Faster appraisals.** The report confirms what the buyer would otherwise have to establish from scratch.

If your diamond is over one carat and GIA certified, bring the report. It directly supports a higher, faster offer.

## The 4 Cs and your payout

A diamond's value is driven by the four characteristics a GIA report grades:

1. **Carat.** Weight. Value rises sharply with size, especially above one and two carats.
2. **Cut.** How well the stone is cut, which governs its brilliance. Often the biggest driver of beauty and price.
3. **Color.** Graded from colorless (most valuable) down the scale.
4. **Clarity.** The presence of inclusions, from flawless down to visible.

Two one-carat diamonds can be worth very different amounts depending on these grades, which is exactly why an independent certificate is so valuable when you sell.

## How to sell a certified diamond well

- **Bring the GIA report** and any original purchase paperwork.
- **Do not remove the stone** from its setting before an appraisal; let the buyer advise.
- **Have it appraised in person**, never mailed away, so you keep the stone until you accept.
- **Choose a buyer who reads and verifies the certificate** and explains the offer against current market values.

A diamond's value is separate from any gold or platinum in its setting. If the piece is also designer or contains significant precious metal, that is appraised on top of the stone.

## Where to sell GIA diamonds

Cash for Gold VA buys GIA-certified diamonds over one carat at all four Northern Virginia locations: Annandale, Manassas, Chantilly, and Vienna/McLean. Every store offers free, no-obligation appraisals and instant payout.

## Frequently asked questions

**Do you buy diamonds over 1 carat?**
Yes. We specialize in larger diamonds, especially GIA-certified stones over one carat, and pay based on the certified grade and current market values.

**Why does a GIA certificate increase my offer?**
It independently documents your diamond's quality, which removes uncertainty and makes the stone easier to resell, so a buyer can pay more and faster.

**What if I do not have a GIA report?**
You can still sell. The stone will be evaluated in person, though a credible certificate generally supports a stronger offer. Ask whether certification is worth obtaining first.

**Is the setting valued too?**
Yes. Any gold or platinum and any designer value in the setting is appraised in addition to the diamond.

Selling a diamond over one carat? [Visit any location](/contact-us-cash-for-gold-locations) for a free, no-obligation appraisal.`,
  },
  {
    slug: "understanding-the-role-of-bullion-banks",
    title: "What Is a Bullion Bank? The Backbone of the Gold Market",
    seoTitle: "What Is a Bullion Bank and Why It Matters for Sellers",
    date: "2025-06-08",
    category: "Precious Metals",
    excerpt:
      "Bullion banks are the institutions at the center of global gold and silver trading. Here is what they are, what they actually do, and why they matter to anyone who owns precious metals.",
    body: `Bullion banks are one of those terms you see in market headlines without ever getting a clear definition. Yet they sit at the heart of how gold and silver move around the world. If you own precious metals, even a single inherited coin, it is worth understanding who these institutions are and what role they play.

This is a plain-language overview. For how their activity connects to the price you are actually paid, see our companion article on how bullion banks influence gold prices.

## What a bullion bank is

A bullion bank is a financial institution that trades precious metals, primarily gold and silver, in very large quantities on the wholesale market. They are not where you walk in to sell a ring. Instead, they operate at the top of the market, dealing with miners, refiners, central banks, and other large institutions.

## What bullion banks actually do

Their core functions include:

- **Providing liquidity.** They stand ready to buy and sell large volumes, which keeps the market functioning smoothly.
- **Trading and market-making.** They quote prices and trade metal, helping establish the benchmark spot price quoted worldwide.
- **Storage and custody.** They hold physical metal in secure vaults on behalf of clients.
- **Financing and leasing.** They lend and borrow metal, supporting miners and other market participants.
- **Clearing transactions.** They settle large trades between institutions.

Together, these functions make bullion banks the backbone of the global precious metals trade.

## Why this matters to you

You will never trade directly with a bullion bank, but their activity shapes the market you do participate in:

- The **spot price** they help establish is the starting point for every fair local offer.
- Their role in keeping the market **liquid and orderly** is part of why gold is so easy to value and sell anywhere in the world.
- Understanding the hierarchy, from global market down to your local buyer, helps you see why every honest offer points back to the same live price.

When you sell locally, that global benchmark is exactly what our [gold value calculator](/gold-calculator) reflects in real time.

## Frequently asked questions

**What is a bullion bank in simple terms?**
A financial institution that trades gold and silver in large volumes on the wholesale market, providing liquidity, storage, and price-setting that keep the global metals market running.

**Can I sell my gold to a bullion bank?**
No. Bullion banks deal with miners, refiners, and large institutions, not individuals. To sell jewelry or coins, you visit a local buyer whose offers are based on the same market the banks help set.

**How do bullion banks affect the price I get?**
They help establish the spot price that local offers are built from. Your individual payout then depends on your item's purity and weight.

Curious what your gold is worth at today's market price? [Estimate it here](/gold-calculator) or [visit any location](/contact-us-cash-for-gold-locations).`,
  },
  {
    slug: "cash-for-gold-close-to-me",
    title: "Cash for Gold Close to Me: How to Find a Trusted Buyer Nearby",
    seoTitle: "Cash for Gold Close to Me | Find a Trusted Local Buyer",
    date: "2025-06-08",
    category: "Guides",
    excerpt:
      "Searching for cash for gold close to me? Here is how to find a trustworthy local buyer, what to expect when you walk in, and how to make sure the offer you get is fair.",
    body: `When you search for cash for gold close to me, you get a map full of options and very little sense of which ones to trust. A storefront a mile away is convenient, but convenience is worthless if the offer is a lowball. This guide explains how to find a buyer who is both nearby and fair, and what to expect once you walk in.

After years of buying gold across Northern Virginia, we can tell you that the best local buyer is rarely the one with the flashiest sign. It is the one who tests your gold in front of you, explains the number, and lets you walk away without pressure.

## Why selling close to home is the smart move

Local, in-person selling beats the mail-in alternatives for reasons that matter:

- **You keep your gold** until you accept an offer. It never leaves your sight.
- **You get paid immediately**, in cash, the same visit.
- **You can ask questions** and watch every step of the appraisal.
- **You have recourse.** A real storefront with a local reputation has every reason to deal fairly.

Mail-in services, by contrast, ask you to ship your gold away and trust a quote that arrives after your items are already gone.

## How to vet a nearby buyer

Before you drive to the closest pin on the map, check that the buyer:

1. **Has a permanent storefront**, not a pop-up or kiosk.
2. **Tests and weighs in front of you** on a calibrated scale.
3. **Bases offers on the live spot price**, shown as a fair range.
4. **Charges nothing** for an appraisal and applies no pressure to sell.
5. **Has genuine reviews** from local customers. Ours average 4.9 stars.

## What your gold is worth

A fair offer comes from three numbers: the live spot price, your item's karat purity, and its weight. The buyer converts the per-ounce spot price to a per-gram figure (divide by 31.1), multiplies by your karat fraction, and multiplies by the weight, minus a small refining margin. Knowing your karat and weight, and getting a rough estimate from our [gold value calculator](/gold-calculator), lets you recognize a fair number instantly.

## What to expect when you walk in

The visit is quick and open. You hand over your items and a photo ID, the buyer sorts and tests them in front of you, pulls the live price, and presents a transparent offer. You decide on the spot. Accept and you leave with cash; decline and you owe nothing.

## A location close to you

Cash for Gold VA has four Northern Virginia stores, so one is usually nearby:

- **Annandale**: 7262 Columbia Pike
- **Vienna / McLean**: 8453 Tyco Rd #C
- **Chantilly**: 14025 Lee Jackson Memorial Hwy
- **Manassas**: 9013 Centreville Rd

Each offers free appraisals, instant payout, and the same transparent method. We buy gold, silver, platinum, diamonds, designer jewelry, watches, and coins.

## Frequently asked questions

**How do I find trustworthy cash for gold close to me?**
Look for a permanent storefront that tests in front of you, ties offers to the live spot price, charges nothing for appraisals, and has strong local reviews. Cash for Gold VA has four such stores across Northern Virginia.

**What should I bring?**
The items you want to sell and a photo ID. There is no need to clean or sort anything beforehand.

**Will I get paid the same day?**
Yes. If you accept the offer, you are paid in cash before you leave.

Find the location closest to you and [get a free, no-obligation appraisal](/contact-us-cash-for-gold-locations), or [estimate your gold first](/gold-calculator).`,
  },
  {
    slug: "cash-for-gold-loudoun-county-va",
    title: "Cash for Gold in Loudoun County, VA: A Local Seller's Guide",
    seoTitle: "Cash for Gold in Loudoun County, VA | Sell for Top Cash",
    date: "2025-06-08",
    category: "Locations",
    excerpt:
      "Selling gold in Loudoun County, VA? Here is how local appraisals work, what affects your offer, and the nearest Cash for Gold VA store for a fast, fair, same-day payout.",
    body: `Loudoun County residents in Ashburn, Leesburg, Sterling, and beyond often assume they have to drive into the city or mail their gold away to get a good price. Neither is true. A trusted storefront buyer just over the county line makes selling gold fast, fair, and fully transparent, and you keep your items until you accept an offer.

We see Loudoun sellers every week, and the questions are always practical: what is my gold actually worth, how is the number calculated, and how do I know I am being treated fairly. Here are the answers.

## How selling gold works locally

The process at a reputable buyer is short and open:

1. You bring your items in. No appointment, no cleaning, no sorting required.
2. The buyer separates pieces by metal and karat.
3. Each piece is tested for purity and weighed on a calibrated scale, in front of you.
4. The buyer pulls the live spot price and calculates a transparent offer.
5. You decide. Accept and get cash on the spot, or walk away with no fee and no pressure.

## What determines your offer

Three factors set the value of scrap and jewelry gold: the live spot price, the karat purity, and the weight. The buyer converts the per-ounce spot price to a per-gram price (divide by 31.1), multiplies by the karat fraction, and multiplies by the weight, minus a small refining margin.

The karat matters more than most people expect. The common purities are:

| Karat | Gold content |
|---|---|
| 18k | 75.0% |
| 14k | 58.3% |
| 10k | 41.7% |

A lighter 18k piece can easily outvalue a heavier 10k one. To estimate your own items before you drive over, use our [gold value calculator](/gold-calculator), which applies this exact math to the live price.

## Coins, bullion, and designer pieces

If you hold recognized bullion coins like the American Gold Eagle, or designer and antique jewelry, those are often worth more than their melt value. Coins carry a premium over spot, and brand or gemstone value can add significantly to a piece. Do not sell those by weight alone. Bring them in for a full appraisal.

## The nearest store to Loudoun County

The Cash for Gold VA location closest to Loudoun County is our **Chantilly** store at 14025 Lee Jackson Memorial Hwy, an easy drive south from Sterling, Ashburn, and the Route 50 corridor. We also have stores in Vienna/McLean, Annandale, and Manassas. Every location offers free, no-obligation appraisals, instant payout, and the same transparent method, and we buy gold, silver, platinum, diamonds, designer jewelry, watches, and coins.

## Frequently asked questions

**Where can I sell gold in Loudoun County, VA?**
The most convenient Cash for Gold VA store is our Chantilly location on Lee Jackson Memorial Hwy, a short drive from Sterling, Ashburn, and Leesburg. Appraisals are free and same-day.

**How is my offer calculated?**
From the live spot price, your item's karat, and its weight. A small refining margin is subtracted on scrap gold. Everything is shown and explained before you decide.

**Do I need an appointment?**
No. Walk-ins are welcome and appraisals are always free, whether or not you choose to sell.

**Can I estimate my gold before visiting?**
Yes. Our [calculator](/gold-calculator) gives a realistic range from the live price so you know roughly what to expect.

Find out what your gold is worth in Loudoun County. [Estimate it now](/gold-calculator) or [visit our Chantilly store](/contact-us-cash-for-gold-locations) for a free appraisal.`,
  },
  {
    slug: "sell-gold-alexandria-va",
    title: "Top Places to Sell Gold in Alexandria, VA",
    seoTitle: "Sell Gold in Alexandria, VA | Best Prices Near You",
    date: "2025-06-08",
    category: "Locations",
    excerpt:
      "Selling gold in Alexandria, VA? Here is what to look for in a buyer, how to avoid lowball offers, and how to get a fair, same-day price for inherited or unwanted jewelry.",
    body: `Alexandria sellers have plenty of choices when it comes to turning gold into cash, which is good news: competition keeps offers honest. The challenge is sorting the buyers who pay a fair share of the market price from the ones counting on you not knowing what your gold is worth. This guide explains how to choose well and what to expect.

We regularly buy gold from Alexandria-area residents, and the items that come across our counter range from a single inherited ring to drawers full of tangled, broken chains. All of it has value at today's prices, and all of it deserves a transparent appraisal.

## What to look for when selling gold in Alexandria

Not every buyer operates the same way. Before you hand over anything, check for these signs of a fair, professional buyer:

- **A real storefront**, not a hotel-ballroom pop-up or a mall kiosk that disappears next week.
- **Open testing and weighing**, done in front of you on a calibrated scale.
- **An offer tied to the live spot price**, expressed as a fair range rather than a single take-it-or-leave-it number.
- **Free, no-obligation appraisals.** You should never pay to find out what your gold is worth.
- **Strong, verifiable reviews** from local customers.

## How your payout is calculated

A trustworthy offer is never guesswork. It comes from three numbers: the live spot price of gold, your item's karat purity, and its weight in grams. The buyer converts the per-ounce spot price to a per-gram figure (divide by 31.1), multiplies by the purity fraction for your karat, and multiplies by the weight, then subtracts a small standard refining margin.

Knowing your karat helps you sanity-check any offer. The common stamps are 10k (41.7% gold), 14k (58.3%), and 18k (75%). You can estimate any piece using our [gold value calculator](/gold-calculator) before you decide where to sell.

## A note on inherited and designer pieces

Much of the gold sold in Alexandria is inherited. If your pieces are designer-signed, antique, or set with certified diamonds, do not sell them by metal weight alone. Brand and gemstone value can far exceed the melt value, and a good buyer will recognize and pay for that premium. Bring those pieces in for a full appraisal rather than estimating them yourself.

## Where to sell near Alexandria

The Cash for Gold VA location most convenient to Alexandria is our **Annandale** store at 7262 Columbia Pike, a short drive west. We also have stores in Vienna/McLean, Chantilly, and Manassas. Every location offers free appraisals, instant payout, and the same transparent, live-price method, and we buy gold, silver, platinum, diamonds, designer jewelry, watches, and coins.

## Frequently asked questions

**Where can I sell gold in Alexandria, VA?**
Look for a local storefront that tests in front of you and pays a transparent share of the live price. The closest Cash for Gold VA store is our Annandale location on Columbia Pike.

**How do I avoid getting lowballed?**
Know your karat and weight, get a rough estimate from our [calculator](/gold-calculator) first, and only sell to a buyer who explains the offer openly and ties it to the live spot price.

**Do you buy broken or scrap gold?**
Yes. Broken chains, single earrings, and dental gold all have value based on their metal content. Bring it all in.

**Is the appraisal really free?**
Yes. Appraisals are always free and carry no obligation to sell.

Curious what your gold is worth in Alexandria? [Run our calculator](/gold-calculator) or [stop by for a free appraisal](/contact-us-cash-for-gold-locations).`,
  },
  {
    slug: "cash-for-gold-falls-church-va",
    title: "Cash for Gold in Falls Church, VA: Where to Sell and What to Expect",
    seoTitle: "Cash for Gold in Falls Church, VA | Sell Gold for Cash",
    date: "2025-06-08",
    category: "Locations",
    excerpt:
      "Looking to sell gold in Falls Church, VA? Here is how local appraisals work, what affects your payout, and the two Cash for Gold VA stores closest to Falls Church for a free, same-day offer.",
    body: `If you live in Falls Church and have gold sitting in a drawer, you have more options than the national mail-in services advertising online. Selling locally means you watch your gold get tested and weighed, hear the offer explained out loud, and walk out with cash the same day. This guide covers how that works in Falls Church, what drives your payout, and where to go.

We have appraised gold for Falls Church residents for years, and the pattern is always the same: people are surprised both by how simple [the process](/understanding-the-cash-for-gold-process) is and by how much a small pile of broken chains can be worth at today's prices.

## Why sell gold in Falls Church locally

Falls Church sits in the heart of Northern Virginia, minutes from several established storefront buyers. Selling in person has real advantages over mailing your gold away:

- **You keep control of your items** until you accept an offer. Nothing leaves your sight.
- **You get paid on the spot**, in cash, the same visit.
- **You can ask questions** and watch the purity test and weighing happen in front of you.
- **Local reputation matters.** A buyer with a physical store and hundreds of reviews has every reason to treat you fairly.

## What your gold is actually worth

Every fair offer is built from three numbers: the live spot price of gold, your item's purity (karat), and its weight in grams. A buyer divides the per-ounce spot price by 31.1 to get the price per gram of pure gold, multiplies by the karat fraction (14k is 58.3% gold, 18k is 75%, 10k is 41.7%), then multiplies by the weight.

Two quick truths that save Falls Church sellers from disappointment:

1. **Karat stamps matter.** A heavy 10k bracelet can be worth less than a lighter 18k chain.
2. **Gemstones and brand can add value.** Designer pieces and certified diamonds are often worth more than their metal alone, so do not sell those purely by weight.

You can estimate your own pieces before you leave the house using our [gold value calculator](/gold-calculator), which runs the live price through that exact formula.

## The two stores closest to Falls Church

Cash for Gold VA operates four Northern Virginia locations. The two nearest to Falls Church are:

- **Annandale**: 7262 Columbia Pike, a short drive south on Route 50 or the Beltway.
- **Vienna / McLean**: 8453 Tyco Rd #C, just west toward Tysons.

Both offer free, no-obligation appraisals, instant payout, and the same transparent, live-price method. We buy gold, silver, platinum, diamonds, designer jewelry, luxury watches, and coins.

## What to bring and what to expect

Bring the items you are considering selling, plus a photo ID. You do not need to clean or sort anything. When you arrive:

1. We sort items by metal and karat.
2. We test purity in front of you and weigh each piece on a calibrated scale.
3. We pull the live market price and calculate a transparent offer, shown as a fair range.
4. You decide. If you accept, you are paid in cash before you leave. If not, there is no pressure and no fee.

## Frequently asked questions

**Where can I sell gold in Falls Church, VA?**
The closest Cash for Gold VA stores are our Annandale location on Columbia Pike and our Vienna/McLean location on Tyco Rd, both a short drive from Falls Church. Both give free, same-day appraisals.

**Do I need an appointment?**
No. Walk-ins are welcome at every location, and appraisals are free whether or not you decide to sell.

**How much will I get for my gold?**
Your payout depends on the live spot price, the karat, and the weight. Use our [calculator](/gold-calculator) for a realistic range, then bring your items in for an exact offer.

**Is it better to sell locally or mail my gold in?**
Selling locally lets you keep your items until you accept an offer and get paid the same day. Mail-in services quote you only after your gold has already left your hands.

Ready to find out what your gold is worth in Falls Church? [Get an instant estimate](/gold-calculator) or [visit your nearest location](/contact-us-cash-for-gold-locations) for a free appraisal.`,
  },
  {
    slug: "top-places-to-sell-gold-in-centreville",
    title: "Top Places to Sell Gold in Centreville, VA",
    seoTitle: "Sell Gold in Centreville, VA | Best Local Buyers",
    date: "2025-06-08",
    category: "Locations",
    excerpt:
      "Selling gold in Centreville, VA? Here is how to choose a trustworthy buyer, what sets a fair offer apart from a lowball, and where to get a free, same-day appraisal near Centreville.",
    body: `Centreville sits in one of the most competitive corners of the Northern Virginia gold market, which works in your favor as a seller. With several buyers within a short drive, the ones that survive are the ones that pay fairly and treat people well. The trick is knowing how to tell them apart before you hand anything over.

We buy gold from Centreville residents regularly, and the most valuable thing we can offer first-time sellers is not just a good price, but a clear explanation of how that price is reached. Here is what to look for and where to start.

## What makes a buyer worth your time

Before you sell a single gram, run any buyer through this checklist:

- **A permanent storefront** you can walk back into, not a traveling buy-event or kiosk.
- **Purity testing and weighing in the open**, in front of you, on a calibrated scale.
- **Offers tied to the live spot price**, presented as a fair range instead of one flat number.
- **Free appraisals with no obligation.** Finding out what your gold is worth should never cost you anything.
- **A track record** of genuine local reviews.

## How a fair offer is built

There is no mystery to a legitimate gold offer. It rests on three numbers: the live spot price, your item's karat purity, and its weight in grams. The buyer converts the per-ounce spot price into a per-gram price (spot divided by 31.1), multiplies by your karat fraction (14k is 58.3% gold, 18k is 75%, 10k is 41.7%), and multiplies by the weight, minus a small refining margin.

Because karat drives so much of the value, it pays to know your stamps before you go. You can estimate any piece with our [gold value calculator](/gold-calculator), which runs the live price through this formula in seconds.

## Get the best offer in Centreville

A few habits consistently lead to better outcomes:

1. **Separate the keepers.** Designer-signed and gem-set pieces are often worth more than their melt value. Have those appraised individually rather than sold by weight.
2. **Do not pre-clean or alter anything.** Buyers test and weigh as-is; you risk damaging value by trying to fix pieces.
3. **Get a baseline estimate first** so you can recognize a fair offer when you see one.
4. **Compare on transparency, not just the headline percentage.** A buyer who explains the math is usually the one paying fairly.

## Where to sell near Centreville

The Cash for Gold VA store closest to Centreville is our **Chantilly** location at 14025 Lee Jackson Memorial Hwy, just up Route 50. We also have stores in Manassas, Vienna/McLean, and Annandale. Every location offers free, no-obligation appraisals, instant payout, and the same transparent method, and we buy gold, silver, platinum, diamonds, designer jewelry, watches, and coins.

## Frequently asked questions

**Where is the best place to sell gold in Centreville, VA?**
The best buyer is a local storefront that tests in front of you and ties offers to the live spot price. The nearest Cash for Gold VA store is our Chantilly location on Lee Jackson Memorial Hwy.

**How do I get the best price for my gold?**
Know your karat and weight, estimate your pieces with our [calculator](/gold-calculator), and sell to a buyer who explains the offer openly. Have designer and gem-set pieces appraised separately.

**Are appraisals free?**
Yes. Appraisals are always free and carry no obligation to sell.

Ready to see what your gold is worth in Centreville? [Estimate it now](/gold-calculator) or [visit our Chantilly store](/contact-us-cash-for-gold-locations) for a free appraisal.`,
  },
  {
    slug: "current-trends-in-gold-prices-today",
    title: "What's Driving Gold Prices: Current Trends Explained",
    seoTitle: "Current Gold Price Trends and What They Mean for Sellers",
    date: "2025-06-07",
    category: "Gold Prices",
    excerpt:
      "Gold prices have climbed to historic levels. Here are the forces behind the trend, what they mean for anyone holding gold, and how to act on them when you decide to sell.",
    body: `Gold has reached price levels that would have seemed extraordinary a few years ago, and the question on everyone's mind is simple: what is driving it, and what does it mean for the gold sitting in my drawer? You do not need to be an economist to understand the main forces, or to use them sensibly when you sell.

We track the gold market every day because every offer we make is built on it. Here is a clear, jargon-free look at the trends and how they translate to your pocket.

## The main forces behind gold prices

Gold prices respond to a handful of recurring drivers:

- **Interest rates.** When rates fall, gold tends to rise, because holding non-yielding gold costs less relative to other assets.
- **The U.S. dollar.** Gold is priced in dollars, so a weaker dollar often pushes the gold price up.
- **Inflation and uncertainty.** In times of economic or geopolitical stress, investors move toward gold as a store of value, lifting demand.
- **Central bank buying.** Sustained purchases by central banks add steady demand to the market.

These forces interact, which is why prices move daily and why no one can predict the exact path.

## What the trend means if you own gold

For most people holding jewelry or a few coins, the practical takeaways are straightforward:

1. **Higher prices mean higher payouts.** Because offers track the live spot price, a strong market directly raises what your gold is worth today.
2. **Day-to-day timing matters little.** On everyday jewelry, the difference between this week and next is usually small. Chasing the exact peak rarely pays off.
3. **Know your number.** The best move is not to time the market perfectly, but to understand what your specific items are worth right now.

You can check that in seconds. Our [gold value calculator](/gold-calculator) applies the live price to your item's purity and weight.

## Trends and different types of gold

The trend affects different holdings differently. Scrap and jewelry gold move directly with the spot price. Recognized bullion coins move with spot plus their premium. Designer and antique pieces carry value beyond the metal, so a rising spot price is only part of their story. When in doubt, get a full appraisal rather than estimating by weight alone.

## Frequently asked questions

**Why are gold prices so high right now?**
A combination of interest rate expectations, a softer dollar, economic uncertainty, and steady central bank demand has supported strong gold prices. These forces shift constantly, so prices move daily.

**Will gold keep going up?**
No one can predict short-term moves reliably. Gold trends with rates, the dollar, and global uncertainty, but day-to-day changes are usually small for everyday sellers.

**Should I wait for a higher price to sell my jewelry?**
For most jewelry, waiting changes the payout only marginally. It is usually better to know your current value and sell when it suits you. Use our [calculator](/gold-calculator) to see today's number.

Curious what today's prices mean for your gold? [Estimate it now](/gold-calculator) or [visit any location](/contact-us-cash-for-gold-locations) for a free appraisal.`,
  },
  {
    slug: "finding-the-best-cash-for-gold-offers",
    title: "How to Get the Best Cash for Gold Offer",
    seoTitle: "How to Get the Best Cash for Gold Offer | Cash for Gold VA",
    date: "2025-06-07",
    category: "Guides",
    excerpt:
      "Getting the best cash for gold offer is less about luck and more about knowing what a fair number looks like. Here is how to recognize, compare, and secure the strongest offer for your gold.",
    body: `The difference between an average offer and a great one usually comes down to whether you know what your gold is actually worth before you walk in. A buyer cannot lowball someone who already understands the math. This guide shows you how to recognize and secure the best possible offer.

We make offers every day, and the customers who get the most are not the ones who haggle hardest; they are the ones who arrive informed.

## Know your number first

Every fair offer starts from the same place: the live spot price, your item's karat, and its weight. The buyer converts spot per ounce to a per-gram price (divide by 31.1), multiplies by the karat fraction, and multiplies by the weight, minus a small refining margin.

Run that math on your own pieces before you go using our [gold value calculator](/gold-calculator). When you know the ballpark, a fair offer is obvious and a lowball is impossible to disguise.

## Compare offers the right way

When weighing one buyer against another, do not just compare headline numbers:

1. **Compare share of spot.** What percentage of the live value is each buyer actually paying?
2. **Compare transparency.** A buyer who shows the test, the weight, and the math is usually paying fairly.
3. **Watch for hidden deductions.** Vague "fees" or "processing" charges quietly shrink your payout.
4. **Factor in convenience and trust.** A slightly higher mail-in quote is not worth losing control of your gold.

## Get the strongest offer

- **Separate designer, gem-set, and antique pieces.** These are worth more than melt and should be appraised individually, not weighed as scrap. See our note on [maximizing your payout](/maximizing-your-profit-with-cash-for-gold).
- **Bring everything**, including broken pieces, which still carry full metal value.
- **Sell to a transparent storefront** rather than chasing an inflated online quote.
- **Do not pre-clean or repair** items, which can reduce value.

## Where to get a fair offer

Cash for Gold VA bases every offer on the live spot price and explains it out loud, at four Northern Virginia locations with free appraisals and instant payout. To make sure your buyer is trustworthy in the first place, see [how to choose a trustworthy buyer](/finding-the-best-cash-for-gold-options).

## Frequently asked questions

**How do I get the best price for my gold?**
Know your karat and weight, estimate the value with our [calculator](/gold-calculator) first, separate premium pieces for individual appraisal, and sell to a transparent buyer who pays a fair share of the live price.

**Should I get multiple offers?**
Comparing can help, but compare on share of spot and transparency, not just headline numbers. Avoid any buyer who deducts vague fees or quotes before testing.

**Does haggling get me more?**
Being informed helps far more than haggling. A buyer who ties offers to the live price is already paying a set, fair share.

Ready to see your number? [Estimate your gold](/gold-calculator) or [visit any location](/contact-us-cash-for-gold-locations) for a free appraisal.`,
  },
  {
    slug: "understanding-the-cash-for-gold-process",
    title: "The Cash for Gold Process, Step by Step",
    seoTitle: "How Cash for Gold Works, Step by Step | Cash for Gold VA",
    date: "2025-06-07",
    category: "Guides",
    excerpt:
      "Curious how cash for gold actually works? Here is the full process, step by step, from the moment you walk in to the cash in your hand, so you know exactly what happens and why.",
    body: `Cash for gold is simpler than most people expect, but understanding each step helps you sell with confidence. This is the complete process, from the moment you walk in to the cash in your hand, with the reasoning behind each stage.

We run this process every day across our Northern Virginia stores. Here is exactly what happens and why each step matters.

## Step 1: Sorting

When you arrive, your items are separated by metal type and karat. This matters because gold, silver, and platinum are valued differently, and even within gold, a 10k piece and an 18k piece are worth very different amounts per gram. Sorting ensures each item is valued correctly rather than lumped together.

## Step 2: Testing for purity

Each piece is tested to confirm its karat, in front of you. Buyers use methods such as electronic testers or acid testing to verify the actual gold content, since stamps can be worn or, occasionally, false. This protects both sides and ensures the offer reflects what the item really is.

## Step 3: Weighing

Confirmed pieces are weighed on a calibrated scale, in grams, where you can see the reading. Weight is one of the three numbers that set the value, so an accurate, visible weighing is essential to a fair offer.

## Step 4: Calculating the offer

The buyer pulls the live spot price and does the math: spot per ounce divided by 31.1 gives the price per gram of pure gold, multiplied by the karat purity, multiplied by the weight, minus a small refining margin for scrap. The result is presented as a transparent, fair range. You can preview this same calculation any time with our [gold value calculator](/gold-calculator).

## Step 5: Your decision and payment

You review the offer and decide. There is no obligation and no fee. If you accept, you are paid in cash on the spot. If you decline, you simply take your items and go.

## Why the process is built this way

Each step exists to make the offer accurate and transparent: sorting and testing establish what you have, weighing establishes how much, and the live price establishes what it is worth today. A buyer who skips steps, or hides them from view, is a buyer to avoid. For help choosing where to sell, see [how to choose a trustworthy buyer](/finding-the-best-cash-for-gold-options). Wondering whether selling makes sense for you at all? See [is cash for gold worth it](/is-cash-for-gold-worth-it).

## Frequently asked questions

**How does the cash for gold process work?**
Your items are sorted, tested for purity, and weighed in front of you. The buyer applies the live spot price to calculate a transparent offer, and you decide whether to accept and get paid on the spot.

**Why do buyers test my gold?**
To confirm the actual karat, since stamps can be worn or inaccurate. Testing ensures the offer reflects the true gold content.

**Do I have to sell once I get an offer?**
No. Appraisals are free and carry no obligation. You can decline and keep your items.

Ready to start? [Estimate your gold](/gold-calculator) or [visit any location](/contact-us-cash-for-gold-locations) for a free appraisal.`,
  },
  {
    slug: "we-buy-1-oz-american-gold-eagle-coins",
    title: "We Buy 1 oz American Gold Eagle Coins: How They Are Valued",
    seoTitle: "Sell 1 oz American Gold Eagle Coins | Cash for Gold VA",
    date: "2025-06-07",
    category: "Coins",
    excerpt:
      "Selling 1 oz American Gold Eagle coins? Learn how these iconic bullion coins are valued against the live gold price, what premium they carry, and how to get a fair, same-day offer in Northern Virginia.",
    body: `The 1 oz American Gold Eagle is one of the most recognized bullion coins in the world, which makes it one of the easiest gold items to sell at a fair price. Because the coin is so widely traded and instantly verifiable, you do not face the uncertainty that comes with unmarked scrap. This guide explains exactly how Gold Eagles are valued and how to sell yours with confidence.

We buy American Gold Eagles regularly across our Northern Virginia stores, and sellers are often relieved to learn how transparent the pricing is on a coin this well established.

## How a Gold Eagle is valued

A 1 oz American Gold Eagle contains exactly one troy ounce of pure gold, though the coin itself is slightly heavier because it is alloyed with small amounts of silver and copper for durability. Its value has two parts:

- **Melt value.** One troy ounce of gold at the live spot price. This is the floor.
- **Bullion premium.** A modest amount above melt that reflects the coin's minting, recognition, and demand. Because Eagles are so liquid, this premium is usually small and predictable.

Unlike rare collectible coins, a standard bullion Eagle is valued mainly on its gold content plus that premium, not on numismatic rarity. You can estimate the melt portion at any time with our [gold value calculator](/gold-calculator) by entering one troy ounce of pure gold.

## What can add or subtract value

A few details affect the final number:

1. **Condition.** Bullion Eagles do not need to be flawless, but heavily damaged coins can be valued closer to pure melt.
2. **Year and proof status.** Proof Eagles and certain key dates can carry a collectible premium above standard bullion. Mention these so they are appraised properly.
3. **Original packaging or certificates.** For proof and graded coins, keep the packaging and paperwork; it can matter.

Do not clean your coins. Cleaning can reduce the value of proof and collectible Eagles.

## How to sell with confidence

Sell to a buyer who tests and verifies the coin in front of you, ties the offer to the live spot price, recognizes any proof or collectible premium, and charges nothing for the appraisal. A storefront with strong local reviews has earned the trust that mail-in services ask you to extend on faith.

## Where to sell near you

Cash for Gold VA buys American Gold Eagles and other bullion coins at all four Northern Virginia locations: Annandale (7262 Columbia Pike), Manassas (9013 Centreville Rd), Chantilly (14025 Lee Jackson Memorial Hwy), and Vienna/McLean (8453 Tyco Rd #C). Every store offers free, no-obligation appraisals and instant payout.

## Frequently asked questions

**How much is a 1 oz American Gold Eagle worth?**
Mainly the live spot price of one troy ounce of gold, plus a modest bullion premium. Proof and certain dated coins can be worth more. Estimate the melt value with our [calculator](/gold-calculator).

**Do you buy proof and graded Gold Eagles?**
Yes. Bring any packaging or grading certificates so the collectible premium can be appraised on top of the metal value.

**Should I clean my Gold Eagle before selling?**
No. Cleaning can reduce the value of proof and collectible coins. Bring them as they are.

**Will I be paid the same day?**
Yes. If you accept the offer, you are paid in cash before you leave.

Ready to sell your Gold Eagles? [Estimate the value](/gold-calculator) or [visit your nearest location](/contact-us-cash-for-gold-locations) for a free appraisal.`,
  },
  {
    slug: "maximizing-your-cash-for-gold-experience",
    title: "What to Expect: A Smooth, Stress-Free Cash for Gold Sale",
    seoTitle: "What to Expect at a Cash for Gold Sale | Cash for Gold VA",
    date: "2025-06-07",
    category: "Guides",
    excerpt:
      "Selling gold for the first time can feel intimidating. It does not have to be. Here is what a smooth, stress-free cash for gold visit looks like and how to make yours easy.",
    body: `Selling gold for the first time makes a lot of people nervous. Will I be pressured? Will I get ripped off? Is this even worth the trip? The reality, at a reputable buyer, is that the experience is quick, calm, and completely in your control. Here is what to expect so you can walk in relaxed.

We guide first-time sellers through this every day, and almost everyone is surprised by how easy and low-pressure a good experience feels.

## Before you go

A little preparation makes the visit smooth:

- **Gather your items**, broken or whole, in one bag. No need to clean or sort.
- **Bring a photo ID**, which buyers are required to record.
- **Get a rough estimate** with our [gold value calculator](/gold-calculator) so you know what to expect.

That is all. There is no appointment to book and no paperwork to prepare.

## What happens at the counter

A good experience follows a clear, unhurried rhythm:

1. **Greeting and sorting.** Items are separated by metal and karat.
2. **Testing.** Each piece is tested for purity in front of you.
3. **Weighing.** Pieces are weighed on a calibrated scale you can see.
4. **The offer.** The buyer pulls the live spot price and explains a transparent offer, shown as a fair range.
5. **Your decision.** You accept or decline. There is no pressure and no fee either way.

If you accept, you are paid in cash before you leave. The whole visit usually takes minutes.

## What a good experience never includes

- Pressure to decide on the spot.
- A price that "expires" if you walk out.
- Testing done out of your sight.
- Any fee for the appraisal.

If you feel any of these, it is a sign to leave. For more on choosing the right place, see [how to choose a trustworthy buyer](/finding-the-best-cash-for-gold-options).

## Where to go

Cash for Gold VA offers exactly this experience at four Northern Virginia locations, in Annandale, Manassas, Chantilly, and Vienna/McLean, each with free appraisals, transparent offers, and instant payout.

## Frequently asked questions

**Do I need an appointment to sell gold?**
No. Walk-ins are welcome at every location, and appraisals are free whether or not you decide to sell.

**How long does it take?**
Usually just a few minutes, depending on how many items you bring. Testing, weighing, and the offer all happen while you wait.

**Will I be pressured to sell?**
Not at a reputable buyer. A good experience is no-obligation, with no pressure and no fee. You decide entirely on your own terms.

Ready for an easy sale? [Estimate your gold first](/gold-calculator) or [visit any location](/contact-us-cash-for-gold-locations).`,
  },
  {
    slug: "top-places-to-sell-coins-in-fairfax",
    title: "Top Places to Sell Coins in Fairfax, VA",
    seoTitle: "Sell Coins in Fairfax, VA | Bullion and Collectible Buyers",
    date: "2025-06-07",
    category: "Coins",
    excerpt:
      "Selling coins in Fairfax, VA? Whether you have gold and silver bullion, collectible coins, or an inherited collection, here is how to get a fair appraisal and avoid common mistakes.",
    body: `Coins are trickier to sell than scrap gold, because their value can come from two very different places: the metal they contain and the premium collectors pay for rarity and condition. Sell a collectible coin by its melt value alone and you can leave real money on the table. This guide explains how to sell coins in Fairfax the right way.

We appraise coins for Fairfax-area customers regularly, from single inherited gold pieces to full collections, and the first thing we do is figure out which kind of value a coin carries before naming a number.

## Two kinds of coin value

Every coin you bring in falls somewhere on this spectrum:

- **Bullion value.** Modern bullion coins like American Gold Eagles, Silver Eagles, and Krugerrands are valued mainly on their metal content, with a modest premium over spot.
- **Numismatic value.** Older, rare, or high-grade collectible coins can be worth far more than their metal, driven by scarcity, mint, year, and condition.

A trustworthy buyer evaluates both and pays whichever is higher. A buyer who only quotes melt value on a collectible coin is not the right one.

## How to sell coins without mistakes

A few rules protect your money:

1. **Do not clean your coins.** Cleaning can erase collectible value instantly. Leave them exactly as they are.
2. **Keep them in their holders.** If coins are in slabs or flips, leave them there.
3. **Bring any paperwork**, such as grading certificates or original receipts.
4. **Get bullion coins appraised against the live price**, and collectibles appraised by someone who understands numismatics.
5. **Compare on transparency.** A fair buyer explains exactly why a coin is worth what they are offering.

## What to look for in a Fairfax coin buyer

Choose a buyer who has a permanent storefront, tests and weighs bullion in front of you, ties bullion offers to the live spot price, recognizes numismatic premiums, and charges nothing for an appraisal. Genuine local reviews are the best signal that other sellers were treated fairly.

For bullion coins, you can estimate the metal value yourself using our [gold value calculator](/gold-calculator) before you visit.

## Where to sell coins near Fairfax

The Cash for Gold VA store most convenient to Fairfax is our **Chantilly** location at 14025 Lee Jackson Memorial Hwy, with Annandale and Vienna/McLean also nearby. Every location offers free, no-obligation appraisals and instant payout. We buy gold and silver coins, bullion, and collectible pieces, along with gold, silver, platinum, diamonds, and designer jewelry.

## Frequently asked questions

**Where can I sell coins in Fairfax, VA?**
Look for a storefront that values both metal content and collectible premium, and pays whichever is higher. The nearest Cash for Gold VA store is our Chantilly location on Lee Jackson Memorial Hwy.

**Should I clean my coins before selling?**
No. Cleaning can destroy collectible value. Bring coins exactly as they are, in any holders or slabs they came in.

**How are bullion coins priced?**
Mainly on their metal content at the live spot price, plus a modest premium. You can estimate the metal value with our [calculator](/gold-calculator).

**What if I do not know whether my coins are valuable?**
Bring them in. A good buyer will tell you whether a coin is worth its melt value or carries a collectible premium, with no obligation to sell.

Have coins to sell in Fairfax? [Visit our Chantilly store](/contact-us-cash-for-gold-locations) for a free appraisal, or [estimate bullion value first](/gold-calculator).`,
  },
  {
    slug: "list-of-top-20-name-brand-in-gold-jewelry",
    title: "Top 20 Name Brands in Gold Jewelry (and Why They Sell for More)",
    seoTitle: "Top 20 Designer Gold Jewelry Brands That Sell for More",
    date: "2025-06-06",
    category: "Jewelry",
    excerpt:
      "Designer gold jewelry from the right brand can sell for far more than its melt value. Here are 20 of the most sought-after names and how brand, condition, and provenance affect what you are paid.",
    body: `Not all gold jewelry is valued the same way. A plain chain is worth its metal content, but a signed piece from a major design house can be worth several times its melt value because of brand, craftsmanship, and collector demand. If you own designer jewelry, knowing the name on the clasp can be the difference between a scrap offer and a premium one.

We appraise designer and luxury jewelry across our Northern Virginia stores, and the first thing we check on any high-end piece is the maker's mark. Here are the brands that consistently command a premium, and how to make sure you are paid for it.

## Why brand adds value beyond the gold

A designer piece carries value that a generic one does not:

- **Brand recognition and demand** from collectors and the resale market.
- **Craftsmanship and design** that cannot be replicated by melting and recasting.
- **Provenance**, such as original boxes, papers, and serial numbers, which can raise value significantly.

For these pieces, selling by weight alone is a mistake. They deserve a full appraisal that accounts for the brand premium on top of the metal.

## 20 designer brands that command a premium

1. Cartier
2. Tiffany & Co.
3. Van Cleef & Arpels
4. Bulgari
5. Harry Winston
6. Graff
7. Chopard
8. Piaget
9. David Yurman
10. Boucheron
11. Buccellati
12. Mikimoto
13. Pomellato
14. Roberto Coin
15. Chaumet
16. Damiani
17. John Hardy
18. Marco Bicego
19. Georg Jensen
20. Tacori

If your piece is signed by one of these, set it aside for an individual appraisal rather than estimating it as scrap.

## How to protect the brand premium

1. **Find the hallmark.** Check clasps, inner bands, and backs for the maker's mark and metal stamp.
2. **Gather the provenance.** Original boxes, receipts, and certificates can raise the offer.
3. **Do not alter or over-clean.** Refinishing or repairs can reduce collectible value.
4. **Have it appraised by a buyer who recognizes brands**, not one who only weighs metal.

For unsigned or broken gold, you can estimate the metal value with our [gold value calculator](/gold-calculator). For designer pieces, bring them in for a full appraisal.

## Where to sell designer gold jewelry

Cash for Gold VA buys designer and luxury jewelry at all four Northern Virginia locations: Annandale, Manassas, Chantilly, and Vienna/McLean. Every store offers free, no-obligation appraisals and instant payout, and we evaluate brand and gemstone value, not just metal weight.

## Frequently asked questions

**Does designer jewelry sell for more than its gold value?**
Often, yes. Pieces from major houses like Cartier, Tiffany & Co., and Van Cleef & Arpels can be worth several times their melt value because of brand and craftsmanship.

**How do I know if my jewelry is from a name brand?**
Look for a maker's mark or signature on the clasp, band, or back. Bring any original packaging or paperwork, which helps confirm authenticity and raises value.

**Should I sell designer pieces by weight?**
No. Have them appraised individually so the brand premium is included on top of the metal value.

Have a designer piece to sell? [Visit any location](/contact-us-cash-for-gold-locations) for a free appraisal, or [estimate plain gold here](/gold-calculator).`,
  },
  {
    slug: "how-to-sell-used-gold-in-chantilly-va",
    title: "How to Sell Used Gold in Chantilly, VA: A Step-by-Step Guide",
    seoTitle: "How to Sell Used Gold in Chantilly, VA | Cash for Gold VA",
    date: "2025-06-06",
    category: "Locations",
    excerpt:
      "A step-by-step guide to selling used gold in Chantilly, VA: how to prep your items, how purity and weight set your payout, and what to expect at a free, same-day appraisal.",
    body: `Used gold is worth real money, even when it is broken, tangled, or out of style. If you are in Chantilly and sitting on old jewelry, a single earring, or a drawer of mismatched chains, this guide walks you through selling it with confidence, step by step.

We test and weigh used gold for Chantilly customers every day at our local store, and the biggest surprise for most people is how straightforward and how transparent the process can be when you sell to the right buyer.

## Step 1: Gather everything, broken or not

Pull together every gold item you might sell. Do not set aside broken pieces; scrap gold is valued by its metal content, so a snapped chain is worth just as much per gram as an intact one. Leave everything as-is. There is no need to clean, polish, or repair anything, and doing so can actually risk value on delicate pieces.

## Step 2: Know your karat

Gold jewelry is almost never pure. The karat stamp tells you how much gold is in the alloy, and it drives the value:

| Karat | Gold content | Common stamp |
|---|---|---|
| 18k | 75.0% | 750 |
| 14k | 58.3% | 585 |
| 10k | 41.7% | 417 |

Check clasps, inner bands, and backs for these tiny stamps. A lighter 18k piece can be worth more than a heavier 10k one, so weight alone does not tell the whole story.

## Step 3: Estimate before you go

You do not have to walk in blind. Our [gold value calculator](/gold-calculator) pulls the live spot price and applies the same formula a buyer uses: per-gram spot price (spot divided by 31.1), multiplied by your karat purity, multiplied by the weight. A few minutes here means you will recognize a fair offer when you see one.

## Step 4: Get a transparent appraisal

At a reputable buyer, the appraisal happens in front of you:

1. Items are sorted by metal and karat.
2. Each piece is tested for purity and weighed on a calibrated scale.
3. The live spot price is pulled and a transparent offer is calculated, shown as a fair range.
4. You decide, with no pressure and no fee. Accept and walk out with cash the same day.

## Step 5: Set aside the special pieces

Not everything should be sold by weight. Designer-signed jewelry, antique pieces, and items with certified diamonds are often worth far more than their melt value. Coins can carry a premium too. Flag these for a full appraisal rather than estimating them as scrap.

## Where to sell used gold in Chantilly

Our **Chantilly** store sits at 14025 Lee Jackson Memorial Hwy, convenient from Centreville, Fairfax, and Herndon. We offer free, no-obligation appraisals, instant payout, and the same transparent, live-price method at all four of our Northern Virginia locations. We buy used gold, silver, platinum, diamonds, designer jewelry, watches, and coins.

## Frequently asked questions

**Can I sell broken or used gold in Chantilly?**
Yes. Broken chains, single earrings, and worn pieces are valued by their metal content, the same per gram as intact gold. Bring it all to our Chantilly store.

**How do I know how much my used gold is worth?**
Find the karat, weigh it, and use our [calculator](/gold-calculator) for a realistic range based on the live price. Bring the items in for an exact, no-obligation offer.

**Do I need to clean my gold first?**
No. Items are tested and weighed as-is, and cleaning delicate pieces can risk damage. Bring them exactly as they are.

Ready to turn used gold into cash in Chantilly? [Estimate your items](/gold-calculator) or [visit our Chantilly store](/contact-us-cash-for-gold-locations) for a free appraisal.`,
  },
  {
    slug: "understanding-cash-for-gold-services-reviews",
    title: "Using Reviews to Find a Trustworthy Cash for Gold Buyer",
    seoTitle: "How to Read Cash for Gold Reviews Before You Sell",
    date: "2025-06-06",
    category: "Guides",
    excerpt:
      "Reviews are the best window into how a cash for gold buyer treats people. Here is how to read them critically, what to look for, and which red flags should send you elsewhere.",
    body: `When you cannot test a buyer yourself before selling, the next best thing is the experience of everyone who sold before you. That is what reviews give you. Read well, they reveal whether a cash for gold business treats people fairly and transparently. Read carelessly, they can mislead. Here is how to use them properly.

A strong, genuine review history is one of the clearest signals of a trustworthy buyer. Ours sits at 4.9 stars across hundreds of reviews, and we encourage sellers to scrutinize that record.

## What good reviews actually tell you

Look past the star rating for patterns in what people describe:

- **Transparency.** Do reviewers mention that the offer was explained and the testing done in front of them?
- **Fair pricing.** Do people feel they got a fair price relative to the market?
- **No pressure.** Are there repeated mentions of a no-obligation, relaxed experience?
- **Consistency.** Do positive experiences repeat across many reviews over a long period?

A handful of glowing reviews posted in a single week means less than years of steady, specific, positive feedback.

## Red flags in reviews

Watch for recurring complaints about:

- **Lowball offers** or prices far below the market.
- **Hidden fees** or deductions that were not explained.
- **Pressure tactics** or offers that expired on the spot.
- **Testing done out of sight** or disputes over weight.
- **Bait-and-switch** quotes that dropped at the counter.

One bad review is normal. A pattern of the same complaint is a warning.

## How to read reviews critically

1. **Read the middle.** Three- and four-star reviews are often the most honest.
2. **Look for specifics.** Detailed accounts are more credible than vague praise.
3. **Check across platforms.** Cross-reference Google and other sources.
4. **Weigh recency and volume.** A long, consistent track record beats a recent burst.

Reviews are one part of vetting a buyer. Combine them with the practical checks in our guide on [how to choose a trustworthy buyer](/finding-the-best-cash-for-gold-options).

## Where reputation meets transparency

Cash for Gold VA backs its reputation with a transparent, live-price process at four Northern Virginia locations, free appraisals, and no-obligation offers. The best way to confirm any buyer is to combine strong reviews with seeing that transparency in person.

## Frequently asked questions

**How do reviews help me choose a cash for gold buyer?**
They reveal how a buyer treats people: whether offers are transparent, prices fair, and the experience pressure-free. Look for a long, consistent history of specific, positive feedback.

**What review red flags should I watch for?**
Recurring complaints about lowball offers, hidden fees, pressure tactics, or testing done out of sight. A pattern matters more than any single review.

**Are a lot of five-star reviews enough?**
Not on their own. Look for volume, recency, specifics, and consistency over time, and cross-check across platforms.

Ready to sell to a buyer you can trust? [Visit any location](/contact-us-cash-for-gold-locations) or [estimate your gold first](/gold-calculator).`,
  },
  {
    slug: "we-buy-estate-gold-jewelry",
    title: "We Buy Estate Gold Jewelry: How Inherited Pieces Are Valued",
    seoTitle: "Sell Estate and Inherited Gold Jewelry | Cash for Gold VA",
    date: "2025-06-06",
    category: "Jewelry",
    excerpt:
      "Selling estate or inherited gold jewelry? Learn how antique pieces, gemstones, and designer marks are valued beyond their metal content, and how to get a fair appraisal for a full collection.",
    body: `Estate jewelry, the kind inherited from a parent or grandparent, is often worth far more than the people selling it expect. These pieces can combine valuable gold, genuine gemstones, designer craftsmanship, and antique appeal, and each of those can carry value well beyond the metal. Selling an estate collection well means getting all of that recognized, not just the weight on the scale.

We regularly appraise estate collections for Northern Virginia families, from a single heirloom ring to a full jewelry box, and our job is to identify every source of value before naming a number.

## What makes estate jewelry valuable

An inherited piece can hold value in several layers at once:

- **Gold and precious metal content**, valued at the live spot price.
- **Gemstones**, including diamonds, sapphires, rubies, and emeralds, which are appraised separately from the metal.
- **Designer or maker marks** from houses whose pieces command a premium.
- **Antique and period value**, where age, style, and craftsmanship matter to collectors.

A buyer who only weighs the gold will miss most of this. Estate pieces deserve a full, layered appraisal.

## How to sell an estate collection

1. **Keep everything together** at first, even pieces that look worn or broken. Let the appraisal sort value, not your guesswork.
2. **Do not clean or repair** antique pieces. Original condition often matters to value.
3. **Gather any documentation**, such as old appraisals, receipts, certificates, or boxes.
4. **Have gemstones and designer pieces appraised individually**, not lumped in as scrap.
5. **Choose a buyer who evaluates all of it**, metal, stones, brand, and age, in front of you.

For the plain gold portion of a collection, you can get a quick estimate with our [gold value calculator](/gold-calculator). For everything else, an in-person appraisal is the only way to capture the full value.

## Why sell to a local storefront

Estate collections are exactly the kind of items you do not want to mail away. A local buyer lets you keep the pieces until you accept an offer, asks questions in person, and pays the same day. Cash for Gold VA buys estate gold jewelry, gemstones, designer pieces, and coins at all four Northern Virginia locations, with free, no-obligation appraisals and instant payout.

## Frequently asked questions

**How is estate jewelry valued?**
By layers: the gold at the live spot price, gemstones appraised separately, plus any designer or antique premium. A good buyer evaluates all of these, not just the metal weight.

**Should I clean inherited jewelry before selling?**
No. Cleaning or repairing antique pieces can reduce their value. Bring them as they are.

**Can I sell a whole collection at once?**
Yes. Bring the full collection for a free appraisal. Each piece is evaluated for metal, stones, brand, and age, and you decide what to sell with no obligation.

Have an estate collection to sell? [Visit any location](/contact-us-cash-for-gold-locations) for a free appraisal, or [estimate the gold first](/gold-calculator).`,
  },
  {
    slug: "we-pay-90-percent-for-gold-coins",
    title: "We Pay Up to 90% for Gold Coins: How the Math Works",
    seoTitle: "We Pay Up to 90% for Gold Coins | Cash for Gold VA",
    date: "2025-06-06",
    category: "Coins",
    excerpt:
      "Why can a gold coin fetch up to 90% of its value when scrap gold cannot? Learn how payout percentages work, why recognized bullion coins pay closer to spot, and how we keep every offer transparent.",
    body: `When people hear a buyer pays up to 90% for gold coins, the natural question is how that is possible when scrap jewelry typically pays less. The answer is not a gimmick; it comes down to how easy a coin is to verify and resell. This guide explains the math behind the percentage so you can judge any offer for yourself.

We buy gold coins across Northern Virginia every week, and we believe the percentage you are paid should never be a mystery. Here is exactly what drives it.

## Why coins pay a higher percentage than scrap

Every gold offer is a share of the metal's live market value. How large that share is depends mostly on what the buyer has to do before the gold can re-enter the market:

- **Recognized bullion coins** like American Gold Eagles, Maple Leafs, and Krugerrands are standardized, stamped, and instantly verifiable. They can be resold as-is, so there is little cost between buying and reselling. That is why they can pay close to their full melt value, often up to around 90% or more.
- **Scrap gold jewelry** has to be melted, refined, and re-assayed before it returns to the market. Those refining costs are real, so scrap pays a somewhat lower share of spot.

In other words, the higher percentage on coins is not generosity, it is economics: less work between purchase and resale means more of the value can go to you.

## How the percentage is calculated

Start with the melt value: the coin's pure gold content multiplied by the live spot price per gram (spot per ounce divided by 31.1). A fair buyer then pays a transparent percentage of that value, adding a premium for proof or collectible coins where it applies. You can estimate the melt value of any coin yourself with our [gold value calculator](/gold-calculator).

A worked example: a 1 oz gold coin at a $2,400 spot price has roughly $2,400 in melt value. At 90%, that is about $2,160 before any collectible premium. Because the coin is recognized and easy to resell, that high share is realistic in a way it would not be for an equal weight of mixed scrap.

## What can change the number

- **Coin type and recognition.** Widely traded bullion coins command the highest percentages.
- **Condition and authenticity.** Coins are tested and verified; damaged or questionable pieces may be valued closer to pure melt.
- **Collectible premium.** Proof, graded, or key-date coins can be worth more than melt. Bring any certificates.

## Our promise on transparency

At Cash for Gold VA, we test and verify every coin in front of you, tie the offer to the live spot price, and explain the percentage out loud before you decide. There is no obligation and no fee to get an appraisal. That openness is why we hold a 4.9-star rating across hundreds of reviews.

## Frequently asked questions

**Why do gold coins pay a higher percentage than scrap gold?**
Recognized bullion coins are easy to verify and resell as-is, while scrap must be melted and refined first. Lower processing cost means a higher share of the value goes to you.

**How do I know the percentage is fair?**
Estimate the melt value with our [calculator](/gold-calculator), then compare it to the offer. A trustworthy buyer will explain the percentage and tie it to the live spot price.

**Do you pay extra for proof or collectible coins?**
Yes. Where a coin carries a collectible premium above its metal value, that is appraised on top of the melt value.

Want to know what your gold coins are worth? [Estimate them now](/gold-calculator) or [visit any location](/contact-us-cash-for-gold-locations) for a free, no-obligation appraisal.`,
  },
  {
    slug: "is-cash-for-gold-worth-it",
    title: "Is Cash for Gold Worth It? When Selling Makes Sense",
    seoTitle: "Is Cash for Gold Worth It? | Cash for Gold VA",
    date: "2025-06-06",
    category: "Guides",
    excerpt:
      "Is cash for gold worth it? For unwanted, broken, or inherited gold you will never use, often yes. Here is how to decide when selling makes sense and when it might not.",
    body: `Cash for gold has a mixed reputation, and some of it is deserved: sell to the wrong buyer and you can be disappointed. But sell the right items to a transparent buyer, and turning unused gold into cash is one of the easier financial wins available. The honest answer to "is it worth it?" is: it depends on what you have and who you sell to.

We would rather you sell for the right reasons than regret it later, so here is a straight look at when cash for gold makes sense.

## When selling makes sense

Cash for gold is usually worth it when you have:

- **Broken or damaged jewelry** you will never repair or wear.
- **Mismatched or single pieces**, like one earring or a tangle of old chains.
- **Inherited gold you do not use** and have no sentimental attachment to.
- **Outdated styles** sitting unworn in a drawer.
- **Scrap gold** with no collectible or designer value.

In these cases, the gold is doing nothing for you, and at today's strong prices it can be worth more than people expect. Estimate yours with our [gold value calculator](/gold-calculator) to see.

## When to pause before selling

Selling may not be the best move, or may need a specialist, when:

- The piece has **sentimental value** you would regret losing.
- It is a **designer, antique, or collectible** item that could fetch more through specialized resale than melt value.
- It contains **significant gemstones** that should be appraised separately.
- It is **investment bullion** and you are selling purely on a short-term price dip.

None of these mean "never sell," only "get a full appraisal first" so you understand the true value before deciding.

## How to make it worth it

The experience is worth it when you:

1. **Sell the right items** (unwanted, non-sentimental, non-collectible scrap and jewelry).
2. **Know your value** before you go.
3. **Choose a transparent buyer.** See [how to choose a trustworthy buyer](/finding-the-best-cash-for-gold-options).
4. **Get the best offer** by preparing well. See [how to maximize your payout](/maximizing-your-profit-with-cash-for-gold).

## The bottom line

For unwanted gold you will never use, cash for gold is genuinely worth it, especially in a strong market and with a fair, local buyer. The key is selling the right items to the right buyer at a transparent price.

## Frequently asked questions

**Is cash for gold worth it?**
For broken, unused, or inherited gold you will not wear, usually yes, especially at today's prices. For sentimental, designer, or collectible pieces, get a full appraisal first.

**Will I get a good price?**
You will if you sell to a transparent buyer who ties offers to the live spot price. Estimate your gold with our [calculator](/gold-calculator) so you can judge any offer.

**What should I not sell as scrap?**
Designer, antique, and collectible pieces, and items with significant gemstones. These are often worth more than their melt value and deserve individual appraisal.

Wondering what your gold is worth? [Estimate it now](/gold-calculator) or [visit any location](/contact-us-cash-for-gold-locations) for a free appraisal.`,
  },
  {
    slug: "selling-gold-jewelry",
    title: "How to Sell Gold Jewelry: A Simple Guide to a Fair Price",
    seoTitle: "How to Sell Gold Jewelry for a Fair Price | Cash for Gold VA",
    date: "2026-01-15",
    category: "Jewelry",
    excerpt:
      "How to sell gold jewelry and actually get a fair price: understand karat and weight, estimate your pieces against the live price, separate the designer items, and choose a buyer who explains the offer.",
    body: `Selling gold jewelry should be simple, and with a little preparation it is. The reason people end up disappointed is almost never the gold itself; it is selling to the wrong buyer, or selling a valuable piece as if it were scrap. This guide covers the few things that actually matter so you walk away with a fair price.

We have helped Northern Virginia customers sell gold jewelry for years, and the sellers who do best all do the same simple things first.

## Understand what sets the price

The value of plain gold jewelry comes from three numbers: the live spot price, the karat purity, and the weight in grams. A buyer converts the per-ounce spot price to a per-gram figure (spot divided by 31.1), multiplies by the karat fraction, and multiplies by the weight, minus a small refining margin.

The karat is the part most people overlook:

| Karat | Gold content | Common stamp |
|---|---|---|
| 18k | 75.0% | 750 |
| 14k | 58.3% | 585 |
| 10k | 41.7% | 417 |

Because purity varies this much, a lighter 18k piece can be worth more than a heavier 10k one. Check clasps and inner bands for the stamp before you sell.

## Estimate before you go

Walking in with a rough number in mind is the single best protection against a lowball. Our [gold value calculator](/gold-calculator) uses the live price and the same formula a buyer uses, so you can estimate any piece in minutes and recognize a fair offer instantly.

## Separate the pieces worth more than their gold

Not everything should be sold by weight. Set aside:

- **Designer or signed pieces**, which carry a brand premium.
- **Items with genuine gemstones**, appraised separately from the metal.
- **Antique or estate pieces**, where age and craftsmanship add value.

Have these appraised individually rather than estimating them as scrap.

## Choose the right buyer

A fair buyer has a permanent storefront, tests and weighs in front of you, ties offers to the live spot price, charges nothing for an appraisal, and has genuine local reviews. If a buyer will not explain how they reached the number, that is your cue to leave.

## Where to sell in Northern Virginia

Cash for Gold VA buys gold jewelry at four locations: Annandale, Manassas, Chantilly, and Vienna/McLean. Every store offers free, no-obligation appraisals and instant payout, and we evaluate brand and gemstone value, not just metal weight.

## Frequently asked questions

**How much can I sell my gold jewelry for?**
It depends on the live spot price, the karat, and the weight. Use our [calculator](/gold-calculator) for a realistic range, then bring the pieces in for an exact offer.

**How do I sell gold jewelry without getting lowballed?**
Know your karat and weight, estimate first with our calculator, separate designer and gem-set pieces, and sell only to a buyer who explains the offer and ties it to the live price.

**Do you buy broken gold jewelry?**
Yes. Broken chains and single earrings are valued by their metal content, the same per gram as intact pieces.

Ready to sell? [Estimate your jewelry](/gold-calculator) or [visit any location](/contact-us-cash-for-gold-locations) for a free appraisal.`,
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

// Cover images per post, mapped to the topic from the existing public/ library
// (storefront photos for location posts, product/category shots for the rest).
// All images are local landscape JPGs that render well full-bleed.
const BLOG_COVERS: Record<string, string> = {
  "gold-price-today": "/categories/gold-bars.jpg",
  "cash-for-gold-falls-church-va": "/photos/storefront-annandale.jpg",
  "cash-for-gold-nova-falls-church-va": "/photos/storefront-vienna.jpg",
  "sell-gold-alexandria-va": "/products/jewelry/goldlot.jpg",
  "cash-for-gold-loudoun-county-va": "/photos/storefront-chantilly.jpg",
  "top-places-to-sell-gold-in-centreville": "/photos/storefront-manassas.jpg",
  "how-to-sell-used-gold-in-chantilly-va": "/photos/storefront-chantilly.jpg",
  "cash-for-gold-close-to-me": "/photos/storefront-annandale.jpg",
  "top-places-to-sell-coins-in-fairfax": "/products/coins/collection.jpg",
  "we-buy-1-oz-american-gold-eagle-coins": "/products/gold/eagle.jpg",
  "we-pay-90-percent-for-gold-coins": "/products/gold/krugerrand.jpg",
  "list-of-top-20-name-brand-in-gold-jewelry": "/products/jewelry/necklace.jpg",
  "we-buy-estate-gold-jewelry": "/products/jewelry/estate-collection.jpg",
  "selling-gold-jewelry": "/products/jewelry/chains.jpg",
  "we-buy-diamonds-more-than-1-carat-with-gia": "/products/diamonds/certified.jpg",
  "how-bullion-banks-influence-gold-prices": "/products/gold/bar10oz.jpg",
  "understanding-the-role-of-bullion-banks": "/categories/precious-metals.jpg",
  "current-trends-in-gold-prices-today": "/categories/gold-coins.jpg",
  "exploring-the-allure-of-chantilly-gold": "/products/gold/sovereign.jpg",
  "finding-the-best-cash-for-gold-options": "/products/jewelry/box.jpg",
  "finding-the-best-cash-for-gold-offers": "/products/jewelry/goldlot.jpg",
  "maximizing-your-profit-with-cash-for-gold": "/products/gold/bar1oz.jpg",
  "maximizing-your-cash-for-gold-experience": "/photos/storefront-vienna.jpg",
  "understanding-the-cash-for-gold-process": "/photos/storefront-chantilly.jpg",
  "is-cash-for-gold-worth-it": "/products/jewelry/mismatched.jpg",
  "understanding-cash-for-gold-services-reviews": "/photos/storefront-manassas.jpg",
};

// Per-category fallback so any future post still gets a sensible cover.
const CATEGORY_COVERS: Record<string, string> = {
  Locations: "/photos/storefront-chantilly.jpg",
  Coins: "/products/coins/collection.jpg",
  Jewelry: "/products/jewelry/necklace.jpg",
  Diamonds: "/products/diamonds/certified.jpg",
  "Precious Metals": "/categories/precious-metals.jpg",
  Gold: "/categories/gold-bars.jpg",
  "Gold Prices": "/categories/gold-coins.jpg",
  Guides: "/products/jewelry/goldlot.jpg",
};

/** Resolve a post's cover image: explicit override, slug map, then category fallback. */
export function coverImage(post: BlogPost): string {
  return post.image ?? BLOG_COVERS[post.slug] ?? CATEGORY_COVERS[post.category] ?? "/categories/gold-bars.jpg";
}

/** All posts, newest first (POSTS is already authored in that order). */
export const POSTS_BY_DATE = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

/** Distinct topical categories, in first-seen order. */
export const BLOG_CATEGORIES = Array.from(new Set(POSTS.map((p) => p.category)));

/** Up to `n` related posts: same category first, then newest others. */
export function relatedPosts(slug: string, n = 3): BlogPost[] {
  const post = getPost(slug);
  if (!post) return [];
  const others = POSTS_BY_DATE.filter((p) => p.slug !== slug);
  const sameCat = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...sameCat, ...rest].slice(0, n);
}
