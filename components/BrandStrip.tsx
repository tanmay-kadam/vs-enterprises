import { brands } from "@/lib/catalogue";
import { SectionDivider } from "@/components/Ornaments";
import { Reveal } from "@/components/Reveal";

export function BrandStrip() {
  return (
    <section className="brands" id="brands">
      <div className="container">
        <Reveal className="section-head">
          <p className="kicker">Authorised Brand Portfolio</p>
          <h2 className="section-title">One distributor · every brand</h2>
          <p className="section-lead">
            VS Enterprises works directly with the principals of every brand
            below, placing bulk orders, coordinating dispatches and supporting
            retailers across Delhi NCR and the wider region.
          </p>
          <SectionDivider />
        </Reveal>

        <div className="brands-grid" role="list">
          {brands.map((b, i) => (
            <Reveal key={b.id} className="brand-cell" delay={(i % 4) * 70}>
              <div className="brand-cell-inner" role="listitem">
                <span className="brand-name">{b.name}</span>
                <span className="brand-cap">{b.caption}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
