import React from 'react'

export default function StoryReader() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-[color:#e6e0d6]">
      <div className="mx-auto max-w-[1300px] px-6 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
        {/* Reading area */}
        <main>
          <article className="relative mx-auto max-w-[70ch]">
            {/* subtle parchment overlay */}
            <div className="pointer-events-none absolute -inset-6 rounded-3xl opacity-[0.03] bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
            <h1 className="text-2xl sm:text-3xl font-semibold mb-8 text-[color:#c19a6b]">Ink On The Tides</h1>
            <div className="prose prose-invert max-w-none text-[color:#e6e0d6]/95">
              <p className="font-[Spectral,_serif] text-[20px] leading-[1.85] tracking-[0.005em]">
                The harbor kept its secrets in the seams between tides. I arrived at dusk, smelling of salt and unresolved letters. The ferries shouldered the water with the patience of old men, and somewhere a radio inventoried the weather like a prayer.
              </p>
              <p className="font-[Spectral,_serif] text-[20px] leading-[1.85] tracking-[0.005em] mt-6">
                You fold a page by reading it twice. That is what my mother taught me, long before she taught me to leave.
              </p>
            </div>

            {/* Choices */}
            <div className="mt-10 space-y-3">
              {choices.map((c, i) => (
                <button
                  key={c}
                  className="block w-full text-left rounded-xl border border-[#8b3a62]/30 bg-white/5 backdrop-blur-2xl px-5 py-3 text-[color:#e6e0d6] hover:translate-x-2 transition will-change-transform"
                  style={{
                    animation: `fadeIn 600ms ease forwards`,
                    animationDelay: `${i * 120}ms`,
                    opacity: 0,
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          </article>
        </main>

        {/* Memory sidebar */}
        <aside className="lg:sticky lg:top-20 h-max">
          <div className="rounded-2xl border border-[#8b3a62]/25 bg-white/5 backdrop-blur-2xl p-5">
            <Section title="Characters" items={[
              'Mara, a cartographer who never maps the same city twice',
              'Elias, keeps a harbor-side archive of unread letters',
            ]} />
            <Section title="Locations" items={[
              'North Pier — gulls gather at the rusted ladder',
              'The Brassroom — a bar that never plays the same song',
            ]} />
            <Section title="Plot Points" items={[
              'A letter arrives stamped with salt', 'A map folds itself into a boat']}/>
          </div>
        </aside>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateX(-6px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes floatY { 0%,100%{ transform: translateY(-2%); } 50%{ transform: translateY(2%);} }
        @keyframes pulseGlow { 0%,100%{ filter: drop-shadow(0 0 10px rgba(193,154,107,.25)); } 50%{ filter: drop-shadow(0 0 22px rgba(139,58,98,.45)); } }
      `}</style>
    </div>
  )
}

function Section({ title, items }) {
  return (
    <section className="not-prose mb-6">
      <div className="text-sm font-semibold text-[color:#c19a6b] mb-2">{title}</div>
      <ul className="space-y-2 text-sm text-[color:#e6e0d6]/85">
        {items.map((t) => (
          <li key={t} className="rounded-lg border border-[#8b3a62]/20 bg-white/5 px-3 py-2">{t}</li>
        ))}
      </ul>
    </section>
  )
}

const choices = [
  'Approach the archivist with the unread letters.',
  'Walk the length of the pier, listening for your name.',
  'Open the map and let the city decide the route.'
]
