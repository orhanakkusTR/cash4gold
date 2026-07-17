import Image from "next/image";

// Hero background. Currently a static image (public/hero/hero-bg.webp).
// The previous looping video is preserved below — to restore it, re-add
// "use client" + useReducedMotion and return the <video> block again.
export function HeroVideoPlaylist() {
  return (
    <Image
      src="/hero/hero-bg-v2.webp"
      alt="Gold jewelry, coins and bullion appraised for cash at Cash for Gold VA in Northern Virginia"
      fill
      priority
      fetchPriority="high"
      quality={65}
      sizes="100vw"
      className="object-cover"
    />
  );
}
