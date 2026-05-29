import Reveal from '../Reveal';

export default function SectionHeader({ label, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <Reveal className={`max-w-3xl mb-14 lg:mb-16 ${alignClass}`}>
      <p className="font-mono text-[10px] sm:text-[11px] font-medium text-orange-500/90 uppercase tracking-[0.28em] mb-4">
        <span className="text-zinc-600 select-none">// </span>
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-white tracking-tight leading-[1.1] text-balance">
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed text-pretty ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
