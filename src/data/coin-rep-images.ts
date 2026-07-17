// TEMPORARY image-risk bridge (interim, ~1 week — owner photos coming).
// Until we shoot our own coin photography, every variant row on a gold coin
// listing page renders ONE clean representative image for that coin type
// instead of its hundreds of JMBullion-sourced variant shots. This collapses
// visible third-party image exposure by ~99% (the variant TEXT/data is
// untouched — only the image each row points to is overridden at render time).
//
// Each representative was visually verified as a clean plain-coin shot with NO
// JMBullion branding (no dealer slab, box, or "JM Bullion" text/logo in frame).
//
// Keyed by the item-page slug. To swap to an owner photo, change ONE line here
// — no per-variant edits anywhere. Silver + all-gold-coins are intentionally
// out of scope for this bridge.
export const COIN_REP_IMAGE: Record<string, string> = {
  "coins/sell-gold-coins/american-gold-eagle": "/coins/age/age-001.jpg", // TODO(images): replace with owner photo
  "coins/sell-gold-coins/american-gold-buffalo": "/coins/buffalo/buf-005.jpg", // TODO(images): replace with owner photo
  "coins/sell-gold-coins/canadian-gold-coins": "/coins/canadian/cad-033.jpg", // TODO(images): replace with owner photo
  "coins/sell-gold-coins/british-gold-coins": "/coins/british/brit-010.jpg", // TODO(images): replace with owner photo
  "coins/sell-gold-coins/gold-krugerrands": "/coins/krugerrand/krug-007.jpg", // TODO(images): replace with owner photo
  "coins/sell-gold-coins/pre-33-us-gold-coins": "/coins/pre33/pre33-012.jpg", // TODO(images): replace with owner photo
  "coins/sell-gold-coins/chinese-gold-pandas": "/coins/panda/panda-041.jpg", // TODO(images): replace with owner photo
  "coins/sell-gold-coins/mexican-gold-coins": "/coins/mexican/mex-001.jpg", // TODO(images): replace with owner photo
  "coins/sell-gold-coins/european-gold-coins": "/coins/european/euro-012.jpg", // TODO(images): replace with owner photo

  "coins/sell-silver-coins/american-silver-eagle": "/coins/silver-eagle/silver-eagle-001.jpg", // TODO(images): replace with owner photo
  "coins/sell-silver-coins/silver-dollars": "/coins/silver-dollar/silver-dollar-019.jpg", // TODO(images): replace with owner photo
  "coins/sell-silver-coins/canadian-silver-coins": "/coins/canadian-silver/canadian-silver-007.jpg", // TODO(images): replace with owner photo
  "coins/sell-silver-coins/british-silver-coins": "/coins/british-silver/british-silver-011.jpg", // TODO(images): replace with owner photo
  "coins/sell-silver-coins/junk-silver": "/coins/junk-silver/junk-silver-027.jpg", // TODO(images): replace with owner photo
  "coins/sell-silver-coins/mexican-silver-libertads": "/coins/mexican-silver-libertad/mexican-silver-libertad-005.jpg", // TODO(images): replace with owner photo
  "coins/sell-silver-coins/australian-silver-coins": "/coins/australian-silver/australian-silver-007.jpg", // TODO(images): replace with owner photo
  "coins/sell-silver-coins/chinese-silver-pandas": "/coins/chinese-silver-panda/chinese-silver-panda-001.jpg", // TODO(images): replace with owner photo
  "coins/sell-silver-coins/silver-krugerrands": "/coins/silver-krugerrand/silver-krugerrand-005.jpg", // TODO(images): replace with owner photo
  "coins/sell-silver-coins/america-the-beautiful": "/coins/atb-silver/atb-silver-021.jpg", // TODO(images): replace with owner photo
};

// For the union hubs (all-gold-coins / all-silver-coins), coins from every type
// are mixed, so we map each row to a representative by the image-path FOLDER its
// type uses — reusing the exact same approved images above (no new selections).
export const REP_BY_FOLDER: Record<string, string> = {
  // gold
  "/coins/age/": "/coins/age/age-001.jpg",
  "/coins/buffalo/": "/coins/buffalo/buf-005.jpg",
  "/coins/canadian/": "/coins/canadian/cad-033.jpg",
  "/coins/british/": "/coins/british/brit-010.jpg",
  "/coins/krugerrand/": "/coins/krugerrand/krug-007.jpg",
  "/coins/pre33/": "/coins/pre33/pre33-012.jpg",
  "/coins/panda/": "/coins/panda/panda-041.jpg",
  "/coins/mexican/": "/coins/mexican/mex-001.jpg",
  "/coins/european/": "/coins/european/euro-012.jpg",
  // silver
  "/coins/silver-eagle/": "/coins/silver-eagle/silver-eagle-001.jpg",
  "/coins/silver-dollar/": "/coins/silver-dollar/silver-dollar-019.jpg",
  "/coins/canadian-silver/": "/coins/canadian-silver/canadian-silver-007.jpg",
  "/coins/british-silver/": "/coins/british-silver/british-silver-011.jpg",
  "/coins/junk-silver/": "/coins/junk-silver/junk-silver-027.jpg",
  "/coins/mexican-silver-libertad/": "/coins/mexican-silver-libertad/mexican-silver-libertad-005.jpg",
  "/coins/australian-silver/": "/coins/australian-silver/australian-silver-007.jpg",
  "/coins/chinese-silver-panda/": "/coins/chinese-silver-panda/chinese-silver-panda-001.jpg",
  "/coins/silver-krugerrand/": "/coins/silver-krugerrand/silver-krugerrand-005.jpg",
  "/coins/atb-silver/": "/coins/atb-silver/atb-silver-021.jpg",
};

// Resolve a hub coin's image to its representative. Returns null for any type
// NOT recognized — the caller must then render that row imageless rather than
// ship a branded (JMBullion) shot. (Today every hub coin maps; the null path is
// a guard for future data.) Order the silver folders before the gold ones would
// only matter if prefixes overlapped — they don't (e.g. "/coins/canadian/" vs
// "/coins/canadian-silver/" both need an exact folder-boundary match, which the
// trailing slash in each key guarantees).
export function hubRepImage(image: string): string | null {
  for (const [folder, rep] of Object.entries(REP_BY_FOLDER)) {
    if (image.startsWith(folder)) return rep;
  }
  return null;
}
