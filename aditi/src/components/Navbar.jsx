import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar sticky top-0 z-50 bg-canvas px-6 md:px-16 lg:px-20 py-10">
      <div className="flex justify-between items-center w-full">
        {/* LEFT: Hamburger + Logo */}
        <div className="flex flex-col items-start gap-2">
          {/* Top Row: Hamburger + Logo */}
          <div className="flex items-center gap-4">
            {/* Hamburger (visible on small screens) */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
                aria-label="Toggle Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 8h16M4 16h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Logo */}
            <a href="/" className="text-2xl font-bold">
              ADITI
            </a>
          </div>

          {/* Socials under logo (mobile only, when open) */}
          {isOpen && (
            <div className="flex gap-4 mt-4 ml-10 lg:hidden">
              <a
                href="https://www.linkedin.com/in/aditi-arun-nadig-78540b214/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-5 h-5 hover:opacity-80 transition"
                />
              </a>
              <a
                href="https://github.com/aditinadig"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
                  alt="GitHub"
                  className="w-6 h-6 hover:opacity-80 transition"
                />
              </a>
            </div>
          )}
        </div>

        {/* CENTER: Nav Links (desktop) */}
        <ul className="hidden lg:flex flex-row gap-8 text-md">
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#work-experience">Work Experience</a>
          </li>
          <li>
            <a href="#tech-stack">Tech Stack</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#values">Values</a>
          </li>
          <li>
            <a href="#hire-me">Hire Me</a>
          </li>
        </ul>

        {/* RIGHT: Socials (desktop only) */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/aditi-arun-nadig-78540b214/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-5 h-5 hover:opacity-80 transition"
            />
          </a>
          <a
            href="https://github.com/aditinadig"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
              alt="GitHub"
              className="w-6 h-6 hover:opacity-80 transition"
            />
          </a>
        </div>
      </div>

      {/* Mobile Menu (visible on small screens) */}
      {isOpen && (
        <div className="lg:hidden mt-4 w-full">
          <div className="max-w-md mx-auto">
            <ul className="grid grid-cols-2 gap-4 text-right text-xs md:text-lg w-full">
              <li>
                <a href="#about-me">About Me</a>
              </li>
              <li>
                <a href="#work-experience">Experience</a>
              </li>
              <li>
                <a href="#tech-stack">Tech Stack</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#values">Values</a>
              </li>
              <li>
                <a href="#hire-me">Hire Me</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;