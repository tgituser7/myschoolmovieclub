import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Terms of Use — My School Movie Club",
  description: "Terms of use for My School Movie Club.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By registering your school, submitting an enquiry, or otherwise using the services of My School Movie Club, you agree to be bound by these Terms of Use. If you do not agree, please do not use our services.",
  },
  {
    title: "2. Membership & Eligibility",
    body: "Membership is offered to schools and educational institutions. A registering school confirms it has the authority to enter into this membership on behalf of its students and staff.",
  },
  {
    title: "3. Use of Content & Services",
    body: "Screenings, tours, workshops and competitions are provided for educational and non-commercial use within the registered school only, unless otherwise agreed in writing. Films and materials may not be recorded, redistributed or publicly re-screened outside the arranged session.",
  },
  {
    title: "4. Intellectual Property",
    body: "All films, curricula mappings, branding and materials provided remain the property of My School Movie Club or its content partners. Nothing in these Terms transfers ownership of that content to a member school.",
  },
  {
    title: "5. Fees & Cancellations",
    body: "Fees, where applicable, are communicated at the time of registration or booking. Cancellation and rescheduling terms for a specific screening, tour or workshop will be confirmed with the school in advance.",
  },
  {
    title: "6. Conduct & Safety",
    body: "Schools are responsible for student supervision during any on-campus, tour or workshop activity arranged through the club. My School Movie Club coordinates content and logistics but does not replace the school's own duty of care.",
  },
  {
    title: "7. Privacy",
    body: "Information submitted through our forms (school details, contact information, student estimates) is used only to plan and deliver our services and will not be sold to third parties.",
  },
  {
    title: "8. Changes to These Terms",
    body: "We may update these Terms from time to time. Continued use of our services after changes are posted constitutes acceptance of the revised Terms.",
  },
  {
    title: "9. Contact",
    body: "Questions about these Terms can be sent through our Contact page.",
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <PageBanner
        kicker="Legal"
        title="Terms of Use"
        subtitle="Please read these terms carefully before registering your school or using our services."
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="mb-8 text-sm text-slate-dark">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long" })}. This is a general template and should be reviewed by your legal counsel before formal publication.
          </p>
          <div className="flex flex-col gap-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-lg font-extrabold text-navy">
                  {s.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-dark">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
