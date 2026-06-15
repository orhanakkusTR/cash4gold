import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/data/business";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LivePriceTicker } from "@/components/live-price-ticker";
import { OrganizationJsonLd } from "@/components/json-ld";

// Typography refreshed to match omegaboyler.com.tr: Manrope (display) + Inter (body).
const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} | Sell Gold, Silver, Diamonds & Coins in Northern VA`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Sell gold, silver, diamonds, fine jewelry & collectible coins for instant payout. 4 Northern Virginia locations. Free appraisals, fair spot-price offers, 4.9★ rated.",
  keywords: [
    "cash for gold",
    "sell gold northern virginia",
    "sell diamonds",
    "sell silver",
    "gold buyer near me",
    "sell silver coins",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.domain,
    siteName: SITE.name,
    title: `${SITE.name} | Instant Payout for Gold, Diamonds & Coins`,
    description:
      "Northern Virginia's trusted buyer of gold, silver, diamonds, jewelry & coins. Instant payout, free appraisals, 4 locations.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Instant Payout for Gold & Valuables`,
    description: "Sell gold, silver, diamonds & collectible coins for instant payout across Northern Virginia.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#141009",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-50 text-foreground">
        <OrganizationJsonLd />
        <LivePriceTicker />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
