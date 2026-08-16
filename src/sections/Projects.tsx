import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { TiltCard } from '../components/TiltCard';
import { Folder, ShieldCheck } from 'lucide-react';

const projects = [
  {
    title: "HEARTBEAT (HIS)",
    description: "A web-based Hospital Information Management System that streamlines hospital operations, ensures regulatory compliance and promotes collaboration — enabling a paperless, high-ROI healthcare environment.",
    tech: ["HIS", "SQL", "BIRT Reporting", "Workflow Automation"],
    role: "Implementation Engineer — support, training & deployment",
  },
  {
    title: "Evergreen 3C",
    description: "A mobile app giving users an alternate way to view FWC content, with all features delivered natively through Android and iOS applications.",
    tech: ["Xamarin.Forms", ".NET MAUI", "Android", "iOS"],
    role: "Mobile App Developer",
  },
  {
    title: "SEG — Southeastern Grocers",
    description: "Ongoing 24×7 support for an American retail client, the parent company of Winn-Dixie, Harveys and Fresco — covering new features, change requests and bug fixes.",
    tech: ["Cross-Platform", "API Integration", "24x7 Support"],
    role: "Software Engineer",
  },
  {
    title: "Altra – Nextly",
    description: "Migration of Altra's digital banking platform onto CUNextGen's Nextly platform, modernizing their online banking experience.",
    tech: ["Digital Banking", "Nextly", ".NET"],
    role: "Software Engineer",
  },
  {
    title: "SCCU – Nextly",
    description: "A one-stop online banking solution for SCCU, converting their existing platform to the modern Nextly digital banking base.",
    tech: ["Digital Banking", "Nextly", ".NET"],
    role: "Software Engineer",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="Client and enterprise projects I've delivered across healthcare, retail and banking." />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard
                className="group relative bg-background/40 backdrop-blur-lg border border-border/50 rounded-2xl p-8 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden block h-full"
                maxTilt={6}
              >
                {/* Outer Glow Effect Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

                <div className="relative z-10 flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 shadow-inner">
                    <Folder className="w-7 h-7" />
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-muted px-3 py-1.5 rounded-full whitespace-nowrap">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Client Project
                  </span>
                </div>

                <h3 className="relative z-10 text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="relative z-10 text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="relative z-10 mb-6 p-4 bg-background/50 dark:bg-muted/30 rounded-xl border border-border/50 backdrop-blur-sm">
                  <p className="text-sm text-foreground">
                    <span className="text-primary font-semibold">Role: </span>
                    {project.role}
                  </p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/40">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-primary/5 text-primary text-xs font-semibold rounded-full border border-primary/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
