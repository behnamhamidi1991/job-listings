import React from "react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[400px] -translate-x-1/2 rounded-full bg-indigo-500/25 blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-28 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Find Your Next <span className="text-indigo-400">Career Move</span>{" "}
        </h2>
        <p className="max-2-2xl mx-auto text-zinc-400 mb-10">
          Discover remote and on-site oppurtunities from companies that value
          talent, glroth and impact
        </p>

        <a
          href="#jobs"
          className="inline-block px-8 py-3 rounded-full rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition"
        >
          Browse Jobs
        </a>
      </div>
    </div>
  );
};

export default Hero;
