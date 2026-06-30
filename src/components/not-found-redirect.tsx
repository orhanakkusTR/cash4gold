"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Shown on the 404 page: a visible countdown that sends the visitor to the
// homepage after `seconds`. This is purely client-side UX — the server still
// returns a real HTTP 404 status, so it is NOT a soft-404 for crawlers.
export function NotFoundRedirect({ seconds = 11 }: { seconds?: number }) {
  const router = useRouter();
  const [left, setLeft] = useState(seconds);

  useEffect(() => {
    if (left <= 0) {
      router.replace("/");
      return;
    }
    const t = setTimeout(() => setLeft((n) => n - 1), 1000);
    return () => clearTimeout(t);
  }, [left, router]);

  return (
    <p className="mt-6 text-sm text-cream-100/45" aria-live="polite">
      Redirecting to the homepage in{" "}
      <span className="font-semibold text-gold-300">{left}</span>{" "}
      second{left === 1 ? "" : "s"}…
    </p>
  );
}
