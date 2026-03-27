export default function Button({ children, variant = 'primary', href = '#', id, ...props }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700',
    ghost: 'border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white',
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
