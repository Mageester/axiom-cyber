import { ENGAGEMENTS, COMPARISON_FEATURES } from '../../lib/engagements';

export default function PlanComparison({ highlightId }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-800/80 bg-zinc-950/50">
      <table className="w-full min-w-[640px] text-left border-collapse">
        <thead>
          <tr className="border-b border-zinc-800">
            <th className="p-4 font-mono text-[10px] text-zinc-600 uppercase tracking-widest w-[40%]">
              Capability
            </th>
            {ENGAGEMENTS.map((plan) => (
              <th
                key={plan.id}
                className={`p-4 font-mono text-[10px] uppercase tracking-wider transition-colors ${
                  highlightId === plan.id ? 'text-orange-400 bg-orange-950/20' : 'text-zinc-400'
                }`}
              >
                {plan.code}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARISON_FEATURES.map((row) => (
            <tr key={row.id} className="border-b border-zinc-800/60 group hover:bg-zinc-900/30">
              <td className="p-4 text-sm text-zinc-400">{row.label}</td>
              {row.values.map((val, i) => (
                <td
                  key={ENGAGEMENTS[i].id}
                  className={`p-4 text-center transition-colors ${
                    highlightId === ENGAGEMENTS[i].id ? 'bg-orange-950/10' : ''
                  }`}
                >
                  {val === true ? (
                    <span className="text-emerald-400" aria-label="Included">✓</span>
                  ) : (
                    <span className="text-zinc-700" aria-label="Not included">—</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
