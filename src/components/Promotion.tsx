import { promotion } from "@/lib/content";
import {
  BullhornIcon,
  FlagIcon,
  LeafletIcon,
  PinboardIcon,
  ScrollIcon,
  StandeeIcon,
} from "./icons";

const icons = [FlagIcon, PinboardIcon, ScrollIcon, StandeeIcon, BullhornIcon, LeafletIcon];
const accents = ["bg-cat-blue", "bg-cat-red", "bg-cat-purple", "bg-cat-orange", "bg-cat-teal", "bg-cat-gold"];

export default function Promotion() {
  return (
    <section id="promotion" className="relative overflow-hidden bg-sky py-16 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-block -rotate-1 rounded-full border-2 border-navy bg-yellow px-3 py-1 font-display text-xs font-extrabold uppercase tracking-[0.15em] text-navy">
            Spreading the Word
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Making sure every student knows the club exists
          </h2>
          <p className="mt-4 text-balance leading-relaxed text-slate-dark">
            A screening is only as good as its audience — these are the
            channels that fill the room.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {promotion.map((p, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={p.title}
                className={`flex flex-col items-center gap-3 rounded-2xl border-2 border-navy bg-white px-4 py-8 text-center shadow-hard-sm transition-transform hover:-translate-y-1 ${
                  i % 2 === 0 ? "sm:rotate-1" : "sm:-rotate-1"
                } hover:rotate-0`}
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-navy text-white ${accents[i]}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <p className="font-display text-sm font-extrabold text-navy">
                  {p.title}
                </p>
                <p className="text-xs leading-relaxed text-slate-dark">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
