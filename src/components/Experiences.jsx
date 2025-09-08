import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Star, Compass, Shield, Users, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Orbital Coasters',
    desc: 'Ride glowing pathways around moons and rings with liquid gradient trails and zero-g turns.',
  },
  {
    icon: Star,
    title: 'Celestial Suites',
    desc: 'Stay in panoramic starview cabins with interactive holographic sky maps and ambient nebula lighting.',
  },
  {
    icon: Compass,
    title: 'Explorers’ Paths',
    desc: 'Guided EVA trails through auroras and comet tails, mapped by quantum navigation beacons.',
  },
  {
    icon: Shield,
    title: 'Quantum Safety',
    desc: 'Redundant field shields, AI piloting, and bio-synced suits certified by the Interstellar Council.',
  },
  {
    icon: Users,
    title: 'Crewed by Experts',
    desc: 'Astronaut hosts, astro-chefs, and VR historians curate unforgettable cosmic moments.',
  },
  {
    icon: Sparkles,
    title: 'Neon Futurism',
    desc: 'Holographic gradients, immersive soundscapes, and interactive digital art installations.',
  },
];

const Experiences = () => {
  return (
    <section id="experiences" className="relative py-24 bg-gradient-to-b from-black via-[#070712] to-black">
      <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden>
        <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl bg-fuchsia-600/20" />
        <div className="absolute bottom-0 right-24 h-64 w-64 rounded-full blur-3xl bg-cyan-500/10" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Designed for cosmic wonder</h2>
          <p className="mt-3 text-white/80">Every journey blends science, art, and play—crafted to be safe, spectacular, and deeply human.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden>
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-2xl" />
                <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-cyan-400/20 blur-2xl" />
              </div>
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20">
                  <it.icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-white/80">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
