import React from "react";

const HireMe = () => {
  return (
    <section
      className="bg-canvas mx-16 py-24 md:px-24 text-ink font-sans border-t border-ink/10"
      id="hire-me"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Let’s Build Something Great Together
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-ink/80 mb-10">
          Whether you’re looking for a frontend developer with a strong design
          sense, a product-minded engineer, or someone who gets things done with
          ownership — I’d love to chat.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="mailto:aditiarunnadig@gmail.com"
            className="bg-sunbeam hover:bg-sunbeam-light text-ink font-semibold py-3 px-6 rounded-full transition-all shadow-md"
          >
            Reach Out
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-lilac text-lilac hover:bg-lilac-light font-semibold py-3 px-6 rounded-full transition-all shadow-sm"
          >
            View My Resume
          </a>
        </div>

        {/* Optional Availability Note */}
        <p className="text-sm text-ink/60 mt-8 italic">
          Currently open to Fall 2025 internships and part-time roles (CPT eligible).
        </p>
      </div>
    </section>
  );
};

export default HireMe;