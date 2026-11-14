import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, Mail, Phone } from 'lucide-react';
import { PERSONAL_DOSSIER } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { soundEngine } from '../utils/audio';

export const EditorialNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-obsidian-950/95 backdrop-blur-md border-b border-cream-300/15 shadow-velvet py-3' 
        : 'bg-transparent border-b border-cream-300/10 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Monogram & Title */}
        <a 
          href="#top"
          onClick={() => soundEngine.playPop(800)}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-full border border-cream-300/30 bg-burgundy-900/80 flex items-center justify-center text-cream-100 group-hover:border-cream-300 transition-all shadow-md">
            <span className="font-serif text-sm font-bold tracking-tight">HS</span>
          </div>

          <div className="flex flex-col">
            <span className="font-serif font-bold text-sm sm:text-base tracking-wider text-cream-100 group-hover:text-cream-300 transition-colors">
              {PERSONAL_DOSSIER.name}
            </span>
            <span className="text-[10px] font-sans text-cream-400 tracking-widest uppercase hidden sm:inline-block">
              RESEARCHER & CYBER-PHYSICAL ENGINEER
            </span>
          </div>
        </a>

        {/* Center: Refined Editorial Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-sans tracking-widest uppercase text-cream-400">
          {[
            { href: "#specializations", label: "Domains" },
            { href: "#dossiers", label: "Case Studies" },
            { href: "#capabilities", label: "Capabilities" },
            { href: "#services", label: "Engagements" },
            { href: "#contact", label: "Contact" }
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => soundEngine.playPop(750 + idx * 40)}
              className="hover:text-cream-100 transition-colors relative py-1 group"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-burgundy-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right: Availability Badge & Quick Links */}
        <div className="flex items-center gap-3">
          
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-burgundy-700/60 bg-burgundy-950/70 text-[11px] font-sans text-cream-300">
            <span className="w-2 h-2 rounded-full bg-burgundy-500 animate-pulse" />
            <span>AVAILABLE WORLDWIDE</span>
          </div>

          <a
            href={PERSONAL_DOSSIER.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playClick()}
            className="p-2 rounded-full border border-cream-300/20 hover:border-cream-300 hover:text-cream-100 text-cream-400 transition-all"
            title="GitHub Profile"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={PERSONAL_DOSSIER.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playClick()}
            className="p-2 rounded-full border border-cream-300/20 hover:border-cream-300 hover:text-cream-100 text-cream-400 transition-all"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href="#contact"
            onClick={() => soundEngine.playChime()}
            className="px-4 py-1.5 rounded-full bg-cream-100 hover:bg-cream-200 text-burgundy-950 font-sans text-xs font-semibold tracking-wider transition-all flex items-center gap-1.5 shadow-md"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

        </div>

      </div>
    </header>
  );
};
