"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Loader2 } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/admin-adam/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, pass }),
      });
      if (res.ok) {
        router.replace("/admin-adam");
        router.refresh();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm rounded-2xl border border-cream-50/10 bg-ink-900/60 p-8 shadow-2xl"
      >
        <div className="mb-6 flex flex-col items-center text-center">
          <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
            <Lock className="h-6 w-6" />
          </span>
          <h1 className="font-display text-xl font-bold text-cream-50">Analytics Panel</h1>
          <p className="mt-1 text-sm text-cream-100/50">Cash for Gold VA — internal</p>
        </div>

        <label className="block text-xs font-semibold uppercase tracking-wide text-cream-100/60">
          Username
          <input
            type="text"
            autoComplete="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
            className="mt-1.5 w-full rounded-lg border border-cream-50/15 bg-ink-950 px-3 py-2.5 text-sm text-cream-50 outline-none focus:border-gold-400"
          />
        </label>

        <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-cream-100/60">
          Password
          <input
            type="password"
            autoComplete="current-password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
            className="mt-1.5 w-full rounded-lg border border-cream-50/15 bg-ink-950 px-3 py-2.5 text-sm text-cream-50 outline-none focus:border-gold-400"
          />
        </label>

        {error && (
          <p className="mt-4 rounded-lg bg-red-500/10 px-3 py-2 text-center text-sm text-red-300">
            Invalid username or password.
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-5 py-3 font-semibold text-ink-950 transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Sign in"}
        </button>
      </form>
    </div>
  );
}
