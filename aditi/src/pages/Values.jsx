import { motion } from "framer-motion";
import beliefBlocks from "../data/beliefBlocks.json";

const Values = () => {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="grid gap-10 border-t border-ink/10 pt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="eyebrow">{beliefBlocks.eyebrow}</p>
          <h2 className="section-title max-w-xl">{beliefBlocks.title}</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {beliefBlocks.blocks.map((block, index) => (
            <motion.article
              key={block.number}
              className="rounded-[1.6rem] border border-ink/10 bg-white/78 p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/42">
                {block.number}
              </p>
              <h3 className="mt-4 text-xl font-semibold leading-snug">{block.title}</h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-ink/72">
                {block.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
