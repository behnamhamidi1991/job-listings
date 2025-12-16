import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-zinc-500">
          @ 2025 NightHire. All Rights Reserved.
        </p>

        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#" className="hover:text-white">
            Twitter
          </a>
          <a href="#" className="hover:text-white">
            GitHub
          </a>
          <a href="#" className="hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
