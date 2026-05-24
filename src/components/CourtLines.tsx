export function CourtPerspective({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="courtFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.02" />
          <stop offset="60%" stopColor="white" stopOpacity="0.12" />
          <stop offset="100%" stopColor="white" stopOpacity="0.22" />
        </linearGradient>
        <radialGradient id="ballGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--court-lime)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--court-lime)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Court surface fill */}
      <polygon points="120,760 1080,760 880,260 320,260" fill="url(#courtFade)" />

      <g stroke="white" fill="none">
        {/* Outer */}
        <polygon points="120,760 1080,760 880,260 320,260" strokeWidth="2.5" strokeOpacity="0.45" />
        {/* Side glass */}
        <line x1="120" y1="760" x2="320" y2="260" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="4 6" />
        <line x1="1080" y1="760" x2="880" y2="260" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="4 6" />
        {/* Service lines */}
        <line x1="270" y1="385" x2="930" y2="385" strokeWidth="2" strokeOpacity="0.35" />
        <line x1="180" y1="620" x2="1020" y2="620" strokeWidth="2" strokeOpacity="0.35" />
        {/* Center line */}
        <line x1="600" y1="385" x2="600" y2="620" strokeWidth="2" strokeOpacity="0.35" />
      </g>

      {/* Net */}
      <g>
        <line x1="220" y1="495" x2="980" y2="495" stroke="white" strokeOpacity="0.55" strokeWidth="2.5" />
        <line x1="220" y1="495" x2="220" y2="520" stroke="white" strokeOpacity="0.4" strokeWidth="2" />
        <line x1="980" y1="495" x2="980" y2="520" stroke="white" strokeOpacity="0.4" strokeWidth="2" />
        {Array.from({ length: 28 }).map((_, i) => (
          <line
            key={i}
            x1={220 + (i * 760) / 28}
            y1={497}
            x2={220 + (i * 760) / 28}
            y2={515}
            stroke="white"
            strokeOpacity="0.18"
            strokeWidth="1"
          />
        ))}
      </g>

      {/* Ball mid-flight */}
      <g>
        <circle cx="720" cy="200" r="60" fill="url(#ballGlow)" />
        <circle cx="720" cy="200" r="14" fill="var(--court-lime)" />
        <path
          d="M 707 197 Q 720 192 733 197"
          stroke="white"
          strokeWidth="1.2"
          strokeOpacity="0.7"
          fill="none"
        />
        <path
          d="M 707 203 Q 720 208 733 203"
          stroke="white"
          strokeWidth="1.2"
          strokeOpacity="0.7"
          fill="none"
        />
        {/* Motion trail */}
        <path
          d="M 350 410 Q 540 280 700 205"
          stroke="var(--court-lime)"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="2 8"
          fill="none"
        />
      </g>

      {/* Ball shadow on court */}
      <ellipse cx="540" cy="610" rx="36" ry="6" fill="black" opacity="0.25" />
    </svg>
  );
}

export function CourtBaseline({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="0" y1="12" x2="1200" y2="12" stroke="var(--court-lime)" strokeWidth="1" opacity="0.5" />
      <line x1="0" y1="12" x2="120" y2="12" stroke="var(--court-lime)" strokeWidth="3" />
      <line x1="1080" y1="12" x2="1200" y2="12" stroke="var(--court-lime)" strokeWidth="3" />
      <circle cx="600" cy="12" r="3" fill="var(--court-lime)" />
    </svg>
  );
}
