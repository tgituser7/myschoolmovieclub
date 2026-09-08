import type { ReactNode } from "react";

function Frame({
  children,
  from,
  to,
}: {
  children: ReactNode;
  from: string;
  to: string;
}) {
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`g-${from}-${to}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#g-${from}-${to})`} />
      {children}
    </svg>
  );
}

export function GoMataArt() {
  return (
    <Frame from="#FFE1A8" to="#F08A3C">
      <circle cx="330" cy="55" r="30" fill="#FFF3D6" opacity="0.8" />
      <path d="M0 150c60-25 120-25 180-5s150 15 220-15v95H0z" fill="#C97A34" opacity="0.6" />
      <g transform="translate(120,120)">
        <ellipse cx="40" cy="55" rx="60" ry="26" fill="#F6EFE3" />
        <circle cx="95" cy="35" r="22" fill="#F6EFE3" />
        <path d="M83 18l-8-12M107 18l8-12" stroke="#8a6a45" strokeWidth="4" strokeLinecap="round" />
        <circle cx="102" cy="32" r="2.4" fill="#5b4326" />
      </g>
      <g transform="translate(230,150)" opacity="0.9">
        <ellipse cx="20" cy="28" rx="30" ry="14" fill="#FBE7C6" />
        <circle cx="48" cy="18" r="12" fill="#FBE7C6" />
      </g>
    </Frame>
  );
}

export function KindnessArt() {
  return (
    <Frame from="#1F4A3C" to="#0E2B23">
      <g stroke="#D9E8DF" strokeWidth="1.2" opacity="0.35">
        <path d="M30 40h90M30 55h60" />
        <circle cx="330" cy="50" r="20" />
      </g>
      <g transform="translate(150,60)">
        <circle cx="50" cy="30" r="26" fill="#EAD9BE" />
        <path d="M20 150c0-35 15-58 30-58s30 23 30 58z" fill="#3B6FF0" />
      </g>
      <path
        d="M255 70c8-10 24-10 28 3 4-13 20-13 28-3 9 11-2 25-28 40-26-15-37-29-28-40z"
        fill="#F0506E"
        opacity="0.85"
      />
    </Frame>
  );
}

export function PlanetArt() {
  return (
    <Frame from="#BFEFEA" to="#1D6FA8">
      <circle cx="200" cy="115" r="72" fill="#2E7DD1" />
      <path
        d="M150 70c15 10 10 25-5 28s-25 15-10 25 30-2 40 8-5 22 12 25 30-15 35-30-8-45-30-55-30-8-42-1z"
        fill="#3FB27F"
      />
      <path d="M190 150c10 6 22 3 26-6" stroke="#0B4C7C" strokeWidth="2" fill="none" opacity="0.4" />
      <g fill="#F3F9E8" opacity="0.9">
        <path d="M55 45c-4-9 3-16 11-13-1-8 9-12 13-4 6-6 15-1 12 8 9 1 9 12 0 14-2 8-13 8-16 1-8 3-13-5-9-11-8 1-11-9-11-11z" />
      </g>
      <g fill="#F3F9E8" opacity="0.7">
        <circle cx="330" cy="40" r="4" />
        <circle cx="345" cy="55" r="2.5" />
        <circle cx="45" cy="130" r="3" />
      </g>
    </Frame>
  );
}

export function HeritageArt() {
  return (
    <Frame from="#FBD9A5" to="#C9622A">
      <circle cx="90" cy="50" r="26" fill="#FFEFD1" opacity="0.85" />
      <g fill="#7A3418">
        <path d="M170 190V80l30-28 30 28v110z" />
        <path d="M200 40l-14 20h28z" />
        <rect x="176" y="95" width="12" height="20" fill="#C9622A" />
        <rect x="212" y="95" width="12" height="20" fill="#C9622A" />
        <rect x="194" y="140" width="12" height="50" fill="#C9622A" />
      </g>
      <g transform="translate(255,140)">
        <circle cx="10" cy="8" r="8" fill="#3B6FF0" />
        <path d="M-4 55c0-22 10-35 14-35s14 13 14 35z" fill="#F0506E" />
      </g>
      <path d="M0 190c60-12 120-6 180 4s150 6 220-8v39H0z" fill="#7A3418" opacity="0.5" />
    </Frame>
  );
}

export function DreamsArt() {
  return (
    <Frame from="#CFE3FF" to="#2F6FED">
      <g fill="#FFE6A8" opacity="0.9">
        <path d="M60 30l3 8 8 1-6 6 2 8-7-4-7 4 2-8-6-6 8-1z" />
        <path d="M330 60l2.5 6.5 6.5 1-5 5 1.5 6.5-5.5-3-5.5 3 1.5-6.5-5-5 6.5-1z" />
      </g>
      <g fill="#0B1E3D">
        {[70, 140, 210, 280].map((x, i) => (
          <g key={x} transform={`translate(${x},${150 - (i % 2) * 10})`}>
            <circle cx="0" cy="0" r="13" />
            <path d="M-16 55c0-24 8-40 16-40s16 16 16 40z" />
            <path d="M-16 20l-14-22M16 20l14-22" stroke="#0B1E3D" strokeWidth="6" strokeLinecap="round" />
          </g>
        ))}
      </g>
    </Frame>
  );
}
