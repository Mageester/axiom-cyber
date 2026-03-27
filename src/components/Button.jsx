export default function Button({ children, variant = 'primary', href = '#', id, ...props }) {
  const base = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300";
  
  const variants = {
    primary: "bg-orange-600 text-white hover:bg-orange-500 shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] border border-orange-500/50",
    secondary: "bg-zinc-900 border border-zinc-700 text-zinc-100 hover:bg-zinc-800 hover:border-zinc-600",
    text: "text-zinc-400 hover:text-white bg-transparent",
  };

  return (
    <a
      href={href}
      id={id}
      className={`${base} ${variants[variant]}`}
      {...props}
    >
      {children}
    </a>
  );
}
