"use client"

import { ThemeProvider } from "next-themes"
import React from "react"

export function TProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="theme-preference">
      {children}
    </ThemeProvider>
  )
}
