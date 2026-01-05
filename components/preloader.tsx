"use client"

import { useEffect, useState } from "react"

export default function Preloader() {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black transition-opacity duration-500 ${!isAnimating ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="relative w-32 h-32">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-yellow-400 border-r-cyan-400 animate-spin"></div>

        {/* Middle pulsing circle */}
        <div className="absolute inset-4 rounded-full border border-yellow-400 preloader-circle"></div>

        {/* Inner content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-yellow-400 text-2xl font-bold mb-2 shimmer-text">⚡</div>
            <p className="text-yellow-400 text-xs font-mono tracking-widest">INITIALIZING</p>
          </div>
        </div>

        {/* Lightning bolts */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          <span className="text-yellow-400 text-3xl lightning-bolt">↯</span>
        </div>
        <div className="absolute -bottom-2 right-0">
          <span className="text-cyan-400 text-2xl lightning-bolt" style={{ animationDelay: "0.3s" }}>
            ↯
          </span>
        </div>
      </div>
    </div>
  )
}
