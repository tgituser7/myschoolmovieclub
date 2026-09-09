import Image from "next/image";

export default function HeroArt() {
  return (
    <div className="relative px-2 pb-10 pt-2 sm:px-4">
      {/* soft color blobs behind everything */}
      <div className="pointer-events-none absolute -right-8 -top-10 h-56 w-56 rounded-full bg-orange/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-6 h-56 w-56 rounded-full bg-blue/20 blur-3xl" />

      {/* rotated dashed frame, offset behind the photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-2 -rotate-2 rounded-[2rem] border-2 border-dashed border-blue/30 sm:inset-4"
      />

      {/* gradient border card */}
      <div className="relative rounded-[1.75rem] bg-gradient-to-br from-blue via-orange to-blue p-[3px] shadow-[0_30px_60px_-25px_rgba(11,30,61,0.45)]">
        <div className="relative aspect-[5/3] overflow-hidden rounded-[1.6rem] bg-navy">
          <Image
            src="/topimg1.jpeg"
            alt="Students at a My School Movie Club screening"
            fill
            priority
            sizes="(min-width: 1024px) 560px, 90vw"
            className="object-cover"
          />

          {/* bottom gradient for legibility */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy/80 to-transparent" />

          {/* live badge */}
          <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
            </span>
            <span className="font-sans text-xs font-bold text-navy">
              Now Screening
            </span>
          </span>

          <span className="absolute right-4 top-4 rounded-full bg-navy/70 px-3 py-1 font-sans text-[11px] font-semibold text-white backdrop-blur">
            Straight From Our Screenings
          </span>
        </div>
      </div>

      {/* doodles */}
      <svg
        viewBox="0 0 24 24"
        className="absolute -left-2 top-0 h-10 w-10 text-orange sm:-left-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="3.4" />
        <path d="M12 3.5v2.3M12 18.2v2.3M4.3 12h2.3M17.4 12h2.3M6.5 6.5l1.6 1.6M15.9 15.9l1.6 1.6M6.5 17.5l1.6-1.6M15.9 8.1l1.6-1.6" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className="absolute -left-3 top-1/2 h-9 w-9 text-blue sm:-left-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3.5" y="10" width="17" height="10" rx="1.5" />
        <path d="M3.5 10l1.3-4.8 15.7 3.2-1 4.6M8 5.7l3 3.6M13 4.8l3 3.6" />
      </svg>

      {/* floating badge */}
      <div className="absolute -bottom-2 right-4 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-card sm:right-8">
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
