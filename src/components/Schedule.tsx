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
const accents = ["bg-cat-blue", "bg-cat-gold", "bg-cat-orange", "bg-cat-teal", "bg-cat-red", "bg-cat-purple"];

export default function Schedule() {
  return (
    <section id="schedule" className="scroll-mt-20 bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-block rotate-1 rounded-full border-2 border-navy bg-yellow px-3 py-1 font-display text-xs font-extrabold uppercase tracking-[0.15em] text-navy">
            Now Showing
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold text-navy sm:text-4xl">
            When can movies be planned?
          </h2>
          <p className="mt-4 text-balance leading-relaxed text-slate-dark">
            Screenings slot into the moments a school already has spare —
            no schedule needs to be rebuilt around them.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border-2 border-navy bg-white shadow-hard">
          {schedule.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={s.time}
                className={`flex items-center gap-5 px-6 py-5 sm:px-10 ${
                  i !== schedule.length - 1 ? "border-b-2 border-navy/10" : ""
                }`}
              >
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-navy text-white ${accents[i]}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="whitespace-nowrap font-display text-lg font-extrabold text-navy">
                  {s.time}
                </span>
                <span
                  aria-hidden
                  className="mx-2 hidden flex-1 border-b-2 border-dotted border-navy/20 sm:block"
                />
                <span className="text-right text-sm leading-snug text-slate-dark sm:text-left">
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
