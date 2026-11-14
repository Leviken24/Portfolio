import React, { useEffect, useRef } from 'react';

export const ScrollAtmosphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle star & cosmic dust particles (Inspired by Jaspreet Singh Sunset to Night transition)
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: (Math.random() - 0.5) * 0.15,
      pulse: Math.random() * 0.02 + 0.005,
    }));

    let scrollProgress = 0;

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Dynamic ambient gradient shifting with scroll (Sunset to Night depth)
      // At top (0%): Velvet Burgundy sunset
      // At bottom (100%): Cosmic deep obsidian night
      const redVal = Math.max(12, Math.floor(65 - scrollProgress * 50));
      const blueVal = Math.min(22, Math.floor(12 + scrollProgress * 10));

      const grad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.35,
        50,
        width * 0.5,
        height * 0.5,
        width * 0.8
      );
      grad.addColorStop(0, `rgba(${redVal}, 6, ${blueVal}, 0.25)`);
      grad.addColorStop(1, 'rgba(9, 9, 12, 0)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Render delicate floating particles (stars become brighter as you descend)
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha += p.pulse;
        if (p.alpha > 0.8 || p.alpha < 0.2) p.pulse = -p.pulse;

        // More visible as you scroll down
        const effectiveAlpha = Math.min(1, p.alpha * (0.4 + scrollProgress * 0.8));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(228, 212, 195, ${effectiveAlpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full"
    />
  );
};
