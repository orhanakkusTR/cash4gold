import Image from "next/image";

// Accreditation / credential logos shown as a quiet trust strip. Logos are
// muted (grayscale, low opacity) and colorize gently on hover so the row reads
// as a credibility signal without shouting. Reused on the home page and the
// contact page. Drop new logos into /public/references and add them here.
type Credential = { src: string; alt: string; w: number; h: number };

const CREDENTIALS: Credential[] = [
  { src: "/references/a-plus.png", alt: "BBB A+ Accredited Rating", w: 371, h: 136 },
  { src: "/references/gia.webp", alt: "GIA — Gemological Institute of America", w: 329, h: 153 },
  { src: "/references/jvc.webp", alt: "Jewelers Vigilance Committee", w: 266, h: 145 },
  { src: "/references/pccs.png", alt: "PCCS Certified", w: 394, h: 128 },
];

export function CredentialsStrip({ caption = "Accredited & verified by" }: { caption?: string }) {
  return (
    <div className="text-center">
      {caption && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">{caption}</p>
      )}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
        {CREDENTIALS.map((c) => (
          <Image
            key={c.src}
            src={c.src}
            alt={c.alt}
            width={c.w}
            height={c.h}
            className="h-14 w-auto object-contain opacity-65 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-16 md:h-[4.5rem]"
          />
        ))}
      </div>
    </div>
  );
}
