import Link from "next/link";

// Renders body text with our store-city names turned into bold links to their
// location pages. Keep the source strings plain (for FAQ JSON-LD); only the
// visible copy is linkified here. "Vienna/Tysons" must come first so it wins
// over a bare "Vienna".
const CITY_LINKS = [
  { name: "Vienna/Tysons", slug: "vienna" },
  { name: "Annandale", slug: "annandale" },
  { name: "Manassas", slug: "manassas" },
  { name: "Chantilly", slug: "chantilly" },
  { name: "Vienna", slug: "vienna" },
] as const;

const PATTERN = new RegExp(`(${CITY_LINKS.map((c) => c.name).join("|")})`, "g");

export function LinkifyCities({ text }: { text: string }) {
  const parts = text.split(PATTERN);
  return (
    <>
      {parts.map((part, i) => {
        const city = CITY_LINKS.find((c) => c.name === part);
        return city ? (
          <Link
            key={i}
            href={`/locations/${city.slug}`}
            className="font-bold text-gold-700 underline decoration-gold-400/40 underline-offset-2 transition-colors hover:text-gold-800"
          >
            {part}
          </Link>
        ) : (
          part
        );
      })}
    </>
  );
}
