import SectionLabel from '../components/SectionLabel';

const STATS = [
  { id: 'stat-dwell', value: '204', unit: 'days', label: 'Median dwell time before detection (IBM 2023)' },
  { id: 'stat-discovery', value: '78%', unit: '', label: 'Of breaches discovered by a third party, not internally' },
  { id: 'stat-attack', value: '21', unit: 'hrs', label: 'Average time from initial access to lateral movement' },
  { id: 'stat-vulns', value: '60%', unit: '', label: 'Of known exploited vulnerabilities remain unpatched after 30 days' },
];

export default function RiskExposure() {
  return (
    <section id="risk" className="py-24 lg:py-32 bg-zinc-950 border-y border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Copy */}
          <div>
            <SectionLabel>Exposure Framing</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight leading-[1.2] mb-6">
              Most organizations
              <br />
              don't know what's visible.
            </h2>
            <div className="space-y-5 text-sm text-zinc-400 leading-relaxed">
              <p>
                Your attack surface is the set of all possible points where an adversary might enter your environment.
                It grows with every new service, third-party integration, and team that deploys infrastructure independently.
              </p>
              <p>
                The problem is rarely that organizations aren't trying to be secure. It's that they lack a
                structured, external view of what's actually exposed — and the time or expertise to develop one internally.
              </p>
              <p>
                A structured assessment provides that view. Not as a one-time exercise, but as a reference point
                that your team can act against systematically.
              </p>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-800">
            {STATS.map((stat) => (
              <div key={stat.id} id={stat.id} className="bg-zinc-950 p-8">
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-3xl font-semibold text-zinc-100 tabular-nums leading-none">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-base font-medium text-blue-400 leading-none mb-0.5">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
