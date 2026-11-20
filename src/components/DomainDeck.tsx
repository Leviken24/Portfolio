import React from 'react';
import { ShieldCheck, Cpu, Bot, Cloud, Radio } from 'lucide-react';
import { DOMAIN_SPECIALIZATIONS } from '../data/portfolioData';
import { soundEngine } from '../utils/audio';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap = [ShieldCheck, Cpu, Bot, Cloud, Radio];
const accentColors = [
  'text-burgundy-400',
  'text-rose-400',
  'text-amber-400',
  'text-sky-400',
  'text-cream-400',
];

export const DomainDeck: React.FC = () => {
  const sectionRef = useScrollReveal(0.1);

  return (
    <section
      id="specializations"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Expanding Laser Divider */}
      <div className="laser-divider max-w-7xl mx-auto mb-16" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-burgundy-950/40 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="sr-hidden flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-cream-300/15">
          <div>
            <div className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-cream-400 mb-3">
              <span className="text-burgundy-500 font-bold">[01]</span>
              <span>Technical Domains</span>
            </div>
            <div className="reveal-mask">
              <h2 className="reveal-mask-inner text-3xl sm:text-5xl font-serif font-black text-cream-100 uppercase tracking-tight">
                Core Specializations
              </h2>
            </div>
          </div>
          <p className="max-w-sm text-xs sm:text-sm font-sans text-cream-400 leading-relaxed">
            Five interconnected disciplines — from silicon to cloud, from firmware to frontier AI.
          </p>
        </div>

        {/* 5 Domain Cards with 3D Entrance */}
        <div className="mt-10 sr-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DOMAIN_SPECIALIZATIONS.map((domain, idx) => {
            const Icon = iconMap[idx] || ShieldCheck;
            const accent = accentColors[idx];

            return (
              <div
                key={domain.id}
                onMouseEnter={() => soundEngine.playPop(750 + idx * 50)}
                className={`sr-card p-6 rounded-2xl velvet-card flex flex-col justify-between group domain-card-compact ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Top */}
                <div>
                  <div className="flex items-start justify-between pb-4 border-b border-cream-300/10">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-burgundy-900/90 border border-cream-300/15 flex items-center justify-center text-cream-200 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <span className={`font-serif text-base font-bold ${accent}`}>{domain.num}</span>
                    </div>
                    <span className="text-[9px] font-sans uppercase tracking-widest px-2 py-0.5 rounded-full bg-cream-100/8 text-cream-400 border border-cream-300/12">
                      SPECIALTY
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-base font-serif font-bold text-cream-100 group-hover:text-cream-50 transition-colors leading-snug">
                      {domain.title}
                    </h3>
                    <p className="mt-0.5 text-[11px] font-editorial italic text-cream-400">
                      {domain.tagline}
                    </p>
                  </div>

                  {/* Overview — clamped to 2 lines */}
                  <p className="overview mt-3 text-xs font-sans text-cream-400 leading-relaxed">
                    {domain.overview}
                  </p>

                  {/* Competencies */}
                  <div className="mt-4 pt-3 border-t border-cream-300/8 space-y-1.5">
                    <span className="text-[9px] font-sans uppercase tracking-widest text-cream-400 font-semibold">Focus Areas</span>
                    {domain.coreCompetencies.map((comp, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-[11px] font-sans text-cream-300">
                        <span className={`w-1 h-1 rounded-full ${accent.replace('text-', 'bg-')} shrink-0`} />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom deliverable */}
                <div className="mt-5 pt-3 border-t border-cream-300/8 flex items-center justify-between text-[10px] font-sans">
                  <span className="text-cream-400 uppercase tracking-wider">Output</span>
                  <span className="text-cream-200 font-semibold text-right max-w-[55%]">{domain.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
