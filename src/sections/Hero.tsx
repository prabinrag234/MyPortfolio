import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

const HeroCanvas = lazy(() => import('../three/HeroCanvas'));

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob" />
      <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob animation-delay-4000" />

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
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-500">Prabin Rag TK</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-muted-foreground mb-6"
          >
            Software Engineer — Mobile &amp; Cross-Platform Apps
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            I build cross-platform mobile and web apps with .NET MAUI, Xamarin and Flutter, and
            support mission-critical Hospital Information Systems end to end. Endlessly curious
            about computers — if it runs code, I want to know how it works.
          </motion.p>
          
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
              href="/Prabin-Rag-TK-CV.pdf"
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
        </div>
      </div>
    </section>
  );
}
