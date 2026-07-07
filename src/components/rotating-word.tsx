"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Cycles through `words` in place: fade the word out, swap it while invisible
 * (so the width change isn't seen mid-fade), fade the new one in. The word keeps
 * its natural width, so a trailing word (e.g. "buyer") stays tight against it
 * with a constant space and re-centres with it. Pure opacity — no vertical
 * translate, so descenders (the tail of "g") are never clipped. One setInterval,
 * GPU-only transitions → negligible cost. Respects prefers-reduced-motion.
 */
export function RotatingWord({
  words,
  className = "",
  interval = 2200,
}: {
  words: string[];
  className?: string;
  interval?: number;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    if (reduce || words.length < 2) return;
    let swap: ReturnType<typeof setTimeout>;
    const tick = setInterval(() => {
      setShown(false);
      swap = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setShown(true);
      }, 260);
    }, interval);
    return () => {
      clearInterval(tick);
      clearTimeout(swap);
    };
  }, [reduce, words, interval]);

  return (
    <span
      className={`inline-block transition-opacity duration-300 ease-in-out ${shown ? "opacity-100" : "opacity-0"} ${className}`}
    >
      {words[index]}
    </span>
  );
}
