import { useState } from "react";
import siteContent from "../data/siteContent.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-canvas/80 backdrop-blur-xl">
      <nav className="section-shell flex items-center justify-between gap-6 py-4 md:py-5">
        <a
          href="#hero"
          className="text-[0.82rem] font-semibold uppercase tracking-[0.28em] md:text-[0.9rem]"
        >
          {siteContent.name}
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-full border border-ink/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] lg:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-6 text-[0.72rem] uppercase tracking-[0.24em] text-ink/68 lg:flex">
          {siteContent.nav.map((item) => (
            <li key={item.label}>
              <a className="transition duration-200 hover:-translate-y-[1px] hover:text-ink" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div className="border-t border-ink/10 lg:hidden">
          <ul className="section-shell flex flex-col gap-4 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-ink/68">
            {siteContent.nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block transition hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
