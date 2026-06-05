import { jsxs, jsx } from "react/jsx-runtime";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowLeft, Search, Compass, PenTool, Code2, TestTube2, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import { P as PremiumCursor, H as Header, I as InquiryModal, F as Footer, u as useReveal } from "./use-reveal-RMHsMJos.js";
const STEPS = [{
  id: "discovery",
  number: "01",
  title: "Discovery & Research",
  subtitle: "Understanding your world",
  icon: Search,
  description: "Every great project starts with deep understanding. We dive into your business model, audience, market position, and goals to build a complete picture of what success looks like for you.",
  bullets: ["Stakeholder interviews & business audit", "Audience and competitor analysis", "Brand and product positioning review", "Goal alignment and KPI definition"],
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
  alt: "Team in a discovery workshop with notes and laptops"
}, {
  id: "strategy",
  number: "02",
  title: "Strategy & Planning",
  subtitle: "Architecting the path",
  icon: Compass,
  description: "We translate insight into a clear strategy. Sitemaps, user flows, messaging hierarchy, and conversion architecture come together into a blueprint that guides every design and code decision.",
  bullets: ["Website strategy and content architecture", "User flows and journey mapping", "Conversion and growth planning", "Tech stack and integrations roadmap"],
  image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
  alt: "Strategy planning session with sticky notes and diagrams"
}, {
  id: "design",
  number: "03",
  title: "Wireframing & Design",
  subtitle: "Crafting the experience",
  icon: PenTool,
  description: "From low-fidelity wireframes to a polished, pixel-perfect UI system. We design layouts, typography, color, motion, and component libraries that feel unmistakably premium — and built to scale.",
  bullets: ["Wireframes and interactive prototypes", "Visual direction and moodboards", "UI system, components, and design tokens", "Micro-interactions and motion design"],
  image: "https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=1400&q=80",
  alt: "Designer working on UI wireframes and visual design"
}, {
  id: "development",
  number: "04",
  title: "Development",
  subtitle: "Engineering with care",
  icon: Code2,
  description: "We build with modern, performant stacks — React, TypeScript, and headless tooling — for sites that load fast, scale gracefully, and stay maintainable for years to come.",
  bullets: ["Modern responsive front-end engineering", "CMS, e-commerce, and API integrations", "Accessibility and SEO-first foundations", "Clean, documented, handover-ready code"],
  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80",
  alt: "Developer writing code on a laptop with multiple screens"
}, {
  id: "testing",
  number: "05",
  title: "Testing & Optimization",
  subtitle: "Polish until it shines",
  icon: TestTube2,
  description: "Before launch we test across devices, browsers, and real-world conditions. We optimize performance, accessibility, and conversion paths so what we ship feels effortless to your users.",
  bullets: ["Performance, Core Web Vitals, and SEO audits", "Cross-device and cross-browser QA", "Accessibility (WCAG) checks", "Analytics and tracking setup"],
  image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1400&q=80",
  alt: "Quality assurance and testing across multiple devices"
}, {
  id: "launch",
  number: "06",
  title: "Launch & Growth",
  subtitle: "Live — and built to evolve",
  icon: Rocket,
  description: "We handle deployment, monitoring, and post-launch support. Then we partner with you on iteration — refining UX, content, and conversions as your business grows.",
  bullets: ["Deployment and DNS handover", "Monitoring and post-launch support", "Iteration sprints and roadmap planning", "Long-term partnership and care"],
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  alt: "Launch and growth phase with analytics dashboards"
}];
function ProcessPage() {
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
    /* @__PURE__ */ jsxs("section", { className: "relative pt-36 sm:pt-44 pb-20 px-4 sm:px-6 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "ambient-glow", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full glass text-xs sm:text-sm font-medium text-foreground/80 hover:bg-foreground/5 transition", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
          "Back to home"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted uppercase tracking-widest mb-4", children: "Our Process" }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 text-gradient text-balance", children: "From first idea to a website that performs." }),
        /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed", children: "A transparent, six-step process built around clarity, craft, and measurable outcomes — so every project ships on time and built to last." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative py-16 sm:py-24 px-4 sm:px-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto space-y-24 sm:space-y-32", children: STEPS.map((step, i) => /* @__PURE__ */ jsx(StepBlock, { step, index: i }, step.id)) }) }),
    /* @__PURE__ */ jsx(CTASection, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function StepBlock({
  step,
  index
}) {
  const {
    ref,
    visible
  } = useReveal();
  const Icon = step.icon;
  const reversed = index % 2 === 1;
  return /* @__PURE__ */ jsxs("div", { ref, className: `reveal ${visible ? "is-visible" : ""} grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`, children: [
    /* @__PURE__ */ jsxs("div", { className: `relative group ${reversed ? "lg:order-2" : ""}`, children: [
      /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-secondary", children: [
        /* @__PURE__ */ jsx("img", { src: step.image, alt: step.alt, loading: "lazy", className: "w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute top-4 left-4 px-3 py-1.5 rounded-full glass text-xs font-semibold tracking-wider text-foreground", children: [
          "STEP ",
          step.number
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -z-10 -inset-6 rounded-[2rem] opacity-30 blur-2xl", style: {
        background: "radial-gradient(circle, var(--glow-1), transparent 70%)"
      }, "aria-hidden": true })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: reversed ? "lg:order-1" : "", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-sm uppercase tracking-widest text-muted", children: step.subtitle })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-5 text-balance", children: step.title }),
      /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg text-muted leading-relaxed mb-6", children: step.description }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: step.bullets.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-foreground/90", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 flex-shrink-0 mt-0.5 text-foreground" }),
        /* @__PURE__ */ jsx("span", { children: b })
      ] }, b)) })
    ] })
  ] });
}
function CTASection() {
  const navigate = useNavigate();
  const {
    ref,
    visible
  } = useReveal();
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 sm:py-32 px-4 sm:px-6 border-t border-border overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "ambient-glow", "aria-hidden": true }),
    /* @__PURE__ */ jsxs("div", { ref, className: `reveal ${visible ? "is-visible" : ""} relative max-w-4xl mx-auto text-center`, children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted uppercase tracking-widest mb-4", children: "Ready when you are" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl sm:text-5xl lg:text-6xl font-black text-gradient mb-6 text-balance", children: "Let’s build something extraordinary." }),
      /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10", children: "Share a few details and we’ll get back within a day with next steps." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxs("button", { onClick: () => window.dispatchEvent(new CustomEvent("open-inquiry")), className: "btn-premium group px-8 py-4 text-base bg-foreground text-background rounded-full font-semibold inline-flex items-center justify-center gap-2", children: [
          "Start your project",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1" })
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => navigate({
          to: "/"
        }), className: "btn-premium px-8 py-4 text-base border border-foreground/20 text-foreground rounded-full font-semibold hover:bg-foreground/5", children: "Back to home" })
      ] })
    ] })
  ] });
}
export {
  ProcessPage as component
};
