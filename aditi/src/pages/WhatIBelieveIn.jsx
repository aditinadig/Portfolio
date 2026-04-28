import { motion } from "framer-motion";
import aiPrinciples from "../data/aiPrinciples.json";

const WhatIBelieveIn = () => {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="grid gap-10 border-t border-ink/10 pt-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
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

        <div className="grid gap-4">
          {aiPrinciples.points.map((point, index) => (
            <motion.article
              key={point.number}
              className="grid gap-4 rounded-[1.6rem] border border-ink/10 bg-white/78 p-6 md:grid-cols-[4.5rem_minmax(0,1fr)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
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
