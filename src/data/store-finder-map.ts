// Authoritative place → store routing for the /find-your-store finder.
//
// OWNER-MAINTAINED. Each entry lists the city/place names AND ZIP codes that
// should resolve to a given store. This list takes PRIORITY over the finder's
// auto-derived matches (city-landing nearest store + store neighborhoods), so
// anything listed here wins. Add/adjust freely.
//
// `store` must be one of the LOCATIONS slugs: "annandale" | "chantilly" |
// "manassas" | "vienna".

export type StoreSlug = "annandale" | "chantilly" | "manassas" | "vienna";

export type StoreRoute = {
  store: StoreSlug;
  places: string[]; // city/place names and 5-digit ZIP codes, any order
};

// Owner's service-area map (2026-07-07). Where a place was listed under two
// stores, it's routed to ONE here (the finder shows a single nearest store);
// those calls: Centreville→Chantilly, Fairfax→Chantilly, Reston→Chantilly,
// Falls Church→Annandale, Arlington→Annandale, Merrifield→Vienna. Adjust freely.
export const STORE_ROUTES: StoreRoute[] = [
  {
    store: "chantilly",
    places: [
      "Chantilly", "20151", "20152", "20153",
      "Centreville", "20120", "20121", "20122",
      "Fairfax", "22030", "22031", "22032", "22033",
      "Herndon", "20170", "20171",
      "South Riding",
      "Sterling", "20164", "20165", "20166",
      "Ashburn", "Aldie", "Dulles", "Oak Hill", "Reston",
    ],
  },
  {
    store: "annandale",
    places: [
      "Annandale", "22003",
      "Alexandria", "22302", "22304", "22311", "22312", "22314",
      "Falls Church", "22041", "22042", "22043", "22044", "22046",
      "Springfield", "22150", "22151", "22152", "22153",
      "Arlington", "22201", "22202", "22203", "22204", "22205", "22206", "22207", "22209", "22210", "22213",
      "Bailey's Crossroads",
      "Lincolnia", "Seven Corners", "Lake Barcroft", "Burke",
    ],
  },
  {
    store: "manassas",
    places: [
      "Manassas", "20110",
      "Manassas Park", "20111",
      "Bristow", "20136",
      "Gainesville", "20155", "20156",
      "Woodbridge", "22191", "22192", "22193", "22194", "22195",
      "Haymarket", "Dale City", "Lake Ridge", "Nokesville", "Dumfries", "Clifton",
    ],
  },
  {
    store: "vienna",
    places: [
      "Vienna", "22027", "22124", "22180", "22181", "22182", "22183",
      "Tysons", "22102",
      "McLean", "22101",
      "Oakton",
      "Merrifield", "22081", "22116",
      "Dunn Loring",
      "Great Falls", "22066",
    ],
  },
];
