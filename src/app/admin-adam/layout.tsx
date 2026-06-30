import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  // Never index or follow anything under the admin panel.
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-ink-950 text-cream-50">{children}</div>;
}
