import React from "react";

const AboutMe = () => {
  return (
    <section className="px-30 py-10 my-10" id="about-me">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-5xl font-extrabold tracking-tight leading-tight">
            I don’t ship it{" "}
            <span className="inline-block bg-lilac/20 px-3 py-1 rounded-xl">
              unless it feels right.
            </span>
          </h1>
          <p className="text-xl md:text-xl leading-relaxed">
            I’m a frontend developer who cares about the space between usable
            and beautiful. If there’s a{" "}
            <span className="underline decoration-sunbeam underline-offset-4">
              1px misalignment
            </span>
            , I fix it. If a user might hesitate, I rethink it. If it’s just
            functional, I refine it — until it flows.
          </p>
        </div>

        {/* Belief Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[2px]">
              <h3 className="text-lg font-semibold tracking-wide text-lilac mb-2">
                I never leave things halfway.
              </h3>
              <p className="text-base  leading-relaxed">
                Full-circle or nothing. I believe work isn’t “done” until it
                feels done — refined, complete, and intuitive.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-sunbeam-light shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[2px]">
              <h3 className="text-lg font-semibold tracking-wide mb-2">
                I take ownership — fully.
              </h3>
              <p className="text-base leading-relaxed">
                I work independently and don’t wait for micromanagement. I see
                what needs to be done, and I take care of it.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-lilac-light shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[2px]">
              <h3 className="text-lg font-semibold tracking-wide mb-2">
                I naturally think like a user.
              </h3>
              <p className="text-base leading-relaxed">
                I don’t just test for bugs — I test for hesitation, confusion,
                and delight. Real insights come from real empathy.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[2px]">
              <h3 className="text-lg font-semibold tracking-wide text-[#B477ED] mb-2">
                I adapt with clarity.
              </h3>
              <p className="text-base text-[#2b2a2a]/90 leading-relaxed">
                Plan changes don’t throw me off — they energize me. I stay
                flexible, grounded, and focused.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-sunbeam-light shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[2px]">
              <h3 className="text-lg font-semibold tracking-wide mb-2">
                I balance structure and soul.
              </h3>
              <p className="text-base leading-relaxed">
                Code with logic. Design with emotion. I bring both — because
                that’s what creates real connection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-lilac-light shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[2px]">
              <h3 className="text-lg font-semibold tracking-wide mb-2">
                I build with security in mind.
              </h3>
              <p className="text-base text-[#2b2a2a]/90 leading-relaxed">
                From input validation to API design, I never treat security as
                an afterthought. It’s baked into my process.
              </p>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="max-w-4xl text-xl md:text-xl italic border-l-4 border-lilac pl-6 leading-relaxed ">
          If your product needs to{" "}
          <span className="not-italic font-bold text-lilac">feel</span> just
          as good as it works — I’m your person.
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
