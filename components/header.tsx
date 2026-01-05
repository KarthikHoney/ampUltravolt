"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../assets/ampultravolttlogo.png"
import { Facebook, Twitter, Menu, X, ChevronDown } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  return (
    <header className="relative z-50 w-full bg-background border-b border-border">
      {/* Top Info Banner */}
      

      {/* Main Header */}
      <div className="px-2 sm:px-4 py-3 md:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Logo Section */}
          <div className="flex items-center gap-3 flex-shrink-0 w-auto">
            <Image src={logo} alt="Logo" width={300} height={100} className="w-38 sm:w-40 md:w-48 lg:w-40 xl:w-80 h-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {[
              { label: "Company", submenu: ["About Us", "Team", "Certifications"] },
              { label: "Solar Power Plant", submenu: ["Ground Mounted", "Rooftop", "Utility Scale"] },
              { label: "Energy Audit", submenu: ["Industrial", "Commercial", "Residential"] },
              { label: "Services", submenu: ["Consulting", "Installation", "Maintenance"] },
              { label: "Projects", href: "#" },
              { label: "HR", submenu: ["Careers", "Benefits", "Culture"] },
              { label: "Gallery", href: "#" },
              { label: "Locate us", href: "#" },
            ].map((item) => (
              <div key={item.label} className="relative group">
                <button className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 relative">
                  {item.label}
                  {"submenu" in item && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                </button>
                {Array.isArray(item.submenu) && (
                  <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    {item.submenu.map((sub) => (
                      <Link key={sub} href="#" className="block px-4 py-2 text-sm">
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}


              </div>
            ))}
          </nav>

          {/* Social & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 space-y-2 border-t border-border pt-4">
            {[
              { label: "Company", submenu: ["About Us", "Team", "Certifications"] },
              { label: "Solar Power Plant", submenu: ["Ground Mounted", "Rooftop", "Utility Scale"] },
              { label: "Energy Audit", submenu: ["Industrial", "Commercial", "Residential"] },
              { label: "Services", submenu: ["Consulting", "Installation", "Maintenance"] },
              { label: "Projects", href: "#" },
              { label: "HR", submenu: ["Careers", "Benefits", "Culture"] },
              { label: "Gallery", href: "#" },
              { label: "Locate us", href: "#" },
            ].map((item) => (
              <div key={item.label} className="relative">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  aria-expanded={openDropdown === item.label}
                  aria-controls={`submenu-${item.label}`}
                  className="w-full text-left px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded transition-all duration-200 flex items-center justify-between"
                >
                  {item.label}
                  {"submenu" in item && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Mobile: render submenu inline when open */}
                {Array.isArray(item.submenu) && openDropdown === item.label && (
                  <div id={`submenu-${item.label}`} className="mt-2 pl-4 space-y-1">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub}
                        href="#"
                        className="block px-3 py-2 text-sm text-foreground rounded hover:bg-secondary/30 transition-colors"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
