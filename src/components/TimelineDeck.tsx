import React, { useState } from 'react';
import { Shield, Cpu, Bot, Cloud, Radio } from 'lucide-react';
import { soundEngine } from '../utils/audio';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Milestone {
  year: string;
  period: string;
  title: string;
  role: string;
  domain: string;
  icon: typeof Shield;
  summary: string;
  highlights: string[];
  deliverables: string;
}

export const TimelineDeck: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const sectionRef = useScrollReveal(0.08);

  const milestones: Milestone[] = [
    {
      year: "2026",
      period: "CURRENT FOCUS",
      title: "Frontier AI Red-Teaming & Adversarial Safety",
      role: "Security Researcher & AI Red-Teamer",
      domain: "AI HACKING & NEURAL DEFENSE",
      icon: Cpu,
      summary: "Pioneering adversarial stress-testing frameworks for frontier LLM agents, diagnosing multi-turn prompt injection vectors, embedding space evasion, and implementing dynamic semantic guardrails.",
      highlights: [
        "Constructed A.E.G.I.S automated LLM fuzzing testbed detecting 140+ attack permutations",
        "Developed embedding-space cosine distance anomaly triggers to halt jailbreak chains",
        "Published reproducible adversarial evaluation benchmarks aligned with MITRE ATLAS"
      ],
      deliverables: "Autonomous Red-Teaming Suites & LLM Guardrails"
    },
    {
      year: "2025",
      period: "2025 — 2026",
      title: "Autonomous Robotics & Cyber-Physical Systems",
      role: "Robotics & Kinematics Engineer",
      domain: "ROS2 & EMBEDDED KINEMATICS",
      icon: Bot,
      summary: "Architected edge-computing autonomous ground rovers utilizing ROS2, 2D LiDAR SLAM, visual odometry, and extended Kalman filter state estimation with cryptographic sensor telemetry validation.",
      highlights: [
        "Deployed LiDAR SLAM navigation on NVIDIA Jetson Nano achieving sub-5cm precision",
        "Implemented hardware security module (ATECC608A) for encrypted sensor telemetry",
        "Designed real-time fail-safe actuator controllers immune to acoustic IMU resonance attacks"
      ],
      deliverables: "Autonomous Rover Prototypes & Secure Sensor Stacks"
    },
    {
      year: "2024",
      period: "2024 — 2025",
      title: "Cloud Infrastructure & DevSecOps Governance",
      role: "Cloud Security Architect",
      domain: "MULTI-CLOUD & KUBERNETES",
      icon: Cloud,
      summary: "Hardened distributed multi-cloud architectures across AWS and GCP, implemented container isolation in Kubernetes with eBPF, and developed automated IAM privilege escalation graph traversal engines.",
      highlights: [
        "Built ZERO-VOID multi-cloud scanner mapping transitive IAM role-chaining paths",
        "Enforced zero-trust admission policies across Kubernetes clusters using custom OPA rules",
        "Deployed automated honeynet canaries detecting unauthorized credential scrapers under 2s"
      ],
      deliverables: "Zero-Trust Multi-Cloud Blueprints & IaC Security Policies"
    },
    {
      year: "2023",
      period: "2023 — 2024",
      title: "IoT Hardware Pentesting & CAN Bus Telemetry",
      role: "Hardware & Firmware Security Researcher",
      domain: "IOT & AUTOMOTIVE ECUS",
      icon: Radio,
      summary: "Dissected connected IoT hardware through physical debug ports (UART, JTAG, SPI), reversed proprietary firmware with Ghidra, and engineered a physical CAN bus diagnostic injection harness.",
      highlights: [
        "Engineered CYBER-CAN hardware transceiver for vehicle OBD-II diagnostic port auditing",
        "Reverse-engineered automotive ECU firmware instructions to identify unauthenticated commands",
        "Extracted cryptographic keys from encrypted microcontrollers via logic analyzer sniffing"
      ],
      deliverables: "Automotive CAN Injection Harness & Firmware Reports"
    },
    {
      year: "2022",
      period: "2022 — 2023",
      title: "Offensive Security & Binary Exploitation Foundations",
      role: "Security Researcher",
      domain: "NETWORK & BINARY DEFENSE",
      icon: Shield,
      summary: "Deep immersion in offensive penetration testing methodologies, x86/ARM assembly reverse engineering, network forensics, OWASP Top 10 web exploitation, and kernel vulnerability research.",
      highlights: [
        "Mastered manual exploit payload construction and dynamic GDB debugging",
        "Conducted deep packet inspection and network traffic anomaly extraction with Wireshark",
        "Formulated systemic threat models for enterprise active directory infrastructures"
      ],
      deliverables: "Vulnerability Assessments & Penetration Proof-of-Concepts"
    }
  ];

  return (
    <section id="timeline" ref={sectionRef as React.RefObject<HTMLElement>} className="py-20 px-4 sm:px-6 lg:px-8 border-t border-cream-300/15 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="sr-hidden flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-cream-300/15">
          <div>
            <div className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-cream-400 mb-2">
              <span className="text-burgundy-500 font-bold">[03]</span>
              <span>CHRONOLOGICAL EVOLUTION & MILESTONES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-cream-100 uppercase tracking-tight">
              RESEARCH TIMELINE
            </h2>
          </div>

          <div className="max-w-md text-xs sm:text-sm font-sans text-cream-400 leading-relaxed">
            <p>
              An accelerated progression from binary reverse engineering to autonomous robotics and frontier AI red-teaming.
            </p>
          </div>
        </div>

        {/* Timeline Horizontal Year Selectors (From Reference 3 & 4) */}
        <div className="mt-8 flex flex-wrap gap-2.5 pb-6 border-b border-cream-300/10">
          {milestones.map((m, idx) => {
            const Icon = m.icon;
            const isCurrent = activeIdx === idx;
            return (
              <button
                key={m.year}
                onClick={() => {
                  soundEngine.playPop(750 + idx * 50);
                  setActiveIdx(idx);
                }}
                className={`px-4 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                  isCurrent
                    ? 'bg-cream-100 text-burgundy-950 font-bold shadow-md'
                    : 'bg-burgundy-950/60 hover:bg-burgundy-900 border border-cream-300/15 text-cream-400 hover:text-cream-100'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isCurrent ? 'text-burgundy-950' : 'text-cream-300'}`} />
                <span className="font-serif font-black">{m.year}</span>
                <span className="text-[10px] opacity-75 hidden sm:inline-block">({m.period})</span>
              </button>
            );
          })}
        </div>

        {/* Active Milestone Card (High Information Density) */}
        {milestones[activeIdx] && (
          <div className="mt-8 p-6 sm:p-10 rounded-2xl velvet-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-velvet">
            
            {/* Left Column: Era Overview (Col 5) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-cream-300/15">
                <span className="px-3 py-1 rounded-full bg-burgundy-900 text-cream-200 text-xs font-sans font-semibold uppercase tracking-widest border border-cream-300/20">
                  {milestones[activeIdx].domain}
                </span>
                <span className="font-serif text-2xl font-black text-cream-300">
                  {milestones[activeIdx].year}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-cream-400 block mb-1">
                  ROLE & APPOINTMENT:
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-black text-cream-100">
                  {milestones[activeIdx].role}
                </h3>
                <p className="mt-1 text-xs font-editorial italic text-cream-300">
                  {milestones[activeIdx].title}
                </p>
              </div>

              <p className="text-xs sm:text-sm font-sans text-cream-300/90 leading-relaxed bg-burgundy-950/60 p-4 rounded-xl border border-cream-300/10">
                {milestones[activeIdx].summary}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs font-sans">
                <span className="text-[10px] uppercase tracking-widest text-cream-400">
                  PRIMARY DELIVERABLE:
                </span>
                <span className="text-cream-100 font-semibold">
                  {milestones[activeIdx].deliverables}
                </span>
              </div>
            </div>

            {/* Right Column: Key Research Achievements & Highlights (Col 7) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-sans uppercase tracking-widest text-cream-400 font-bold block pb-2 border-b border-cream-300/10">
                KEY TECHNICAL ADVANCEMENTS & ACHIEVEMENTS:
              </span>

              <div className="space-y-3">
                {milestones[activeIdx].highlights.map((item, hIdx) => (
                  <div 
                    key={hIdx}
                    className="p-4 rounded-xl bg-obsidian-900/80 border border-cream-300/10 flex items-start gap-3 hover:border-cream-300/30 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-burgundy-900 text-cream-200 font-serif text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      0{hIdx + 1}
                    </div>
                    <p className="text-xs sm:text-sm font-sans text-cream-300 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Navigation arrows to step through timeline */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  disabled={activeIdx === milestones.length - 1}
                  onClick={() => {
                    soundEngine.playPop(700);
                    setActiveIdx(prev => Math.min(prev + 1, milestones.length - 1));
                  }}
                  className="px-4 py-2 rounded-full border border-cream-300/20 hover:border-cream-300 text-cream-300 text-xs font-sans uppercase tracking-wider disabled:opacity-30 disabled:pointer-events-none transition-all"
                >
                  ← PREVIOUS ERA ({milestones[Math.min(activeIdx + 1, milestones.length - 1)].year})
                </button>

                <button
                  disabled={activeIdx === 0}
                  onClick={() => {
                    soundEngine.playPop(850);
                    setActiveIdx(prev => Math.max(prev - 1, 0));
                  }}
                  className="px-4 py-2 rounded-full bg-cream-100 hover:bg-cream-200 text-burgundy-950 font-bold text-xs font-sans uppercase tracking-wider disabled:opacity-30 disabled:pointer-events-none transition-all"
                >
                  NEXT ERA ({milestones[Math.max(activeIdx - 1, 0)].year}) →
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
