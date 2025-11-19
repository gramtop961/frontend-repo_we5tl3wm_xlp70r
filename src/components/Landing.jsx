import React from 'react'
import { Link } from 'react-router-dom'
import Aurora from './Aurora'

export default function Landing() {
  return (
    <div className="relative min-h-screen bg-[#0b0b12] text-[color:#e6e0d6] overflow-hidden">
      <Aurora />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24 text-center">
        {/* Logo with pulsing glow */}
        <div className="mx-auto mb-8 inline-flex items-center gap-3">
          <div className="relative">
            <div className="h-14 w-14 rounded-xl bg-[linear-gradient(135deg,#c19a6b,#e6e0d6,#8b3a62)] shadow-[0_0_45px_rgba(193,154,107,0.35)] animate-[pulseGlow_4s_ease-in-out_infinite]" />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-[#c19a6b]/40" />
          </div>
          <div className="text-5xl font-semibold tracking-tight">
            <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,#c19a6b,#e6e0d6,#8b3a62)]">TaleQuill</span>
          </div>
        </div>

        <h1 className="mx-auto max-w-3xl text-4xl sm:text-5xl leading-tight font-semibold text-[color:#e6e0d6]">
          AI Storytelling That Actually Remembers
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[color:#c19a6b]/90 text-lg">
          Cinematic, immersive narratives powered by infinite memory. No filters, no friction—just pure creation.
        </p>

        <div className="mt-10">
          <Link to="/browse" className="inline-block rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-[#0b0b12] shadow-[0_12px_40px_-12px_rgba(139,58,98,0.6)] bg-[linear-gradient(135deg,#8b3a62,#c19a6b)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c19a6b] transition">
            Start Your Story →
          </Link>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-[#8b3a62]/25 bg-white/5 backdrop-blur-2xl p-6 text-left transition will-change-transform hover:scale-[1.02] hover:shadow-[0_10px_40px_-12px_rgba(139,58,98,0.45)]"
              style={{
                boxShadow: 'inset 0 1px 0 rgba(230,224,214,0.06)',
              }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#8b3a62]/25 group-hover:ring-[#c19a6b]/40 transition" />
              <div className="mb-3 text-[color:#c19a6b] font-semibold">{f.title}</div>
              <div className="text-sm text-[color:#e6e0d6]/85">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const features = [
  { title: 'Perfect Memory', desc: 'RAG-powered recall of characters, places, and threads—your story never forgets.' },
  { title: 'No Content Filters', desc: 'Complete creative freedom—your voice, your boundaries.' },
  { title: 'Premium AI', desc: 'Sophisticated prose tuned for literary quality over gaming tropes.' },
]
