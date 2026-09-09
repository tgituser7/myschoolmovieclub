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
  },
  {
    label: "Phone",
    value: "+91 00000 00000",
    icon: PhoneIcon,
  },
  {
    label: "Office",
    value: "Add your city / regional office address here",
    icon: MapPinIcon,
  },
];

const leadership = [
  {
    name: "Ravi Bhatia",
    title: "Founder",
    email: "ravi.bhatia@myschoolmovieclub.example",
    initials: "RB",
  },
  {
    name: "Hriday Bhatia",
    title: "CEO",
    email: "hriday.bhatia@myschoolmovieclub.example",
    initials: "HB",
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
      <section className="bg-sky-2 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="text-center font-display text-2xl font-extrabold text-navy sm:text-3xl">
            Leadership
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-balance text-center leading-relaxed text-slate">
            Reach out directly to our founding team.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {leadership.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-soft"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue/10 font-display text-lg font-bold text-blue">
                  {p.initials}
                </span>
                <div>
                  <p className="font-display text-base font-bold text-navy">
                    {p.name}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-orange">
                    {p.title}
                  </p>
                  <a
                    href={`mailto:${p.email}`}
                    className="mt-1 block text-sm text-slate hover:text-blue"
                  >
                    {p.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10">
          <div className="flex flex-col gap-4">
            {info.map((i) => (
              <div
                key={i.label}
                className="flex items-start gap-4 rounded-2xl bg-sky-2 p-6 shadow-soft"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-blue shadow-soft">
                  <i.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-navy">
                    {i.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate">
                    {i.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-sky-2 p-8 shadow-card">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
