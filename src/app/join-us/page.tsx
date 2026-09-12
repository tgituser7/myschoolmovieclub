import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import { ChevronRightIcon, GraduationCapIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Join Us — My School Movie Club",
  description:
    "Bring My School Movie Club to your campus — tell us about your school and we'll follow up with a plan.",
};

export default function JoinUsPage() {
  return (
    <>
      <section className="bg-cream py-8 sm:py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-6 text-center lg:px-10">
          <p className="font-display text-sm font-bold text-navy">
            Already know your school is joining?
          </p>
          <Link
            href="/school-registration"
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-orange px-5 py-2.5 font-display text-sm font-extrabold text-navy shadow-hard-sm transition-transform hover:-translate-y-1 hover:shadow-hard"
          >
            <GraduationCapIcon className="h-4 w-4" />
            Register Your School
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
