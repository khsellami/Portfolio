"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code, Terminal } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#competitive-programming" },
    { label: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "navbar-glass shadow-2xl border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-10 w-1 h-1 bg-primary/30 rounded-full animate-pulse"></div>
        <div
          className="absolute top-4 right-20 w-1 h-1 bg-accent/30 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-2 left-1/3 w-1 h-1 bg-primary/20 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-accent transition-all duration-300 font-[family-name:var(--font-playfair)] hover:scale-110 group"
          >
            <div className="relative">
              <Code className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:bg-primary/40 transition-all duration-300"></div>
            </div>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">KS</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-card/30 backdrop-blur-md rounded-full px-2 py-1 border border-primary/10">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium group overflow-hidden rounded-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10 text-sm">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                <div className="absolute inset-0 bg-primary/5 transform scale-0 group-hover:scale-110 transition-transform duration-500 rounded-full"></div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:bg-primary/10 transition-all duration-300 hover:scale-110 relative group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative">
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 animate-scale-in text-primary" />
              ) : (
                <Menu className="h-5 w-5 animate-scale-in group-hover:text-primary transition-colors duration-300" />
              )}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 navbar-glass rounded-xl shadow-2xl animate-fade-in-up border border-primary/20 relative overflow-hidden">
            {/* Tech background pattern for mobile menu */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-2 left-4 text-xs font-mono text-primary">{"<nav>"}</div>
              <div className="absolute bottom-2 right-4 text-xs font-mono text-primary">{"</nav>"}</div>
            </div>

            <div className="flex flex-col space-y-1 relative z-10">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left px-4 py-3 text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300 font-medium rounded-lg mx-2 group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block relative z-10">
                    {item.label}
                  </span>
                  <Terminal className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
