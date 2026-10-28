import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { TiltCard } from '../components/TiltCard';
import { GraduationCap, Languages } from 'lucide-react';

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "University of Calicut",
    period: "2020 – 2022",
    note: "Post-graduated in Computer Applications with academic excellence."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "University of Calicut",
    period: "2017 – 2020",
    note: "Graduated in Computer Applications, alongside National Service Scheme participation."
  },
  {
    degree: "Diploma in Computer Application",
    institute: "SCOLE-Kerala",
    period: "2016 – 2017",
    note: "Completed Diploma in Computer Application with academic excellence."
  }
];

const languages = [
  { name: "English", level: 5, label: "Fluent" },
  { name: "Malayalam", level: 5, label: "Fluent" },
  { name: "Hindi", level: 3, label: "Working Knowledge" },
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education" subtitle="Academic foundation behind the engineering." />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow h-full block" maxTilt={6}>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{item.degree}</h3>
                <p className="text-primary font-medium text-sm mb-1">{item.institute}</p>
                <p className="text-teal-600 dark:text-teal-400 text-xs font-semibold mb-4">{item.period}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.note}</p>
              </TiltCard>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: education.length * 0.1 }}
          >
            <TiltCard className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow h-full block" maxTilt={6}>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                <Languages className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-4">Languages</h3>
              <ul className="space-y-4">
                {languages.map((lang, row) => (
                  <li key={lang.name}>
                    <div className="flex items-baseline justify-between gap-2 mb-1.5">
                      <span className="font-medium text-sm">{lang.name}</span>
                      <span className="text-xs text-muted-foreground">{lang.label}</span>
                    </div>
                    <div className="flex gap-1.5" aria-label={`${lang.level} out of 5`}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.3 + row * 0.15 + i * 0.06 }}
                          className={`w-2.5 h-2.5 rounded-full ${i < lang.level ? 'bg-primary' : 'bg-primary/15'}`}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
