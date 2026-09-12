import Link from "next/link";
import { ChevronRightIcon } from "./icons";

const baseClasses =
  "rounded-xl border-2 border-navy/25 bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-slate/60 focus:border-navy focus:outline-none";

export function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="font-sans text-xs font-bold uppercase tracking-wide text-navy/70">
        {label}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className={baseClasses}
      />
    </label>
  );
}

export function TextAreaField({
  label,
  name,
  placeholder,
  rows = 3,
  required = false,
}: {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="font-sans text-xs font-bold uppercase tracking-wide text-navy/70">
        {label}
      </span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className={baseClasses}
      />
    </label>
  );
}

export function SelectField({
  label,
  name,
  options,
  required = false,
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="font-sans text-xs font-bold uppercase tracking-wide text-navy/70">
        {label}
      </span>
      <div className="relative">
        <select
          name={name}
          required={required}
          value={value}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
          className={`w-full appearance-none pr-9 ${baseClasses}`}
        >
          <option value="">Select an option</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronRightIcon className="pointer-events-none absolute right-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-90 text-slate" />
      </div>
    </label>
  );
}

export function CheckboxGroupField({
  label,
  name,
  options,
  values,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  values: string[];
  onChange: (values: string[]) => void;
}) {
  function toggle(option: string) {
    onChange(
      values.includes(option)
        ? values.filter((v) => v !== option)
        : [...values, option]
    );
  }

  return (
    <div className="grid gap-2">
      <span className="font-sans text-xs font-bold uppercase tracking-wide text-navy/70">
        {label}
      </span>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((o) => {
          const checked = values.includes(o);
          return (
            <label
              key={o}
              className={`flex cursor-pointer items-center gap-2.5 rounded-xl border-2 px-3.5 py-2.5 text-sm transition-colors ${
                checked
                  ? "border-navy bg-blue/10 text-navy"
                  : "border-navy/20 bg-white text-navy hover:border-navy/40"
              }`}
            >
              <input
                type="checkbox"
                value={o}
                checked={checked}
                onChange={() => toggle(o)}
                className="h-4 w-4 shrink-0 rounded border-2 border-navy/40 text-blue focus:ring-2 focus:ring-blue"
              />
              {o}
            </label>
          );
        })}
      </div>
      {/* hidden inputs so the selection is included on a native form submit */}
      {values.map((v) => (
        <input key={v} type="hidden" name={name} value={v} />
      ))}
    </div>
  );
}

export function TermsCheckbox({ name = "acceptTerms" }: { name?: string }) {
  return (
    <label className="flex items-start gap-2.5">
      <input
        type="checkbox"
        name={name}
        required
        className="mt-0.5 h-4 w-4 shrink-0 rounded border-2 border-navy/40 text-blue focus:ring-2 focus:ring-blue"
      />
      <span className="text-sm text-slate-dark">
        I agree to the{" "}
        <Link
          href="/terms-of-use"
          target="_blank"
          className="font-semibold text-blue underline hover:text-blue-dark"
        >
          Terms of Use
        </Link>
      </span>
    </label>
  );
}
