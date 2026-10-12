const navigation = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Areas of focus" },
  { href: "#faqs", label: "FAQs" },
];

export default function Footer() {
  return (
    <footer className="bg-white px-6 py-16 text-[#343c36] sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.35fr_0.7fr_0.8fr] md:gap-10">
        <div className="max-w-md">
          <p className="font-serif text-4xl font-normal leading-none tracking-[-0.04em] sm:text-5xl">
            Dr. Maya Reynolds
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#719f9e]">
            Licensed Clinical Psychologist · PsyD
          </p>
          <p className="mt-8 text-base leading-8 text-[#5e6460] sm:text-lg">
            A warm, collaborative practice for adults navigating anxiety, trauma, burnout, and the pressures of a fast-paced life.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#343c36]">Navigate</h2>
          <ul className="mt-6 space-y-3 text-base text-[#5e6460]" role="list">
            {navigation.map((item) => (
              <li key={item.href}>
                <a className="transition-colors hover:text-[#425b4a] focus-visible:outline-offset-4" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#343c36]">Our team</h2>
          <p className="mt-6 text-base text-[#5e6460]">Dr. Maya Reynolds, PsyD</p>
          <p className="mt-3 max-w-52 text-sm leading-6 text-[#6d746e]">
            Licensed Clinical Psychologist
          </p>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-7xl border-t border-[#e6e0d6] pt-6 text-xs text-[#6d746e]">
        © Dr. Maya Reynolds, PsyD
      </div>
    </footer>
  );
}
