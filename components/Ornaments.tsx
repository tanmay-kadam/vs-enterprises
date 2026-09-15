/** Decorative SVGs used across the site, gold hairlines, mandala accents. */

export function Mandala({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="50" cy="50" r="46" strokeWidth="1" />
      <circle cx="50" cy="50" r="36" strokeWidth="1" strokeDasharray="2 3" />
      <circle cx="50" cy="50" r="12" strokeWidth="1.4" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        const x1 = 50 + 36 * Math.cos(a);
        const y1 = 50 + 36 * Math.sin(a);
        const x2 = 50 + 46 * Math.cos(a);
        const y2 = 50 + 46 * Math.sin(a);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1" />
        );
      })}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * Math.PI) / 12;
        const x = 50 + 46 * Math.cos(a);
        const y = 50 + 46 * Math.sin(a);
        return <circle key={`d${i}`} cx={x} cy={y} r="1.1" fill="currentColor" stroke="none" />;
      })}
      <path
        d="M50 4 l3.2 6.4 h-6.4 Z M50 96 l3.2 -6.4 h-6.4 Z M4 50 l6.4 3.2 v-6.4 Z M96 50 l-6.4 3.2 v-6.4 Z"
        strokeWidth="0.8"
      />
    </svg>
  );
}

export function SectionDivider({ tone = "gold" }: { tone?: "gold" | "light" }) {
  return (
    <span
      className={`divider ${tone === "light" ? "divider-light" : ""}`}
      aria-hidden="true"
    >
      <span className="divider-line" />
      <span className="divider-diamond" />
      <span className="divider-line" />
    </span>
  );
}

export function IconChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChevronRight() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconClose() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function IconDownload() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconExpand() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
