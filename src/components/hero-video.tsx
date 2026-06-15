"use client";

import { useReducedMotion } from "motion/react";

// One pre-rendered sequence with baked-in crossfades:
// logo reveal → store tour (8s) → in-store service & cash → loops seamlessly.
// Single looping <video> = perfectly smooth, no JS playlist jank.
export function HeroVideoPlaylist() {
  const reduce = useReducedMotion();

  if (reduce) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src="/videos/hero-sequence-v2-poster.jpg" alt="" className="h-full w-full object-cover" />;
  }

  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/videos/hero-sequence-v2-poster.jpg"
    >
      <source src="/videos/hero-sequence-v2.mp4" type="video/mp4" />
    </video>
  );
}
