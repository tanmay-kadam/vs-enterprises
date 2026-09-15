import { Reveal } from "@/components/Reveal";

const features = [
  {
    title: "Direct with the principals",
    text: "Authorised distributor agreements across every brand house (Expo, Roxx, Gebi, Vaya, BMT and more).",
  },
  {
    title: "One desk for bulk & retail",
    text: "Retail orders, institution supplies and event quantities handled from a single counter, pricing, dispatch and follow-up in one call.",
  },
  {
    title: "Catalogues, fully digital",
    text: "Every page of every print catalogue is turned into a swipeable online flipbook you can share with buyers and quote from directly.",
  },
];

const leaves = [
  { src: "/catalogue/expo-2026/p01.jpg", cls: "craft-leaf-a", alt: "Expo Premium catalogue cover" },
  { src: "/catalogue/expo-2026/p04.jpg", cls: "craft-leaf-b", alt: "Virasat etching dinner set, catalogue page" },
  { src: "/catalogue/expo-2026/p13.jpg", cls: "craft-leaf-c", alt: "Munch Magic PVD gold snack set, catalogue page" },
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
              three-generation distributor, capturing the finishes, sizes and serving
              rituals behind each collection, kept current for the trade.
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
              {leaves.map((l) => (
                <img
                  key={l.cls}
                  src={l.src}
                  alt={l.alt}
                  className={`craft-leaf ${l.cls}`}
                  loading="lazy"
                />
              ))}
            </div>
            <figure className="craft-quote">
              <blockquote>
                “One distributor. Every brand.
                <br /> Every page turned for you.”
              </blockquote>
              <figcaption>- VS Enterprises · Authorised Distributor</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
