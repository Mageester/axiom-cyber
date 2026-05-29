import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center pt-16 overflow-hidden bg-black text-center px-6 lg:px-8">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,90vw)] h-[min(600px,90vw)] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none motion-safe:animate-float"
        aria-hidden="true"
      />
      <div
        className="hidden md:block absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-amber-600/8 rounded-full blur-[90px] pointer-events-none motion-safe:animate-float delay-500"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none bg-[length:60px_60px] bg-[image:radial-gradient(circle_at_center,#3f3f46_1px,transparent_1px)]"
        aria-hidden="true"
      />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <div className="motion-safe:animate-fade-up">
          <SectionLabel>Axiom Infrastructure · Security Division</SectionLabel>
        </div>

        <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl lg:text-[5.25rem] font-medium tracking-tight text-white leading-[1.05] motion-safe:animate-fade-up delay-100 text-balance">
          Security assessment for
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600">
            {' '}infrastructure that matters.
          </span>
        </h1>

        <p className="mt-8 md:mt-10 text-base md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed motion-safe:animate-fade-up delay-200 text-pretty">
          We map your attack surface, test your defenses, and deliver structured findings
          your team can act on. No dashboards. No theatrics. Rigorous work and clear outputs.
        </p>

        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-5 motion-safe:animate-fade-up delay-300">
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-500 shadow-[0_0_20px_rgba(234,88,12,0.25)] hover:shadow-[0_0_32px_rgba(234,88,12,0.4)] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
          >
            <span>Request Assessment</span>
            <svg className="group-hover:translate-x-0.5 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/approach"
            className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors tracking-wide uppercase group flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 rounded-sm"
          >
            See Our Process
            <span className="block w-4 h-px bg-zinc-600 group-hover:bg-white group-hover:w-8 transition-all duration-300" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
