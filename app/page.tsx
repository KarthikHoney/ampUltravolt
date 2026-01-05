"use client"

import { useState, useEffect } from "react"
import Preloader from "@/components/preloader"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import CTA from "@/components/cta"
import WelcomeSection from "@/components/welcome-section"
import Footer from "@/components/footer"

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
      <Header />
      <main className="min-h-screen bg-background">
        <Hero />
        <WelcomeSection />
        <Services />
        <CTA />
       <Footer/>
      </main>
    </>
  )
}
