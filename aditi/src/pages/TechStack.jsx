import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
/* eslint-enable no-unused-vars */
import techData from "../data/techStack.json";

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
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Tech Stack
        </motion.h2>

        <div className="space-y-3">
          {categories.map(([category, tools], index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="border border-lilac-light rounded-2xl overflow-hidden shadow-sm bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Header */}
                <button
                  onClick={() => toggleCategory(index)}
                  className="w-full text-left px-6 py-4 flex justify-between hover:bg-sunbeam-light transition-colors"
                >
                  <h3 className="text-xl font-semibold text-lilac tracking-wide">
                    {category.replaceAll("_", " ")}
                  </h3>
                  <span className="text-2xl text-ink/50">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Animated Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 overflow-hidden"
                    >
                      <motion.div
                        className="flex flex-wrap justify-around md:justify-start gap-x-12 gap-y-10 py-6"
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
                      >
                        {tools.map((tool, i) => (
                          <motion.div
                            key={i}
                            className="flex flex-col items-center gap-2 w-[4.5rem] md:w-[5rem] transition-transform duration-300 hover:scale-105"
                            variants={{
                              hidden: { opacity: 0, y: 10 },
                              visible: { opacity: 1, y: 0 },
                            }}
                          >
                            <img
                              src={tool.icon}
                              alt={tool.name}
                              className="w-12 h-12 md:w-14 md:h-14 object-contain"
                            />
                            <span className="text-sm text-center">{tool.name}</span>
                          </motion.div>
                        ))}
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

export default TechStack;