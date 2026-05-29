import { useScrollParallax } from '../../hooks/useMotion';

export default function GridBackground() {
  const parallaxY = useScrollParallax(0.12, 60);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-[#020202]" />
      <div
        className="absolute inset-0 cyber-grid opacity-40 will-change-transform"
        style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}
      />
      <div className="absolute inset-0 mesh-glow" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      <div className="absolute inset-0 vignette" />
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[min(1000px,120vw)] h-[600px] bg-orange-600/[0.06] rounded-full blur-[140px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[400px] bg-emerald-600/[0.04] rounded-full blur-[120px]" />
    </div>
  );
}
