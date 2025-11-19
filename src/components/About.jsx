import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-8 items-start"
        >
          <div className="md:col-span-5 ring-card p-6">
            <h3 className="text-white/90 font-semibold">Principles</h3>
            <ul className="mt-3 space-y-2 text-white/70 text-sm list-disc list-inside">
              <li>Opinionated simplicity</li>
              <li>Motion with purpose</li>
              <li>Accessible by default</li>
              <li>Systems over pages</li>
            </ul>
          </div>
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">About Me</h2>
            <p className="text-white/75 text-lg">
              Frontend-focused engineer crafting interfaces with personality. I combine design systems, animation, and
              3D to make digital products memorable and functional. I care about performance and detail.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
