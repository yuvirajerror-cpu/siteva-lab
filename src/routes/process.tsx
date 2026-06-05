import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import {
  Search,
  Compass,
  PenTool,
  Code2,
  TestTube2,
  Rocket,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PremiumCursor } from '@/components/premium-cursor';
import { InquiryModal } from '@/components/inquiry-modal';
import { useReveal } from '@/hooks/use-reveal';

export const Route = createFileRoute('/process')({
  head: () => ({
    meta: [
      { title: 'Our Process — SITEVA LAB' },
      {
        name: 'description',
        content:
          'How SITEVA LAB takes brands from idea to launch — discovery, strategy, design, development, testing, and growth.',
      },
      { property: 'og:title', content: 'Our Process — SITEVA LAB' },
      {
        property: 'og:description',
        content:
          'A transparent, premium agency process built for modern brands.',
      },
    ],
  }),
  component: ProcessPage,
});

interface Step {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: typeof Search;
  description: string;
  bullets: string[];
  image: string;
  alt: string;
}

const STEPS: Step[] = [
  {
    id: 'discovery',
    number: '01',
    title: 'Discovery & Research',
    subtitle: 'Understanding your world',
    icon: Search,
    description:
      'Every great project starts with deep understanding. We dive into your business model, audience, market position, and goals to build a complete picture of what success looks like for you.',
    bullets: [
      'Stakeholder interviews & business audit',
      'Audience and competitor analysis',
      'Brand and product positioning review',
      'Goal alignment and KPI definition',
    ],
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
    alt: 'Team in a discovery workshop with notes and laptops',
  },
  {
    id: 'strategy',
    number: '02',
    title: 'Strategy & Planning',
    subtitle: 'Architecting the path',
    icon: Compass,
    description:
      'We translate insight into a clear strategy. Sitemaps, user flows, messaging hierarchy, and conversion architecture come together into a blueprint that guides every design and code decision.',
    bullets: [
      'Website strategy and content architecture',
      'User flows and journey mapping',
      'Conversion and growth planning',
      'Tech stack and integrations roadmap',
    ],
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80',
    alt: 'Strategy planning session with sticky notes and diagrams',
  },
  {
    id: 'design',
    number: '03',
    title: 'Wireframing & Design',
    subtitle: 'Crafting the experience',
    icon: PenTool,
    description:
      'From low-fidelity wireframes to a polished, pixel-perfect UI system. We design layouts, typography, color, motion, and component libraries that feel unmistakably premium — and built to scale.',
    bullets: [
      'Wireframes and interactive prototypes',
      'Visual direction and moodboards',
      'UI system, components, and design tokens',
      'Micro-interactions and motion design',
    ],
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=1400&q=80',
    alt: 'Designer working on UI wireframes and visual design',
  },
  {
    id: 'development',
    number: '04',
    title: 'Development',
    subtitle: 'Engineering with care',
    icon: Code2,
    description:
      'We build with modern, performant stacks — React, TypeScript, and headless tooling — for sites that load fast, scale gracefully, and stay maintainable for years to come.',
    bullets: [
      'Modern responsive front-end engineering',
      'CMS, e-commerce, and API integrations',
      'Accessibility and SEO-first foundations',
      'Clean, documented, handover-ready code',
    ],
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80',
    alt: 'Developer writing code on a laptop with multiple screens',
  },
  {
    id: 'testing',
    number: '05',
    title: 'Testing & Optimization',
    subtitle: 'Polish until it shines',
    icon: TestTube2,
    description:
      'Before launch we test across devices, browsers, and real-world conditions. We optimize performance, accessibility, and conversion paths so what we ship feels effortless to your users.',
    bullets: [
      'Performance, Core Web Vitals, and SEO audits',
      'Cross-device and cross-browser QA',
      'Accessibility (WCAG) checks',
      'Analytics and tracking setup',
    ],
    image:
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1400&q=80',
    alt: 'Quality assurance and testing across multiple devices',
  },
  {
    id: 'launch',
    number: '06',
    title: 'Launch & Growth',
    subtitle: 'Live — and built to evolve',
    icon: Rocket,
    description:
      'We handle deployment, monitoring, and post-launch support. Then we partner with you on iteration — refining UX, content, and conversions as your business grows.',
    bullets: [
      'Deployment and DNS handover',
      'Monitoring and post-launch support',
      'Iteration sprints and roadmap planning',
      'Long-term partnership and care',
    ],
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    alt: 'Launch and growth phase with analytics dashboards',
  },
];

function ProcessPage() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handler = () => setModalOpen(true);
    window.addEventListener('open-inquiry', handler);
    return () => window.removeEventListener('open-inquiry', handler);
  }, []);

  return (
    <main className="bg-background">
      <PremiumCursor />
      <Header />
      <InquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Hero */}
      <section className="relative pt-36 sm:pt-44 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="ambient-glow" aria-hidden />
        <div className="relative max-w-5xl mx-auto text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full glass text-xs sm:text-sm font-medium text-foreground/80 hover:bg-foreground/5 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to home
          </Link>
          <p className="text-sm text-muted uppercase tracking-widest mb-4">Our Process</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 text-gradient text-balance">
            From first idea to a website that performs.
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            A transparent, six-step process built around clarity, craft, and measurable outcomes —
            so every project ships on time and built to last.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-24 sm:space-y-32">
          {STEPS.map((step, i) => (
            <StepBlock key={step.id} step={step} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      <Footer />
    </main>
  );
}

function StepBlock({ step, index }: { step: Step; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = step.icon;
  const reversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
    >
      {/* Image */}
      <div
        className={`relative group ${reversed ? 'lg:order-2' : ''}`}
      >
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-secondary">
          <img
            src={step.image}
            alt={step.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass text-xs font-semibold tracking-wider text-foreground">
            STEP {step.number}
          </div>
        </div>
        {/* decorative ring */}
        <div
          className="pointer-events-none absolute -z-10 -inset-6 rounded-[2rem] opacity-30 blur-2xl"
          style={{ background: 'radial-gradient(circle, var(--glow-1), transparent 70%)' }}
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className={reversed ? 'lg:order-1' : ''}>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-sm uppercase tracking-widest text-muted">{step.subtitle}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-5 text-balance">
          {step.title}
        </h2>
        <p className="text-base sm:text-lg text-muted leading-relaxed mb-6">{step.description}</p>
        <ul className="space-y-3">
          {step.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-foreground/90">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-foreground" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CTASection() {
  const navigate = useNavigate();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 border-t border-border overflow-hidden">
      <div className="ambient-glow" aria-hidden />
      <div
        ref={ref}
        className={`reveal ${visible ? 'is-visible' : ''} relative max-w-4xl mx-auto text-center`}
      >
        <p className="text-sm text-muted uppercase tracking-widest mb-4">Ready when you are</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gradient mb-6 text-balance">
          Let&rsquo;s build something extraordinary.
        </h2>
        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10">
          Share a few details and we&rsquo;ll get back within a day with next steps.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-inquiry'))}
            className="btn-premium group px-8 py-4 text-base bg-foreground text-background rounded-full font-semibold inline-flex items-center justify-center gap-2"
          >
            Start your project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => navigate({ to: '/' })}
            className="btn-premium px-8 py-4 text-base border border-foreground/20 text-foreground rounded-full font-semibold hover:bg-foreground/5"
          >
            Back to home
          </button>
        </div>
      </div>
    </section>
  );
}
