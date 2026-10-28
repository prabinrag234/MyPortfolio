import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { TiltCard } from '../components/TiltCard';
import { Briefcase, Folder, Github, HeartPulse, Lock, ShieldCheck } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tech: string[];
  role?: string;
  links?: { label: string; href: string }[];
  privateRepo?: boolean;
  featured?: boolean;
}

const personalProjects: Project[] = [
  {
    title: "Yoton",
    subtitle: "Hospital Management System",
    category: "Web App · Mobile App",
    description: "Full-stack hospital management platform with a companion mobile app, secure authentication, REST APIs and scalable backend services.",
    tech: ["TypeScript", "C#", "REST APIs", "Authentication"],
    links: [
      { label: "Web", href: "https://github.com/classmate-projects/yoton-web" },
      { label: "Mobile", href: "https://github.com/classmate-projects/yoton-mobile" },
    ],
  },
  {
    title: "YourQ",
    subtitle: "Hospital Token Management",
    category: "Queue Management · Backend Logic",
    description: "Digital queue system that helps hospitals manage patient tokens, with backend logic for token generation and queue handling.",
    tech: ["JavaScript", "Queue Logic", "Backend"],
    links: [{ label: "Code", href: "https://github.com/classmate-projects/yourq" }],
  },
  {
    title: "Voyago",
    subtitle: "Smart Tour Guide Platform",
    category: "Mobile App",
    description: "Full-stack travel platform on the MERN stack with user authentication, REST APIs and scalable backend services.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    privateRepo: true,
  },
  {
    title: "CViN",
    subtitle: "CV Desk – Resume Management",
    category: "Recruitment Tech · Data Filtering",
    description: "Resume collection and management platform with filtering tools that help recruiters screen and manage candidate data.",
    tech: ["JavaScript", "Data Filtering", "Recruitment"],
    links: [{ label: "Code", href: "https://github.com/classmate-projects/cvin" }],
  },
];

const professionalProjects: Project[] = [
  {
    title: "Heartbeat",
    subtitle: "Hospital Management Software",
    category: "Tanjer Infosystems · Healthcare",
    description: "A web-based hospital management system that streamlines hospital operations, supports regulatory compliance and enables a paperless healthcare environment — which I deploy, configure and support at client hospitals.",
    tech: ["Apache Tomcat", "MySQL Server", "BIRT Reporting", "Peripheral Integration"],
    role: "Software Implementation Executive — deployment, reporting, training & go-live",
    featured: true,
  },
  {
    title: "Evergreen 3C",
    subtitle: "Content Mobile App",
    category: "Claysys · Mobile",
    description: "A mobile app giving users an alternate way to view FWC content, with all features delivered natively through Android and iOS applications.",
    tech: ["Xamarin.Forms", ".NET MAUI", "Android", "iOS"],
    role: "Mobile App Developer",
  },
  {
    title: "SEG — Southeastern Grocers",
    subtitle: "Retail Support",
    category: "Claysys · Retail",
    description: "Ongoing 24×7 support for an American retail client, the parent company of Winn-Dixie, Harveys and Fresco — covering new features, change requests and bug fixes.",
    tech: ["Cross-Platform", "API Integration", "24x7 Support"],
    role: "Software Engineer",
  },
  {
    title: "Altra – Nextly",
    subtitle: "Digital Banking Migration",
    category: "Claysys · Banking",
    description: "Migration of Altra's digital banking platform onto CUNextGen's Nextly platform, modernizing their online banking experience.",
    tech: ["Digital Banking", "Nextly", ".NET"],
    role: "Software Engineer",
  },
  {
    title: "SCCU – Nextly",
    subtitle: "Online Banking Platform",
    category: "Claysys · Banking",
    description: "A one-stop online banking solution for SCCU, converting their existing platform to the modern Nextly digital banking base.",
    tech: ["Digital Banking", "Nextly", ".NET"],
    role: "Software Engineer",
  },
];

const tabs = [
  { id: 'personal', label: 'Personal Projects', icon: Github, projects: personalProjects },
  { id: 'professional', label: 'Professional Work', icon: Briefcase, projects: professionalProjects },
] as const;

type TabId = (typeof tabs)[number]['id'];

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.featured ? HeartPulse : Folder;

  return (
    <TiltCard
      className="group relative bg-background/60 backdrop-blur-lg border border-border/60 rounded-2xl p-8 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden flex flex-col h-full"
      maxTilt={6}
    >
      {/* Outer Glow Effect Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

      <div className="relative z-10 flex justify-between items-start mb-6 gap-4">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 shadow-inner shrink-0">
          <Icon className="w-7 h-7" />
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          {project.links?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} ${link.label} source on GitHub`}
              className="flex items-center gap-1.5 text-xs font-semibold text-foreground bg-muted hover:bg-primary hover:text-primary-foreground px-3 py-1.5 rounded-full whitespace-nowrap transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              {link.label}
            </a>
          ))}
          {project.privateRepo && (
            <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-muted px-3 py-1.5 rounded-full whitespace-nowrap">
              <Lock className="w-3.5 h-3.5" />
              Private Repo
            </span>
          )}
          {project.role && (
            <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-muted px-3 py-1.5 rounded-full whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5" />
              {project.featured ? 'Current Role' : 'Client Project'}
            </span>
          )}
        </div>
      </div>

      <p className="relative z-10 text-xs font-bold tracking-wider uppercase text-teal-600 dark:text-teal-400 mb-2">
        {project.category}
      </p>
      <h3 className="relative z-10 text-2xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>
      <p className="relative z-10 text-sm font-medium text-muted-foreground mb-4">{project.subtitle}</p>

      <p className="relative z-10 text-muted-foreground mb-6 leading-relaxed">
        {project.description}
      </p>

      {project.role && (
        <div className="relative z-10 mb-6 p-4 bg-background/50 dark:bg-muted/30 rounded-xl border border-border/50 backdrop-blur-sm">
          <p className="text-sm text-foreground">
            <span className="text-primary font-semibold">Role: </span>
            {project.role}
          </p>
        </div>
      )}

      <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/40">
        {project.tech.map(tech => (
          <span key={tech} className="px-3 py-1 bg-primary/5 text-primary text-xs font-semibold rounded-full border border-primary/10">
            {tech}
          </span>
        ))}
      </div>
    </TiltCard>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabId>('personal');
  const current = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <section id="projects" className="py-20 relative bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="Things I've built on my own, and products I've delivered for clients across healthcare, retail and banking." />

        <div className="flex justify-center mb-10">
          <div role="tablist" aria-label="Project type" className="inline-flex p-1 rounded-full border border-border bg-background shadow-sm">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                    isActive ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-tab-pill"
                      className="absolute inset-0 rounded-full bg-primary shadow-md shadow-primary/30"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <tab.icon className="relative hidden sm:block w-4 h-4" />
                  <span className="relative whitespace-nowrap">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={{
              show: { transition: { staggerChildren: 0.08 } },
              exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
            }}
            className="grid md:grid-cols-2 gap-8"
          >
            {current.projects.map((project) => (
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 24, scale: 0.97 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
                }}
                className={project.featured ? 'md:col-span-2' : undefined}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {activeTab === 'personal' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-10"
          >
            <a
              href="https://github.com/classmate-projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
            >
              <Github className="w-4 h-4" /> More on github.com/classmate-projects
            </a>
          </motion.p>
        )}
      </div>
    </section>
  );
}
