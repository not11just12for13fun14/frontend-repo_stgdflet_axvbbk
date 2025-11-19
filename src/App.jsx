import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white bg-mesh noise-overlay">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-white/60">
          © {new Date().getFullYear()} Your Name • Crafted uniquely — not a template
        </div>
      </footer>
    </div>
  )
}

export default App
