import { motion } from "framer-motion";
import techStack from "../data/techStack.json";

const TechStack = () => {
  return (
    <section id="skills" className="section-shell py-18 md:py-28">
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

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {techStack.columns.map((column, index) => (
          <motion.article
            key={column.title}
            className="surface-card rounded-[1.7rem] p-6 md:p-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/78">
              {column.title}
            </h3>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {column.items.map((item) => (
                <motion.span
                  key={item.label}
                  className={item.primary ? "skill-pill skill-pill-primary" : "skill-pill"}
                  whileHover={{ scale: 1.04 }}
                >
                  {item.label}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <p className="mt-7 font-mono text-xs text-ink/48">{techStack.witLine}</p>
    </section>
  );
};

export default TechStack;
