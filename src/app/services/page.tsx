import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import HowItWorks from "@/components/HowItWorks";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Services — My School Movie Club",
  description:
    "Three ways to bring My School Movie Club to your campus — In School Movie, Classroom Movies, or a Theatre Tour.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        kicker="Our Services"
        title="Three ways to bring movies into school life"
        subtitle="From a full-school assembly screening to a classroom feature to a proper cinema outing — pick the format that suits the occasion."
      />
      <HowItWorks />
      <CTABanner
        title="Not sure which option fits?"
        subtitle="Register your school and we'll recommend a plan based on your class sizes and existing equipment."
      />
    </>
  );
}
