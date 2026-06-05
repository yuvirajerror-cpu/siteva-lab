'use client';

import { useEffect, useRef, useState } from 'react';

export function PremiumCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const visible = useRef(false);
  const hovering = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add('cursor-active');

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visible.current) {
        visible.current = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '0.5';
      }
    };
    const onLeave = () => {
      visible.current = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      const interactive = !!el?.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]'
      );
      if (interactive !== hovering.current) {
        hovering.current = interactive;
        ringRef.current?.classList.toggle('is-hover', interactive);
        dotRef.current?.classList.toggle('is-hover', interactive);
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseleave', onLeave);

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
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
      document.documentElement.classList.remove('cursor-active');
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={ringRef} className="cursor-ring" style={{ opacity: 0 }} />
      <div ref={dotRef} className="cursor-dot" style={{ opacity: 0 }} />
    </>
  );
}
