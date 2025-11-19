import React from 'react'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-[color:#e6e0d6]">
      <Header />
      <div>{children}</div>
    </div>
  )
}
