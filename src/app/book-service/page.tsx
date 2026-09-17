import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import BookServiceForm from "@/components/BookServiceForm";

export const metadata: Metadata = {
  title: "Book a Service / Event — My School Movie Club",
  description:
    "Book an In School Movie or Theatre Tour with My School Movie Club and tell us your preferred dates.",
};

export default function BookServicePage() {
  return (
    <>
      <PageBanner
        kicker="Book Now"
        title="Book a Service or Event"
        subtitle="Tell us a little about your school, and we'll get back to you to confirm dates and details."
      />
      <section className="relative overflow-hidden bg-sky py-16 sm:py-24">
        <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
          <div className="rounded-2xl border-2 border-navy bg-white p-8 shadow-hard sm:p-10">
            <BookServiceForm />
          </div>
        </div>
      </section>
    </>
  );
}
