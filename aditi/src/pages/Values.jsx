/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import beliefBlocks from "../data/beliefBlocks.json";

const Values = () => {
  return (
    <section
      id="values"
      className="bg-canvas text-ink py-20 font-sans"
    >
      <div className="w-[80%] mx-auto">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-ink"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          I don't ship until it feels right.
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl leading-relaxed text-ink/80 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          I care about two things equally. What the person sees should be accurate
          and come from the right place. And it should feel good to use.
          <br className="hidden md:block" />
          <br className="hidden md:block" />
          I have built enterprise dashboards at Oracle, healthcare interfaces at
          UIC Medicine, and full-stack products from scratch. I am also a singer
          with over 100 competition awards. That is not a coincidence. The same
          instinct that makes me fix a 1px misalignment is the same one that makes
          me sing a phrase forty times until it lands.
        </motion.p>

        {/* Belief Blocks Grid — 2 columns, 2 rows */}
        {(() => {
          const blockColors = [
            "bg-sunbeam-light",
            "bg-lilac-light",
            "bg-white",
            "bg-sunbeam-light",
          ];
          const headingColors = [
            "text-ink",
            "text-ink",
            "text-lilac",
            "text-ink",
          ];
          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {beliefBlocks.map((item, i) => (
                <motion.div
                  key={i}
                  className={`group rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition duration-300 hover:shadow-lg hover:scale-[1.015] ${blockColors[i]}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className={`text-xl font-semibold mb-2 ${headingColors[i]}`}>
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-ink/80">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default Values;