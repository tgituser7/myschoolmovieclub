export default function HeroArt() {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 560 400"
        className="w-full drop-shadow-[0_25px_45px_rgba(11,30,61,0.18)]"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE7C2" />
            <stop offset="45%" stopColor="#FFB37A" />
            <stop offset="100%" stopColor="#FF8A5B" />
          </linearGradient>
          <linearGradient id="roomGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EAF3FF" />
            <stop offset="100%" stopColor="#D8E7FC" />
          </linearGradient>
        </defs>

        {/* room */}
        <rect x="0" y="0" width="560" height="400" rx="24" fill="url(#roomGrad)" />

        {/* screen frame */}
        <rect x="36" y="30" width="488" height="248" rx="10" fill="#0B1E3D" />
        <rect x="50" y="42" width="460" height="224" rx="4" fill="url(#skyGrad)" />
        {/* sun */}
        <circle cx="430" cy="110" r="34" fill="#FFF3D6" opacity="0.9" />
        {/* hills */}
        <path d="M50 240c60-40 120-40 180-10s150 20 210-10 60-10 60-10v56H50z" fill="#3E8E63" opacity="0.85" />
        <path d="M50 250c70-30 140-15 190 5s160 10 220-15v40H50z" fill="#2F6B4B" opacity="0.9" />
        {/* boy silhouette on screen */}
        <g transform="translate(300,150)">
          <rect x="-9" y="18" width="18" height="34" rx="6" fill="#12233F" />
          <circle cx="0" cy="6" r="12" fill="#12233F" />
          <rect x="-14" y="20" width="10" height="16" rx="4" fill="#0B1E3D" />
        </g>
        {/* on-screen quote */}
        <g fontFamily="var(--font-display-src), Poppins, sans-serif" fontWeight="700" fill="#0B1E3D">
          <text x="60" y="78" fontSize="19">Great</text>
          <text x="60" y="101" fontSize="19">Stories</text>
          <text x="60" y="124" fontSize="19">Shape</text>
          <text x="60" y="147" fontSize="19">Bright</text>
          <text x="60" y="170" fontSize="19">Minds</text>
        </g>

        {/* audience row (backs of heads) */}
        <g fill="#1B2C4A">
          {Array.from({ length: 11 }).map((_, i) => {
            const x = 46 + i * 44;
            const h = i % 3 === 0 ? 34 : i % 3 === 1 ? 30 : 26;
            return (
              <g key={i}>
                <rect x={x} y={300 - h} width="34" height={h + 34} rx="12" fill="#28406b" />
                <circle cx={x + 17} cy={296 - h} r="15" fill="#16223b" />
              </g>
            );
          })}
        </g>
        {/* seat backs */}
        <rect x="20" y="330" width="520" height="50" rx="14" fill="#2F6FED" opacity="0.12" />
      </svg>

      {/* doodles */}
      <svg
        viewBox="0 0 24 24"
        className="absolute -left-2 top-4 h-10 w-10 text-orange sm:-left-6 sm:top-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="3.4" />
        <path d="M12 3.5v2.3M12 18.2v2.3M4.3 12h2.3M17.4 12h2.3M6.5 6.5l1.6 1.6M15.9 15.9l1.6 1.6M6.5 17.5l1.6-1.6M15.9 8.1l1.6-1.6" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className="absolute -left-4 top-1/2 h-9 w-9 text-blue sm:-left-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3.5" y="10" width="17" height="10" rx="1.5" />
        <path d="M3.5 10l1.3-4.8 15.7 3.2-1 4.6M8 5.7l3 3.6M13 4.8l3 3.6" />
      </svg>
      <svg
        viewBox="0 0 100 60"
        className="absolute -left-2 top-16 h-14 w-20 text-orange/70 sm:top-20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      >
        <path d="M85 5C55 5 20 20 8 52" strokeDasharray="1 9" />
      </svg>

      {/* floating badge */}
      <div className="absolute -bottom-6 right-2 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-card sm:-bottom-8 sm:right-6">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky text-blue">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 9l10-4.5L22 9l-10 4.5L2 9z" />
            <path d="M6.5 11.2V16c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4.8" />
            <path d="M21 9v5.5" />
          </svg>
        </span>
        <div className="flex items-center gap-2">
          <p className="font-display text-sm font-semibold leading-snug text-navy">
            Educational Movies
            <br />
            for a Better Future
          </p>
          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-slate" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
