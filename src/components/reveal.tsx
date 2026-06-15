"use client";

import { motion, useReducedMotion, type Variant } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

/**
 * Scroll-triggered reveal. Fades + slides children in as they enter the
 * viewport. Respects prefers-reduced-motion. Use `delay` to stagger.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  as = "div",
  once = true,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const hidden: Variant = reduce
    ? { opacity: 1 }
    : { opacity: 0, ...offset[direction] };
  const shown: Variant = { opacity: 1, x: 0, y: 0 };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once, amount: 0.25 }}
      variants={{ hidden, shown }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/** Container that staggers Reveal-like children via index-based delay. */
export function StaggerGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
