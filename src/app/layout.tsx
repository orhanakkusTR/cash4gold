import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/data/business";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LocationsFab } from "@/components/locations-fab";
import { LivePriceTicker } from "@/components/live-price-ticker";
import { OrganizationJsonLd } from "@/components/json-ld";
import { Analytics } from "@/components/analytics";
import { ChromeGate } from "@/components/chrome-gate";
import { CookieConsent } from "@/components/cookie-consent";
import { GaPageview } from "@/components/google-analytics";

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
    default: `${SITE.name} | Sell Gold, Diamonds & Coins in Northern VA`,
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
    images: [{ url: "/og/og-image.jpg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Instant Payout for Gold & Valuables`,
    description: "Sell gold, silver, diamonds & collectible coins for instant payout across Northern Virginia.",
    images: ["/og/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#141009",
  width: "device-width",
  initialScale: 1,
};

// Google Analytics 4 measurement ID. Only loaded in production so local/dev
// traffic never pollutes the GA reports.
const GA_ID = "G-4R23R72MB0";

// Google Ads conversion tag. Runs through the SAME gtag.js instance + dataLayer
// as GA4 (one extra gtag('config',…) below — no second googletagmanager script),
// and is governed by the exact same Consent Mode v2 defaults set before any
// config (ad_storage/ad_personalization denied by default in EEA/UK). Individual
// conversion events (gtag('event','conversion',{send_to:'AW-…/<label>'})) get
// wired in <Analytics> when the owner provides a conversion label.
const ADS_ID = "AW-972294963";

// EEA + UK + EFTA country codes. These visitors default to DENIED consent
// (GDPR opt-in); everyone else defaults to GRANTED (CCPA-style opt-out).
const EEA_UK =
  "AT,BE,BG,HR,CY,CZ,DK,EE,FI,FR,DE,GR,HU,IE,IT,LV,LT,LU,MT,NL,PL,PT,RO,SK,SI,ES,SE,IS,LI,NO,GB,CH"
    .split(",")
    .map((c) => `'${c}'`)
    .join(",");

// One deterministic inline bootstrap, run at parse time as the FIRST script in
// <head>, so the order is guaranteed: Consent Mode v2 defaults → restore the
// returning visitor's saved choice → gtag config for BOTH products, GA4 (auto
// page_view OFF; we send those per route change in <GaPageview>) and the Google
// Ads tag → inject the single gtag.js loader. Because consent defaults are set
// before any config, the Ads tag inherits the same consent gating as GA4.
// When consent is denied, GA still sends anonymous cookieless pings (modeled
// data) — refusing never blanks our analytics. The cookie banner flips consent.
const GA_BOOTSTRAP_JS = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',region:[${EEA_UK}],wait_for_update:500});
gtag('set','url_passthrough',true);
gtag('set','ads_data_redaction',true);
try{var c=localStorage.getItem('c4g-cookie-consent');if(c==='granted'||c==='denied'){gtag('consent','update',{ad_storage:c,ad_user_data:c,ad_personalization:c,analytics_storage:c});}}catch(e){}
gtag('js', new Date());
gtag('config','${GA_ID}',{send_page_view:false});
gtag('config','${ADS_ID}');
(function(){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=${GA_ID}';var f=document.getElementsByTagName('script')[0];f.parentNode.insertBefore(s,f);})();
`;

// OpenAI Pixel (conversion tracking). One site-wide init; the conversion
// event itself fires only where the action happens — a phone-call click,
// handled in <Analytics>. Production only, so dev traffic never pollutes it.
const OPENAI_PIXEL_ID = "QKKK9ZDBRzcFmBM6Ac45Yn";
// Consent-gated: skip the advertising pixel entirely for visitors who have
// explicitly opted out (saved 'denied'). Matches the site's opt-out model for
// US visitors; the pixel still loads by default where consent isn't denied,
// and the cookie banner writes 'granted'/'denied' to this key.
const OPENAI_PIXEL_JS = `try{if(localStorage.getItem('c4g-cookie-consent')==='denied'){}else{!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"${OPENAI_PIXEL_ID}"});}}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <head>
        {/* GA4 + Consent Mode v2 bootstrap — MUST be the first script in <head>
            so it runs at parse time, before anything else. Raw inline <script>
            (not next/script) to keep full control of execution order.
            Production only — GA never loads in dev. */}
        {process.env.NODE_ENV === "production" && (
          <script dangerouslySetInnerHTML={{ __html: GA_BOOTSTRAP_JS }} />
        )}
        {/* OpenAI Pixel init — one per page, near the top of <head>. */}
        {process.env.NODE_ENV === "production" && (
          <script dangerouslySetInnerHTML={{ __html: OPENAI_PIXEL_JS }} />
        )}
      </head>
      <body className="min-h-full flex flex-col bg-cream-50 text-foreground">
        <a
          href="#main-content"
          className="sr-only rounded-full focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink-900 focus:px-5 focus:py-2.5 focus:font-semibold focus:text-cream-50 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-700 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <OrganizationJsonLd />
        <Analytics />
        <ChromeGate>
          <LivePriceTicker />
          <Header />
        </ChromeGate>
        <main id="main-content" className="flex-1">{children}</main>
        <ChromeGate>
          <Footer />
          <LocationsFab />
          <CookieConsent />
        </ChromeGate>
      </body>
      {process.env.NODE_ENV === "production" && <GaPageview />}
    </html>
  );
}
