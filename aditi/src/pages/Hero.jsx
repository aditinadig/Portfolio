/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  return (
    <section id="hero" className="hero flex flex-row p-34 py-12">
      {/* Left Side */}
      <motion.div
        className="flex flex-col flex-1/2 gap-6"
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-8xl font-extrabold"
          custom={0}
          variants={textVariants}
        >
          Hi, I'm <span className="text-lilac">Aditi!</span>
        </motion.h1>

        <motion.h2
          className="text-4xl"
          custom={1}
          variants={textVariants}
        >
          Frontend Dev. UI Snob. Detail Freak.
        </motion.h2>

        <motion.p
          className="text-2xl"
          custom={2}
          variants={textVariants}
        >
          I build clean, intuitive, full-circle experiences — <br />powered by React and polish.
        </motion.p>

        <motion.a
          href="#work-experience"
          className=" bg-sunbeam font-bold text-md px-5 py-3 rounded shadow-sm hover:bg-yellow-500 transition w-fit"
          custom={3}
          variants={textVariants}
        >
          CHECK MY WORK EXPERIENCE
        </motion.a>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="relative w-full max-w-md group mt-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        {/* Floating Purple Blob */}
        <div className="absolute inset-0 bg-purple-200 rounded-[60%_40%_60%_40%/40%_60%_40%_60%] -z-10 scale-105 animate-float transition-transform duration-500 ease-in-out group-hover:animate-wiggle"></div>

        {/* Image */}
        <a href="#about-me">
          <img
            src="/images/aditi.png"
            alt="Aditi Portrait"
            className="relative z-10 rounded-full border-4 border-white transition-transform duration-500 ease-in-out group-hover:-translate-y-2 group-hover:rotate-2"
          />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;