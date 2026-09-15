"use client";

import { useEffect, useState } from "react";



const links = [
  { href: "#brands", label: "Brands" },
  { href: "#library", label: "Catalogue Library" },
  { href: "#craft", label: "About" },
];

const Wordmark = ({ className = "" }: { className?: string }) => (
  <span className={`wordmark ${className}`}>
    <span className="wordmark-letters">VS</span>
    <span className="wordmark-word">Enterprises</span>
  </span>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`nav ${scrolled || open ? "nav-solid" : ""}`}>
      <div className="nav-inner container">
        <a href="#top" className="nav-brand" onClick={() => setOpen(false)} aria-label="VS Enterprises, home">
          <Wordmark />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#library" className="nav-cta" onClick={() => setOpen(false)}>
            Open Library
          </a>
        </nav>

        <button className={`nav-burger ${open ? "is-open" : ""}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <nav className="nav-drawer" aria-label="Mobile">
          <a href="#top" className="nav-drawer-wordmark" onClick={() => setOpen(false)}>
            <Wordmark />
          </a>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#library" className="nav-drawer-cta" onClick={() => setOpen(false)}>Open Library</a>
        </nav>
      )}
    </header>
  );
}
