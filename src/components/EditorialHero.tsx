import React, { useState, useEffect, useRef } from 'react';
import { ArrowDownRight, Mail, Phone, Copy, Check, Upload, Camera, X, ArrowRight } from 'lucide-react';
import { PERSONAL_DOSSIER } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { soundEngine } from '../utils/audio';
import profilePhoto from '../assets/profile.jpg';

const NAME_LETTERS = 'H S SHREEJA'.split('');
const DEFAULT_PHOTO = profilePhoto;

export const EditorialHero: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string>(DEFAULT_PHOTO);
  const [revealed, setRevealed] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('shreeja_portfolio_photo_v2');
    if (saved) {
      setCustomPhotoUrl(saved);
    } else {
      setCustomPhotoUrl(DEFAULT_PHOTO);
    }
    // Trigger entrance animation after a brief delay
    const t = setTimeout(() => setRevealed(true), 300);
    return () => clearTimeout(t);
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      soundEngine.playChime();
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomPhotoUrl(result);
        localStorage.setItem('shreeja_portfolio_photo_v2', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    soundEngine.playPop(650);
    setCustomPhotoUrl(DEFAULT_PHOTO);
    localStorage.removeItem('shreeja_portfolio_photo_v2');
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    soundEngine.playChime();
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Hidden File Input */}
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />

      {/* Deep Velvet Atmospheric Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-burgundy-900/30 rounded-full blur-[200px]" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-burgundy-950/50 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cream-400/4 rounded-full blur-[130px]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(cream 1px,transparent 1px),linear-gradient(90deg,cream 1px,transparent 1px)', backgroundSize: '80px 80px' }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full">

        {/* Top Thin Meta Bar */}
        <div className={`flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-cream-300/12 text-[11px] font-sans tracking-widest uppercase text-cream-400 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-cream-300">
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy-500 animate-pulse" />
              Available Worldwide
            </span>
            <span className="text-cream-400/50 hidden sm:block">•</span>
            <span className="hidden sm:block text-cream-400">Bangalore, India</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-cream-400">{PERSONAL_DOSSIER.email}</span>
            <span className="text-cream-400/50">•</span>
            <span className="text-cream-400">2026</span>
          </div>
        </div>

        {/* MAIN HERO GRID */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* LEFT: Name + Bio + CTAs (8 cols) */}
          <div className="lg:col-span-8 flex flex-col">

            {/* Signature line above name */}
            <div className={`flex items-center gap-3 mb-4 transition-all duration-700 delay-100 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="w-8 h-px bg-cream-300/50" />
              <span className="font-signature text-2xl sm:text-3xl text-cream-200/80 tracking-wide">{PERSONAL_DOSSIER.signature}</span>
              <span className="text-cream-400/30">•</span>
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream-400 font-medium">Portfolio & Technical Media Kit</span>
            </div>

            {/* MONUMENTAL NAME — staggered letter reveal */}
            <h1
              className="font-serif font-black uppercase leading-none tracking-tight select-none whitespace-nowrap"
              style={{ fontSize: 'clamp(2.4rem, 6.2vw, 6.8rem)', lineHeight: 1.05 }}
              aria-label="H S SHREEJA"
            >
              {NAME_LETTERS.map((letter, i) => (
                <span
                  key={i}
                  className={`inline-block transition-all duration-700 ${letter === ' ' ? 'w-[0.25em]' : ''
                    } ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{
                    transitionDelay: `${200 + i * 55}ms`,
                    color: i < 3 ? '#f5f0e8' : '#ede8de',
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>

            {/* Domain ticker */}
            <div className={`mt-5 overflow-hidden transition-all duration-700 delay-700 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-0 text-[11px] font-sans text-cream-400 tracking-widest uppercase">
                {['Cyber Security', 'AI Hacking', 'Robotics', 'Cloud Defense', 'IoT & Hardware'].map((d, i) => (
                  <React.Fragment key={d}>
                    <span className="hover:text-cream-200 transition-colors cursor-default">{d}</span>
                    {i < 4 && <span className="mx-3 text-burgundy-600">✦</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Executive Bio */}
            <div className={`mt-8 max-w-xl transition-all duration-700 delay-[800ms] ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="border-l-2 border-burgundy-700 pl-4">
                <p className="text-sm sm:text-base font-sans text-cream-300 leading-relaxed">
                  {PERSONAL_DOSSIER.executiveBio}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`mt-8 flex flex-wrap items-center gap-3 transition-all duration-700 delay-[950ms] ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a
                href="#dossiers"
                onClick={() => soundEngine.playPop(850)}
                className="group px-6 py-3 rounded-full bg-cream-100 hover:bg-cream-200 text-burgundy-950 font-sans font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                <span>View Case Files</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#timeline"
                onClick={() => soundEngine.playPop(800)}
                className="px-6 py-3 rounded-full bg-burgundy-900/70 hover:bg-burgundy-800 border border-cream-300/20 hover:border-cream-300/50 text-cream-100 font-sans text-xs uppercase tracking-widest transition-all"
              >
                Research Timeline
              </a>
              <a
                href="#contact"
                onClick={() => soundEngine.playPop(900)}
                className="px-6 py-3 rounded-full border border-cream-300/25 hover:border-cream-200 text-cream-300 hover:text-cream-100 font-sans text-xs uppercase tracking-widest transition-all"
              >
                Get In Touch ✦
              </a>
            </div>

            {/* Contact strip */}
            <div className={`mt-8 pt-6 border-t border-cream-300/10 flex flex-wrap items-center gap-6 font-sans text-xs text-cream-400 transition-all duration-700 delay-[1100ms] ${revealed ? 'opacity-100' : 'opacity-0'}`}>
              <button onClick={() => copyToClipboard(PERSONAL_DOSSIER.email, 'email')} className="flex items-center gap-2 hover:text-cream-100 transition-colors group" title="Copy email">
                <Mail className="w-3.5 h-3.5 group-hover:text-cream-200" />
                <span>{PERSONAL_DOSSIER.email}</span>
                {copiedType === 'email' ? <Check className="w-3 h-3 text-cream-200" /> : <Copy className="w-3 h-3 opacity-40 group-hover:opacity-100" />}
              </button>
              <span className="text-cream-400/30">•</span>
              <button onClick={() => copyToClipboard(PERSONAL_DOSSIER.phone, 'phone')} className="flex items-center gap-2 hover:text-cream-100 transition-colors group" title="Copy phone">
                <Phone className="w-3.5 h-3.5 group-hover:text-cream-200" />
                <span>{PERSONAL_DOSSIER.phone}</span>
                {copiedType === 'phone' ? <Check className="w-3 h-3 text-cream-200" /> : <Copy className="w-3 h-3 opacity-40 group-hover:opacity-100" />}
              </button>
              <span className="text-cream-400/30">•</span>
              <div className="flex items-center gap-2">
                <a href={PERSONAL_DOSSIER.github} target="_blank" rel="noopener noreferrer" className="hover:text-cream-100 transition-colors flex items-center gap-1.5">
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a href={PERSONAL_DOSSIER.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cream-100 transition-colors flex items-center gap-1.5 ml-2">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT: Portrait Arch (4 cols) */}
          <div className={`lg:col-span-4 flex flex-col items-center transition-all duration-1000 delay-500 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Arch frame */}
            <div className="relative group w-full max-w-[280px] sm:max-w-[320px]">
              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cream-300/40 rounded-tl-sm z-10 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-cream-300/40 rounded-tr-sm z-10 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-cream-300/40 rounded-bl-sm z-10 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cream-300/40 rounded-br-sm z-10 pointer-events-none" />

              {/* Arch window */}
              <div className="w-full aspect-[3/4] rounded-t-[50%] rounded-b-2xl bg-gradient-to-b from-burgundy-900/90 via-burgundy-950 to-obsidian-950 border border-cream-300/25 shadow-2xl overflow-hidden relative">
                <img
                  src={customPhotoUrl}
                  alt="H S Shreeja"
                  className="w-full h-full object-cover object-[center_18%] scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle luxury vignette & tone */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/85 via-obsidian-950/20 to-transparent pointer-events-none" />

                {/* Availability badge at bottom */}
                <div className="absolute bottom-3 inset-x-3 px-3 py-1.5 rounded-full bg-obsidian-950/90 backdrop-blur-md border border-cream-300/25 text-[10px] font-sans text-cream-200 text-center tracking-widest uppercase flex items-center justify-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy-500 animate-pulse" />
                  <span>Researcher & Defender</span>
                </div>
              </div>

              {/* Upload / Change Photo controls */}
              <div className="mt-3 flex items-center justify-center gap-2 font-sans text-xs">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3.5 py-1.5 rounded-full bg-burgundy-900/80 hover:bg-burgundy-800 border border-cream-300/20 text-cream-200 text-[11px] flex items-center gap-1.5 transition-all shadow-sm"
                  title="Upload or change professional photo"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>{customPhotoUrl !== DEFAULT_PHOTO ? 'Change Custom Photo' : 'Update Photo'}</span>
                </button>
                {customPhotoUrl !== DEFAULT_PHOTO && (
                  <button
                    onClick={handleRemovePhoto}
                    className="p-1.5 rounded-full bg-burgundy-950 border border-cream-300/20 text-cream-400 hover:text-cream-100 transition-colors"
                    title="Reset to official portrait"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* STAT PILLARS */}
        <div className={`mt-14 pt-8 border-t border-cream-300/10 grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-[1200ms] ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {PERSONAL_DOSSIER.stats.map((stat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundEngine.playPop(800 + idx * 60)}
              className="p-5 rounded-xl velvet-card flex flex-col justify-between group hover:border-cream-300/30 transition-all"
            >
              <div>
                <span className="text-4xl sm:text-5xl font-serif font-black text-cream-100 tracking-tight block group-hover:text-cream-50 transition-colors">
                  {stat.value}
                </span>
                <span className="mt-2 text-[11px] font-sans font-bold text-cream-200 uppercase tracking-wider block">
                  {stat.label}
                </span>
              </div>
              <p className="mt-3 text-[11px] font-sans text-cream-400 border-t border-cream-300/10 pt-2 leading-relaxed">
                {stat.note}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll hint */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-[1400ms] ${revealed ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-[10px] font-sans text-cream-400 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-cream-300/40 to-transparent animate-pulse" />
      </div>

    </section>
  );
};
