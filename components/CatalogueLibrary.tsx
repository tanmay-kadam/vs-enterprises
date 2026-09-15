"use client";

import { useMemo, useState } from "react";
import { openCatalog } from "@/lib/events";
import { catalogs, brands, type Catalog } from "@/lib/catalogue";
import { SectionDivider } from "@/components/Ornaments";
import { Reveal } from "@/components/Reveal";

type Filter = "all" | string;

const RANGE = [
  "Dinner Sets", "Thali & Bhog", "Pooja Ware", "Jugs & Pitchers",
  "Hot Pots", "Snack Sets", "Gift Sets", "Steelware", "Glassware",
  "Giftware", "Flasks & Thermos", "Cleaning Tools",
];

const Corner = ({ pos }: { pos: "tl" | "bl" }) => (
  <svg className={pos === "tl" ? "fol-corner" : "fol-corner-l"} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M2 8 V2 H8" strokeLinecap="round" />
    <circle cx="5" cy="5" r="1.1" fill="currentColor" />
    <path d="M5 2 v1.5 M2 5 h1.5" strokeLinecap="round" />
    {pos === "tl" && <path d="M14 2 h8 M2 14 v8" opacity="0.4" />}
    {pos === "bl" && <path d="M2 16 m4 0 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M6 16 l0 -2.8" opacity="0.5" />}
  </svg>
);

export function CatalogueLibrary() {
  const [filter, setFilter] = useState<Filter>("all");

  const chipBrands = useMemo(
    () => brands.filter((b) => catalogs.some((c) => c.brand === b.name)),
    []
  );

  const visible = useMemo(
    () => (filter === "all" ? catalogs : catalogs.filter((c) => c.brand === filter)),
    [filter]
  );

  const totalChips: { id: Filter; label: string }[] = [
    { id: "all", label: `All · ${catalogs.length}` },
    ...chipBrands.map((b) => ({ id: b.name, label: b.name })),
  ];

  const open = (c: Catalog) => () => openCatalog(c);

  return (
    <section className="library" id="library">
      <div className="container">
        <Reveal className="section-head">
          <p className="kicker">Catalogue Library</p>
          <h2 className="section-title">The complete range, in one library</h2>
          <p className="section-lead">
            Brass and steel dinner sets, pooja thalis, jugs and pitchers, hot
            pots, glassware and giftware. Tap any folio to read it, or
            download the PDF.
          </p>
          <p className="range-strip" aria-label="Product range">
            {RANGE.map((r, i) => (
              <span key={r}>
                <span className="range-item">{r}</span>
                {i < RANGE.length - 1 && (
                  <span className="range-dot" aria-hidden="true">◆</span>
                )}
              </span>
            ))}
          </p>
          <SectionDivider />
        </Reveal>

        <Reveal>
          <div className="filter-bar" role="tablist" aria-label="Filter by brand">
            {totalChips.map((chip) => (
              <button
                key={chip.id}
                role="tab"
                aria-selected={filter === chip.id}
                className={`chip ${filter === chip.id ? "is-active" : ""}`}
                onClick={() => setFilter(chip.id)}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="fol-grid">
          {visible.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 5) * 60}>
              <article className="fol">
                <button
                  className="fol-cover"
                  onClick={open(c)}
                  aria-label={`Open ${c.name} in the catalogue viewer`}
                >
                  <img
                    src={c.cover}
                    alt={`${c.name}, catalogue cover`}
                    className="fol-img"
                    width={600}
                    height={810}
                    loading="lazy"
                  />
                  <span className="fol-spine" aria-hidden="true" />
                  <Corner pos="tl" />
                  <Corner pos="bl" />
                  <span className="fol-mat" aria-hidden="true" />
                  {c.pages > 0 && <span className="fol-pages">{c.pages} pages</span>}
                  <span className="fol-open">Open folio</span>
                </button>
                <div className="fol-label">
                  <p className="fol-brand">{c.brand}</p>
                  <h3 className="fol-title">{c.name}</h3>
                  <p className="fol-meta">
                    {c.pages > 0 ? `${c.pages} pages` : "PDF"}
                  </p>
                  <div className="fol-actions">
                    <button className="fol-read" onClick={open(c)}>
                      Read now <span className="fol-read-arrow" aria-hidden="true">→</span>
                    </button>
                    <a className="fol-dl" href={c.pdf} download aria-label={`Download ${c.name} PDF`} title={`Download ${c.name} PDF`}>
                      PDF
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
