import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { TiltCard } from '../components/TiltCard';
import {
  Briefcase,
  CheckCircle2,
  ExternalLink,
  FileSearch,
  Folder,
  GraduationCap,
  HeartPulse,
  LayoutGrid,
  Lock,
  Plane,
  ShieldCheck,
  Ticket,
  Video,
  type LucideIcon,
} from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  category: string;
  icon: LucideIcon;
  description: string;
  highlights?: string[];
  tech: string[];
  role?: string;
  status?: { label: string; live: boolean };
  badge?: string;
  url?: string;
  // ClassMates source code is private; say so instead of linking to a 404
  privateRepo?: boolean;
  featured?: boolean;
}

const classmatesProducts: Project[] = [
  {
    title: "Yoton",
    subtitle: "Hospital & Clinic Management System with EMR",
    category: "HealthTech · EMR · Real-Time",
    icon: HeartPulse,
    description: "A hospital and clinic management system with a built-in EMR. Reception, doctors, nurses, lab, radiology, pharmacy, stores and billing each work in role-based modules on the staff portal, while patients book appointments, read results and chat with their care team from a biometric-locked mobile app.",
    highlights: [
      "Architected the ASP.NET Core (.NET 10) API: ~500 REST endpoints across 47 controllers covering EMR, nursing, lab, radiology, pharmacy, inventory, billing and compliance.",
      "Multi-tenant data isolation with EF Core global query filters, plus two-layer access control that syncs to clients in real time.",
      "Country-aware region engine for Qatar, UAE and India, including 17 regulator KPI reports exported to Excel for Qatar MoPH.",
      "Field-level AES encryption of PII, rotating refresh tokens with reuse detection, rate limiting and a redacted audit log.",
      "~160 SignalR real-time events, staff–patient chat and a FEFO lot-based inventory ledger.",
      "Rewrote the patient app in React Native (Expo) with biometric lock; GitHub Actions builds signed Android releases on every version tag.",
    ],
    tech: [".NET 10", "ASP.NET Core", "EF Core 10", "PostgreSQL", "SignalR", "React Native (Expo)", "Docker", "Render", "GitHub Actions"],
    status: { label: "Live · v2.7.83", live: true },
    url: "https://yoton-health.vercel.app",
    privateRepo: true,
    featured: true,
  },
  {
    title: "Voyago",
    subtitle: "Smart Travel Platform with AI Image Moderation",
    category: "Travel · Mobile · AI Moderation",
    icon: Plane,
    description: "A travel companion that shows what's worth visiting nearby, tracks each trip and lets travellers report hidden places with a photo — every photo is screened by a self-hosted AI model before a reviewer approves it.",
    highlights: [
      "Built the ASP.NET Core 9 API at the centre of four repositories: single-use rotating refresh tokens, Haversine nearby search, trips, tours and bookings.",
      "Self-hosted AI moderation microservice (FastAPI + Hugging Face Vision Transformer) with zero per-image cost and fail-closed behaviour.",
      "Expo traveller app with native maps and geotagged uploads; API containerised with Docker on Render.",
    ],
    tech: ["ASP.NET Core 9", "EF Core", "PostgreSQL", "FastAPI", "Hugging Face", "React Native (Expo)", "Docker", "Render"],
    status: { label: "Live", live: true },
    privateRepo: true,
  },
  {
    title: "CViN",
    subtitle: "AI-Powered Resume Intake & Talent Pool",
    category: "HR Tech · AI Screening · Email Intake",
    icon: FileSearch,
    description: "Turns a recruiting inbox and a folder of CVs into a searchable, ranked talent pool. Resumes arrive by upload or straight from a mailbox, Google Gemini drafts a structured profile, and a recruiter confirms it.",
    highlights: [
      "Google Gemini extracts 10 structured fields from PDF/DOCX resumes through a 5-model fallback chain, so intake never stops.",
      "IMAP mailbox sync with a capped review queue and duplicate prevention.",
      "Admin, Recruiter and Viewer roles, search/ranking APIs and an ASP.NET Core 10 twin mirroring every route.",
    ],
    tech: ["Next.js", "Supabase", "Google Gemini", "IMAP", "ASP.NET Core 10", "EF Core"],
    status: { label: "Live", live: true },
    privateRepo: true,
  },
  {
    title: "Ztution",
    subtitle: "Virtual Classroom Platform",
    category: "EdTech · Live Video · Stripe Billing",
    icon: Video,
    description: "A live virtual classroom for independent tutors and their students. Teachers run classes, go live over WebRTC, share materials and grade assignments; students join, chat, submit work and subscribe through Stripe.",
    highlights: [
      "Stripe subscriptions end to end: Checkout, Customer Portal and signed webhooks.",
      "Role permission matrix and private storage served through signed URLs.",
      "Co-built the 47-handler API and WebRTC live classes over Supabase Realtime.",
    ],
    tech: ["Next.js", "Supabase", "WebRTC", "Stripe", "ASP.NET Core 10"],
    status: { label: "Live", live: true },
    privateRepo: true,
  },
  {
    title: "YourQ",
    subtitle: "Token Queue Management System",
    category: "Queue Management · Live Board · Operations",
    icon: Ticket,
    description: "A browser-only token queue for pharmacies, clinics and service counters. Customers tap a service to take a number, desks call the next one, and a shared \"Now Serving\" board announces it with a chime.",
    highlights: [
      "Per-service FIFO queues shared by up to 20 desks, with numbering reset at local midnight and no scheduler.",
      "Free/Pro plans with automatic downgrade on expiry, and daily CSV reports.",
      "Portable storage (Supabase, PostgreSQL or JSON file), deployed serverless on Netlify Functions and as a Render service.",
    ],
    tech: ["Node.js", "Express", "Supabase", "PostgreSQL", "Netlify Functions", "Render", "ASP.NET Core 10"],
    status: { label: "Live", live: true },
    privateRepo: true,
  },
  {
    title: "AcadExa",
    subtitle: "School Management Platform",
    category: "EdTech · School Management",
    icon: GraduationCap,
    description: "A school management platform whose admin console already runs students, teachers, classes, attendance and fees on a live API, with a companion iOS and Android app.",
    highlights: [
      "ASP.NET Core API for students, teachers, classes, attendance and fees, with code-first EF Core migrations.",
      "Expo mobile app with a live school snapshot, replacing an earlier .NET MAUI prototype.",
    ],
    tech: [".NET 10", "EF Core 10", "PostgreSQL", "React Native (Expo)"],
    status: { label: "In development", live: false },
    privateRepo: true,
  },
  {
    title: "ClassMates Showcase",
    subtitle: "Product Showcase API",
    category: "Platform · Testing · CI",
    icon: LayoutGrid,
    description: "The home of every ClassMates product: visitors browse the line-up and request quotations, while admins manage the catalogue without a deploy.",
    highlights: [
      "Re-implemented the showcase API on ASP.NET Core with identical contracts: cookie auth, bcrypt and admin/member roles.",
      "49 xUnit integration tests on in-memory SQLite, run by GitHub Actions CI on every push and pull request.",
    ],
    tech: [".NET 10", "ASP.NET Core", "EF Core 10", "PostgreSQL", "xUnit", "GitHub Actions"],
    status: { label: "In development", live: false },
    privateRepo: true,
  },
];

const professionalProjects: Project[] = [
  {
    title: "Heartbeat",
    subtitle: "Hospital Management Software",
    category: "Tanjer Infosystems · Healthcare",
    icon: HeartPulse,
    description: "A web-based hospital management system that streamlines hospital operations, supports regulatory compliance and enables a paperless healthcare environment — which I deployed, configured and supported at client hospitals in the UAE.",
    tech: ["Apache Tomcat", "MySQL Server", "BIRT Reporting", "Peripheral Integration"],
    role: "Software Implementation Executive — deployment, reporting, training & go-live",
    badge: "Aug 2024 – Oct 2026",
    featured: true,
  },
  {
    title: "Evergreen 3C",
    subtitle: "Content Mobile App",
    category: "Claysys · Mobile",
    icon: Folder,
    description: "A mobile app giving users an alternate way to view FWC content, with all features delivered natively through Android and iOS applications.",
    tech: ["Xamarin.Forms", ".NET MAUI", "Android", "iOS"],
    role: "Mobile App Developer",
    badge: "Client Project",
  },
  {
    title: "SEG — Southeastern Grocers",
    subtitle: "Retail Support",
    category: "Claysys · Retail",
    icon: Folder,
    description: "Ongoing 24×7 support for an American retail client, the parent company of Winn-Dixie, Harveys and Fresco — covering new features, change requests and bug fixes.",
    tech: ["Cross-Platform", "API Integration", "24x7 Support"],
    role: "Software Engineer",
    badge: "Client Project",
  },
  {
    title: "Altra – Nextly",
    subtitle: "Digital Banking Migration",
    category: "Claysys · Banking",
    icon: Folder,
    description: "Migration of Altra's digital banking platform onto CUNextGen's Nextly platform, modernizing their online banking experience.",
    tech: ["Digital Banking", "Nextly", ".NET"],
    role: "Software Engineer",
    badge: "Client Project",
  },
  {
    title: "SCCU – Nextly",
    subtitle: "Online Banking Platform",
    category: "Claysys · Banking",
    icon: Folder,
    description: "A one-stop online banking solution for SCCU, converting their existing platform to the modern Nextly digital banking base.",
    tech: ["Digital Banking", "Nextly", ".NET"],
    role: "Software Engineer",
    badge: "Client Project",
  },
];

const tabs = [
  { id: 'classmates', label: 'ClassMates Products', icon: LayoutGrid, projects: classmatesProducts },
  { id: 'professional', label: 'Professional Work', icon: Briefcase, projects: professionalProjects },
] as const;

type TabId = (typeof tabs)[number]['id'];

const classmatesStats = [
  { value: '6', label: 'Products' },
  { value: '5', label: 'Live in production' },
  { value: '16', label: 'Repositories' },
];

function StatusBadge({ status }: { status: NonNullable<Project['status']> }) {
  return (
    <span
      className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap ${
        status.live
          ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
          : 'bg-amber-500/10 text-amber-700 dark:text-amber-400'
      }`}
    >
      <span className="relative flex h-2 w-2">
        {status.live && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${status.live ? 'bg-emerald-500' : 'bg-amber-500'}`} />
      </span>
      {status.label}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <TiltCard
      className="group relative bg-background/60 backdrop-blur-lg border border-border/60 rounded-2xl p-6 sm:p-8 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden flex flex-col h-full"
      maxTilt={project.featured ? 3 : 6}
    >
      {/* Outer Glow Effect Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

      <div className="relative z-10 flex justify-between items-start mb-6 gap-4">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 shadow-inner shrink-0">
          <Icon className="w-7 h-7" />
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          {project.status && <StatusBadge status={project.status} />}
          {project.badge && (
            <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-muted px-3 py-1.5 rounded-full whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5" />
              {project.badge}
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

      {project.highlights && (
        <div className="relative z-10 mb-6">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-3">What I built</p>
          <ul className={`grid gap-x-8 gap-y-2.5 ${project.featured ? 'md:grid-cols-2' : ''}`}>
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-relaxed">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-teal-500 shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.role && (
        <div className="relative z-10 mb-6 p-4 bg-background/50 dark:bg-muted/30 rounded-xl border border-border/50 backdrop-blur-sm">
          <p className="text-sm text-foreground">
            <span className="text-primary font-semibold">Role: </span>
            {project.role}
          </p>
        </div>
      )}

      <div className="relative z-10 mt-auto pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map(tech => (
            <span key={tech} className="px-3 py-1 bg-primary/5 text-primary text-xs font-semibold rounded-full border border-primary/10">
              {tech}
            </span>
          ))}
        </div>
        {(project.url || project.privateRepo) && (
          <div className="flex items-center gap-2">
            {project.privateRepo && (
              <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground whitespace-nowrap">
                <Lock className="w-3.5 h-3.5" />
                Private repo
              </span>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-primary-foreground bg-primary hover:bg-primary/90 px-3.5 py-2 rounded-full whitespace-nowrap shadow-sm shadow-primary/30 transition-colors"
              >
                Live demo <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </TiltCard>
  );
}

function ClassMatesIntro() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
      }}
      className="md:col-span-2 relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-teal-500/10 p-6 sm:p-8"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-2">Apr 2025 – Present</p>
          <h3 className="text-2xl font-bold mb-2">ClassMates — Collaborative Product Portfolio</h3>
          <p className="text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Backend, DevOps &amp; Mobile Engineer.</span>{' '}
            Responsible for APIs, databases, CI/CD, deployment and cross-platform apps, working alongside a
            frontend developer on the web interfaces.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground mt-3">
            <Lock className="w-3.5 h-3.5" />
            Source code is private — happy to walk through it in an interview.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 shrink-0">
          {classmatesStats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-background/70 border border-border/60 px-4 py-3 text-center min-w-[6rem]">
              <p className="text-2xl font-extrabold text-primary">{stat.value}</p>
              <p className="text-[11px] font-medium text-muted-foreground leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabId>('classmates');
  const current = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <section id="projects" className="py-20 relative bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="Products I build and run at ClassMates, and systems I've delivered for clients across healthcare, retail and banking." />

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
            {activeTab === 'classmates' && <ClassMatesIntro />}
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
      </div>
    </section>
  );
}
