import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Mission from "@/components/Mission";
import Advantages from "@/components/Advantages";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Us — My School Movie Club",
  description:
    "Our mission is to educate, inspire, and empower students through the power of cinema.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        kicker="About Us"
        title="Educate. Inspire. Empower."
        subtitle="A membership club built on one idea: the same story that entertains a child can also teach them something that lasts."
      />
      <Mission />
      <Advantages />
      <CTABanner
        title="See it for yourself"
        subtitle="Browse the catalogue, look at the screening calendar, or register your school to get started."
        secondary={{ href: "/movies", label: "Browse Movies" }}
      />
    </>
  );
}
