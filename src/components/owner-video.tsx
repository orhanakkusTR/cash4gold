"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/data/business";

const VIDEO_ID = "LIRQDI3ewEM";
const POSTER = "/photos/owner-video-poster.jpg";

/**
 * Minimal "see us in action" section: one large in-store video on a lite
 * (facade) YouTube embed. The heavy player only loads on click, so Core Web
 * Vitals stay intact. Real person + real storefront = a strong E-E-A-T signal.
 */
export function OwnerVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-white py-20 sm:py-28">
      {/* VideoObject structured data. NOTE: add the real `uploadDate` once known
          to qualify for video rich results. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "See us in action — Cash for Gold VA",
            description:
              "A behind-the-counter look at how Cash for Gold VA tests, values, and pays cash for gold, silver, diamonds, and jewelry at our Northern Virginia stores.",
            thumbnailUrl: `${SITE.domain}${POSTER}`,
            embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
            contentUrl: `https://www.youtube.com/watch?v=${VIDEO_ID}`,
            publisher: {
              "@type": "Organization",
              name: SITE.name,
              logo: { "@type": "ImageObject", url: `${SITE.domain}/brand/logo.png` },
            },
          }),
        }}
      />

      <div className="container-page">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
            <span className="h-px w-6 bg-gold-400" /> Behind the Counter <span className="h-px w-6 bg-gold-400" />
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            See us in action
          </h2>
        </div>

        <Reveal className="mx-auto mt-10 max-w-5xl">
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-ink-950 shadow-[var(--shadow-card)] ring-1 ring-ink-950/10">
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title="See us in action — Cash for Gold VA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 h-full w-full"
                aria-label="Play video: See us in action at Cash for Gold VA"
              >
                <Image
                  src={POSTER}
                  alt="Cash for Gold VA owner behind the counter at the store"
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  priority={false}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent transition-colors group-hover:from-ink-950/35" />
                <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold-500 text-ink-950 shadow-[var(--shadow-gold)] transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-1 h-8 w-8 fill-current" strokeWidth={0} />
                </span>
                <span className="absolute bottom-5 left-6 text-sm font-semibold text-cream-50">
                  ▶ Watch our story
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
