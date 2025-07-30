import React from "react";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 bg-canvas px-20 py-10">
      <div className="flex-1">
        <a href="/" className="text-2xl font-bold">
          ADITI
        </a>
      </div>
      <div className="flex-none">
        <ul className="flex flex-row px-1 gap-8 text-md">
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
      </div>
      <div className="flex-none ml-10">
        <span>
          <a
            href="https://www.linkedin.com/in/aditi-arun-nadig-78540b214/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mr-4 align-middle"
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
            className="inline-block align-middle"
            aria-label="GitHub"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
              alt="GitHub"
              className="w-6 h-6 hover:opacity-80 transition"
            />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
