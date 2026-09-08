import Logo from "./Logo";

const links = [
  { href: "#top", label: "Home", active: true },
  { href: "#movies", label: "Movies" },
  { href: "#categories", label: "Categories" },
  { href: "#advantages", label: "About Us" },
  { href: "#join", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-3.5 lg:px-10">
        <Logo />

        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`relative pb-1 font-sans text-[15px] font-medium transition-colors ${
                l.active
                  ? "text-blue after:absolute after:-bottom-[1px] after:left-0 after:h-[2px] after:w-full after:bg-blue"
                  : "text-slate-dark hover:text-blue"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
