import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" /> Available for work
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Building playful, modern experiences
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-prose">
              I craft interactive interfaces with delightful motion and clean, accessible design.
              Explore selected projects below.
            </p>
          </motion.div>

          <motion.div className="mt-8 flex flex-wrap gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <a href="#projects" className="inline-flex items-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 px-5 py-3 text-white shadow-lg shadow-blue-500/30 hover:scale-[1.02] active:scale-[.99] transition">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition">
              Contact Me
            </a>
          </motion.div>
        </div>

        <div className="pointer-events-none hidden lg:block" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-950" />
    </section>
  )
}
