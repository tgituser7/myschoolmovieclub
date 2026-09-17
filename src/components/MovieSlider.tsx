"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronRightIcon, PlayFilledIcon } from "./icons";

const slides = [
  {
    image: "/movies/Backto%20school.png",
    alt: "Back to School — Every Child's Dream",
    kicker: "Now Screening",
    caption:
      "A heartwarming look at what walking back into the classroom means to every child.",
  },
  {
    image: "/movies/villgofindi.png",
    alt: "Villages of India",
    kicker: "Documentary",
    caption:
      "A colourful journey through rural India — culture, community and everyday village life.",
  },
  {
    image: "/movies/birthofinternet.png",
    alt: "Birth of the Internet",
    kicker: "Documentary",
    caption:
      "How a handful of bold ideas connected the entire world — a story every student should know.",
  },
] as const;

const AUTOPLAY_MS = 5500;

export default function MovieSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex(((i % slides.length) + slides.length) % slides.length);
  }, []);
  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, index]);

  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-block -rotate-1 rounded-full border-2 border-navy bg-orange px-3 py-1 font-display text-xs font-extrabold uppercase tracking-[0.15em] text-navy">
            Now Showing
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Fresh On The Screen
          </h2>
          <p className="mt-4 text-balance leading-relaxed text-slate-dark">
            A peek at some of the newest titles making their way into
            classrooms and auditoriums.
          </p>
        </div>

        <div
          className="relative mt-12 overflow-hidden rounded-3xl border-2 border-navy shadow-hard"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
            setPaused(true);
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current !== null) {
              const dx = e.changedTouches[0].clientX - touchStartX.current;
              if (dx > 50) prev();
              else if (dx < -50) next();
            }
            touchStartX.current = null;
            setPaused(false);
          }}
        >
          <div
            className="flex items-stretch transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((s, i) => (
              <div key={s.image} className="flex w-full shrink-0 flex-col">
                <div
                  className="group relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]"
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                >
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 1024px) 1200px, 100vw"
                    className={`object-cover transition-transform ease-out ${
                      i === index
                        ? "scale-110 duration-[6000ms]"
                        : "scale-100 duration-0"
                    }`}
                  />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-navy/50 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-navy/60 to-transparent" />

                  <span className="absolute bottom-3 left-3 inline-block rounded-full border-2 border-white bg-orange px-3 py-1 font-display text-[11px] font-extrabold uppercase tracking-[0.15em] text-navy shadow-hard-sm sm:bottom-4 sm:left-4">
                    {s.kicker}
                  </span>

                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous slide"
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-navy bg-white/90 text-navy opacity-0 shadow-hard-sm transition-all hover:-translate-x-0.5 hover:bg-white focus-visible:opacity-100 group-hover:opacity-100 sm:h-12 sm:w-12"
                  >
                    <ChevronRightIcon className="h-5 w-5 rotate-180" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next slide"
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-navy bg-white/90 text-navy opacity-0 shadow-hard-sm transition-all hover:translate-x-0.5 hover:bg-white focus-visible:opacity-100 group-hover:opacity-100 sm:h-12 sm:w-12"
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex flex-col items-start gap-3 border-t-2 border-navy bg-navy px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-5">
                  <p className="max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                    {s.caption}
                  </p>
                  <Link
                    href="/movies"
                    className="flex shrink-0 items-center gap-1.5 rounded-full border-2 border-navy bg-white px-5 py-2.5 font-display text-sm font-extrabold text-navy shadow-hard-sm transition-transform hover:-translate-y-0.5"
                  >
                    <PlayFilledIcon className="h-4 w-4" />
                    Explore Movies
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-1/2 top-4 flex -translate-x-1/2 items-center gap-2 sm:top-6">
            {slides.map((s, i) => (
              <button
                key={s.image}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full border-2 border-navy transition-all ${
                  i === index ? "w-7 bg-orange" : "w-2 bg-white/70"
                }`}
              />
            ))}
          </div>

          <div className="absolute inset-x-0 top-0 h-1 bg-navy/20">
            <div
              key={index}
              className="h-full bg-orange"
              style={{
                animationName: "slider-progress",
                animationDuration: `${AUTOPLAY_MS}ms`,
                animationTimingFunction: "linear",
                animationIterationCount: 1,
                animationFillMode: "forwards",
                animationPlayState: paused ? "paused" : "running",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
