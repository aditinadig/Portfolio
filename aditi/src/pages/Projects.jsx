import { motion } from "framer-motion";
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <section className="section-shell py-18 md:py-28">
      <div className="border-t border-ink/10 pt-18">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-5"
        >
          <p className="eyebrow">{projects.eyebrow}</p>
          <h2 className="section-title">{projects.title}</h2>
        </motion.div>

        <div className="mt-12 grid gap-6">
          {projects.items.map((project, index) => (
            <motion.article
              key={project.title}
              id={project.anchorId}
              className="surface-card rounded-[1.9rem] p-6 md:p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
            >
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_21rem]">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-[0.72rem] uppercase tracking-[0.2em] text-ink/56">
                    <span>{project.type}</span>
                    {project.context ? <span>· {project.context}</span> : null}
                  </div>
                  <h3 className="text-[clamp(1.8rem,2.4vw,2.5rem)] font-semibold tracking-[-0.04em]">
                    {project.title}
                  </h3>
                  <p className="max-w-3xl text-[1rem] leading-7 text-ink/74">
                    {project.description}
                  </p>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-ink underline underline-offset-4"
                    >
                      View live project
                    </a>
                  ) : null}
                </div>

                <aside className="space-y-7 border-t border-ink/10 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <div>
                    <p className="eyebrow mb-3">Date</p>
                    <p className="text-sm leading-6 text-ink/72">{project.date}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-3">Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="skill-pill">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="eyebrow mb-3">Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="skill-pill skill-pill-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
