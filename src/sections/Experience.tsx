import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { TiltCard } from '../components/TiltCard';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Software Implementation Engineer",
    company: "Tanjer Infosystems LLC",
    period: "Aug 2024 – Present",
    description: "On-site & remote support and deployment of a Hospital Information System (HIS) across UAE healthcare facilities.",
    achievements: [
      "Provided on-site and remote technical support for HIS users across OPD, IPD, Pharmacy, Laboratory and Billing.",
      "Conducted structured end-user training for doctors, nurses, receptionists, pharmacists and billing staff.",
      "Performed workflow and gap analysis prior to system implementation and deployment.",
      "Managed data migration of patient records, master data and transactional healthcare data; assisted with SQL-based troubleshooting and reporting.",
      "Designed management reports with BIRT and PowerPoint; coordinated lab, diagnostic device and barcode system integrations.",
      "Supported UAE regulatory compliance and managed RCM insurance claim submission, validation, rejection analysis and follow-ups.",
    ]
  },
  {
    id: 2,
    role: "Software Engineer – L4",
    company: "Claysys Technologies (P) Limited",
    period: "Mar 2022 – Jul 2024",
    description: "Cross-platform mobile application development for clients in retail, banking and telecom.",
    achievements: [
      "Designed, developed and unit-tested cross-platform mobile apps using Xamarin.Forms, .NET MAUI and Flutter.",
      "Integrated third-party APIs and SDKs; debugged and resolved issues across iOS and Android.",
      "Applied working knowledge of native iOS (Swift) and Android (Kotlin) for performance optimization.",
      "Took independent, end-to-end ownership of assigned project modules and delivered without depending on the lead.",
      "Collaborated with the team to resolve issues in the lead's absence and explained features/issues to leads and clients.",
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
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-14 md:ml-0">
                <TiltCard className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow block" maxTilt={4}>
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
                </TiltCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
