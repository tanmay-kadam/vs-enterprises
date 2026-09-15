import { Reveal } from "@/components/Reveal";
import { brands, catalogs, TOTAL_PAGES } from "@/lib/catalogue";

const stats = [
  { value: "All", label: "Major Brands Authorised" },
  { value: `${catalogs.length}`, label: "Catalogues" },
  { value: `${TOTAL_PAGES || "12+"}`, label: "Total Pages" },
  { value: "1", label: "Order Desk" },
];

export function Stats() {
  return (
    <section className="stats" aria-label="VS Enterprises at a glance">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} className="stat" delay={i * 90}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
