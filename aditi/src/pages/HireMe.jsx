import { motion } from "framer-motion";
import siteContent from "../data/siteContent.json";

const HireMe = () => (
  <section id="contact" className="contact-section">
    <motion.div className="section-shell contact-inner" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}>
      <p className="eyebrow">Have a thoughtful problem?</p>
      <h2>Let’s make it feel <em>obvious.</em></h2>
      <a className="contact-email" href={`mailto:${siteContent.footer.email}`}>{siteContent.footer.email}</a>
      <div className="contact-footer">
        <p>Designed & built by Aditi · 2026</p>
        <div>
          {siteContent.footer.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default HireMe;
