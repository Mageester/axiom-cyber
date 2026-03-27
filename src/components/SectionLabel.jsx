export default function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-blue-400 mb-4">
      <span className="inline-block w-4 h-px bg-blue-400" />
      {children}
    </span>
  );
}
