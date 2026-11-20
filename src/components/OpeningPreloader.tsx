import React, { useState, useEffect } from 'react';
import { soundEngine } from '../utils/audio';

interface OpeningPreloaderProps {
  onComplete: () => void;
}

export const OpeningPreloader: React.FC<OpeningPreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 8) + 4;
      current += increment;

      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          soundEngine.playChime();
          setTimeout(onComplete, 500);
        }, 150);
      } else {
        setProgress(current);
        if (current % 20 < 7) {
          soundEngine.playPop(600 + current * 4);
        }
      }
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    soundEngine.playChime();
    setTimeout(onComplete, 400);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between p-8 sm:p-12 bg-obsidian-950 text-cream-100 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isExiting ? '-translate-y-full pointer-events-none' : 'translate-y-0'
      }`}
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(84, 11, 29, 0.4) 0%, rgba(9, 9, 12, 0.98) 75%)'
      }}
    >
      {/* Top Preloader Header */}
      <div className="flex items-center justify-between text-xs font-sans tracking-widest text-cream-400 uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-burgundy-500 animate-ping" />
          <span>H S SHREEJA // PORTFOLIO</span>
        </div>
        <div className="font-editorial italic text-cream-300">
          Curated Technical Works © 2026
        </div>
      </div>

      {/* Centerpiece: Counter & Revealing Monogram */}
      <div className="my-auto text-center space-y-6">
        <div className="relative inline-block">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-cream-300/20 bg-burgundy-950/80 mx-auto flex items-center justify-center shadow-velvet">
            <span className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-cream-100">
              HS
            </span>
          </div>
          <div className="absolute inset-0 rounded-full border border-dashed border-cream-300/30 animate-spin-slow pointer-events-none" />
        </div>

        <div>
          <span className="text-6xl sm:text-8xl md:text-9xl font-serif font-black tracking-tight text-cream-100 block">
            {progress}%
          </span>
          <span className="mt-2 text-xs sm:text-sm font-sans tracking-[0.3em] uppercase text-cream-400 block">
            INITIALIZING RECEPTACLES & ARCHITECTURE
          </span>
        </div>
      </div>

      {/* Bottom Progress Bar & Skip */}
      <div className="space-y-4">
        <div className="w-full h-[2px] bg-cream-300/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-burgundy-700 via-cream-300 to-cream-100 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] font-sans text-cream-400">
          <span>CYBERSEC ✦ AI RED TEAM ✦ ROBOTICS ✦ CLOUD ✦ IOT</span>
          <button
            onClick={handleSkip}
            className="hover:text-cream-100 transition-colors uppercase tracking-widest text-[10px] underline underline-offset-4 cursor-pointer"
          >
            SKIP INTRO →
          </button>
        </div>
      </div>
    </div>
  );
};
