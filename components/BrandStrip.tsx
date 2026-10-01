import { brands } from "@/lib/catalogue";
import { SectionDivider } from "@/components/Ornaments";

/**
 * Authorised brand portfolio.
 * Rendered statically (no scroll-reveal) so a refresh never re-animates
 * the strip — the section sits high enough on the page to be visible on load.
 */
export function BrandStrip() {
  return (
    <section className="brands" id="brands">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Authorised Brand Portfolio</p>
          <h2 className="section-title">One distributor · every brand</h2>
          <p className="section-lead">
            VS Enterprises works directly with the principals of every brand
            below, placing bulk orders, coordinating dispatches and supporting
            retailers across Delhi NCR and the wider region.
          </p>
          <SectionDivider />
        </div>

        <div className="brands-grid" role="list">
          {brands.map((b) => (
            <div key={b.id} className="brand-cell" role="listitem">
              <div className="brand-cell-inner">
                <span className="brand-name">{b.name}</span>
                <span className="brand-cap">{b.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
