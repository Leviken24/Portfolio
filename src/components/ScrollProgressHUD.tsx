import React, { useState, useEffect } from 'react';
import { soundEngine } from '../utils/audio';

const SECTIONS = [
  { id: 'top', num: '00', label: 'OVERVIEW' },
  { id: 'specializations', num: '01', label: 'DOMAINS' },
  { id: 'dossiers', num: '02', label: 'CASE FILES' },
  { id: 'timeline', num: '03', label: 'TIMELINE' },
  { id: 'capabilities', num: '04', label: 'ARSENAL' },
  { id: 'services', num: '05', label: 'ENGAGEMENTS' },
  { id: 'contact', num: '06', label: 'CONTACT' },
];

export const ScrollProgressHUD: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(SECTIONS[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastSectionId = SECTIONS[0].id;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
      setProgress(p);

      setIsVisible(scrollY > 150);

      // Detect active section
      const triggerY = scrollY + window.innerHeight * 0.35;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= triggerY) {
          if (SECTIONS[i].id !== lastSectionId) {
            lastSectionId = SECTIONS[i].id;
            setActiveSection(SECTIONS[i]);
            // Subtle tactile audio feedback when entering new section
            soundEngine.playPop(900);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Circle progress calculation (radius = 9, circumference = 2 * PI * 9 ~= 56.54)
  const radius = 9;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <>
      {/* 1. TOP DYNAMIC AMBIENT PROGRESS BEAM */}
      <div className="fixed top-0 left-0 w-full h-[2.5px] z-[60] pointer-events-none bg-obsidian-950/40">
        <div
          className="h-full bg-gradient-to-r from-burgundy-600 via-rose-500 to-cream-100 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(244,63,94,0.6)]"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* 2. BOTTOM-LEFT EDITORIAL TELEMETRY CAPSULE (North.cloud / Jaspreet Singh HUD style) */}
      <div
        className={`fixed bottom-6 left-6 z-30 transition-all duration-500 ease-out pointer-events-none hidden md:flex items-center gap-3 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="pointer-events-auto flex items-center gap-3 px-3.5 py-2 rounded-full bg-obsidian-950/90 backdrop-blur-xl border border-cream-300/15 shadow-2xl group hover:border-cream-300/35 transition-all">
          {/* Circular Progress Meter */}
          <div className="relative w-6 h-6 flex items-center justify-center">
            <svg className="w-6 h-6 -rotate-90" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r={radius}
                className="stroke-cream-300/15"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="12"
                cy="12"
                r={radius}
                className="stroke-cream-200 transition-all duration-100 ease-out"
                strokeWidth="2"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <span className="absolute text-[8px] font-sans font-bold text-cream-300">
              {Math.round(progress * 100)}
            </span>
          </div>

          {/* Section Indicator */}
          <div className="flex items-center gap-2 text-[10px] font-sans tracking-widest uppercase">
            <span className="text-burgundy-400 font-bold">{activeSection.num}</span>
            <span className="text-cream-400/40">•</span>
            <span className="text-cream-200 font-semibold">{activeSection.label}</span>
          </div>

          {/* Coordinate pulse dot */}
          <span className="w-1.5 h-1.5 rounded-full bg-burgundy-500 animate-pulse" />
        </div>
      </div>
    </>
  );
};
