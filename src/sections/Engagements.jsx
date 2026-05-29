import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SectionHeader from '../components/layout/SectionHeader';
import PlanComparison from '../components/engagements/PlanComparison';
import Reveal from '../components/Reveal';
import { useCardGlow } from '../hooks/useMotion';
import { ENGAGEMENTS, ADD_ONS, ENGAGEMENT_FOOTNOTE, getEngagementById } from '../lib/engagements';

function PlanCard({ plan, selected, onSelect, compact }) {
  const glow = useCardGlow();

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onSelect(plan.id)}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(plan.id)}
      className={`plan-card plan-card-glow h-full flex flex-col cursor-pointer ${
        plan.featured ? 'plan-card-featured' : ''
      } ${selected ? 'plan-card-selected' : ''}`}
      {...glow}
    >
      {plan.featured && (
        <div className="plan-card-badge font-mono text-[9px] uppercase tracking-[0.2em]">
          Most selected
        </div>
      )}

      <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-[1]">
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

        {!compact && (
          <>
            <p className="mt-4 text-xs text-zinc-500">
              <span className="text-zinc-400 font-medium">Ideal for: </span>
              {plan.idealFor}
            </p>
            <ul className="mt-6 space-y-2 flex-1">
              {plan.includes.slice(0, 4).map((item) => (
                <li key={item} className="flex gap-2 text-sm text-zinc-400 leading-snug">
                  <span className="text-emerald-500/80 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}

        <Link
          to={`/contact?plan=${plan.id}`}
          onClick={(e) => e.stopPropagation()}
          className={`mt-8 w-full text-center ${plan.featured ? 'btn-primary' : 'btn-outline'}`}
        >
          Request this engagement
        </Link>
      </div>
    </article>
  );
}

function PlanDetailPanel({ plan }) {
  if (!plan) return null;

  return (
    <div className="cyber-card p-6 sm:p-8 lg:sticky lg:top-28">
      <p className="font-mono text-[10px] text-orange-500/90">{plan.code}</p>
      <h3 className="mt-2 text-2xl font-semibold text-white">{plan.name}</h3>
      <p className="mt-2 text-sm text-zinc-500">{plan.idealFor}</p>
      <p className="mt-6 text-3xl font-semibold text-white stat-value">{plan.investment}</p>
      <p className="font-mono text-[10px] text-zinc-600 mt-1">{plan.timeline} · CAD</p>
      <ul className="mt-8 space-y-2.5">
        {plan.includes.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-zinc-400">
            <span className="text-emerald-500/80">✓</span>
            {item}
          </li>
        ))}
      </ul>
      {plan.notIncluded?.length > 0 && (
        <p className="mt-6 text-[11px] font-mono text-zinc-600">
          excludes: {plan.notIncluded.join(' · ')}
        </p>
      )}
      <Link to={`/contact?plan=${plan.id}`} className="btn-primary w-full mt-8 text-center">
        Request {plan.name}
      </Link>
    </div>
  );
}

export default function Engagements({ showHeader = true, compact = false }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramPlan = searchParams.get('plan');
  const featuredId = ENGAGEMENTS.find((p) => p.featured)?.id;
  const urlPlanId =
    paramPlan && ENGAGEMENTS.some((p) => p.id === paramPlan) ? paramPlan : null;
  const [pickedId, setPickedId] = useState(featuredId);
  const selectedId = urlPlanId ?? pickedId;

  const selectPlan = (id) => {
    setPickedId(id);
    if (!compact) setSearchParams({ plan: id }, { replace: true });
  };

  const selected = getEngagementById(selectedId);

  return (
    <section id="engagements" data-chapter="engagements" className="py-24 lg:py-32 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/[0.04] to-transparent pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative">
        {showHeader && (
          <SectionHeader
            label="engagements"
            title="Plans built for how teams actually buy security work."
            description="Three core packages. Clear deliverables. Add-ons when you need depth — not a menu of buzzwords."
          />
        )}

        <div className={compact ? '' : 'grid lg:grid-cols-[1fr_340px] gap-8 items-start'}>
          <div>
            <div className="grid gap-6 lg:grid-cols-3">
              {ENGAGEMENTS.map((plan) => (
                <Reveal key={plan.id}>
                  <PlanCard
                    plan={plan}
                    selected={selectedId === plan.id}
                    onSelect={selectPlan}
                    compact={compact}
                  />
                </Reveal>
              ))}
            </div>

            {compact && (
              <Reveal className="mt-10">
                <PlanComparison highlightId={selectedId} />
              </Reveal>
            )}

            {!compact && (
              <Reveal className="mt-12">
                <h3 className="font-mono text-[10px] text-orange-500/90 uppercase tracking-[0.28em] mb-4">
                  <span className="text-zinc-600">// </span>
                  compare capabilities
                </h3>
                <PlanComparison highlightId={selectedId} />
              </Reveal>
            )}
          </div>

          {!compact && (
            <Reveal>
              <PlanDetailPanel plan={selected} />
            </Reveal>
          )}
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
