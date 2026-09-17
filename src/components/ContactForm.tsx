"use client";

import { ChevronRightIcon, TicketIcon } from "./icons";
import { Field, TermsCheckbox, TextAreaField } from "./FormField";
import { useFormSubmit } from "@/lib/useFormSubmit";

export default function ContactForm() {
  const { status, submit } = useFormSubmit("/api/contact");

  if (status === "success") {
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
    <form onSubmit={submit} className="grid gap-4">
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
      {status === "error" ? (
        <p className="text-sm font-semibold text-cat-red">
          Something went wrong sending your message. Please try again.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy bg-orange px-6 py-3.5 font-display text-sm font-extrabold text-navy shadow-hard-sm transition-transform hover:-translate-y-1 hover:shadow-hard disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
        <ChevronRightIcon className="h-4 w-4" />
      </button>
    </form>
  );
}
