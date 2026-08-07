import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import workExperience from "../data/workExperience.json";

const roleVisuals = {
  "UI Health": {
    signals: [
      { theme: "Ownership", title: "End-to-end delivery", detail: "Led development of a centralized medical event platform serving 1,000+ daily users during peak events." },
      { theme: "Modernization", title: "Legacy rebuild", detail: "Moved 20+ HTML/PHP pages to a React and Next.js SPA with reusable components across five modules." },
      { theme: "Architecture", title: "Unified data services", detail: "Built C# and .NET APIs that unified attendee data and cached the transformed output with Redis." },
      { theme: "Reliability", title: "Production engineering", detail: "Deployed on AWS and added tests, monitoring, CI/CD, and containers, cutting production bugs by 25%." },
    ],
    path: ["Legacy workflows", "Unified full-stack platform", "Reliable event operations"],
    ownership: ["End-to-end delivery", "Frontend modernization", "Backend services", "AWS deployment"],
    snapshot: [
      { label: "Challenge", text: "Centralize medical event operations while replacing a legacy HTML/PHP application." },
      { label: "Scope", text: "React and Next.js frontend, C#/.NET services, data transformation, AWS infrastructure, testing, monitoring, and CI/CD." },
      { label: "Result", text: "A platform supporting 1,000+ peak daily users, with 40% faster page loads, 30% faster responses, and 25% fewer production bugs." },
    ],
  },
  "LPS Health": {
    signals: [
      { theme: "Ownership", title: "Solo product delivery", detail: "Delivered the full platform as the sole developer within a three-month internship." },
      { theme: "Product judgment", title: "Product-driven scope", detail: "Supported mentor recommendations, wellness purchases, Stripe subscriptions, community initiatives, analytics, and SEO." },
      { theme: "Architecture", title: "Reusable architecture", detail: "Built a 10+ component design system and secure APIs with caching, pagination, and rate limiting." },
      { theme: "Engineering quality", title: "Quality engineering", detail: "Raised Lighthouse from 40 to 80, cut load time by 70%, reached 80% test coverage, and added CI/CD." },
    ],
    path: ["Legacy product", "Full-cycle rebuild", "Production launch"],
    ownership: ["Sole developer", "Product delivery", "Payments", "Quality & analytics"],
    snapshot: [
      { label: "Challenge", text: "Replace a legacy healthcare platform across two brands within one internship." },
      { label: "Scope", text: "Product features, frontend, APIs, analytics, testing, performance, and deployment." },
      { label: "Result", text: "Shipped in three months, doubled Lighthouse performance, cut load time 70%, and reached 80% test coverage." },
    ],
  },
  Oracle: {
    signals: [
      { theme: "Learning agility", title: "Rapid platform mastery", detail: "Mastered Oracle VBS with limited documentation and contributed across two teams." },
      { theme: "Stakeholder leadership", title: "Client-driven delivery", detail: "Worked directly with BHE stakeholders to define and deliver CX and HCM product experiences." },
      { theme: "Platform thinking", title: "Cross-team reuse", detail: "Delivered 20+ components used across 4+ modules by teams of 10–20 developers, QA engineers, and consultants." },
      { theme: "Production reliability", title: "Production reliability", detail: "Architected middleware across 10+ integrations and resolved 100+ frontend, API, and middleware issues." },
    ],
    path: ["Stakeholder needs", "Reusable enterprise patterns", "Production operations"],
    ownership: ["Client discovery", "Product delivery", "API middleware", "Cross-team execution"],
    snapshot: [
      { label: "Challenge", text: "Deliver enterprise products on a new platform with limited documentation." },
      { label: "Scope", text: "Client discovery, reusable UI, integration architecture, documentation, and production support." },
      { label: "Result", text: "20+ components across 4+ modules, 10+ integrations, and 100+ production issues resolved." },
    ],
  },
};

const WorkExperience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeJob = workExperience.items[activeIndex];
  const visual = roleVisuals[activeJob.company];

  return (
    <section id="work" className="content-section section-shell">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="section-heading"
        >
          <p className="eyebrow">01 / {workExperience.eyebrow}</p>
          <h2 className="section-title">Products shipped. Outcomes delivered.</h2>
          <p className="section-dek">A track record of taking ownership, improving the experience, and helping teams ship work that holds up in the real world.</p>
        </motion.div>

        <div className="experience-layout">
          <div className="selector-list" role="tablist" aria-label="Work experience">
            {workExperience.items.map((job, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={`${job.company}-${job.date}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`selector-card ${isActive ? "selector-card-active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.38, delay: index * 0.06 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ x: 4 }}
                >
                  <span className="selector-index">0{index + 1}</span>
                  <span className="min-w-0 text-left">
                    <span className="block text-sm font-semibold leading-5 text-ink">
                      {job.company}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-ink/58">
                      {job.role}
                    </span>
                    <span className="selector-date">
                      {job.date}
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div className="detail-panel">
            <AnimatePresence mode="wait">
              <motion.article
                key={`${activeJob.company}-${activeJob.date}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="detail-content"
              >
                <div className="detail-header">
                  <div>
                    <p className="eyebrow">{activeJob.company}</p>
                    <h3 className="text-[clamp(1.7rem,2.6vw,2.65rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
                      {activeJob.role}
                    </h3>
                  </div>

                  <div className="detail-meta">
                    <p>{activeJob.type} · {activeJob.date}</p>
                    <p className="mt-1 text-ink/52">{activeJob.location}</p>
                  </div>
                </div>

                <div className="senior-signal-grid" aria-label={`${activeJob.company} senior engineering contributions`}>
                  {visual.signals.map((signal, index) => (
                    <motion.div
                      key={signal.theme}
                      className={`senior-signal-card senior-signal-card-${index + 1}`}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.06 }}
                    >
                      <div className="senior-signal-topline">
                        <span>0{index + 1}</span>
                        <small>{signal.theme}</small>
                      </div>
                      <strong>{signal.title}</strong>
                      <p>{signal.detail}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="role-storyboard">
                  <p className="eyebrow">Contribution flow</p>
                  <div className="role-path">
                    {visual.path.map((step, index) => (
                      <div className="role-path-step" key={step}>
                        <span>0{index + 1}</span>
                        <strong>{step}</strong>
                        {index < visual.path.length - 1 ? <i aria-hidden="true">→</i> : null}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="ownership-row">
                  <p className="eyebrow">Owned across</p>
                  <div>
                    {visual.ownership.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>

                <div className="role-tools">
                    <p className="eyebrow">Built with</p>
                    <div className="chip-row">
                      {activeJob.technologies.slice(0, 6).map((item, index) => (
                        <motion.span
                          key={item}
                          className="skill-pill"
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.18, delay: index * 0.025 }}
                          whileHover={{ y: -2 }}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                </div>

                <details className="more-details role-full-story">
                  <summary>Open role snapshot <span>+</span></summary>
                  <div className="role-snapshot">
                    {visual.snapshot.map((item, index) => (
                      <div className="snapshot-row" key={item.label}>
                        <span>0{index + 1}</span>
                        <strong>{item.label}</strong>
                        <p>{item.text}</p>
                      </div>
                    ))}
                    {activeJob.technologies.length > 6 ? (
                      <div className="snapshot-toolbox">
                        <p className="eyebrow">More tools</p>
                        <div className="chip-row">
                          {activeJob.technologies.slice(6).map((item) => <span className="skill-pill" key={item}>{item}</span>)}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </details>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
