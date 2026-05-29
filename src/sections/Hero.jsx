import { Link } from 'react-router-dom';
import Terminal from '../components/terminal/Terminal';
import { HERO_TERMINAL } from '../components/terminal/sequences';
import { SITE } from '../lib/site';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center pt-[72px] pb-20 lg:pb-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="hero-enter font-mono text-[10px] sm:text-[11px] text-orange-500/90 uppercase tracking-[0.28em] mb-6">
            <span className="text-zinc-600">// </span>
            {SITE.parent} · offensive security
          </p>

          <h1 className="hero-enter hero-enter-d1 text-4xl sm:text-5xl xl:text-[3.5rem] font-semibold text-white tracking-tight leading-[1.05] text-balance">
            Penetration testing for infrastructure{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
              you cannot afford to misjudge.
            </span>
          </h1>

          <p className="hero-enter hero-enter-d2 mt-6 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed text-pretty">
            We map external exposure, execute controlled assessments, and deliver findings your engineers
            can reproduce — no dashboard theatre, no vendor upsell.
          </p>

          <div className="hero-enter hero-enter-d3 mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link to="/contact" className="btn-primary">
              Request Assessment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link to="/approach" className="btn-ghost">
              View methodology
            </Link>
          </div>

          <dl className="hero-enter hero-enter-d4 mt-12 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: 'Scope', v: 'Documented' },
              { k: 'Output', v: 'Reproducible' },
              { k: 'Model', v: 'Independent' },
            ].map((item) => (
              <div key={item.k} className="border-l border-zinc-800 pl-3">
                <dt className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">{item.k}</dt>
                <dd className="text-sm font-medium text-zinc-300 mt-0.5">{item.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-enter hero-enter-d2 lg:hero-enter-d3 relative">
          <div className="absolute -inset-4 bg-orange-600/5 rounded-2xl blur-2xl pointer-events-none" aria-hidden="true" />
          <Terminal lines={HERO_TERMINAL} title="axiom-cyber — engagement.log" className="relative" />
        </div>
      </div>
    </section>
  );
}
