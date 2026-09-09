"use client";

import { FormEvent, useState } from "react";
import { ChevronRightIcon, GraduationCapIcon } from "./icons";
import { Field, SelectField, TextAreaField } from "./FormField";

export default function SchoolRegistrationForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="rounded-2xl bg-sky-2 p-8 shadow-card sm:p-10">
          {sent ? (
            <div className="flex flex-col items-center py-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue/10 text-blue">
                <GraduationCapIcon className="h-6 w-6" />
              </span>
              <p className="mt-5 font-display text-xl font-bold text-navy">
                Registration received
              </p>
              <p className="mt-2 max-w-sm text-sm text-slate">
                Thank you for registering. Our team will review your
                school&apos;s details and reach out to schedule an onboarding
                call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="School Name" name="schoolName" required />
                <SelectField
                  label="Board / Affiliation"
                  name="board"
                  options={["CBSE", "ICSE", "State Board", "IB", "Other"]}
                  required
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="City" name="city" required />
                <SelectField
                  label="Approximate Student Strength"
                  name="strength"
                  options={["Under 200", "200–500", "500–1000", "1000+"]}
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Contact Person" name="contactName" required />
                <Field label="Designation" name="designation" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <SelectField
                label="Preferred Plan"
                name="plan"
                options={[
                  "In School Movie",
                  "Classroom Movies",
                  "Theatre Tours",
                  "Not sure yet",
                ]}
              />
              <TextAreaField
                label="Anything else we should know? (optional)"
                name="message"
                placeholder="Existing projection equipment, preferred term to start, class sizes..."
              />
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-blue px-6 py-3.5 font-sans text-sm font-semibold text-white shadow-button transition-transform hover:-translate-y-0.5"
              >
                Submit Registration
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
