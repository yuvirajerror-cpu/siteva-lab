'use client';

import { ArrowRight } from 'lucide-react';

export function Hero() {
  const handleStartProject = () => {
    window.dispatchEvent(new CustomEvent('open-inquiry'));
  };
  const handleSeeHowWeWork = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 py-24 sm:py-32 pt-32 sm:pt-40 overflow-hidden">
      <div className="ambient-glow" aria-hidden />
      {/* Floating decorative orbs */}
      <div
        className="pointer-events-none absolute top-1/4 right-[12%] w-24 h-24 rounded-full opacity-40 animate-float-slow"
        style={{ background: 'radial-gradient(circle, var(--glow-1), transparent 70%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-1/3 left-[8%] w-32 h-32 rounded-full opacity-30 animate-float-slow"
        style={{ background: 'radial-gradient(circle, var(--glow-2), transparent 70%)', animationDelay: '2s' }}
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full glass text-xs sm:text-sm font-medium text-foreground/80 reveal is-visible"
          style={{ animationDelay: '0ms' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
          Now booking projects for 2026
        </div>

        <h1 className="reveal is-visible reveal-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 text-balance text-gradient">
          Designing premium websites and digital experiences for modern brands.
        </h1>

        <p className="reveal is-visible reveal-delay-2 text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          We help startups, creators, and businesses build websites that look premium and convert better.
        </p>

        <div className="reveal is-visible reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleStartProject}
            className="btn-premium group px-8 py-4 text-base bg-foreground text-background rounded-full font-semibold inline-flex items-center justify-center gap-2"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={handleSeeHowWeWork}
            className="btn-premium px-8 py-4 text-base border border-foreground/20 text-foreground rounded-full font-semibold hover:bg-foreground/5 backdrop-blur"
          >
            See How We Work
          </button>
        </div>

        <div className="reveal is-visible reveal-delay-4 mt-16 flex items-center justify-center gap-8 text-xs uppercase tracking-widest text-muted">
          <span>Design</span>
          <span className="w-1 h-1 rounded-full bg-muted/50" />
          <span>Development</span>
          <span className="w-1 h-1 rounded-full bg-muted/50" />
          <span>Branding</span>
        </div>
      </div>
    </section>
  );
}
