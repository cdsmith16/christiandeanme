type Props = {
  className?: string;
  opacity?: number;
};

export default function BirdOfParadise({ className, opacity = 0.3 }: Props) {
  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden="true"
      className={className}
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="leaf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0D7377" />
          <stop offset="100%" stopColor="#1B5E20" />
        </linearGradient>
        <linearGradient id="petal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5A623" />
          <stop offset="100%" stopColor="#E8751A" />
        </linearGradient>
      </defs>
      <g transform="translate(200 210)">
        <path
          d="M -10 150 C -20 60, -40 0, -5 -40 C 25 -10, 20 70, 10 150 Z"
          fill="url(#leaf)"
        />
        <path
          d="M 0 150 C -55 80, -110 30, -120 -40 C -70 -30, -15 30, 5 150 Z"
          fill="url(#leaf)"
          opacity="0.82"
        />
        <path
          d="M 0 150 C 55 80, 115 20, 120 -60 C 70 -45, 15 30, -5 150 Z"
          fill="url(#leaf)"
          opacity="0.78"
        />
        <path
          d="M -120 -30 C -110 -90, -60 -140, 0 -150 C 60 -140, 110 -90, 120 -50 C 80 -30, 40 -20, 0 -10 C -40 -20, -80 -20, -120 -30 Z"
          fill="#0D7377"
          opacity="0.55"
        />
        <g transform="translate(0 -30)">
          <path
            d="M 0 0 L 40 -60 L 25 -20 L 70 -50 L 40 -5 L 90 0 L 40 10 L 55 50 L 25 15 L 10 60 L 0 10 Z"
            fill="url(#petal)"
          />
          <path
            d="M 0 0 L -40 -60 L -25 -20 L -70 -50 L -40 -5 L -90 0 L -40 10 L -55 50 L -25 15 L -10 60 L 0 10 Z"
            fill="url(#petal)"
            opacity="0.85"
          />
          <circle r="10" fill="#F5A623" />
        </g>
      </g>
    </svg>
  );
}
