import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { Sun, Moon, X, Menu, ArrowUpRight, Mail, MessageCircle, Instagram, CheckCircle2, Loader2, Send } from "lucide-react";
function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDark(savedTheme === "dark");
    applyTheme(savedTheme === "dark");
  }, []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const applyTheme = (dark) => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  const toggleTheme = () => {
    setIsDark(!isDark);
    applyTheme(!isDark);
  };
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };
  const navItems = [
    ["services", "Services"],
    ["projects", "Work"],
    ["about", "About"],
    ["contact", "Contact"]
  ];
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "pt-2" : "pt-4"}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-4 sm:left-6 top-3 sm:top-4 w-11 sm:w-12 h-11 sm:h-12", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full rounded-full glass shadow-lg overflow-hidden", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20siteva-vm89mOUd5Wr16Lg6P4jI5ozMfsCPt4.jpg",
            alt: "SITEVA LAB Logo",
            className: "w-full h-full object-cover"
          }
        ) }) }),
        /* @__PURE__ */ jsxs("div", { className: "absolute right-4 sm:right-6 top-3 sm:top-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: toggleTheme,
              "aria-label": "Toggle theme",
              className: "w-10 h-10 sm:w-11 sm:h-11 rounded-full glass text-foreground hover:bg-secondary transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5",
              children: isDark ? /* @__PURE__ */ jsx(Sun, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Moon, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsMenuOpen(!isMenuOpen),
              "aria-label": "Toggle menu",
              className: "md:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full glass text-foreground hover:bg-secondary transition-colors duration-200 flex items-center justify-center",
              children: isMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:flex justify-center", children: /* @__PURE__ */ jsx("nav", { className: "glass rounded-full px-2 py-2 flex gap-1 shadow-lg", children: navItems.map(([id, label]) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scrollToSection(id),
            className: "px-5 py-2 rounded-full font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-all duration-200 text-sm",
            children: label
          },
          id
        )) }) }),
        isMenuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden fixed top-20 left-4 right-4 rounded-2xl glass shadow-xl animate-in fade-in slide-in-from-top-2 duration-300", children: /* @__PURE__ */ jsx("nav", { className: "flex flex-col p-2", children: navItems.map(([id, label]) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scrollToSection(id),
            className: "px-4 py-3 text-foreground font-medium hover:bg-foreground/5 transition-colors rounded-lg text-left",
            children: label
          },
          id
        )) }) })
      ]
    }
  );
}
function Footer() {
  const handleEmail = () => {
    window.location.href = "mailto:sitevalab@gmail.com?subject=Project%20Inquiry";
  };
  const handleWhatsApp = () => {
    window.open("https://wa.me/919890646083", "_blank");
  };
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return /* @__PURE__ */ jsxs("footer", { className: "relative bg-background border-t border-border pt-20 pb-10 px-4 sm:px-6 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "ambient-glow opacity-60", "aria-hidden": true }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-10 mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-4xl sm:text-5xl font-black text-gradient mb-4", children: "SITEVA LAB" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted max-w-sm leading-relaxed", children: "Premium websites and digital experiences for modern brands." }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: scrollTop,
              className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors",
              children: [
                "Back to top",
                /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground mb-4 text-xs uppercase tracking-widest", children: "Navigation" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: [
            ["services", "Services"],
            ["projects", "Work"],
            ["about", "About"],
            ["contact", "Contact"]
          ].map(([id, label]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollToSection(id),
              className: "text-muted hover:text-foreground text-sm transition-colors",
              children: label
            }
          ) }, id)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-3", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground mb-4 text-xs uppercase tracking-widest", children: "Contact" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "mailto:sitevalab@gmail.com",
                className: "text-muted hover:text-foreground text-sm transition-colors break-all",
                children: "sitevalab@gmail.com"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://wa.me/919890646083",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-muted hover:text-foreground text-sm transition-colors",
                children: "+91 98906 46083"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground mb-4 text-xs uppercase tracking-widest", children: "Connect" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleEmail,
                className: "w-10 h-10 rounded-full border border-border bg-card/60 hover:border-foreground hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center",
                "aria-label": "Email",
                children: /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-foreground" })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleWhatsApp,
                className: "w-10 h-10 rounded-full border border-border bg-card/60 hover:border-foreground hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center",
                "aria-label": "WhatsApp",
                children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4 text-foreground" })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.instagram.com/sitevalab?igsh=MW43cXJiZDZpM3BtcA==",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "w-10 h-10 rounded-full border border-border bg-card/60 hover:border-foreground hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center",
                "aria-label": "Instagram",
                children: /* @__PURE__ */ jsx(Instagram, { className: "w-4 h-4 text-foreground" })
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted text-sm", children: "© 2026 SITEVA LAB. All rights reserved." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted text-sm", children: "Founded by Yuvraj Pawar" })
      ] })
    ] })
  ] });
}
function PremiumCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const visible = useRef(false);
  const hovering = useRef(false);
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-active");
    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visible.current) {
        visible.current = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "0.5";
      }
    };
    const onLeave = () => {
      visible.current = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };
    const onOver = (e) => {
      const el = e.target;
      const interactive = !!el?.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]'
      );
      if (interactive !== hovering.current) {
        hovering.current = interactive;
        ringRef.current?.classList.toggle("is-hover", interactive);
        dotRef.current?.classList.toggle("is-hover", interactive);
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    let raf = 0;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.55;
      pos.current.y += (target.current.y - pos.current.y) * 0.55;
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x - 4}px, ${pos.current.y - 4}px, 0)`;
      }
      if (ringRef.current) {
        const size = hovering.current ? 30 : 19;
        ringRef.current.style.transform = `translate3d(${ringPos.current.x - size}px, ${ringPos.current.y - size}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("cursor-active");
    };
  }, []);
  if (!enabled) return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { ref: ringRef, className: "cursor-ring", style: { opacity: 0 } }),
    /* @__PURE__ */ jsx("div", { ref: dotRef, className: "cursor-dot", style: { opacity: 0 } })
  ] });
}
const PROJECT_TYPES = [
  "Business / Marketing Website",
  "E-commerce Store",
  "SaaS / Web Application",
  "Portfolio",
  "Landing Page",
  "Branding & Design",
  "Other"
];
const BUDGET_RANGES = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $7,000",
  "$7,000 – $15,000",
  "$15,000+"
];
function InquiryModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: PROJECT_TYPES[0],
    budget: BUDGET_RANGES[1],
    details: ""
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.length > 100) e.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.email.length > 255)
      e.email = "Enter a valid email";
    if (form.company.length > 150) e.company = "Too long";
    if (!form.details.trim() || form.details.length > 2e3)
      e.details = "Please describe your project";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    const message = `Hi SITEVA LAB, I'd like to start a project.

Name: ${form.name}
Email: ${form.email}
Company: ${form.company || "—"}
Project Type: ${form.projectType}
Budget: ${form.budget}

Details:
${form.details}`;
    const url = `https://wa.me/919890646083?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };
  const reset = () => {
    setSubmitted(false);
    setForm({
      name: "",
      email: "",
      company: "",
      projectType: PROJECT_TYPES[0],
      budget: BUDGET_RANGES[1],
      details: ""
    });
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "inquiry-title",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 bg-background/70 backdrop-blur-md",
            onClick: onClose
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onClose,
              "aria-label": "Close",
              className: "absolute right-4 top-4 z-10 w-10 h-10 rounded-full bg-secondary hover:bg-secondary/70 text-foreground flex items-center justify-center transition-colors",
              children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
            }
          ),
          submitted ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center text-center py-20 px-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mb-5", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-8 h-8" }) }),
            /* @__PURE__ */ jsxs("h3", { className: "text-2xl sm:text-3xl font-black text-foreground mb-2", children: [
              "Thanks, ",
              form.name.split(" ")[0],
              "!"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted max-w-sm mb-6", children: "Your inquiry was prepared and opened in WhatsApp. We’ll reply within 24 hours." }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: reset,
                  className: "px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors",
                  children: "Send another"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: onClose,
                  className: "px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity",
                  children: "Close"
                }
              )
            ] })
          ] }) : /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-muted mb-2", children: "Project Inquiry" }),
              /* @__PURE__ */ jsx("h2", { id: "inquiry-title", className: "text-2xl sm:text-3xl font-black text-foreground", children: "Start your project" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted mt-2", children: "Tell us a bit about what you’re building. We typically reply within a day." })
            ] }),
            /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsx(
                  Field,
                  {
                    label: "Name",
                    value: form.name,
                    onChange: (v) => setForm({ ...form, name: v }),
                    error: errors.name,
                    maxLength: 100,
                    required: true
                  }
                ),
                /* @__PURE__ */ jsx(
                  Field,
                  {
                    label: "Email",
                    type: "email",
                    value: form.email,
                    onChange: (v) => setForm({ ...form, email: v }),
                    error: errors.email,
                    maxLength: 255,
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                Field,
                {
                  label: "Company Name",
                  value: form.company,
                  onChange: (v) => setForm({ ...form, company: v }),
                  error: errors.company,
                  maxLength: 150,
                  placeholder: "Optional"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsx(
                  SelectField,
                  {
                    label: "Project Type",
                    value: form.projectType,
                    onChange: (v) => setForm({ ...form, projectType: v }),
                    options: PROJECT_TYPES
                  }
                ),
                /* @__PURE__ */ jsx(
                  SelectField,
                  {
                    label: "Budget Range",
                    value: form.budget,
                    onChange: (v) => setForm({ ...form, budget: v }),
                    options: BUDGET_RANGES
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-foreground mb-2", children: [
                  "Project Details ",
                  /* @__PURE__ */ jsx("span", { className: "text-muted", children: "*" })
                ] }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    value: form.details,
                    onChange: (e) => setForm({ ...form, details: e.target.value }),
                    rows: 5,
                    maxLength: 2e3,
                    placeholder: "Goals, timeline, references, anything that helps us understand your project…",
                    className: "w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition resize-none"
                  }
                ),
                errors.details && /* @__PURE__ */ jsx("p", { className: "text-xs text-destructive mt-1", children: errors.details }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted mt-1", children: [
                  form.details.length,
                  "/2000"
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  disabled: submitting,
                  className: "btn-premium w-full px-6 py-4 rounded-full bg-foreground text-background font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-60",
                  children: submitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 animate-spin" }),
                    " Sending…"
                  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    "Send inquiry ",
                    /* @__PURE__ */ jsx(Send, { className: "w-4 h-4" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted text-center", children: "By submitting, you agree to be contacted about your project." })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  maxLength,
  placeholder,
  required
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-foreground mb-2", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsx("span", { className: "text-muted", children: "*" })
    ] }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type,
        value,
        onChange: (e) => onChange(e.target.value),
        maxLength,
        placeholder,
        className: "w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition"
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "text-xs text-destructive mt-1", children: error })
  ] });
}
function SelectField({
  label,
  value,
  onChange,
  options
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-foreground mb-2", children: label }),
    /* @__PURE__ */ jsx(
      "select",
      {
        value,
        onChange: (e) => onChange(e.target.value),
        className: "w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition appearance-none cursor-pointer",
        children: options.map((o) => /* @__PURE__ */ jsx("option", { value: o, children: o }, o))
      }
    )
  ] });
}
function useReveal(options = { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(e.target);
        }
      });
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}
function useCountUp(target, start, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}
export {
  Footer as F,
  Header as H,
  InquiryModal as I,
  PremiumCursor as P,
  useCountUp as a,
  useReveal as u
};
