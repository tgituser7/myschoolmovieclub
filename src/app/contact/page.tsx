import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact — My School Movie Club",
  description: "Get in touch with the My School Movie Club team.",
};

const info = [
  {
    label: "Email",
    value: "hello@myschoolmovieclub.example",
    icon: MailIcon,
    bg: "bg-cat-blue",
  },
  {
    label: "Phone",
    value: "+91 00000 00000",
    icon: PhoneIcon,
    bg: "bg-cat-teal",
  },
  {
    label: "Office",
    value: "Add your city / regional office address here",
    icon: MapPinIcon,
    bg: "bg-cat-red",
  },
];

const leadership = [
  {
    name: "Ravi Bhatia",
    title: "Founder",
    email: "ravi.bhatia@myschoolmovieclub.example",
    initials: "RB",
    bg: "bg-cat-blue",
  },
  {
    name: "Hriday Bhatia",
    title: "CEO",
    email: "hriday.bhatia@myschoolmovieclub.example",
    initials: "HB",
    bg: "bg-cat-orange",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        kicker="Contact"
        title="We'd love to hear from you"
        subtitle="Questions about the club, the catalogue, or a partnership — send us a note and we'll get back to you."
      />
      <section className="relative overflow-hidden bg-sky py-16 sm:py-24">
        <div className="dots pointer-events-none absolute inset-0 text-navy/[0.08]" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="text-center font-display text-2xl font-extrabold text-navy sm:text-3xl">
            Leadership
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-balance text-center leading-relaxed text-slate-dark">
            Reach out directly to our founding team.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {leadership.map((p, i) => (
              <div
                key={p.name}
                className={`flex items-center gap-4 rounded-2xl border-2 border-navy bg-white p-6 shadow-hard transition-transform hover:-translate-y-1 ${
                  i % 2 === 0 ? "sm:-rotate-1" : "sm:rotate-1"
                }`}
              >
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-navy font-display text-lg font-extrabold text-white ${p.bg}`}>
                  {p.initials}
                </span>
                <div>
                  <p className="font-display text-base font-extrabold text-navy">
                    {p.name}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-wide text-orange">
                    {p.title}
                  </p>
                  <a
                    href={`mailto:${p.email}`}
                    className="mt-1 block text-sm text-slate-dark hover:text-blue"
                  >
                    {p.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10">
          <div className="flex flex-col gap-4">
            {info.map((i) => (
              <div
                key={i.label}
                className="flex items-start gap-4 rounded-2xl border-2 border-navy bg-white p-6 shadow-hard-sm"
              >
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-navy text-white ${i.bg}`}>
                  <i.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-extrabold text-navy">
                    {i.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-dark">
                    {i.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border-2 border-navy bg-white p-8 shadow-hard">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
