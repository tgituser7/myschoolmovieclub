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
const accents = [
  { bg: "bg-cat-blue/10", fg: "text-cat-blue" },
  { bg: "bg-cat-red/10", fg: "text-cat-red" },
  { bg: "bg-cat-purple/10", fg: "text-cat-purple" },
  { bg: "bg-cat-orange/10", fg: "text-cat-orange" },
  { bg: "bg-cat-teal/10", fg: "text-cat-teal" },
  { bg: "bg-cat-gold/10", fg: "text-cat-gold" },
];

export default function Promotion() {
  return (
    <section id="promotion" className="scroll-mt-20 bg-sky-2 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-blue">
            Spreading the Word
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Making sure every student knows the club exists
          </h2>
          <p className="mt-4 text-balance leading-relaxed text-slate">
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
                className="flex flex-col items-center gap-3 rounded-2xl bg-white px-4 py-8 text-center shadow-soft"
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-full ${accents[i].bg} ${accents[i].fg}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <p className="font-display text-sm font-bold text-navy">
                  {p.title}
                </p>
                <p className="text-xs leading-relaxed text-slate">
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
