import React from 'react';
import { ShieldCheck, Cpu, Bot, Cloud, Radio, CheckCircle, ArrowRight } from 'lucide-react';
import { DOMAIN_SPECIALIZATIONS } from '../data/portfolioData';
import { soundEngine } from '../utils/audio';

const iconMap = [ShieldCheck, Cpu, Bot, Cloud, Radio];

export const DomainDeck: React.FC = () => {
  return (
    <section id="specializations" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-cream-300/15 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-cream-300/15">
          <div>
            <div className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-cream-400 mb-2">
              <span className="text-burgundy-500 font-bold">[01]</span>
              <span>TECHNICAL DOMAINS & DISCIPLINES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-cream-100 uppercase tracking-tight">
              CORE SPECIALIZATIONS
            </h2>
          </div>

          <div className="max-w-md text-xs sm:text-sm font-sans text-cream-400 leading-relaxed">
            <p>
              Multidisciplinary mastery spanning offensive exploitation, neural model safety, autonomous kinematics, and multi-cloud perimeter defense.
            </p>
          </div>
        </div>

        {/* 5 Domains Modular Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DOMAIN_SPECIALIZATIONS.map((domain, idx) => {
            const Icon = iconMap[idx] || ShieldCheck;
            const isWide = idx === 0 || idx === 1;

            return (
              <div
                key={domain.id}
                onMouseEnter={() => soundEngine.playPop(750 + idx * 50)}
                className={`p-6 sm:p-7 rounded-2xl velvet-card flex flex-col justify-between group ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between pb-5 border-b border-cream-300/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-burgundy-900/90 border border-cream-300/20 flex items-center justify-center text-cream-200 group-hover:scale-105 transition-transform shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-serif text-lg font-bold text-cream-100">
                        {domain.num}
                      </span>
                    </div>

                    <span className="text-[10px] font-sans uppercase tracking-widest px-2.5 py-1 rounded-full bg-cream-100/10 text-cream-300 border border-cream-300/15">
                      SPECIALTY
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-5">
                    <h3 className="text-xl font-serif font-bold text-cream-100 group-hover:text-cream-300 transition-colors">
                      {domain.title}
                    </h3>
                    <p className="mt-1 text-xs font-sans text-cream-300/80 italic font-editorial">
                      {domain.tagline}
                    </p>
                  </div>

                  {/* Deep Overview */}
                  <p className="mt-3 text-xs font-sans text-cream-400 leading-relaxed">
                    {domain.overview}
                  </p>

                  {/* Core Competencies Checklist */}
                  <div className="mt-5 pt-4 border-t border-cream-300/10 space-y-2">
                    <span className="text-[10px] font-sans uppercase tracking-widest text-cream-400 block font-semibold">
                      KEY ARCHITECTURAL FOCUS:
                    </span>
                    {domain.coreCompetencies.map((comp, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs font-sans text-cream-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-burgundy-500 shrink-0" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Deliverable Tag */}
                <div className="mt-6 pt-4 border-t border-cream-300/10 flex items-center justify-between text-[11px] font-sans">
                  <span className="text-cream-400 uppercase tracking-wider text-[10px]">
                    DELIVERABLE:
                  </span>
                  <span className="text-cream-200 font-semibold group-hover:text-cream-100 transition-colors">
                    {domain.deliverable}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
