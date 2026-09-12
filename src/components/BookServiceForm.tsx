"use client";

import { FormEvent, useState } from "react";
import { howItWorks, indianStates } from "@/lib/content";
import { ChevronRightIcon, TicketIcon } from "./icons";
import {
  CheckboxGroupField,
  Field,
  SelectField,
  TermsCheckbox,
  TextAreaField,
} from "./FormField";

const serviceOptions = howItWorks
  .map((h) => h.title)
  .filter((title) => title !== "Classroom Movies");

export default function BookServiceForm() {
  const [sent, setSent] = useState(false);
  const [services, setServices] = useState<string[]>([]);
  const [showServicesError, setShowServicesError] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (services.length === 0) {
      setShowServicesError(true);
      return;
    }
    setShowServicesError(false);
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
      <CheckboxGroupField
        label="Which services would you like to book? (select all that apply)"
        name="services"
        options={serviceOptions}
        values={services}
        onChange={(v) => {
          setServices(v);
          if (v.length > 0) setShowServicesError(false);
        }}
      />
      {showServicesError ? (
        <p className="-mt-3 text-sm font-semibold text-cat-red">
          Please select at least one service.
        </p>
      ) : null}
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
