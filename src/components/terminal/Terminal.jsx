import useTypewriter from '../../hooks/useTypewriter';

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

const LINE_CLASS = {
  cmd: 'text-zinc-100',
  info: 'text-zinc-400',
  dim: 'text-zinc-600',
  phase: 'text-emerald-400/90',
  warn: 'text-amber-400/90',
  success: 'text-emerald-300',
  prompt: 'text-orange-400',
};

export default function Terminal({
  lines,
  title = 'axiom@assessment',
  className = '',
  typing = true,
}) {
  const reducedMotion = prefersReducedMotion();

  const { visibleLines, done } = useTypewriter(lines, {
    enabled: typing && !reducedMotion,
    charDelay: 14,
    lineDelay: 220,
  });

  const displayLines = reducedMotion || !typing ? lines : visibleLines;

  return (
    <div
      className={`terminal-window overflow-hidden rounded-lg border border-zinc-800/90 bg-[#0a0a0c] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_80px_rgba(0,0,0,0.65)] ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/80 bg-zinc-950/80">
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" aria-hidden="true" />
        <span className="ml-2 font-mono text-[10px] text-zinc-500 tracking-wide truncate">{title}</span>
        <span className="ml-auto font-mono text-[9px] text-zinc-600 uppercase tracking-widest hidden sm:inline">
          secure session
        </span>
      </div>
      <div className="terminal-body relative p-4 sm:p-5 min-h-[280px] sm:min-h-[320px] font-mono text-[11px] sm:text-xs leading-relaxed">
        <div className="scanline-overlay pointer-events-none" aria-hidden="true" />
        {displayLines.map((line, i) => (
          <div
            key={`${i}-${line.type}`}
            className={`whitespace-pre-wrap break-all ${LINE_CLASS[line.type] ?? 'text-zinc-400'}`}
          >
            {line.type === 'cmd' && <span className="text-orange-500/90 select-none">$ </span>}
            {line.type === 'prompt' && <span className="text-orange-500/90 select-none">&gt; </span>}
            {line.text}
            {line.active && (
              <span className="inline-block w-[7px] h-[14px] ml-0.5 align-middle bg-orange-500/80 terminal-cursor" aria-hidden="true" />
            )}
          </div>
        ))}
        {done && typing && !reducedMotion && (
          <span className="inline-block w-[7px] h-[14px] mt-1 bg-orange-500/60 terminal-cursor" aria-hidden="true" />
        )}
      </div>
    </div>
  );
}
