"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const router = useRouter();
  async function logout() {
    await fetch("/api/admin-adam/logout", { method: "POST" }).catch(() => {});
    router.replace("/admin-adam/login");
    router.refresh();
  }
  return (
    <button
      onClick={logout}
      className="inline-flex items-center gap-1.5 rounded-full border border-cream-50/15 px-3.5 py-1.5 text-sm text-cream-100/70 transition-colors hover:border-cream-50/30 hover:text-cream-50"
    >
      <LogOut className="h-4 w-4" /> Sign out
    </button>
  );
}
