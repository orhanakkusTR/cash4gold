import { Pool } from "pg";

// Single shared Postgres pool. In dev, Next reloads modules on every change, so
// we stash the pool on globalThis to avoid exhausting connections.
//
// If DATABASE_URL is unset (e.g. someone runs the site locally without the
// analytics DB), `pool` is null and all callers must no-op gracefully — the
// public site must never break just because analytics has no database.
const globalForDb = globalThis as unknown as { _pgPool?: Pool | null };

function createPool(): Pool | null {
  const raw = process.env.DATABASE_URL;
  if (!raw) return null;
  // Strip any sslmode param: recent pg treats sslmode=require as verify-full,
  // which rejects DigitalOcean's self-signed CA. SSL stays on via `ssl` below.
  let url = raw;
  try {
    const u = new URL(raw);
    u.searchParams.delete("sslmode");
    url = u.toString();
  } catch {
    /* leave as-is if not a parseable URL */
  }
  return new Pool({
    connectionString: url,
    // DigitalOcean managed Postgres requires SSL. We accept their CA by default;
    // set PGSSL_NO_VERIFY=1 only if a CA bundle isn't configured.
    ssl: { rejectUnauthorized: false },
    max: 5,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
  });
}

export const pool: Pool | null =
  globalForDb._pgPool ?? (globalForDb._pgPool = createPool());

export const hasDb = pool !== null;

/** Run a parameterised query. Returns rows, or [] if no DB is configured. */
export async function query<T = Record<string, unknown>>(
  text: string,
  params?: unknown[],
): Promise<T[]> {
  if (!pool) return [];
  const res = await pool.query(text, params);
  return res.rows as T[];
}

// The single events table. One row per tracked interaction.
//   type      — 'phone' | 'directions' | 'review_click' | 'pageview'
//   location  — store slug (chantilly/annandale/manassas/vienna) or null
//   source    — where on the site ('header' | 'footer' | 'page' | 'banner' | 'fab')
//   path      — the page the event fired on
//   ip_hash   — salted, non-reversible hash of the client IP (never the raw IP)
//   ua_class  — coarse device class ('bot' | 'mobile' | 'desktop')
// ip_hash + ua_class exist so a contaminating source can be identified and
// cleaned retroactively without ever storing PII. The ALTER lines migrate an
// existing table in place; re-running is a no-op.
export const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS events (
  id         BIGSERIAL PRIMARY KEY,
  type       TEXT        NOT NULL,
  location   TEXT,
  source     TEXT,
  path       TEXT,
  ip_hash    TEXT,
  ua_class   TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE events ADD COLUMN IF NOT EXISTS ip_hash  TEXT;
ALTER TABLE events ADD COLUMN IF NOT EXISTS ua_class TEXT;
CREATE INDEX IF NOT EXISTS events_created_at_idx ON events (created_at);
CREATE INDEX IF NOT EXISTS events_type_idx       ON events (type);
CREATE INDEX IF NOT EXISTS events_ip_hash_idx    ON events (ip_hash);
`;
