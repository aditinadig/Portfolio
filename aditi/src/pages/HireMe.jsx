import { motion } from "framer-motion";
import siteContent from "../data/siteContent.json";

const HireMe = () => {
  return (
    <section id="contact" className="section-shell py-16 md:py-24">
      <motion.div
        className="border-t border-ink/10 pt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="space-y-4">
            <p className="eyebrow">Footer</p>
            <h2 className="section-title max-w-2xl">{siteContent.footer.title}</h2>
            <p className="font-mono text-xs text-ink/48">{siteContent.footer.witLine}</p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm uppercase tracking-[0.18em] text-ink/72">
            {siteContent.footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
                rel={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "noreferrer" : undefined}
                className="transition hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HireMe;
