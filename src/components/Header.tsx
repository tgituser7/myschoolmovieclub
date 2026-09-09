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
    <header className="sticky top-0 z-50 border-b-[3px] border-navy bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1600px] items-center gap-3 px-6 py-3 lg:px-10">
        <Logo />

        <nav className="ml-auto hidden items-center gap-x-1 xl:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-2 font-sans text-[13.5px] font-bold uppercase tracking-wide transition-colors ${
                isActive(l.href)
                  ? "bg-navy text-white"
                  : "text-navy hover:bg-navy/10"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/join-us"
          className="ml-auto hidden shrink-0 items-center gap-1.5 rounded-full border-2 border-navy bg-orange px-4 py-2 font-display text-[13.5px] font-extrabold uppercase tracking-wide text-navy shadow-hard-sm transition-transform hover:-translate-y-0.5 hover:shadow-hard xl:ml-3 xl:flex"
        >
          Join Us
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-navy text-navy transition-colors hover:bg-navy/10 xl:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`grid overflow-hidden border-navy bg-cream transition-[grid-template-rows] duration-300 ease-out xl:hidden ${
          open ? "grid-rows-[1fr] border-t-[3px]" : "grid-rows-[0fr]"
        }`}
      >
        <nav className="min-h-0 overflow-hidden px-6 py-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block border-b-2 border-navy/10 py-3.5 font-display text-base font-bold last:border-none ${
                isActive(l.href) ? "text-orange" : "text-navy"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/join-us"
            className="my-4 flex items-center justify-center rounded-full border-2 border-navy bg-orange py-3 font-display text-sm font-extrabold uppercase tracking-wide text-navy shadow-hard-sm"
          >
            Join Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
