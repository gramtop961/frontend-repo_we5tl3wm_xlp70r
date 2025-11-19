import React from 'react'

// Aurora background with ultra-subtle motion and floating orbs
// Pure CSS keyframes, GPU-accelerated (transform/opacity only)
export default function Aurora({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute inset-0 bg-[#0b0b12]" />
      {/* Soft diagonal gradient wash */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#1a0f19_0%,rgba(26,15,25,0)_40%,rgba(90,45,74,0.35)_75%,#2a1625_100%)] mix-blend-screen opacity-80" />
      {/* Animated aurora ribbons */}
      <div className="absolute -inset-1 blur-3xl [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
        <div className="absolute left-1/2 top-1/2 h-[80vmax] w-[80vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_30deg,rgba(139,58,98,0.25),rgba(193,154,107,0.18),rgba(90,45,74,0.22),rgba(139,58,98,0.25))] animate-[spin_60s_linear_infinite]" />
      </div>
      {/* Floating orbs (very subtle) */}
      <div className="absolute inset-0">
        <Orb className="left-[10%] top-[20%]" size="28vmin" color="rgba(139,58,98,0.18)" delay="0s" />
        <Orb className="right-[12%] top-[35%]" size="22vmin" color="rgba(193,154,107,0.16)" delay="-5s" />
        <Orb className="left-[18%] bottom-[18%]" size="26vmin" color="rgba(90,45,74,0.22)" delay="-12s" />
      </div>
    </div>
  )
}

function Orb({ className = '', size = '24vmin', color = 'rgba(139,58,98,0.2)', delay = '0s' }) {
  return (
    <div
      className={`absolute blur-2xl will-change-transform ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, rgba(0,0,0,0) 70%)`,
        animation: `floatY 60s ease-in-out infinite`,
        animationDelay: delay,
      }}
    />
  )
}
