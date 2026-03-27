import Button from '../components/Button';
import SectionLabel from '../components/SectionLabel';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* Grid background */}
      <div className="absolute inset-0 line-grid opacity-60 pointer-events-none" />

      {/* Top gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950 pointer-events-none" />

      {/* Radial accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Division mark */}
        <div className="flex justify-center mb-8 animate-fade-up">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-sm border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm">
            <div className="w-4 h-4 rounded-sm bg-blue-600 flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L12 4V10L7 13L2 10V4L7 1Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-zinc-400 tracking-widest uppercase">
              Axiom Infrastructure · Security Division
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-100 leading-[1.1] tracking-tight mb-6">
          Security assessment for
          <br />
          <span className="text-blue-400">infrastructure that matters.</span>
        </h1>

        {/* Subtext */}
        <p className="animate-fade-up delay-200 text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
          We map your attack surface, test your defenses, and deliver structured findings that your team can act on.
          No dashboards. No theatrics. Just rigorous work and clear outputs.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300 flex flex-wrap items-center justify-center gap-4">
          <Button href="#cta" id="hero-cta-primary">
            Request Assessment
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
          <Button href="#process" variant="ghost" id="hero-cta-process">
            See Our Process
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-up delay-500 mt-20 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-zinc-500" />
        </div>
      </div>
    </section>
  );
}
