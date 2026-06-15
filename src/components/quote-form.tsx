"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { quoteSchema, type QuoteInput } from "@/lib/quote-schema";
import { CATEGORIES, LOCATIONS } from "@/data/business";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";

const fieldCls =
  "w-full rounded-xl border border-ink-900/15 bg-cream-50 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30";

export function QuoteForm({ defaultLocation }: { defaultLocation?: string }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { location: defaultLocation ?? "" },
  });

  async function onSubmit(data: QuoteInput) {
    setStatus("idle");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-cream-50 p-10 text-center shadow-[var(--shadow-card)]">
        <CheckCircle2 className="h-12 w-12 text-gold-500" />
        <h3 className="font-display text-xl font-semibold text-foreground">Request received!</h3>
        <p className="max-w-sm text-sm text-muted">
          Thanks, our team will reach out shortly with your no-obligation quote. For the fastest answer, call your nearest location.
        </p>
        <button onClick={() => setStatus("idle")} className="mt-2 text-sm font-semibold text-gold-700 hover:text-gold-600">
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative grid gap-4 overflow-hidden rounded-2xl border border-hairline bg-white p-6 shadow-[var(--shadow-card)] sm:p-8" noValidate>
      <BorderBeam size={120} duration={8} colorFrom="#e0bd66" colorTo="#a3781f" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input className={fieldCls} placeholder="Jane Doe" {...register("name")} />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input className={fieldCls} placeholder="(571) 000-0000" inputMode="tel" {...register("phone")} />
        </Field>
      </div>

      <Field label="Email" error={errors.email?.message}>
        <input className={fieldCls} placeholder="you@email.com" inputMode="email" {...register("email")} />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="What are you selling?" error={errors.itemType?.message}>
          <select className={cn(fieldCls, "appearance-none")} defaultValue="" {...register("itemType")}>
            <option value="" disabled>Select an item type</option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.name}>{c.name}</option>
            ))}
            <option value="Other">Other / Not sure</option>
          </select>
        </Field>
        <Field label="Nearest location" error={errors.location?.message}>
          <select className={cn(fieldCls, "appearance-none")} defaultValue={defaultLocation ?? ""} {...register("location")}>
            <option value="" disabled>Select a location</option>
            {LOCATIONS.map((l) => (
              <option key={l.slug} value={l.city}>{l.city}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Details (optional)" error={errors.message?.message}>
        <textarea rows={3} className={cn(fieldCls, "resize-none")} placeholder="Tell us about your items, type, quantity, condition…" {...register("message")} />
      </Field>

      {/* Honeypot */}
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden {...register("company")} />

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" /> Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-6 font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : "Get My Free Quote"}
      </button>
      <p className="text-center text-xs text-muted">No obligation. We never share your information.</p>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
