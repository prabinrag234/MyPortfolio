import { lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import { RoleSwitch } from '../components/RoleSwitch';
import { CountUp } from '../components/CountUp';
import { useRole } from '../context/RoleContext';

const HeroCanvas = lazy(() => import('../three/HeroCanvas'));

// Shared enter/exit for content that swaps when the profile changes
const swap = {
  initial: { opacity: 0, y: 12, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -12, filter: 'blur(6px)' },
  transition: { duration: 0.35 },
};

export default function Hero() {
  const { role, profile } = useRole();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob" />
      <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob animation-delay-4000" />
      <div className="absolute top-[20%] right-[-5%] w-80 h-80 bg-teal-500/15 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob animation-delay-2000" />

      {/* Interactive 3D scene — loaded async so it never blocks first paint */}
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-medium text-sm shadow-sm backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            Available for new opportunities
            <span className="hidden sm:inline-flex items-center gap-1 text-muted-foreground">
              · <MapPin className="w-3.5 h-3.5" /> Dubai, UAE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-teal-500 bg-[length:200%_auto] animate-gradient">Prabin Rag TK</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <RoleSwitch id="hero" />
          </motion.div>

          <div className="min-h-[9rem] sm:min-h-[8rem] mb-8">
            <AnimatePresence mode="wait">
              <motion.div key={role} {...swap}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground/90 mb-3">
                  {profile.title}
                </h2>
                <p className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm font-medium text-primary mb-4">
                  {/* Separator trails each item so a wrapped line never starts with "·" */}
                  {profile.focus.map((item, i) => (
                    <span key={item} className="whitespace-nowrap">
                      {item}
                      {i < profile.focus.length - 1 && <span className="text-muted-foreground ml-2">·</span>}
                    </span>
                  ))}
                </p>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  {profile.intro}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 border border-border/60 bg-background/50 backdrop-blur-sm hover:bg-muted/80 rounded-xl font-semibold hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow"
            >
              Download CV <Download className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 border border-border/60 bg-background/50 backdrop-blur-sm hover:bg-muted/80 rounded-xl font-semibold hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow"
            >
              Contact Me <Mail className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Headline stats — keyed by role so the counters replay on switch */}
          <AnimatePresence mode="wait">
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
            >
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/50 backdrop-blur-md px-4 py-5 shadow-sm"
                >
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-teal-500" />
                  <p className={`font-extrabold text-primary tabular-nums whitespace-nowrap ${stat.text ? 'text-2xl md:text-3xl leading-[2.25rem] md:leading-[2.5rem]' : 'text-3xl md:text-4xl'}`}>
                    {stat.text ?? (
                      <>
                        <CountUp to={stat.value ?? 0} />
                        {stat.suffix}
                      </>
                    )}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-muted-foreground leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
