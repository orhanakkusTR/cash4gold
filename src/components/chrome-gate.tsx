"use client";

import { usePathname } from "next/navigation";

// Hides the public site chrome (header, footer, ticker, FAB) on the private
// /admin-adam analytics panel so it renders as a standalone dashboard.
export function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin-adam")) return null;
  return <>{children}</>;
}
