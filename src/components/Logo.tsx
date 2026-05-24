import logoSrc from "@/assets/logo.webp";

export function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <img
      src={logoSrc}
      alt="Court de Padel"
      style={{ height: size }}
      className={`w-auto block ${className}`}
    />
  );
}
