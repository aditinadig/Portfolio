import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import projects from "../data/projects.json";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects.items[activeIndex];
  const activeLinks = [
    ...(activeProject.link
      ? [{ label: "View live project", href: activeProject.link }]
      : []),
    ...(activeProject.links ?? []),
  ];

  return (
    <section id="projects" className="section-shell pb-18 md:pb-28">
      <span id="research" className="scroll-anchor" aria-hidden="true" />
      <div className="section-divider pb-14 pt-6 md:pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-5"
        >
          <p className="eyebrow">{projects.eyebrow}</p>
          <h2 className="section-title projects-title">{projects.title}</h2>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(18rem,0.38fr)_minmax(0,1fr)] lg:items-start">
          <div className="grid gap-3 lg:sticky lg:top-6">
            {projects.items.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={project.title}
                  type="button"
                  className={`selector-card project-selector ${isActive ? "selector-card-active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.38, delay: index * 0.06 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ x: 4 }}
                >
                  <span className="selector-index">0{index + 1}</span>
                  <span className="min-w-0 text-left">
                    <span className="block text-sm font-semibold leading-5 text-ink">
                      {project.title}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-ink/58">
                      {project.type}
                      {project.context ? ` · ${project.context}` : ""}
                    </span>
                    <span className="mt-2 block text-[0.68rem] uppercase tracking-[0.18em] text-ink/42">
                      {project.date}
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div className="surface-card interactive-panel rounded-[1.6rem] p-5 md:p-6">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeProject.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="space-y-5"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3 text-[0.72rem] uppercase tracking-[0.2em] text-ink/56">
                      <span>{activeProject.type}</span>
                      {activeProject.context ? <span>· {activeProject.context}</span> : null}
                    </div>
                    <h3 className="text-[clamp(1.8rem,2.6vw,2.75rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
                      {activeProject.title}
                    </h3>
                  </div>

                  <div className="rounded-[1rem] bg-[#fbfaf6] px-3 py-2 text-sm leading-5 text-ink/68 lg:min-w-[11rem]">
                    {activeProject.date}
                  </div>
                </div>

                <div className="rounded-[1rem] bg-white/72 p-3.5 md:p-4">
                  <p className="eyebrow mb-2">Project overview</p>
                  <p className="text-[0.98rem] leading-7 text-ink/74">
                    {activeProject.overview}
                  </p>
                </div>

                {activeLinks.length ? (
                  <div className="project-link-bar">
                    {activeLinks.map((link) => (
                        <motion.a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                          whileHover={{ y: -2 }}
                        >
                          {link.label}
                        </motion.a>
                    ))}
                  </div>
                ) : null}

                <div className="rounded-[1rem] bg-white/72 p-3.5 md:p-4">
                  <p className="eyebrow mb-2">Responsibilities</p>
                  <ul className="space-y-3 text-[0.98rem] leading-7 text-ink/74">
                    {activeProject.responsibilities.map((item, index) => (
                      <motion.li
                        key={item}
                        className="flex gap-3"
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.22, delay: index * 0.035 }}
                      >
                        <span className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-ink/50" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                  <div className="rounded-[1rem] bg-white/72 p-3">
                    <p className="eyebrow mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map((item, index) => (
                        <motion.span
                          key={item}
                          className="skill-pill"
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.18, delay: index * 0.025 }}
                          whileHover={{ y: -2 }}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1rem] bg-white/72 p-3">
                    <p className="eyebrow mb-2">Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map((tag, index) => (
                        <motion.span
                          key={tag}
                          className="skill-pill skill-pill-primary"
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.18, delay: index * 0.025 }}
                          whileHover={{ y: -2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
