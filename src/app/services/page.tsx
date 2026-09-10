import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import HowItWorks from "@/components/HowItWorks";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Services — My School Movie Club",
  description:
    "Seven ways to bring My School Movie Club to your campus — screenings, tours, skill development workshops, celebrity management and backstage technical support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        kicker="Our Services"
        title="Seven ways to bring movies into school life"
        subtitle="From screenings and field trips to hands-on workshops and full event support — pick the format that suits the occasion."
      />
      <HowItWorks />
      <CTABanner
        title="Not sure which option fits?"
        subtitle="Register your school and we'll recommend a plan based on your class sizes and existing equipment."
      />
    </>
  );
}
