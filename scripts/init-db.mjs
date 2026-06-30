// One-shot schema initializer for the analytics database.
// Usage: DATABASE_URL=postgres://... node scripts/init-db.mjs
import pg from "pg";

const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS events (
  id         BIGSERIAL PRIMARY KEY,
  type       TEXT        NOT NULL,
  location   TEXT,
  source     TEXT,
  path       TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS events_created_at_idx ON events (created_at);
CREATE INDEX IF NOT EXISTS events_type_idx       ON events (type);
`;

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is required");
  process.exit(1);
}

// Strip any sslmode param from the URI: recent pg treats sslmode=require as
// verify-full, which rejects DO's self-signed CA. We keep SSL on via the ssl
// object below (encrypted, just not CA-verified).
const u = new URL(url);
u.searchParams.delete("sslmode");

const client = new pg.Client({
  connectionString: u.toString(),
  ssl: { rejectUnauthorized: false },
});

try {
  await client.connect();
  await client.query(SCHEMA_SQL);
  const { rows } = await client.query("SELECT count(*)::int AS n FROM events");
  console.log(`✓ Schema ready. events rows: ${rows[0].n}`);
} catch (err) {
  console.error("✗ Failed:", err.message);
  process.exit(1);
} finally {
  await client.end();
}
