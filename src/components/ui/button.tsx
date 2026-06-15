import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "silver" | "dark" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-tight transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

// Animated light sheen that sweeps across on hover.
const sheen =
  "before:pointer-events-none before:absolute before:inset-0 before:-translate-x-[130%] before:skew-x-[-20deg] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:transition-transform before:duration-[900ms] before:ease-out hover:before:translate-x-[130%]";

const variants: Record<Variant, string> = {
  gold: cn(
    "bg-gold-500 text-ink-950 shadow-[0_10px_30px_-8px_rgba(163,120,31,0.55)] hover:bg-gold-400 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_-8px_rgba(163,120,31,0.62)]",
    sheen,
  ),
  silver: cn(
    "bg-gradient-to-br from-zinc-200 to-zinc-400 text-ink-950 ring-1 ring-inset ring-white/50 shadow-[0_10px_30px_-8px_rgba(82,91,107,0.5)] hover:from-zinc-100 hover:to-zinc-300 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_-8px_rgba(82,91,107,0.55)]",
    sheen,
  ),
  dark: cn(
    "bg-ink-900 text-cream-50 shadow-[0_10px_30px_-10px_rgba(20,16,11,0.55)] hover:bg-ink-800 hover:-translate-y-0.5",
    sheen,
  ),
  outline:
    "border-2 border-ink-900/12 bg-white/70 text-foreground backdrop-blur-sm hover:border-gold-400 hover:text-gold-700 hover:-translate-y-0.5",
  ghost: "text-foreground hover:bg-gold-50 hover:text-gold-700",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

/** Shared class string so plain <a> (e.g. tel: links) match the button components. */
export function buttonClass(variant: Variant = "gold", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type CommonProps = { variant?: Variant; size?: Size; className?: string; children: ReactNode };

export function Button({ variant = "gold", size = "md", className, children, ...props }: CommonProps & ComponentProps<"button">) {
  return (
    <button className={buttonClass(variant, size, className)} {...props}>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

export function ButtonLink({ variant = "gold", size = "md", className, children, href, ...props }: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={buttonClass(variant, size, className)} {...props}>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}
