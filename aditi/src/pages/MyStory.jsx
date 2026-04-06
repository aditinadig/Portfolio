/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const MyStory = () => {
  return (
    <motion.section
      id="my-story"
      className="px-10 md:px-30 py-10 md:my-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-7xl 2xl:max-w-8xl mx-auto flex flex-col gap-8 xl:gap-10">
        {/* Heading */}
        <motion.div variants={fadeUp} custom={0} className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            How I got{" "}
            <span className="inline-block bg-sunbeam/30 px-3 py-1 rounded-xl">
              here.
            </span>
          </h2>
        </motion.div>

        {/* Story — single column, two short paragraphs */}
        <div className="max-w-3xl space-y-5">
          <motion.p
            className="text-lg md:text-xl leading-relaxed text-ink/90"
            variants={fadeUp}
            custom={1}
          >
            My mom is a computer science professor. When I was five, she'd build
            children's stories in PowerPoint — and pull me in to pick colors,
            arrange shapes, and think about flow. I didn't know it then, but
            that's where my instinct for how things should{" "}
            <em>work and feel together</em> started.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl leading-relaxed text-ink/90"
            variants={fadeUp}
            custom={2}
          >
            CS in undergrad felt natural. What stuck with me wasn't just
            building things — it was building things{" "}
            <em>end to end</em>: the data model, the API, and the experience on
            top. My master's deepened that — distributed systems, secure web
            development, HCI — and today that's exactly how I work. I care about
            the full layer, not just the screen.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default MyStory;
