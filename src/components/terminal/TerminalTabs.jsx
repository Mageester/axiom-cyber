import { useState } from 'react';
import useTypewriter from '../../hooks/useTypewriter';
import { prefersReducedMotion, useInViewActive } from '../../hooks/useMotion';
import { TERMINAL_TABS } from './sequences';

const LINE_CLASS = {
  cmd: 'text-zinc-100',
  info: 'text-zinc-400',
  dim: 'text-zinc-600',
  phase: 'text-emerald-400/90',
  warn: 'text-amber-400/90',
  success: 'text-emerald-300',
  prompt: 'text-orange-400',
};

function TerminalBody({ lines, typing }) {
  const reducedMotion = prefersReducedMotion();
  const shouldType = typing && !reducedMotion;

  const { visibleLines, done } = useTypewriter(lines, {
    enabled: shouldType,
    charDelay: 14,
    lineDelay: 220,
    resetKey: `${lines[0]?.text ?? ''}-${shouldType}`,
  });

  const displayLines = reducedMotion || !shouldType ? lines : visibleLines;

  return (
    <div className="terminal-body relative p-4 sm:p-5 min-h-[280px] sm:min-h-[300px] font-mono text-[11px] sm:text-xs leading-relaxed">
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
      {done && shouldType && (
        <span className="inline-block w-[7px] h-[14px] mt-1 bg-orange-500/60 terminal-cursor" aria-hidden="true" />
      )}
    </div>
  );
}

export default function TerminalTabs({ className = '' }) {
  const [activeTab, setActiveTab] = useState(TERMINAL_TABS[0].id);
  const [resetKeys, setResetKeys] = useState({ engagement: 0, surface: 0, finding: 0 });
  const { ref, active: inView } = useInViewActive({ threshold: 0.2 });

  const current = TERMINAL_TABS.find((t) => t.id === activeTab) ?? TERMINAL_TABS[0];

  const selectTab = (id) => {
    setActiveTab(id);
    setResetKeys((k) => ({ ...k, [id]: (k[id] ?? 0) + 1 }));
  };

  return (
    <div
      ref={ref}
      className={`terminal-window overflow-hidden rounded-lg border border-zinc-800/90 bg-[#0a0a0c] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_80px_rgba(0,0,0,0.65)] ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/80 bg-zinc-950/80">
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" aria-hidden="true" />
        <span className="ml-2 font-mono text-[10px] text-zinc-500 tracking-wide">axiom-cyber — secure session</span>
      </div>

      <div className="flex border-b border-zinc-800/80 bg-black/40 overflow-x-auto" role="tablist">
        {TERMINAL_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => selectTab(tab.id)}
            className={`terminal-tab shrink-0 ${activeTab === tab.id ? 'terminal-tab-active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <TerminalBody
        key={`${current.id}-${resetKeys[current.id]}-${inView}`}
        lines={current.lines}
        typing={inView}
      />
    </div>
  );
}
