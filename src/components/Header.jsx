import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl/50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="group inline-flex items-center gap-3">
          <div className="relative">
            <div className="h-8 w-8 rounded-md bg-[linear-gradient(135deg,#8b3a62,#c19a6b)] shadow-[0_0_24px_rgba(139,58,98,0.35)]" />
            <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-[#c19a6b]/30" />
          </div>
          <div className="font-semibold tracking-tight text-[color:#e6e0d6] text-lg">
            <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,#c19a6b, #e6e0d6, #8b3a62)]">TaleQuill</span>
          </div>
        </Link>

        <div className="flex items-center gap-2 text-[color:#c19a6b]">
          <button className="rounded-lg border border-[#8b3a62]/30 px-3 py-1.5 text-sm hover:border-[#c19a6b]/50 hover:text-[color:#e6e0d6] transition-colors">
            Memory
          </button>
          <button className="rounded-lg border border-[#8b3a62]/30 px-3 py-1.5 text-sm hover:border-[#c19a6b]/50 hover:text-[color:#e6e0d6] transition-colors">
            Dark
          </button>
        </div>
      </div>
    </header>
  )
}
