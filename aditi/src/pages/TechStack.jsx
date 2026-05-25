import { motion } from "framer-motion";
import techStack from "../data/techStack.json";

const TechStack = () => {
  const primarySkills = techStack.columns
    .flatMap((column) => column.items)
    .filter((item) => item.primary)
    .slice(0, 12);

  return (
    <section id="skills" className="section-shell pb-18 md:pb-28">
      <div className="section-divider pb-14">
        <div className="grid gap-10 pt-6 md:pt-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-end">
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="eyebrow">{techStack.eyebrow}</p>
            <h2 className="section-title">{techStack.title}</h2>
            <p className="max-w-lg text-[1rem] leading-7 text-ink/70">
              The tools I reach for most are the ones that help me keep UI, data,
              security, and product behavior understandable.
            </p>
          </motion.div>

          <motion.div
            className="skills-featured"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="eyebrow">Reach for first</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
              {primarySkills.map((item, index) => (
                <motion.span
                  key={item.label}
                  className="featured-skill"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.025 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {techStack.columns.map((column, index) => (
            <motion.details
              key={column.title}
              className="skills-category"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <summary className="skills-category-summary">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/78">
                  {column.title}
                </h3>
                <span className="skills-category-actions">
                  <span className="skills-count">{column.items.length}</span>
                  <span className="skills-toggle-icon" aria-hidden="true">
                    +
                  </span>
                </span>
              </summary>
              <div className="skills-category-content">
                {column.items.map((item, itemIndex) => (
                  <div
                    key={item.label}
                    className={item.primary ? "skill-row skill-row-primary" : "skill-row"}
                    style={{ "--delay": `${itemIndex * 20}ms` }}
                  >
                    <span>{item.label}</span>
                    {item.primary ? <span className="skill-row-mark">Core</span> : null}
                  </div>
                ))}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
