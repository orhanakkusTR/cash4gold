"use client";

import { useEffect, useState } from "react";
import { cn, formatHours } from "@/lib/utils";
import type { Hours, Location } from "@/data/business";

// The stores are all in Northern Virginia → Eastern Time. Open/closed must be
// judged against the STORE's clock, not the visitor's (a visitor abroad would
// otherwise see a wrong status). Read the current wall-clock in America/New_York.
const STORE_TZ = "America/New_York";
const WEEKDAY_INDEX: Record<string, number> = {
  Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6,
};

// Returns { dayIndex (Mon=0..Sun=6), minutes (since midnight) } in store time.
function storeNow(d: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: STORE_TZ,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(d);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const dayIndex = WEEKDAY_INDEX[get("weekday")] ?? 0;
  // hourCycle h23 can emit "24" at midnight; normalize to 0.
  const hour = Number(get("hour")) % 24;
  const minute = Number(get("minute"));
  return { dayIndex, minutes: hour * 60 + minute };
}

type Status = { open: boolean; today: Hours };

// Color sets per surface: "dark" = on light/white backgrounds, "light" = over
// dark photos/overlays.
const TONES = {
  dark: { open: "text-green-700", closed: "text-red-600", appt: "text-gold-700 hover:text-gold-800", apptDot: "bg-gold-500", muted: "text-muted", sep: "text-foreground/30", idle: "bg-foreground/25" },
  light: { open: "text-green-300", closed: "text-red-400", appt: "text-gold-300 hover:text-gold-200", apptDot: "bg-gold-400", muted: "text-cream-100/70", sep: "text-cream-100/40", idle: "bg-cream-100/40" },
} as const;

/**
 * Live "Open now / Closed" badge plus today's hours. Computed on the client
 * from the store's Eastern-Time clock, so it stays accurate on a statically
 * built page. Appointment-only stores render a bold "Appointment Only" link
 * that dials the store instead (no hours are published for them).
 */
export function OpenStatus({
  location,
  className,
  tone = "dark",
  compact = false,
}: {
  location: Pick<Location, "hours" | "appointmentOnly" | "phone" | "phoneHref">;
  className?: string;
  tone?: keyof typeof TONES;
  compact?: boolean;
}) {
  const { hours, appointmentOnly, phone, phoneHref } = location;
  const [status, setStatus] = useState<Status | null>(null);
  const c = TONES[tone];

  useEffect(() => {
    const { dayIndex, minutes: cur } = storeNow(new Date());
    const today = hours[dayIndex];
    let open = false;
    if (today?.open && today.close) {
      const [oh, om] = today.open.split(":").map(Number);
      const [ch, cm] = today.close.split(":").map(Number);
      open = cur >= oh * 60 + om && cur < ch * 60 + cm;
    }
    // Intentional: open/closed depends on the current Eastern-Time wall clock, so
    // it must be computed client-side after mount (SSR can't know it). Pre-mount
    // fallback below keeps the markup stable, avoiding hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStatus({ open, today });
  }, [hours]);

  // Appointment-only: static (no clock involved), so it renders identically on
  // the server and the client. The whole badge is a tel: link — tapping
  // "Appointment Only" calls the store to book. Analytics picks it up as a
  // phone-call conversion like any other tel: link.
  if (appointmentOnly) {
    return (
      <a
        href={`tel:${phoneHref}`}
        aria-label={`Appointment only. Call ${phone} to book your visit`}
        className={cn(
          "inline-flex items-center gap-1.5 transition-colors",
          compact ? "text-xs font-extrabold" : "text-sm font-medium",
          c.appt,
          className,
        )}
      >
        <span className={cn("inline-flex h-2 w-2 shrink-0 rounded-full", c.apptDot)} />
        <strong className="font-extrabold">Appointment Only</strong>
        {!compact && (
          <>
            <span className={c.sep}>·</span>
            <span className={c.muted}>Call to book</span>
          </>
        )}
      </a>
    );
  }

  // Pre-mount fallback keeps layout stable without asserting open/closed.
  if (!status) {
    return (
      <span className={cn("inline-flex items-center gap-1.5 text-sm", c.muted, className)} suppressHydrationWarning>
        <span className={cn("h-2 w-2 rounded-full", c.idle)} />
        View today&apos;s hours
      </span>
    );
  }

  const { open, today } = status;
  const dot = (
    <span className="relative flex h-2 w-2">
      <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full", open ? "bg-green-500/60" : "bg-red-500/50")} />
      <span className={cn("relative inline-flex h-2 w-2 rounded-full", open ? "bg-green-500" : "bg-red-500")} />
    </span>
  );

  if (compact) {
    return (
      <span className={cn("inline-flex items-center gap-1.5 text-xs font-extrabold", className)} suppressHydrationWarning>
        {dot}
        <span className={open ? c.open : c.closed}>{open ? "Now Open" : "Now Closed"}</span>
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-1.5 text-sm font-medium", className)} suppressHydrationWarning>
      {dot}
      <span className={cn("font-extrabold", open ? c.open : c.closed)}>{open ? "Now Open" : "Now Closed"}</span>
      <span className={c.sep}>·</span>
      <span className={c.muted}>
        {today?.close ? `Today ${formatHours(today.open, today.close)}` : "Closed today"}
      </span>
    </span>
  );
}
