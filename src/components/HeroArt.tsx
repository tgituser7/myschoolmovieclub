import Image from "next/image";
import { ReelIcon } from "./icons";

export default function HeroArt() {
  return (
    <div className="relative px-3 pb-14 pt-4 sm:px-6">
      {/* halftone dot cluster behind */}
      <div
        aria-hidden
        className="dots pointer-events-none absolute -right-4 -top-6 h-40 w-40 text-orange/70 sm:h-52 sm:w-52"
      />

      {/* rotated hard-shadow sticker frame */}
      <div className="relative -rotate-2 rounded-[1.75rem] border-4 border-navy bg-white p-2 shadow-hard sm:p-3">
        <div className="relative aspect-[5/3] overflow-hidden rounded-[1.25rem] bg-navy">
          <Image
            src="/topimg1.jpeg"
            alt="Students at a My School Movie Club screening"
            fill
            priority
            sizes="(min-width: 1024px) 560px, 90vw"
            className="object-cover"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy/80 to-transparent" />

          <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border-2 border-navy bg-white px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
            </span>
            <span className="font-display text-xs font-extrabold text-navy">
              Now Screening
            </span>
          </span>

          <span className="absolute right-4 top-4 rounded-full bg-navy px-3 py-1 font-sans text-[11px] font-bold text-white">
            Straight From Our Screenings
          </span>
        </div>
      </div>

      {/* film reel sticker */}
      <span className="absolute -left-3 top-6 flex h-14 w-14 rotate-[-8deg] items-center justify-center rounded-full border-2 border-navy bg-yellow shadow-hard-sm sm:-left-6">
        <ReelIcon className="h-7 w-7 text-navy" />
      </span>

      {/* clapperboard doodle */}
      <svg
        viewBox="0 0 24 24"
        className="absolute -left-2 bottom-24 h-10 w-10 rotate-6 text-blue sm:-left-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3.5" y="10" width="17" height="10" rx="1.5" />
        <path d="M3.5 10l1.3-4.8 15.7 3.2-1 4.6M8 5.7l3 3.6M13 4.8l3 3.6" />
      </svg>

      {/* floating badge */}
      <div className="absolute -bottom-4 right-2 flex rotate-2 items-center gap-3 rounded-2xl border-2 border-navy bg-white px-5 py-4 shadow-hard-sm sm:right-6">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-navy bg-cream text-navy">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 9l10-4.5L22 9l-10 4.5L2 9z" />
            <path d="M6.5 11.2V16c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4.8" />
            <path d="M21 9v5.5" />
          </svg>
        </span>
        <p className="font-display text-sm font-extrabold leading-snug text-navy">
          Educational Movies
          <br />
          for a Better Future
        </p>
      </div>
    </div>
  );
}
