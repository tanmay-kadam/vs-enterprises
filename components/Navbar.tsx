"use client";

import { useEffect, useState } from "react";


/** easeInOutCubic — gentle start, gentle settle */
const ease = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const NAV_OFFSET = 76;

/** Calm animated jump for in-page anchors (native smooth scroll is abrupt). */
function useSmoothAnchors() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest?.('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href")!.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        target.scrollIntoView();
        history.pushState(null, "", `#${id}`);
        return;
      }

      const startY = window.scrollY;
      const targetY = target.getBoundingClientRect().top + startY - NAV_OFFSET;
      const dist = targetY - startY;
      const duration = Math.min(1200, 450 + Math.abs(dist) * 0.35);
      const start = performance.now();

      const step = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        window.scrollTo({ top: startY + dist * ease(p) });
        if (p < 1) requestAnimationFrame(step);
        else history.pushState(null, "", `#${id}`);
      };
      requestAnimationFrame(step);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

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
  useSmoothAnchors();
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
