import {
  BookIcon,
  ChatIcon,
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  UsersIcon,
  YouTubeIcon,
} from "./icons";

const pillars = [
  {
    icon: GlobeIcon,
    bg: "bg-cat-teal",
    text: "A deeper understanding of complex social and environmental issues",
  },
  {
    icon: UsersIcon,
    bg: "bg-cat-red",
    text: "Exposure to diverse cultures, perspectives, and experiences",
  },
  {
    icon: BookIcon,
    bg: "bg-cat-blue",
    text: "Insights into historical events, scientific concepts, and literary classics",
  },
  {
    icon: ChatIcon,
    bg: "bg-cat-orange",
    text: "Opportunities for reflection, discussion, and critical thinking",
  },
];

const social = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "YouTube", href: "#", icon: YouTubeIcon },
];

export default function Mission() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <p className="inline-block -rotate-1 rounded-full border-2 border-navy bg-yellow px-3 py-1 font-display text-xs font-extrabold uppercase tracking-[0.15em] text-navy">
          Our Mission
        </p>
        <p className="mt-5 text-balance font-display text-2xl font-extrabold leading-snug text-navy sm:text-3xl">
          Our mission is to educate, inspire, and empower students through
          the power of cinema. We believe that movies have the ability to
          spark imagination, foster critical thinking, and promote
          social-emotional learning.
        </p>
        <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-slate-dark">
          Through our carefully curated selection of documentaries, short
          films, and feature films, we aim to provide students with:
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <div
              key={p.text}
              className={`flex items-start gap-4 rounded-2xl border-2 border-navy bg-cream p-6 shadow-hard-sm transition-transform hover:-translate-y-1 ${
                i % 2 === 0 ? "sm:-rotate-1" : "sm:rotate-1"
              }`}
            >
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-navy text-white ${p.bg}`}>
                <p.icon className="h-5 w-5" />
              </span>
              <p className="font-display text-sm font-bold leading-snug text-navy">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 -rotate-1 rounded-2xl border-2 border-navy bg-blue p-7 shadow-hard sm:p-9">
          <p className="text-balance text-lg font-semibold leading-relaxed text-white">
            My School Movie Club is not just about entertainment; it&apos;s
            about education, empathy, and empowerment. We invite students to
            join us on this cinematic journey, where they&apos;ll gain
            valuable knowledge, develop essential skills, and make lasting
            connections with their peers.
          </p>
          <p className="mt-4 font-display text-lg font-extrabold text-yellow">
            Join us for a movie experience that&apos;s both fun and
            informative!
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-2xl border-2 border-navy bg-sky-2 px-6 py-5">
          <p className="font-display text-sm font-bold text-navy">
            Follow us for updates, sneak peeks, and behind-the-scenes fun!
          </p>
          <div className="flex items-center gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-navy bg-white text-navy transition-colors hover:bg-navy hover:text-white"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
