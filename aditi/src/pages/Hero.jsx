import { motion } from "framer-motion";
import siteContent from "../data/siteContent.json";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { delay, duration: 0.62, ease: [0.22, 1, 0.36, 1] } }),
};

const Hero = () => {
  const { availability, location, hero } = siteContent;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-noise" aria-hidden="true" />
      <div className="section-shell hero-grid">
        <motion.div initial="hidden" animate="visible" className="hero-copy">
          <motion.div className="availability" variants={reveal} custom={0}>
            <span className="availability-dot" /> {availability} for work · {location}
          </motion.div>

          <div className="hero-title-wrap">
            <motion.h1 variants={reveal} custom={0.08}>
              <span>{hero.headline.role}</span>
              <span className="hero-accent">{hero.headline.ux}</span>
            </motion.h1>
            <motion.p className="hero-kicker" variants={reveal} custom={0.16}>
              {hero.headline.ai}
            </motion.p>
          </div>

          <motion.p className="hero-summary" variants={reveal} custom={0.24}>
            {hero.subtext}
          </motion.p>

          <motion.div className="hero-actions" variants={reveal} custom={0.32}>
            <a className="button-primary" href="#projects">See selected work</a>
            <a className="resume-cta" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </motion.div>

        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96, rotate: 1.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-window">
            <img src="/images/aditi.png" alt="Aditi Arun Nadig" />
            <div className="portrait-caption">
              <span>Currently</span>
              <strong>Taking thoughtful products from idea to launch.</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
