import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow && (
        <span className={cn(
          "mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]",
          dark ? "text-gold-300" : "text-gold-600",
        )}>
          <span className="h-px w-6 bg-gold-400" />
          {eyebrow}
        </span>
      )}
      <h2 className={cn(
        "text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.75rem]",
        dark ? "text-cream-50" : "text-foreground",
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "mt-4 max-w-2xl text-pretty text-base leading-relaxed sm:text-lg",
          align === "center" && "mx-auto",
          dark ? "text-cream-100/70" : "text-muted",
        )}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
