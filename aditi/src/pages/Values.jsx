import React from "react";
import values from "../data/values.json";

const Values = () => {
  return (
    <section
      id="values"
      className="bg-canvas text-ink px-6 py-20 md:px-24 font-sans"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 tracking-tight text-ink">
          What I Believe In
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.values.map((item, i) => (
            <div
              key={i}
              className="group flex gap-4 items-start rounded-2xl bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition duration-300 hover:shadow-lg hover:scale-[1.015]"
            >
              {/* Icon */}
              <div className="min-w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-full bg-sunbeam-light text-4xl">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-ink mb-1">
                  {item.title}
                </h3>
                <p className="text-sm leading-snug text-ink/90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;