export default function Logo({ compact = false, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <path
          d="M16 2L4 8v8c0 7.2 5.1 13.9 12 15.4 6.9-1.5 12-8.2 12-15.4V8L16 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-orange-500/90"
        />
        <path
          d="M16 9v10M12 13h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-orange-400"
        />
      </svg>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-semibold tracking-tight text-white">Axiom</span>
          <span className="text-[9px] font-semibold tracking-[0.22em] text-orange-500 uppercase">
            Cyber
          </span>
        </span>
      )}
    </span>
  );
}
