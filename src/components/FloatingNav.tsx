import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, User, FileText, Send } from 'lucide-react';
import { PERSONAL_DOSSIER } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { soundEngine } from '../utils/audio';

export const FloatingNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('top');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['top', 'specializations', 'dossiers', 'timeline', 'capabilities', 'services', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'top', label: 'Overview' },
    { id: 'specializations', label: 'Domains' },
    { id: 'dossiers', label: 'Case Studies' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'capabilities', label: 'Arsenal' },
    { id: 'services', label: 'Engagements' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="fixed top-5 left-0 w-full z-40 flex justify-center px-4 pointer-events-none transition-all duration-300">
      
      {/* Floating Capsule Island */}
      <nav 
        className={`pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-300 shadow-velvet ${
          isScrolled 
            ? 'bg-obsidian-950/90 backdrop-blur-xl border border-cream-300/25 shadow-2xl scale-100' 
            : 'bg-burgundy-950/80 backdrop-blur-md border border-cream-300/15 scale-100'
        }`}
      >
        
        {/* Left Monogram Emblem */}
        <a
          href="#top"
          onClick={() => soundEngine.playPop(800)}
          className="flex items-center gap-2 pr-2 sm:pr-3 border-r border-cream-300/15 group"
          title="H S Shreeja"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-burgundy-900 border border-cream-300/30 flex items-center justify-center text-cream-100 group-hover:scale-105 transition-transform">
            <span className="font-serif font-bold text-xs tracking-tight">HS</span>
          </div>
          <span className="hidden xl:inline-block font-serif font-bold text-xs text-cream-100 group-hover:text-cream-300 transition-colors">
            {PERSONAL_DOSSIER.name}
          </span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => soundEngine.playPop(780)}
                className={`px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-sans tracking-wider uppercase transition-all relative ${
                  isActive 
                    ? 'bg-cream-100 text-burgundy-950 font-bold shadow-sm' 
                    : 'text-cream-400 hover:text-cream-100 hover:bg-cream-100/5'
                }`}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Quick Social & Action Links */}
        <div className="flex items-center gap-1 pl-2 sm:pl-3 border-l border-cream-300/15">
          <a
            href={PERSONAL_DOSSIER.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playClick()}
            className="p-1.5 rounded-full hover:bg-cream-100/10 text-cream-400 hover:text-cream-100 transition-colors hidden sm:inline-flex"
            title="GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={PERSONAL_DOSSIER.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playClick()}
            className="p-1.5 rounded-full hover:bg-cream-100/10 text-cream-400 hover:text-cream-100 transition-colors hidden sm:inline-flex"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href="#contact"
            onClick={() => soundEngine.playChime()}
            className="ml-1 px-3 py-1.5 rounded-full bg-burgundy-800 hover:bg-burgundy-700 border border-cream-300/25 text-cream-100 font-sans text-[11px] font-semibold tracking-wider uppercase flex items-center gap-1 transition-all shadow-sm"
          >
            <span>Dispatch</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

      </nav>

    </div>
  );
};
