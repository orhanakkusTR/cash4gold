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
    slug: "selling-gold-in-northern-virginia",
    title: "How to Sell Gold in Northern Virginia: A Step-by-Step Local Guide",
    seoTitle: "Selling Gold in Northern Virginia: What to Know Before You Go",
    date: "2026-07-07",
    category: "Locations",
    excerpt:
      "Selling gold in Northern Virginia is straightforward once you know how payouts actually work: karat, weight, and the live spot price. This local guide covers what to bring, what Virginia law requires, how to spot a fair buyer, and where to sell across NoVA — from the Beltway to Manassas.",
    body: `If you have a drawer of broken chains, an old class ring, or inherited jewelry you'll never wear, selling gold in Northern Virginia is one of the easier errands you'll run this month — as long as you understand how the process works before you walk in. This guide covers exactly that: what determines your payout, what to bring, what Virginia law requires, and how to tell a fair offer from a lowball. If you'd rather skip straight to the destination, our [sell gold in Northern Virginia](/cash-for-gold-northern-virginia) hub covers the buying side in detail.

## Why NoVA Is a Good Place to Sell Gold

Not every region treats gold sellers well. Northern Virginia does, for a few practical reasons:

- **Dense with established storefront buyers.** Between the inner Beltway, the Route 50 corridor, and Prince William County, you can get multiple in-person offers in a single afternoon. That honest competition keeps offers closer to the metal's real value than in areas with one buyer per county.
- **Steady demand.** Gold buyers here resell and refine constantly, so they can afford to pay against the live market rather than sitting on inventory.
- **You don't have to mail anything.** Mail-in gold services ask you to ship your valuables to a stranger and accept whatever comes back. In NoVA, you can watch your items tested and weighed in front of you and walk out paid the same visit.

Our four stores — Annandale, Chantilly, Manassas, and Vienna/Tysons — blanket the region from inside the Beltway out to Prince William and the Dulles/Tysons corridor, so most of Northern Virginia is within a 20-minute drive of one.

## What Actually Determines Your Payout

Gold pricing isn't mysterious. Three factors set the number, and a trustworthy buyer will show you all three.

### 1. Karat (purity)

Most jewelry isn't pure gold — it's an alloy. The karat stamp tells you how much of the item is actually gold:

| Karat | Gold content | Common uses |
|---|---|---|
| 10K | 41.7% | Budget jewelry, class rings |
| 14K | 58.3% | Most US jewelry |
| 18K | 75.0% | Fine and designer jewelry |
| 22K | 91.7% | South Asian and Middle Eastern jewelry |
| 24K | 99.9% | Bullion, coins, some bars |

Stamps can be worn or wrong, so a serious buyer verifies purity with testing rather than taking the stamp at face value — and does it in front of you.

### 2. Weight

Gold is weighed in grams or troy ounces on a calibrated scale. At our stores, that scale sits on the counter where you can see the readout — not in a back room.

### 3. The live spot price

Gold trades globally around the clock, and the "spot price" is what the market pays right now. Your offer should be calculated against it, openly. As an illustrative example only: if gold were around $2,700 per troy ounce, a 14K item would carry roughly 58.3% of that value per ounce of weight, minus the buyer's margin. The exact numbers change daily — which is why an offer quoted against the live price beats any "flat rate per gram" a buyer printed last month. You can see how we handle this on our [gold buying service page](/precious-metals/sell-gold).

> **Key takeaway:** A fair gold payout is simply karat × weight × live spot price, minus a transparent margin. If a buyer won't test in front of you, show the scale, or reference the live price, the number they quote is a guess designed to favor them.

## How to Prepare: What to Bring

You don't need to polish anything or get a jeweler's appraisal first. Here's what actually helps:

1. **A government-issued photo ID.** Virginia law requires it for every precious-metals purchase, no exceptions, and sellers must be 18 or older. This protects you — it's how the state deters stolen-goods trafficking.
2. **Everything, including the broken stuff.** Single earrings, kinked chains, dental gold, and mismatched pieces are all worth their metal content. Don't pre-sort what you think is "worthless."
3. **Any paperwork you have.** Boxes, certificates, or receipts aren't required, but for designer pieces, watches, or certified diamonds they can raise the offer above melt value.
4. **Sorted by type if you can.** Separating obvious gold from silver-toned pieces speeds things up. If you have flatware or a tea service in the mix, our companion guide to [selling silver and sterling sets](/selling-silver-in-northern-virginia) covers how sterling is valued differently.

If what you're selling came from a family member, take a breath before you go. There's no rush — a good buyer will appraise [estate or inherited gold](/we-buy-estate-gold-jewelry) piece by piece and flag anything worth more intact than melted, so you can sell some items and keep others.

## How to Spot a Fair Buyer (and Avoid a Lowball)

A quick field test you can run in any shop:

- **Transparency:** Testing and weighing happen in front of you, with the spot price referenced openly.
- **No pressure:** You keep possession of your items until you accept, and "no thanks" ends the conversation politely. Free appraisals should carry zero obligation.
- **Reputation:** Check recent Google reviews — volume and recency matter more than a perfect score. (Ours stands at 4.9★ across 500+ reviews, and we'd encourage you to read them rather than take our word.)
- **Compliance:** They ask for your photo ID. A buyer who skips the legally required step is telling you something.

We've written a deeper breakdown on [how to tell a fair buyer from a lowball](/finding-the-best-cash-for-gold-options), plus a checklist of [what to watch out for before you sell](/what-to-watch-out-for-when-selling-gold) — worth five minutes if you're comparing offers.

## Where to Sell Gold in Northern Virginia

Once you're ready, the fastest route is an in-person visit — no appointment needed. Cash for Gold VA runs four stores across the region — Annandale, Chantilly, Manassas, and Vienna/Tysons. Each store's address, hours, and phone are on the store cards just below, and full details are on our [locations page](/locations). No store in your city? You're still close: sellers in [Alexandria](/cash-for-gold-alexandria) usually find Annandale the quickest drive, [Fairfax](/cash-for-gold-fairfax) sits minutes from both Annandale and Chantilly, and the [Tysons corridor](/cash-for-gold-tysons) is served by our Vienna store on Tyco Rd.

Every visit works the same way: free, no-obligation appraisal against the live spot price, items tested and weighed on a calibrated scale in front of you, and you keep your items until you accept. Say yes and it's an instant payout — you walk out with cash the same visit. For the full rundown of what we buy — gold in every karat, silver, platinum, palladium, diamonds, designer jewelry, luxury watches, coins, and electronics — start at our [cash for gold in Northern Virginia](/cash-for-gold-northern-virginia) hub, or just stop by whichever store is closest.`,
  },
  {
    slug: "selling-silver-in-northern-virginia",
    title: "How to Sell Silver in Northern Virginia: Sterling Sets, Flatware, Coins and Bullion",
    seoTitle: "Sell Silver in Northern Virginia | Sterling Sets, Coins & Bullion",
    date: "2026-07-07",
    category: "Precious Metals",
    excerpt:
      "Sterling flatware services, tea sets, jewelry, pre-1965 coins, and .999 bullion all have real melt value — if they're actually solid silver. Learn how to read hallmarks, spot silverplate, understand troy-ounce math, and get a free, transparent appraisal at four Northern Virginia stores with instant payout.",
    body: `Most households in Northern Virginia have some silver tucked away — a flatware chest from a wedding decades ago, a tea service from a grandparent, a coffee can of old coins. The hard part isn't finding a buyer; it's knowing what you actually have. Solid sterling has real melt value. Silverplate mostly doesn't. This guide walks through the difference, how sterling sets are valued, and what to expect when you [sell silver at Cash for Gold VA](/precious-metals/sell-silver) — free appraisal, tested and weighed in front of you, instant payout.

## The silver we buy

| Category | Typical items | How it's valued |
|---|---|---|
| Sterling jewelry | Chains, rings, bracelets, Southwestern and Mexican silver | Tested to confirm .925, then weighed against the live spot price |
| Sterling sets & hollowware | Flatware services, tea and coffee services, trays, bowls, candlesticks | Per-piece testing, total silver weight — weighted/reinforced pieces adjusted |
| Silver coins | Pre-1965 US 90% dimes, quarters, halves; silver dollars | By silver content per face value |
| Bullion | .999 fine bars and rounds | 85% of the live spot price — our published rate |

If it's genuinely silver, we'll make an offer on it — from a single ring at our [sterling silver jewelry counter](/jewelry/sell-silver-jewelry) to a full estate's worth of hollowware.

## Sterling or silverplate? Check before you drive

This is the single most useful thing you can do at home, because it sets your expectations correctly. Sterling silver is a solid alloy that is 92.5% pure silver. Silverplate is a thin layer of silver electroplated over a base metal like nickel or copper — the silver layer is so thin it has essentially no melt value, so plated pieces aren't paid as silver.

### Read the marks

Flip each piece over and look near the base, the back of the handle, or the rim.

| Mark | What it means |
|---|---|
| STERLING, STER, 925, .925 | Solid sterling silver (92.5% pure) |
| Lion passant (walking lion, British hallmark) | Sterling standard — at least 92.5% pure |
| 800, 835, 900 | Solid silver at lower purity (common on European pieces) |
| EPNS, EP, EPC | Electroplated — silverplate, not solid |
| A1, AA, Triple Plate, Quadruple Plate | Grades of plating thickness — still silverplate |
| Silver Plated, Silver on Copper | Plate, stated outright |

A helpful rule: plating marks describe the coating quality, not silver content. A piece stamped only *A1* or *EPNS* — with no *STERLING*, *925*, or lion passant — should be assumed plate.

### The magnet test and the ice myth, done honestly

Silver is not magnetic. If a piece snaps firmly to a magnet, it isn't solid silver. But the reverse proves nothing: copper, brass, and nickel silver — the usual base metals under plating — aren't magnetic either, so plenty of silverplate passes the magnet test.

The ice trick works on the same logic. Silver has the highest thermal conductivity of any metal, so an ice cube melts noticeably fast on a solid sterling tray. It's a fun demonstration — but plated pieces conduct heat too, so it's not proof. Marks plus professional testing are what actually settle the question, and that testing is exactly what we do in front of you at the counter.

## How sterling flatware and tea sets are valued

Sets are where the real money usually is, and they deserve a proper explanation. When you bring in [sterling silver sets, flatware and tea services](/precious-metals/sell-sterling-silver-sets), here's how the appraisal works:

1. **Every piece is checked individually.** Sets get mixed over generations — a sterling service often has a few plated serving spoons that migrated in, and the reverse happens too. We don't assume; we test.
2. **The sterling is weighed together on a calibrated scale**, in front of you, and priced against the live silver spot price.
3. **Weighted and reinforced pieces are adjusted.** This is the honest caveat most sellers don't hear up front.

### The knife and candlestick caveat

Sterling knives almost always have hollow handles filled with cement or resin, with a stainless steel blade — only the thin sterling shell is actually silver. Likewise, candlesticks, compotes, and trophy-style pieces marked *WEIGHTED* or *REINFORCED* are mostly filler by weight, with a silver skin over it. They still have value, but far less than their heft on a bathroom scale suggests. A fair buyer prices the silver, not the cement — and tells you which is which.

### The troy-ounce math

Precious metals trade in troy ounces (31.1 grams), not regular ounces. The melt value of sterling is:

**weight in troy oz × 0.925 × silver spot price**

As an illustration only — spot moves daily — if silver were around $30 per troy ounce, a 60-piece flatware service weighing 70 troy ounces (knives excluded) would contain about 64.75 troy ounces of pure silver, roughly $1,940 in metal value at that price. Offers are then a percentage of that melt value. You can check the live spot price yourself before you visit; we appraise against the same number.

## Why silver is a quantity game

Gold is worth so much per gram that a single ring is a meaningful sale. Silver trades at a small fraction of gold's price, so individual pieces are modest — a lone sterling teaspoon weighs well under a troy ounce. The value comes from volume: a full flatware service, a tea set, a tray, and a drawer of odd serving pieces can together add up to hundreds of troy ounces.

So bring everything, including the pieces you're unsure about. This matters most when you're clearing out [an inherited estate](/we-buy-estate-gold-jewelry) — sorting sterling from plate is exactly what the free appraisal is for, and there's no obligation to sell any of it.

## Pre-1965 coins: the 'junk silver' in your change jar

US dimes, quarters, and half dollars minted in 1964 or earlier are 90% silver. Dealers call them 'junk silver' — junk only in the sense that they carry no collector premium; the silver is very real. Every $1 of face value in circulated 90% coins contains about 0.715 troy ounces of pure silver, so even a modest coffee can adds up. Two details worth knowing: Kennedy half dollars from 1965–1970 are 40% silver (still worth bringing), and 1965-or-later dimes and quarters are copper-nickel with no silver at all. We buy [silver coins](/coins/sell-silver-coins) by their silver content, alongside silver dollars, bars, and rounds.

## What to expect at the appraisal

The process at all four stores is the same, and it's built to be watched:

- **Free, no-obligation, in-person appraisal** against the live silver spot price.
- **Every piece tested** to confirm .925 (or .999 for bullion) and **weighed on a calibrated scale in front of you**.
- **Silverplate separated out honestly** — we'll show you the marks and explain why a piece doesn't qualify.
- **You keep your items until you accept.** Decline, and everything goes back in the box.
- **Instant payout** — accepted offers are paid cash the same visit.
- Virginia law requires a government-issued photo ID, and sellers must be 18 or older.

On .999 fine bullion bars and rounds, our rate is published: 85% of spot. No guessing before you come in.

> **Key takeaway:** Sterling is solid 92.5% silver and is bought by weight against the live spot price; silverplate is a thin coating with no melt value. Check the marks at home, expect knives and weighted pieces to count for less than their heft, and remember that with silver, full sets — not single spoons — are where the money is.

## Where to sell silver in Northern Virginia

Cash for Gold VA has been rated 4.9★ across 500+ Google reviews, and you can [sell across Northern Virginia](/cash-for-gold-northern-virginia) at whichever of our four stores — Annandale, Chantilly, Manassas, or Vienna/Tysons — is closest. Each store's address, hours, and phone are on the store cards just below, and full details are on our [locations page](/locations). Bring the whole chest — flatware, hollowware, jewelry, coins, bars — and walk out the same visit with an instant payout for everything you choose to [sell as silver](/precious-metals/sell-silver). And if the same drawer holds gold, our guide to [selling gold in Northern Virginia](/selling-gold-in-northern-virginia) covers that side too.`,
  },
  {
    slug: "what-to-watch-out-for-when-selling-gold",
    title: "9 Red Flags to Watch Out for Before You Sell Your Gold or Silver",
    seoTitle: "Selling Gold? 9 Red Flags That Cost Sellers Real Money",
    date: "2026-07-07",
    category: "Guides",
    excerpt:
      "Most people who get shortchanged selling gold never realize it happened. From back-room appraisals to the pennyweight switch, here are nine red flags every seller should know before handing over jewelry, coins, or silver — plus a five-minute checklist that protects you at any buyer, including ours.",
    body: `Here's the uncomfortable truth about selling gold: the sellers who get shortchanged almost never know it. There's no alarm, no obvious scam moment — just a smiling buyer, a quick number, and a handshake. The tricks that cost you real money are quiet ones, and they work precisely because most people sell gold only once or twice in their lives.

We buy gold and silver every day at our four Northern Virginia stores, and we'd rather you walk in informed. So here's the insider list — the nine red flags that should make you pause, no matter whose counter you're standing at. Ours included.

## The 9 red flags

### 1. The appraisal happens where you can't see it

If a buyer takes your jewelry "to the back" to test and weigh it, that's the single biggest red flag in this business. Once your items leave your sight, you can't verify what was tested, what was weighed, or whether the piece that comes back is even yours. A legitimate buyer tests and weighs everything in front of you and explains what they're doing. If you're curious what that should look like step by step, we've written up [what a transparent appraisal looks like](/understanding-the-cash-for-gold-process) from start to finish.

### 2. One vague number for the whole pile

"I'll give you $400 for all of it." For what, exactly? A 10K class ring, a 14K bracelet, and an 18K chain have very different gold content — and lumping them together is how weak offers hide. Sterling silver mixed in makes it worse. Insist on an itemized breakdown: each piece's karat, its weight, and the price per gram. If the buyer won't break it down, they're counting on you not to do the math. This matters even more [if you're selling silver](/selling-silver-in-northern-virginia) alongside gold, because silver's per-gram value is far lower and easy to blur into a bulk quote.

### 3. The pennyweight switch

This is the classic. Gold is commonly weighed in grams or in pennyweights (dwt) — and one pennyweight equals about 1.55 grams. A dishonest buyer weighs your gold in pennyweights but quotes a per-gram price, or shuffles the units on the paperwork so the numbers look bigger than they are. The defense is simple: ask which unit they're using, and confirm the weight and the price are in the *same* unit. If the units change mid-conversation, walk.

### 4. The scale is hidden, tilted, or uncertified

In Virginia, commercial scales are supposed to be inspected and certified — look for the inspection seal. A scale you can't see, can't read, or that sits behind the counter facing away from you is a problem. So is a buyer who "eyeballs" weight or rounds down casually. At our counters the scale is calibrated, certified, and turned toward you, because the weight is half the equation and you deserve to watch it happen.

### 5. The hotel ballroom "buying event"

Traveling pop-up buyers rent a hotel conference room, blanket the area with ads, buy aggressively for a weekend, and leave. The pressure is built in: "this offer is only good today," because *they're* only there today. If something goes wrong — a miscount, a dispute, a piece that turns out to be worth far more — there's no storefront to return to. A buyer with a permanent local address has a reputation to protect. A buyer with a rented ballroom doesn't.

### 6. Mail-in kits: you lose possession before you hear a price

Mail-in gold services flip the entire power dynamic. You ship your items sight-unseen, wait, and then receive an offer — after your gold is already in their hands. Declining often means waiting again for return shipping and hoping everything comes back. Some services are legitimate, but structurally you've given up your leverage and your possession before a single number is discussed. In person, you keep your items in hand until the moment you accept. That's not a perk; it should be the baseline.

### 7. No ID, no receipt, no paper trail

Here's a counterintuitive one: a buyer who *doesn't* ask for your ID is the red flag. Virginia law requires precious-metals buyers to record a government-issued photo ID from every seller (18+). A buyer skipping that step is skipping the law — and if they'll cut that corner, imagine the corners you can't see. Legitimate buyers also hand you an itemized receipt. No paperwork means no recourse.

### 8. You only got one offer

Not a scam — just the most expensive mistake on this list. Offers for identical gold can vary dramatically between buyers because everyone's payout percentage against the spot price is different. Getting two or three quotes takes an afternoon and is the single highest-leverage thing you can do. We've put together a guide on [how to compare buyers](/finding-the-best-cash-for-gold-options) properly, and yes — we say that knowing you might compare us. Free, no-obligation appraisals exist for exactly this reason. Use them.

### 9. Scrapping a piece that's worth more than its weight

Melt value is the *floor*, not the ceiling. A signed designer piece, an antique with intact patina, or a collectible coin can be worth well above its gold content — and a scrap-only buyer will happily pay you the floor. Related trap: aggressively polishing an antique before selling can destroy the patina collectors pay for. If you suspect a piece has value beyond weight, say so and ask how it's being priced. Our guide to [getting the most for your gold](/maximizing-your-profit-with-cash-for-gold) covers when weight-based selling makes sense and when it doesn't.

> **Key takeaway:** Every one of these red flags is defeated by the same three demands — test and weigh it in front of me, itemize it by karat and unit, and let me hold my items until I say yes. Any buyer who resists any of those three has told you everything you need to know.

## Your 5-minute pre-sale checklist

- **Sort your items by karat** (check the stamps: 10K, 14K, 18K, 925 for sterling) so nothing gets bulk-quoted.
- **Weigh them at home** on a kitchen scale in grams — approximate is fine; you just need a sanity check.
- **Look up the live spot price** the day you sell, so you know the ballpark ceiling.
- **Set aside anything signed, antique, or collectible** — and don't clean it.
- **Bring your government photo ID** (required by Virginia law; sellers must be 18+).
- **Decide your walk-away number** before anyone quotes you.

If you're still weighing the decision itself, we've also covered [whether it's worth selling](/is-cash-for-gold-worth-it) in the first place — sometimes holding is the right call, and a good buyer will tell you that too.

## What the fair version looks like

None of this is meant to scare you off. [Selling gold in Northern Virginia](/selling-gold-in-northern-virginia) is straightforward when the buyer works in the open — and now you know exactly what "in the open" means: items tested and weighed on a calibrated scale in front of you, an offer built from the live spot price with a clear karat-by-karat breakdown, your items staying in your possession until you accept, and instant payout the same visit if you do.

That's how we run every appraisal at Cash for Gold VA — it's a big part of why we hold a 4.9-star Google rating across 500+ reviews as [a transparent buyer in Northern Virginia](/cash-for-gold-northern-virginia). Bring this article with you if you like. We mean that literally.

You'll find all four stores — Annandale, Chantilly, Manassas, and Vienna/Tysons — with addresses, hours, and phone numbers on the store cards just below and on our [locations page](/locations). Appraisals are free and no-obligation — walk in with questions, walk out with answers, and only sell if the number earns it.`,
  },
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

## What moves the gold price

You do not need to be an economist to understand why the number changes. A handful of forces drive it, and they interact daily:

- **Interest rates.** When rates fall, gold tends to rise, because holding non-yielding gold costs less relative to bonds or savings.
- **The U.S. dollar.** Gold is priced in dollars, so a weaker dollar usually pushes the price up.
- **Inflation and uncertainty.** In times of economic or geopolitical stress, buyers move toward gold as a store of value, lifting demand.
- **Central bank buying.** Sustained purchases by the world's central banks add steady, long-term demand.

These forces are also why gold has climbed to levels that would have seemed extraordinary a few years ago, and why no one can predict the exact path from here. For a seller, the takeaway is simple: a strong market means a higher payout for the same item today, but chasing the precise peak rarely pays off on everyday jewelry.

Different holdings respond differently, too. Scrap and jewelry gold move directly with the spot price; recognized bullion coins move with spot plus their premium; designer and antique pieces carry value beyond the metal, so a rising spot price is only part of their story.

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

## More than gold: what NoVA sellers bring in

Northern Virginia's affluence means the region's sellers bring far more than scrap chains, and a good buyer values all of it on the same transparent basis:

- **Silver** — flatware, coins, bars, and sterling sets, valued on the live silver price.
- **Platinum and palladium** — often found in wedding bands and settings, valued on their own live markets.
- **Diamonds and colored stones** — especially [GIA-certified diamonds over a carat](/we-buy-diamonds-more-than-1-carat-with-gia), appraised separately from the metal.
- **Luxury watches** — Rolex, Omega, and similar brands, valued on model and condition.
- **Designer jewelry and coins** — from Cartier and Tiffany pieces to American Gold Eagles and estate collections.

Whatever the item, the principle is the same across the region: a fair offer starts from the live market and is explained to you in the open.

## Find your nearest location

Cash for Gold VA has four Northern Virginia stores, so one is usually close by:

- **Annandale**: 7262 Columbia Pike (closest to [Falls Church](/cash-for-gold-falls-church), Bailey's Crossroads, and Springfield)
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

A buyer who answers all four openly has earned your trust.

## Use reviews to vet a buyer

When you cannot test a buyer yourself before selling, their review history is the next best thing. Read past the star rating for patterns:

- **Transparency.** Do reviewers mention the offer was explained and the testing done in front of them?
- **Fair pricing** relative to the market, and **no-pressure**, no-obligation visits.
- **Consistency.** Years of steady, specific feedback beat a burst of glowing reviews posted in one week.

Recurring complaints are the real warning: lowball offers, hidden fees, pressure tactics, or testing done out of sight. One bad review is normal; a pattern is not. Cross-check Google against other platforms, and pay attention to three- and four-star reviews, which are often the most honest. Our own record sits at 4.9 stars across hundreds of reviews.

## Where to start

Cash for Gold VA operates four Northern Virginia storefronts, in Annandale, Manassas, Chantilly, and Vienna/McLean, each offering free appraisals, transparent live-price offers, and instant payout. You can also [estimate your gold first](/gold-calculator), and once you have chosen a buyer, learn [how to maximize your payout](/maximizing-your-profit-with-cash-for-gold) before you go.

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

## Chantilly and the gold people hold here

Chantilly sits at the edge of the Dulles technology corridor, an area of established neighborhoods, growing families, and a steady stream of estates changing hands. That mix means the gold we see here is unusually varied: heirloom wedding sets and class rings, inherited coin collections, designer jewelry bought during good years, and the ordinary drawer of broken chains almost every household accumulates. When people in Chantilly, Centreville, and along Route 50 decide to sell, it is usually for a practical reason — a move, an estate to settle, a remodel, or simply turning unworn gold into cash while prices are strong.

## The forms gold takes when people sell

Gold's allure shows up in more shapes than most people realize, and each is valued a little differently:

- **Karat jewelry** (10k, 14k, 18k) is valued on its gold content — weight times purity against the live price.
- **Heirloom and antique pieces** may carry craftsmanship or designer value beyond the metal, so they are appraised individually.
- **Coins and bullion** are valued on their metal content plus any premium, and recognized coins like the [American Gold Eagle](/we-buy-1-oz-american-gold-eagle-coins) sell especially easily.
- **Dental gold, scrap, and single earrings** still hold full metal value — nothing gold is too small or too broken to sell.

Whatever form yours takes, the same principle applies: a fair offer starts from the live market and is explained to you in the open.

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

## Compare offers the right way

If you gather more than one quote, do not compare headline numbers alone:

1. **Compare share of spot.** What percentage of the live value is each buyer actually paying?
2. **Compare transparency.** A buyer who shows the test, the weight, and the math is usually paying fairly.
3. **Watch for hidden deductions.** Vague "fees" or "processing" charges quietly shrink your payout.
4. **Factor in convenience and trust.** A slightly higher mail-in quote is not worth losing control of your gold.

A buyer cannot lowball someone who already knows their number, so run your pieces through our [gold value calculator](/gold-calculator) before you compare anything.

## Then choose a fair buyer

Preparation only pays off if you sell to a transparent buyer. Once your items are ready, see [how to choose a trustworthy buyer](/finding-the-best-cash-for-gold-options).

## Where to sell

Cash for Gold VA evaluates metal, gemstone, brand, and collectible value, not just weight, at four Northern Virginia locations with free appraisals and instant payout.

## Frequently asked questions

**How can I get the most money for my gold?**
Sort by karat, separate designer, gem-set, and antique pieces for individual appraisal, bring everything including broken items, and sell to a transparent buyer. Estimate first with our [calculator](/gold-calculator).

**Does cleaning my gold increase its value?**
No. Cleaning or repairing pieces can actually reduce value, especially on antiques. Bring items exactly as they are.

**Are broken pieces worth selling?**
Yes. Broken gold is valued by its metal content, the same per gram as intact pieces.

**Should I get multiple offers?**
Comparing can help, but compare on share of spot and transparency, not just headline numbers. Avoid any buyer who deducts vague fees or quotes before testing.

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

## GIA versus other grading labs

Not all certificates carry the same weight. GIA is the strictest and most consistent grading lab, which is why its reports support the strongest offers. Reports from some other labs — certain EGL grades, for example — are often graded more loosely, meaning a stone may not be quite the color or clarity the paper claims. A knowledgeable buyer accounts for this, so if your stone has a non-GIA report, expect it to be re-evaluated in person rather than taken at face value. That does not automatically mean a lower offer; it means the grade is confirmed independently.

## Natural versus lab-grown diamonds

This distinction now matters enormously to your payout. **Natural diamonds** hold meaningful resale value. **Lab-grown diamonds**, though physically and chemically similar, have fallen dramatically in price as production has scaled, and they resell for only a small fraction of their original retail cost. A GIA report states plainly whether a stone is natural or laboratory-grown, which is one more reason certification helps: it settles the single biggest value question up front. If you are not sure which you have, an in-person test can confirm it before any offer is made.

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
    body: `Bullion banks are one of those terms you see in market headlines without ever getting a clear definition. Yet they sit at the heart of how gold and silver move around the world — and, indirectly, they help set the very price your local offer is built on. If you own precious metals, even a single inherited coin, it is worth understanding who these institutions are, what they do, and how that reaches the counter where you sell.

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

## How the global price reaches your offer

You will never trade directly with a bullion bank, but their activity sets the market you do participate in. The price flows downstream in a simple chain:

1. **Bullion banks and global markets** establish the live spot price for pure gold.
2. **Refiners and dealers** price physical gold off that benchmark.
3. **Local buyers** like us base every offer on the same live spot price, adjusted for your item's purity and weight.

So when you hear that gold hit a record, that figure originates in the same wholesale market the banks operate in, and it is the starting point for what your jewelry is worth today. The live price shown in our [gold value calculator](/gold-calculator) is downstream of exactly that market.

## Why your payout changes day to day

Because offers track the live spot price, they move with it. When global demand, interest rates, or the dollar shift the wholesale price, your potential payout shifts in the same direction. It is also why no honest local buyer can promise a fixed price weeks in advance: everyone is working from a market they do not control.

What this means when you sell:

- **There is no secret better price.** Every legitimate buyer starts from the same global spot price.
- **Transparency is the real differentiator.** What varies between buyers is the share of that value they pay and how openly they explain it.
- **Timing matters less than you think** for everyday jewelry. Day-to-day moves are usually small.

## Frequently asked questions

**What is a bullion bank in simple terms?**
A financial institution that trades gold and silver in large volumes on the wholesale market, providing liquidity, storage, and price-setting that keep the global metals market running.

**Can I sell my gold to a bullion bank?**
No. Bullion banks deal with miners, refiners, and large institutions, not individuals. To sell jewelry or coins, you visit a local buyer whose offers are based on the same market the banks help set.

**How do bullion banks affect the price I get?**
They help establish the spot price that local offers are built from. Your individual payout then depends on your item's purity and weight.

**Why does my offer change from week to week?**
Because it tracks the live spot price, which moves with global market conditions. A higher spot price means a higher payout for the same item.

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

## Reading the "near me" search results

The map you get from a "cash for gold near me" search mixes very different businesses, and they are not interchangeable:

- **Dedicated gold buyers** focus on precious metals and usually pay the most for scrap and jewelry.
- **Pawn shops** offer loans as well as buying; their outright-buy prices are often lower.
- **Jewelers** may buy, but many only take pieces they can resell, not scrap.
- **Traveling "we buy gold" events** in hotels or pop-ups have no lasting local accountability — the riskiest option.

Sort the results by genuine review volume and recency rather than proximity alone. A dedicated buyer fifteen minutes away with hundreds of real reviews beats a pop-up around the corner every time.

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

Between these four stores we are a short drive from most of Northern Virginia — Fairfax, Falls Church, Arlington, Springfield, Centreville, Herndon, Gainesville, and the Loudoun County line included. Whichever is closest, the method and the live-price offer are identical.

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

## What Loudoun County sellers bring in

Loudoun is one of the most affluent counties in the country, and that shows in what comes across our counter. Alongside everyday scrap gold, we regularly buy:

- **Designer and signed jewelry** — Tiffany, Cartier, David Yurman and similar brands, which carry a premium over their metal weight.
- **Luxury watches** — Rolex, Omega, and other Swiss brands, valued on brand, model, and condition, not melt.
- **Estate and inherited collections** from Leesburg and Middleburg families, often a mix of gold, coins, and gemstones best appraised piece by piece.
- **Investment bullion** — Gold Eagles, bars, and rounds picked up during the region's strong precious-metals interest.

If you are downsizing, settling an estate, or simply cashing in pieces you no longer wear, bringing the whole lot lets us find the value a weight-only buyer would miss.

## The nearest store to Loudoun County

The Cash for Gold VA location closest to Loudoun County is our **Chantilly** store at 14025 Lee Jackson Memorial Hwy (Route 50), just over the county line. It is a straightforward drive for most of Loudoun: roughly 15 to 20 minutes from Ashburn and South Riding, 20 to 25 from Sterling and Leesburg via the Dulles Greenway or Route 7, and an easy hop from the Route 50 corridor through Aldie and Arcola. If Vienna/McLean, Annandale, or Manassas is more convenient, all four stores use the same transparent method. Every location offers free, no-obligation appraisals, instant payout, and buys gold, silver, platinum, diamonds, designer jewelry, watches, and coins.

## Frequently asked questions

**Where can I sell gold in Loudoun County, VA?**
The most convenient Cash for Gold VA store is our Chantilly location on Lee Jackson Memorial Hwy, a short drive from Sterling, Ashburn, and Leesburg. Appraisals are free and same-day.

**How is my offer calculated?**
From the live spot price, your item's karat, and its weight. A small refining margin is subtracted on scrap gold. Everything is shown and explained before you decide.

**Do I need an appointment?**
No. Walk-ins are welcome and appraisals are always free, whether or not you choose to sell.

**Can I estimate my gold before visiting?**
Yes. Our [calculator](/gold-calculator) gives a realistic range from the live price so you know roughly what to expect.

**Do you buy more than scrap gold?**
Yes. Along with gold, silver, and platinum, we buy designer jewelry, luxury watches, diamonds, and bullion coins — items common in Loudoun estates that are often worth well above their metal value.

Find out what your gold is worth in Loudoun County. [Estimate it now](/gold-calculator) or [visit our Chantilly store](/contact-us-cash-for-gold-locations) for a free appraisal.`,
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

We run this process every day across our Northern Virginia stores, and we guide first-time sellers through it constantly. Here is exactly what happens and why each step matters, plus how to prepare so the visit is quick and stress-free.

## Before you go

A little preparation makes the visit smooth, and none of it is complicated:

- **Gather your items**, broken or whole, in one bag. No need to clean or sort.
- **Bring a photo ID**, which buyers are required to record.
- **Get a rough estimate** with our [gold value calculator](/gold-calculator) so you know what to expect.

There is no appointment to book and no paperwork to prepare — walk-ins are welcome.

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

## What a good experience never includes

If a buyer does any of these, treat it as your cue to leave:

- Pressure to decide on the spot, or a price that "expires" if you walk out.
- Testing or weighing done out of your sight.
- Any fee for the appraisal.

A reputable buyer keeps the whole visit calm, transparent, and entirely in your control — most sales take just a few minutes from greeting to cash in hand.

## Frequently asked questions

**How does the cash for gold process work?**
Your items are sorted, tested for purity, and weighed in front of you. The buyer applies the live spot price to calculate a transparent offer, and you decide whether to accept and get paid on the spot.

**Why do buyers test my gold?**
To confirm the actual karat, since stamps can be worn or inaccurate. Testing ensures the offer reflects the true gold content.

**Do I have to sell once I get an offer?**
No. Appraisals are free and carry no obligation. You can decline and keep your items.

**Do I need an appointment to sell gold?**
No. Walk-ins are welcome at every location, and appraisals are free whether or not you decide to sell.

**How long does the visit take?**
Usually just a few minutes, depending on how many items you bring. Testing, weighing, and the offer all happen while you wait.

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

**A quick example.** If gold is trading at $2,400 per troy ounce, the melt value of a 1 oz Eagle is about $2,400, and a typical bullion premium adds a modest amount on top. Because the coin is so liquid, a fair same-day offer tracks that melt figure closely and moves with the live market minute to minute — you should never see a deep discount to melt on a standard Eagle.

## The coin's specs, and how authenticity is verified

Part of what makes the Gold Eagle so easy to sell is that its specifications are fixed and public, so a fake is easy to catch. A genuine 1 oz Gold Eagle is:

- **22 karat (91.67% gold)**, alloyed with silver and copper — which is why it weighs about 33.9 grams in total while still containing a full troy ounce (31.1 g) of pure gold.
- **32.7 mm in diameter and 2.87 mm thick**, with a reeded edge.
- Struck with the classic **Augustus Saint-Gaudens Liberty** design on the front and an eagle motif on the back that varies by year.

A trustworthy buyer confirms these in front of you: precise weight on a calibrated scale, exact dimensions, and often an electronic conductivity test. Because the specs are so exact, an off-weight or off-size coin is spotted immediately — one more reason Eagles sell quickly and at a fair price.

## Fractional Eagles and related coins

Gold Eagles also come in **1/2 oz, 1/4 oz, and 1/10 oz** sizes. Each is valued the same way — its gold content at the live spot price plus a premium — though the premium as a percentage is usually higher on the smaller coins. We also buy the 24-karat **American Gold Buffalo**, **Krugerrands**, **Canadian Maple Leafs**, and other recognized bullion coins on the same transparent, live-price basis.

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

## Coins we see most often in Fairfax collections

Inherited collections around Fairfax tend to contain the same recognizable pieces, and knowing what you have helps you sell it well:

- **Pre-1965 U.S. silver** — dimes, quarters, and half dollars minted through 1964 are 90% silver ("junk silver"), valued as a group on their silver content.
- **Morgan and Peace silver dollars** — common dates trade near silver value, but scarce dates and high grades can carry a real collectible premium.
- **U.S. gold coins** — pre-1933 $5, $10, and $20 Liberty and Saint-Gaudens pieces carry both gold content and, often, numismatic value.
- **Modern bullion** — American Gold and Silver Eagles, Krugerrands, and Maple Leafs, valued on metal plus a modest premium.
- **World and commemorative coins**, which range from pure bullion to genuinely collectible depending on mintage and condition.

Condition, or "grade," is the wild card. Two coins of the same date can differ widely in value if one is worn and the other near-mint, which is exactly why a collectible coin should never be sold on melt value alone — and why cleaning a coin, which damages its surface, can quietly erase that premium.

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

## Spotting a genuine piece from a fake

Popular houses are widely counterfeited, so authentication is part of a fair appraisal. Genuine designer jewelry almost always shows:

- **A crisp, correctly spelled maker's mark** — counterfeits often have shallow, uneven, or misspelled stamps.
- **A matching metal hallmark** (750 for 18k, 585 for 14k) alongside the brand signature.
- **Serial or model numbers** on many Cartier, Van Cleef, and Tiffany pieces, which can be verified.
- **Weight and finish consistent with the house's standards** — authentic pieces feel substantial and are precisely finished.

A buyer who knows these brands checks all of this in front of you. Bringing original boxes, receipts, or service papers makes authentication faster and supports a higher offer.

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

## What used gold actually adds up to

Used gold is easy to underestimate because the pieces feel small. A worked example puts it in perspective: at a $2,400 spot price, a 14k gold chain weighing 15 grams holds roughly $675 in pure-gold value, and a handful of broken 10k and 14k odds and ends can quickly reach several hundred dollars more. None of it is doing anything in a drawer — and at today's prices, "used" rarely means "worthless."

## Where to sell used gold in Chantilly

Our **Chantilly** store sits at 14025 Lee Jackson Memorial Hwy (Route 50), with easy parking and no appointment needed, convenient from Centreville, South Riding, Fair Oaks, Fairfax, and Herndon. We offer free, no-obligation appraisals, instant payout, and the same transparent, live-price method at all four of our Northern Virginia locations. We buy used gold, silver, platinum, diamonds, designer jewelry, watches, and coins.

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

## Recognizing valuable eras and styles

Age is one of the layers that can lift an estate piece above its metal value, and certain periods are especially sought after:

- **Victorian (1837–1901)** — intricate, romantic designs, often in high-karat gold, sometimes with seed pearls or mourning motifs.
- **Edwardian (1901–1915)** — delicate, lacy platinum-and-gold work set with diamonds.
- **Art Deco (1920s–1930s)** — bold geometry and strong colored-stone contrasts; among the most collectible of all.
- **Retro (1940s)** — large, sculptural rose- and yellow-gold pieces.
- **Mid-century and signed modernist** work, which can carry both designer and period value.

You do not need to identify the era yourself — that is our job — but knowing these pieces are not "just old gold" helps explain why an estate appraisal is worth doing properly.

## How to sell an estate collection

1. **Keep everything together** at first, even pieces that look worn or broken. Let the appraisal sort value, not your guesswork.
2. **Do not clean or repair** antique pieces. Original condition often matters to value.
3. **Gather any documentation**, such as old appraisals, receipts, certificates, or boxes.
4. **Have gemstones and designer pieces appraised individually**, not lumped in as scrap.
5. **Choose a buyer who evaluates all of it**, metal, stones, brand, and age, in front of you.

For the plain gold portion of a collection, you can get a quick estimate with our [gold value calculator](/gold-calculator). For everything else, an in-person appraisal is the only way to capture the full value.

## Why sell to a local storefront

Estate collections are exactly the kind of items you do not want to mail away. A local buyer lets you keep the pieces until you accept an offer, asks questions in person, and pays the same day. Cash for Gold VA buys estate gold jewelry, gemstones, designer pieces, and coins at all four Northern Virginia locations, with free, no-obligation appraisals and instant payout.

## Settling an estate fairly

When a collection is being divided among family, a documented, transparent appraisal matters even more. We are happy to value each piece individually and itemize the offer, so heirs can see exactly what each item is worth before deciding what to sell and what to keep. There is never any obligation to sell the whole collection — many families sell the pieces no one will wear and keep the ones with sentimental value.

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

## Which coins pay closest to their full value

As a rough guide, the more recognized and liquid the coin, the higher the share of melt you can expect:

| Coin type | Recognition | Typical payout basis |
|---|---|---|
| American Gold Eagle, Maple Leaf, Krugerrand | Instantly recognized worldwide | Very high share of melt, plus premium |
| Generic gold bars and rounds | Recognized, must verify | High share of melt |
| Pre-1933 U.S. gold ($5 / $10 / $20) | Metal plus collectible value | Higher of melt or numismatic |
| Scrap and broken gold jewelry | Must be refined | Lower share (refining cost) |

The one mistake to avoid is selling a coin that has collectible value for melt alone. A pre-1933 Double Eagle or a proof coin can be worth well above its gold content, so always have coins that might be rare appraised as coins, not weighed as metal.

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

## What a typical payout looks like

To make "worth it" concrete: a single 14k gold chain weighing 20 grams holds roughly $900 in pure-gold value at a $2,400 spot price, before the small refining margin. A drawer of assorted broken 10k–18k pieces can easily add up to several hundred dollars that would otherwise sit unused indefinitely. The exact figure always depends on karat, weight, and the live price on the day — our [gold value calculator](/gold-calculator) turns your specific pieces into a realistic range in seconds.

## When to pause before selling

Selling may not be the best move, or may need a specialist, when:

- The piece has **sentimental value** you would regret losing.
- It is a **designer, antique, or collectible** item that could fetch more through specialized resale than melt value.
- It contains **significant gemstones** that should be appraised separately.
- It is **investment bullion** and you are selling purely on a short-term price dip.

None of these mean "never sell," only "get a full appraisal first" so you understand the true value before deciding.

## Cash for gold versus the alternatives

"Worth it" also depends on how the other options compare. For most unwanted gold, a transparent local buyer is the simplest path to the most cash:

- **Local cash-for-gold storefront** — same-day cash, you watch the testing, offers tied to the live price. Best for scrap, broken, and everyday karat jewelry.
- **Pawn shop** — convenient, but a pawn loan is not a sale, and outright-buy offers are often lower than a dedicated gold buyer's.
- **Online mail-in** — you lose control of your gold and are quoted only after it has shipped. Rarely worth the risk for anything valuable.
- **Auction or consignment** — can beat melt value for genuinely rare designer or antique pieces, but it is slow and takes a commission. Worth it only for the right item.

For ordinary unwanted gold, the local storefront wins on speed, safety, and price. For a rare signed or antique piece, it is worth getting a specialist opinion first.

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

## Is it solid gold, or gold-filled or plated?

Only solid karat gold is valued on its full metal content, so it helps to know what you have before you go:

- **Solid gold** is stamped with a karat mark (10k, 14k, 18k, or 585/750). The whole piece is gold alloy.
- **Gold-filled** ("GF") has a thick bonded layer of gold over a base metal — it carries some value, but far less than solid gold.
- **Gold-plated** ("GP" or "HGE") has only a microscopic gold layer and is generally not worth selling for its metal.

If you are unsure, bring the piece anyway. A quick test tells us instantly, at no charge. We also buy [gold-filled and gold-plated items](/precious-metals/sell-gold-filled-plated) where there is enough recoverable gold to make it worthwhile.

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

## Mistakes that quietly cost you money

A few habits leave money on the table:

- **Selling everything by weight**, including designer or gem-set pieces that are worth more appraised individually.
- **Cleaning or repairing** antique items, which can reduce their value.
- **Throwing out "junk"** — broken chains, bent rings, and single earrings all hold full metal value.
- **Accepting the first quote** without knowing your number or how it was calculated.

Avoiding these four is most of what separates a fair sale from a disappointing one.

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
  "selling-gold-in-northern-virginia": "/blog/selling-gold-nova.jpg",
  "selling-silver-in-northern-virginia": "/blog/selling-silver-nova.jpg",
  "what-to-watch-out-for-when-selling-gold": "/blog/red-flags-selling-gold.jpg",
  "gold-price-today": "/categories/gold-bars.jpg",
  "cash-for-gold-nova-falls-church-va": "/photos/storefront-vienna.jpg",
  "cash-for-gold-loudoun-county-va": "/photos/storefront-chantilly.jpg",
  "how-to-sell-used-gold-in-chantilly-va": "/photos/storefront-chantilly.jpg",
  "cash-for-gold-close-to-me": "/photos/storefront-annandale.jpg",
  "top-places-to-sell-coins-in-fairfax": "/products/coins/collection.jpg",
  "we-buy-1-oz-american-gold-eagle-coins": "/products/gold/eagle.jpg",
  "we-pay-90-percent-for-gold-coins": "/products/gold/krugerrand.jpg",
  "list-of-top-20-name-brand-in-gold-jewelry": "/products/jewelry/necklace.jpg",
  "we-buy-estate-gold-jewelry": "/products/jewelry/estate-collection.jpg",
  "selling-gold-jewelry": "/products/jewelry/chains.jpg",
  "we-buy-diamonds-more-than-1-carat-with-gia": "/products/diamonds/certified.jpg",
  "understanding-the-role-of-bullion-banks": "/categories/precious-metals.jpg",
  "exploring-the-allure-of-chantilly-gold": "/products/gold/sovereign.jpg",
  "finding-the-best-cash-for-gold-options": "/products/jewelry/box.jpg",
  "maximizing-your-profit-with-cash-for-gold": "/products/gold/bar1oz.jpg",
  "understanding-the-cash-for-gold-process": "/photos/storefront-chantilly.jpg",
  "is-cash-for-gold-worth-it": "/products/jewelry/mismatched.jpg",
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
