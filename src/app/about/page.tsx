import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Philosophy from "@/components/Philosophy";
import Advantages from "@/components/Advantages";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Us — My School Movie Club",
  description:
    "Why film belongs in the classroom, and what My School Movie Club gives back to your campus.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        kicker="About Us"
        title="Why we believe movies belong in the classroom"
        subtitle="My School Movie Club is a membership programme built on one idea: the same story that entertains a child can also teach them something that lasts."
      />
      <Philosophy />
      <Advantages />
      <CTABanner
        title="See it for yourself"
        subtitle="Browse the catalogue, look at the screening calendar, or register your school to get started."
        secondary={{ href: "/movies", label: "Browse Movies" }}
      />
    </>
  );
}
