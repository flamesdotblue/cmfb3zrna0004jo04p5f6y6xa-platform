import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="backdrop-blur-md/50 bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 border border-white/10">
              <Rocket className="h-5 w-5 text-fuchsia-400" />
            </div>
            <span className="text-lg font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-indigo-300">
              Spacy
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#experiences" className="hover:text-white transition-colors">Experiences</a>
            <a href="#fleet" className="hover:text-white transition-colors">Fleet</a>
            <a href="#safety" className="hover:text-white transition-colors">Safety</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#book" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors text-sm">Book Now</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
