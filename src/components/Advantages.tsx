import { advantages } from "@/lib/content";
import { ClapperIcon, LayersIcon, TrophyIcon } from "./icons";

const accents = [
  { bg: "bg-cat-gold/10", fg: "text-cat-gold" },
  { bg: "bg-cat-blue/10", fg: "text-cat-blue" },
  { bg: "bg-cat-red/10", fg: "text-cat-red" },
];
const icons = [TrophyIcon, LayersIcon, ClapperIcon];

export default function Advantages() {
  return (
    <section id="advantages" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-blue">
            Advantages for the School
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold text-navy sm:text-4xl">
            What the club gives back to your campus
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {advantages.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={a.title}
                className="relative overflow-hidden rounded-2xl bg-sky-2 p-8 shadow-soft"
              >
                <span
                  aria-hidden
                  className="absolute -right-3 -top-5 font-display text-7xl font-extrabold text-navy/5"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`relative flex h-12 w-12 items-center justify-center rounded-full ${accents[i].bg} ${accents[i].fg}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-6 font-display text-lg font-bold text-navy">
                  {a.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate">
                  {a.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
