"use client";

import { useState } from "react";

const navigation = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Areas of focus" },
  { href: "#approach", label: "How I work" },
  { href: "#office", label: "Office" },
  { href: "#faqs", label: "FAQs" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#243e33]/10 bg-[#f7f5f0]/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
      >
        <a
          className="font-serif text-xl font-semibold leading-none tracking-[-0.03em] text-[#243e33] focus-visible:outline-offset-4"
          href="#top"
          onClick={closeMenu}
        >
          Dr. Maya Reynolds
          <span className="mt-1 block font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#5e6460]">
            PsyD
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <a
              className="text-sm font-medium text-[#3c4a42] transition-colors hover:text-[#243e33] focus-visible:outline-offset-4"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          className="hidden min-h-11 items-center rounded-full bg-[#243e33] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1b2f27] focus-visible:outline-offset-4 sm:inline-flex"
          href="#about"
        >
          Explore therapy
        </a>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          className="grid size-11 place-items-center rounded-full border border-[#243e33]/20 text-[#243e33] lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <span className="sr-only">{isMenuOpen ? "Close" : "Open"} navigation</span>
          <span aria-hidden="true" className="grid gap-1.5">
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
          </span>
        </button>

        {isMenuOpen && (
          <div
            className="absolute inset-x-0 top-full border-b border-[#243e33]/10 bg-[#f7f5f0] px-4 py-5 shadow-lg lg:hidden"
            id="mobile-navigation"
          >
            <div className="mx-auto grid max-w-7xl gap-1 sm:px-2">
              {navigation.map((item) => (
                <a
                  className="rounded-lg px-3 py-3 text-base font-medium text-[#243e33] hover:bg-white focus-visible:outline-offset-2"
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-[#243e33] px-5 text-sm font-semibold text-white"
                href="#about"
                onClick={closeMenu}
              >
                Explore therapy
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
