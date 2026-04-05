import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
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
                  <p>United Arab Emirates</p>
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
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
