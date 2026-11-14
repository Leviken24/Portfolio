import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Layers, Cpu, ExternalLink, Activity } from 'lucide-react';
import { PROJECTS_DOSSIER } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { soundEngine } from '../utils/audio';

export const ProjectsDeck: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string>(PROJECTS_DOSSIER[0].id);

  const activeProject = PROJECTS_DOSSIER.find(p => p.id === activeProjectId) || PROJECTS_DOSSIER[0];

  return (
    <section id="dossiers" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-cream-300/15 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-cream-300/15">
          <div>
            <div className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-cream-400 mb-2">
              <span className="text-burgundy-500 font-bold">[02]</span>
              <span>CLASSIFIED TECHNICAL WORK & CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-cream-100 uppercase tracking-tight">
              FEATURED DOSSIERS
            </h2>
          </div>

          <div className="max-w-md text-xs sm:text-sm font-sans text-cream-400 leading-relaxed">
            <p>
              In-depth architectural breakdowns of offensive AI security, vehicular telemetry auditing, cloud honeytokens, and autonomous robotics.
            </p>
          </div>
        </div>

        {/* Presentation Slide Tabs (Compact, Zero-Wasted Scroll) */}
        <div className="mt-8 flex flex-wrap gap-2.5 pb-6 border-b border-cream-300/10">
          {PROJECTS_DOSSIER.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => {
                soundEngine.playPop(800 + idx * 60);
                setActiveProjectId(project.id);
              }}
              className={`px-4 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeProjectId === project.id
                  ? 'bg-cream-100 text-burgundy-950 font-bold shadow-md'
                  : 'bg-burgundy-950/60 hover:bg-burgundy-900 border border-cream-300/15 text-cream-400 hover:text-cream-100'
              }`}
            >
              <span className="font-serif text-xs font-black">0{idx + 1}.</span>
              <span>{project.title.split('—')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Active Project Presentation Slide Spread (Dense, High-End Layout) */}
        <div className="mt-8 p-6 sm:p-10 rounded-2xl velvet-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start shadow-velvet">
          
          {/* Left Column: Deep Problem, Solution & Architecture (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Meta Ribbon */}
            <div className="flex items-center justify-between pb-4 border-b border-cream-300/15">
              <span className="font-sans text-xs uppercase tracking-widest text-cream-300 font-semibold px-3 py-1 rounded-full bg-burgundy-900/80 border border-burgundy-700/60">
                {activeProject.domain}
              </span>
              <span className="font-serif text-sm font-bold text-cream-400">
                {activeProject.code}
              </span>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-cream-100 tracking-tight">
                {activeProject.title}
              </h3>
              <p className="mt-1 text-sm font-editorial italic text-cream-300">
                {activeProject.subtitle}
              </p>
            </div>

            {/* Executive Summary */}
            <p className="text-xs sm:text-sm font-sans text-cream-300/90 leading-relaxed bg-burgundy-950/60 p-4 rounded-xl border border-cream-300/10">
              {activeProject.executiveSummary}
            </p>

            {/* Problem & Solution Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
              <div className="p-4 rounded-xl bg-obsidian-900/80 border border-cream-300/10">
                <span className="text-[10px] uppercase tracking-widest text-cream-400 font-bold block mb-1">
                  SYSTEMIC CHALLENGE:
                </span>
                <p className="text-cream-300 leading-relaxed">
                  {activeProject.problemStatement}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-900/80 border border-cream-300/10">
                <span className="text-[10px] uppercase tracking-widest text-cream-400 font-bold block mb-1">
                  ENGINEERED SOLUTION:
                </span>
                <p className="text-cream-300 leading-relaxed">
                  {activeProject.technicalSolution}
                </p>
              </div>
            </div>

            {/* Architecture Points */}
            <div className="space-y-2.5 pt-2">
              <span className="text-[11px] font-sans uppercase tracking-widest text-cream-400 font-bold block">
                SUBSYSTEM ARCHITECTURE & IMPLEMENTATION SPECS:
              </span>
              <div className="space-y-2">
                {activeProject.architecturePoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs font-sans text-cream-300">
                    <span className="w-5 h-5 rounded-full bg-burgundy-900 border border-cream-300/20 text-cream-200 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {pIdx + 1}
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Device Window, Specs & Metrics (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Device / Browser Window Mockup (Inspired by Reference 2 - Mariana & Reference 5 - UGC) */}
            <div className="rounded-xl overflow-hidden bg-obsidian-950 border border-cream-300/20 shadow-2xl">
              
              {/* Window Title Bar */}
              <div className="bg-obsidian-900 px-4 py-2.5 border-b border-cream-300/15 flex items-center justify-between text-xs font-sans text-cream-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-burgundy-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-burgundy-900" />
                  <span className="w-2.5 h-2.5 rounded-full bg-cream-400/40" />
                  <span className="ml-2 text-[11px] text-cream-300 font-mono">
                    {activeProject.id}.spec
                  </span>
                </div>
                <span className="text-[10px] text-cream-400 uppercase tracking-widest">
                  CONFIDENTIAL
                </span>
              </div>

              {/* Inside Window Content */}
              <div className="p-5 space-y-4 font-sans text-xs">
                
                {/* Attack Vector / Specification Badge */}
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-cream-400 block mb-1">
                    PRIMARY VECTOR / VULNERABILITY TARGET:
                  </span>
                  <div className="p-2.5 rounded-lg bg-burgundy-950 border border-burgundy-800 text-cream-100 font-semibold text-xs">
                    {activeProject.attackVectorOrSpec}
                  </div>
                </div>

                {/* Verified Performance Metrics */}
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-cream-400 block mb-2 font-semibold">
                    BENCHMARK TELEMETRY & RESULTS:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {activeProject.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-3 rounded-lg bg-obsidian-900 border border-cream-300/10 text-center">
                        <span className="text-lg font-serif font-black text-cream-100 block">
                          {m.value}
                        </span>
                        <span className="text-[10px] text-cream-400 block mt-0.5 leading-tight">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deployed Tools Matrix */}
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-cream-400 block mb-2 font-semibold">
                    DEPLOYED TECHNOLOGIES & LIBRARIES:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.toolsUsed.map((tool, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded-md text-[11px] bg-burgundy-900/60 border border-cream-300/15 text-cream-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Direct GitHub Code Repository Action Link */}
            <div className="pt-2">
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="w-full py-3.5 px-6 rounded-full bg-burgundy-900/80 hover:bg-burgundy-800 border border-cream-300/30 hover:border-cream-300 text-cream-100 font-sans text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 group shadow-md"
              >
                <GithubIcon className="w-4 h-4 text-cream-300 group-hover:scale-110 transition-transform" />
                <span>INSPECT REPOSITORY ON GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span className="block text-center text-[10px] font-sans text-cream-400 mt-2">
                Open-source research & reproducible implementation scripts
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
