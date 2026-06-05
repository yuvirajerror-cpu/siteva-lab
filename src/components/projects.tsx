'use client';

import { ArrowUpRight, Lock } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';

const projects = [
  {
    title: 'Siteva Lab Website',
    category: 'Design + Development',
    description: 'Designed and developed our own agency website from scratch, minimal, premium, conversion-focused.',
    link: 'https://sitevalab.com',
    disabled: false,
  },
  {
    title: 'Coming Soon',
    category: 'Branding',
    description: 'Case study dropping soon. Exciting brand identity project in progress.',
    link: '',
    disabled: true,
  },
  {
    title: 'Coming Soon',
    category: 'Development',
    description: 'Full-stack web app in progress. Details dropping soon.',
    link: '',
    disabled: true,
  },
];

function ProjectCard({ project, idx }: { project: (typeof projects)[number]; idx: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const CardWrapper = project.disabled ? 'div' : 'a';
  const cardProps = project.disabled
    ? {}
    : { href: project.link, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <CardWrapper
      {...cardProps}
      ref={ref as any}
      className={`reveal ${visible ? 'is-visible' : ''} reveal-delay-${idx + 1} group relative rounded-3xl border border-border bg-card/40 overflow-hidden hover-lift ${project.disabled ? 'cursor-default' : 'cursor-pointer'}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          style={{
            background: idx === 0
              ? 'linear-gradient(135deg, #9B8B7D 0%, #3D3428 100%)'
              : 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
          aria-hidden
        />
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs font-medium text-foreground">
          {project.category}
        </div>
        <div className={`absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center transition-all duration-500 ${project.disabled ? 'opacity-70' : 'opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
          {project.disabled ? <Lock className="w-5 h-5 text-foreground" /> : <ArrowUpRight className="w-5 h-5 text-foreground" />}
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-muted leading-relaxed">{project.description}</p>
      </div>
    </CardWrapper>
  );
}

export function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-background border-t border-border" id="projects">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6`}>
          <div className="max-w-xl">
            <p className="text-sm text-muted uppercase tracking-widest mb-4">Selected Work</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gradient">
              Crafted with care, built to convert.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
