import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { TiltCard } from '../components/TiltCard';
import { HeartPulse, Smartphone, Users, Wrench } from 'lucide-react';

const highlights = [
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Mobile-First Development",
    description: "Cross-platform iOS & Android apps built with Xamarin.Forms, .NET MAUI and Flutter."
  },
  {
    icon: <HeartPulse className="w-6 h-6 text-primary" />,
    title: "Healthcare Systems (HIS)",
    description: "Implementation, end-user training, workflow analysis and data migration for Hospital Information Systems."
  },
  {
    icon: <Wrench className="w-6 h-6 text-primary" />,
    title: "Full Software Lifecycle",
    description: "From MVVM/MVC architecture and SQL-backed BIRT reporting to post-go-live support and stabilization."
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Client-Facing Collaboration",
    description: "Gap analysis, structured training and cross-functional coordination with clinical and technical teams."
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
                I'm a Software Engineer currently working as a Software Implementation Engineer at
                Tanjer Infosystems LLC in the UAE, where I support and deploy a Hospital
                Information System (HIS) across OPD, IPD, Pharmacy, Laboratory and Billing
                departments — from workflow analysis and data migration to post-go-live
                stabilization and RCM insurance processes.
              </p>
              <p>
                Before that, at Claysys Technologies, I designed and built cross-platform mobile
                apps with Xamarin.Forms, .NET MAUI and Flutter for clients across retail, banking
                and telecom. Mobile development is where I feel most at home, but I enjoy the full
                stack — web apps, databases, and the systems that tie them together.
              </p>
              <p>
                Outside of work, I'm the type of person who is genuinely fascinated by computers —
                always experimenting with new proof-of-concepts and researching emerging
                technology, alongside gaming, photography and travel.
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
      </div>
    </section>
  );
}
