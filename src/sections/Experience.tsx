import { useRef } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { TiltCard } from '../components/TiltCard';
import { useRole } from '../context/RoleContext';
import type { RoleId } from '../data/profiles';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  product?: { name: string; stack: string[] };
  stack?: string[];
  // Bullet points differ per profile, matching the wording of each CV
  achievements: Record<RoleId, string[]>;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Software Implementation Executive",
    company: "Tanjer Infosystems LLC",
    location: "Dubai, UAE",
    period: "Aug 2024 – Oct 2026",
    product: {
      name: "Heartbeat – Hospital Management Software",
      stack: ["Apache Tomcat", "MySQL Server", "BIRT Reporting"],
    },
    achievements: {
      engineer: [
        "Deploy and configure Heartbeat hospital management software for client hospitals, from server setup through go-live.",
        "Install and configure Apache Tomcat servers to host the Heartbeat web application securely in production.",
        "Set up and manage the MySQL Server databases that store Heartbeat's hospital data.",
        "Diagnose and resolve client–server communication issues across end-user machines, Tomcat and MySQL, keeping production applications stable and performant.",
        "Design and customise BIRT reports on Heartbeat data that turn hospital operational data into clear, actionable insights.",
        "Lead technical demonstrations and end-user training, driving smooth adoption of Heartbeat by hospital staff.",
        "Provide onsite deployment support and troubleshooting, including integration of signature pads, printers and tablets.",
      ],
      support: [
        "Implement Heartbeat hospital management software at client healthcare facilities, covering environment setup, configuration, user training and go-live.",
        "Install and configure Apache Tomcat servers to host the Heartbeat web application, including application deployment, service setup and secure access.",
        "Install, configure and maintain MySQL Server databases for Heartbeat, managing database setup, user privileges and data integrity.",
        "Diagnose and resolve client–server communication issues between end-user machines, the Tomcat application server and the MySQL database.",
        "Develop and customise BIRT reports on Heartbeat data, turning hospital operational data into insights for management and departments.",
        "Deliver product demonstrations and end-user training for hospital staff across clinical and administrative departments.",
        "Configure and integrate peripheral hardware used with Heartbeat, such as signature pads, printers and tablets.",
        "Provide onsite client support and troubleshooting during deployments and post-go-live stabilisation.",
      ],
    },
  },
  {
    id: 2,
    role: "Software Engineer L4",
    company: "Claysys Technologies (P) Ltd",
    location: "Kerala, India",
    period: "Mar 2022 – Jul 2024",
    stack: ["Xamarin.Forms", ".NET MAUI", "Flutter", "Kotlin", "Swift", "CI/CD"],
    achievements: {
      engineer: [
        "Engineered cross-platform mobile applications for Android and iOS using Xamarin.Forms, .NET MAUI and Flutter.",
        "Integrated third-party APIs and SDKs to extend application functionality and deliver new client-facing features.",
        "Optimised native Android (Kotlin) and iOS (Swift) components to improve app performance and responsiveness.",
        "Debugged and resolved complex multi-platform issues, strengthening application stability across platforms.",
        "Implemented CI/CD workflows that streamlined the build and deployment process.",
      ],
      support: [
        "Developed cross-platform mobile applications using Xamarin.Forms, .NET MAUI and Flutter.",
        "Integrated third-party APIs and SDKs to extend application functionality.",
        "Optimised Android (Kotlin) and iOS (Swift) components for performance.",
        "Debugged and resolved multi-platform issues to keep applications stable.",
        "Implemented CI/CD workflows to streamline build and deployment.",
      ],
    },
  },
];

export default function Experience() {
  const { role } = useRole();
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 70%', 'end 60%'] });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Work Experience" subtitle="My professional journey and key responsibilities." />

        <div
          ref={timelineRef}
          className="mt-16 space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-background shadow shadow-primary/30 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:relative md:left-auto mt-6">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>

              {/* Content card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-14 md:ml-0">
                <TiltCard className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow block" maxTilt={3}>
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-teal-600 dark:text-teal-400 w-fit">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <div>
                      <h3 className="font-bold text-xl">{exp.role}</h3>
                      <h4 className="text-primary font-medium">{exp.company}</h4>
                      <p className="flex items-center gap-1 text-sm text-muted-foreground mt-0.5">
                        <MapPin className="w-3.5 h-3.5" /> {exp.location}
                      </p>
                    </div>
                  </div>

                  {exp.product && (
                    <div className="mb-4 rounded-xl border-l-4 border-primary bg-primary/5 px-4 py-3">
                      <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-1">Product</p>
                      <p className="font-semibold text-sm mb-2">{exp.product.name}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.product.stack.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 text-xs font-semibold rounded-md bg-background border border-border text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {exp.stack && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {exp.stack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 text-xs font-semibold rounded-md bg-primary/5 border border-primary/10 text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <AnimatePresence mode="wait">
                    <motion.ul
                      key={role}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-2"
                    >
                      {exp.achievements[role].map((item, i) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.04 }}
                          className="flex items-start text-sm"
                        >
                          <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary/60 rounded-full shrink-0"></span>
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </AnimatePresence>
                </TiltCard>
              </div>
            </motion.div>
          ))}

          {/* Scroll-linked progress fill over the static timeline line. Kept as the last
              child so it doesn't shift the odd/even alternation of the cards above. */}
          <motion.div
            aria-hidden
            style={{ scaleY: lineProgress, x: '-50%' }}
            className="absolute !mt-0 top-0 left-5 md:left-1/2 w-0.5 h-full origin-top bg-gradient-to-b from-primary via-purple-500 to-teal-500 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
