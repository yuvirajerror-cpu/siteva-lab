'use client';

import { Check } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';

const reasons = [
  'Small focused creative agency',
  'Modern UI/UX expertise',
  'Scalable development',
  'Fast communication',
  'Conversion-focused design',
  'Premium visual identity',
];

export function WhySiteva() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-background border-t border-border overflow-hidden">
      <div className="ambient-glow" aria-hidden />
      <div ref={ref} className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`reveal ${visible ? 'is-visible' : ''}`}>
            <p className="text-sm text-muted uppercase tracking-widest mb-4">Why SITEVA LAB</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gradient mb-6">
              Strategy meets craft.
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              We combine strategic thinking with exceptional design to create digital experiences that truly connect with your audience and drive results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {reasons.map((reason, idx) => (
              <div
                key={reason}
                className={`reveal ${visible ? 'is-visible' : ''} reveal-delay-${(idx % 5) + 1} group flex items-center gap-3 p-4 rounded-2xl glass hover-lift`}
              >
                <span className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-12">
                  <Check className="w-4 h-4" />
                </span>
                <span className="text-foreground font-medium text-sm sm:text-base">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
