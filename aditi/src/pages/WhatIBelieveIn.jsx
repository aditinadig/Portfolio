/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import values from "../data/values.json";

const WhatIBelieveIn = () => {
  return (
    <section
      id="what-i-believe-in"
      className="bg-canvas text-ink py-20 font-sans"
    >
      <div className="w-[80%] mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-14 tracking-tight text-ink"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What I Believe In
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.values.map((item, i) => (
            <motion.div
              key={i}
              className="group flex gap-4 items-start rounded-2xl bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition duration-300 hover:shadow-lg hover:scale-[1.015]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="min-w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-full bg-sunbeam-light text-4xl">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-ink mb-1">
                  {item.title}
                </h3>
                <p className="text-sm leading-snug text-ink/90">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBelieveIn;
