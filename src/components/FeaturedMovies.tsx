import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { ChevronRightIcon, PlayFilledIcon, ReelIcon } from "./icons";
import { GoMataArt, KindnessArt } from "./MovieArt";

type Movie = {
  title: string;
  duration?: string;
  type?: string;
  Art?: ComponentType;
  image?: string;
  fill?: boolean;
  shiftUp?: boolean;
  isNew?: boolean;
};

const movies: Movie[] = [
  {
    title: "2 Little Indians",
    image: "/movies/2littleindians.jpeg",
    fill: true,
  },
  {
    title: "Back to School",
    type: "Feature Film",
    image: "/movies/backtoschoolrect.jpeg",
    fill: true,
  },
  {
    title: "Villages of India",
    type: "Documentary",
    image: "/movies/vilageofindiaReacty.jpeg",
    shiftUp: true,
    fill: true,
  },
  {
    title: "Birth of the Internet",
    type: "Documentary",
    image: "/movies/BOIract.jpeg",
  },

  {
    title: "Mahaprabhu Jagannath",
    type: "Animated",
    image: "/movies/Mahaprabhujagannathimg.png",
    fill: true,
    isNew: true,
  },
  // {
  //   title: "Go Mata: Devotion & Responsibility",
  //   duration: "12:45",
  //   Art: GoMataArt,
  // },
  // {
  //   title: "The Power of Kindness",
  //   duration: "15:20",
  //   Art: KindnessArt,
  // },
];

export default function FeaturedMovies({
  photoBackground = false,
}: {
  photoBackground?: boolean;
}) {
  return (
    <section
      id="movies"
      className={`scroll-mt-20 relative overflow-hidden py-16 sm:py-24 ${
        photoBackground ? "" : "bg-cream"
      }`}
    >
      {photoBackground ? (
        <>
          <Image
            src="/designimage1.jpeg"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/75" />
        </>
      ) : null}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-navy bg-blue text-white shadow-hard-sm">
                <ReelIcon className="h-5 w-5" />
              </span>
              <h2
                className={`font-display text-3xl font-extrabold sm:text-[2.4rem] ${
                  photoBackground ? "text-white" : "text-navy"
                }`}
              >
                Featured Movies
              </h2>
            </div>
            <p
              className={`mt-2 text-balance text-sm ${
                photoBackground ? "text-white/75" : "text-slate-dark"
              }`}
            >
              Handpicked movies that inspire, educate and make a difference.
            </p>
          </div>
          <a
            href="#movies"
            className="flex items-center gap-1 rounded-full border-2 border-navy bg-white px-4 py-2 font-display text-sm font-bold text-navy shadow-hard-sm transition-transform hover:-translate-y-0.5"
          >
            View All Movies
            <ChevronRightIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies.map((m, i) => (
            <div
              key={m.title}
              className={`group flex flex-col overflow-hidden rounded-2xl border-2 border-navy bg-white shadow-hard transition-transform hover:-translate-y-1 hover:rotate-0 ${
                i % 2 === 0 ? "sm:rotate-1" : "sm:-rotate-1"
              }`}
            >
              <div className="relative aspect-[3/4] overflow-hidden border-b-2 border-navy bg-navy">
                {m.image ? (
                  m.fill ? (
                    <Image
                      src={m.image}
                      alt={`${m.title} poster`}
                      fill
                      sizes="(min-width: 1024px) 25vw, 90vw"
                      className={`object-cover ${m.shiftUp ? "-translate-y-[6%]" : ""}`}
                    />
                  ) : (
                    <>
                      <Image
                        src={m.image}
                        alt=""
                        aria-hidden
                        fill
                        sizes="(min-width: 1024px) 33vw, 90vw"
                        className="scale-110 object-cover object-center opacity-50 blur-lg"
                      />
                      <Image
                        src={m.image}
                        alt={`${m.title} poster`}
                        fill
                        sizes="(min-width: 1024px) 33vw, 90vw"
                        className="object-contain p-2 drop-shadow-lg"
                      />
                    </>
                  )
                ) : (
                  m.Art && <m.Art />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-navy/0 transition-colors group-hover:bg-navy/20">
                  <span className="flex h-11 w-11 scale-90 items-center justify-center rounded-full bg-white/90 text-blue opacity-0 shadow-soft transition-all group-hover:scale-100 group-hover:opacity-100">
                    <PlayFilledIcon className="h-4 w-4 translate-x-[1px]" />
                  </span>
                </div>
                {m.type ? (
                  <span className="absolute bottom-2 left-2 rounded-full border-2 border-white bg-orange px-2 py-0.5 font-display text-[10px] font-extrabold uppercase tracking-wide text-navy shadow-hard-sm">
                    {m.type}
                  </span>
                ) : null}
                {m.duration ? (
                  <span className="absolute bottom-2 right-2 rounded-md border-2 border-navy bg-yellow px-1.5 py-0.5 font-display text-[11px] font-extrabold text-navy">
                    {m.duration}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-display text-sm font-bold leading-snug text-navy">
                    {m.title}
                  </p>
                  {m.isNew ? (
                    <span className="shrink-0 rounded-full border-2 border-navy bg-yellow px-2 py-0.5 font-display text-[10px] font-extrabold uppercase tracking-wide text-navy">
                      New
                    </span>
                  ) : null}
                </div>
                <Link
                  href="/book-service"
                  className="mt-auto flex items-center justify-center rounded-full border-2 border-navy bg-orange px-4 py-2 font-display text-xs font-extrabold uppercase tracking-wide text-navy shadow-hard-sm transition-transform hover:-translate-y-0.5"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
