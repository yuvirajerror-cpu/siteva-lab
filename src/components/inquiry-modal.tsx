'use client';

import { useEffect, useState } from 'react';
import { X, Send, CheckCircle2, Loader2 } from 'lucide-react';

interface InquiryModalProps {
  open: boolean;
  onClose: () => void;
}

const PROJECT_TYPES = [
  'Business / Marketing Website',
  'E-commerce Store',
  'SaaS / Web Application',
  'Portfolio',
  'Landing Page',
  'Branding & Design',
  'Other',
];

const BUDGET_RANGES = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $7,000',
  '$7,000 – $15,000',
  '$15,000+',
];

export function InquiryModal({ open, onClose }: InquiryModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: PROJECT_TYPES[0],
    budget: BUDGET_RANGES[1],
    details: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.length > 100) e.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.email.length > 255)
      e.email = 'Enter a valid email';
    if (form.company.length > 150) e.company = 'Too long';
    if (!form.details.trim() || form.details.length > 2000)
      e.details = 'Please describe your project';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    const message =
      `Hi SITEVA LAB, I'd like to start a project.\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Company: ${form.company || '—'}\n` +
      `Project Type: ${form.projectType}\n` +
      `Budget: ${form.budget}\n\n` +
      `Details:\n${form.details}`;

    // Send via WhatsApp (fast path) — opens in new tab
    const url = `https://wa.me/919890646083?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const reset = () => {
    setSubmitted(false);
    setForm({
      name: '',
      email: '',
      company: '',
      projectType: PROJECT_TYPES[0],
      budget: BUDGET_RANGES[1],
      details: '',
    });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
    >
      <div
        className="absolute inset-0 bg-background/70 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 w-10 h-10 rounded-full bg-secondary hover:bg-secondary/70 text-foreground flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center py-20 px-6">
            <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mb-5">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-2">
              Thanks, {form.name.split(' ')[0]}!
            </h3>
            <p className="text-muted max-w-sm mb-6">
              Your inquiry was prepared and opened in WhatsApp. We&rsquo;ll reply within 24 hours.
            </p>
            <div className="flex gap-3">
              <button
                onClick={reset}
                className="px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors"
              >
                Send another
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-muted mb-2">Project Inquiry</p>
              <h2 id="inquiry-title" className="text-2xl sm:text-3xl font-black text-foreground">
                Start your project
              </h2>
              <p className="text-sm text-muted mt-2">
                Tell us a bit about what you&rsquo;re building. We typically reply within a day.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  error={errors.name}
                  maxLength={100}
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  error={errors.email}
                  maxLength={255}
                  required
                />
              </div>

              <Field
                label="Company Name"
                value={form.company}
                onChange={(v) => setForm({ ...form, company: v })}
                error={errors.company}
                maxLength={150}
                placeholder="Optional"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <SelectField
                  label="Project Type"
                  value={form.projectType}
                  onChange={(v) => setForm({ ...form, projectType: v })}
                  options={PROJECT_TYPES}
                />
                <SelectField
                  label="Budget Range"
                  value={form.budget}
                  onChange={(v) => setForm({ ...form, budget: v })}
                  options={BUDGET_RANGES}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Details <span className="text-muted">*</span>
                </label>
                <textarea
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  rows={5}
                  maxLength={2000}
                  placeholder="Goals, timeline, references, anything that helps us understand your project…"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition resize-none"
                />
                {errors.details && (
                  <p className="text-xs text-destructive mt-1">{errors.details}</p>
                )}
                <p className="text-xs text-muted mt-1">{form.details.length}/2000</p>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-premium w-full px-6 py-4 rounded-full bg-foreground text-background font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send inquiry <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-xs text-muted text-center">
                By submitting, you agree to be contacted about your project.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = 'text',
  maxLength,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  maxLength?: number;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">
        {label} {required && <span className="text-muted">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition"
      />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition appearance-none cursor-pointer"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
