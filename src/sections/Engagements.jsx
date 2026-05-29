import { Link } from 'react-router-dom';
import SectionHeader from '../components/layout/SectionHeader';
import Reveal from '../components/Reveal';
import { ENGAGEMENTS, ADD_ONS, ENGAGEMENT_FOOTNOTE } from '../lib/engagements';

export default function Engagements({ showHeader = true, compact = false }) {
  return (
    <section id="engagements" className="py-24 lg:py-32 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/[0.04] to-transparent pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative">
        {showHeader && (
          <SectionHeader
            label="engagements"
            title="Plans built for how teams actually buy security work."
            description="Three core packages. Clear deliverables. Add-ons when you need depth — not a menu of buzzwords."
          />
        )}

        <div className="grid gap-6 lg:grid-cols-3">
          {ENGAGEMENTS.map((plan) => (
            <Reveal key={plan.id}>
              <article
                className={`plan-card h-full flex flex-col ${
                  plan.featured ? 'plan-card-featured' : ''
                }`}
              >
                {plan.featured && (
                  <div className="plan-card-badge font-mono text-[9px] uppercase tracking-[0.2em]">
                    Most selected
                  </div>
                )}

                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="font-mono text-[10px] text-orange-500/90">{plan.code}</span>
                    <span className="font-mono text-[10px] text-zinc-600">{plan.timeline}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white tracking-tight">{plan.name}</h3>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{plan.tagline}</p>

                  <div className="mt-6 py-4 border-y border-zinc-800/80">
                    <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-1">
                      Typical investment
                    </p>
                    <p className="text-2xl sm:text-3xl font-semibold text-white tracking-tight stat-value">
                      {plan.investment}
                    </p>
                    <p className="mt-1 text-[11px] text-zinc-600 font-mono">CAD · scoped individually</p>
                  </div>

                  <p className="mt-4 text-xs text-zinc-500">
                    <span className="text-zinc-400 font-medium">Ideal for: </span>
                    {plan.idealFor}
                  </p>

                  <ul className="mt-6 space-y-2.5 flex-1">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-zinc-400 leading-snug">
                        <span className="text-emerald-500/80 shrink-0 mt-0.5" aria-hidden="true">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {!compact && plan.notIncluded?.length > 0 && (
                    <p className="mt-4 text-[11px] text-zinc-600 font-mono leading-relaxed">
                      <span className="text-zinc-500">excludes: </span>
                      {plan.notIncluded.join(' · ')}
                    </p>
                  )}

                  <Link
                    to={`/contact?plan=${plan.id}`}
                    className={`mt-8 w-full text-center ${plan.featured ? 'btn-primary' : 'btn-outline'}`}
                  >
                    Request this engagement
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {!compact && (
          <>
            <Reveal className="mt-16">
              <h3 className="font-mono text-[10px] text-orange-500/90 uppercase tracking-[0.28em] mb-6">
                <span className="text-zinc-600">// </span>
                add-ons
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {ADD_ONS.map((addon) => (
                  <div key={addon.id} className="cyber-card p-5">
                    <p className="text-sm font-semibold text-zinc-200">{addon.name}</p>
                    <p className="mt-2 text-xs text-zinc-500 leading-relaxed">{addon.description}</p>
                    <div className="mt-4 flex items-end justify-between gap-2">
                      <span className="font-mono text-[10px] text-zinc-600">{addon.timeline}</span>
                      <span className="font-mono text-xs text-orange-400/90">{addon.investment}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <p className="mt-10 text-center text-[11px] text-zinc-600 font-mono max-w-2xl mx-auto leading-relaxed">
              * {ENGAGEMENT_FOOTNOTE}
            </p>
          </>
        )}

        {compact && (
          <Reveal className="mt-10 text-center">
            <Link to="/engagements" className="btn-ghost inline-flex">
              Compare all engagements
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
