import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-around px-12 py-18 max-w-7xl mx-auto gap-12">
      {/* Left: Text Content */}
      <div className="max-w-xl text-left">
        <h1 className="text-5xl font-[800] leading-tight font-[AllRoundGothic] text-gray-900 mb-4">
          Hi, I’m Aditi
        </h1>
        <p className="text-base text-gray-700 font-[500] mb-6 leading-relaxed">
          I’m a designer and developer who loves bringing clarity to complexity.
          <br />
          Based in the US, I work across code and design to build experiences
          that are not only beautiful, but genuinely useful.
          <br />
          <br />
          My work blends structured thinking with a strong sense of visual
          intuition — whether that’s designing thoughtful interfaces, refining
          user journeys, or writing clean, maintainable frontend code.
          <br />
          <br />
          I believe the best digital products feel effortless. That’s what I aim
          for in every project.
          <br />
          <br />
          This is where I share my work, process, and ideas.
          <br />
          Thanks for stopping by — I’m glad you’re here.
        </p>
        <a
          href="#work"
          className="inline-block bg-yellow-400 text-black font-bold text-sm px-5 py-2 rounded shadow-sm hover:bg-yellow-500 transition "
        >
          CHECK MY WORK EXPERIENCE
        </a>
      </div>

      {/* Right: Image inside blob shape */}
      <div className="relative w-full max-w-md group mt-8">
        {/* Floating Purple Blob */}
        <div className="absolute inset-0 bg-purple-200 rounded-[60%_40%_60%_40%/40%_60%_40%_60%] -z-10 scale-105 animate-float transition-transform duration-500 ease-in-out group-hover:animate-wiggle"></div>

        {/* Image with hover lift/rotate */}
        <img
          src="/images/aditi.png"
          alt="Aditi Portrait"
          className="relative z-10 rounded-full border-4 border-white transition-transform duration-500 ease-in-out group-hover:-translate-y-2 group-hover:rotate-2"
        />
      </div>
    </section>
  );
};

export default Hero;
