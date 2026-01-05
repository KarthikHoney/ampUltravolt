"use client"

import type React from "react"

import { useState } from "react"

export default function CTA() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setEmail("")
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-slate-50 dark:from-black dark:to-slate-950 px-3 sm:px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-yellow-400 to-cyan-400">
            Ready to Transform Your Power?
          </span>
        </h2>

        <p className="text-slate-700 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 px-2">
          Join thousands of customers experiencing the AmpUltraVolt difference. Get early access to our latest
          innovations.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-foreground placeholder-slate-500 dark:placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-sm sm:text-base"
          />
          <button
            type="submit"
            className="button-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold whitespace-nowrap hover:shadow-[0_0_30px_rgba(255,215,0,0.8)] transition-all duration-300 text-sm sm:text-base"
          >
            {submitted ? "✓ Sent!" : "Notify Me"}
          </button>
        </form>

        {submitted && <p className="text-green-400 animate-pulse text-sm sm:text-base">Thank you! Check your email soon.</p>}

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 text-slate-600 dark:text-gray-400 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">✓</span> 100% Secure
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">✓</span> Privacy Protected
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">✓</span> No Spam
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-slate-300 dark:border-slate-800">
          <p className="text-slate-500 dark:text-gray-500 text-xs sm:text-sm">© 2026 AmpUltraVolt. All rights reserved. ⚡</p>
        </div>
      </div>
    </section>
  )
}
