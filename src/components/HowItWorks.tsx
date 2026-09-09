import { howItWorks } from "@/lib/content";
import { FilmFrameIcon, GraduationCapIcon, TicketIcon } from "./icons";

const accents = [
  { bg: "bg-cat-blue/10", fg: "text-cat-blue" },
  { bg: "bg-cat-purple/10", fg: "text-cat-purple" },
  { bg: "bg-cat-orange/10", fg: "text-cat-orange" },
];
const icons = [GraduationCapIcon, FilmFrameIcon, TicketIcon];

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 bg-sky-2 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-blue">
            How It Works
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Three ways to bring the club to your school
          </h2>
          <p className="mt-4 text-balance leading-relaxed text-slate">
            Whatever a school already has in place — or doesn&apos;t —
            there is a straightforward way to begin screening.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {howItWorks.map((h, i) => {
            const Icon = icons[i % icons.length];
            return (
            <div
              key={h.title}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-soft"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-slate">
                  {h.kicker}
                </span>
                <span className={`flex h-10 w-10 items-center justify-center rounded-full ${accents[i].bg} ${accents[i].fg}`}>
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-navy">
                {h.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {h.desc}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
