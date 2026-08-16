import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Mail, MapPin, Phone, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

function encodeForm(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot: if a bot filled this hidden field, silently drop the submission.
    if (formData.get('bot-field')) return;

    setStatus('submitting');
    try {
      const payload: Record<string, string> = {};
      formData.forEach((value, key) => {
        payload[key] = String(value);
      });

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm(payload),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get In Touch" subtitle="Have a question or want to work together? Let's connect." />
        
        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Let's talk about your project</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              I'm always interested in hearing about new projects, technical challenges, and opportunities.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:prabinrag2340@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p>prabinrag2340@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+971566608834" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p>+971 566608834</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-muted-foreground group">
                <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p>Kozhikode, Kerala, India — currently based in the UAE</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-10 border-t border-border flex gap-4">
              <a href="https://www.linkedin.com/in/prabinrag2340/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/prabinrag234" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          
          {/* Netlify Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background rounded-2xl p-8 border border-border shadow-sm"
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden input for Netlify forms routing */}
              <input type="hidden" name="form-name" value="contact" />
              {/* Hidden honeypot field to prevent spam */}
              <p className="hidden">
                <label>
                  Don’t fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-60"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-60"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none disabled:opacity-60"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
              >
                {status === 'submitting' ? (
                  <>
                    Sending<Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message<Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    Thanks — your message is on its way. I'll get back to you soon.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    Something went wrong — please email me directly at prabinrag2340@gmail.com.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
