// Per-store LOCAL content (Wave 3 / P1-7). Unique, location-specific prose for
// each of the 4 physical stores, rendered on /locations/[city]. Every claim here
// is verifiable (road/route designations, interchanges, transit stations) — no
// invented parking, no fabricated landmark distances, no "family-owned since".
// The test: move any store's text onto another store and it should read wrong.
//
// Sources behind these facts: VDOT / Fairfax County road designations, WMATA
// (Silver Line / Spring Hill), VRE + Amtrak (Manassas station). Keyed by
// Location.slug in business.ts. Payment wording promises SPEED, not method.
export type LocationLocal = { heading: string; paras: string[] };

export const LOCATION_LOCAL: Record<string, LocationLocal> = {
  chantilly: {
    heading: "Finding our Chantilly store",
    paras: [
      "Our Chantilly store sits on US-50 (Route 50), right where it meets Route 28 (Sully Road). That interchange makes us easy to reach from Fairfax, Herndon, Centreville, and South Riding without leaving the main road, and there is no Beltway traffic to fight on the way in.",
      "This is a driving corridor rather than a Metro one: the nearest rail station is well outside walking distance, so nearly everyone arrives by car. If you orient by landmarks, we are just south of the Sully Historic Site, and the same Route 28 that passes our door runs north toward Dulles Airport and the Udvar-Hazy air and space museum. Bring your items to the counter and we appraise them while you wait, with payout the same visit.",
    ],
  },
  annandale: {
    heading: "Finding our Annandale store",
    paras: [
      "The Annandale store is on Columbia Pike — Route 244 — in the heart of downtown Annandale, close to where Columbia Pike, Little River Turnpike (Route 236), and Backlick Road all come together. It is one of the most central spots in town, which makes it a quick stop whether you are coming from Alexandria, Falls Church, Springfield, or Bailey's Crossroads.",
      "We are inside the Capital Beltway, roughly two miles east of the I-495 interchange at Little River Turnpike, so you reach us on surface streets instead of a long highway run. Annandale is not on a Metrorail line — buses connect the area to the nearest stations — so most customers drive in, have their gold or coins appraised at the counter, and leave paid the same visit.",
    ],
  },
  manassas: {
    heading: "Finding our Manassas store",
    paras: [
      "Our Manassas store is on Centreville Road — Route 28 — near the Liberia Avenue intersection, in a multi-tenant retail building on the main road through town. That keeps us convenient for customers coming from Bristow, Gainesville, Centreville, and Woodbridge, who can all stay on familiar roads to reach the counter.",
      "Old Town Manassas is about a mile away, and the Manassas VRE and Amtrak station sits right in the center of it — useful to know if you navigate by the train line. For most people, though, this is a drive-up visit: bring your jewelry, coins, or metals in, get a free appraisal, and walk out paid the same day.",
    ],
  },
  vienna: {
    heading: "Finding our Vienna / McLean store",
    paras: [
      "The Vienna store is on Tyco Road in the Tysons commercial district, just off Leesburg Pike (Route 7). It is the closest of our locations to the McLean and Tysons crowd, and its spot in the middle of Tysons puts it within easy reach of Oakton, Falls Church, and the rest of the inner-Beltway suburbs.",
      "This is also our most transit-friendly store: the Spring Hill station on Metro's Silver Line is about a half-mile away — roughly a ten-minute walk — so you can genuinely reach us without a car. Drive or ride in, have your items appraised on the spot, and get your payout the same visit.",
    ],
  },
};
