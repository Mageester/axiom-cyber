export default function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-[#030303]" />
      <div className="absolute inset-0 cyber-grid opacity-[0.35]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-emerald-600/[0.03] rounded-full blur-[100px]" />
    </div>
  );
}
