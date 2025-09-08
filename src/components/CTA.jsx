import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="book" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_10%,rgba(34,197,94,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
            <div className="absolute -top-28 -left-16 h-64 w-64 rounded-full blur-3xl bg-fuchsia-500/20" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full blur-3xl bg-cyan-400/20" />
          </div>

          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">Reserve your seat among the stars</h3>
              <p className="mt-3 text-white/80">Limited flights each season. Join the priority list and get early access to itineraries, training sessions, and launch windows.</p>

              <form className="mt-6 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="you@galaxy.mail"
                  className="w-full rounded-full border border-white/15 bg-black/40 px-5 py-3 text-sm outline-none ring-0 placeholder:text-white/50 focus:border-white/30"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-medium text-black shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition-opacity"
                >
                  Join Waitlist
                </button>
              </form>

              <p className="mt-3 text-xs text-white/60">By joining, you agree to our terms and to receive flight updates. No spam, only stardust.</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                <div className="h-full w-full grid place-items-center">
                  <div className="text-center px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                      Pre-flight Training Preview
                    </div>
                    <h4 className="mt-4 text-lg font-semibold">What to expect before launch</h4>
                    <p className="mt-2 text-sm text-white/80">Fit checks, sim rides, and a taste of zero-g to tune your senses for the neon-lit cosmic highways.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <footer id="contact" className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Spacy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default CTA;
