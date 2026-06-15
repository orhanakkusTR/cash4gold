"use client";

import { useEffect, useState } from "react";
import { cn, formatHours } from "@/lib/utils";
import type { Hours } from "@/data/business";

// Our hours array is ordered Mon..Sun (index 0 = Monday).
// JS Date.getDay() is Sun=0..Sat=6, so shift by +6 mod 7.
function todayIndex(d: Date) {
  return (d.getDay() + 6) % 7;
}

type Status = { open: boolean; today: Hours };

// Color sets per surface: "dark" = on light/white backgrounds, "light" = over
// dark photos/overlays.
const TONES = {
  dark: { open: "text-green-700", closed: "text-muted", muted: "text-muted", sep: "text-foreground/30", idle: "bg-foreground/25" },
  light: { open: "text-green-300", closed: "text-cream-100/75", muted: "text-cream-100/70", sep: "text-cream-100/40", idle: "bg-cream-100/40" },
} as const;

/**
 * Live "Open now / Closed" badge plus today's hours. Computed on the client
 * from the visitor's local time, so it stays accurate on a statically built page.
 */
export function OpenStatus({
  hours,
  className,
  tone = "dark",
}: {
  hours: Hours[];
  className?: string;
  tone?: keyof typeof TONES;
}) {
  const [status, setStatus] = useState<Status | null>(null);
  const c = TONES[tone];

  useEffect(() => {
    const now = new Date();
    const today = hours[todayIndex(now)];
    let open = false;
    if (today?.open && today.close) {
      const cur = now.getHours() * 60 + now.getMinutes();
      const [oh, om] = today.open.split(":").map(Number);
      const [ch, cm] = today.close.split(":").map(Number);
      open = cur >= oh * 60 + om && cur < ch * 60 + cm;
    }
    setStatus({ open, today });
  }, [hours]);

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
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-sm font-medium", className)} suppressHydrationWarning>
      <span className="relative flex h-2 w-2">
        {open && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/60" />}
        <span className={cn("relative inline-flex h-2 w-2 rounded-full", open ? "bg-green-500" : "bg-foreground/30")} />
      </span>
      <span className={open ? c.open : c.closed}>{open ? "Open now" : "Closed"}</span>
      <span className={c.sep}>·</span>
      <span className={c.muted}>
        {today?.close ? `Today ${formatHours(today.open, today.close)}` : "Closed today"}
      </span>
    </span>
  );
}
