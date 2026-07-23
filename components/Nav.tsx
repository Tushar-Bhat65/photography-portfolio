"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Events", href: "/#events" },
  { label: "My Best Work", href: "/#best-work" },
  { label: "Portraits", href: "/#portraits" },
  { label: "Product Photography", href: "/#product" },
  { label: "Videography", href: "/#videography" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink">
      <div className="flex items-center justify-between px-6 py-5 sm:px-12">
        {/* Logo / wordmark */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-paper transition-colors hover:text-brass"
        >
          TV
        </Link>

        {/* Desktop nav — unchanged */}
        <nav className="hidden gap-6 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-xs uppercase tracking-[0.15em] text-brass/80 transition-colors hover:text-brass"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger trigger */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex flex-col gap-1.5 p-2 sm:hidden"
        >
          <span
            className={`block h-px w-6 bg-paper/70 transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-paper/70 transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 bg-paper/70 transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <nav
        className={`flex flex-col gap-1 overflow-hidden bg-ink px-6 transition-[max-height] duration-300 ease-in-out sm:hidden ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="border-b border-paper/10 py-4 font-sans text-xs uppercase tracking-[0.15em] text-brass/80 transition-colors hover:text-brass"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
