"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { CloseIcon, MenuIcon } from "./icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/movies", label: "Movies" },
  { href: "/events", label: "Events" },
  { href: "/services", label: "Services" },
  { href: "/associations", label: "Associations" },
  { href: "/join-us", label: "Join Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1600px] items-center gap-4 px-6 py-3.5 lg:px-10">
        <Logo />

        <nav className="ml-auto hidden items-center gap-x-5 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative shrink-0 whitespace-nowrap pb-1 font-sans text-[13.5px] font-medium transition-colors ${
                isActive(l.href)
                  ? "text-blue after:absolute after:-bottom-[1px] after:left-0 after:h-[2px] after:w-full after:bg-blue"
                  : "text-slate-dark hover:text-blue"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-navy transition-colors hover:bg-sky-2 lg:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`grid overflow-hidden bg-white transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav className="min-h-0 overflow-hidden border-t border-slate/10 px-6 py-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block border-b border-slate/10 py-3.5 font-sans text-base font-medium last:border-none ${
                isActive(l.href) ? "text-blue" : "text-slate-dark"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
