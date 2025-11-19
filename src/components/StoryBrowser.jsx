import React from 'react'
import { Link } from 'react-router-dom'

export default function StoryBrowser() {
  const stories = demoStories
  return (
    <div className="relative min-h-screen bg-[#0b0b12] text-[color:#e6e0d6]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(139,58,98,0.16),transparent)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16">
        <div className="flex items-center justify-between gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">Your Stories</h2>
          <Link to="/read/1" className="rounded-xl px-4 py-2 text-sm font-medium text-[#0b0b12] bg-[linear-gradient(135deg,#8b3a62,#c19a6b)] shadow-[0_12px_40px_-12px_rgba(139,58,98,0.6)] hover:brightness-110 transition">New Story</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((s) => (
            <TiltCard key={s.id}>
              <Link to={`/read/${s.id}`} className="block p-5">
                <div className="text-lg font-semibold mb-2 text-[color:#e6e0d6]">{s.title}</div>
                <p className="text-sm text-[color:#c19a6b]/90 line-clamp-3">{s.preview}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-[color:#8b3a62]">
                  <span>{s.turns} turns</span>
                  <span>{s.date}</span>
                </div>
              </Link>
              <button className="mx-5 mb-4 mt-1 text-xs text-[color:#8b3a62]/80 hover:text-[color:#c19a6b]">Delete</button>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  )
}

function TiltCard({ children }) {
  return (
    <div className="group relative rounded-2xl border border-[#8b3a62]/20 bg-white/5 backdrop-blur-2xl will-change-transform transition-transform">
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(160px_160px_at_var(--x)_var(--y),rgba(139,58,98,0.18),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="[transform:perspective(800px)_rotateX(var(--rx))_rotateY(var(--ry))] transition-transform duration-200">
        {children}
      </div>
      {/* Mobile: no tilt, so states are mostly static */}
      <style>{`
        @media (pointer:fine) {
          .group:hover { box-shadow: 0 18px 60px -25px rgba(139,58,98,.45); }
          .group { transform: perspective(800px) rotateX(var(--rx,0)) rotateY(var(--ry,0)); }
          .group:hover { --rx: calc((var(--my,0.5) - 0.5) * -8deg); --ry: calc((var(--mx,0.5) - 0.5) * 10deg); }
        }
      `}</style>
      <MouseVars />
    </div>
  )
}

function MouseVars() {
  return (
    <div
      className="absolute inset-0"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        const mx = (e.clientX - r.left) / r.width
        const my = (e.clientY - r.top) / r.height
        e.currentTarget.parentElement.style.setProperty('--x', `${e.clientX - r.left}px`)
        e.currentTarget.parentElement.style.setProperty('--y', `${e.clientY - r.top}px`)
        e.currentTarget.parentElement.style.setProperty('--mx', mx)
        e.currentTarget.parentElement.style.setProperty('--my', my)
      }}
    />
  )
}

const demoStories = [
  { id: 1, title: 'Ink On The Tides', preview: 'The harbor kept its secrets in the seams between tides. I arrived at dusk, smelling of salt and unresolved letters...', turns: 124, date: 'Oct 12' },
  { id: 2, title: 'The Atlas of Quiet Cities', preview: 'A map unfolded inside the elevator between floors—paper breathing, alleys rearranging themselves...', turns: 76, date: 'Nov 02' },
  { id: 3, title: 'Rooms We Left Unlit', preview: 'Some nights the apartment learned to hum in a different key, as if a second home lay directly beneath it...', turns: 98, date: 'Nov 15' },
]
