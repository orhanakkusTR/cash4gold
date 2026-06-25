import Image from "next/image";

// Hero background. Currently a static image (public/hero/hero-bg.webp).
// The previous looping video is preserved below — to restore it, re-add
// "use client" + useReducedMotion and return the <video> block again.
export function HeroVideoPlaylist() {
  return (
    <Image
      src="/hero/hero-bg-v2.webp"
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />
  );
}

/* Previous video background (kept for easy revert):
"use client";
import { useReducedMotion } from "motion/react";

export function HeroVideoPlaylist() {
  const reduce = useReducedMotion();
  if (reduce) {
    return <img src="/videos/hero-sequence-v2-poster.jpg" alt="" className="h-full w-full object-cover" />;
  }
  return (
    <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/videos/hero-sequence-v2-poster.jpg">
      <source src="/videos/hero-sequence-v2.mp4" type="video/mp4" />
    </video>
  );
}
*/
