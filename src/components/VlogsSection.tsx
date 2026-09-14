import { vlogs } from "@/lib/content";
import {
  CameraIcon,
  ChatIcon,
  ClapperIcon,
  FilmFrameIcon,
  PlayFilledIcon,
  ShieldIcon,
  TicketIcon,
} from "./icons";

const icons = [
  TicketIcon,
  CameraIcon,
  FilmFrameIcon,
  ClapperIcon,
  ChatIcon,
  ShieldIcon,
];
const accents = [
  "bg-cat-blue",
  "bg-cat-orange",
  "bg-cat-teal",
  "bg-cat-purple",
  "bg-cat-red",
  "bg-cat-gold",
];

export default function VlogsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-block -rotate-1 rounded-full border-2 border-navy bg-yellow px-3 py-1 font-display text-xs font-extrabold uppercase tracking-[0.15em] text-navy">
            Vlogs
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Learn something new
          </h2>
          <p className="mt-4 text-balance leading-relaxed text-slate-dark">
            Short videos on the ideas behind the club — planning shows,
            understanding cinema, and building real production skills.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {vlogs.map((v, i) => {
            const Icon = icons[i % icons.length];
            return (
              <a
                key={v.title}
                href="#"
                className={`group overflow-hidden rounded-2xl border-2 border-navy bg-cream shadow-hard transition-transform hover:-translate-y-1 hover:rotate-0 ${
                  i % 2 === 0 ? "sm:rotate-1" : "sm:-rotate-1"
                }`}
              >
                <div
                  className={`relative flex aspect-video items-center justify-center border-b-2 border-navy ${accents[i % accents.length]}`}
                >
                  <Icon className="h-12 w-12 text-white/90" />
                  <div className="absolute inset-0 flex items-center justify-center bg-navy/0 transition-colors group-hover:bg-navy/20">
                    <span className="flex h-11 w-11 scale-90 items-center justify-center rounded-full bg-white/90 text-navy opacity-0 shadow-soft transition-all group-hover:scale-100 group-hover:opacity-100">
                      <PlayFilledIcon className="h-4 w-4 translate-x-[1px]" />
                    </span>
                  </div>
                  <span className="absolute bottom-2 right-2 rounded-md border-2 border-navy bg-yellow px-1.5 py-0.5 font-display text-[11px] font-extrabold text-navy">
                    {v.duration}
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-display text-base font-extrabold leading-snug text-navy">
                    {v.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-dark">
                    {v.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
