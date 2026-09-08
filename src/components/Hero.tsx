import { ChevronRightIcon, PlayFilledIcon } from "./icons";
import HeroArt from "./HeroArt";

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-gradient-to-b from-sky-2 to-white pb-24 pt-14 sm:pt-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-10 lg:px-10">
        <div>
          <p className="flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-blue">
            Learn <span className="text-orange">•</span> Enjoy{" "}
            <span className="text-orange">•</span> Grow
          </p>
          <h1 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.12] text-navy sm:text-5xl lg:text-[3.4rem]">
            Movies for a
            <br />
            <span className="text-blue">Brighter</span>{" "}
            <span className="text-orange">Tomorrow</span>
          </h1>
          <p className="mt-6 max-w-md text-balance text-base leading-relaxed text-slate">
            My School Movie Club is a membership club where students can
            watch screening of movies in their school which basically have
            an educational aim.
          </p>
          <a
            href="#movies"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-blue py-3 pl-3 pr-6 font-sans text-sm font-semibold text-white shadow-button transition-transform hover:-translate-y-0.5"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-blue">
              <PlayFilledIcon className="h-3.5 w-3.5 translate-x-[1px]" />
            </span>
            Explore Movies
            <ChevronRightIcon className="h-4 w-4" />
          </a>
        </div>

        <HeroArt />
      </div>
    </section>
  );
}
