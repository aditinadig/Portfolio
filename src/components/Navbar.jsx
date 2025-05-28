import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center text-black">
      {/* Left: Logo */}
      <a href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
        ADITI
      </a>

      {/* Right: Navigation Links */}
      <ul className="flex gap-8 text-sm uppercase text-zinc-400">
        <li>
          <a href="#tech-stack" className="hover:text-zinc-500 transition-colors">
            Tech Stack
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:text-zinc-500 transition-colors">
            Experience
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-zinc-500 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="/projects" className="hover:text-zinc-500 transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-zinc-500 transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;