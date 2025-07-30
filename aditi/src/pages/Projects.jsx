import React from "react";
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#f7f4ef] text-[#2b2a2a] px-6 py-20 md:px-24 font-sans"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
        My Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm px-6 py-8 flex flex-col gap-4 border border-[#e8e5de]"
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold tracking-tight leading-snug">
                {project.title}
              </h3>

              {/* Role & Time */}
              <div className="text-sm text-[#2b2a2a]/70 font-medium">
                {project.role} &nbsp;•&nbsp; {project.duration}
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[#2b2a2a]/90">
                {project.description}
              </p>

              {/* Highlight */}
              <div className="text-[14px] italic text-[#2b2a2a]/70 border-l-4 border-[#B477ED] pl-4">
                “{project.highlight}”
              </div>

              {/* Tech Stack */}
              {project.technologies?.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#f3ecfd] text-sm text-[#2b2a2a] px-3 py-[6px] rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;