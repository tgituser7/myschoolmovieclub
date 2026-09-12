"use client";

import { FormEvent, useState } from "react";
import { ChevronRightIcon, GraduationCapIcon } from "./icons";
import { Field, SelectField, TextAreaField } from "./FormField";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi (NCT)",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

export default function SchoolRegistrationForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="relative overflow-hidden bg-sky py-16 sm:py-24">
      <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
        <div className="rounded-2xl border-2 border-navy bg-white p-8 shadow-hard sm:p-10">
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
              <Field label="Address" name="address" required />
              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField
                  label="State"
                  name="state"
                  options={[...indianStates]}
                  required
                />
                <Field label="City" name="city" required />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="School Email"
                  name="schoolEmail"
                  type="email"
                  required
                />
                <Field
                  label="School Website"
                  name="schoolWebsite"
                  type="url"
                  placeholder="https://"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField
                  label="Approximate Student Strength"
                  name="strength"
                  options={["Under 200", "200–500", "500–1000", "1000+"]}
                />
                <Field
                  label="Expected Students Joining the Club"
                  name="expectedStudents"
                  type="number"
                  placeholder="e.g. 40"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Contact Person" name="contactName" required />
                <Field label="Designation" name="designation" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Contact Email"
                  name="email"
                  type="email"
                  required
                />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <TextAreaField
                label="Anything else we should know?"
                name="message"
                placeholder="Existing projection equipment, preferred term to start, class sizes..."
              />
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy bg-orange px-6 py-3.5 font-display text-sm font-extrabold text-navy shadow-hard-sm transition-transform hover:-translate-y-1 hover:shadow-hard"
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
