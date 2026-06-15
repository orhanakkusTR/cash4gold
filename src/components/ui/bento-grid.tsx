import Link from "next/link";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends Omit<ComponentPropsWithoutRef<"a">, "href"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div className={cn("grid w-full auto-rows-[20rem] grid-cols-3 gap-4", className)} {...props}>
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <Link
    href={href}
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-3xl border border-gold-500/15 bg-white",
      "shadow-[0_2px_4px_rgba(20,16,11,.04),0_12px_32px_-12px_rgba(163,120,31,.12)]",
      "transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/40 hover:shadow-[var(--shadow-gold)]",
      className,
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-10 w-10 origin-left transform-gpu text-gold-500 transition-all duration-300 ease-out group-hover:scale-90" />
      <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{name}</h3>
      <p className="max-w-lg text-sm text-muted">{description}</p>
    </div>
    <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-8 transform-gpu items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700">
        {cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-gold-500/[0.02]" />
  </Link>
);

export { BentoCard, BentoGrid };
