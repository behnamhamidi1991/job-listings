import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-6">About NightHire</h3>
          <p className="text-zinc-400 mb-4">
            NightHire connects skilled professionals with companies building
            meaningful products.
          </p>

          <p className="text-zinc-400 mb-4">
            We focus on quality roles, transparent hiring, and opportunities
            that help careers grow.
          </p>

          <a
            href="#"
            className="inline-block px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20"
          >
            Learn More
          </a>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-indigo-500/20 blur-3xl"></div>

          <div className="relative rounded-3xl border border-white/10 bg-zinc-900 p-8">
            <p>
              "Great teams are built by matching the right people with the right
              opportunities."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
