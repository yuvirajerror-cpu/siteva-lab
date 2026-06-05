'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDark(savedTheme === 'dark');
    applyTheme(savedTheme === 'dark');
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    applyTheme(!isDark);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems: [string, string][] = [
    ['services', 'Services'],
    ['projects', 'Work'],
    ['about', 'About'],
    ['contact', 'Contact'],
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'pt-2' : 'pt-4'
      }`}
    >
      {/* Logo */}
      <div className="absolute left-4 sm:left-6 top-3 sm:top-4 w-11 sm:w-12 h-11 sm:h-12">
        <div className="w-full h-full rounded-full glass shadow-lg overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20siteva-vm89mOUd5Wr16Lg6P4jI5ozMfsCPt4.jpg"
            alt="SITEVA LAB Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right controls */}
      <div className="absolute right-4 sm:right-6 top-3 sm:top-4 flex items-center gap-2">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full glass text-foreground hover:bg-secondary transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full glass text-foreground hover:bg-secondary transition-colors duration-200 flex items-center justify-center"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex justify-center">
        <nav className="glass rounded-full px-2 py-2 flex gap-1 shadow-lg">
          {navItems.map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="px-5 py-2 rounded-full font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-all duration-200 text-sm"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 rounded-2xl glass shadow-xl animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col p-2">
            {navItems.map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="px-4 py-3 text-foreground font-medium hover:bg-foreground/5 transition-colors rounded-lg text-left"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
