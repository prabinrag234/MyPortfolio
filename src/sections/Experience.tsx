import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Tanjer Infosystems LLC",
    period: "2024 – Present",
    description: "Spearheading backend systems, client-server reporting solutions, and infrastructure setups.",
    achievements: [
      "Designed and deployed scalable web server architectures & MySQL clusters.",
      "Developed comprehensive BIRT reporting integrations.",
      "Led client onboarding and resolved complex client-server troubleshooting issues.",
    ]
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Claysys Technologies",
    period: "2022 – 2024",
    description: "Focused on cross-platform application development and CI/CD implementation.",
    achievements: [
      "Built resilient cross-platform apps using .NET MAUI and Flutter.",
      "Successfully integrated robust third-party SDKs and RESTful APIs.",
      "Debugged complex iOS & Android app issues to improve reliability.",
      "Implemented streamlined CI/CD pipelines to optimize delivery.",
      "Took independent ownership of critical mobile modules."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Work Experience" subtitle="My professional journey and key responsibilities." />
        
        <div className="mt-16 space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:relative md:left-auto">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              
              {/* Content card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-14 md:ml-0 bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
                  <div>
                    <h3 className="font-bold text-xl">{exp.role}</h3>
                    <h4 className="text-primary font-medium">{exp.company}</h4>
                  </div>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full whitespace-nowrap w-fit">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {exp.description}
                </p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary/60 rounded-full shrink-0"></span>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
