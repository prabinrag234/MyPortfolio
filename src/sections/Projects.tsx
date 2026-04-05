import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: "Enterprise Reporting Dashboard",
    description: "A comprehensive scalable data visualization and reporting platform for enterprise clients. Allowed dynamic data filtering and automated report generation.",
    tech: ["MySQL", "BIRT", "ASP.NET Core", "React"],
    achievements: "Reduced reporting times by 40% and improved data accuracy.",
    github: "#",
    live: "#"
  },
  {
    title: "Cross-Platform Retail App",
    description: "A seamless e-commerce mobile application built for dual platforms, featuring real-time inventory synchronization, push notifications, and payment gateways.",
    tech: ["Flutter", "Dart", "Firebase", "Node.js"],
    achievements: "Achieved over 10,000 active users with a 99.9% crash-free rate.",
    github: "#",
    live: "#"
  },
  {
    title: "API Integration Gateway",
    description: "A secure, high-performance middleware service designed to unify various third-party APIs into a single standardized REST interface.",
    tech: ["C#", ".NET Core", "Redis", "Docker"],
    achievements: "Handled over 1 million requests securely per day with sub-50ms latency.",
    github: "#",
    live: "#"
  },
  {
    title: "Automated CI/CD Pipeline Setup",
    description: "An end-to-end DevOps automated pipeline template designed to lint, test, build, and deploy containerized microservices dynamically.",
    tech: ["Azure DevOps", "Docker", "Git", "Bash"],
    achievements: "Cut deployment times by 60% and eliminated manual regression errors.",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="A showcase of recent software and architecture solutions." />
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-background/40 backdrop-blur-lg border border-border/50 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
            >
              {/* Outer Glow Effect Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
              
              <div className="relative z-10 flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 shadow-inner">
                  <Folder className="w-7 h-7" />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="relative z-10 text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="relative z-10 text-muted-foreground mb-6 leading-relaxed relative z-10 line-clamp-3">
                {project.description}
              </p>
              
              <div className="relative z-10 mb-6 p-4 bg-background/50 dark:bg-muted/30 rounded-xl border border-border/50 backdrop-blur-sm">
                <p className="text-sm text-foreground">
                  <span className="text-primary font-semibold">Impact: </span> 
                  {project.achievements}
                </p>
              </div>
              
              <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/40">
                {project.tech.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-primary/5 text-primary text-xs font-semibold rounded-full border border-primary/10">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
