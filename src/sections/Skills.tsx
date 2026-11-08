import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { TiltCard } from '../components/TiltCard';
import { Cloud, Code2, Database, FlaskConical, Globe, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["C#", "JavaScript", "TypeScript", "Python", "Dart", "Java", "SQL", "HTML5", "CSS3"]
  },
  {
    title: "Backend",
    icon: <Globe className="w-5 h-5" />,
    skills: ["ASP.NET Core Web API (.NET 9/10)", "Entity Framework Core", "SignalR", "Node.js", "Express.js", "FastAPI", "REST API design", "OpenAPI/Swagger", "Background services"]
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-5 h-5" />,
    skills: ["React Native (Expo)", ".NET MAUI", "Xamarin.Forms", "Flutter", "Android (Kotlin)", "iOS (Swift)"]
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["PostgreSQL", "MySQL Server", "MSSQL", "MongoDB", "Supabase (Postgres, Auth, Storage, Realtime)", "SQLite"]
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["GitHub Actions", "Azure DevOps", "Docker", "Render", "Vercel", "Netlify (serverless)", "Railway", "Apache Tomcat", "CI/CD pipelines", "Git"]
  },
  {
    title: "Security",
    icon: <ShieldCheck className="w-5 h-5" />,
    skills: ["JWT with rotating refresh tokens", "Cookie/session auth", "RBAC", "AES field-level encryption", "bcrypt", "Rate limiting", "Audit logging"]
  },
  {
    title: "Integrations & AI",
    icon: <Sparkles className="w-5 h-5" />,
    skills: ["Stripe (Checkout, webhooks)", "Google Gemini", "Hugging Face Transformers", "WebRTC", "IMAP", "Brevo email"]
  },
  {
    title: "Testing & Reporting",
    icon: <FlaskConical className="w-5 h-5" />,
    skills: ["xUnit integration testing", "Jest", "BIRT reporting", "ClosedXML (Excel reports)"]
  }
];

const marqueeRows = [
  ["C#", "ASP.NET Core", "EF Core", "SignalR", "Node.js", "Express.js", "FastAPI", "React Native", "Expo", ".NET MAUI", "Flutter", "TypeScript"],
  ["PostgreSQL", "MySQL Server", "Supabase", "MongoDB", "Docker", "GitHub Actions", "Render", "Vercel", "Stripe", "Google Gemini", "Hugging Face", "WebRTC"],
];

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {/* Two identical tracks back-to-back so the loop is seamless */}
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === 1}
          className={`flex shrink-0 gap-3 pr-3 animate-marquee motion-reduce:animate-none ${reverse ? '[animation-direction:reverse]' : ''}`}
        >
          {items.map((item) => (
            <li
              key={item}
              className="whitespace-nowrap px-4 py-2 rounded-full border border-border bg-background/70 text-sm font-semibold text-muted-foreground shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technical Skills" subtitle="From APIs and databases to CI/CD, security, AI integrations and the mobile apps on top." />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3 mb-12"
        >
          {marqueeRows.map((row, i) => (
            <Marquee key={i} items={row} reverse={i % 2 === 1} />
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
            >
              <TiltCard className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow h-full" maxTilt={5}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-primary/10 text-primary rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-base leading-tight">{category.title}</h3>
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
