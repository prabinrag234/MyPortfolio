import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Database, FileBarChart, Laptop, Presentation, Printer, Rocket, Server, Settings2 } from 'lucide-react';

const steps = [
  {
    icon: Server,
    title: "Environment Setup",
    description: "Install and configure Apache Tomcat and MySQL Server on the client's infrastructure."
  },
  {
    icon: Settings2,
    title: "Deploy & Configure",
    description: "Deploy Heartbeat, set up services, secure access and database user privileges."
  },
  {
    icon: Printer,
    title: "Reports & Hardware",
    description: "Build BIRT reports and integrate signature pads, printers and tablets."
  },
  {
    icon: Presentation,
    title: "Train & Demo",
    description: "Product demos and end-user training across clinical and administrative departments."
  },
  {
    icon: Rocket,
    title: "Go-Live & Support",
    description: "Onsite go-live support, client–server troubleshooting and post-go-live stabilisation."
  }
];

const architecture = [
  { icon: Laptop, title: "End-User Devices", detail: "Workstations, tablets, signature pads & printers" },
  { icon: Server, title: "Apache Tomcat", detail: "Hosts the Heartbeat web application" },
  { icon: Database, title: "MySQL Server", detail: "Hospital data, privileges & integrity" },
  { icon: FileBarChart, title: "BIRT Reports", detail: "Operational insights for management" },
];

// A link between two architecture nodes with animated "packets" travelling along it:
// vertical on small screens, horizontal from md up.
function Connector({ bidirectional = false }: { bidirectional?: boolean }) {
  const packet =
    'absolute w-2.5 h-2.5 rounded-full shadow-[0_0_10px_2px] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:top-1/2 md:-translate-y-1/2 animate-packet-y md:animate-packet-x motion-reduce:hidden';

  return (
    <div aria-hidden className="relative flex items-center justify-center h-12 md:h-auto md:w-12 lg:w-20 shrink-0">
      <div className="relative w-0.5 h-full md:w-full md:h-0.5 bg-border rounded-full">
        <span className={`${packet} bg-primary shadow-primary/60`} />
        {bidirectional && (
          <span className={`${packet} bg-teal-500 shadow-teal-500/60 [animation-direction:reverse] [animation-delay:-1.2s]`} />
        )}
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How I Deliver"
          subtitle="From an empty server to a hospital running live on Heartbeat — end to end."
        />

        {/* Implementation pipeline */}
        <div className="relative mt-12">
          {/* Track + animated fill: horizontal on lg, vertical below */}
          <div aria-hidden className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-border" />
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 origin-left bg-gradient-to-r from-primary via-purple-500 to-teal-500"
          />
          <div aria-hidden className="lg:hidden absolute left-7 -ml-px top-7 bottom-7 w-0.5 bg-border" />
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="lg:hidden absolute left-7 -ml-px top-7 bottom-7 w-0.5 origin-top bg-gradient-to-b from-primary via-purple-500 to-teal-500"
          />

          <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.22 }}
                className="flex lg:flex-col items-start lg:items-center gap-4 lg:text-center"
              >
                <div className="relative z-10 w-14 h-14 shrink-0 rounded-2xl bg-background border-2 border-primary flex items-center justify-center text-primary shadow-lg shadow-primary/20">
                  <step.icon className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-teal-500 text-white text-xs font-bold flex items-center justify-center shadow">
                    {index + 1}
                  </span>
                </div>
                <div className="pt-1 lg:pt-0">
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Production architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-3xl border border-border bg-muted/30 p-6 sm:p-10"
        >
          <div className="text-center mb-8">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-2">In Production</p>
            <h3 className="text-xl sm:text-2xl font-bold">The Heartbeat stack I deploy and keep healthy</h3>
          </div>

          <div className="flex flex-col md:flex-row items-stretch">
            {architecture.map((node, index) => (
              <div key={node.title} className="contents">
                {index > 0 && <Connector bidirectional={index < 3} />}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.15 }}
                  className={`md:flex-1 md:basis-0 flex md:flex-col items-center gap-4 md:gap-3 md:text-center rounded-2xl border bg-background p-4 md:p-5 shadow-sm ${
                    index === 1 ? 'border-primary/50 shadow-primary/10' : 'border-border'
                  }`}
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <node.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">{node.title}</p>
                    <p className="text-xs text-muted-foreground leading-snug mt-0.5">{node.detail}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
