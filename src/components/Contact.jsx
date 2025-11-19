import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6 text-center"
        >
          Let’s build something unmistakably yours
        </motion.h2>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="ring-card p-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            const data = Object.fromEntries(new FormData(e.currentTarget))
            alert(`Thanks ${data.name}! I\'ll get back to you at ${data.email}.`)
          }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm text-white/70">Name</span>
              <input name="name" required className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-sm text-white/70">Email</span>
              <input name="email" type="email" required className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
            </label>
          </div>
          <label className="block">
            <span className="text-sm text-white/70">Message</span>
            <textarea name="message" rows={5} required className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell me about your project" />
          </label>
          <button className="inline-flex items-center rounded-xl bg-white/90 text-slate-900 px-5 py-3 font-medium shadow ring-1 ring-white/40 hover:bg-white transition">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}
