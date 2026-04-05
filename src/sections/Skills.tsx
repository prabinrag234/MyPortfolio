import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Code, Database, Layout, Settings, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-5 h-5" />,
    skills: ["C#", "Dart", "Java", "JavaScript", "SQL", "PHP", "HTML", "CSS"]
  },
  {
    title: "Frameworks & Platforms",
    icon: <Layout className="w-5 h-5" />,
    skills: [".NET MAUI", "Xamarin.Forms", "Flutter", "ASP.NET Core", "Node.js"]
  },
  {
    title: "Tools & DevOps",
    icon: <Settings className="w-5 h-5" />,
    skills: ["Git", "Docker", "Azure DevOps", "CI/CD pipelines"]
  },
  {
    title: "Database & Reporting",
    icon: <Database className="w-5 h-5" />,
    skills: ["MySQL", "MSSQL", "BIRT"]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-5 h-5" />,
    skills: ["Android (Kotlin)", "iOS (Swift)", "Cross-platform"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technical Skills" subtitle="Technologies and tools I use to build scalable applications." />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow bg-background"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-primary/10 text-primary rounded-lg">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted text-muted-foreground text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors cursor-default border border-border/50"
                  >
                    {skill}
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
