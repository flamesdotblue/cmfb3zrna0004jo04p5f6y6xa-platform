import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex items-center" id="home">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_10%,rgba(88,28,135,0.35),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
            Now Boarding: 2089 Season
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
            Journey beyond the horizon with
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-indigo-300"> Spacy</span>
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
            A futuristic space travel agency offering immersive voyages across a trippy galaxy rollercoaster. Experience neon futurism, cosmic vistas, and zero-gravity thrills.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#book" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-medium text-black shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition-opacity">
              Book Your Flight
            </a>
            <a href="#experiences" className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/90 hover:bg-white/10 transition-colors">
              Explore Experiences
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
