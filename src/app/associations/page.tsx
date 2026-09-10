import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import CTABanner from "@/components/CTABanner";
import {
  BankIcon,
  BookIcon,
  HandsIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Associations — My School Movie Club",
  description:
    "The curricula our content maps to, and the network of schools and reviewers behind My School Movie Club.",
};

const curricula = [
  { label: "CBSE", icon: BookIcon, bg: "bg-cat-blue" },
  { label: "ICSE", icon: BankIcon, bg: "bg-cat-purple" },
  { label: "State Boards", icon: UsersIcon, bg: "bg-cat-teal" },
  { label: "IB & International", icon: ShieldIcon, bg: "bg-cat-orange" },
];

const network = [
  {
    title: "Partner Schools",
    desc: "A growing network of schools across regions and boards, sharing feedback that shapes each term's catalogue.",
    icon: UsersIcon,
    bg: "bg-cat-blue",
  },
  {
    title: "Content Advisory Panel",
    desc: "Educators and child-development consultants review every title before it enters the catalogue.",
    icon: ShieldIcon,
    bg: "bg-cat-teal",
  },
  {
    title: "Social-Cause Partners",
    desc: "We work alongside education-focused NGOs to source and co-create films on social causes.",
    icon: HandsIcon,
    bg: "bg-cat-red",
  },
];

export default function AssociationsPage() {
  return (
    <>
      <PageBanner
        kicker="Associations"
        title="Built with schools, boards and educators in mind"
        subtitle="Our catalogue and screening formats are shaped by the curricula schools already follow and the people who review our content."
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="text-center font-display text-2xl font-extrabold text-navy sm:text-3xl">
            Content mapped to major curricula
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-balance text-center leading-relaxed text-slate-dark">
            Educational titles are tagged by subject and stage so they slot
            into whichever curriculum your school follows.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {curricula.map((c, i) => (
              <div
                key={c.label}
                className={`flex flex-col items-center gap-3 rounded-2xl border-2 border-navy bg-cream px-4 py-8 text-center shadow-hard-sm transition-transform hover:-translate-y-1 ${
                  i % 2 === 0 ? "sm:rotate-1" : "sm:-rotate-1"
                }`}
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-navy text-white ${c.bg}`}>
                  <c.icon className="h-5 w-5" />
                </span>
                <p className="font-display text-sm font-extrabold text-navy">
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-sky py-16 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="text-center font-display text-2xl font-extrabold text-navy sm:text-3xl">
            Who we work with
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {network.map((n, i) => (
              <div
                key={n.title}
                className={`rounded-2xl border-2 border-navy bg-white p-8 shadow-hard transition-transform hover:-translate-y-1 ${
                  i % 2 === 0 ? "lg:-rotate-1" : "lg:rotate-1"
                }`}
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-navy text-white ${n.bg}`}>
                  <n.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-lg font-extrabold text-navy">
                  {n.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-dark">
                  {n.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want your school listed as a partner?"
        subtitle="Register your school to join the network and help shape future screenings."
      />
    </>
  );
}
