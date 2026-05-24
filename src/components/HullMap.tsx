export function HullMap({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 450"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect width="600" height="450" fill="var(--court-navy)" />

      {/* Grid */}
      <g stroke="white" strokeOpacity="0.05" strokeWidth="1">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="450" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2="600" y2={i * 50} />
        ))}
      </g>

      {/* Estuary / river */}
      <path
        d="M 0 360 Q 150 340 280 355 T 600 345 L 600 450 L 0 450 Z"
        fill="var(--court-blue)"
        opacity="0.4"
      />
      <path
        d="M 0 360 Q 150 340 280 355 T 600 345"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1"
        fill="none"
      />

      {/* Roads */}
      <g stroke="white" strokeOpacity="0.25" fill="none">
        <path d="M 0 220 Q 200 200 320 230 T 600 210" strokeWidth="2" />
        <path d="M 120 0 L 180 200 L 250 450" strokeWidth="1.5" />
        <path d="M 400 0 Q 380 150 420 250 T 480 450" strokeWidth="1.5" />
        <path d="M 0 120 L 600 140" strokeWidth="1" strokeDasharray="3 4" />
      </g>

      {/* Labels */}
      <text x="40" y="80" fill="white" fillOpacity="0.4" fontFamily="DM Sans" fontSize="11" letterSpacing="2">
        WEST HULL
      </text>
      <text x="430" y="120" fill="white" fillOpacity="0.3" fontFamily="DM Sans" fontSize="11" letterSpacing="2">
        CITY CENTRE
      </text>
      <text x="240" y="410" fill="white" fillOpacity="0.4" fontFamily="DM Sans" fontSize="10" letterSpacing="2">
        HUMBER ESTUARY
      </text>

      {/* Pin */}
      <g transform="translate(220 215)">
        <circle r="38" fill="var(--court-lime)" opacity="0.15">
          <animate attributeName="r" values="28;48;28" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.25;0;0.25" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle r="14" fill="var(--court-lime)" />
        <circle r="5" fill="var(--court-navy)" />
      </g>

      {/* Pin label */}
      <g transform="translate(245 210)">
        <rect x="0" y="-12" width="140" height="22" fill="var(--court-lime)" />
        <text x="8" y="3" fill="var(--court-navy)" fontFamily="Barlow Condensed" fontWeight="800" fontSize="13" letterSpacing="1.5">
          BONTOFT AVE
        </text>
      </g>
    </svg>
  );
}
