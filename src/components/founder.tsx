'use client';

import { Linkedin, Instagram, Mail } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';

export function Founder() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-background border-t border-border overflow-hidden" id="about">
      <div className="ambient-glow" aria-hidden />
      <div ref={ref} className="relative max-w-3xl mx-auto text-center">
        <p className={`reveal ${visible ? 'is-visible' : ''} text-sm text-muted uppercase tracking-widest mb-4`}>
          Built by SITEVA LAB
        </p>
        <h2 className={`reveal ${visible ? 'is-visible' : ''} reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl font-black text-gradient mb-12`}>
          Meet the founder behind the vision.
        </h2>

        {/* Circular profile with rotating gradient ring */}
        <div className={`reveal ${visible ? 'is-visible' : ''} reveal-delay-2 relative mx-auto w-44 h-44 sm:w-56 sm:h-56 mb-8 group`}>
          <div
            className="absolute -inset-2 rounded-full opacity-70 blur-2xl group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background:
                'conic-gradient(from 0deg, var(--glow-1), transparent, var(--glow-2), transparent, var(--glow-1))',
            }}
            aria-hidden
          />
          <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-foreground/40 via-foreground/10 to-foreground/40">
            <div className="w-full h-full rounded-full overflow-hidden border border-border bg-card">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%202.42.36%20PM-asoGxxpmtD9JcgePkZWgPPuR58Gg88.jpeg"
                alt="Yuvraj Pawar — Founder & Creative Director of SITEVA LAB"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <h3 className={`reveal ${visible ? 'is-visible' : ''} reveal-delay-3 text-2xl sm:text-3xl font-black text-foreground`}>
          Yuvraj Pawar
        </h3>
        <p className={`reveal ${visible ? 'is-visible' : ''} reveal-delay-3 text-muted mb-6`}>
          Founder &amp; Creative Director
        </p>

        <p className={`reveal ${visible ? 'is-visible' : ''} reveal-delay-4 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mx-auto mb-8`}>
          SITEVA LAB was founded by Yuvraj Pawar with a vision to create modern digital experiences that combine exceptional design, clean development, and meaningful user experiences. We help startups, creators, and businesses build premium websites and digital products that stand out and perform.
        </p>

        <div className={`reveal ${visible ? 'is-visible' : ''} reveal-delay-4 flex flex-wrap gap-2 justify-center mb-8`}>
          {['Web Design', 'UI/UX', 'Development', 'Branding'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm border border-border rounded-full text-muted bg-card/40"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className={`reveal ${visible ? 'is-visible' : ''} reveal-delay-5 max-w-xl mx-auto p-6 rounded-2xl glass mb-8`}>
          <p className="text-sm sm:text-base text-muted leading-relaxed italic">
            &ldquo;Focused on creating premium websites, digital experiences, and scalable brand identities for modern businesses.&rdquo;
          </p>
        </div>

        <div className={`reveal ${visible ? 'is-visible' : ''} reveal-delay-5 flex gap-3 justify-center`}>
          <a
            href="https://www.instagram.com/yuvyaa.p?igsh=amw4Y3UzazlpNXVs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-border hover:border-foreground bg-card hover:bg-secondary transition-all duration-200 flex items-center justify-center hover:-translate-y-0.5"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-border hover:border-foreground bg-card hover:bg-secondary transition-all duration-200 flex items-center justify-center hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="mailto:sitevalab@gmail.com"
            className="w-11 h-11 rounded-full border border-border hover:border-foreground bg-card hover:bg-secondary transition-all duration-200 flex items-center justify-center hover:-translate-y-0.5"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}
