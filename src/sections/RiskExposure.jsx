import SectionHeader from '../components/layout/SectionHeader';
import Reveal from '../components/Reveal';

const STATS = [
  { value: '204', unit: 'days', label: 'Median dwell time before detection (IBM, 2023)' },
  { value: '78%', unit: '', label: 'Breaches discovered by a third party — not internally' },
  { value: '21', unit: 'hrs', label: 'Average time from initial access to lateral movement' },
  { value: '60%', unit: '', label: 'Known exploited CVEs still unpatched after 30 days' },
];

export default function RiskExposure() {
  return (
    <section id="exposure" className="py-24 lg:py-32 px-6 lg:px-8 border-y border-zinc-800/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <SectionHeader
            label="exposure"
            title="Most organizations do not know what is visible from the outside."
            description="Attack surface grows with every deployment, integration, and vendor. A structured external assessment closes the visibility gap before adversaries exploit it."
          />

          <div className="grid grid-cols-2 gap-px bg-zinc-800/80 rounded-lg overflow-hidden border border-zinc-800/80">
            {STATS.map((stat) => (
              <Reveal key={stat.label}>
                <div className="bg-[#0a0a0c] p-6 sm:p-8 h-full hover:bg-zinc-900/50 transition-colors">
                  <div className="flex items-end gap-1 mb-2">
                    <span className="stat-value text-2xl sm:text-3xl font-semibold text-white">{stat.value}</span>
                    {stat.unit && (
                      <span className="text-sm font-mono text-orange-400/90 mb-0.5">{stat.unit}</span>
                    )}
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed font-mono">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
