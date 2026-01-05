"use client"

import { useState, useEffect } from "react"
import Preloader from "@/components/preloader"
import CustomCursor from "@/components/custom-cursor"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import CTA from "@/components/cta"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <Preloader />}
      <CustomCursor />
      <Header />
      <main className="min-h-screen bg-background">
        <Hero />
        <Services />
        <CTA />
      </main>
    </>
  )
}
