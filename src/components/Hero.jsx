import React from "react";

const Hero = () => {
  return (
    <section id="#home" className="flex flex-col-reverse lg:flex-row items-center justify-around p-12 max-w-7xl mx-auto gap-12">
      {/* Left: Text Content */}
      <div className="max-w-xl text-left">
        <h1 className="text-8xl font-[800] leading-tight font-[AllRoundGothic] text-gray-900 mb-4">
          Hi, I’m <span class="text-purple-400">Aditi</span>
        </h1>
        <h2 className="text-3xl font-[500] text-gray-700 mb-4 tracking-wide">
          a UI UX Designer and Developer
        </h2>
        <p className="text-xl text-gray-600 font-[400] mb-6 leading-relaxed">
          I design and build digital experiences that look great and work even
          better.
        </p>
        <a
          href="/experience"
          className="inline-block bg-yellow-400 text-gray-900 font-bold text-md px-5 py-3 my-4 rounded shadow-sm hover:bg-yellow-500 transition "
        >
          CHECK MY WORK EXPERIENCE
        </a>
      </div>

      {/* Right: Image inside blob shape */}
      <div className="relative w-full max-w-md group mt-8">
        {/* Floating Purple Blob */}
        <div className="absolute inset-0 bg-purple-200 rounded-[60%_40%_60%_40%/40%_60%_40%_60%] -z-10 scale-105 animate-float transition-transform duration-500 ease-in-out group-hover:animate-wiggle"></div>

        {/* Image with hover lift/rotate */}
        <a href="/about">
          <img
            src="/images/aditi.png"
            alt="Aditi Portrait"
            className="relative z-10 rounded-full border-4 border-white transition-transform duration-500 ease-in-out group-hover:-translate-y-2 group-hover:rotate-2"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
