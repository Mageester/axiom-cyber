import { useRef } from 'react';
import { useCursorGlow } from '../../hooks/useMotion';

export default function CursorGlow({ className = '' }) {
  const ref = useRef(null);
  useCursorGlow(ref);

  return (
    <div
      ref={ref}
      className={`hero-cursor-glow pointer-events-none absolute inset-0 z-0 ${className}`}
      aria-hidden="true"
    />
  );
}
