import { motion } from "framer-motion";
import roleFit from "../data/roleFit.json";

const RoleFit = () => {
  return (
    <section id="fit" className="section-shell pb-18 md:pb-28">
      <div className="section-divider pb-14 pt-6 md:pt-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
          <motion.div
            className="space-y-5 lg:sticky lg:top-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="eyebrow">{roleFit.eyebrow}</p>
            <h2 className="section-title max-w-xl">{roleFit.title}</h2>
            <p className="max-w-lg text-[1rem] leading-8 text-ink/72">
              {roleFit.intro}
            </p>
          </motion.div>

          <div className="role-fit-panel">
            <div className="grid gap-4 md:grid-cols-2">
              {roleFit.cards.map((card, index) => (
                <motion.article
                  key={card.title}
                  className="role-fit-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <span className="role-fit-number">0{index + 1}</span>
                  <h3 className="mt-4 text-lg font-semibold leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[0.96rem] leading-7 text-ink/72">
                    {card.description}
                  </p>
                </motion.article>
              ))}
            </div>

            <motion.p
              className="role-fit-closing"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {roleFit.closing}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleFit;
