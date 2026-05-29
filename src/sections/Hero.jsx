import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import TerminalTabs from '../components/terminal/TerminalTabs';
import CursorGlow from '../components/effects/CursorGlow';
import { SITE } from '../lib/site';

export default function Hero() {
  return (
    <section className="hero-shell relative min-h-screen flex items-center pt-[88px] pb-20 lg:pb-28 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 hero-aurora pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 film-grain pointer-events-none" aria-hidden="true" />
      <CursorGlow />
      <div className="scan-line-ambient pointer-events-none" aria-hidden="true" />

      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[min(800px,95vw)] opacity-[0.03] pointer-events-none select-none"
        aria-hidden="true"
      >
        <Logo variant="hero" className="!max-w-none w-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center relative z-10">
        <div>
          <div className="hero-enter mb-8">
            <Logo variant="hero" />
          </div>

          <p className="hero-enter hero-enter-d1 font-mono text-[10px] sm:text-[11px] text-orange-500/90 uppercase tracking-[0.28em] mb-5">
            <span className="text-zinc-600">// </span>
            {SITE.parent} · offensive security
          </p>

          <h1 className="hero-enter hero-enter-d1 text-4xl sm:text-5xl xl:text-[3.75rem] font-semibold text-white tracking-tight leading-[1.02] text-balance">
            Penetration testing for infrastructure{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
              you cannot afford to misjudge.
            </span>
          </h1>

          <p className="hero-enter hero-enter-d2 mt-6 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed text-pretty">
            Structured engagements with clear scope, reproducible findings, and defined investment — built by the
            same discipline behind {SITE.sibling.label}.
          </p>

          <div className="hero-enter hero-enter-d3 mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link to="/engagements" className="btn-primary">
              View engagement options
            </Link>
            <Link to="/contact" className="btn-outline">
              Request assessment
            </Link>
          </div>

          <dl className="hero-enter hero-enter-d4 mt-12 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { k: 'Packages', v: '3 core' },
              { k: 'Output', v: 'Reproducible' },
              { k: 'Model', v: 'Independent' },
            ].map((item) => (
              <div key={item.k} className="border-l-2 border-orange-500/30 pl-3">
                <dt className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">{item.k}</dt>
                <dd className="text-sm font-semibold text-zinc-200 mt-0.5">{item.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-enter hero-enter-d2 lg:hero-enter-d3 relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-orange-600/10 via-transparent to-emerald-600/5 rounded-2xl blur-2xl pointer-events-none" aria-hidden="true" />
          <TerminalTabs className="relative ring-1 ring-white/5" />
        </div>
      </div>
    </section>
  );
}
