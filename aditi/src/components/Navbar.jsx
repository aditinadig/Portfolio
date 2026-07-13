import { useEffect, useState } from "react";
import siteContent from "../data/siteContent.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = ["hero", ...siteContent.nav.map((item) => item.href.slice(1)), "contact"];
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
      const current = [...sections].reverse().find((id) => {
        const node = document.getElementById(id);
        return node && node.getBoundingClientRect().top <= 160;
      });
      if (current) setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="site-header">
      <div className="reading-progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <nav className="section-shell nav-shell">
        <a
          href="#hero"
          className="brand-mark"
        >
          {siteContent.name}
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="nav-toggle lg:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        <ul className="desktop-nav">
          {siteContent.nav.map((item) => (
            <li key={item.label}>
              <a className={active === item.href.slice(1) ? "nav-link active" : "nav-link"} href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
          <li><a className="nav-contact" href="#contact">Let’s talk</a></li>
        </ul>
      </nav>

      {isOpen && (
        <div className="mobile-nav lg:hidden">
          <ul className="section-shell">
            {siteContent.nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="mobile-nav-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="mobile-nav-link">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
