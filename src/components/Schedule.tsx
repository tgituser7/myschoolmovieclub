import { schedule } from "@/lib/content";
import {
  CalendarIcon,
  ClockIcon,
  PencilIcon,
  SunburstIcon,
  SunIcon,
  SuitcaseIcon,
} from "./icons";

const icons = [CalendarIcon, SunIcon, SunburstIcon, SuitcaseIcon, ClockIcon, PencilIcon];
const accents = [
  { bg: "bg-cat-blue/10", fg: "text-cat-blue" },
  { bg: "bg-cat-gold/10", fg: "text-cat-gold" },
  { bg: "bg-cat-orange/10", fg: "text-cat-orange" },
  { bg: "bg-cat-teal/10", fg: "text-cat-teal" },
  { bg: "bg-cat-red/10", fg: "text-cat-red" },
  { bg: "bg-cat-purple/10", fg: "text-cat-purple" },
];

export default function Schedule() {
  return (
    <section id="schedule" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-blue">
            Now Showing
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold text-navy sm:text-4xl">
            When can movies be planned?
          </h2>
          <p className="mt-4 text-balance leading-relaxed text-slate">
            Screenings slot into the moments a school already has spare —
            no schedule needs to be rebuilt around them.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl bg-sky-2 shadow-soft">
          {schedule.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={s.time}
                className={`flex items-center gap-5 px-6 py-5 sm:px-10 ${
                  i !== schedule.length - 1 ? "border-b border-slate/10" : ""
                }`}
              >
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${accents[i].bg} ${accents[i].fg}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="whitespace-nowrap font-display text-lg font-bold text-navy">
                  {s.time}
                </span>
                <span
                  aria-hidden
                  className="mx-2 hidden flex-1 border-b border-dotted border-slate/30 sm:block"
                />
                <span className="text-right text-sm leading-snug text-slate sm:text-left">
                  {s.detail}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
