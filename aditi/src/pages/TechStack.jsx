import React, { useState } from "react";
import techData from "../data/TechStack.json";

const TechStack = () => {
  const categories = Object.entries(techData);
  const [openIndex, setOpenIndex] = useState(0);

  const toggleCategory = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section
      id="tech-stack"
      className="bg-canvas px-6 py-20 md:px-24 font-sans text-ink"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          My Tech Stack
        </h2>

        {/* Collapsible Category List */}
        <div className="space-y-3">
          {categories.map(([category, tools], index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border border-lilac-light rounded-2xl overflow-hidden shadow-sm bg-white">
                {/* Header */}
                <button
                  onClick={() => toggleCategory(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-sunbeam-light transition-colors"
                >
                  <h3 className="text-xl font-semibold text-lilac tracking-wide">
                    {category.replaceAll("_", " ")}
                  </h3>
                  <span className="text-2xl text-ink/50">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Body */}
                <div
                  className={`transition-all duration-500 px-6 ${
                    isOpen ? "py-6 opacity-100 max-h-[500px]" : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-10">
                    {tools.map((tool, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-2 w-[4.5rem] md:w-[5rem] transition-transform duration-300 hover:scale-105"
                      >
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className="w-12 h-12 md:w-14 md:h-14 object-contain"
                        />
                        <span className="text-sm text-center">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;