"use client";

import { FormEvent, useState } from "react";
import { indianStates } from "@/lib/content";
import { ChevronRightIcon, TicketIcon } from "./icons";
import {
  Field,
  RadioGroupField,
  SelectField,
  TermsCheckbox,
  TextAreaField,
} from "./FormField";

const serviceOptions = ["In School Movie", "Theatre Tours"];

export default function BookServiceForm() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState("");

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
    <form onSubmit={handleSubmit} className="grid gap-5">
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
        <Field label="Mobile" name="phone" type="tel" required />
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
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy bg-orange px-6 py-3.5 font-display text-sm font-extrabold text-navy shadow-hard-sm transition-transform hover:-translate-y-1 hover:shadow-hard"
      >
        Submit Booking Request
        <ChevronRightIcon className="h-4 w-4" />
      </button>
    </form>
  );
}
