'use client';

import { Zap, Smartphone, Palette, BarChart3, Code, Rocket } from 'lucide-react';
import { useReveal, useCountUp } from '@/hooks/use-reveal';

const stats = [
  { Icon: Rocket, value: 12, suffix: '+', label: 'Projects Delivered' },
  { Icon: Zap, value: 7, suffix: ' Day', label: 'Turnaround' },
  { Icon: Palette, value: 100, suffix: '%', label: 'Satisfaction' },
  { Icon: Smartphone, value: 100, suffix: '%', label: 'Mobile Optimized' },
  { Icon: Code, value: 0, text: 'Clean', label: 'Code' },
  { Icon: BarChart3, value: 0, text: 'Mobile', label: 'First' },
];

function StatCard({ stat, idx, active }: { stat: (typeof stats)[number]; idx: number; active: boolean }) {
  const { Icon } = stat;
  const count = useCountUp(stat.value, active && stat.value > 0);
  return (
    <div
      className={`reveal ${active ? 'is-visible' : ''} reveal-delay-${(idx % 5) + 1} group relative p-6 sm:p-8 rounded-2xl border border-border bg-card/50 hover-lift text-center overflow-hidden`}
    >
      <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-border flex items-center justify-center mb-4 mx-auto transition-transform duration-500 group-hover:scale-110">
        <Icon className="w-6 h-6 text-foreground" />
      </div>
      <div className="text-3xl sm:text-4xl font-black text-foreground mb-1 tabular-nums">
        {stat.value > 0 ? `${count}${stat.suffix ?? ''}` : stat.text}
      </div>
      <p className="text-sm text-muted">{stat.label}</p>
    </div>
  );
}

export function Stats() {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.25 });
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-background border-t border-border">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center mb-16 max-w-2xl mx-auto`}>
          <p className="text-sm text-muted uppercase tracking-widest mb-4">What We Deliver</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gradient">
            Measurable outcomes, premium craft.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} idx={i} active={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
