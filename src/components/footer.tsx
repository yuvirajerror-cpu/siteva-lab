'use client';

import { Mail, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const handleEmail = () => {
    window.location.href = 'mailto:sitevalab@gmail.com?subject=Project%20Inquiry';
  };
  const handleWhatsApp = () => {
    window.open('https://wa.me/919890646083', '_blank');
  };
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-background border-t border-border pt-20 pb-10 px-4 sm:px-6 overflow-hidden">
      <div className="ambient-glow opacity-60" aria-hidden />
      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <h3 className="text-4xl sm:text-5xl font-black text-gradient mb-4">SITEVA LAB</h3>
            <p className="text-muted max-w-sm leading-relaxed">
              Premium websites and digital experiences for modern brands.
            </p>
            <button
              onClick={scrollTop}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Back to top
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                ['services', 'Services'],
                ['projects', 'Work'],
                ['about', 'About'],
                ['contact', 'Contact'],
              ].map(([id, label]) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-muted hover:text-foreground text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:sitevalab@gmail.com"
                  className="text-muted hover:text-foreground text-sm transition-colors break-all"
                >
                  sitevalab@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919890646083"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground text-sm transition-colors"
                >
                  +91 98906 46083
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-widest">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleEmail}
                className="w-10 h-10 rounded-full border border-border bg-card/60 hover:border-foreground hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-foreground" />
              </button>
              <button
                onClick={handleWhatsApp}
                className="w-10 h-10 rounded-full border border-border bg-card/60 hover:border-foreground hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-foreground" />
              </button>
              <a
                href="https://www.instagram.com/sitevalab?igsh=MW43cXJiZDZpM3BtcA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border bg-card/60 hover:border-foreground hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">© 2026 SITEVA LAB. All rights reserved.</p>
          <p className="text-muted text-sm">Founded by Yuvraj Pawar</p>
        </div>
      </div>
    </footer>
  );
}
