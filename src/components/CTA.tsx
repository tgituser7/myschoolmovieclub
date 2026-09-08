"use client";

import { FormEvent, useState } from "react";
import { ChevronRightIcon, PlayFilledIcon, TicketIcon } from "./icons";

export default function CTA() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="join"
      className="scroll-mt-20 bg-gradient-to-b from-white to-sky-2 py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-10">
        <div>
          <p className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-blue">
            Reserve Your Seat
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Bring My School Movie Club to your campus
          </h2>
          <p className="mt-4 max-w-md text-balance leading-relaxed text-slate">
            Tell us a little about your school and we&apos;ll follow up with
            a plan — subscription, single-film tour, or your own projector
            with our content boxes.
          </p>
          <div className="mt-7 flex items-center gap-3 text-slate">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange/10 text-orange">
              <TicketIcon className="h-4 w-4" />
            </span>
            <p className="text-sm font-medium">
              No commitment required to enquire
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-card">
          {sent ? (
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
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your Name" name="name" required />
                <Field label="School Name" name="school" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <label className="grid gap-1.5">
                <span className="font-sans text-xs font-semibold uppercase tracking-wide text-slate">
                  Message (optional)
                </span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Class sizes, preferred timing, existing equipment..."
                  className="rounded-xl border border-slate/20 bg-sky-2 px-3.5 py-2.5 text-sm text-navy placeholder:text-slate/60 focus:border-blue focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-blue py-3 pl-3 pr-6 font-sans text-sm font-semibold text-white shadow-button transition-transform hover:-translate-y-0.5"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-blue">
                  <PlayFilledIcon className="h-3 w-3 translate-x-[1px]" />
                </span>
                Request a Callback
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="font-sans text-xs font-semibold uppercase tracking-wide text-slate">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-xl border border-slate/20 bg-sky-2 px-3.5 py-2.5 text-sm text-navy placeholder:text-slate/60 focus:border-blue focus:outline-none"
      />
    </label>
  );
}
