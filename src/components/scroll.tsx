"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useReducedMotion,
  animate,
} from "motion/react";
import { useRef, useEffect, useState, type ReactNode } from "react";

/** Slim gold progress bar fixed to the top, driven by page scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 top-10 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-gold-600 via-gold-300 to-gold-500"
    />
  );
}

/**
 * Parallax wrapper, translates children on the Y axis as the element scrolls
 * through the viewport. `speed` > 0 moves slower than scroll (depth effect).
 */
export function Parallax({
  children,
  speed = 60,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: reduce ? 0 : y }}>{children}</motion.div>
    </div>
  );
}

/** Number that counts up from 0 to `value` when scrolled into view. */
export function CountUp({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/** Scales/fades a hero block based on its own scroll position (scroll-out). */
export function ScrollFadeScale({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  return (
    <div ref={ref}>
      <motion.div style={reduce ? undefined : { opacity, scale, y }}>
        {children}
      </motion.div>
    </div>
  );
}
