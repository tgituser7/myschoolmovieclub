import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Schedule from "@/components/Schedule";
import Promotion from "@/components/Promotion";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Events — My School Movie Club",
  description:
    "See when screenings can be planned — regular slots, weekends, festivals, holidays and more.",
};

export default function EventsPage() {
  return (
    <>
      <PageBanner
        kicker="Events & Screenings"
        title="Screenings that fit your school's calendar"
        subtitle="A club event doesn't need a special occasion — it slots into time your school already has."
      />
      <Schedule />
      <Promotion />
      <CTABanner
        title="Plan your first screening"
        subtitle="Tell us your preferred dates and audience size, and we'll help you build a screening calendar."
      />
    </>
  );
}
