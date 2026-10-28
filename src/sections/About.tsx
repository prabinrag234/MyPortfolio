import { AnimatePresence, motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { TiltCard } from '../components/TiltCard';
import { RoleSwitch } from '../components/RoleSwitch';
import { useRole } from '../context/RoleContext';
import { CheckCircle2, FileBarChart, HeartPulse, Server, Smartphone } from 'lucide-react';

const highlights = [
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Cross-Platform Mobile",
    description: "Android & iOS apps with .NET MAUI, Xamarin.Forms and Flutter, plus native Kotlin & Swift tuning."
  },
  {
    icon: <HeartPulse className="w-6 h-6 text-primary" />,
    title: "Hospital Management Systems",
    description: "Deploying Heartbeat HMS for client hospitals — from Tomcat & MySQL setup through training and go-live."
  },
  {
    icon: <Server className="w-6 h-6 text-primary" />,
    title: "Backend & Full-Stack",
    description: "ASP.NET Core and MERN services with REST APIs, SQL & NoSQL databases and CI/CD pipelines."
  },
  {
    icon: <FileBarChart className="w-6 h-6 text-primary" />,
    title: "Reporting & Support",
    description: "BIRT reports on hospital data, client–server troubleshooting and onsite support with peripheral hardware."
  }
];

export default function About() {
  const { role, profile } = useRole();

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Two sides of the same craft — building software, and making sure it lands."
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <RoleSwitch id="about" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={role}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4">
                  {profile.heading.lead} <span className="text-primary">{profile.heading.accent}</span> {profile.heading.tail}
                </h3>
                <div className="space-y-4 text-muted-foreground text-lg">
                  {profile.summary.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <p>
                    Outside of work, I'm genuinely fascinated by computers — always experimenting with
                    new proof-of-concepts and researching emerging technology, alongside gaming,
                    photography and travel.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard className="bg-background p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core competencies — swaps with the selected profile */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-sm font-bold tracking-[0.25em] uppercase text-muted-foreground mb-6"
          >
            Core Competencies
          </motion.h3>
          <AnimatePresence mode="wait">
            <motion.ul
              key={role}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              viewport={{ once: true }}
              variants={{ show: { transition: { staggerChildren: 0.05 } } }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3"
            >
              {profile.competencies.map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 12, scale: 0.97 },
                    show: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3 bg-background border border-border border-l-4 border-l-teal-500 rounded-xl px-4 py-3 text-sm font-semibold shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
