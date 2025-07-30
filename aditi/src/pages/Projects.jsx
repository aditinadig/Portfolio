import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
/* eslint-enable no-unused-vars */
import projects from "../data/projects.json";

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="projects" className="px-6 py-20 md:px-24 font-sans bg-canvas text-ink">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className="flex flex-col gap-4">
          {projects.map((project, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="rounded-2xl border border-lilac-light bg-white shadow-sm overflow-hidden transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {/* Header */}
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

                {/* Animated Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 md:px-6 overflow-hidden"
                    >
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.05,
                              delayChildren: 0.1,
                            },
                          },
                          hidden: {},
                        }}
                        className="py-4"
                      >
                        <motion.p
                          className="text-[15px] leading-relaxed text-ink/90 mb-3"
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                          }}
                        >
                          {project.description}
                        </motion.p>

                        <motion.div
                          className="text-[14px] italic text-ink/70 border-l-4 border-lilac pl-4 mb-4"
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                          }}
                        >
                          “{project.highlight}”
                        </motion.div>

                        {project.technologies?.length > 0 && (
                          <motion.div
                            className="flex flex-wrap gap-2"
                            variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                            }}
                          >
                            {project.technologies.map((tech, i) => (
                              <motion.span
                                key={i}
                                className="bg-sunbeam-light text-ink text-sm px-3 py-[5px] rounded-full shadow-sm"
                                whileHover={{ scale: 1.08 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </motion.div>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;