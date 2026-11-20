import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Luxury inertia smooth scroll engine (Jaspreet Singh & north.cloud aesthetic)
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: false, // Leave native touch scrolling untampered to prevent halfway scroll traps
      autoResize: true,
    });

    lenisRef.current = lenis;

    // Connect RAF
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Keep Lenis dimensions updated on DOM content changes
    const ro = new ResizeObserver(() => {
      lenis.resize();
    });
    ro.observe(document.body);

    // Also recalculate after initial asset settling
    const t1 = setTimeout(() => lenis.resize(), 500);
    const t2 = setTimeout(() => lenis.resize(), 1500);

    // Intercept in-page hash links for silky Lenis scroll target jumps
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement, { offset: -30, duration: 1.1 });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
