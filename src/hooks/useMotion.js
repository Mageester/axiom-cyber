import { useCallback, useEffect, useState } from 'react';

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useCursorGlow(containerRef, enabled = true) {
  useEffect(() => {
    const node = containerRef.current;
    if (!node || !enabled || prefersReducedMotion()) return undefined;

    const onMove = (e) => {
      const rect = node.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      node.style.setProperty('--cursor-x', `${x}%`);
      node.style.setProperty('--cursor-y', `${y}%`);
    };

    node.addEventListener('mousemove', onMove, { passive: true });
    return () => node.removeEventListener('mousemove', onMove);
  }, [containerRef, enabled]);
}

export function useCardGlow() {
  const onMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  }, []);

  return { onMouseMove: onMove };
}

export function useScrollParallax(factor = 0.15, maxOffset = 80) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = Math.min(window.scrollY * factor, maxOffset);
        setOffset(y);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [factor, maxOffset]);

  return offset;
}

export function useInViewActive(options = {}) {
  const [ref, setRef] = useState(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.15, ...options },
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options]);

  return { ref: setRef, active };
}
