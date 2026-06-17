export function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <img
      src="/ecp-logo.png"
      alt="East Coast Padel"
      style={{ height: size }}
      className={`w-auto block brightness-0 invert drop-shadow-[0_0_12px_rgba(255,255,255,0.35)] ${className}`}
    />
  );
}
