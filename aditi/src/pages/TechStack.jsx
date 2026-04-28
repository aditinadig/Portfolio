import { motion } from "framer-motion";
import techStack from "../data/techStack.json";

const TechStack = () => {
  return (
    <section id="skills" className="section-shell py-16 md:py-24">
      <motion.div
        className="space-y-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="eyebrow">{techStack.eyebrow}</p>
        <h2 className="section-title">{techStack.title}</h2>
      </motion.div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {techStack.columns.map((column, index) => (
          <motion.article
            key={column.title}
            className="rounded-[1.6rem] border border-ink/10 bg-white/72 p-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/78">
              {column.title}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {column.items.map((item) => (
                <span
                  key={item.label}
                  className={item.primary ? "skill-pill skill-pill-primary" : "skill-pill"}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <p className="mt-6 font-mono text-xs text-ink/48">{techStack.witLine}</p>
    </section>
  );
};

export default TechStack;
