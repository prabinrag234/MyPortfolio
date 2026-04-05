import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Code2, Server, Smartphone, Users } from 'lucide-react';

const highlights = [
  {
    icon: <Code2 className="w-6 h-6 text-primary" />,
    title: "Full-Stack Expertise",
    description: "Building end-to-to applications from scalable robust backends to interactive dynamic frontends."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Cross-Platform",
    description: "Crafting seamless mobile experiences across iOS and Android using modern cross-platform frameworks."
  },
  {
    icon: <Server className="w-6 h-6 text-primary" />,
    title: "DevOps & Cloud",
    description: "Designing and maintaining agile CI/CD pipelines, containerized deployments, and robust server architectures."
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Agile Collaboration",
    description: "Excelling in dynamic team environments and taking independent ownership of critical modules."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Me" 
          subtitle="A passionate Software Engineer with a track record of driving impact." 
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
               Engineering <span className="text-primary">Reliable</span> Solutions
            </h3>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                As a versatile Software Engineer based in the UAE, I bring a wealth of diverse experience spanning from healthcare applications to enterprise IT infrastructures. 
              </p>
              <p>
                My fundamental philosophy is rooted in architectural resilience and clean code. I specialize in developing scalable backend systems, intuitive scalable cross-platform mobile apps, and robust API integrations that power modern businesses.
              </p>
              <p>
                Whether I'm independently spearheading core module development or collaborating closely within an agile product team, my focus remains constant: delivering high-performance software that solves real-world challenges while ensuring an exceptional user experience.
              </p>
            </div>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
