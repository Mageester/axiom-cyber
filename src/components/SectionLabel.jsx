export default function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-6">
      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
      <span className="text-[10px] font-semibold text-zinc-300 uppercase tracking-[0.2em]">{children}</span>
    </div>
  );
}
