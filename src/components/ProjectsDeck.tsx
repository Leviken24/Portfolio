import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, X, Cpu, Layers, ExternalLink, Activity, Sparkles, Terminal } from 'lucide-react';
import { PROJECTS_DOSSIER, Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { soundEngine } from '../utils/audio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const ProjectsDeck: React.FC = () => {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const sectionRef = useScrollReveal(0.08);

  const handleRowHover = (id: string) => {
    soundEngine.playPop(800);
    setHoveredProjectId(id);
  };

  const handleRowLeave = () => {
    setHoveredProjectId(null);
  };

  const handleOpenModal = (project: Project) => {
    soundEngine.playChime();
    setActiveModalProject(project);
  };

  const handleCloseModal = () => {
    soundEngine.playPop(650);
    setActiveModalProject(null);
  };

  // Preview card gradient & accent styles per project
  const getProjectTheme = (category: string) => {
    switch (category) {
      case 'ai-hacking':
        return {
          gradient: 'from-burgundy-900 via-burgundy-950 to-obsidian-950',
          border: 'border-burgundy-600/40',
          textAccent: 'text-burgundy-400',
          pillBg: 'bg-burgundy-900/80 text-cream-200'
        };
      case 'iot':
        return {
          gradient: 'from-rose-950 via-burgundy-950 to-obsidian-950',
          border: 'border-rose-700/40',
          textAccent: 'text-rose-400',
          pillBg: 'bg-rose-900/70 text-cream-200'
        };
      case 'cloud':
        return {
          gradient: 'from-sky-950 via-burgundy-950 to-obsidian-950',
          border: 'border-sky-700/40',
          textAccent: 'text-sky-400',
          pillBg: 'bg-sky-900/70 text-cream-200'
        };
      case 'robotics':
        return {
          gradient: 'from-amber-950 via-burgundy-950 to-obsidian-950',
          border: 'border-amber-600/40',
          textAccent: 'text-amber-400',
          pillBg: 'bg-amber-900/70 text-cream-200'
        };
      default:
        return {
          gradient: 'from-burgundy-900 via-obsidian-950 to-obsidian-950',
          border: 'border-cream-300/30',
          textAccent: 'text-cream-300',
          pillBg: 'bg-burgundy-900 text-cream-100'
        };
    }
  };

  return (
    <section id="dossiers" ref={sectionRef as React.RefObject<HTMLElement>} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Expanding Laser Divider */}
      <div className="laser-divider max-w-7xl mx-auto mb-16" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="sr-hidden flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-cream-300/15">
          <div>
            <div className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-cream-400 mb-2">
              <span className="text-burgundy-500 font-bold">[02]</span>
              <span>SELECTED WORKS & CASE FILES</span>
            </div>
            <div className="reveal-mask">
              <h2 className="reveal-mask-inner text-3xl sm:text-5xl md:text-6xl font-serif font-black text-cream-100 uppercase tracking-tight">
                CASE FILES
              </h2>
            </div>
          </div>

          <div className="max-w-md text-xs sm:text-sm font-sans text-cream-400 leading-relaxed">
            <p>
              Hover any project row to expand inline telemetry — click to open the full architectural case study.
            </p>
          </div>
        </div>

        {/* Interactive CMS List Row Repeater */}
        <div className="sr-stagger divide-y divide-cream-300/15 border-b border-cream-300/15">
          {PROJECTS_DOSSIER.map((project, idx) => {
            const isHovered = hoveredProjectId === project.id;
            const theme = getProjectTheme(project.category);

            return (
              <div
                key={project.id}
                onMouseEnter={() => handleRowHover(project.id)}
                onMouseLeave={handleRowLeave}
                onClick={() => handleOpenModal(project)}
                className="sr-card group py-6 sm:py-8 px-2 sm:px-4 cursor-pointer transition-colors duration-300 hover:bg-cream-100/[0.02] flex items-center justify-between gap-4"
              >
                {/* Left: Number + Title + Inline Expanding Card */}
                <div className="flex items-center gap-4 sm:gap-6 min-w-0 flex-1">
                  
                  {/* Number Badge */}
                  <span className="font-serif text-lg sm:text-2xl font-bold text-cream-400 group-hover:text-cream-100 transition-colors shrink-0">
                    0{idx + 1}
                  </span>

                  {/* Project Title */}
                  <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl font-black text-cream-100 uppercase tracking-tight transition-transform duration-300 shrink-0">
                    {project.title.split('—')[0].trim()}
                  </h3>

                  {/* INLINE EXPANDING PREVIEW THUMBNAIL CARD */}
                  <div
                    className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden hidden sm:block ${
                      isHovered 
                        ? 'w-64 sm:w-72 md:w-80 opacity-100 ml-3 mr-3 shadow-2xl scale-100' 
                        : 'w-0 opacity-0 ml-0 mr-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <div className={`h-24 sm:h-28 rounded-xl bg-gradient-to-br ${theme.gradient} border ${theme.border} p-3 flex flex-col justify-between shadow-velvet relative overflow-hidden`}>
                      
                      {/* Card Top: Code & Metric */}
                      <div className="flex items-center justify-between text-[10px] font-sans">
                        <span className="px-2 py-0.5 rounded-full bg-cream-100/10 text-cream-300 font-mono">
                          {project.code}
                        </span>
                        <span className="font-bold text-cream-100">
                          {project.metrics[0]?.value}
                        </span>
                      </div>

                      {/* Card Middle: Subtitle & Target Vector */}
                      <div className="min-w-0">
                        <span className="text-[11px] font-serif font-bold text-cream-100 truncate block">
                          {project.title.split('—')[1]?.trim() || project.subtitle}
                        </span>
                        <span className="text-[9px] font-sans text-cream-400 truncate block mt-0.5">
                          Target: {project.attackVectorOrSpec}
                        </span>
                      </div>

                      {/* Card Bottom: Tech Pills */}
                      <div className="flex items-center gap-1 overflow-hidden">
                        {project.toolsUsed.slice(0, 3).map((tool, tIdx) => (
                          <span key={tIdx} className="text-[8px] font-sans px-1.5 py-0.5 rounded bg-cream-100/10 text-cream-300 shrink-0">
                            {tool}
                          </span>
                        ))}
                        {project.toolsUsed.length > 3 && (
                          <span className="text-[8px] font-sans text-cream-400">+{project.toolsUsed.length - 3}</span>
                        )}
                      </div>

                    </div>
                  </div>

                </div>

                {/* Right: Domain Metadata Tag & Arrow Button */}
                <div className="flex items-center gap-3 sm:gap-6 shrink-0">
                  <div className="text-right hidden md:block">
                    <span className="text-xs font-sans uppercase tracking-widest text-cream-300 font-semibold block">
                      {project.domain.split('/')[0].trim()}
                    </span>
                    <span className="text-[10px] font-sans text-cream-400 block mt-0.5">
                      EDITION 2026
                    </span>
                  </div>

                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-cream-300/20 group-hover:border-cream-100 group-hover:bg-cream-100 group-hover:text-burgundy-950 text-cream-300 transition-all flex items-center justify-center shadow-sm">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Directive */}
        <div className="mt-8 flex items-center justify-between text-xs font-sans text-cream-400">
          <span>ALL REPOSITORIES OPEN SOURCE & REPRODUCIBLE</span>
          <a
            href="https://github.com/Leviken24"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playClick()}
            className="hover:text-cream-100 transition-colors uppercase tracking-wider flex items-center gap-1.5 text-[11px]"
          >
            <span>EXPLORE GITHUB CODEBASE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* DETAILED CASE STUDY DRAWER MODAL (When clicking any row) */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-obsidian-950/85 backdrop-blur-xl animate-fade-in">
          
          <div 
            className="w-full max-w-4xl max-h-[90vh] bg-obsidian-900 border border-cream-300/25 rounded-2xl p-6 sm:p-8 overflow-y-auto shadow-2xl relative space-y-6"
            style={{
              backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(104, 14, 36, 0.3) 0%, rgba(16, 16, 21, 0.98) 70%)'
            }}
          >
            {/* Modal Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 p-2 rounded-full border border-cream-300/20 hover:border-cream-100 text-cream-400 hover:text-cream-100 transition-colors"
              title="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-burgundy-900 text-cream-200 text-xs font-sans font-semibold tracking-wider">
                  {activeModalProject.domain}
                </span>
                <span className="font-serif text-sm font-bold text-cream-400">
                  {activeModalProject.code}
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-black text-cream-100 tracking-tight">
                {activeModalProject.title}
              </h3>
              <p className="mt-1 text-sm font-editorial italic text-cream-300">
                {activeModalProject.subtitle}
              </p>
            </div>

            {/* Executive Summary */}
            <div className="p-4 rounded-xl bg-burgundy-950/70 border border-cream-300/15 text-xs sm:text-sm font-sans text-cream-200 leading-relaxed">
              {activeModalProject.executiveSummary}
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
              <div className="p-4 rounded-xl bg-obsidian-950/80 border border-cream-300/10">
                <span className="text-[10px] uppercase tracking-widest text-cream-400 font-bold block mb-1">
                  SYSTEMIC CHALLENGE:
                </span>
                <p className="text-cream-300 leading-relaxed">
                  {activeModalProject.problemStatement}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-950/80 border border-cream-300/10">
                <span className="text-[10px] uppercase tracking-widest text-cream-400 font-bold block mb-1">
                  ENGINEERED SOLUTION:
                </span>
                <p className="text-cream-300 leading-relaxed">
                  {activeModalProject.technicalSolution}
                </p>
              </div>
            </div>

            {/* Subsystem Architecture Points */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-sans uppercase tracking-widest text-cream-400 font-bold block">
                SUBSYSTEM ARCHITECTURE IMPLEMENTATION:
              </span>
              <div className="space-y-2">
                {activeModalProject.architecturePoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs font-sans text-cream-300">
                    <span className="w-5 h-5 rounded-full bg-burgundy-900 border border-cream-300/20 text-cream-200 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {pIdx + 1}
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics & Tool Arsenal */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {activeModalProject.metrics.map((m, mIdx) => (
                <div key={mIdx} className="p-3.5 rounded-xl bg-obsidian-950 border border-cream-300/15 text-center">
                  <span className="text-xl font-serif font-black text-cream-100 block">
                    {m.value}
                  </span>
                  <span className="text-[10px] font-sans text-cream-400 block mt-0.5">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-cream-300/15 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.toolsUsed.map((tool, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-1 rounded-md text-[11px] font-sans bg-burgundy-900/60 border border-cream-300/15 text-cream-200">
                    {tool}
                  </span>
                ))}
              </div>

              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="px-6 py-3 rounded-full bg-cream-100 hover:bg-cream-200 text-burgundy-950 font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md"
              >
                <GithubIcon className="w-4 h-4" />
                <span>INSPECT CODE ON GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      )}

    </section>
  );
};
