"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { buttonClass } from "@/components/ui/button";
import { CATEGORIES, LOCATIONS, SHOW_CALCULATOR } from "@/data/business";
import { ScrollProgress } from "@/components/scroll";

type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

// Nav category order by search intent (high → low), per Semrush US data:
// Metals (cash for gold / sell gold - dominant volume + CPC) → Jewelry → Diamonds → Coins → Watches.
const CATEGORY_NAV_ORDER = ["precious-metals", "jewelry", "precious-stones", "coins", "watches"];
const orderedCategories = CATEGORY_NAV_ORDER
  .map((slug) => CATEGORIES.find((c) => c.slug === slug))
  .filter((c): c is (typeof CATEGORIES)[number] => Boolean(c));

const NAV: NavItem[] = [
  ...orderedCategories.map((c) => ({
    label: c.nav,
    href: `/${c.slug}`,
    children: c.subcategories.map((s) => ({ label: `Sell ${s.name}`, href: `/${c.slug}/${s.slug}` })),
  })),
  { label: "Locations", href: "/locations", children: LOCATIONS.map((l) => ({ label: l.city, href: `/locations/${l.slug}` })) },
  { label: "Contact", href: "/contact-us-cash-for-gold-locations" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Blog", href: "/blog" },
    ],
  },
];

// Header CTA shows the Chantilly store number.
const HEADER_PHONE = LOCATIONS.find((l) => l.slug === "chantilly") ?? LOCATIONS[0];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <ScrollProgress />
      <header
        className={cn(
          "fixed inset-x-0 top-10 z-50 border-b border-hairline bg-white transition-all duration-300",
          scrolled ? "shadow-md shadow-ink-950/8" : "shadow-sm shadow-ink-950/[0.04]",
        )}
      >
        <div className="mx-auto flex h-18 w-full max-w-[88rem] items-center justify-between px-5 lg:h-20">
          <Link href="/" className="-ml-1 flex items-center" aria-label="Cash for Gold VA home">
            <Image
              src="/brand/c4g-logo.png"
              alt="Cash for Gold VA"
              width={1993}
              height={395}
              className="h-9 w-auto lg:h-10"
              sizes="220px"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "group flex items-center gap-1 rounded-full px-4 py-2.5 text-[0.95rem] font-bold transition-colors",
                    openMenu === item.label ? "text-gold-700" : "text-foreground hover:text-gold-700",
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={cn("h-3.5 w-3.5 opacity-60 transition-transform duration-300", openMenu === item.label && "rotate-180")} />
                  )}
                  {/* animated underline */}
                  <span className={cn("absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-gold-500 transition-transform duration-300", openMenu === item.label ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100")} />
                </Link>

                <AnimatePresence>
                  {item.children && openMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3"
                    >
                      <div className="overflow-hidden rounded-2xl border border-hairline bg-white p-2 shadow-2xl shadow-ink-950/15">
                        <ul className="relative">
                          {item.children.map((c, i) => (
                            <motion.li
                              key={c.href}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.04 + i * 0.035, duration: 0.25 }}
                            >
                              <Link
                                href={c.href}
                                className="group/item flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-gold-50 hover:text-gold-700"
                              >
                                {c.label}
                                <ChevronRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {SHOW_CALCULATOR && (
              <Link
                href="/gold-calculator"
                className="hidden items-center gap-1.5 whitespace-nowrap rounded-full border border-gold-500/50 px-4 py-2.5 text-sm font-semibold text-gold-700 transition-colors hover:bg-gold-50 lg:inline-flex"
              >
                What&apos;s It Worth?
              </Link>
            )}
            <a href={`tel:${HEADER_PHONE.phoneHref}`} className={buttonClass("silver", "md", "hidden sm:inline-flex")}>
              <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink-950/40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-ink-950" />
                </span>
                <Phone className="h-4 w-4" />
                <span className="hidden md:inline">{HEADER_PHONE.phone}</span>
                <span className="md:hidden">Call</span>
              </span>
            </a>
            <button
              onClick={() => setOpen(true)}
              className="rounded-full p-2.5 text-foreground transition-colors hover:bg-gold-50 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[70] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-ink-950/50 backdrop-blur-sm" onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-white p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <Image src="/brand/c4g-logo.png" alt="Cash for Gold VA" width={1993} height={395} className="h-14 w-auto" />
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="rounded-full p-2 text-foreground hover:bg-gold-50">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="mt-6 flex flex-col gap-1">
                {NAV.map((item) => (
                  <div key={item.href} className="border-b border-hairline py-1">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-base font-semibold text-foreground"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="mb-2 ml-3 flex flex-col gap-0.5">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted hover:text-gold-700">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </nav>
              {SHOW_CALCULATOR && (
                <Link
                  href="/gold-calculator"
                  onClick={() => setOpen(false)}
                  className="mt-6 flex w-full items-center justify-center rounded-full border-2 border-gold-500/50 px-5 py-3 font-semibold text-gold-700"
                >
                  What&apos;s It Worth?
                </Link>
              )}
              <a href={`tel:${HEADER_PHONE.phoneHref}`} className={buttonClass("gold", "lg", "mt-3 w-full")}>
                <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">
                  <Phone className="h-5 w-5" /> Call {HEADER_PHONE.phone}
                </span>
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
