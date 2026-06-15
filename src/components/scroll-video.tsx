"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";

type Step = { title: string; desc: string };

/** The frame sequence's background is processed to pure white, so the canvas
 *  blends seamlessly into a plain white section (no visible square edge). */
const VIDEO_BG = "#ffffff";

/**
 * Scroll-scrubbed cinematic embedded in a contained two-column "anatomy"
 * section (à la a product feature breakdown): numbered steps on the left that
 * highlight as you scroll, a sticky video panel on the right that scrubs frame
 * by frame in sync.
 *
 * The clip is pre-rendered to a JPG frame sequence (see tools/ in the repo) and
 * painted onto a <canvas> — smoother and more reliable than <video> seeking,
 * especially on mobile Safari.
 *
 * Frames: `${basePath}/frame_001.jpg … frame_${count}.jpg` (3-digit pad).
 * Respects prefers-reduced-motion (static frame, all steps shown).
 */
export function ScrollVideo({
  eyebrow = "The Anatomy of a Fair Offer",
  title = (
    <>
      Every gram, <span className="text-gold-gradient">honestly valued</span>
    </>
  ),
  steps,
  basePath = "/scroll",
  count = 145,
  pad = 3,
  scrollLengthVh = 260,
  className,
}: {
  eyebrow?: string;
  title?: ReactNode;
  steps: Step[];
  progressLabel?: string;
  basePath?: string;
  count?: number;
  pad?: number;
  scrollLengthVh?: number;
  className?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrame = useRef(-1);
  const rafRef = useRef<number | null>(null);
  const reduce = useReducedMotion();
  const [loaded, setLoaded] = useState(0);
  const [active, setActive] = useState(0);

  const nSteps = steps.length;
  const frameSrc = (i: number) =>
    `${basePath}/frame_${String(i + 1).padStart(pad, "0")}.jpg`;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  // hoisted above any early return so hook order stays stable
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0.02, 1]);

  // ---- preload the frame sequence ----
  useEffect(() => {
    let alive = true;
    const imgs: HTMLImageElement[] = new Array(count);
    let done = 0;
    for (let i = 0; i < count; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = frameSrc(i);
      img.onload = img.onerror = () => {
        if (!alive) return;
        done += 1;
        setLoaded(done);
        if (i === 0) draw(0);
      };
      imgs[i] = img;
    }
    imagesRef.current = imgs;
    return () => {
      alive = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, basePath]);

  // ---- canvas painting (cover-fit, DPR-aware) ----
  function paint(img: HTMLImageElement) {
    const canvas = canvasRef.current;
    if (!canvas || !img.complete || img.naturalWidth === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const ir = img.naturalWidth / img.naturalHeight;
    const cr = cw / ch;
    let dw, dh, dx, dy;
    if (cr > ir) {
      dw = cw; dh = cw / ir; dx = 0; dy = (ch - dh) / 2;
    } else {
      dh = ch; dw = ch * ir; dy = 0; dx = (cw - dw) / 2;
    }
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  function draw(p: number) {
    const imgs = imagesRef.current;
    if (!imgs.length) return;
    // reversed: scroll 0 = scattered (last frame) → scroll 1 = assembled (first frame)
    const idx = Math.min(count - 1, Math.max(0, Math.round((1 - p) * (count - 1))));
    if (idx === currentFrame.current && imgs[idx]?.complete) return;

    let img = imgs[idx];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let d = 1; d < count; d++) {
        const a = imgs[idx - d];
        const b = imgs[idx + d];
        if (a?.complete && a.naturalWidth) { img = a; break; }
        if (b?.complete && b.naturalWidth) { img = b; break; }
      }
    }
    if (img?.complete && img.naturalWidth) {
      paint(img);
      currentFrame.current = idx;
    }
  }

  function requestDraw(p: number) {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      draw(p);
    });
  }

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (!reduce) requestDraw(p);
    setActive(Math.min(nSteps - 1, Math.floor(p * nSteps)));
  });

  // repaint on resize
  useEffect(() => {
    const onResize = () => {
      currentFrame.current = -1;
      draw(scrollYProgress.get());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ready = loaded > 0;
  const loadPct = Math.round((loaded / count) * 100);

  // The video panel (right column) — shared between motion + reduced-motion.
  const panel = (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      {reduce ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={frameSrc(0)} alt="" className="h-full w-full object-contain" />
      ) : (
        <>
          <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />
          {!ready && (
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-px w-32 overflow-hidden rounded bg-black/10">
                <div className="h-full bg-gold-400 transition-all duration-200" style={{ width: `${loadPct}%` }} />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );

  const header = (
    <>
      <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
        <span className="h-px w-7 bg-zinc-300" /> {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-[2.7rem]">
        {title}
      </h2>
    </>
  );

  // ---- reduced motion: static, no pinning, all steps expanded ----
  if (reduce) {
    return (
      <section className={cn("py-16 sm:py-24", className)} style={{ backgroundColor: VIDEO_BG }}>
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            {header}
            <StepTimeline steps={steps} active="all" />
          </div>
          {panel}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className={cn("relative", className)}
      style={{ height: `${scrollLengthVh}vh`, backgroundColor: VIDEO_BG }}
    >
      <div className="sticky top-0 flex min-h-screen items-center py-12 lg:items-start lg:pt-[14vh]">
        <div className="container-page grid w-full items-center gap-12 lg:grid-cols-2">
          {/* left: steps */}
          <div>
            {header}
            <StepTimeline steps={steps} active={active} fillScaleY={progressScaleX} />
          </div>

          {/* right: video panel */}
          {panel}
        </div>
      </div>
    </section>
  );
}

/** Vertical timeline of steps with a scroll-driven fill line. The active step
 *  expands to reveal its description; the rest collapse to just their title. */
function StepTimeline({
  steps,
  active,
  fillScaleY,
}: {
  steps: Step[];
  active: number | "all";
  fillScaleY?: MotionValue<number>;
}) {
  return (
    <ol className="relative mt-12 space-y-7">
      {/* track */}
      <span aria-hidden className="absolute left-4 top-4 bottom-4 w-px -translate-x-1/2 bg-black/10" />
      {/* progress fill */}
      {fillScaleY ? (
        <motion.span
          aria-hidden
          className="absolute left-4 top-4 bottom-4 w-px -translate-x-1/2 origin-top bg-gradient-to-b from-zinc-300 via-zinc-500 to-ink-900"
          style={{ scaleY: fillScaleY }}
        />
      ) : (
        <span aria-hidden className="absolute left-4 top-4 bottom-4 w-px -translate-x-1/2 bg-gradient-to-b from-zinc-300 to-ink-900" />
      )}
      {steps.map((s, i) => (
        <StepRow
          key={s.title}
          n={i + 1}
          step={s}
          activeState={active === "all" || i === active}
        />
      ))}
    </ol>
  );
}

function StepRow({
  n,
  step,
  activeState,
}: {
  n: number;
  step: Step;
  activeState: boolean;
}) {
  return (
    <li className="relative flex gap-5">
      <span
        className={cn(
          "relative z-10 grid h-8 w-8 flex-none place-items-center rounded-full border text-[11px] font-bold tabular-nums transition-all duration-300",
          activeState
            ? "border-ink-950 bg-ink-950 text-white shadow-sm"
            : "border-black/15 bg-white text-zinc-400"
        )}
      >
        {String(n).padStart(2, "0")}
      </span>
      <div className="pt-0.5">
        <h3
          className={cn(
            "font-display text-lg font-semibold transition-colors duration-300",
            activeState ? "text-foreground" : "text-zinc-400"
          )}
        >
          {step.title}
        </h3>
        {/* collapsing description (CSS grid-rows 0fr → 1fr) */}
        <div
          className="grid transition-all duration-500 ease-out"
          style={{ gridTemplateRows: activeState ? "1fr" : "0fr", opacity: activeState ? 1 : 0 }}
        >
          <div className="overflow-hidden">
            <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted">{step.desc}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
