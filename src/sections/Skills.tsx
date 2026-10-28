import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { TiltCard } from '../components/TiltCard';
import { Cloud, Code2, Database, FileBarChart, GitBranch, Globe, Printer, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["C#", "Java", "JavaScript", "Python", "Dart", "SQL", "HTML5", "CSS3"]
  },
  {
    title: "Backend & Web",
    icon: <Globe className="w-5 h-5" />,
    skills: ["ASP.NET Core", "Node.js", "Express.js", "React.js", "REST APIs"]
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-5 h-5" />,
    skills: [".NET MAUI", "Xamarin.Forms", "Flutter", "Android (Kotlin)", "iOS (Swift)"]
  },
  {
    title: "Application Servers & Hosting",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["Apache Tomcat", "Vercel", "Railway", "Supabase", "Netlify"]
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["MySQL Server", "MSSQL", "PostgreSQL", "MongoDB", "Supabase"]
  },
  {
    title: "DevOps & Tools",
    icon: <GitBranch className="w-5 h-5" />,
    skills: ["Git", "Docker", "Azure DevOps", "CI/CD Pipelines"]
  },
  {
    title: "Reporting",
    icon: <FileBarChart className="w-5 h-5" />,
    skills: ["BIRT (Business Intelligence & Reporting Tools)"]
  },
  {
    title: "Hardware Integration",
    icon: <Printer className="w-5 h-5" />,
    skills: ["Signature Pads", "Printers", "Tablets"]
  }
];

const marqueeRows = [
  ["C#", ".NET MAUI", "Xamarin.Forms", "Flutter", "ASP.NET Core", "React.js", "Node.js", "Express.js", "Kotlin", "Swift", "Dart"],
  ["Apache Tomcat", "MySQL Server", "PostgreSQL", "MongoDB", "MSSQL", "Supabase", "BIRT", "Docker", "Azure DevOps", "Git", "Vercel"],
];

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {/* Two identical tracks back-to-back so the loop is seamless */}
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === 1}
          className={`flex shrink-0 gap-3 pr-3 animate-marquee motion-reduce:animate-none ${reverse ? '[animation-direction:reverse]' : ''}`}
        >
          {items.map((item) => (
            <li
              key={item}
              className="whitespace-nowrap px-4 py-2 rounded-full border border-border bg-background/70 text-sm font-semibold text-muted-foreground shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technical Skills" subtitle="From mobile apps and APIs to application servers, databases and the hardware on the hospital floor." />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3 mb-12"
        >
          {marqueeRows.map((row, i) => (
            <Marquee key={i} items={row} reverse={i % 2 === 1} />
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
            >
              <TiltCard className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow h-full" maxTilt={5}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-primary/10 text-primary rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-base leading-tight">{category.title}</h3>
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
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
