"use client";

import { useState } from "react";
import { indianStates } from "@/lib/content";
import { ChevronRightIcon, TicketIcon } from "./icons";
import {
  Field,
  RadioGroupField,
  SelectField,
  TermsCheckbox,
  TextAreaField,
} from "./FormField";
import { useFormSubmit } from "@/lib/useFormSubmit";

const serviceOptions = ["In School Movie", "Theatre Tours"];

export default function BookServiceForm() {
  const { status, submit } = useFormSubmit("/api/book-service");
  const [service, setService] = useState("");

  if (status === "success") {
    return (
      <div className="flex flex-col items-center py-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue/10 text-blue">
          <TicketIcon className="h-6 w-6" />
        </span>
        <p className="mt-5 font-display text-xl font-bold text-navy">
          Booking request received
        </p>
        <p className="mt-2 max-w-sm text-sm text-slate">
          Thank you — our team will review your selected services and reach
          out to confirm dates and details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="School / Organisation Name" name="schoolName" required />
        <Field label="Representative Name" name="representativeName" required />
      </div>
      <Field label="Address" name="address" required />
      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField
          label="State"
          name="state"
          options={[...indianStates]}
          placeholder="Select a state"
          required
        />
        <Field label="City" name="city" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Mobile" name="mobile" type="tel" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Date of Event" name="eventDate" type="date" />
        <Field
          label="Approximate Students Joining the Event"
          name="expectedStudents"
          type="number"
          placeholder="e.g. 40"
        />
      </div>
      <RadioGroupField
        label="Which service would you like to book?"
        name="service"
        options={serviceOptions}
        value={service}
        onChange={setService}
        required
      />
      <TextAreaField
        label="Additional Details"
        name="message"
        placeholder="Expected audience size, preferred timing, anything else we should know..."
      />
      <TermsCheckbox />
      {status === "error" ? (
        <p className="text-sm font-semibold text-cat-red">
          Something went wrong submitting your booking request. Please try
          again.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy bg-orange px-6 py-3.5 font-display text-sm font-extrabold text-navy shadow-hard-sm transition-transform hover:-translate-y-1 hover:shadow-hard disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit Booking Request"}
        <ChevronRightIcon className="h-4 w-4" />
      </button>
    </form>
  );
}
