import { movieTypes } from "@/lib/content";
import { BoltIcon, BookIcon, CameraIcon, ReelIcon } from "./icons";

const icons = [ReelIcon, BoltIcon, BookIcon, CameraIcon];
const accents = ["bg-cat-blue", "bg-cat-gold", "bg-cat-teal", "bg-cat-purple"];

export default function MovieTypes() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-block -rotate-1 rounded-full border-2 border-navy bg-yellow px-3 py-1 font-display text-xs font-extrabold uppercase tracking-[0.15em] text-navy">
            Movie Types
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Every format, ready to screen
          </h2>
          <p className="mt-4 text-balance leading-relaxed text-slate-dark">
            From a full feature to a five-minute tutorial, the catalogue
            covers the format that fits the moment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {movieTypes.map((m, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={m.title}
                className={`flex flex-col items-center gap-3 rounded-2xl border-2 border-navy bg-cream px-5 py-8 text-center shadow-hard-sm transition-transform hover:-translate-y-1 ${
                  i % 2 === 0 ? "sm:rotate-1" : "sm:-rotate-1"
                }`}
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-navy text-white ${accents[i]}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <p className="font-display text-base font-extrabold text-navy">
                  {m.title}
                </p>
                <p className="text-sm leading-relaxed text-slate-dark">
                  {m.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
