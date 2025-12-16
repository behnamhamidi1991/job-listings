import React from "react";

const Jobs = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-24">
      <h3 className="text-3xl font-bold mb-12">Latest Job Openings</h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* JOB CARD */}
        <div className="group rounded-3xl bg-white/5 border border-white/10 p-6 hover:border-indigo-500/40 transition">
          <span className="text-xs uppercase tracking-wide text-indigo-400">
            Full Time . Remote
          </span>

          <h4 className="text-xl font-semibold mt-3 mb-3 group-hover:text-indigo-400 transition">
            Senior Frontend Developer
          </h4>

          <p className="text-sm text-zinc-400 mb-5">
            Work with React, Tailwind, and modern tooling to build beatuiful
            user experience.
          </p>

          <a href="#" className="text-sm text-indigo-400 hover:underline">
            View Job
          </a>
        </div>

        {/* JOB CARD */}
        <div className="group rounded-3xl bg-white/5 border border-white/10 p-6 hover:border-indigo-500/40 transition">
          <span className="text-xs uppercase tracking-wide text-fuchsia-400">
            Contract . Hybrid
          </span>

          <h4 className="text-xl font-semibold mt-3 mb-3 group-hover:text-fuchsia-400 transition">
            Backend Enginner (Laravel)
          </h4>

          <p className="text-sm text-zinc-400 mb-5">
            Design APIs, optimize databases, and work closely with product
            teams.
          </p>

          <a href="#" className="text-sm text-fuchsia-400 hover:underline">
            View Job
          </a>
        </div>

        {/* JOB CARD */}
        <div className="group rounded-3xl bg-white/5 border border-white/10 p-6 hover:border-indigo-500/40 transition">
          <span className="text-xs uppercase tracking-wide text-cyan-400">
            Full-Time . On-Site
          </span>

          <h4 className="text-xl font-semibold mt-3 mb-3 group-hover:text-cyan-400 transition">
            UI / UX Designer
          </h4>

          <p className="text-sm text-zinc-400 mb-5">
            Craft intuitive interfaces and design systems for scalable products.
          </p>

          <a href="#" className="text-sm text-cyan-400 hover:underline">
            View Job
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
