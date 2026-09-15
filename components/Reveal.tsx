"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Scroll-reveal, fail-safe by design: the hidden state never comes from CSS -
 * content is always visible until `.is-in` triggers the fade-up animation,
 * so nothing can ever render blank. Reveal fires when the element enters the
 * viewport, or after 3s as a safety net for non-scrolling environments.
 */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reveal = () => setShown(true);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal();
      return;
    }

    // Safety net for environments where IntersectionObserver never fires.
    const failsafe = window.setTimeout(reveal, 3000);

    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              reveal();
              observer?.disconnect();
            }
          }
        },
        { threshold: 0.05, rootMargin: "0px 0px -4% 0px" }
      );
      observer.observe(node);
    } else {
      reveal();
    }

    return () => {
      window.clearTimeout(failsafe);
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
