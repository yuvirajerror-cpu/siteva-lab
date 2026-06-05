'use client';

import { Compass, Palette, Rocket } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';

const services = [
  {
    number: '01',
    title: 'Strategy',
    description:
      'Deep discovery of your business, audience, and competition to craft a compelling vision and roadmap.',
    Icon: Compass,
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Elegant visual design and user experience that guides visitors toward conversion with clarity.',
    Icon: Palette,
  },
  {
    number: '03',
    title: 'Development & Launch',
    description:
      'Clean, performant code built with modern technologies. Seamless deployment and ongoing support.',
    Icon: Rocket,
  },
];

function ServiceCard({
  service,
  idx,
}: {
  service: (typeof services)[number];
  idx: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { Icon } = service;
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} reveal-delay-${idx + 1} group relative p-8 sm:p-10 rounded-3xl border border-border bg-card/60 hover-lift overflow-hidden`}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(600px circle at 50% 0%, var(--glow-1), transparent 50%)',
        }}
        aria-hidden
      />
      <div className="relative">
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm font-mono text-muted tracking-widest">
            {service.number}
          </span>
          <div className="w-12 h-12 rounded-2xl bg-foreground/5 border border-border flex items-center justify-center transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
            <Icon className="w-5 h-5 text-foreground" />
          </div>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-3">
          {service.title}
        </h3>
        <p className="text-base text-muted leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-background" id="services">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mb-16 max-w-2xl`}>
          <p className="text-sm text-muted uppercase tracking-widest mb-4">Our Process</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gradient">
            How we build remarkable experiences.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.number} service={s} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
