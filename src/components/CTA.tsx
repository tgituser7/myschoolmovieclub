"use client";

import { useState } from "react";
import { ChevronRightIcon, PlayFilledIcon, TicketIcon } from "./icons";
import { Field, SelectField, TermsCheckbox, TextAreaField } from "./FormField";
import { useFormSubmit } from "@/lib/useFormSubmit";

const joinOptions = [
  "Become a Member",
  "School Registration",
  "Distributor",
  "Partner With Us",
  "Other",
];

export default function CTA() {
  const { status, submit } = useFormSubmit("/api/join-us");
  const [joinAs, setJoinAs] = useState("");

  return (
    <section
      id="join"
      className="grain scroll-mt-20 bg-blue py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-10">
        <div>
          <p className="inline-block -rotate-1 rounded-full border-2 border-navy bg-yellow px-3 py-1 font-display text-xs font-extrabold uppercase tracking-[0.15em] text-navy">
            Reserve Your Seat
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold text-white sm:text-4xl">
            Bring My School Movie Club to your campus
          </h2>
          <p className="mt-4 max-w-md text-balance leading-relaxed text-white/80">
            Tell us a little about your school and we&apos;ll follow up with
            a plan — subscription, single-film tour, or your own projector
            with our content boxes.
          </p>
          <div className="mt-7 flex items-center gap-3 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-navy bg-orange text-navy">
              <TicketIcon className="h-4 w-4" />
            </span>
            <p className="text-sm font-bold">
              No commitment required to enquire
            </p>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-navy bg-white p-8 shadow-hard">
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue/10 text-blue">
                <TicketIcon className="h-6 w-6" />
              </span>
              <p className="mt-5 font-display text-xl font-bold text-navy">
                Your seat is reserved
              </p>
              <p className="mt-2 max-w-xs text-sm text-slate">
                Thank you — someone from the Movie Club team will be in
                touch shortly to plan your school&apos;s first screening.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-4">
              <SelectField
                label="I'd like to join as"
                name="joinAs"
                options={joinOptions}
                value={joinAs}
                onChange={setJoinAs}
                required
              />
              {joinAs === "Other" ? (
                <Field
                  label="Kindly Specify"
                  name="joinAsOther"
                  placeholder="Tell us how you'd like to join"
                  required
                />
              ) : null}
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your Name" name="name" required />
                <Field label="School Name" name="school" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Mobile" name="mobile" type="tel" />
              </div>
              <TextAreaField
                label="Message (optional)"
                name="message"
                placeholder="Class sizes, preferred timing, existing equipment..."
              />
              <TermsCheckbox />
              {status === "error" ? (
                <p className="text-sm font-semibold text-cat-red">
                  Something went wrong sending your request. Please try
                  again.
                </p>
              ) : null}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group mt-2 inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-navy bg-orange py-3 pl-3 pr-6 font-display text-sm font-extrabold text-navy shadow-hard-sm transition-transform hover:-translate-y-1 hover:shadow-hard disabled:opacity-60"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-navy bg-white text-navy">
                  <PlayFilledIcon className="h-3 w-3 translate-x-[1px]" />
                </span>
                {status === "submitting" ? "Sending..." : "Request a Callback"}
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
