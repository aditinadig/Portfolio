import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import problemApproach from "../data/problemApproach.json";

const ProblemApproach = () => {
  const [activeStageId, setActiveStageId] = useState(problemApproach.stages[0].id);

  const activeStage =
    problemApproach.stages.find((stage) => stage.id === activeStageId) ??
    problemApproach.stages[0];

  return (
    <section id="approach" className="section-shell py-18 md:py-28">
      <div className="border-t border-ink/10 pt-18">
        <div className="grid gap-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            <p className="eyebrow">{problemApproach.eyebrow}</p>
            <h2 className="section-title max-w-xl">{problemApproach.title}</h2>
            <p className="max-w-lg text-[1rem] leading-8 text-ink/72">
              {problemApproach.intro}
            </p>

            <div className="flex flex-col gap-3 pt-2">
              {problemApproach.stages.map((stage) => {
                const isActive = stage.id === activeStage.id;

                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveStageId(stage.id)}
                    className={`approach-tab ${isActive ? "approach-tab-active" : ""}`}
                  >
                    <span className="text-left">
                      <span className="block text-[0.7rem] uppercase tracking-[0.24em] text-ink/46">
                        {stage.label}
                      </span>
                      <span className="mt-2 block text-base font-semibold leading-snug text-ink">
                        {stage.title}
                      </span>
                    </span>
                    <span className="text-xl text-ink/30">{isActive ? "•" : "+"}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <div className="surface-card overflow-hidden rounded-[1.9rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                className="grid gap-8 p-6 md:p-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_16rem]">
                  <div className="space-y-4">
                    <p className="eyebrow">{activeStage.label}</p>
                    <h3 className="text-[clamp(1.8rem,2.8vw,2.8rem)] font-semibold leading-[1.02] tracking-[-0.05em]">
                      {activeStage.title}
                    </h3>
                    <p className="text-[1rem] leading-8 text-ink/74">
                      {activeStage.summary}
                    </p>
                  </div>

                  <div className="rounded-[1.4rem] border border-ink/10 bg-[#fbfaf6] p-5">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-ink/46">
                      What I check
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeStage.signals.map((signal) => (
                        <span key={signal} className="skill-pill">
                          {signal}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-ink/10 bg-white/72 p-5">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#1d5d31]">
                      Where AI helps
                    </p>
                    <p className="mt-4 text-[0.98rem] leading-7 text-ink/72">
                      {activeStage.aiRole}
                    </p>
                  </div>

                  <div className="rounded-[1.4rem] border border-ink/10 bg-[#f8f3e6] p-5">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-ink/58">
                      Where I take over
                    </p>
                    <p className="mt-4 text-[0.98rem] leading-7 text-ink/76">
                      {activeStage.myRole}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {activeStage.details.map((detail, index) => (
                    <motion.article
                      key={detail}
                      className="rounded-[1.3rem] border border-ink/10 bg-white/74 p-5"
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: index * 0.05 }}
                    >
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-ink/42">
                        0{index + 1}
                      </p>
                      <p className="mt-3 text-[0.96rem] leading-7 text-ink/72">
                        {detail}
                      </p>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

          <div className="grid gap-4 md:grid-cols-2">
            {problemApproach.decisionGuide.map((group) => (
              <article
                key={group.label}
                className="rounded-[1.25rem] border border-ink/10 bg-white/58 p-5"
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-ink/46">
                  {group.label}
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-ink/70">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[0.58rem] h-1.5 w-1.5 rounded-full bg-ink/35" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemApproach;
