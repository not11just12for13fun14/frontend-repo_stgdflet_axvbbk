import { motion } from 'framer-motion'
import { Github, ExternalLink, Sparkles } from 'lucide-react'

// Distinctive layout: asymmetrical cards with emphasis on story rather than thumbnails
const sampleProjects = [
  {
    title: 'Realtime Dashboard',
    desc: 'Live telemetry with motion-driven states and expressive data ink.',
    tags: ['React', 'WebSockets', 'Framer Motion'],
    link: '#',
    repo: '#',
  },
  {
    title: '3D Product Explorer',
    desc: 'Narrative-led 3D browsing with Spline and custom gestures.',
    tags: ['React', 'Spline', 'UX'],
    link: '#',
    repo: '#',
  },
  {
    title: 'AI Note Taker',
    desc: 'Semantic search, summarization, and buttery microinteractions.',
    tags: ['FastAPI', 'MongoDB', 'AI'],
    link: '#',
    repo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_0%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3 mb-10">
          <Sparkles className="text-blue-300" size={20} />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {sampleProjects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`ring-card p-6 relative overflow-hidden ${
                idx % 3 === 0 ? 'lg:col-span-7' : idx % 3 === 1 ? 'lg:col-span-5' : 'lg:col-span-6'
              }`}
            >
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 blur-3xl" />

              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-white/75">{p.desc}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs rounded-full bg-slate-800/80 border border-white/10 text-white/70 px-2 py-1">{t}</span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-4">
                <a href={p.link} className="inline-flex items-center gap-1 text-white/90 hover:text-white transition">
                  <ExternalLink size={16} /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-white/90 hover:text-white transition">
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
