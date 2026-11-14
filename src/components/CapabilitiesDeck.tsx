import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ChevronRight, Search } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { soundEngine } from '../utils/audio';

export const CapabilitiesDeck: React.FC = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);

  const activeCategory = SKILL_CATEGORIES[activeCategoryIdx];

  return (
    <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-cream-300/15 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-cream-300/15">
          <div>
            <div className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-cream-400 mb-2">
              <span className="text-burgundy-500 font-bold">[03]</span>
              <span>COMPREHENSIVE ARSENAL & PROFICIENCY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-cream-100 uppercase tracking-tight">
              CAPABILITIES MATRIX
            </h2>
          </div>

          <div className="max-w-md text-xs sm:text-sm font-sans text-cream-400 leading-relaxed">
            <p>
              Detailed competencies spanning low-level binary exploitation, adversarial neural attacks, real-time kinematics, and multi-cloud infrastructure.
            </p>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="mt-8 flex flex-wrap gap-2.5 pb-6 border-b border-cream-300/10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                soundEngine.playPop(780 + idx * 50);
                setActiveCategoryIdx(idx);
              }}
              className={`px-4 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider transition-all ${
                activeCategoryIdx === idx
                  ? 'bg-cream-100 text-burgundy-950 font-bold shadow-md'
                  : 'bg-burgundy-950/60 hover:bg-burgundy-900 border border-cream-300/15 text-cream-400 hover:text-cream-100'
              }`}
            >
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="mt-6 mb-4 flex items-center justify-between text-xs font-sans text-cream-300">
          <p className="italic font-editorial text-sm sm:text-base">
            "{activeCategory.description}"
          </p>
          <span className="text-[10px] uppercase tracking-widest text-cream-400 hidden sm:inline-block">
            {activeCategory.skills.length} VERIFIED COMPETENCIES
          </span>
        </div>

        {/* Densely Packed Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeCategory.skills.map((skill, sIdx) => (
            <div
              key={sIdx}
              onMouseEnter={() => soundEngine.playPop(850 + sIdx * 40)}
              className="p-5 rounded-xl velvet-card flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-cream-300/10">
                  <h4 className="font-serif font-bold text-base sm:text-lg text-cream-100 group-hover:text-cream-300 transition-colors">
                    {skill.name}
                  </h4>
                  <span className={`text-[10px] font-sans font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                    skill.level === 'Expert'
                      ? 'bg-burgundy-900 text-cream-200 border-cream-300/30'
                      : 'bg-obsidian-900 text-cream-300 border-cream-300/15'
                  }`}>
                    {skill.level}
                  </span>
                </div>

                <p className="mt-3 text-xs font-sans text-cream-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Tools Tags */}
              <div className="mt-4 pt-3 border-t border-cream-300/10 flex items-center justify-between">
                <span className="text-[10px] font-sans uppercase tracking-widest text-cream-400">
                  TOOLING:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tools.map((tool, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-sans px-2 py-0.5 rounded bg-cream-100/10 text-cream-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
