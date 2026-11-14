import React, { useState, useEffect, useRef } from 'react';
import { ArrowDownRight, Sparkles, Mail, Phone, Copy, Check, Upload, Camera, RefreshCw, X } from 'lucide-react';
import { PERSONAL_DOSSIER } from '../data/portfolioData';
import { soundEngine } from '../utils/audio';

export const EditorialHero: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('shreeja_portfolio_photo');
    if (saved) {
      setCustomPhotoUrl(saved);
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      soundEngine.playChime();
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomPhotoUrl(result);
        localStorage.setItem('shreeja_portfolio_photo', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    soundEngine.playPop(650);
    setCustomPhotoUrl(null);
    localStorage.removeItem('shreeja_portfolio_photo');
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    soundEngine.playChime();
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="top" className="relative min-h-[95vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden editorial-grid">
      
      {/* Hidden File Input for Portrait Upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handlePhotoUpload}
        className="hidden"
      />

      {/* Velvet Burgundy Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-burgundy-900/40 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-burgundy-950/60 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cream-400/5 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full my-auto">
        
        {/* Top Editorial Sub-Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-cream-300/15 text-xs font-sans">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-burgundy-900/80 border border-burgundy-700/60 text-cream-200 text-[11px] tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cream-300 animate-ping" />
              <span>RESEARCH DOSSIER // 2026</span>
            </span>
            <span className="text-cream-400 hidden sm:inline-block tracking-wider uppercase text-[11px]">
              {PERSONAL_DOSSIER.specializations}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-cream-300 tracking-wider">
            <span>{PERSONAL_DOSSIER.location}</span>
          </div>
        </div>

        {/* Main Hero Split Grid: Monumental Name on Left, Professional Portrait Arch on Right */}
        <div className="mt-10 mb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Monumental Name & Bio (Col 8) */}
          <div className="lg:col-span-8">
            
            {/* Signature Badge Above (Clean separation to prevent overlap) */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1.5px] bg-cream-300" />
              <span className="font-signature text-2xl sm:text-3xl text-cream-300 tracking-wide">
                {PERSONAL_DOSSIER.signature}
              </span>
              <span className="text-cream-400/40">•</span>
              <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-cream-400 font-semibold">
                PORTFOLIO & TECHNICAL MEDIA KIT
              </span>
            </div>

            {/* Monumental Name (Zero overlap, perfect fluid sizing) */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black font-serif tracking-tight text-cream-100 uppercase leading-none select-none">
              H S SHREEJA
            </h1>

            {/* Subtitle & Executive Summary */}
            <div className="mt-6 max-w-2xl space-y-4">
              <h2 className="text-lg sm:text-2xl font-serif text-cream-200 leading-snug">
                Investigating deep-layer vulnerabilities across <span className="text-cream-100 italic font-editorial underline decoration-burgundy-500 underline-offset-4">Cyber Security</span>, <span className="text-cream-100 italic font-editorial underline decoration-burgundy-500 underline-offset-4">Autonomous Robotics</span>, <span className="text-cream-100 italic font-editorial underline decoration-burgundy-500 underline-offset-4">Cloud Defense</span>, <span className="text-cream-100 italic font-editorial underline decoration-burgundy-500 underline-offset-4">IoT Hardware</span>, and <span className="text-cream-100 italic font-editorial underline decoration-burgundy-500 underline-offset-4">AI Red-Teaming</span>.
              </h2>
              <p className="text-xs sm:text-sm font-sans text-cream-400 leading-relaxed">
                {PERSONAL_DOSSIER.executiveBio}
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#dossiers"
                onClick={() => soundEngine.playPop(850)}
                className="px-6 py-3 rounded-full bg-cream-100 hover:bg-cream-200 text-burgundy-950 font-sans font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-card"
              >
                <span>EXPLORE CASE STUDIES</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#timeline"
                onClick={() => soundEngine.playPop(800)}
                className="px-6 py-3 rounded-full bg-burgundy-900/60 hover:bg-burgundy-800 border border-cream-300/20 hover:border-cream-300 text-cream-100 font-sans text-xs uppercase tracking-widest transition-all flex items-center gap-2"
              >
                <span>VIEW TIMELINE</span>
              </a>

              <a
                href="#contact"
                onClick={() => soundEngine.playPop(900)}
                className="px-6 py-3 rounded-full border border-cream-300/30 hover:border-cream-100 text-cream-300 hover:text-cream-100 font-sans text-xs uppercase tracking-widest transition-all"
              >
                <span>GET IN TOUCH ✦</span>
              </a>
            </div>

          </div>

          {/* Right Column: Architectural Arch Portrait Frame & Upload Slot (Col 4) */}
          <div className="lg:col-span-4 flex flex-col items-center">
            
            <div className="relative group">
              
              {/* Arched Window Container (Inspired by Mariana Napolitani & Reference 5 - UGC) */}
              <div 
                className="w-64 h-80 sm:w-72 sm:h-96 rounded-t-full rounded-b-2xl p-2 bg-gradient-to-b from-burgundy-900/90 via-burgundy-950 to-obsidian-950 border border-cream-300/30 shadow-velvet overflow-hidden relative flex flex-col items-center justify-center"
              >
                {customPhotoUrl ? (
                  <img
                    src={customPhotoUrl}
                    alt="H S Shreeja Professional Portrait"
                    className="w-full h-full object-cover rounded-t-full rounded-b-xl"
                  />
                ) : (
                  /* High-Fashion Editorial Placeholder Avatar */
                  <div className="w-full h-full rounded-t-full rounded-b-xl bg-burgundy-950/80 flex flex-col items-center justify-center p-6 text-center space-y-3 relative overflow-hidden">
                    <div className="w-20 h-20 rounded-full border border-cream-300/30 bg-burgundy-900 flex items-center justify-center text-cream-100 shadow-md">
                      <span className="font-serif text-3xl font-black">HS</span>
                    </div>

                    <div>
                      <span className="font-serif font-bold text-sm text-cream-100 block">
                        Professional Portrait
                      </span>
                      <span className="text-[10px] font-sans text-cream-400 block mt-1">
                        Click below to upload your photo
                      </span>
                    </div>

                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="mt-2 px-4 py-2 rounded-full bg-cream-100 hover:bg-cream-200 text-burgundy-950 text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md transition-all"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>UPLOAD PHOTO</span>
                    </button>
                  </div>
                )}

                {/* Overlaid Availability Pill at bottom of arch */}
                <div className="absolute bottom-4 inset-x-4 px-3 py-1.5 rounded-full bg-obsidian-950/90 backdrop-blur-md border border-cream-300/25 text-[10px] font-sans text-cream-200 text-center tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy-500 animate-pulse" />
                  <span>RESEARCHER & DEFENDER</span>
                </div>
              </div>

              {/* Photo Upload / Reset Floating Controls */}
              <div className="mt-3 flex items-center justify-center gap-2 text-xs font-sans">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-1.5 rounded-full bg-burgundy-900/80 hover:bg-burgundy-800 border border-cream-300/20 text-cream-200 text-[11px] flex items-center gap-1.5 transition-all"
                  title="Upload or change professional photo"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>{customPhotoUrl ? "Change Photo" : "Upload Picture"}</span>
                </button>

                {customPhotoUrl && (
                  <button
                    onClick={handleRemovePhoto}
                    className="p-1.5 rounded-full bg-burgundy-950 border border-cream-300/20 text-cream-400 hover:text-cream-100 transition-colors"
                    title="Remove custom photo"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* 4 Quantified Stat Pillars (Inspired by Reference 5 - UGC Portfolio) */}
        <div className="mt-10 pt-8 border-t border-cream-300/15 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {PERSONAL_DOSSIER.stats.map((stat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundEngine.playPop(800 + idx * 60)}
              className="p-5 rounded-xl velvet-card flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-cream-100 tracking-tight block">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs font-sans font-bold text-cream-200 uppercase tracking-wider block">
                  {stat.label}
                </span>
              </div>
              <p className="mt-3 text-[11px] font-sans text-cream-400 border-t border-cream-300/10 pt-2 leading-relaxed">
                {stat.note}
              </p>
            </div>
          ))}
        </div>

        {/* Floating Contact Strip with One-Click Copy */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 font-sans text-xs text-cream-400 border-t border-cream-300/10 pt-4">
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => copyToClipboard(PERSONAL_DOSSIER.email, 'email')}
              className="flex items-center gap-2 hover:text-cream-100 transition-colors group"
              title="Click to copy email address"
            >
              <Mail className="w-3.5 h-3.5 text-cream-400 group-hover:text-cream-200" />
              <span>{PERSONAL_DOSSIER.email}</span>
              {copiedType === 'email' ? <Check className="w-3 h-3 text-cream-200" /> : <Copy className="w-3 h-3 opacity-40 group-hover:opacity-100" />}
            </button>

            <span className="text-cream-400/40">•</span>

            <button
              onClick={() => copyToClipboard(PERSONAL_DOSSIER.phone, 'phone')}
              className="flex items-center gap-2 hover:text-cream-100 transition-colors group"
              title="Click to copy phone number"
            >
              <Phone className="w-3.5 h-3.5 text-cream-400 group-hover:text-cream-200" />
              <span>{PERSONAL_DOSSIER.phone}</span>
              {copiedType === 'phone' ? <Check className="w-3 h-3 text-cream-200" /> : <Copy className="w-3 h-3 opacity-40 group-hover:opacity-100" />}
            </button>
          </div>

          <div className="text-[11px] text-cream-400">
            <span>{PERSONAL_DOSSIER.availabilityStatus}</span>
          </div>
        </div>

      </div>

    </section>
  );
};
