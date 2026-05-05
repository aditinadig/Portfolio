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
  const portraitFacts = [hero.cards[0], hero.cards[2]];
  const railCards = hero.cards.filter((card) => !portraitFacts.includes(card));

  return (
    <section id="hero" className="section-shell relative py-8 md:py-12">
      <div className="mesh-orb mesh-orb-one" />
      <div className="mesh-orb mesh-orb-two" />
      <div className="mesh-orb mesh-orb-three hidden lg:block" />

      <div className="section-divider hero-layout relative grid gap-8 pb-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(30rem,0.78fr)] lg:gap-10">
        <motion.div initial="hidden" animate="visible" className="hero-copy space-y-5">
          <motion.p
            className="text-[0.72rem] uppercase tracking-[0.24em] text-ink/58"
            variants={fadeUp}
            custom={0}
          >
            {availability} · {location} · {date}
          </motion.p>

          <div className="space-y-4">
            <motion.h1
              className="max-w-4xl text-balance text-[clamp(2.3rem,6vw,5.2rem)] font-semibold leading-[0.94] tracking-[-0.055em]"
              variants={fadeUp}
              custom={0.08}
            >
              {hero.headline[0]}
            </motion.h1>
            <motion.p
              className="max-w-4xl text-balance text-[clamp(1.75rem,3.8vw,3.1rem)] font-medium italic leading-[1] tracking-[-0.035em]"
              variants={fadeUp}
              custom={0.16}
            >
              {hero.headline[1]}
            </motion.p>
            <motion.p
              className="max-w-3xl text-balance text-[clamp(1.3rem,2.4vw,2rem)] font-medium italic leading-[1.08] tracking-[-0.025em]"
              variants={fadeUp}
              custom={0.24}
            >
              {hero.headline[2]}
            </motion.p>
          </div>

          <motion.p
            className="max-w-2xl text-[1rem] leading-7 text-ink/76 md:text-[1.05rem]"
            variants={fadeUp}
            custom={0.32}
          >
            {hero.subtext}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 pt-1 text-[0.75rem] uppercase tracking-[0.2em] text-ink/64"
            variants={fadeUp}
            custom={0.37}
          >
            <a className="pill-primary" href="#work">
              View work
            </a>
            <a className="pill-muted" href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </motion.div>

        </motion.div>

        <motion.aside
          className="hero-rail"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
        >
          <motion.article
            className="portrait-card hero-portrait-card"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            whileHover={{ y: -4 }}
          >
            <div className="portrait-frame">
              <img
                src="/images/aditi.png"
                alt="Portrait of Aditi Arun Nadig"
                className="portrait-image"
              />
            </div>
            <div className="space-y-4">
              {portraitFacts.map((card) => (
                <div key={card.label} className="portrait-fact">
                  <p className="eyebrow mb-2">{card.label}</p>
                  <h2 className="text-sm font-semibold leading-6 text-ink/84">{card.text}</h2>
                  <p className="mt-2 text-xs leading-5 text-ink/62">{card.detail}</p>
                </div>
              ))}
            </div>
          </motion.article>

          <div className="hero-card-grid">
            {railCards.map((card, index) => (
              <motion.article
                key={card.label}
                className="hero-mini-card hero-info-card"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.34 + index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <p className="eyebrow mb-2">{card.label}</p>
                <h2 className="text-sm font-semibold leading-6 text-ink/84">{card.text}</h2>
                <p className="mt-2 text-xs leading-5 text-ink/62">{card.detail}</p>
              </motion.article>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default Hero;
