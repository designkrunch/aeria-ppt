'use client';

import { useEffect, useRef } from 'react';

const DESIGN_WIDTH = 1920;

/**
 * Renders the deck at a fixed 1920px design width and scales it to fit the
 * window, so every section stays a pixel-perfect 16:9 slide at any width and
 * nothing ever clips. Below 768px it disables scaling and lets the sections
 * flow naturally (mobile). The transform itself is applied in CSS (immediate,
 * no flash); JS only refines the scale factor and sets the wrapper height so
 * there's no extra whitespace or horizontal scroll.
 */
export function DeckScaler({ children }: { children: React.ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    const fit = () => {
      if (window.innerWidth < 768) {
        inner.style.removeProperty('--deck-scale');
        wrap.style.height = '';
        return;
      }
      const scale = wrap.clientWidth / DESIGN_WIDTH;
      inner.style.setProperty('--deck-scale', String(scale));
      wrap.style.height = `${inner.offsetHeight * scale}px`;
    };

    fit();
    // Refit after fonts/images settle and after the reveal failsafe fires.
    const timers = [300, 1200, 2400].map((d) => window.setTimeout(fit, d));
    window.addEventListener('resize', fit);
    let ro: ResizeObserver | undefined;
    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(fit);
      ro.observe(inner);
    }
    return () => {
      window.removeEventListener('resize', fit);
      timers.forEach(window.clearTimeout);
      ro?.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} className="deck-wrap">
      <div ref={innerRef} className="deck-inner">
        {children}
      </div>
    </div>
  );
}
