import { FC } from "react";

export const QuoteIcon: FC = () => (
  <svg
    viewBox="0 0 100 100"
    className="absolute -left-4 -top-4 h-16 w-16 text-purple-200"
    aria-hidden="true"
  >
    <path
      d="M35.5 35.5c0-9.665 7.835-17.5 17.5-17.5 9.665 0 17.5 7.835 17.5 17.5 0 9.665-7.835 17.5-17.5 17.5-9.665 0-17.5-7.835-17.5-17.5zm-20 0c0-20.711 16.789-37.5 37.5-37.5s37.5 16.789 37.5 37.5-16.789 37.5-37.5 37.5S15.5 56.211 15.5 35.5z"
      fill="currentColor"
    />
  </svg>
);

export const BackgroundPattern: FC = () => (
  <svg
    width="100%"
    height="100%"
    className="absolute inset-0 z-0 opacity-5"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="testimonial-pattern"
        x="0"
        y="0"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="20" cy="20" r="1" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#testimonial-pattern)" />
  </svg>
);

export const CompanyLogos = {
  TechCorp: () => (
    <svg viewBox="0 0 160 40" className="h-full w-full">
      <defs>
        <linearGradient id="tech-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      <path
        d="M20 10h120v20H20z"
        fill="none"
        stroke="url(#tech-gradient)"
        strokeWidth="2"
      />
      <text
        x="80"
        y="25"
        textAnchor="middle"
        fill="currentColor"
        className="text-base font-bold"
      >
        TECHCORP
      </text>
    </svg>
  ),

  InnovateLabs: () => (
    <svg viewBox="0 0 160 40" className="h-full w-full">
      <defs>
        <linearGradient id="innovate-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <circle cx="30" cy="20" r="10" fill="url(#innovate-gradient)" />
      <path
        d="M50 15h80"
        stroke="url(#innovate-gradient)"
        strokeWidth="2"
        fill="none"
      />
      <text
        x="90"
        y="25"
        textAnchor="middle"
        fill="currentColor"
        className="text-base font-bold"
      >
        INNOVATE LABS
      </text>
      <circle cx="130" cy="20" r="4" fill="url(#innovate-gradient)" />
    </svg>
  ),

  StyleHouse: () => (
    <svg viewBox="0 0 160 40" className="h-full w-full">
      <defs>
        <linearGradient id="style-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <path
        d="M20 20 Q 80 5, 140 20"
        stroke="url(#style-gradient)"
        strokeWidth="2"
        fill="none"
      />
      <text
        x="80"
        y="25"
        textAnchor="middle"
        fill="currentColor"
        className="text-base font-bold"
      >
        STYLEHOUSE
      </text>
    </svg>
  ),

  WaveDigital: () => (
    <svg viewBox="0 0 160 40" className="h-full w-full">
      <defs>
        <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#2DD4BF" />
        </linearGradient>
      </defs>
      <path
        d="M20 20 Q 40 10, 60 20 Q 80 30, 100 20 Q 120 10, 140 20"
        stroke="url(#wave-gradient)"
        strokeWidth="2"
        fill="none"
      />
      <text
        x="80"
        y="35"
        textAnchor="middle"
        fill="currentColor"
        className="text-base font-bold"
      >
        WAVE DIGITAL
      </text>
    </svg>
  ),

  NexusAI: () => (
    <svg viewBox="0 0 160 40" className="h-full w-full">
      <defs>
        <linearGradient id="nexus-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      <path
        d="M30 20 L50 10 L70 30 L90 10 L110 30 L130 20"
        stroke="url(#nexus-gradient)"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="50" cy="10" r="3" fill="url(#nexus-gradient)" />
      <circle cx="90" cy="10" r="3" fill="url(#nexus-gradient)" />
      <text
        x="80"
        y="35"
        textAnchor="middle"
        fill="currentColor"
        className="text-base font-bold"
      >
        NEXUS AI
      </text>
    </svg>
  ),

  FusionTech: () => (
    <svg viewBox="0 0 160 40" className="h-full w-full">
      <defs>
        <linearGradient id="fusion-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <circle
        cx="40"
        cy="20"
        r="15"
        fill="none"
        stroke="url(#fusion-gradient)"
        strokeWidth="2"
      />
      <circle
        cx="120"
        cy="20"
        r="15"
        fill="none"
        stroke="url(#fusion-gradient)"
        strokeWidth="2"
      />
      <path d="M55 20 L105 20" stroke="url(#fusion-gradient)" strokeWidth="2" />
      <text
        x="80"
        y="35"
        textAnchor="middle"
        fill="currentColor"
        className="text-base font-bold"
      >
        FUSION TECH
      </text>
    </svg>
  ),

  QuantumEdge: () => (
    <svg viewBox="0 0 160 40" className="h-full w-full">
      <defs>
        <linearGradient id="quantum-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      <path
        d="M40 20 L80 10 L120 20 L80 30 Z"
        fill="none"
        stroke="url(#quantum-gradient)"
        strokeWidth="2"
      />
      <circle cx="80" cy="20" r="5" fill="url(#quantum-gradient)" />
      <text
        x="80"
        y="35"
        textAnchor="middle"
        fill="currentColor"
        className="text-base font-bold"
      >
        QUANTUM EDGE
      </text>
    </svg>
  ),
};
