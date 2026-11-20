import React from 'react';
import { ArrowUpRight, CheckCircle2, Clock, Target } from 'lucide-react';
import { SERVICE_OFFERINGS } from '../data/portfolioData';
import { soundEngine } from '../utils/audio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const ServicesDeck: React.FC = () => {
  const sectionRef = useScrollReveal(0.08);

  return (
    <section id="services" ref={sectionRef as React.RefObject<HTMLElement>} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Expanding Laser Divider */}
      <div className="laser-divider max-w-7xl mx-auto mb-16" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="sr-hidden flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-cream-300/15">
          <div>
            <div className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-cream-400 mb-2">
              <span className="text-burgundy-500 font-bold">[05]</span>
              <span>ENGAGEMENT ARCHITECTURE & COLLABORATION</span>
            </div>
            <div className="reveal-mask">
              <h2 className="reveal-mask-inner text-3xl sm:text-5xl font-serif font-black text-cream-100 uppercase tracking-tight">
                RESEARCH & SERVICES
              </h2>
            </div>
          </div>

          <div className="max-w-md text-xs sm:text-sm font-sans text-cream-400 leading-relaxed">
            <p>
              Structured engagement models for security audits, adversarial red-teaming, embedded firmware analysis, and cloud hardening.
            </p>
          </div>
        </div>

        {/* 4 Packages Grid */}
        <div className="sr-stagger mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICE_OFFERINGS.map((service, idx) => (
            <div
              key={service.id}
              onMouseEnter={() => soundEngine.playPop(800 + idx * 60)}
              className="sr-card p-7 sm:p-8 rounded-2xl velvet-card flex flex-col justify-between group hover:border-cream-300/35 transition-all"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-cream-300/10">
                  <span className="font-serif text-sm font-bold text-cream-300">
                    PACKAGE // 0{idx + 1}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-sans text-cream-400">
                    <Clock className="w-3.5 h-3.5 text-burgundy-500" />
                    <span>{service.timeline}</span>
                  </div>
                </div>

                {/* Title */}
                <div className="mt-5">
                  <h3 className="text-xl sm:text-2xl font-serif font-black text-cream-100 group-hover:text-cream-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs font-editorial italic text-cream-300">
                    {service.tagline}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="mt-6 space-y-2.5">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-cream-400 block font-semibold">
                    KEY SCOPE & DELIVERABLES:
                  </span>
                  {service.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs font-sans text-cream-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-burgundy-500 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Scope */}
              <div className="mt-8 pt-5 border-t border-cream-300/10 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-sans text-cream-400 uppercase tracking-widest block">
                    TARGET DOMAIN SCOPE
                  </span>
                  <span className="text-xs font-sans font-bold text-cream-100 mt-0.5 block">
                    {service.scope}
                  </span>
                </div>

                <a
                  href="#contact"
                  onClick={() => soundEngine.playChime()}
                  className="px-4 py-2 rounded-full bg-cream-100 hover:bg-cream-200 text-burgundy-950 font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-1 shadow-sm transition-all group-hover:translate-x-0.5"
                >
                  <span>Initiate</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
