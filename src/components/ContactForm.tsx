"use client";

import { FormEvent, useState } from "react";
import { ChevronRightIcon, TicketIcon } from "./icons";
import { Field, TermsCheckbox, TextAreaField } from "./FormField";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center py-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue/10 text-blue">
          <TicketIcon className="h-6 w-6" />
        </span>
        <p className="mt-5 font-display text-xl font-bold text-navy">
          Message sent
        </p>
        <p className="mt-2 max-w-xs text-sm text-slate">
          Thanks for reaching out — we&apos;ll get back to you within a
          couple of working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Subject" name="subject" required />
      <TextAreaField
        label="Message"
        name="message"
        rows={4}
        required
        placeholder="How can we help?"
      />
      <TermsCheckbox />
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy bg-orange px-6 py-3.5 font-display text-sm font-extrabold text-navy shadow-hard-sm transition-transform hover:-translate-y-1 hover:shadow-hard"
      >
        Send Message
        <ChevronRightIcon className="h-4 w-4" />
      </button>
    </form>
  );
}
