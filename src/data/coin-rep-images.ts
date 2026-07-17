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
};

// For the union hub (all-gold-coins), coins from all 9 types are mixed, so we
// map each row to a representative by the image-path FOLDER its type uses —
// reusing the exact same 9 approved images above (no new selections).
export const GOLD_REP_BY_FOLDER: Record<string, string> = {
  "/coins/age/": "/coins/age/age-001.jpg",
  "/coins/buffalo/": "/coins/buffalo/buf-005.jpg",
  "/coins/canadian/": "/coins/canadian/cad-033.jpg",
  "/coins/british/": "/coins/british/brit-010.jpg",
  "/coins/krugerrand/": "/coins/krugerrand/krug-007.jpg",
  "/coins/pre33/": "/coins/pre33/pre33-012.jpg",
  "/coins/panda/": "/coins/panda/panda-041.jpg",
  "/coins/mexican/": "/coins/mexican/mex-001.jpg",
  "/coins/european/": "/coins/european/euro-012.jpg",
};

// Resolve a hub coin's image to its representative. Returns null for any type
// NOT in the recognized 9 — the caller must then render that row imageless
// rather than ship a branded (JMBullion) shot. (Today every hub coin maps; the
// null path is a guard for future data.)
export function hubRepImage(image: string): string | null {
  for (const [folder, rep] of Object.entries(GOLD_REP_BY_FOLDER)) {
    if (image.startsWith(folder)) return rep;
  }
  return null;
}
