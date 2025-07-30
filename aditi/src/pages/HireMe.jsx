/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */

const HireMe = () => {
  return (
    <section
      className="bg-canvas mx-16 py-24 md:px-24 text-ink font-sans border-t border-ink/10"
      id="hire-me"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Let’s Build Something Great Together
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl text-ink/80 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Whether you’re looking for a frontend developer with a strong design
          sense, a product-minded engineer, or someone who gets things done with
          ownership — I’d love to chat.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:aditiarunnadig@gmail.com"
            className="bg-sunbeam hover:bg-sunbeam-light text-ink font-semibold py-3 px-6 rounded-full transition-all shadow-md"
          >
            Reach Out
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-lilac text-lilac hover:bg-lilac-light font-semibold py-3 px-6 rounded-full transition-all shadow-sm"
          >
            View My Resume
          </a>
        </motion.div>

        {/* Optional Availability Note */}
        <motion.p
          className="text-sm text-ink/60 mt-8 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Currently open to Fall 2025 internships and part-time roles (CPT eligible).
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HireMe;