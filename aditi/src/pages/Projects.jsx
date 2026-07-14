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
    <section id="projects" className="content-section section-shell">
      <span id="research" className="scroll-anchor" aria-hidden="true" />
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="section-heading"
        >
          <p className="eyebrow">02 / {projects.eyebrow}</p>
          <h2 className="section-title projects-title">From idea to working product.</h2>
          <p className="section-dek">A closer look at how I understand a problem, shape a direction, and carry the work through.</p>
        </motion.div>

        <div className="experience-layout projects-layout">
          <div className="selector-list" role="tablist" aria-label="Selected projects">
            {projects.items.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={project.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
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
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div className="detail-panel project-panel">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeProject.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="detail-content"
              >
                <div className="detail-header">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3 text-[0.72rem] uppercase tracking-[0.2em] text-ink/56">
                      <span>{activeProject.type}</span>
                      {activeProject.context ? <span>· {activeProject.context}</span> : null}
                    </div>
                    <h3 className="text-[clamp(1.8rem,2.6vw,2.75rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
                      {activeProject.title}
                    </h3>
                  </div>
                </div>

                {activeProject.image ? (
                  <motion.figure
                    className="project-visual"
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <img src={activeProject.image} alt={activeProject.imageAlt ?? `${activeProject.title} project preview`} />
                  </motion.figure>
                ) : null}

                <div className="project-overview">
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

                <details className="project-details-disclosure">
                  <summary>Explore project details <span>+</span></summary>
                  <div className="project-details-body">
                    <div className="impact-block">
                      <p className="eyebrow">{activeProject.process ? "HCI process" : "What I did"}</p>
                      {activeProject.process ? (
                        <div className="project-process-grid">
                          {activeProject.process.map((item, index) => (
                            <motion.article
                              key={item.label}
                              className="project-process-step"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.22, delay: index * 0.045 }}
                            >
                              <span>0{index + 1}</span>
                              <div>
                                <strong>{item.label}</strong>
                                <p>{item.text}</p>
                              </div>
                            </motion.article>
                          ))}
                        </div>
                      ) : (
                        <ul>
                          {activeProject.responsibilities.slice(0, 3).map((item, index) => (
                            <motion.li
                              key={item}
                              className="impact-item"
                              initial={{ opacity: 0, x: 12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.22, delay: index * 0.035 }}
                            >
                              <span className="impact-number">0{index + 1}</span>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="project-detail-groups">
                      <div>
                        <p className="eyebrow">Technologies</p>
                        <div className="chip-row">
                          {activeProject.technologies.slice(0, 6).map((item) => (
                            <span key={item} className="skill-pill">{item}</span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="eyebrow">Themes</p>
                        <div className="chip-row">
                          {activeProject.tags.slice(0, 4).map((tag) => (
                            <span key={tag} className="skill-pill skill-pill-primary">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
