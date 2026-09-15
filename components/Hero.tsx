"use client";

import { catalogs } from "@/lib/catalogue";
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-shade" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div>
            <p className="kicker kicker-gold">Authorised Distributor · Delhi NCR</p>
            <h1 className="hero-title">
              VS <span>Enterprises</span>
            </h1>
            <span className="hero-badge" aria-label="Authorised Distributor">
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2l2.5 3 3.5-.8-.8 3.5L20 11l-3 2.3.8 3.7-3.5-.8L12 19l-2.5-3-3.7.8.8-3.7L4 11l3-2.3-.8-3.5 3.5.8z" strokeLinejoin="round" />
                <path d="M8.5 11.5l2.5 2.5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Authorised Distributor
            </span>
            <p className="hero-tagline">Serving retailers &amp; bulk buyers across Delhi NCR</p>
            <p className="hero-sub">
              The exclusive catalogue library for every authorised brand:
              Expo, Roxx, Agaro, Gebi, Vaya, BMT, Anjal and Deuralux.
            </p>
            <p className="hero-sub hero-gift">
              Alongside the trade range, we curate <strong>corporate
              gifting and festive wrapping</strong>: customised gift sets,
              hampers and branded packaging, ready to order in bulk for your
              business.
            </p>
            <div className="hero-actions">
              <a href="#library" className="btn btn-gold">
                Browse Catalogue Library
              </a>

            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="cover-frame">
            <img
              src="/brand-cover.svg"
              alt="VS Enterprises authorised distributor brand plate"
              className="cover-img"
              width={600}
              height={840}
            />
            <span className="cover-rule cover-rule-tl" aria-hidden="true" />
            <span className="cover-rule cover-rule-br" aria-hidden="true" />
            <span className="cover-chip cover-chip-top">{catalogs.length} Catalogues</span>
            <span className="cover-chip cover-chip-bottom">Every Brand · 1 Order Desk</span>
          </div>
        </div>
      </div>
    </section>
  );
}
