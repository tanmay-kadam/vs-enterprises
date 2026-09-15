"use client";

import { useEffect } from "react";

/** easeInOutCubic — gentle start, gentle settle */
const ease = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const NAV_OFFSET = 76; // fixed header height

/**
 * Intercepts in-page anchor clicks and animates the scroll at a calm,
 * even pace (native smooth scroll is much too abrupt on long pages).
 * Respects prefers-reduced-motion by falling back to an instant jump.
 */
export function SmoothScroll() {
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
      const targetY =
        target.getBoundingClientRect().top + startY - NAV_OFFSET;
      const dist = targetY - startY;
      const duration = Math.min(1200, 450 + Math.abs(dist) * 0.35);
      const start = performance.now();

      const step = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        window.scrollTo({ top: startY + dist * ease(p), behavior: "instant" as ScrollBehavior });
        if (p < 1) requestAnimationFrame(step);
        else history.pushState(null, "", `#${id}`);
      };
      requestAnimationFrame(step);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return <noscript />;
}
