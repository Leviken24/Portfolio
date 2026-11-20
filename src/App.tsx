import React, { useState, useEffect } from 'react';
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
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    soundEngine.playPop(700);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-cream-100 font-sans selection:bg-burgundy-700 selection:text-cream-100 overflow-x-hidden">

      {/* 00. DEGACSID-style counter loader */}
      {!preloaderDone && (
        <OpeningPreloader onComplete={() => setPreloaderDone(true)} />
      )}

      {/* 01. Atmospheric depth canvas */}
      <ScrollAtmosphere />

      {/* 02. Ghost nav — hidden at top, reveals on scroll */}
      <FloatingNav />

      {/* Main Presentation */}
      <main>
        {/* Hero */}
        <EditorialHero />

        {/* Domains */}
        <DomainDeck />

        {/* Case Files (Projects) */}
        <ProjectsDeck />

        {/* Timeline */}
        <TimelineDeck />

        {/* Capabilities / Skills */}
        <CapabilitiesDeck />

        {/* Engagements / Services */}
        <ServicesDeck />

        {/* Contact */}
        <EditorialContact />
      </main>

      {/* Back to top pill — only shows after scrolling down */}
      <div
        className={`fixed bottom-6 right-6 z-30 transition-all duration-500 ${
          showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-burgundy-950/90 border border-cream-300/25 hover:border-cream-300 text-cream-300 hover:text-cream-100 transition-all shadow-velvet backdrop-blur-md group"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

    </div>
  );
}

export default App;
