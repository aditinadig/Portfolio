import React from "react";
import beliefBlocks from "../data/beliefBlocks.json";

const AboutMe = () => {
  const leftColumn = beliefBlocks.slice(0, 3);
  const rightColumn = beliefBlocks.slice(3, 6);
  return (
    <section className="px-30 py-10 my-12" id="about-me">
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
            {leftColumn.map((block, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[2px] ${block.style}`}
              >
                <h3 className="text-lg font-semibold tracking-wide mb-2">
                  {block.title}
                </h3>
                <p className="text-base leading-relaxed text-ink">{block.description}</p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumn.map((block, index) => (
              <div
                key={index + 3}
                className={`p-6 rounded-2xl shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[2px] ${block.style}`}
              >
                <h3 className="text-lg font-semibold tracking-wide mb-2">
                  {block.title}
                </h3>
                <p className="text-base leading-relaxed text-ink">{block.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Signature */}
        <div className="max-w-4xl text-xl md:text-xl italic border-l-4 border-lilac pl-6 leading-relaxed ">
          If your product needs to{" "}
          <span className="not-italic font-bold text-lilac">feel</span> just as
          good as it works — I’m your person.
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
