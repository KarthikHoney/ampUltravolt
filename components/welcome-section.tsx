"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import leftimg from "../assets/68312.jpg"
import Aos from "aos"
import "aos/dist/aos.css"

export default function WelcomeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(()=>{
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    })
  },[])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-10 md:py-18 px-4 md:px-8 bg-background overflow-hidden"
    >
      {/* soft background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT : IMAGE */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg data-aos='fade-right' data-aos-duration='1000' data-aos-delay='500'">
            <Image
              src={leftimg}
              alt="Renewable Energy"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT : CONTENT */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Welcome to the Future
          </span>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-black leading-tight mb-6">
            Source of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary">
              Alternative Energy
            </span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            AmpUltraVolt is a reputed end-to-end service provider of renewable energy solutions,
            specializing in Solar Power, Wind Power, and EPC services.
          </p>

          <div className="flex items-start gap-3 p-4 rounded-xl border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <span className="text-primary text-2xl">⚡</span>
            <p className="text-sm md:text-base text-foreground">
              Our experienced engineers deliver excellence in Energy Audit, ECM, EPC, and O&M services.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
