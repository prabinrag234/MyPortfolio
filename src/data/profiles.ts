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
    focus: ['Full-Stack', 'Cross-Platform Mobile', '.NET & MERN', 'Hospital Management Systems'],
    intro:
      'I build cross-platform mobile apps, backend services and full-stack web solutions — and take them all the way to live client deployment.',
    heading: { lead: 'Engineering', accent: 'Reliable', tail: 'Solutions' },
    summary: [
      'Software Engineer with 4+ years of experience building cross-platform mobile apps, backend services and full-stack web solutions, and taking them through to live client deployment.',
      'Currently at Tanjer Infosystems LLC in Dubai, deploying and supporting Heartbeat — a hospital management software hosted on Apache Tomcat with data managed on MySQL Server.',
      'Hands-on across C# / .NET (ASP.NET Core, .NET MAUI, Xamarin.Forms), Flutter and the MERN stack, with strong foundations in API integration, SQL & NoSQL databases and CI/CD. Passionate about turning real-world problems into scalable, reliable software.',
    ],
    stats: [
      { value: 4, suffix: '+', label: 'Years in Software Engineering' },
      { value: 3, label: 'Cross-Platform Mobile Frameworks' },
      { value: 2, suffix: '+', label: 'Years Delivering Heartbeat HMS' },
      { value: 4, label: 'Personal Projects on GitHub' },
    ],
    competencies: [
      'Cross-Platform Mobile Development',
      'Backend Services & REST APIs',
      'Full-Stack Web (MERN)',
      'Third-Party API & SDK Integration',
      'SQL & NoSQL Databases',
      'Apache Tomcat & MySQL Deployment',
      'CI/CD Workflows',
      'BIRT Report Development',
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
      'Software Implementation & Support Engineer with 4+ years in software delivery, currently deploying and supporting Heartbeat Hospital Management Software at Tanjer Infosystems, Dubai.',
      'Experienced in taking hospital clients from Apache Tomcat and MySQL Server setup through configuration, staff training and go-live — resolving client–server issues, building BIRT reports and integrating peripheral hardware along the way.',
      'A software engineering background in mobile and backend development (Xamarin.Forms, .NET MAUI, Flutter) helps me understand application behaviour, diagnose problems quickly and communicate clearly with both technical teams and hospital staff.',
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
