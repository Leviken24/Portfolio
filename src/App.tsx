import React, { useState } from 'react';
import { OpeningPreloader } from './components/OpeningPreloader';
import { ScrollAtmosphere } from './components/ScrollAtmosphere';
import { FloatingNav } from './components/FloatingNav';
import { EditorialHero } from './components/EditorialHero';
import { DomainDeck } from './components/DomainDeck';
import { ProjectsDeck } from './components/ProjectsDeck';
import { TimelineDeck } from './components/TimelineDeck';
import { CapabilitiesDeck } from './components/CapabilitiesDeck';
import { ServicesDeck } from './components/ServicesDeck';
import { EditorialContact } from './components/EditorialContact';
import { ArrowUp } from 'lucide-react';
import { soundEngine } from './utils/audio';

export function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  const scrollToTop = () => {
    soundEngine.playPop(700);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-cream-100 font-sans selection:bg-burgundy-700 selection:text-cream-100 overflow-x-hidden">
      
      {/* 00. Awwwards Opening Curtain Loader (DEGACSID-style Counter & Reveal) */}
      {!preloaderDone && (
        <OpeningPreloader onComplete={() => setPreloaderDone(true)} />
      )}

      {/* 01. Dynamic Atmospheric Scroll Canvas (Jaspreet Singh & North.cloud-style Sunset-to-Night depth) */}
      <ScrollAtmosphere />

      {/* 02. Ultra-Sleek Floating Capsule Island Navbar */}
      <FloatingNav />

      {/* Main Presentation Flow */}
      <main>
        {/* 03. Hero: Monumental Name, Executive Bio & Professional Portrait Arch */}
        <EditorialHero />

        {/* 04. Core Technical Domains (CyberSec, Robotics, Cloud, IoT, AI Hacking) */}
        <DomainDeck />

        {/* 05. Featured Classified Project Dossiers (Compact Tabbed Slides) */}
        <ProjectsDeck />

        {/* 06. Chronological Research & Career Milestones Timeline */}
        <TimelineDeck />

        {/* 07. Detailed Capabilities & Arsenal Matrix */}
        <CapabilitiesDeck />

        {/* 08. Structured Research & Service Engagements */}
        <ServicesDeck />

        {/* 09. Direct Comms & Encrypted Dispatch */}
        <EditorialContact />
      </main>

      {/* Floating Back to Summit Control */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-burgundy-950/90 border border-cream-300/25 hover:border-cream-300 text-cream-300 hover:text-cream-100 transition-all shadow-velvet backdrop-blur-md group"
          title="Return to summit"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

    </div>
  );
}

export default App;
