import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

const socials = [
  { label: 'Email', href: 'mailto:prabinrag2340@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prabinrag2340/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/classmate-projects', icon: Github },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">

        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-primary" />
          <span className="font-bold text-lg tracking-tight">Prabin Rag</span>
        </div>

        <p className="text-muted-foreground text-sm text-center md:text-left">
          &copy; {currentYear} Prabin Rag TK · Dubai, UAE
        </p>

        <div className="flex gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:-translate-y-0.5 transition-all"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
