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

        {/* Two-column story layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-10">
          {/* Left column */}
          <div className="space-y-5">
            <motion.p
              className="text-lg md:text-xl leading-relaxed text-ink/90"
              variants={fadeUp}
              custom={1}
            >
              My love for computer science and design started very early. When I
              was five years old, my mom — a computer science professor — used to
              tell children's stories using PowerPoint slides with colorful
              visuals and animations. She would involve me while creating them,
              asking me to pick colors, arrange shapes, and think about how the
              story should flow. I didn't know it then, but those moments quietly
              shaped the way I look at technology today.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl leading-relaxed text-ink/90"
              variants={fadeUp}
              custom={2}
            >
              As I grew older, that curiosity stayed with me. Choosing computer
              science in undergrad felt natural. While I enjoyed programming, I
              found myself most excited when I was building things people could
              see and use. That's when I discovered web development — and it
              truly felt like home. I loved how logic and creativity came
              together, how code could turn into beautiful interfaces, smooth
              interactions, and meaningful user experiences.
            </motion.p>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            <motion.p
              className="text-lg md:text-xl leading-relaxed text-ink/90"
              variants={fadeUp}
              custom={3}
            >
              I've always cared deeply about good design, colors, and clarity. I
              notice when an interface feels confusing, and I appreciate when
              something feels simple and intuitive. That instinct pushed me
              further toward frontend development. During my master's, I leaned
              into this passion — secure web development, React, UI/UX, and
              human-computer interaction — giving structure to what I had always
              felt: good software should not only work well, but feel good to
              use.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl leading-relaxed text-ink/90"
              variants={fadeUp}
              custom={4}
            >
              Today, my goal is to build user-facing products that are
              thoughtful, accessible, and well-designed — interfaces that make
              people feel comfortable and confident, just like those early story
              slides made learning feel fun to me as a child.
            </motion.p>

            <motion.blockquote
              className="border-l-4 border-lilac pl-5 xl:pl-6 italic text-lg text-ink/70 leading-relaxed"
              variants={fadeUp}
              custom={5}
            >
              Good software should not only work well — it should{" "}
              <span className="not-italic font-bold text-lilac">feel</span> good
              to use.
            </motion.blockquote>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MyStory;
