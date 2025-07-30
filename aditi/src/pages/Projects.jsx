import React, { useState } from "react";
import projects from "../data/projects.json";

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="projects" className="px-6 py-20 md:px-24 font-sans bg-canvas text-ink">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          My Projects
        </h2>

        {/* List */}
        <div className="flex flex-col gap-4">
          {projects.map((project, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-lilac-light bg-white shadow-sm overflow-hidden transition-all"
              >
                {/* Collapsible Header */}
                <button
                  onClick={() => toggleCollapse(index)}
                  className="w-full px-6 py-4 md:py-5 flex justify-between items-center text-left hover:bg-sunbeam-light transition-colors"
                >
                  <div>
                    <h3 className="text-xl font-semibold leading-tight">
                      {project.title}
                    </h3>
                    <div className="text-sm text-ink/60 font-medium">
                      {project.role} • {project.duration}
                    </div>
                  </div>
                  <span className="text-2xl text-ink/50">{isOpen ? "−" : "+"}</span>
                </button>

                {/* Collapsible Body */}
                <div
                  className={`transition-all duration-500 ease-in-out px-6 md:px-6 ${
                    isOpen ? "max-h-[1000px] py-4 opacity-100" : "max-h-0 overflow-hidden opacity-0"
                  }`}
                >
                  <p className="text-[15px] leading-relaxed text-ink/90 mb-3">
                    {project.description}
                  </p>

                  <div className="text-[14px] italic text-ink/70 border-l-4 border-lilac pl-4 mb-4">
                    “{project.highlight}”
                  </div>

                  {project.technologies?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-sunbeam-light text-ink text-sm px-3 py-[5px] rounded-full shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;