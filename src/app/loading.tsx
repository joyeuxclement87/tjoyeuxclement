export default function Loading() {
  return (
    <div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #001209 0%, #000e0d 50%, #001a18 100%)" }}
    >
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: "linear-gradient(#f0ede5 1px, transparent 1px), linear-gradient(90deg, #f0ede5 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />
      <div className="absolute w-[500px] h-[500px] bg-[#f5b915]/5 rounded-full blur-[100px]" />
      
      <div className="relative flex flex-col items-center z-10 space-y-4">
        <div className="text-[#f0ede5] font-display text-xl font-bold uppercase tracking-[0.2em] opacity-50 animate-pulse">
          Loading....
        </div>
      </div>
    </div>
  );
}
