"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";

/**
 * LCP-friendly looping video background for a hero.
 *
 * The 4.8MB gold-to-cash video sits ABOVE the fold here, so we must not let it
 * block the largest-contentful paint. Instead:
 *   1. The poster renders immediately as a priority <Image> — that image is the
 *      LCP element, so the hero paints fast on mobile.
 *   2. After mount (and only when motion is allowed), we attach the <source>,
 *      load(), and play() the video, then fade it in over the poster once it can
 *      actually play. Low Power Mode / reduced-motion just keeps the poster.
 * The muted *property* is set imperatively (the React attr alone is unreliable
 * for iOS autoplay).
 */
export function HeroVideoBg({ src, poster, alt }: { src: string; poster: string; alt: string }) {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);

  // Defer attaching the video until after first paint so it never competes with
  // the LCP poster. requestIdleCallback where available, else a short timeout.
  useEffect(() => {
    if (reduce) return;
    const w = window as unknown as { requestIdleCallback?: (cb: () => void) => number };
    let id: number;
    if (typeof w.requestIdleCallback === "function") {
      id = w.requestIdleCallback(() => setMounted(true));
    } else {
      id = window.setTimeout(() => setMounted(true), 400);
    }
    return () => window.clearTimeout(id);
  }, [reduce]);

  useEffect(() => {
    const v = videoRef.current;
    if (!mounted || !v) return;
    v.muted = true;
    v.load();
    const p = v.play();
    if (p) p.catch(() => {});
  }, [mounted]);

  return (
    <div aria-hidden className="absolute inset-0">
      {/* Poster = the LCP element. Painted instantly, priority-fetched. */}
      <Image
        src={poster}
        alt={alt}
        fill
        priority
        fetchPriority="high"
        quality={65}
        sizes="100vw"
        className="object-cover"
      />
      {/* Video fades in on top once it can play — pure enhancement. */}
      {!reduce && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          onCanPlay={() => setReady(true)}
        >
          {mounted && <source src={src} type="video/mp4" />}
        </video>
      )}
    </div>
  );
}
