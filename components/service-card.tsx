"use client"

import { useState } from "react"

interface ServiceCardProps {
  icon: string
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="service-card relative p-6 sm:p-8 rounded-xl bg-slate-900/50 dark:bg-slate-900/50 border border-slate-800 dark:border-slate-800 hover:border-cyan-400 transition-all duration-300 group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="text-4xl sm:text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <h3 className="text-lg sm:text-xl font-bold text-foreground dark:text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-700 dark:text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-slate-900 dark:group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Border glow effect on hover */}
      <div
        className={`absolute inset-0 rounded-xl pointer-events-none transition-all duration-300 ${isHovered ? "shadow-[inset_0_0_20px_rgba(0,191,255,0.2)]" : ""}`}
      ></div>
    </div>
  )
}
