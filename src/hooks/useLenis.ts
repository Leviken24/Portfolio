import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Luxury inertia smooth scroll engine (Jaspreet Singh & north.cloud aesthetic)
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    lenisRef.current = lenis;

    // Connect RAF
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Track scroll velocity for kinetic skew effects
    let skewTimeout: number | undefined;
    lenis.on('scroll', (e: { velocity: number; progress: number; scroll: number }) => {
      // Clamp velocity between -10 and 10 for subtle, tasteful fluid skew
      const clampedVelocity = Math.max(-10, Math.min(10, e.velocity));
      document.documentElement.style.setProperty('--scroll-velocity', `${clampedVelocity}`);
      document.documentElement.style.setProperty('--scroll-progress', `${e.progress}`);
      document.documentElement.style.setProperty('--scroll-y', `${e.scroll}px`);

      // Reset velocity to 0 when scrolling stops
      window.clearTimeout(skewTimeout);
      skewTimeout = window.setTimeout(() => {
        document.documentElement.style.setProperty('--scroll-velocity', '0');
      }, 120);
    });

    // Intercept in-page hash links for silky Lenis scroll target jumps
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement, { offset: -30, duration: 1.2 });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
