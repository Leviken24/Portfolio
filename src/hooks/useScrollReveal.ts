import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — Advanced IntersectionObserver hook.
 * Detects elements scrolling into viewport and triggers:
 * - `.sr-hidden` -> `.sr-visible` (Fade and slide-up)
 * - `.sr-card` -> `.sr-visible` (3D perspective rotate & settle)
 * - `.laser-divider` -> `.sr-visible` (Horizontal laser beam expansion)
 * - `.reveal-mask-inner` -> `.sr-visible` (Masked typography reveal)
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const selector = '.sr-hidden, .sr-card, .laser-divider, .reveal-mask-inner';
    const targets = container.querySelectorAll<HTMLElement>(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sr-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));

    // Also observe the container itself if it has any animation class
    if (container.matches(selector)) {
      observer.observe(container);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
