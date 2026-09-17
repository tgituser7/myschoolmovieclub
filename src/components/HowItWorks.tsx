import { howItWorks } from "@/lib/content";
import {
  CameraIcon,
  ChatIcon,
  ClapperIcon,
  FilmFrameIcon,
  GraduationCapIcon,
  LeafIcon,
  PersonIcon,
  QuillIcon,
  ShieldIcon,
  TicketIcon,
} from "./icons";

const accents = [
  "bg-cat-blue",
  "bg-cat-purple",
  "bg-cat-orange",
  "bg-cat-green",
  "bg-cat-red",
  "bg-cat-gold",
  "bg-cat-teal",
  "bg-cat-pink",
  "bg-cat-indigo",
  "bg-cat-cyan",
];
const icons = [
  GraduationCapIcon,
  FilmFrameIcon,
  TicketIcon,
  LeafIcon,
  ClapperIcon,
  PersonIcon,
  ShieldIcon,
  QuillIcon,
  CameraIcon,
  ChatIcon,
];

export default function HowItWorks() {
  return (
    <section id="how" className="grain relative overflow-hidden bg-navy py-16 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-block -rotate-1 rounded-full border-2 border-white bg-orange px-3 py-1 font-display text-xs font-extrabold uppercase tracking-[0.15em] text-navy">
            How It Works
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold text-white sm:text-4xl">
            Ten ways to bring the club to your school
          </h2>
          <p className="mt-4 text-balance leading-relaxed text-white/70">
            Whatever a school already has in place — or doesn&apos;t —
            there is a straightforward way to begin screening.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {howItWorks.map((h, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={h.title}
                className={`flex flex-col rounded-2xl border-2 border-navy bg-cream p-8 shadow-hard-white transition-transform hover:-translate-y-1 ${
                  i % 2 === 0 ? "lg:rotate-1" : "lg:-rotate-1"
                }`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-display text-xs font-extrabold uppercase tracking-[0.15em] text-navy/50">
                    {h.kicker}
                  </span>
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-navy text-white ${accents[i]}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="font-display text-xl font-extrabold text-navy">
                  {h.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-dark">
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
