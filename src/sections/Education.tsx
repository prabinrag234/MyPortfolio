import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { TiltCard } from '../components/TiltCard';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Master of Computer Application",
    institute: "University of Calicut",
    period: "2020 – 2022",
    note: "Post-graduated in Computer Application with academic excellence."
  },
  {
    degree: "Bachelor of Computer Application",
    institute: "University of Calicut",
    period: "2017 – 2020",
    note: "Graduated in Computer Application, alongside National Service Scheme participation."
  },
  {
    degree: "Diploma in Computer Application",
    institute: "SCOLE-Kerala",
    period: "2016 – 2017",
    note: "Completed Diploma in Computer Application with academic excellence."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education" subtitle="Academic foundation behind the engineering." />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
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
                <p className="text-muted-foreground text-xs font-medium mb-4">{item.period}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.note}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
