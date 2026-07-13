import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const facets = [
  { icon: "♬", title: "Singer", short: "100+ stages", text: "Classical training, playback work, music production, and more than 100 competition wins taught me confidence without losing the ability to listen." },
  { icon: "⌁", title: "Gamer", short: "Mythic rank", text: "I play Mobile Legends at Mythic rank. Positioning, timing, fast reads, and committing only when the angle is right feel surprisingly familiar." },
  { icon: "✂", title: "Maker", short: "Yes, I sew", text: "I care about fashion as a complete system—and sew some of my own outfits. Good structure should still leave room for personality." },
  { icon: "◎", title: "Observer", short: "UX everywhere", text: "I notice needless friction in software, wardrobes, group chats, and everyday objects. Then I start redesigning the setup in my head." },
];

const AboutMe = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="about" className="content-section section-shell">
      <div className="about-grid">
        <motion.div className="section-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="eyebrow">03 / Beyond the résumé</p>
          <h2 className="section-title">There’s a person behind the pixels.</h2>
          <p className="section-dek">The same instincts show up in my code, music, games, and clothes: notice the system, find the rhythm, refine the details.</p>
        </motion.div>

        <div className="facet-explorer">
          <div className="facet-grid" role="tablist" aria-label="Things about Aditi">
            {facets.map((item, index) => (
              <motion.button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={active === index}
                className={active === index ? "facet-card active" : "facet-card"}
                onClick={() => setActive(index)}
                whileHover={{ y: -4 }}
              >
                <span className="facet-icon">{item.icon}</span>
                <strong>{item.title}</strong>
                <span>{item.short}</span>
              </motion.button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={facets[active].title} className="facet-detail" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
              <span>0{active + 1}</span>
              <p>{facets[active].text}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
