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
