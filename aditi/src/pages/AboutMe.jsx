import { motion } from "framer-motion";
import about from "../data/values.json";

const AboutMe = () => {
  return (
    <section id="about" className="section-shell pb-18 md:pb-28">
      <div className="section-divider pb-14 pt-6 md:pt-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5 lg:sticky lg:top-6"
          >
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 className="section-title max-w-xl">{about.title}</h2>
            <p className="max-w-lg text-[1rem] leading-8 text-ink/72">
              I like work where product behavior, interface clarity, and human context all
              have to fit together.
            </p>
            <motion.div
              className="about-note"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </motion.div>
          </motion.div>

          <div>
            <div className="about-values-panel">
              {about.values.map((value, index) => (
                <motion.article
                  key={value.title}
                  className="about-value-row"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ x: 4 }}
                >
                  <span className="about-value-number">0{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-semibold leading-snug">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-7 text-ink/72">
                      {value.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
