// Hand-drawn, single continuous brush-stroke underline (gold). Used for emphasis
// in section headings and copy across the site.
export function BrushUnderline({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`relative inline-block font-extrabold ${className ?? ""}`}>
      {children}
      <svg
        aria-hidden
        viewBox="0 0 300 14"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -bottom-1.5 left-0 h-3 w-full overflow-visible text-gold-500"
      >
        <path
          d="M3 8 C 60 3, 110 12, 160 7 S 250 3, 297 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
