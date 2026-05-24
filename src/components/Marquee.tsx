export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="bg-court-lime text-court-navy border-y border-court-navy/20 overflow-hidden">
      <div className="flex whitespace-nowrap py-2.5 animate-[marquee_30s_linear_infinite]">
        {loop.map((t, i) => (
          <span
            key={i}
            className="font-display font-bold uppercase tracking-[0.25em] text-sm px-6 flex items-center gap-6"
          >
            {t}
            <span className="text-court-navy/60">●</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
