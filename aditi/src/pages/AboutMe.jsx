import React from "react";

const AboutMe = () => {
  return (
    <section className="px-30 py-18" id="about-me">
      <div className="flex flex-col gap-12">

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            I don’t ship it <span className="inline-block bg-[#B477ED]/20 px-3 py-1 rounded-xl">unless it feels right.</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            I’m a frontend developer who cares about the space between usable and beautiful.  
            If there’s a <span className="underline decoration-[#ffca13] underline-offset-4">1px misalignment</span>, I fix it.  
            If a user might hesitate, I rethink it.  
            If it’s just functional, I refine it — until it flows.
          </p>
        </div>

        {/* Belief Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Left Column */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[2px]">
              <h3 className="text-lg font-semibold tracking-wide text-[#B477ED] mb-2">I finish what I start.</h3>
              <p className="text-base text-[#2b2a2a]/90 leading-relaxed">
                Full-circle or nothing. I don’t leave things half-baked. If it's in my hands, it's done with care — not just completed.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fff8e3] shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[2px]">
              <h3 className="text-lg font-semibold tracking-wide text-[#2b2a2a] mb-2">I work independently — and fast.</h3>
              <p className="text-base text-[#2b2a2a]/90 leading-relaxed">
                I don’t wait to be told. I see what needs fixing, improving, simplifying — and I do it.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[#f3ecfd] shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[2px]">
              <h3 className="text-lg font-semibold tracking-wide text-[#2b2a2a] mb-2">I test like a human — not a QA script.</h3>
              <p className="text-base text-[#2b2a2a]/90 leading-relaxed">
                I navigate like a first-time user, not a developer. Real empathy exposes friction — and I fix that first.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[2px]">
              <h3 className="text-lg font-semibold tracking-wide text-[#B477ED] mb-2">I code with feeling.</h3>
              <p className="text-base text-[#2b2a2a]/90 leading-relaxed">
                I blend structure with feeling. My code solves problems — and leaves people smiling.
              </p>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="max-w-4xl text-xl md:text-2xl italic border-l-4 border-[#B477ED] pl-6 leading-relaxed text-[#2b2a2a]/80">
          If your product needs to <span className="not-italic font-bold text-[#B477ED]">feel</span> just as good as it works — I’m your person.
        </div>
      </div>
    </section>
  );
};

export default AboutMe;