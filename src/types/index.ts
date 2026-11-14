export interface Project {
  id: string;
  code: string;
  title: string;
  tagline: string;
  discipline: string;
  category: 'cybersec' | 'ai-hacking' | 'robotics' | 'cloud' | 'iot';
  description: string;
  attackVector: string;
  architecture: string[];
  techStack: string[];
  metrics: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'cybersec' | 'ai-hacking' | 'robotics' | 'cloud' | 'iot' | 'core';
  level: number; // 1 to 5
  proficiency: string; // "Expert" | "Advanced" | "Proficient"
  description: string;
}

export interface Domain {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  highlights: string[];
  tag: string;
}

export interface TimelineItem {
  period: string;
  role: string;
  institution: string;
  location: string;
  bullets: string[];
  tag: string;
}
