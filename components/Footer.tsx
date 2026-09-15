import { COMPANY, brands } from "@/lib/catalogue";
import { SectionDivider } from "@/components/Ornaments";

const FooterMark = () => (
  <span className="wordmark wordmark-footer">
    <span className="wordmark-letters">VS</span>
    <span className="wordmark-word">Enterprises</span>
  </span>
);

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-footer-mark"><FooterMark /></span>
            <p>
              Authorised distributor of every major brand across metals,
              glassware, appliances, cleaning and lifestyle -
              serving retailers and bulk buyers from Wazirpur Industrial Area,
              New Delhi.
            </p>
            <p className="brands-mini">
              {brands.map((b) => b.name).join(" · ")}
            </p>
          </div>

          <div className="footer-col">
            <h4>Catalogue Library</h4>
            <ul>
              <li><a href="#brands">Brands</a></li>
              <li><a href="#library">All Catalogues</a></li>
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4>Place an order</h4>
            <p>
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" strokeLinejoin="round" /><circle cx="12" cy="9" r="2.5" /></svg>
              {COMPANY.address}
            </p>
            <p>
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 4h4l2 5-3 2a12 12 0 0 0 7 7l2-3 5 2v4a2 2 0 0 1-2 2C9 21 3 15 3 6V4z" strokeLinejoin="round" /></svg>
              <span className="contact-links">
                <a href="tel:+911141052627">{COMPANY.phone1}</a>
                <span className="contact-sep" aria-hidden="true">·</span>
                <a href="tel:+919310024835">{COMPANY.phone2}</a>
              </span>
            </p>
            <p>
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 6l9 7 9-7M3 6v12h18V6" strokeLinejoin="round" strokeLinecap="round" /></svg>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <SectionDivider tone="light" />
          <p>
            © VS Enterprises ·{" "}
            {COMPANY.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
