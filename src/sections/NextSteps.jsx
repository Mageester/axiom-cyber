import Reveal from '../components/Reveal';

const STEPS = [
  {
    num: '01',
    title: 'You submit scope',
    body: 'Infrastructure description, goals, and any constraints. We respond manually — usually within one business day.',
  },
  {
    num: '02',
    title: 'Scoping call',
    body: '30–45 minutes to align boundaries, access, maintenance windows, and which engagement package fits.',
  },
  {
    num: '03',
    title: 'Written proposal',
    body: 'Rules of engagement, timeline, investment, and deliverables. Work starts only after mutual sign-off.',
  },
];

export default function NextSteps() {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="font-mono text-[10px] text-orange-500/90 uppercase tracking-[0.28em] mb-8 text-center">
            <span className="text-zinc-600">// </span>
            after you reach out
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <Reveal key={step.num}>
              <div className="text-center md:text-left p-6 rounded-xl border border-zinc-800/60 bg-zinc-950/30">
                <span className="font-mono text-2xl font-semibold text-orange-500/40">{step.num}</span>
                <h3 className="mt-3 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
