import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { TiltCard } from '../components/TiltCard';
import { Code, Languages, MonitorSmartphone, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Core Skills",
    icon: <Code className="w-5 h-5" />,
    skills: ["MAUI", "Xamarin.Forms", "Xamarin", "Flutter", "C#", "Java", "C++", "C", "MVVM", "MVC", "DevOps", "PostgreSQL", "jQuery"]
  },
  {
    title: "IDEs",
    icon: <MonitorSmartphone className="w-5 h-5" />,
    skills: ["Visual Studio", "Visual Studio Code", "Android Studio", "MySQL Workbench"]
  },
  {
    title: "Familiar Software",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Microsoft 365", "Postman", "Notepad++", "Eclipse Neon"]
  },
  {
    title: "Spoken Languages",
    icon: <Languages className="w-5 h-5" />,
    skills: ["English", "Malayalam", "Hindi", "Tamil"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technical Skills" subtitle="Technologies and tools I use to build cross-platform applications." />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow h-full" maxTilt={5}>
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
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
