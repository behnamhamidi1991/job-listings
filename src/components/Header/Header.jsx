import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold tracking-wide text-indigo-400">
          Nighthire
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
          <a href="#">Home</a>
          <a href="#">Listings</a>
          <a href="#">About</a>
          <a href="#">Post A Job</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
