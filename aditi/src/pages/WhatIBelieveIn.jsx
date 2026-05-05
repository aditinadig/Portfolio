import { motion } from "framer-motion";
import aiPrinciples from "../data/aiPrinciples.json";

const WhatIBelieveIn = () => {
  return (
    <section className="section-shell pb-18 md:pb-28">
      <div className="section-divider grid gap-12 pb-14 pt-6 md:pt-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-5"
        >
          <p className="eyebrow">{aiPrinciples.eyebrow}</p>
          <blockquote className="text-balance text-[clamp(2rem,3vw,3.1rem)] font-medium leading-tight tracking-[-0.04em]">
            “{aiPrinciples.quote}”
          </blockquote>
          <p className="font-mono text-xs text-ink/48">{aiPrinciples.witLine}</p>
        </motion.div>

        <div className="grid gap-5">
          {aiPrinciples.points.map((point, index) => (
            <motion.article
              key={point.number}
              className="surface-card grid gap-4 rounded-[1.7rem] p-6 md:grid-cols-[4.5rem_minmax(0,1fr)] md:p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/42">
                {point.number}
              </p>
              <div>
                <h3 className="text-xl font-semibold leading-snug">{point.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-7 text-ink/72">
                  {point.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBelieveIn;
