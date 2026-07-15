// Shared, framework-agnostic constants for the analytics pipeline. Imported by
// both the client tracker and the /api/track validator so the whitelist stays
// in one place.

export const EVENT_TYPES = ["phone", "directions", "review_click", "pageview"] as const;
export type EventType = (typeof EVENT_TYPES)[number];

export const EVENT_SOURCES = ["header", "footer", "page", "banner", "fab"] as const;
export type EventSource = (typeof EVENT_SOURCES)[number];

export const LOCATION_SLUGS = ["chantilly", "annandale", "manassas", "vienna"] as const;
export type LocationSlug = (typeof LOCATION_SLUGS)[number];

export type TrackPayload = {
  type: EventType;
  location?: LocationSlug | null;
  source?: EventSource | null;
  path?: string | null;
};
