"use client"

import { useEffect, useRef, useState } from "react"
import ServiceCard from "./service-card"

const services = [
  {
    icon: "⚡",
    title: "Ultra-Fast Performance",
    description:
      "Experience lightning-fast power delivery with advanced semiconductor technology designed for peak efficiency.",
  },
  {
    icon: "🔋",
    title: "Advanced Energy Storage",
    description: "Intelligent battery systems that learn and adapt to your power consumption patterns in real-time.",
  },
  {
    icon: "🛡️",
    title: "Smart Protection",
    description:
      "Multi-layered security systems ensuring your devices stay safe from power fluctuations and overloads.",
  },
  {
    icon: "🌐",
    title: "IoT Integration",
    description: "Seamlessly connect all your devices with our cloud-enabled power management ecosystem.",
  },
  {
    icon: "♻️",
    title: "Eco-Friendly Power",
    description: "Sustainable energy solutions that reduce environmental impact without compromising performance.",
  },
  {
    icon: "📊",
    title: "Real-Time Analytics",
    description: "Monitor power usage with detailed analytics and optimization recommendations.",
  },
]

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(services.length).fill(false))
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = containerRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background dark:bg-black px-3 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400">
              Our Solutions
            </span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base md:text-lg px-2">Cutting-edge technology for the future of power</p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`transform transition-all duration-700 ${
                visibleCards[index] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
