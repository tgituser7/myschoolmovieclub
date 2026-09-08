import { ChevronRightIcon, PlayFilledIcon, ReelIcon } from "./icons";
import {
  DreamsArt,
  GoMataArt,
  HeritageArt,
  KindnessArt,
  PlanetArt,
} from "./MovieArt";

const movies = [
  {
    title: "Go Mata: Our Pride, Our Responsibility",
    duration: "12:45",
    Art: GoMataArt,
  },
  {
    title: "The Power of Kindness",
    duration: "15:20",
    Art: KindnessArt,
  },
  {
    title: "Save Our Planet",
    duration: "14:32",
    Art: PlanetArt,
  },
  {
    title: "Our Rich Heritage",
    duration: "13:18",
    Art: HeritageArt,
  },
  {
    title: "Small Steps Big Dreams",
    duration: "11:50",
    Art: DreamsArt,
  },
];

export default function FeaturedMovies() {
  return (
    <section id="movies" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue text-white">
                <ReelIcon className="h-5 w-5" />
              </span>
              <h2 className="font-display text-3xl font-extrabold text-navy sm:text-[2.2rem]">
                Featured Movies
              </h2>
            </div>
            <p className="mt-2 text-balance text-sm text-slate">
              Handpicked movies that inspire, educate and make a difference.
            </p>
          </div>
          <a
            href="#movies"
            className="flex items-center gap-1 font-sans text-sm font-semibold text-blue hover:text-blue-dark"
          >
            View All Movies
            <ChevronRightIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {movies.map((m) => (
            <a
              key={m.title}
              href="#join"
              className="group overflow-hidden rounded-2xl bg-white shadow-soft transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden">
                <m.Art />
                <div className="absolute inset-0 flex items-center justify-center bg-navy/0 transition-colors group-hover:bg-navy/20">
                  <span className="flex h-11 w-11 scale-90 items-center justify-center rounded-full bg-white/90 text-blue opacity-0 shadow-soft transition-all group-hover:scale-100 group-hover:opacity-100">
                    <PlayFilledIcon className="h-4 w-4 translate-x-[1px]" />
                  </span>
                </div>
                <span className="absolute bottom-2 right-2 rounded-md bg-navy/80 px-1.5 py-0.5 font-sans text-[11px] font-semibold text-white">
                  {m.duration}
                </span>
              </div>
              <div className="p-3.5">
                <p className="font-sans text-sm font-semibold leading-snug text-slate-dark">
                  {m.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
