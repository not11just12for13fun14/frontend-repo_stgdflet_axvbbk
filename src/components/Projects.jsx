import { motion } from 'framer-motion'
import { Github, ExternalLink, Sparkles } from 'lucide-react'

const sampleProjects = [
  {
    title: 'Realtime Dashboard',
    desc: 'WebSocket-powered analytics with fluid motion and dark neon vibes.',
    tags: ['React', 'WebSockets', 'Framer Motion'],
    link: '#',
    repo: '#',
  },
  {
    title: '3D Product Explorer',
    desc: 'Spline + React for immersive product storytelling in the browser.',
    tags: ['React', 'Spline', 'UX'],
    link: '#',
    repo: '#',
  },
  {
    title: 'AI Note Taker',
    desc: 'Semantic search, summarization, and buttery-smooth microinteractions.',
    tags: ['FastAPI', 'MongoDB', 'AI'],
    link: '#',
    repo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3 mb-10">
          <Sparkles className="text-blue-400" size={20} />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProjects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition overflow-hidden"
            >
              <div className="h-40 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 mb-5 ring-1 ring-white/10 group-hover:scale-[1.02] transition" />
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.desc}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs rounded-full bg-slate-800/80 border border-white/10 text-white/70 px-2 py-1">{t}</span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3">
                <a href={p.link} className="inline-flex items-center gap-1 text-blue-300 hover:text-white transition">
                  <ExternalLink size={16} /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-blue-300 hover:text-white transition">
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
