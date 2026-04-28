import { motion } from "framer-motion";
import about from "../data/values.json";

const AboutMe = () => {
  return (
    <section id="about" className="section-shell py-18 md:py-28">
      <div className="grid gap-12 border-t border-ink/10 pt-18 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-5"
        >
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="section-title max-w-2xl">{about.title}</h2>
          <div className="space-y-6 text-[1rem] leading-8 text-ink/74 md:text-[1.02rem]">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {about.values.map((value, index) => (
            <motion.article
              key={value.title}
              className="surface-card rounded-[1.6rem] p-5 md:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
            >
              <h3 className="text-lg font-semibold leading-snug">{value.title}</h3>
              <p className="mt-3 text-[0.96rem] leading-7 text-ink/72">
                {value.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
