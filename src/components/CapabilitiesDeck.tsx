import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Cpu, Bot, Cloud, Radio, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { soundEngine } from '../utils/audio';

const domainConfigs = [
  {
    categoryIndex: 1, // AI Hacking & Machine Learning
    badgeText: "AI RED TEAM",
    bigBackdropText: "NEURAL RED TEAM",
    icon: Cpu,
    colorTheme: {
      ambientGlow: "rgba(138, 20, 50, 0.35)",
      bgCard: "linear-gradient(145deg, rgba(70, 9, 24, 0.85) 0%, rgba(18, 6, 12, 0.95) 100%)",
      borderCard: "rgba(225, 29, 72, 0.35)",
      accentColor: "#F43F5E",
      badgeBg: "bg-rose-950/80 text-rose-200 border-rose-500/40",
      iconGlow: "shadow-[0_0_35px_rgba(244,63,94,0.45)]"
    }
  },
  {
    categoryIndex: 0, // Cyber Security & Reverse Engineering
    badgeText: "CYBER DEFENSE",
    bigBackdropText: "ZERO-DAY DEFENSE",
    icon: ShieldCheck,
    colorTheme: {
      ambientGlow: "rgba(16, 185, 129, 0.25)",
      bgCard: "linear-gradient(145deg, rgba(13, 74, 56, 0.85) 0%, rgba(8, 24, 20, 0.95) 100%)",
      borderCard: "rgba(16, 185, 129, 0.35)",
      accentColor: "#10B981",
      badgeBg: "bg-emerald-950/80 text-emerald-200 border-emerald-500/40",
      iconGlow: "shadow-[0_0_35px_rgba(16,185,129,0.45)]"
    }
  },
  {
    categoryIndex: 2, // Autonomous Robotics & Embedded
    badgeText: "AUTONOMOUS ROBOTICS",
    bigBackdropText: "ROS2 KINEMATICS",
    icon: Bot,
    colorTheme: {
      ambientGlow: "rgba(212, 175, 55, 0.3)",
      bgCard: "linear-gradient(145deg, rgba(84, 62, 8, 0.85) 0%, rgba(24, 18, 6, 0.95) 100%)",
      borderCard: "rgba(212, 175, 55, 0.35)",
      accentColor: "#D4AF37",
      badgeBg: "bg-amber-950/80 text-amber-200 border-amber-500/40",
      iconGlow: "shadow-[0_0_35px_rgba(212,175,55,0.45)]"
    }
  },
  {
    categoryIndex: 3, // Cloud Infrastructure & DevSecOps
    badgeText: "CLOUD DEFENSE",
    bigBackdropText: "KUBERNETES eBPF",
    icon: Cloud,
    colorTheme: {
      ambientGlow: "rgba(56, 189, 248, 0.28)",
      bgCard: "linear-gradient(145deg, rgba(12, 62, 90, 0.85) 0%, rgba(8, 22, 32, 0.95) 100%)",
      borderCard: "rgba(56, 189, 248, 0.35)",
      accentColor: "#38BDF8",
      badgeBg: "bg-sky-950/80 text-sky-200 border-sky-500/40",
      iconGlow: "shadow-[0_0_35px_rgba(56,189,248,0.45)]"
    }
  },
  {
    categoryIndex: 4, // IoT & Hardware Pentesting
    badgeText: "IOT & HARDWARE",
    bigBackdropText: "CAN BUS FIRMWARE",
    icon: Radio,
    colorTheme: {
      ambientGlow: "rgba(251, 113, 133, 0.3)",
      bgCard: "linear-gradient(145deg, rgba(92, 15, 40, 0.85) 0%, rgba(26, 8, 14, 0.95) 100%)",
      borderCard: "rgba(251, 113, 133, 0.35)",
      accentColor: "#FB7185",
      badgeBg: "bg-rose-950/80 text-rose-200 border-rose-500/40",
      iconGlow: "shadow-[0_0_35px_rgba(251,113,133,0.45)]"
    }
  }
];

export const CapabilitiesDeck: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const totalSlides = domainConfigs.length;

  const handleNext = () => {
    soundEngine.playPop(850);
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    soundEngine.playPop(750);
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentConfig = domainConfigs[activeSlide];
  const currentCategory = SKILL_CATEGORIES[currentConfig.categoryIndex] || SKILL_CATEGORIES[0];
  const IconComponent = currentConfig.icon;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section 
      id="capabilities" 
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-cream-300/15 relative overflow-hidden transition-colors duration-700"
    >
      
      {/* DYNAMIC BACKGROUND COLOR-MORPHING AMBIENT GLOW (Inspired by Short PnqYp_kZ00I) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[180px] pointer-events-none -z-10 transition-all duration-700"
        style={{
          background: currentConfig.colorTheme.ambientGlow
        }}
      />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-cream-300/15">
          <div>
            <div className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-cream-400 mb-2">
              <span className="text-burgundy-500 font-bold">[03]</span>
              <span>3D MULTI-AXIS COLOR-MORPHING CAROUSEL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black text-cream-100 uppercase tracking-tight">
              CAPABILITIES ARSENAL
            </h2>
          </div>

          <div className="max-w-md text-xs sm:text-sm font-sans text-cream-400 leading-relaxed">
            <p>
              Navigate across the 5 core domains to observe the shifting color-morphing environments, 3D floating hero badges, and verified technical competencies.
            </p>
          </div>
        </div>

        {/* 3D "BREAKING-THE-GRID" MULTI-AXIS CAROUSEL CONTAINER */}
        <div className="mt-16 relative">
          
          {/* Main 3-Card Carousel Track (Center Card + Left/Right Peek Cards) */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 pt-12 pb-6">
            
            {/* LEFT PEEK CARD (Clickable Previous Card) */}
            <div
              onClick={handlePrev}
              className="hidden lg:block w-72 shrink-0 opacity-30 hover:opacity-70 transition-all duration-500 cursor-pointer scale-90 -translate-x-4 select-none"
            >
              <div className="p-6 rounded-2xl bg-obsidian-900 border border-cream-300/15 text-cream-300 text-center">
                <span className="text-[10px] font-sans uppercase tracking-widest text-cream-400 block mb-1">
                  PREVIOUS
                </span>
                <span className="font-serif font-bold text-sm text-cream-200">
                  {domainConfigs[(activeSlide - 1 + totalSlides) % totalSlides].badgeText}
                </span>
              </div>
            </div>

            {/* CENTER HERO CARD (Breaking The Grid) */}
            <div className="w-full max-w-3xl relative">
              
              {/* 3D FLOATING HERO ASSET: BREAKING OUT OF TOP BORDER */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20">
                <div 
                  className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-obsidian-950 border border-cream-300/30 flex items-center justify-center transition-all duration-700 ${currentConfig.colorTheme.iconGlow}`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(23, 23, 29, 0.95) 0%, rgba(9, 9, 12, 0.98) 100%)'
                  }}
                >
                  <IconComponent 
                    className="w-12 h-12 sm:w-14 sm:h-14 transition-all duration-700 transform hover:scale-110" 
                    style={{ color: currentConfig.colorTheme.accentColor }}
                  />
                </div>
              </div>

              {/* Central Card Body */}
              <div 
                className="pt-16 sm:pt-20 pb-8 sm:pb-10 px-6 sm:px-12 rounded-3xl shadow-2xl relative overflow-hidden transition-all duration-700"
                style={{
                  background: currentConfig.colorTheme.bgCard,
                  border: `1px solid ${currentConfig.colorTheme.borderCard}`
                }}
              >
                
                {/* GIANT BACKGROUND TYPOGRAPHY (Layered behind text) */}
                <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.06] overflow-hidden">
                  <span className="text-6xl sm:text-8xl md:text-9xl font-black font-serif uppercase tracking-tighter whitespace-nowrap text-cream-100">
                    {currentConfig.bigBackdropText}
                  </span>
                </div>

                {/* Card Header Content */}
                <div className="text-center space-y-2 relative z-10">
                  <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-sans font-bold tracking-widest uppercase border ${currentConfig.colorTheme.badgeBg}`}>
                    {currentConfig.badgeText}
                  </span>

                  <h3 className="text-2xl sm:text-4xl font-serif font-black text-cream-100 tracking-tight">
                    {currentCategory.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-editorial italic text-cream-300 max-w-xl mx-auto">
                    "{currentCategory.description}"
                  </p>
                </div>

                {/* Densely Packed Skills Checklist */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative z-10">
                  {currentCategory.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-obsidian-950/70 border border-cream-300/10 hover:border-cream-300/25 transition-all group"
                    >
                      <div className="flex items-center justify-between pb-1.5">
                        <span className="font-serif font-bold text-xs sm:text-sm text-cream-100 group-hover:text-cream-300 transition-colors">
                          {skill.name}
                        </span>
                        <span 
                          className="text-[9px] font-sans uppercase font-bold px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: `${currentConfig.colorTheme.accentColor}20`,
                            color: currentConfig.colorTheme.accentColor
                          }}
                        >
                          {skill.level}
                        </span>
                      </div>

                      <p className="text-[11px] font-sans text-cream-400 leading-snug">
                        {skill.description}
                      </p>

                      <div className="mt-2 pt-2 border-t border-cream-300/10 flex flex-wrap gap-1">
                        {skill.tools.map((t, tIdx) => (
                          <span key={tIdx} className="text-[9px] font-sans px-1.5 py-0.5 rounded bg-cream-100/10 text-cream-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* RIGHT PEEK CARD (Clickable Next Card) */}
            <div
              onClick={handleNext}
              className="hidden lg:block w-72 shrink-0 opacity-30 hover:opacity-70 transition-all duration-500 cursor-pointer scale-90 translate-x-4 select-none"
            >
              <div className="p-6 rounded-2xl bg-obsidian-900 border border-cream-300/15 text-cream-300 text-center">
                <span className="text-[10px] font-sans uppercase tracking-widest text-cream-400 block mb-1">
                  NEXT
                </span>
                <span className="font-serif font-bold text-sm text-cream-200">
                  {domainConfigs[(activeSlide + 1) % totalSlides].badgeText}
                </span>
              </div>
            </div>

          </div>

          {/* Navigation Controls & Dot Indicators */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-obsidian-900/90 border border-cream-300/20 hover:border-cream-100 text-cream-300 hover:text-cream-100 transition-all shadow-md group"
              title="Previous Domain"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Circular Progress Dots */}
            <div className="flex items-center gap-2">
              {domainConfigs.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => {
                    soundEngine.playPop(800 + dotIdx * 40);
                    setActiveSlide(dotIdx);
                  }}
                  className={`transition-all duration-500 rounded-full ${
                    activeSlide === dotIdx 
                      ? 'w-8 h-2.5 bg-cream-100 shadow-md' 
                      : 'w-2.5 h-2.5 bg-cream-300/20 hover:bg-cream-300/50'
                  }`}
                  title={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-obsidian-900/90 border border-cream-300/20 hover:border-cream-100 text-cream-300 hover:text-cream-100 transition-all shadow-md group"
              title="Next Domain"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="text-center mt-3 text-[10px] font-sans uppercase tracking-widest text-cream-400">
            SLIDE 0{activeSlide + 1} OF 0{totalSlides} • USE KEYBOARD ARROWS TO GLIDE
          </div>

        </div>

      </div>
    </section>
  );
};
