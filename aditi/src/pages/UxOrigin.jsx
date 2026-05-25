import { motion } from "framer-motion";
import siteContent from "../data/siteContent.json";
import uxOrigin from "../data/uxOrigin.json";

const UxOrigin = () => {
  const renderPanel = (panel, index, extraClass = "") => (
    <motion.article
      key={panel.title}
      className={`ux-origin-panel ${
        panel.kicker === "Humility" ? "ux-origin-panel-humility" : ""
      } ${extraClass}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.08 + index * 0.06 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <p className="ux-origin-kicker">{panel.kicker}</p>
        <h3>{panel.title}</h3>
      </div>

      <div className="ux-origin-copy">
        {panel.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {panel.pullQuote ? <p className="ux-origin-pull">{panel.pullQuote}</p> : null}
        {panel.afterQuote ? <p>{panel.afterQuote}</p> : null}
      </div>
    </motion.article>
  );

  return (
    <section id="ux-origin" className="section-shell pb-18 md:pb-28">
      <div className="section-divider pb-14 pt-6 md:pt-8">
        <div className="ux-origin-layout">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="ux-origin-intro"
          >
            <p className="eyebrow">{uxOrigin.eyebrow}</p>
            <h2 className="section-title max-w-xl">{uxOrigin.title}</h2>
            {uxOrigin.dek ? <p className="ux-origin-dek">{uxOrigin.dek}</p> : null}
            <article className="ux-origin-portfolio-note">
              <p className="ux-origin-kicker">{uxOrigin.portfolioNote.eyebrow}</p>
              <h3>{uxOrigin.portfolioNote.title}</h3>
              <p>{uxOrigin.portfolioNote.text}</p>
              <a href={siteContent.footer.reviewCta.href} className="ux-origin-review-cta">
                {uxOrigin.portfolioNote.prompt}
              </a>
            </article>
          </motion.div>

          <div className="ux-origin-scroll" aria-label="Why UX stuck with me cards">
            <div className="ux-origin-stack">
              {uxOrigin.panels.map((panel, index) => renderPanel(panel, index))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UxOrigin;
