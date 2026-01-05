"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../assets/ampultralogo.png"
import { Facebook, Twitter, Menu, X, ChevronDown } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  return (
    <header className="w-full bg-background border-b border-border overflow-x-hidden">
      {/* Top Info Banner */}
      <div className=" hidden md:block bg-gradient-to-r from-accent via-accent to-orange-600 text-white py-2 px-2 sm:px-4 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <p className=" text-xs sm:text-sm md:text-lg font-semibold text-center line-clamp-2 sm:line-clamp-1 marquee-text">We undertake EPC Turnkey Projects EHV/HV & MV Works, Solar Power upto 100MW and Operation & Maintenance (AMC) of Solar Power Plant & Factory etx.,</p>
        </div>
      </div>

      {/* Projects Bar */}
      <div className="hidden md:block bg-secondary/50 border-b border-border px-2 sm:px-4 py-2 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <p className=" text-xs md:text-lg text-muted-foreground text-center line-clamp-2 sm:line-clamp-1 marquee-text">
            Ongoing Projects 1.Development of 105MW solar projects at ACME Cleantech Solutions Pvt Ltd from Various locations in Karnataka. a.Guleddagudda-15 MW b.M.K.Hubli- 15 MW c.Sankeshwar- 15 MW d.Kudligi -20 MW e.Choranuru - 20 MW f.Pallicheru - 20 MW 
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-2 sm:px-4 py-3 md:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Logo Section */}
          <div className="flex items-center gap-3 flex-shrink-0 w-auto">
            <Image src={logo} alt="Logo" width={300} height={100} className="w-24 sm:w-32 md:w-48 lg:w-40 xl:w-80 h-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
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
                {"submenu" in item && (
                  <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub}
                        href="#"
                        className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-secondary/50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                      >
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
            <div className="hidden sm:flex gap-2">
              <Link
                href="#"
                className="p-2 text-accent hover:text-primary hover:bg-secondary/30 rounded-lg transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="p-2 text-accent hover:text-primary hover:bg-secondary/30 rounded-lg transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>

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
              <div key={item.label}>
                <button
                  onClick={() => toggleDropdown(item.label)}
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
                {"submenu" in item && openDropdown === item.label && (
                  <div className="pl-4 space-y-1 mt-1">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub}
                        href="#"
                        className="block px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-secondary/30 rounded transition-colors duration-200"
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
