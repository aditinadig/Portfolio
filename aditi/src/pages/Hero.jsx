const Hero = () => {
  return (
    <section id="hero" className="hero flex flex-row p-34 py-12">
      <div className="flex flex-col flex-1/2 gap-6">
        <h1 className="text-8xl font-extrabold">
          Hi, I'm <span className="text-lilac">Aditi!</span>
        </h1>
        <h2 className="text-4xl">Frontend Dev. UI Snob. Detail Freak.</h2>
        <p className="text-2xl">
          I build clean, intuitive, full-circle experiences — <br />powered by React and polish.
        </p>
        <a
          href="#work-experience"
          className=" bg-sunbeam font-bold text-md px-5 py-3 rounded shadow-sm hover:bg-yellow-500 transition w-fit"
        >
          CHECK MY WORK EXPERIENCE
        </a>
      </div>
      {/* Right: Image inside blob shape */}
      <div className="relative w-full max-w-md group mt-8">
        {/* Floating Purple Blob */}
        <div className="absolute inset-0 bg-purple-200 rounded-[60%_40%_60%_40%/40%_60%_40%_60%] -z-10 scale-105 animate-float transition-transform duration-500 ease-in-out group-hover:animate-wiggle"></div>

        {/* Image with hover lift/rotate */}
        <a href="#about-me">
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
