// Parked coins — items removed from the American Gold Eagle listing during the
// Wave 3 data cleanup because they are NOT American Gold Eagles, but which also
// have no matching category page on the site yet (US gold commemoratives, high-
// relief reissues, and multi-coin sets). Preserved here so nothing is lost.
//
// NOT imported/rendered anywhere. If we ever add a "US Mint gold commemoratives"
// page, move these there. Images are the original scrape placeholders under
// /coins/age/ and would need our own/licensed photography first.
//
// (The other 27 items removed from the Eagle page were exact duplicates already
// present on their correct pages — 24 on /coins/sell-gold-coins/pre-33-us-gold-coins
// and 3 on /coins/sell-gold-coins/american-gold-buffalo — so they were not parked.)
export type ParkedCoin = { name: string; image: string };

export const PARKED_COINS: ParkedCoin[] = [
  { name: "2016-W 1/2 oz American Gold Walking Liberty Half Dollar Coin PCGS SP69 FS", image: "/coins/age/age-117.jpg" },
  { name: "2016-W 1/2 oz American Gold Walking Liberty Half Dollar Coin (Box + CoA)", image: "/coins/age/age-120.jpg" },
  { name: "2016 1/2 oz American Gold Walking Liberty Half Dollar Coin SP70 (PCGS or NGC)", image: "/coins/age/age-283.jpg" },
  { name: "2016-W American Gold 100th Anniversary Centennial 3-Coin Set PCGS MS70 FS", image: "/coins/age/age-185.jpg" },
  { name: "1995-W Proof American Eagle 10th Anniversary 5-Coin Set (Box + CoA)", image: "/coins/age/age-197.jpg" },
  { name: "2009 Ultra High Relief Gold Double Eagle Coin (Box + CoA)", image: "/coins/age/age-340.jpg" },
  { name: "2017-W 1 oz High Relief 225th Anniversary American Liberty Gold Coin PCGS PR70 DCAM", image: "/coins/age/age-344.jpg" },
  { name: "2008 2.5 oz Proof Humbert Commemorative Octagon Gold Coin NGC Gem Proof", image: "/coins/age/age-353.jpg" },
];
