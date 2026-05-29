const SIZES = {
  nav: 'h-12 sm:h-14 md:h-[4.25rem] w-auto min-w-[200px] sm:min-w-[240px] md:min-w-[280px] max-w-[min(320px,55vw)]',
  footer: 'h-14 sm:h-16 md:h-[4.5rem] w-auto min-w-[220px] max-w-[340px]',
  hero: 'h-16 sm:h-20 md:h-24 w-auto min-w-[260px] sm:min-w-[320px] max-w-[420px]',
  mark: 'h-10 w-auto min-w-[180px]',
};

export default function Logo({ variant = 'nav', className = '' }) {
  const sizeClass = SIZES[variant] ?? SIZES.nav;

  return (
    <img
      src="/logo.png"
      alt="Axiom Cyber"
      className={`object-contain object-left drop-shadow-[0_0_28px_rgba(255,255,255,0.12)] ${sizeClass} ${className}`}
      width={320}
      height={72}
      decoding="async"
      fetchPriority={variant === 'nav' || variant === 'hero' ? 'high' : 'auto'}
    />
  );
}
