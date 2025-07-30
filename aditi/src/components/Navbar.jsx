import React from "react";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 bg-canvas">
      <div className="flex-1">
        <a href="/" className="text-2xl font-bold">ADITI</a>
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
    </div>
  );
};

export default Navbar;
