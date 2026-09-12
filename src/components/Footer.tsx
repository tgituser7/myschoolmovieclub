import Link from "next/link";
import Logo from "./Logo";
import WaveDivider from "./WaveDivider";

const links = [
  { href: "/about", label: "About" },
  { href: "/movies", label: "Movies" },
  { href: "/events", label: "Events" },
  { href: "/services", label: "Services" },
  { href: "/associations", label: "Associations" },
  { href: "/join-us", label: "Join Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-navy">
      <WaveDivider color="#0b1e3d" />
      <div className="grain bg-navy py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 text-center lg:flex-row lg:justify-between lg:px-10 lg:text-left">
          <div className="-rotate-1 rounded-xl border-2 border-navy bg-white px-3 py-2 shadow-hard-orange">
            <Logo />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 font-display text-sm font-bold text-white/80 transition-colors hover:bg-white/10 hover:text-orange"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-white/10 pt-6">
          <Link
            href="/faq"
            className="font-sans text-xs font-semibold text-white/60 transition-colors hover:text-orange"
          >
            FAQ
          </Link>
          <Link
            href="/terms-of-use"
            className="font-sans text-xs font-semibold text-white/60 transition-colors hover:text-orange"
          >
            Terms of Use
          </Link>
        </div>

        <p className="mt-6 text-center font-sans text-xs text-white/40">
          © {new Date().getFullYear()} My School Movie Club
        </p>
      </div>
    </footer>
  );
}
