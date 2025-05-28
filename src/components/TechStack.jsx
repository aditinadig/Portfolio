import techStack from "../data/techstack.json";

const TechStack = () => {
  return (
    <section id="tech-stack" className="px-6 md:px-12 py-16 max-w-6xl mx-auto">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-16 relative inline-block tracking-tight">
        Tech Stack
        <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 rounded"></span>
      </h2>

      <div className="space-y-16">
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category}>
            {/* Artistic Category Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 border-l-4 border-purple-500 pl-4 mb-4 uppercase tracking-wide">
              {category}
            </h3>

            {/* Table-Style Row */}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {items.map((tech, idx) => (
                <div
                  key={idx}
                  className="w-[90px] flex flex-col items-center justify-start text-center"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-20 h-20 object-contain mb-1 drop-shadow-sm"
                  />
                  <p className="text-[12px] text-gray-800 font-medium leading-tight">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;