import { catalogs } from "@/lib/catalogue";
import { Reveal } from "@/components/Reveal";

const features = [
  {
    title: "Direct with the principals",
    text: "Authorised distributor agreements across every brand house (Expo, Agaro, Gebi, Vaya, BMT, Anjali, Deuralux, Napoleon and The chef story).",
  },
  {
    title: "One desk for bulk & retail",
    text: "Retail orders, institution supplies and event quantities handled from a single counter: pricing, dispatch and follow-up in one call.",
  },
  {
    title: "Catalogues, fully digital",
    text: "Every print catalogue lives as an online catalogue viewer: crisp page images you can slide through and download as a PDF, right from the site.",
  },
];

/** The best product page from each brand house (curated). */
const covers: { brand: string; cover: string; pos: string }[] = [
  { brand: "Expo", cover: "/brand-best/Expo.jpg", pos: "leaf-1" },
  { brand: "Agaro", cover: "/brand-best/Agaro.jpg", pos: "leaf-2" },
  { brand: "Gebi", cover: "/brand-best/Gebi.jpg", pos: "leaf-3" },
  { brand: "Vaya", cover: "/brand-best/Vaya.jpg", pos: "leaf-4" },
  { brand: "BMT", cover: "/brand-best/BMT.jpg", pos: "leaf-5" },
  { brand: "Anjali", cover: "/brand-best/Anjali.jpg", pos: "leaf-6" },
  { brand: "Deuralux", cover: "/brand-best/Deuralux.jpg", pos: "leaf-7" },
  { brand: "Napoleon", cover: "/brand-best/Napoleon.jpg", pos: "leaf-8" },
  { brand: "The chef story", cover: "/brand-best/Chef_Story.jpg", pos: "leaf-9" },
];

export function CraftDetails() {
  return (
    <section className="craft" id="craft">
      <div className="craft-veil" aria-hidden="true" />
      <div className="container">
        <div className="craft-grid">
          <Reveal className="craft-intro">
            <p className="kicker kicker-gold">The House of VS Enterprises</p>
            <h2 className="craft-title">Details that carry the ritual</h2>
            <p className="craft-lead">
              Every catalogue in this library is the working document of a
              three-generation distributor, capturing the finishes, sizes and
              serving rituals behind each collection.
            </p>
            <ul className="craft-list">
              {features.map((f, i) => (
                <li key={f.title} className="craft-item">
                  <span className="craft-num">0{i + 1}</span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="craft-visual" delay={120}>
            <div className="craft-stack">
              {covers.map((c) => (
                <figure key={c.brand} className={`craft-leaf ${c.pos}`} title={c.brand}>
                  <span className="craft-leaf-cover">
                    <img src={c.cover} alt={`${c.brand} catalogue`} />
                    <span className="craft-leaf-name">{c.brand}</span>
                  </span>
                  <figcaption className="craft-leaf-brand">{c.brand}</figcaption>
                </figure>
              ))}
            </div>
            <figure className="craft-quote">
              <blockquote>
                “One distributor. Every brand.
                <br /> Every page turned for you.”
              </blockquote>
              <figcaption>— VS Enterprises · Authorised Distributor</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
