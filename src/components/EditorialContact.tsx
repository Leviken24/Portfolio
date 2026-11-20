import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_DOSSIER } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { soundEngine } from '../utils/audio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const EditorialContact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '', topic: 'SECURITY_AUDIT' });
  const [isSent, setIsSent] = useState(false);
  const sectionRef = useScrollReveal(0.08);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    soundEngine.playChime();
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playPop(1000);
    setIsSent(true);
    soundEngine.playChime();
  };

  return (
    <footer id="contact" ref={sectionRef as React.RefObject<HTMLElement>} className="py-24 px-4 sm:px-6 lg:px-8 relative bg-obsidian-950">
      {/* Expanding Laser Divider */}
      <div className="laser-divider max-w-7xl mx-auto mb-16" />
      
      {/* Background Velvet Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-burgundy-900/30 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Outro Masthead Typography */}
        <div className="sr-hidden pb-14 border-b border-cream-300/15">
          <div className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-cream-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-burgundy-500 animate-ping" />
            <span>DIRECT COMMS & COLLABORATIONS // STATUS: OPEN</span>
          </div>

          <div className="reveal-mask">
            <h2 className="reveal-mask-inner text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-serif tracking-tight text-cream-100 uppercase leading-none">
              LET'S FORTIFY <span className="text-stroke-cream italic font-editorial">THE NEXT</span> FRONTIER.
            </h2>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-sans text-cream-400">
            <span className="px-3.5 py-1 rounded-full bg-burgundy-900/80 border border-burgundy-700/60 text-cream-200 font-semibold tracking-wider">
              {PERSONAL_DOSSIER.availabilityStatus}
            </span>
            <span>{PERSONAL_DOSSIER.location}</span>
          </div>
        </div>

        {/* Contact Grid & Direct Dispatch Form */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Communication Cards (Col 5) */}
          <div className="sr-card lg:col-span-5 space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-cream-400 font-bold block mb-2">
              DIRECT REACH:
            </span>

            {/* Email Card */}
            <div className="p-5 rounded-xl velvet-card flex items-center justify-between group">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-burgundy-900/90 border border-cream-300/20 flex items-center justify-center text-cream-200 group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-sans text-cream-400 uppercase block">EMAIL</span>
                  <a
                    href={`mailto:${PERSONAL_DOSSIER.email}`}
                    className="text-xs sm:text-sm font-sans font-semibold text-cream-100 hover:text-cream-300 transition-colors truncate block"
                  >
                    {PERSONAL_DOSSIER.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(PERSONAL_DOSSIER.email, 'email')}
                className="p-2 rounded-lg border border-cream-300/20 hover:border-cream-300 text-cream-400 hover:text-cream-100 transition-all shrink-0"
                title="Copy Email"
              >
                {copiedType === 'email' ? <Check className="w-4 h-4 text-cream-200" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-xl velvet-card flex items-center justify-between group">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-burgundy-900/90 border border-cream-300/20 flex items-center justify-center text-cream-200 group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-sans text-cream-400 uppercase block">VOICE & TELEGRAM</span>
                  <a
                    href={`tel:${PERSONAL_DOSSIER.phone}`}
                    className="text-xs sm:text-sm font-sans font-semibold text-cream-100 hover:text-cream-300 transition-colors truncate block"
                  >
                    {PERSONAL_DOSSIER.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(PERSONAL_DOSSIER.phone, 'phone')}
                className="p-2 rounded-lg border border-cream-300/20 hover:border-cream-300 text-cream-400 hover:text-cream-100 transition-all shrink-0"
                title="Copy Phone"
              >
                {copiedType === 'phone' ? <Check className="w-4 h-4 text-cream-200" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_DOSSIER.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="p-5 rounded-xl velvet-card flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-burgundy-900/90 border border-cream-300/20 flex items-center justify-center text-cream-200 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-sans text-cream-400 uppercase block">LINKEDIN PROFILE</span>
                  <span className="text-xs sm:text-sm font-sans font-semibold text-cream-100 group-hover:text-cream-300 transition-colors">
                    {PERSONAL_DOSSIER.linkedinHandle}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-cream-400 group-hover:text-cream-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_DOSSIER.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="p-5 rounded-xl velvet-card flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-burgundy-900/90 border border-cream-300/20 flex items-center justify-center text-cream-200 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-sans text-cream-400 uppercase block">OPEN-SOURCE CODE</span>
                  <span className="text-xs sm:text-sm font-sans font-semibold text-cream-100 group-hover:text-cream-300 transition-colors">
                    github.com/{PERSONAL_DOSSIER.githubHandle}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-cream-400 group-hover:text-cream-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right Column: Transmission Form (Col 7) */}
          <div className="sr-card lg:col-span-7 p-7 sm:p-8 rounded-2xl velvet-card shadow-velvet">
            
            <div className="flex items-center justify-between pb-5 border-b border-cream-300/15">
              <span className="font-serif text-lg font-bold text-cream-100">
                SEND A DIRECT DISPATCH
              </span>
              <span className="text-[10px] font-sans text-cream-400 uppercase tracking-widest">
                DIRECT INBOX
              </span>
            </div>

            {isSent ? (
              <div className="py-12 text-center space-y-3 font-sans">
                <div className="w-12 h-12 rounded-full bg-burgundy-900 border border-cream-300/30 text-cream-200 mx-auto flex items-center justify-center shadow-md">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-cream-100">
                  DISPATCH TRANSMITTED
                </h3>
                <p className="text-xs text-cream-400 max-w-sm mx-auto leading-relaxed">
                  Your message has been acknowledged. You can also connect directly at {PERSONAL_DOSSIER.email} or call {PERSONAL_DOSSIER.phone}.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-4 px-5 py-2 rounded-full bg-burgundy-900 border border-cream-300/20 text-cream-200 text-xs font-sans uppercase tracking-wider hover:border-cream-300"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="mt-6 space-y-4 font-sans text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-cream-400 uppercase tracking-widest mb-1.5 font-semibold">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full rounded-xl bg-obsidian-950 border border-cream-300/15 px-3.5 py-2.5 text-cream-100 outline-none focus:border-cream-300 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-cream-400 uppercase tracking-widest mb-1.5 font-semibold">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. elena@organization.com"
                      className="w-full rounded-xl bg-obsidian-950 border border-cream-300/15 px-3.5 py-2.5 text-cream-100 outline-none focus:border-cream-300 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-cream-400 uppercase tracking-widest mb-1.5 font-semibold">
                    INQUIRY DOMAIN
                  </label>
                  <select
                    value={formState.topic}
                    onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                    className="w-full rounded-xl bg-obsidian-950 border border-cream-300/15 px-3.5 py-2.5 text-cream-100 outline-none focus:border-cream-300 transition-colors font-sans"
                  >
                    <option value="SECURITY_AUDIT">Offensive Cyber Security & Penetration Testing</option>
                    <option value="AI_RED_TEAM">Adversarial AI Stress-Testing & Guardrails</option>
                    <option value="ROBOTICS_DEV">Autonomous Robotics & Sensor Fusion</option>
                    <option value="CLOUD_HARDENING">Cloud Infrastructure & DevSecOps Hardening</option>
                    <option value="HARDWARE_IOT">IoT & Automotive CAN Bus Security</option>
                    <option value="RESEARCH_COLLAB">Research / Fellowship / Career Opportunity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] text-cream-400 uppercase tracking-widest mb-1.5 font-semibold">
                    MESSAGE / SCOPE BRIEF *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project, research scope, or challenge..."
                    className="w-full rounded-xl bg-obsidian-950 border border-cream-300/15 px-3.5 py-2.5 text-cream-100 outline-none focus:border-cream-300 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-cream-100 hover:bg-cream-200 text-burgundy-950 font-bold uppercase tracking-widest font-sans text-xs transition-all flex items-center justify-center gap-2 shadow-card"
                >
                  <span>SEND TRANSMISSION</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

              </form>
            )}

          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="mt-16 pt-8 border-t border-cream-300/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-cream-400">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-cream-200">{PERSONAL_DOSSIER.name}</span>
            <span>© 2026 // ALL RIGHTS RESERVED</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#top" 
              onClick={() => soundEngine.playPop(650)}
              className="hover:text-cream-100 transition-colors"
            >
              BACK TO TOP ↑
            </a>
            <span>•</span>
            <span>BANGALORE / OPERATING NATIONWIDE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
