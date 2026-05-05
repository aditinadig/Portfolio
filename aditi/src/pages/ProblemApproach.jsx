import { motion } from "framer-motion";
import problemApproach from "../data/problemApproach.json";

const ProblemApproach = () => {
  return (
    <section id="approach" className="section-shell pb-18 md:pb-28">
      <div className="section-divider pb-14 pt-6 md:pt-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5 lg:sticky lg:top-6"
          >
            <p className="eyebrow">{problemApproach.eyebrow}</p>
            <h2 className="section-title max-w-xl">{problemApproach.title}</h2>
            <p className="max-w-lg text-[1rem] leading-8 text-ink/72">
              {problemApproach.intro}
            </p>

            <div className="approach-decision-stack">
              {problemApproach.decisionGuide.map((group, index) => (
                <motion.article
                  key={group.label}
                  className={`approach-decision-card ${
                    index === 0 ? "approach-decision-ai" : "approach-decision-me"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.42, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <p className="eyebrow">{group.label}</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-ink/72">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[0.58rem] h-1.5 w-1.5 shrink-0 rounded-full bg-ink/35" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <div className="approach-board">
            {problemApproach.stages.map((stage, index) => (
              <motion.article
                key={stage.id}
                className="approach-step"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: index * 0.07 }}
                viewport={{ once: true, amount: 0.22 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="approach-step-number">{stage.label}</p>
                    <h3 className="mt-3 text-xl font-semibold leading-snug tracking-[-0.025em]">
                      {stage.title}
                    </h3>
                  </div>
                  <span className="approach-dot" aria-hidden="true" />
                </div>

                <p className="mt-4 text-[0.96rem] leading-7 text-ink/72">
                  {stage.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {stage.signals.map((signal) => (
                    <span key={signal} className="skill-pill">
                      {signal}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemApproach;
