import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
/* eslint-enable no-unused-vars */
import experience from "../data/workExperience.json";

const WorkExperience = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="work-experience" className="px-6 py-20 md:px-28">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My Work Experience
        </motion.h2>

        <div className="relative pl-4 md:pl-4 before:absolute before:left-4 md:before:left-6 before:top-0 before:h-full before:w-[2px] before:bg-ink/20">
          {experience.map((job, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className="relative mb-6 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute top-8 w-4 h-4 md:w-5 md:h-5 rounded-full bg-sunbeam border-4 border-white shadow-md z-10"></div>

                {/* Card */}
                <div className="ml-8 md:ml-12 bg-white rounded-3xl shadow-sm transition-all duration-300">
                  {/* Clickable Header */}
                  <button
                    onClick={() => toggleCollapse(index)}
                    className="w-full text-left p-6 md:p-8 cursor-pointer flex flex-col md:flex-row md:justify-between md:items-center hover:bg-sunbeam-light rounded-3xl transition-colors duration-300"
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold">
                        {job.title}{" "}
                        <span className="text-lilac font-normal">
                          @ {job.company}
                        </span>
                      </h3>
                      <div className="text-sm text-ink/60 mt-1 font-medium">
                        {job.location} • {job.type} • {job.duration}
                      </div>
                    </div>
                    <div className="text-2xl text-ink/50 mt-3 md:mt-0">
                      {isOpen ? "−" : "+"}
                    </div>
                  </button>

                  {/* Collapsible Body with animation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden px-6 md:px-8 pb-6"
                      >
                        <p className="text-[15px] leading-relaxed text-ink/90 mb-4">
                          {job.summary}
                        </p>

                        <ul className="list-disc list-inside text-[15px] text-ink/90 space-y-1 mb-4 pl-1">
                          {job.highlights.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>

                        {job.technologies?.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {job.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="bg-sunbeam-light text-ink text-sm px-3 py-1 rounded-full shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        {job.reflection && (
                          <p className="italic text-sm text-ink/60 mt-2 border-t pt-3 border-dashed border-lilac-light">
                            “{job.reflection}”
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;