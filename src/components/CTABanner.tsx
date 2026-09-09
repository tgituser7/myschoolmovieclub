import Link from "next/link";
import { ChevronRightIcon } from "./icons";

export default function CTABanner({
  title,
  subtitle,
  primary = { href: "/join-us", label: "Join Us" },
  secondary = { href: "/school-registration", label: "Register Your School" },
}: {
  title: string;
  subtitle?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="bg-navy px-6 py-16 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance font-display text-3xl font-extrabold text-white sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-xl text-balance leading-relaxed text-white/65">
            {subtitle}
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primary.href}
            className="inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3 font-sans text-sm font-semibold text-white shadow-button transition-transform hover:-translate-y-0.5"
          >
            {primary.label}
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
          <Link
            href={secondary.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-sans text-sm font-semibold text-white transition-colors hover:border-orange hover:text-orange"
          >
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
