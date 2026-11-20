import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_DOSSIER } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { soundEngine } from '../utils/audio';

export const FloatingNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('top');
  const [isVisible, setIsVisible] = useState(false);
  const [nearTop, setNearTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsVisible(currentY > 100);

      const sections = ['top', 'specializations', 'dossiers', 'timeline', 'capabilities', 'services', 'contact'];
      const scrollPos = currentY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setNearTop(e.clientY < 80 && window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const shouldShow = isVisible || nearTop;

  const navItems = [
    { id: 'top', label: 'Overview' },
    { id: 'specializations', label: 'Domains' },
    { id: 'dossiers', label: 'Case Files' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'capabilities', label: 'Arsenal' },
    { id: 'services', label: 'Engagements' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div
      className={`fixed top-5 left-0 w-full z-50 flex justify-center px-4 pointer-events-none transition-all duration-500 ease-out ${
        shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
      }`}
    >
      <nav className="pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-obsidian-950/92 backdrop-blur-xl border border-cream-300/20 shadow-2xl">
        {/* Monogram */}
        <a
          href="#top"
          onClick={() => soundEngine.playPop(800)}
          className="flex items-center gap-2 pr-2 sm:pr-3 border-r border-cream-300/15 group"
        >
          <div className="w-7 h-7 rounded-full bg-burgundy-900 border border-cream-300/30 flex items-center justify-center text-cream-100 group-hover:scale-110 transition-transform">
            <span className="font-serif font-bold text-xs">HS</span>
          </div>
          <span className="hidden xl:inline-block font-serif font-bold text-xs text-cream-100 group-hover:text-cream-300 transition-colors tracking-wide">
            H S SHREEJA
          </span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => soundEngine.playPop(780)}
                className={`px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] font-sans tracking-wider uppercase transition-all ${
                  isActive
                    ? 'bg-cream-100 text-burgundy-950 font-bold shadow-sm'
                    : 'text-cream-400 hover:text-cream-100 hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Social + CTA */}
        <div className="flex items-center gap-1 pl-2 sm:pl-3 border-l border-cream-300/15">
          <a
            href={PERSONAL_DOSSIER.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playClick()}
            className="p-1.5 rounded-full hover:bg-cream-100/10 text-cream-400 hover:text-cream-100 transition-colors hidden sm:inline-flex"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={PERSONAL_DOSSIER.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playClick()}
            className="p-1.5 rounded-full hover:bg-cream-100/10 text-cream-400 hover:text-cream-100 transition-colors hidden sm:inline-flex"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href="#contact"
            onClick={() => soundEngine.playChime()}
            className="ml-1 px-3 py-1.5 rounded-full bg-burgundy-800 hover:bg-burgundy-700 border border-cream-300/25 text-cream-100 font-sans text-[11px] font-semibold tracking-wider uppercase flex items-center gap-1 transition-all"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </nav>
    </div>
  );
};
