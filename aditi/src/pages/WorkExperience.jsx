import { motion } from "framer-motion";
import workExperience from "../data/workExperience.json";

const WorkExperience = () => {
  return (
    <section id="work" className="section-shell py-18 md:py-28">
      <div className="border-t border-ink/10 pt-18">
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

        <div className="mt-12 grid gap-6">
          {workExperience.items.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.date}`}
              className="surface-card rounded-[1.9rem] p-6 md:p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)]">
                <div className="space-y-4">
                  <p className="eyebrow">{job.company}</p>
                  <h3 className="text-[clamp(1.7rem,2.3vw,2.35rem)] font-semibold tracking-[-0.04em]">
                    {job.role}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.2em] text-ink/56">
                    {job.type} · {job.date} · {job.location}
                  </p>
                </div>

                <ul className="space-y-4 text-[0.98rem] leading-7 text-ink/74">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-[0.72rem] h-1.5 w-1.5 rounded-full bg-ink/50" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
