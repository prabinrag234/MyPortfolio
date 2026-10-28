import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Mail, MapPin, Phone, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'mailto' | 'error';

const EMAIL = 'prabinrag2340@gmail.com';
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Inserts into the `contact_messages` table via Supabase's REST API. RLS only
// allows anonymous inserts, so the public key can't read messages back.
async function saveToSupabase(message: { name: string; email: string; message: string }) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/contact_messages`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_ANON_KEY!,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(message),
  });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
}

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot: if a bot filled this hidden field, silently drop the submission.
    if (formData.get('bot-field')) return;

    const message = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      message: String(formData.get('message') ?? ''),
    };

    // No backend configured: hand off to the visitor's mail client instead.
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${message.name}`);
      const body = encodeURIComponent(`${message.message}\n\n— ${message.name} (${message.email})`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setStatus('mailto');
      return;
    }

    setStatus('submitting');
    try {
      await saveToSupabase(message);
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-20 relative bg-muted/30">
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
            <h3 className="text-3xl font-bold mb-6">Let's work together</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              I'm open to Software Engineer and Software Implementation &amp; Support roles — and always
              happy to talk about new projects and technical challenges.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p>{EMAIL}</p>
                </div>
              </a>

              <a href="tel:+971566608834" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p>+971 56 660 8834</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground group">
                <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-border flex gap-4">
              <a href="https://www.linkedin.com/in/prabinrag2340/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/classmate-projects" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background rounded-2xl p-8 border border-border shadow-sm"
          >
            <form
              name="contact"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
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
                {status === 'mailto' && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    Your email app should open with the message ready — just hit send.
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
                    Something went wrong — please email me directly at {EMAIL}.
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
