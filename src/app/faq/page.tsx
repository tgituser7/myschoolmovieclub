import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "FAQ — My School Movie Club",
  description: "Answers to common questions about My School Movie Club.",
};

const faqs = [
  {
    q: "What is My School Movie Club?",
    a: "A membership programme that brings curated, educational film screenings, tours and workshops into school life — turning screen time into curriculum, discussion and discovery.",
  },
  {
    q: "How do we get our school started?",
    a: "Register your school through our School Registration form, or send us an enquiry from the Join Us page. Our team will follow up to recommend a plan based on your class sizes and existing equipment.",
  },
  {
    q: "Do we need our own projector or screen?",
    a: "No — we offer options for every setup. Schools without equipment can opt for a full in-school movie service, while schools with their own projector can subscribe to just our curated content.",
  },
  {
    q: "Is the content age-appropriate and curriculum-linked?",
    a: "Yes. Every title is tagged by subject and stage, and mapped to major curricula (CBSE, ICSE, State Boards, IB and international boards) so it fits naturally into the school day.",
  },
  {
    q: "Can we choose which films are screened?",
    a: "Absolutely. Browse the catalogue by category or format and let us know your preferences — we'll help build a screening plan around what your school wants to show.",
  },
  {
    q: "What other services does the club offer besides screenings?",
    a: "Beyond movie screenings, we organise village and agriculture tours, theatre tours, skill development workshops, art/movie-making/debate competitions, celebrity management and backstage technical support for school events.",
  },
  {
    q: "How much does membership cost?",
    a: "Pricing depends on the plan and scale you choose. Register your school or reach out via Contact and our team will share a plan tailored to you.",
  },
];

export default function FAQPage() {
  return (
    <>
      <PageBanner
        kicker="FAQ"
        title="Frequently Asked Questions"
        subtitle="Can't find what you're looking for? Reach out through our Contact page."
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="flex flex-col gap-5">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border-2 border-navy bg-cream p-6 shadow-hard-sm sm:p-7"
              >
                <p className="font-display text-lg font-extrabold text-navy">
                  {f.q}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-dark">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner
        title="Still have questions?"
        subtitle="Send us a message and we'll get back to you within a couple of working days."
        primary={{ href: "/contact", label: "Contact Us" }}
        secondary={{ href: "/join-us", label: "Join Us" }}
      />
    </>
  );
}
