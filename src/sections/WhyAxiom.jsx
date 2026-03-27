import SectionLabel from '../components/SectionLabel';

const DIFFERENTIATORS = [
  {
    id: 'diff-infra',
    label: '01',
    title: 'Built inside an infrastructure company.',
    body: "We're not a standalone security consultancy. Axiom Cyber operates as a division of Axiom Infrastructure — which means our security assessments are informed by how web systems are actually built, deployed, and scaled.",
  },
  {
    id: 'diff-output',
    label: '02',
    title: 'Deliverables your team can use.',
    body: 'Every engagement produces structured reports with reproducible findings, risk-ranked observations, and concrete remediation steps. We write for engineers, not for compliance checkboxes.',
  },
  {
    id: 'diff-scope',
    label: '03',
    title: 'Scoped to your actual exposure.',
    body: "We don't run generic scans and call it a pentest. We scope engagements to your real architecture, identify high-value targets, and focus testing effort where it produces meaningful findings.",
  },
  {
    id: 'diff-posture',
    label: '04',
    title: 'No vendor dependency.',
    body: 'We produce independent assessments with no interest in selling you tools, platforms, or subscriptions. Our findings are yours. Remediation is carried out by your team, on your timeline.',
  },
  {
    id: 'diff-speed',
    label: '05',
    title: 'Efficient engagement timelines.',
    body: 'We operate lean. Scoping, testing, and reporting move quickly. Most engagements complete without extended scheduling delays or multi-month procurement processes.',
  },
  {
    id: 'diff-trust',
    label: '06',
    title: 'Transparent methodology.',
    body: 'You see exactly what was tested, what was not, how findings were validated, and what assumptions were made. No opaque black-box reports with unexplained severity scores.',
  },
];

export default function WhyAxiom() {
  return (
    <section id="why" className="py-24 lg:py-32 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <SectionLabel>Why Axiom Cyber</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight max-w-2xl leading-[1.2]">
            The assessment practice for organizations that care about the quality of the work.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIATORS.map((item) => (
            <div key={item.id} id={item.id} className="group">
              <div className="flex items-start gap-4 p-6 -m-6 rounded-2xl border border-transparent hover:bg-zinc-900/50 hover:border-zinc-800/50 hover:shadow-xl transition-all duration-500">
                <span className="font-mono text-xs text-zinc-600 group-hover:text-blue-500 pt-1 flex-shrink-0 w-6 transition-colors duration-300">{item.label}</span>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-300 mb-2 leading-snug group-hover:text-zinc-100 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
