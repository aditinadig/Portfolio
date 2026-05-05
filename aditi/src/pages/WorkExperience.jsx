import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import workExperience from "../data/workExperience.json";

const WorkExperience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeJob = workExperience.items[activeIndex];

  return (
    <section id="work" className="section-shell pb-18 md:pb-28">
      <div className="section-divider pb-14 pt-6 md:pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-5"
        >
          <p className="eyebrow">{workExperience.eyebrow}</p>
          <h2 className="section-title">{workExperience.title}</h2>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(18rem,0.42fr)_minmax(0,1fr)] lg:items-start">
          <div className="grid gap-3 lg:sticky lg:top-6">
            {workExperience.items.map((job, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={`${job.company}-${job.date}`}
                  type="button"
                  className={`selector-card ${isActive ? "selector-card-active" : ""}`}
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
                      {job.company}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-ink/58">
                      {job.role}
                    </span>
                    <span className="mt-2 block text-[0.68rem] uppercase tracking-[0.18em] text-ink/42">
                      {job.date}
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div className="surface-card interactive-panel rounded-[1.6rem] p-5 md:p-6">
            <AnimatePresence mode="wait">
              <motion.article
                key={`${activeJob.company}-${activeJob.date}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="space-y-5"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-3">
                    <p className="eyebrow">{activeJob.company}</p>
                    <h3 className="text-[clamp(1.7rem,2.6vw,2.65rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
                      {activeJob.role}
                    </h3>
                  </div>

                  <div className="rounded-[1rem] bg-[#fbfaf6] px-3 py-2 text-sm leading-5 text-ink/68 lg:min-w-[15rem]">
                    <p>{activeJob.type} · {activeJob.date}</p>
                    <p className="mt-1 text-ink/52">{activeJob.location}</p>
                  </div>
                </div>

                <div className="rounded-[1rem] bg-white/72 p-3.5 md:p-4">
                  <p className="eyebrow mb-2">Business overview</p>
                  <p className="text-[0.98rem] leading-7 text-ink/74">
                    {activeJob.overview}
                  </p>
                </div>

                <div className="rounded-[1rem] bg-white/72 p-3.5 md:p-4">
                  <p className="eyebrow mb-2">Responsibilities</p>
                  <ul className="space-y-3 text-[0.98rem] leading-7 text-ink/74">
                    {activeJob.responsibilities.map((bullet, index) => (
                      <motion.li
                        key={bullet}
                        className="flex gap-3"
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.22, delay: index * 0.035 }}
                      >
                        <span className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-ink/50" />
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                  <div className="rounded-[1rem] bg-white/72 p-3">
                    <p className="eyebrow mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {activeJob.technologies.map((item, index) => (
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
                      {activeJob.tags.map((item, index) => (
                        <motion.span
                          key={item}
                          className="skill-pill skill-pill-primary"
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
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
