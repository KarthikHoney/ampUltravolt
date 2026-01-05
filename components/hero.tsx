"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const title = "AMPULTRAVOLT"
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let index = 0
    const interval = setInterval(() => {
      if (index < title.length) {
        setDisplayedText(title.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 80)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-black pt-10 sm:pt-16 md:pt-20 lg:pt-24">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20 dark:opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgb(0,191,255)_25%,rgb(0,191,255)_26%,transparent_27%,transparent_74%,rgb(0,191,255)_75%,rgb(0,191,255)_76%,transparent_77%,transparent)] bg-[length:50px_50px]"></div>
      </div>

      {/* Floating orbs */}
      <div className="hidden sm:block absolute top-10 sm:top-16 md:top-20 left-10 sm:left-20 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="hidden sm:block absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-yellow-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-3 sm:px-4 md:px-6 fade-in-on-scroll in-view">
        {/* Subtitle */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <p className="text-cyan-400 text-xs sm:text-sm md:text-base font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-4">
            ⚡ Next Generation Power Technology
          </p>
        </div>

        {/* Main Title with Animation */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-cyan-400 to-yellow-400">
            {displayedText}
          </span>
          <span className="animate-pulse text-yellow-400">|</span>
        </h1>

        {/* Subtitle Text */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 dark:text-gray-300 mb-6 sm:mb-8 md:mb-12 font-light leading-relaxed max-w-2xl mx-auto px-1 sm:px-2">
          Unleash revolutionary power solutions engineered for maximum performance and reliability
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center">
          <button className="button-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg font-bold hover:shadow-[0_0_30px_rgba(255,215,0,0.8)] transition-all duration-300 w-full sm:w-auto">
            Get Started
          </button>
          <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg font-bold border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_30px_rgba(0,191,255,0.4)] transition-all duration-300 w-full sm:w-auto">
            Learn More
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">Scroll to explore</p>
          <svg className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
