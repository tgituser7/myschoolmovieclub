import { ChevronRightIcon, PlayFilledIcon } from "./icons";
import HeroArt from "./HeroArt";
import Marquee from "./Marquee";
import BlobField from "./BlobField";

const tickerItems = [
  "In School Movie",
  "Classroom Movies",
  "Theatre Tours",
  "Village and Agriculture Tours",
  "Where Movies Meet Education",
];

export default function Hero() {
  return (
    <>
      <section
        id="top"
        className="relative overflow-hidden bg-cream pb-24 pt-14 sm:pt-20"
      >
        <BlobField
          blobs={[
            { top: "-8%", left: "-6%", size: 460, color: "var(--color-primary-container)", opacity: 0.9 },
            { top: "12%", right: "-10%", size: 380, color: "var(--color-secondary-container)", variant: "b", opacity: 0.85 },
            { bottom: "-14%", left: "22%", size: 320, color: "var(--color-tertiary-container)", opacity: 0.8 },
          ]}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-10 lg:px-10">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-yellow px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-[0.15em] text-navy shadow-hard-sm">
              Learn &bull; Enjoy &bull; Grow
            </p>
            <h1 className="mt-6 text-balance font-display text-5xl font-extrabold leading-[1.05] text-navy sm:text-6xl lg:text-[4rem]">
              Movies for a
              <br />
              <span className="scribble-underline text-blue">Brighter</span>{" "}
              <span className="text-orange">Tomorrow</span>
            </h1>
            <p className="mt-6 max-w-md text-balance text-lg leading-relaxed text-slate-dark">
              My School Movie Club is a membership club where students can
              watch screening of movies in their school which basically have
              an educational aim.
            </p>
            <a
              href="#movies"
              className="group mt-9 inline-flex items-center gap-3 rounded-full border-2 border-navy bg-blue py-3.5 pl-4 pr-7 font-display text-base font-extrabold text-white shadow-hard transition-transform hover:-translate-y-1 hover:shadow-[10px_10px_0_0_var(--color-navy)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-navy bg-white text-blue">
                <PlayFilledIcon className="h-3.5 w-3.5 translate-x-[1px]" />
              </span>
              Explore Movies
              <ChevronRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <HeroArt />
        </div>
      </section>

      <Marquee items={tickerItems} />
    </>
  );
}
