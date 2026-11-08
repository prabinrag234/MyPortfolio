// The two professional profiles the portfolio can present — mirrors the two CVs
// (Software Engineer / Software Implementation & Support Engineer).

export type RoleId = 'engineer' | 'support';

export interface Stat {
  value?: number;
  suffix?: string;
  // Non-numeric stats (e.g. "End-to-End") render this text instead of counting up.
  text?: string;
  label: string;
}

export interface Profile {
  id: RoleId;
  label: string;
  title: string;
  focus: string[];
  intro: string;
  heading: { lead: string; accent: string; tail: string };
  summary: string[];
  stats: Stat[];
  competencies: string[];
  cv: string;
}

export const profiles: Record<RoleId, Profile> = {
  engineer: {
    id: 'engineer',
    label: 'Software Engineer',
    title: 'Software Engineer',
    focus: ['Backend (.NET / Node.js)', 'DevOps & CI/CD', 'Cross-Platform Mobile', 'Healthcare Systems'],
    intro:
      'I build backend services, CI/CD pipelines and cross-platform mobile apps — and take them all the way to production.',
    heading: { lead: 'Engineering', accent: 'Reliable', tail: 'Solutions' },
    summary: [
      'Software Engineer with 4+ years of experience in backend services, CI/CD automation, production deployment and cross-platform mobile apps.',
      'Most recently at Tanjer Infosystems LLC (to Oct 2026), deploying and supporting the Heartbeat hospital management system on Apache Tomcat and MySQL Server for client hospitals in the UAE.',
      'Backend and DevOps lead on a portfolio of six collaborative products at ClassMates, including Yoton — a live multi-country hospital management system and EMR whose ASP.NET Core (.NET 10) API exposes ~500 REST endpoints across 47 controllers. Experienced in C# / .NET, Node.js, PostgreSQL, SignalR, Docker and GitHub Actions, with a focus on security and healthcare compliance.',
    ],
    stats: [
      { value: 4, suffix: '+', label: 'Years in Software Engineering' },
      { value: 6, label: 'Products Built at ClassMates' },
      { value: 500, suffix: '+', label: 'REST Endpoints in the Yoton API' },
      { value: 5, label: 'Products Live in Production' },
    ],
    competencies: [
      'ASP.NET Core & Node.js APIs',
      'PostgreSQL & EF Core Data Design',
      'Real-Time Systems (SignalR)',
      'CI/CD with GitHub Actions',
      'Docker & Cloud Deployment',
      'API Security (JWT, RBAC, AES)',
      'Cross-Platform Mobile (Expo, MAUI)',
      'AI Integrations (Gemini, Hugging Face)',
    ],
    cv: '/Prabin-Rag-TK-Software-Engineer-CV.pdf',
  },
  support: {
    id: 'support',
    label: 'Implementation & Support',
    title: 'Software Implementation & Support Engineer',
    focus: ['Hospital Management Systems', 'Apache Tomcat', 'MySQL', 'BIRT'],
    intro:
      'I take hospital clients from server setup through configuration, staff training and go-live — and keep production stable long after.',
    heading: { lead: 'Delivering', accent: 'Smooth', tail: 'Go-Lives' },
    summary: [
      'Software Implementation & Support Engineer with 4+ years in software delivery, most recently deploying and supporting Heartbeat Hospital Management Software at Tanjer Infosystems, Dubai (Aug 2024 – Oct 2026).',
      'Experienced in taking hospital clients from Apache Tomcat and MySQL Server setup through configuration, staff training and go-live — resolving client–server issues, building BIRT reports and integrating peripheral hardware along the way.',
      'A software engineering background in mobile and backend development — including Yoton, a hospital management system and EMR I build and deploy at ClassMates — helps me understand application behaviour, diagnose problems quickly and communicate clearly with both technical teams and hospital staff.',
    ],
    stats: [
      { value: 4, suffix: '+', label: 'Years in Software Delivery' },
      { value: 2, suffix: '+', label: 'Years Implementing HMS' },
      { value: 4, label: 'Database Platforms' },
      // U+2011 non-breaking hyphens keep these from splitting across lines
      { text: 'End‑to‑End', label: 'Setup → Training → Go‑Live' },
    ],
    competencies: [
      'End-to-end HMS implementation & go-live',
      'Apache Tomcat installation & deployment',
      'MySQL Server setup & administration',
      'Client–server troubleshooting',
      'BIRT report development',
      'End-user training & product demos',
      'Peripheral hardware integration',
      'Onsite client support',
    ],
    cv: '/Prabin-Rag-TK-Implementation-Support-Engineer-CV.pdf',
  },
};

export const roleOrder: RoleId[] = ['engineer', 'support'];
