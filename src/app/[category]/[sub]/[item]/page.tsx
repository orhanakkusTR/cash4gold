import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { PageHero, CtaBand } from "@/components/page-parts";
import { CoinListingGrid, type CoinItem } from "@/components/coin-listing-grid";
import { AMERICAN_GOLD_EAGLES } from "@/data/american-gold-eagle";
import { AMERICAN_GOLD_BUFFALOS } from "@/data/american-gold-buffalo";
import { CANADIAN_GOLD_COINS } from "@/data/canadian-gold-coins";
import { BRITISH_GOLD_COINS } from "@/data/british-gold-coins";
import { GOLD_KRUGERRANDS } from "@/data/gold-krugerrands";
import { PRE33_US_GOLD_COINS } from "@/data/pre33-us-gold-coins";
import { BreadcrumbJsonLd } from "@/components/json-ld";

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
};

const ITEM_PAGES: Record<string, ItemPage> = {
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
      "We buy every American Gold Eagle — 1 oz, 1/2 oz, 1/4 oz, 1/10 oz, bullion, proof, burnished and graded. Free appraisal and instant payout at 4 Northern Virginia locations.",
    coins: AMERICAN_GOLD_EAGLES,
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
      "We buy every American Gold Buffalo — 1 oz .9999 fine bullion, proof and graded coins. Free appraisal and instant payout at 4 Northern Virginia locations.",
    coins: AMERICAN_GOLD_BUFFALOS,
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
      "We buy Canadian Gold Maple Leafs and all Royal Canadian Mint gold coins — every size and year, .9999+ fine. Free appraisal and instant payout at 4 Northern Virginia locations.",
    coins: CANADIAN_GOLD_COINS,
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
      "We buy British Gold Britannias, Sovereigns and all Royal Mint gold coins — every size and year. Free appraisal and instant payout at 4 Northern Virginia locations.",
    coins: BRITISH_GOLD_COINS,
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
      "We buy South African Gold Krugerrands — 1 oz, 1/2 oz, 1/4 oz and 1/10 oz, every year. Free appraisal and instant payout at 4 Northern Virginia locations.",
    coins: GOLD_KRUGERRANDS,
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
      "We buy pre-1933 US gold coins — $2.50 to $20 Liberty, Indian and Saint-Gaudens, circulated and graded, for gold value plus numismatic premium. Free appraisal, instant payout.",
    coins: PRE33_US_GOLD_COINS,
  },
};

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

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Gold Coins", url: `/${category}/${sub}` },
          { name: page.crumb, url: `/${category}/${sub}/${item}` },
        ]}
      />
      <PageHero
        eyebrow={page.eyebrow}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Gold Coins", href: `/${category}/${sub}` },
          { name: page.crumb, href: `/${category}/${sub}/${item}` },
        ]}
        title={page.title}
        description={page.description}
      />

      <section className="container-page py-20">
        <CoinListingGrid coins={page.coins} label={page.label} />
      </section>

      <CtaBand />
    </>
  );
}
