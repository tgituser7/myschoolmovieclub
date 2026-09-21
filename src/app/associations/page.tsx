import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Associations — My School Movie Club",
  description:
    "The institutions and partners that stand alongside My School Movie Club.",
};

const partners = [
  { name: "DIT University", logo: "/associations/dit_university.png", w: 80, h: 65 },
  { name: "KPI", logo: "/associations/kpi.png", w: 80, h: 67 },
];

export default function AssociationsPage() {
  return (
    <>
      <PageBanner
        kicker="Associations"
        title="Built with schools, boards and educators in mind"
        subtitle="My School Movie Club grows through the institutions and partners who believe in learning beyond the textbook."
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="text-center font-display text-2xl font-extrabold text-navy sm:text-3xl">
            Backed by Trusted Institutions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-balance text-center leading-relaxed text-slate-dark">
            The institutions and organisations that stand with us in bringing
            meaningful cinema and creative learning to students.
          </p>
          <div className="mt-10 flex flex-wrap items-stretch justify-center gap-6 sm:gap-8">
            {partners.map((p, i) => (
              <div
                key={p.name}
                className={`flex w-44 flex-col items-center gap-4 rounded-2xl border-2 border-navy bg-cream px-4 py-8 text-center shadow-hard-sm transition-transform hover:-translate-y-1 sm:w-52 ${
                  i % 2 === 0 ? "sm:rotate-1" : "sm:-rotate-1"
                }`}
              >
                <div className="flex h-24 w-full items-center justify-center rounded-xl border-2 border-navy bg-white">
                  <Image
                    src={p.logo}
                    alt={`${p.name} logo`}
                    width={p.w}
                    height={p.h}
                    className="h-auto max-h-16 w-auto"
                  />
                </div>
                <p className="font-display text-sm font-extrabold text-navy">
                  {p.name}
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
