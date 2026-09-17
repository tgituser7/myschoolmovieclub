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
    <section className="relative overflow-hidden bg-orange px-6 py-16 sm:py-24 lg:px-10">
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-balance font-display text-3xl font-extrabold text-navy sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-xl text-balance leading-relaxed text-navy/70">
            {subtitle}
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primary.href}
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-navy px-6 py-3 font-display text-sm font-extrabold text-white shadow-hard-sm transition-transform hover:-translate-y-1 hover:shadow-hard"
          >
            {primary.label}
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
          <Link
            href={secondary.href}
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-white px-6 py-3 font-display text-sm font-extrabold text-navy shadow-hard-sm transition-transform hover:-translate-y-1 hover:shadow-hard"
          >
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
