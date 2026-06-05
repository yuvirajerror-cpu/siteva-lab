import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { u as useReveal, a as useCountUp, P as PremiumCursor, H as Header, I as InquiryModal, F as Footer } from "./use-reveal-RMHsMJos.js";
import { ArrowRight, Compass, Palette, Rocket, Lock, ArrowUpRight, Zap, Smartphone, Code, BarChart3, Check, Instagram, Linkedin, Mail, MessageCircle, ExternalLink } from "lucide-react";
function Hero() {
  const handleStartProject = () => {
    window.dispatchEvent(new CustomEvent("open-inquiry"));
  };
  const handleSeeHowWeWork = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 py-24 sm:py-32 pt-32 sm:pt-40 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "ambient-glow", "aria-hidden": true }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none absolute top-1/4 right-[12%] w-24 h-24 rounded-full opacity-40 animate-float-slow",
        style: { background: "radial-gradient(circle, var(--glow-1), transparent 70%)" },
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none absolute bottom-1/3 left-[8%] w-32 h-32 rounded-full opacity-30 animate-float-slow",
        style: { background: "radial-gradient(circle, var(--glow-2), transparent 70%)", animationDelay: "2s" },
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-4xl mx-auto text-center w-full", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full glass text-xs sm:text-sm font-medium text-foreground/80 reveal is-visible",
          style: { animationDelay: "0ms" },
          children: [
            /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" }),
            "Now booking projects for 2026"
          ]
        }
      ),
      /* @__PURE__ */ jsx("h1", { className: "reveal is-visible reveal-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 text-balance text-gradient", children: "Designing premium websites and digital experiences for modern brands." }),
      /* @__PURE__ */ jsx("p", { className: "reveal is-visible reveal-delay-2 text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed", children: "We help startups, creators, and businesses build websites that look premium and convert better." }),
      /* @__PURE__ */ jsxs("div", { className: "reveal is-visible reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleStartProject,
            className: "btn-premium group px-8 py-4 text-base bg-foreground text-background rounded-full font-semibold inline-flex items-center justify-center gap-2",
            children: [
              "Start Your Project",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleSeeHowWeWork,
            className: "btn-premium px-8 py-4 text-base border border-foreground/20 text-foreground rounded-full font-semibold hover:bg-foreground/5 backdrop-blur",
            children: "See How We Work"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "reveal is-visible reveal-delay-4 mt-16 flex items-center justify-center gap-8 text-xs uppercase tracking-widest text-muted", children: [
        /* @__PURE__ */ jsx("span", { children: "Design" }),
        /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-muted/50" }),
        /* @__PURE__ */ jsx("span", { children: "Development" }),
        /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-muted/50" }),
        /* @__PURE__ */ jsx("span", { children: "Branding" })
      ] })
    ] })
  ] });
}
const services = [
  {
    number: "01",
    title: "Strategy",
    description: "Deep discovery of your business, audience, and competition to craft a compelling vision and roadmap.",
    Icon: Compass
  },
  {
    number: "02",
    title: "Design",
    description: "Elegant visual design and user experience that guides visitors toward conversion with clarity.",
    Icon: Palette
  },
  {
    number: "03",
    title: "Development & Launch",
    description: "Clean, performant code built with modern technologies. Seamless deployment and ongoing support.",
    Icon: Rocket
  }
];
function ServiceCard({
  service,
  idx
}) {
  const { ref, visible } = useReveal();
  const { Icon } = service;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: `reveal ${visible ? "is-visible" : ""} reveal-delay-${idx + 1} group relative p-8 sm:p-10 rounded-3xl border border-border bg-card/60 hover-lift overflow-hidden`,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
            style: {
              background: "radial-gradient(600px circle at 50% 0%, var(--glow-1), transparent 50%)"
            },
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-mono text-muted tracking-widest", children: service.number }),
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-foreground/5 border border-border flex items-center justify-center transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-foreground" }) })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl sm:text-3xl font-black text-foreground mb-3", children: service.title }),
          /* @__PURE__ */ jsx("p", { className: "text-base text-muted leading-relaxed", children: service.description })
        ] })
      ]
    }
  );
}
function Services() {
  const { ref, visible } = useReveal();
  return /* @__PURE__ */ jsx("section", { className: "relative py-24 sm:py-32 px-4 sm:px-6 bg-background", id: "services", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { ref, className: `reveal ${visible ? "is-visible" : ""} mb-16 max-w-2xl`, children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted uppercase tracking-widest mb-4", children: "Our Process" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl sm:text-5xl lg:text-6xl font-black text-gradient", children: "How we build remarkable experiences." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: services.map((s, i) => /* @__PURE__ */ jsx(ServiceCard, { service: s, idx: i }, s.number)) })
  ] }) });
}
const projects = [
  {
    title: "Siteva Lab Website",
    category: "Design + Development",
    description: "Designed and developed our own agency website from scratch, minimal, premium, conversion-focused.",
    link: "https://sitevalab.com",
    disabled: false
  },
  {
    title: "Coming Soon",
    category: "Branding",
    description: "Case study dropping soon. Exciting brand identity project in progress.",
    link: "",
    disabled: true
  },
  {
    title: "Coming Soon",
    category: "Development",
    description: "Full-stack web app in progress. Details dropping soon.",
    link: "",
    disabled: true
  }
];
function ProjectCard({ project, idx }) {
  const { ref, visible } = useReveal();
  const CardWrapper = project.disabled ? "div" : "a";
  const cardProps = project.disabled ? {} : { href: project.link, target: "_blank", rel: "noopener noreferrer" };
  return /* @__PURE__ */ jsxs(
    CardWrapper,
    {
      ...cardProps,
      ref,
      className: `reveal ${visible ? "is-visible" : ""} reveal-delay-${idx + 1} group relative rounded-3xl border border-border bg-card/40 overflow-hidden hover-lift ${project.disabled ? "cursor-default" : "cursor-pointer"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-110",
              style: {
                background: idx === 0 ? "linear-gradient(135deg, #9B8B7D 0%, #3D3428 100%)" : "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)"
              },
              "aria-hidden": true
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700",
              style: {
                backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
                backgroundSize: "24px 24px"
              },
              "aria-hidden": true
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs font-medium text-foreground", children: project.category }),
          /* @__PURE__ */ jsx("div", { className: `absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center transition-all duration-500 ${project.disabled ? "opacity-70" : "opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"}`, children: project.disabled ? /* @__PURE__ */ jsx(Lock, { className: "w-5 h-5 text-foreground" }) : /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-5 h-5 text-foreground" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl sm:text-3xl font-black text-foreground mb-2", children: project.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed", children: project.description })
        ] })
      ]
    }
  );
}
function Projects() {
  const { ref, visible } = useReveal();
  return /* @__PURE__ */ jsx("section", { className: "relative py-24 sm:py-32 px-4 sm:px-6 bg-background border-t border-border", id: "projects", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { ref, className: `reveal ${visible ? "is-visible" : ""} mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted uppercase tracking-widest mb-4", children: "Selected Work" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl sm:text-5xl lg:text-6xl font-black text-gradient", children: "Crafted with care, built to convert." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: projects.map((p, i) => /* @__PURE__ */ jsx(ProjectCard, { project: p, idx: i }, p.title)) })
  ] }) });
}
const stats = [
  { Icon: Rocket, value: 12, suffix: "+", label: "Projects Delivered" },
  { Icon: Zap, value: 7, suffix: " Day", label: "Turnaround" },
  { Icon: Palette, value: 100, suffix: "%", label: "Satisfaction" },
  { Icon: Smartphone, value: 100, suffix: "%", label: "Mobile Optimized" },
  { Icon: Code, value: 0, text: "Clean", label: "Code" },
  { Icon: BarChart3, value: 0, text: "Mobile", label: "First" }
];
function StatCard({ stat, idx, active }) {
  const { Icon } = stat;
  const count = useCountUp(stat.value, active && stat.value > 0);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `reveal ${active ? "is-visible" : ""} reveal-delay-${idx % 5 + 1} group relative p-6 sm:p-8 rounded-2xl border border-border bg-card/50 hover-lift text-center overflow-hidden`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-foreground/5 border border-border flex items-center justify-center mb-4 mx-auto transition-transform duration-500 group-hover:scale-110", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-foreground" }) }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl sm:text-4xl font-black text-foreground mb-1 tabular-nums", children: stat.value > 0 ? `${count}${stat.suffix ?? ""}` : stat.text }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted", children: stat.label })
      ]
    }
  );
}
function Stats() {
  const { ref, visible } = useReveal({ threshold: 0.25 });
  return /* @__PURE__ */ jsx("section", { className: "relative py-24 sm:py-32 px-4 sm:px-6 bg-background border-t border-border", children: /* @__PURE__ */ jsxs("div", { ref, className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: `reveal ${visible ? "is-visible" : ""} text-center mb-16 max-w-2xl mx-auto`, children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted uppercase tracking-widest mb-4", children: "What We Deliver" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl sm:text-5xl lg:text-6xl font-black text-gradient", children: "Measurable outcomes, premium craft." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6", children: stats.map((s, i) => /* @__PURE__ */ jsx(StatCard, { stat: s, idx: i, active: visible }, s.label)) })
  ] }) });
}
const reasons = [
  "Small focused creative agency",
  "Modern UI/UX expertise",
  "Scalable development",
  "Fast communication",
  "Conversion-focused design",
  "Premium visual identity"
];
function WhySiteva() {
  const { ref, visible } = useReveal();
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 sm:py-32 px-4 sm:px-6 bg-background border-t border-border overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "ambient-glow", "aria-hidden": true }),
    /* @__PURE__ */ jsx("div", { ref, className: "relative max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: `reveal ${visible ? "is-visible" : ""}`, children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted uppercase tracking-widest mb-4", children: "Why SITEVA LAB" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl sm:text-5xl lg:text-6xl font-black text-gradient mb-6", children: "Strategy meets craft." }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted leading-relaxed", children: "We combine strategic thinking with exceptional design to create digital experiences that truly connect with your audience and drive results." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: reasons.map((reason, idx) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `reveal ${visible ? "is-visible" : ""} reveal-delay-${idx % 5 + 1} group flex items-center gap-3 p-4 rounded-2xl glass hover-lift`,
          children: [
            /* @__PURE__ */ jsx("span", { className: "w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-12", children: /* @__PURE__ */ jsx(Check, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium text-sm sm:text-base", children: reason })
          ]
        },
        reason
      )) })
    ] }) })
  ] });
}
function Founder() {
  const { ref, visible } = useReveal();
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 sm:py-32 px-4 sm:px-6 bg-background border-t border-border overflow-hidden", id: "about", children: [
    /* @__PURE__ */ jsx("div", { className: "ambient-glow", "aria-hidden": true }),
    /* @__PURE__ */ jsxs("div", { ref, className: "relative max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("p", { className: `reveal ${visible ? "is-visible" : ""} text-sm text-muted uppercase tracking-widest mb-4`, children: "Built by SITEVA LAB" }),
      /* @__PURE__ */ jsx("h2", { className: `reveal ${visible ? "is-visible" : ""} reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl font-black text-gradient mb-12`, children: "Meet the founder behind the vision." }),
      /* @__PURE__ */ jsxs("div", { className: `reveal ${visible ? "is-visible" : ""} reveal-delay-2 relative mx-auto w-44 h-44 sm:w-56 sm:h-56 mb-8 group`, children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute -inset-2 rounded-full opacity-70 blur-2xl group-hover:opacity-100 transition-opacity duration-700",
            style: {
              background: "conic-gradient(from 0deg, var(--glow-1), transparent, var(--glow-2), transparent, var(--glow-1))"
            },
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-foreground/40 via-foreground/10 to-foreground/40", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full rounded-full overflow-hidden border border-border bg-card", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%202.42.36%20PM-asoGxxpmtD9JcgePkZWgPPuR58Gg88.jpeg",
            alt: "Yuvraj Pawar — Founder & Creative Director of SITEVA LAB",
            className: "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110",
            loading: "lazy"
          }
        ) }) })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: `reveal ${visible ? "is-visible" : ""} reveal-delay-3 text-2xl sm:text-3xl font-black text-foreground`, children: "Yuvraj Pawar" }),
      /* @__PURE__ */ jsx("p", { className: `reveal ${visible ? "is-visible" : ""} reveal-delay-3 text-muted mb-6`, children: "Founder & Creative Director" }),
      /* @__PURE__ */ jsx("p", { className: `reveal ${visible ? "is-visible" : ""} reveal-delay-4 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mx-auto mb-8`, children: "SITEVA LAB was founded by Yuvraj Pawar with a vision to create modern digital experiences that combine exceptional design, clean development, and meaningful user experiences. We help startups, creators, and businesses build premium websites and digital products that stand out and perform." }),
      /* @__PURE__ */ jsx("div", { className: `reveal ${visible ? "is-visible" : ""} reveal-delay-4 flex flex-wrap gap-2 justify-center mb-8`, children: ["Web Design", "UI/UX", "Development", "Branding"].map((tag) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "px-3 py-1 text-sm border border-border rounded-full text-muted bg-card/40",
          children: tag
        },
        tag
      )) }),
      /* @__PURE__ */ jsx("div", { className: `reveal ${visible ? "is-visible" : ""} reveal-delay-5 max-w-xl mx-auto p-6 rounded-2xl glass mb-8`, children: /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-muted leading-relaxed italic", children: "“Focused on creating premium websites, digital experiences, and scalable brand identities for modern businesses.”" }) }),
      /* @__PURE__ */ jsxs("div", { className: `reveal ${visible ? "is-visible" : ""} reveal-delay-5 flex gap-3 justify-center`, children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.instagram.com/yuvyaa.p?igsh=amw4Y3UzazlpNXVs",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "w-11 h-11 rounded-full border border-border hover:border-foreground bg-card hover:bg-secondary transition-all duration-200 flex items-center justify-center hover:-translate-y-0.5",
            "aria-label": "Instagram",
            children: /* @__PURE__ */ jsx(Instagram, { className: "w-5 h-5 text-foreground" })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://linkedin.com",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "w-11 h-11 rounded-full border border-border hover:border-foreground bg-card hover:bg-secondary transition-all duration-200 flex items-center justify-center hover:-translate-y-0.5",
            "aria-label": "LinkedIn",
            children: /* @__PURE__ */ jsx(Linkedin, { className: "w-5 h-5 text-foreground" })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "mailto:sitevalab@gmail.com",
            className: "w-11 h-11 rounded-full border border-border hover:border-foreground bg-card hover:bg-secondary transition-all duration-200 flex items-center justify-center hover:-translate-y-0.5",
            "aria-label": "Email",
            children: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-foreground" })
          }
        )
      ] })
    ] })
  ] });
}
function FinalCTA() {
  const { ref, visible } = useReveal();
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919890646083?text=Hi%20SITEVA%20LAB%2C%20I%27d%20like%20to%20discuss%20a%20project.",
      "_blank"
    );
  };
  const handleEmail = () => {
    window.location.href = "mailto:sitevalab@gmail.com?subject=Project%20Inquiry";
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "contact",
      className: "relative py-24 sm:py-32 px-4 sm:px-6 bg-background border-t border-border overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "ambient-glow", "aria-hidden": true }),
        /* @__PURE__ */ jsxs("div", { ref, className: "relative max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: `reveal ${visible ? "is-visible" : ""} text-center mb-14 max-w-2xl mx-auto`, children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted uppercase tracking-widest mb-4", children: "Get in touch" }),
            /* @__PURE__ */ jsx("h2", { className: "text-4xl sm:text-5xl lg:text-6xl font-black text-gradient mb-6", children: "Ready to start?" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-muted", children: "Let’s create something extraordinary together. Tell us about your project — we usually reply within a day." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleWhatsApp,
                className: `reveal ${visible ? "is-visible" : ""} reveal-delay-1 btn-premium group relative w-full text-left p-6 rounded-3xl border border-border bg-card/60 hover-lift`,
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110", children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-6 h-6" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-foreground", children: "Chat on WhatsApp" }),
                      /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4 text-muted" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted", children: "Fastest replies. Tap to start a conversation with our team." }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground mt-3", children: "+91 98906 46083" })
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleEmail,
                className: `reveal ${visible ? "is-visible" : ""} reveal-delay-2 btn-premium group relative w-full text-left p-6 rounded-3xl border border-border bg-card/60 hover-lift`,
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110", children: /* @__PURE__ */ jsx(Mail, { className: "w-6 h-6" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-foreground mb-1", children: "Email us" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted", children: "Prefer email? Send us a brief about your project." }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground mt-3 break-all", children: "sitevalab@gmail.com" })
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: `reveal ${visible ? "is-visible" : ""} reveal-delay-3 sm:col-span-2 p-6 rounded-3xl glass text-center`, children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted leading-relaxed", children: "Based in India, working with brands worldwide. Available for new projects and long-term partnerships." }) })
          ] })
        ] })
      ]
    }
  );
}
function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    const handler = () => setModalOpen(true);
    window.addEventListener("open-inquiry", handler);
    return () => window.removeEventListener("open-inquiry", handler);
  }, []);
  return /* @__PURE__ */ jsxs("main", { className: "bg-background", children: [
    /* @__PURE__ */ jsx(PremiumCursor, {}),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(InquiryModal, { open: modalOpen, onClose: () => setModalOpen(false) }),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Services, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Stats, {}),
    /* @__PURE__ */ jsx(WhySiteva, {}),
    /* @__PURE__ */ jsx(Founder, {}),
    /* @__PURE__ */ jsx(FinalCTA, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Home as component
};
