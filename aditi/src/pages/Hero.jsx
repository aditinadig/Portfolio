import { motion } from "framer-motion";
import siteContent from "../data/siteContent.json";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  const { availability, location, date, hero } = siteContent;

  return (
    <section id="hero" className="section-shell relative py-12 md:py-20">
      <div className="mesh-orb mesh-orb-one" />
      <div className="mesh-orb mesh-orb-two" />
      <div className="mesh-orb mesh-orb-three hidden lg:block" />

      <div className="relative grid gap-12 border-b border-ink/10 pb-18 lg:grid-cols-[minmax(0,1.5fr)_20rem] lg:gap-14">
        <motion.div initial="hidden" animate="visible" className="space-y-8">
          <motion.p
            className="text-[0.72rem] uppercase tracking-[0.24em] text-ink/58"
            variants={fadeUp}
            custom={0}
          >
            {availability} · {location} · {date}
          </motion.p>

          <div className="space-y-4">
            <motion.h1
              className="max-w-4xl text-balance text-[clamp(2.9rem,8vw,6.9rem)] font-semibold leading-[0.93] tracking-[-0.06em]"
              variants={fadeUp}
              custom={0.08}
            >
              {hero.headline[0]}
            </motion.h1>
            <motion.p
              className="max-w-4xl text-balance text-[clamp(2.5rem,6vw,4.8rem)] font-medium italic leading-[0.95] tracking-[-0.05em]"
              variants={fadeUp}
              custom={0.16}
            >
              {hero.headline[1]}
            </motion.p>
            <motion.p
              className="max-w-3xl text-balance text-[clamp(1.9rem,4vw,3.2rem)] font-medium italic leading-[1.02] tracking-[-0.04em]"
              variants={fadeUp}
              custom={0.24}
            >
              {hero.headline[2]}
            </motion.p>
          </div>

          <motion.p
            className="max-w-3xl text-lg leading-8 text-ink/76 md:text-xl"
            variants={fadeUp}
            custom={0.32}
          >
            {hero.subtext}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 pt-1 text-[0.75rem] uppercase tracking-[0.2em] text-ink/64"
            variants={fadeUp}
            custom={0.4}
          >
            <a className="pill-primary" href="#work">
              View work
            </a>
            <a className="pill-muted" href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </motion.div>

          <motion.p
            className="font-mono text-xs text-ink/48"
            variants={fadeUp}
            custom={0.48}
          >
            {hero.witLine}
          </motion.p>
        </motion.div>

        <motion.aside
          className="hero-rail"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
        >
          {hero.cards.map((card, index) => (
            <motion.article
              key={card.label}
              className="editorial-card"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 + index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <p className="eyebrow mb-3">{card.label}</p>
              <h2 className="text-base font-semibold leading-snug">{card.text}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/68">{card.detail}</p>
            </motion.article>
          ))}
        </motion.aside>
      </div>
    </section>
  );
};

export default Hero;
