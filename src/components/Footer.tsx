import Logo from "./Logo";

const links = [
  { href: "#philosophy", label: "Why Film" },
  { href: "#movies", label: "Movies" },
  { href: "#categories", label: "Categories" },
  { href: "#how", label: "How It Works" },
  { href: "#schedule", label: "Schedule" },
  { href: "#advantages", label: "About Us" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate/10 bg-navy py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 text-center lg:flex-row lg:justify-between lg:px-10 lg:text-left">
        <div className="rounded-xl bg-white/95 px-3 py-2">
          <Logo />
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-sm text-white/70 transition-colors hover:text-orange"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <p className="mt-10 text-center font-sans text-xs text-white/40">
        © {new Date().getFullYear()} My School Movie Club. A membership
        programme bringing curated cinema into school life.
      </p>
    </footer>
  );
}
