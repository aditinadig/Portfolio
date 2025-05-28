import workExperience from '../data/workExpereince.json';

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="px-6 md:px-12 py-24 max-w-6xl mx-auto"
      
    >
      <h2 className="text-5xl font-bold text-gray-900 mb-20 border-b-4 border-yellow-400 inline-block pb-2 tracking-tight">
        Work Experience
      </h2>

      <div className="relative border-l-4 border-purple-200 pl-10 space-y-20" style={{ fontFamily: 'var(--font-body)'}}>
        {workExperience.map((job, idx) => {
          // Extract year from duration (assuming format "May 2022 – Jul 2023")
          const startYear = job.duration?.match(/\d{4}/)?.[0] || '';

          return (
            <div
              key={idx}
              className="relative group opacity-0 animate-fadeInUp"
              style={{
                animationDelay: `${idx * 120}ms`,
                animationFillMode: 'forwards',
              }}
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[1%] top-2 w-5 h-5 rounded-full bg-yellow-400 border-4 border-white shadow-sm z-10" />

              {/* Year Tag */}
              <div className="absolute -left-[10%] top-2 text-lg text-purple-400 font-bold">
                {startYear}
              </div>

              {/* Timeline Card - Dark themed */}
              <div className="bg-zinc-800 border border-purple-400/40 p-6 md:p-8 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.01]">
                {/* Role + Company */}
                <h3 className="text-2xl font-semibold text-stone-200">
                  {job.role}
                  <span className="text-yellow-300/70 ml-2">@ {job.company}</span>
                </h3>
                <p className="text-sm text-gray-300 mt-1 font-medium">
                  {job.location} · {job.duration}
                </p>

                {/* Highlights */}
                <ul className="mt-4 space-y-2 list-disc list-inside text-gray-100 leading-relaxed font-light">
                  {job.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* Tools */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-yellow-300/20 hover:bg-yellow-300/30 text-yellow-200 text-xs font-medium px-3 py-1 rounded-full transition-colors duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkExperience;