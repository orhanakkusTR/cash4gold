"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { appraisalKitSchema, SHIPPING_METHODS, type AppraisalKitInput } from "@/lib/appraisal-kit-schema";
import { cn } from "@/lib/utils";
import { CARRIER_LOGOS, FedExLogo } from "@/components/carrier-logos";

const fieldCls =
  "w-full rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30";

function Err({ msg }: { msg?: string }) {
  return msg ? <p className="mt-1 text-xs font-medium text-red-600">{msg}</p> : null;
}

export function ShipKitForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppraisalKitInput>({
    resolver: zodResolver(appraisalKitSchema),
    defaultValues: { shippingMethod: "fedex-mailer", consent: undefined },
  });

  const selected = watch("shippingMethod");

  async function onSubmit(data: AppraisalKitInput) {
    setStatus("idle");
    try {
      const res = await fetch("/api/appraisal-kit", {
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
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-hairline bg-white p-10 text-center shadow-[var(--shadow-card)]">
        <CheckCircle2 className="h-12 w-12 text-gold-500" />
        <h3 className="font-display text-xl font-semibold text-foreground">You&apos;re all set!</h3>
        <p className="max-w-sm text-sm text-muted">
          Your free, insured appraisal kit is on the way. We&apos;ll email you the details and tracking shortly. Prefer to skip the wait? Walk into any of our four Northern Virginia stores today.
        </p>
        <button onClick={() => setStatus("idle")} className="mt-2 text-sm font-semibold text-gold-700 hover:text-gold-600">
          Start another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-hairline bg-white p-6 shadow-[var(--shadow-card)] sm:p-8" noValidate>
      <h3 className="font-display text-xl font-semibold text-foreground">Get your free appraisal kit</h3>
      <p className="mt-1 text-sm text-muted">Choose how you&apos;d like to ship, free, insured, and prepaid.</p>

      {/* Shipping method selector */}
      <fieldset className="mt-5">
        <div className="grid grid-cols-3 gap-2.5">
          {SHIPPING_METHODS.map((m) => {
            const Logo = CARRIER_LOGOS[m.id] ?? FedExLogo;
            const active = selected === m.id;
            return (
              <label
                key={m.id}
                className={cn(
                  "relative flex cursor-pointer flex-col items-center gap-2 rounded-2xl border bg-white p-3 text-center transition-all",
                  active ? "border-gold-500 ring-2 ring-gold-400/40" : "border-hairline hover:border-gold-400/60",
                )}
              >
                <input type="radio" value={m.id} className="sr-only" {...register("shippingMethod")} />
                {active && <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-gold-500" />}
                <span className="flex h-7 items-center justify-center">
                  <Logo className="h-5 w-auto" />
                </span>
                <span className="text-xs font-semibold leading-tight text-foreground">{m.label}</span>
                <span className="rounded-full bg-gold-50 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-gold-700">{m.speed}</span>
              </label>
            );
          })}
        </div>
        <Err msg={errors.shippingMethod?.message} />
      </fieldset>

      {/* Contact */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <input className={fieldCls} placeholder="Full name" autoComplete="name" {...register("name")} />
          <Err msg={errors.name?.message} />
        </div>
        <div>
          <input className={fieldCls} placeholder="Email" type="email" autoComplete="email" {...register("email")} />
          <Err msg={errors.email?.message} />
        </div>
        <div>
          <input className={fieldCls} placeholder="Phone" type="tel" autoComplete="tel" {...register("phone")} />
          <Err msg={errors.phone?.message} />
        </div>
      </div>

      {/* Address */}
      <div className="mt-3 grid gap-3 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <input className={fieldCls} placeholder="Street address" autoComplete="street-address" {...register("street")} />
          <Err msg={errors.street?.message} />
        </div>
        <div className="sm:col-span-3">
          <input className={fieldCls} placeholder="City" autoComplete="address-level2" {...register("city")} />
          <Err msg={errors.city?.message} />
        </div>
        <div className="sm:col-span-1">
          <input className={fieldCls} placeholder="State" autoComplete="address-level1" {...register("state")} />
          <Err msg={errors.state?.message} />
        </div>
        <div className="sm:col-span-2">
          <input className={fieldCls} placeholder="ZIP" inputMode="numeric" autoComplete="postal-code" {...register("zip")} />
          <Err msg={errors.zip?.message} />
        </div>
      </div>

      <input className={cn(fieldCls, "mt-3")} placeholder="What are you sending? (optional)" {...register("itemType")} />

      {/* Honeypot */}
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden {...register("company")} />

      <label className="mt-4 flex items-start gap-2.5 text-xs leading-relaxed text-muted">
        <input type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 rounded border-ink-900/30 text-gold-600 focus:ring-gold-400" {...register("consent")} />
        <span>I agree to be contacted about my appraisal and accept the terms. No obligation to sell.</span>
      </label>
      <Err msg={errors.consent?.message} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-6 font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : "Send my free kit"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-center text-sm font-medium text-red-600">Something went wrong. Please try again or call us.</p>
      )}
      <p className="mt-3 text-center text-xs text-muted">Free shipping both ways · Insured · No obligation</p>
    </form>
  );
}
