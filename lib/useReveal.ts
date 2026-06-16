'use client';

import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets: Element[] = Array.from(el.querySelectorAll('.reveal'));
    if (el.classList.contains('reveal')) targets.push(el);

    const show = (t: Element) => t.classList.add('visible');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((t) => observer.observe(t));

    // Failsafe: content must never stay hidden. If the observer doesn't fire
    // — backgrounded tab, headless capture, a screenshot/PDF tool, a slow
    // device — reveal everything after a short grace period so a section can
    // never be exported blank.
    const failsafe = window.setTimeout(() => targets.forEach(show), 1600);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return ref;
}
