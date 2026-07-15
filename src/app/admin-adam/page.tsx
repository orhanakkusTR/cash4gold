import { redirect } from "next/navigation";
import { Phone, Navigation, Eye, Star, Database } from "lucide-react";
import { getAdminUser } from "@/lib/admin-auth";
import { query, hasDb } from "@/lib/db";
import { LOCATIONS } from "@/data/business";
import { LogoutButton } from "./logout-button";
import { RangeFilter } from "./range-filter";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CITY: Record<string, string> = Object.fromEntries(
  LOCATIONS.map((l) => [l.slug, l.city]),
);
const SOURCE_LABEL: Record<string, string> = {
  header: "Header",
  footer: "Footer",
  page: "Page body",
  banner: "Banner",
  fab: "Mobile FAB",
};

type Row = Record<string, string | number>;
const sum = (rows: Row[], pred: (r: Row) => boolean) =>
  rows.filter(pred).reduce((s, r) => s + Number(r.n), 0);

// --- Date range (resolved in Eastern store time) -----------------------------
function todayET(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }).format(
    new Date(),
  );
}
function addDays(date: string, n: number): string {
  const dt = new Date(`${date}T00:00:00Z`);
  dt.setUTCDate(dt.getUTCDate() + n);
  return dt.toISOString().slice(0, 10);
}
function dayList(from: string, to: string): string[] {
  const out: string[] = [];
  let d = from;
  // Cap to keep the chart sane on huge spans.
  for (let i = 0; i < 400 && d <= to; i++) {
    out.push(d);
    d = addDays(d, 1);
  }
  return out;
}

type Range =
  | { mode: "all"; label: string }
  | { mode: "range"; from: string; to: string; label: string };

function resolveRange(sp: Record<string, string | string[] | undefined>): Range {
  const get = (k: string) => (Array.isArray(sp[k]) ? sp[k][0] : sp[k]) as string | undefined;
  const from = get("from");
  const to = get("to");
  if (from && to) return { mode: "range", from, to, label: `${from} → ${to}` };

  const today = todayET();
  switch (get("range")) {
    case "today":
      return { mode: "range", from: today, to: today, label: "Today" };
    case "7d":
      return { mode: "range", from: addDays(today, -6), to: today, label: "Last 7 days" };
    case "90d":
      return { mode: "range", from: addDays(today, -89), to: today, label: "Last 90 days" };
    case "all":
      return { mode: "all", label: "All time" };
    case "30d":
    default:
      return { mode: "range", from: addDays(today, -29), to: today, label: "Last 30 days" };
  }
}

// SQL fragment + params that constrain `created_at` to the selected Eastern days.
function rangeClause(range: Range): { cond: string; params: string[] } {
  if (range.mode === "all") return { cond: "TRUE", params: [] };
  return {
    cond:
      "created_at >= ($1::date AT TIME ZONE 'America/New_York') " +
      "AND created_at < (($2::date + 1) AT TIME ZONE 'America/New_York')",
    params: [range.from, range.to],
  };
}

// --- UI bits ------------------------------------------------------------------
function StatCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  sub?: string;
}) {
  return (
    <div className="rounded-2xl border border-cream-50/10 bg-ink-900/50 p-5">
      <div className="flex items-center gap-2 text-cream-100/50">
        <span className="text-gold-400">{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div className="mt-2 font-display text-3xl font-bold text-cream-50">
        {value.toLocaleString("en-US")}
      </div>
      {sub && <div className="mt-0.5 text-xs text-cream-100/40">{sub}</div>}
    </div>
  );
}

function BarList({
  title,
  rows,
}: {
  title: string;
  rows: { label: string; value: number }[];
}) {
  const max = Math.max(1, ...rows.map((r) => r.value));
  return (
    <div className="rounded-2xl border border-cream-50/10 bg-ink-900/50 p-5">
      <h2 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-gold-300">
        {title}
      </h2>
      {rows.length === 0 ? (
        <p className="text-sm text-cream-100/40">No data in this range.</p>
      ) : (
        <ul className="space-y-3">
          {rows.map((r) => (
            <li key={r.label}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="text-cream-100/80">{r.label}</span>
                <span className="font-semibold text-cream-50">
                  {r.value.toLocaleString("en-US")}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-cream-50/8">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-300"
                  style={{ width: `${(r.value / max) * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function DailyChart({
  days,
  label,
}: {
  days: { date: string; phone: number; directions: number; pageview: number }[];
  label: string;
}) {
  const max = Math.max(1, ...days.map((d) => d.phone + d.directions + d.pageview));
  return (
    <div className="rounded-2xl border border-cream-50/10 bg-ink-900/50 p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-gold-300">
          Daily activity — {label}
        </h2>
        <div className="flex gap-4 text-xs text-cream-100/60">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-gold-400" /> Phone
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-sky-400" /> Directions
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-cream-50/30" /> Views
          </span>
        </div>
      </div>
      {days.length === 0 ? (
        <p className="text-sm text-cream-100/40">No data in this range.</p>
      ) : (
        <>
          <div className="flex h-40 items-end gap-[3px]">
            {days.map((d) => {
              const total = d.phone + d.directions + d.pageview;
              const h = (total / max) * 100;
              return (
                <div
                  key={d.date}
                  className="group relative flex flex-1 flex-col justify-end"
                  title={`${d.date} — ${d.phone} phone, ${d.directions} directions, ${d.pageview} views`}
                >
                  <div
                    className="flex w-full flex-col-reverse overflow-hidden rounded-sm"
                    style={{ height: `${h}%`, minHeight: total ? 2 : 0 }}
                  >
                    <div className="bg-gold-400" style={{ flexGrow: d.phone }} />
                    <div className="bg-sky-400" style={{ flexGrow: d.directions }} />
                    <div className="bg-cream-50/30" style={{ flexGrow: d.pageview }} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-2 flex justify-between text-[0.65rem] text-cream-100/35">
            <span>{days[0]?.date.slice(5)}</span>
            <span>{days[days.length - 1]?.date.slice(5)}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default async function AdminDashboard({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const user = await getAdminUser();
  if (!user) redirect("/admin-adam/login");

  if (!hasDb) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Database className="mx-auto h-10 w-10 text-gold-400" />
        <h1 className="mt-4 font-display text-2xl font-bold">Database not connected</h1>
        <p className="mt-2 text-cream-100/60">
          Set <code className="rounded bg-ink-800 px-1.5 py-0.5 text-gold-300">DATABASE_URL</code>{" "}
          and run the schema, then reload.
        </p>
      </div>
    );
  }

  // Retention (privacy policy: 24 months). We have no app-level scheduler on the
  // hosting platform, so we purge opportunistically whenever the owner opens the
  // dashboard. The DELETE is idempotent and cheap (created_at is indexed) — after
  // the first run it removes only the trickle of newly-aged rows. If the panel
  // isn't opened for a long stretch, the next open catches up. (Alternative if we
  // ever need guaranteed cadence: run `node scripts/init-db.mjs`-style purge on a
  // monthly cron.)
  await query(
    `DELETE FROM events WHERE created_at < now() - interval '24 months'`,
  ).catch(() => {});

  const range = resolveRange(await searchParams);
  const { cond, params } = rangeClause(range);

  const [byType, phoneByLoc, dirByLoc, bySource, daily, topPages] =
    await Promise.all([
      query<Row>(`SELECT type, count(*)::int n FROM events WHERE ${cond} GROUP BY type`, params),
      query<Row>(
        `SELECT location, count(*)::int n FROM events WHERE type='phone' AND ${cond} GROUP BY location ORDER BY n DESC`,
        params,
      ),
      query<Row>(
        `SELECT location, count(*)::int n FROM events WHERE type='directions' AND ${cond} GROUP BY location ORDER BY n DESC`,
        params,
      ),
      query<Row>(
        `SELECT source, count(*)::int n FROM events WHERE type IN ('phone','directions') AND ${cond} GROUP BY source ORDER BY n DESC`,
        params,
      ),
      query<Row>(
        `SELECT to_char(date_trunc('day', created_at AT TIME ZONE 'America/New_York'),'YYYY-MM-DD') d, type, count(*)::int n
         FROM events WHERE ${cond} GROUP BY 1,2`,
        params,
      ),
      query<Row>(
        `SELECT path, count(*)::int n FROM events WHERE type='pageview' AND ${cond} GROUP BY path ORDER BY n DESC LIMIT 12`,
        params,
      ),
    ]);

  const totalPhone = sum(byType, (r) => r.type === "phone");
  const totalDir = sum(byType, (r) => r.type === "directions");
  const totalReviews = sum(byType, (r) => r.type === "review_click");
  const totalViews = sum(byType, (r) => r.type === "pageview");

  // Build the contiguous day series for the chart.
  const dailyMap = new Map<string, Row>();
  for (const r of daily) dailyMap.set(`${r.d}|${r.type}`, r);
  let chartFrom: string;
  let chartTo: string;
  if (range.mode === "range") {
    chartFrom = range.from;
    chartTo = range.to;
  } else {
    // All-time: span from the earliest event to today.
    const dates = daily.map((r) => String(r.d)).sort();
    chartFrom = dates[0] ?? todayET();
    chartTo = todayET();
  }
  const days = dayList(chartFrom, chartTo).map((date) => ({
    date,
    phone: Number(dailyMap.get(`${date}|phone`)?.n ?? 0),
    directions: Number(dailyMap.get(`${date}|directions`)?.n ?? 0),
    pageview: Number(dailyMap.get(`${date}|pageview`)?.n ?? 0),
  }));

  const locLabel = (slug: unknown) =>
    slug ? (CITY[String(slug)] ?? String(slug)) : "Unknown";

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Header */}
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold">Analytics</h1>
          <p className="text-sm text-cream-100/50">Cash for Gold VA · signed in as {user}</p>
        </div>
        <LogoutButton />
      </header>

      {/* Date filter */}
      <div className="mb-6">
        <RangeFilter />
        <p className="mt-2 text-xs text-cream-100/40">
          Showing: <span className="text-cream-100/70">{range.label}</span> · Eastern (store) time
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        <StatCard icon={<Phone className="h-4 w-4" />} label="Phone clicks" value={totalPhone} />
        <StatCard icon={<Navigation className="h-4 w-4" />} label="Directions" value={totalDir} />
        <StatCard icon={<Star className="h-4 w-4" />} label="Review clicks" value={totalReviews} />
        <StatCard icon={<Eye className="h-4 w-4" />} label="Page views" value={totalViews} />
        <StatCard
          icon={<Phone className="h-4 w-4" />}
          label="Calls + Directions"
          value={totalPhone + totalDir}
          sub="total intent actions"
        />
      </div>

      {/* Daily chart */}
      <div className="mt-6">
        <DailyChart days={days} label={range.label} />
      </div>

      {/* Breakdowns */}
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <BarList
          title="Phone clicks by location"
          rows={phoneByLoc.map((r) => ({ label: locLabel(r.location), value: Number(r.n) }))}
        />
        <BarList
          title="Directions by location"
          rows={dirByLoc.map((r) => ({ label: locLabel(r.location), value: Number(r.n) }))}
        />
        <BarList
          title="Where clicks come from"
          rows={bySource.map((r) => ({
            label: SOURCE_LABEL[String(r.source)] ?? String(r.source ?? "Unknown"),
            value: Number(r.n),
          }))}
        />
        <BarList
          title="Most viewed pages"
          rows={topPages.map((r) => ({ label: String(r.path || "/"), value: Number(r.n) }))}
        />
      </div>

      <p className="mt-8 text-center text-xs text-cream-100/30">
        Times shown in Eastern (store) time. Data updates live on each visit.
      </p>
    </div>
  );
}
