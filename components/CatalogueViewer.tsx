"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { type Catalog, pageImg } from "@/lib/catalogue";
import { OPEN_CATALOG_EVENT, type OpenCatalogDetail } from "@/lib/events";
import {
  IconChevronLeft,
  IconChevronRight,
  IconClose,
  IconDownload,
} from "@/components/Ornaments";

/**
 * In-house page viewer, identical for every card. Pages are pre-rendered
 * images, so no browser PDF plugin is involved, the reader is fully
 * themed, works in the mobile popup, and scrolls continuously like a
 * printed catalogue with zoom and a page slider.
 */
export function CatalogueViewer() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Catalog | null>(null);
  const [page, setPage] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const slides = useMemo(
    () => (active?.pages ? Array.from({ length: active.pages }, (_, i) => i + 1) : []),
    [active]
  );

  useEffect(() => {
    const handler = (e: Event) => {
      const d = (e as CustomEvent<OpenCatalogDetail>).detail;
      if (!d?.catalog) return;
      setActive(d.catalog);
      setPage(1);
      setOpen(true);
requestAnimationFrame(() => scrollRef.current?.scrollTo({ top: 0 }));
    };
    window.addEventListener(OPEN_CATALOG_EVENT, handler as EventListener);
    return () =>
      window.removeEventListener(OPEN_CATALOG_EVENT, handler as EventListener);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || !slides.length) return;
    const probe = el.scrollTop + el.clientHeight * 0.35;
    let current = 1;
    slideRefs.current.forEach((node, i) => {
      if (node && node.offsetTop <= probe) current = i + 1;
    });
    setPage(current);
  }, [slides.length]);

  const go = useCallback(
    (n: number) => {
      const clamped = Math.min(slides.length, Math.max(1, n));
      setPage(clamped);
      const node = slideRefs.current[clamped - 1];
      node?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [slides.length]
  );

  if (!open || !active) return null;

  return (
    <div className="popup" role="dialog" aria-modal="true" aria-label={`${active.name} reader`}>
      <div className="popup-head">
        <div className="popup-title">
          <span className="popup-brand">
            {active.brand} · {active.name}
          </span>
          <span className="popup-pageno">
            Page {page} of {active.pages}
          </span>
        </div>
        <div className="popup-head-actions">
          <a className="popup-download" href={active.pdf} download aria-label="Download this catalogue">
            <IconDownload />
            <span className="popup-dl-label">PDF</span>
          </a>
          <button ref={closeBtnRef} className="popup-close" onClick={() => setOpen(false)} aria-label="Close catalogue reader">
            <IconClose />
          </button>
        </div>
      </div>

      <div className="popup-body">
        <div className="popup-scroll" ref={scrollRef} onScroll={onScroll} aria-label="Catalogue pages">
          {slides.map((n) => (
            <div
              key={n}
              className="popup-slide"
              ref={(el) => { slideRefs.current[n - 1] = el; }}
            >
              <img
                src={pageImg(active.slug, n)}
                alt={`${active.name} page ${n}`}
                loading={n <= 2 ? "eager" : "lazy"}
                width={800}
                height={1131}
                style={{ width: "100%" }}
                className="popup-img"
                draggable={false}
              />
            </div>
          ))}
        </div>
        <button className="popup-arrow prev" onClick={() => go(page - 1)} disabled={page <= 1} aria-label="Previous page">
          <IconChevronLeft />
        </button>
        <button className="popup-arrow next" onClick={() => go(page + 1)} disabled={page >= active.pages} aria-label="Next page">
          <IconChevronRight />
        </button>
      </div>

      <div className="popup-foot">
        <input
          className="popup-progress"
          type="range"
          min={1}
          max={Math.max(active.pages, 1)}
          value={page}
          onChange={(e) => go(Number(e.target.value))}
          aria-label="Catalogue page"
        />
        <div className="popup-counter">
          <button className="popup-counter-btn" onClick={() => go(page - 1)} disabled={page <= 1} aria-label="Previous page"><IconChevronLeft /></button>
          <span>{page}<small> / {active.pages}</small></span>
          <button className="popup-counter-btn" onClick={() => go(page + 1)} disabled={page >= active.pages} aria-label="Next page"><IconChevronRight /></button>
        </div>
      </div>
    </div>
  );
}
