'use client';

import { MessageCircle, Mail, ExternalLink } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';

export function FinalCTA() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919890646083?text=Hi%20SITEVA%20LAB%2C%20I%27d%20like%20to%20discuss%20a%20project.',
      '_blank'
    );
  };
  const handleEmail = () => {
    window.location.href = 'mailto:sitevalab@gmail.com?subject=Project%20Inquiry';
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-4 sm:px-6 bg-background border-t border-border overflow-hidden"
    >
      <div className="ambient-glow" aria-hidden />
      <div ref={ref} className="relative max-w-4xl mx-auto">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center mb-14 max-w-2xl mx-auto`}>
          <p className="text-sm text-muted uppercase tracking-widest mb-4">Get in touch</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gradient mb-6">
            Ready to start?
          </h2>
          <p className="text-lg sm:text-xl text-muted">
            Let&rsquo;s create something extraordinary together. Tell us about your project — we usually reply within a day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <button
            onClick={handleWhatsApp}
            className={`reveal ${visible ? 'is-visible' : ''} reveal-delay-1 btn-premium group relative w-full text-left p-6 rounded-3xl border border-border bg-card/60 hover-lift`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-black text-foreground">Chat on WhatsApp</h3>
                  <ExternalLink className="w-4 h-4 text-muted" />
                </div>
                <p className="text-sm text-muted">
                  Fastest replies. Tap to start a conversation with our team.
                </p>
                <p className="text-sm font-medium text-foreground mt-3">+91 98906 46083</p>
              </div>
            </div>
          </button>

          <button
            onClick={handleEmail}
            className={`reveal ${visible ? 'is-visible' : ''} reveal-delay-2 btn-premium group relative w-full text-left p-6 rounded-3xl border border-border bg-card/60 hover-lift`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-black text-foreground mb-1">Email us</h3>
                <p className="text-sm text-muted">
                  Prefer email? Send us a brief about your project.
                </p>
                <p className="text-sm font-medium text-foreground mt-3 break-all">
                  sitevalab@gmail.com
                </p>
              </div>
            </div>
          </button>

          <div className={`reveal ${visible ? 'is-visible' : ''} reveal-delay-3 sm:col-span-2 p-6 rounded-3xl glass text-center`}>
            <p className="text-sm text-muted leading-relaxed">
              Based in India, working with brands worldwide. Available for new projects and long-term partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

