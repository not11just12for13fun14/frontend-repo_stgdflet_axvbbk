import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 mask-blob">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Available for selective projects
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              I design interfaces with personality
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-prose">
              Tactile motion, bold typography, and a playful 3D layer. Every page should feel alive and uniquely yours.
            </p>
          </motion.div>

          <motion.div className="mt-8 flex flex-wrap gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <a href="#projects" className="inline-flex items-center rounded-xl bg-white/90 text-slate-900 px-5 py-3 font-medium shadow ring-1 ring-white/40 hover:bg-white transition">
              See Work
            </a>
            <a href="#contact" className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition">
              Start a Project
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:block lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="ring-card p-6"
          >
            <h3 className="text-white/90 font-semibold">Signature Approach</h3>
            <p className="text-white/70 mt-2 text-sm">
              I blend systems thinking with playful details: micro-interactions, custom meshes, and expressive layouts.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/70">
              <li>Motion-first UX</li>
              <li>3D on the web</li>
              <li>Accessible by default</li>
              <li>Design systems</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
