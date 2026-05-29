export default function Logo({ className = 'h-9 sm:h-10 w-auto' }) {
  return (
    <img
      src="/logo.png"
      alt="Axiom Cyber"
      className={`object-contain object-left ${className}`}
      width={180}
      height={40}
      decoding="async"
    />
  );
}
