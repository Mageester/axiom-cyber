import { Link } from 'react-router-dom';
import SectionHeader from '../components/layout/SectionHeader';
import Reveal from '../components/Reveal';

const STEPS = [
  { number: '01', title: 'Scoping', description: 'Boundary, approach, escalations, exclusions — documented first.', detail: '1–2 days' },
  { number: '02', title: 'Reconnaissance', description: 'External footprint and target model before active testing.', detail: '2–4 days' },
  { number: '03', title: 'Assessment', description: 'Methodology-driven testing with live finding capture.', detail: 'Scope-variable' },
  { number: '04', title: 'Reporting', description: 'Exec summary, technical detail, remediation per finding.', detail: '3–5 days' },
];

const DIFFERENTIATORS = [
  { title: 'Infrastructure-native', body: 'Built inside Axiom International — assessments informed by production engineering.' },
  { title: 'Engineer-grade output', body: 'Reproducible steps and remediation your team can execute.' },
  { title: 'No vendor agenda', body: 'Independent work. No tool resale or subscription upsell on findings.' },
];

export default function Operations() {
  return (
    <section id="operations" data-chapter="operations" className="py-24 lg:py-32 px-6 lg:px-8 border-t border-zinc-800/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="operations"
          title="How we work — and why it holds up under scrutiny."
          description="Predictable methodology plus an operator's view of how systems are actually built."
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 mt-4">
          <div>
            <h3 className="font-mono text-[10px] text-orange-500/90 uppercase tracking-[0.2em] mb-8">
              <span className="text-zinc-600">// </span>
              methodology
            </h3>
            <ol className="space-y-8 list-none p-0 m-0">
              {STEPS.map((step) => (
                <Reveal key={step.number}>
                  <li className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 font-mono text-xs text-orange-500">
                      {step.number}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                      <p className="mt-1 text-sm text-zinc-500 leading-relaxed">{step.description}</p>
                      <span className="inline-block mt-2 font-mono text-[10px] text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded">
                        {step.detail}
                      </span>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Link to="/approach" className="inline-flex mt-8 btn-ghost text-[10px]">
              Full approach →
            </Link>
          </div>

          <div>
            <h3 className="font-mono text-[10px] text-orange-500/90 uppercase tracking-[0.2em] mb-8">
              <span className="text-zinc-600">// </span>
              why axiom cyber
            </h3>
            <div className="space-y-4">
              {DIFFERENTIATORS.map((item, i) => (
                <Reveal key={item.title}>
                  <article
                    className="cyber-card p-5 stagger-child"
                    style={{ '--stagger-i': i }}
                  >
                    <h4 className="text-sm font-semibold text-zinc-100">{item.title}</h4>
                    <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
