"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm shadow-lg shadow-primary/10" : "bg-black"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 cursor-pointer">
            <Image
              src="/logo-blacksentinel-icon.png"
              alt="BlackSentinel Logo"
              width={56}
              height={56}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link href="/servicios">
              <Button variant="ghost" className="text-white hover:text-primary hover:bg-white/5 transition-colors">
                Servicios
              </Button>
            </Link>
            <Link href="/tecnologia">
              <Button variant="ghost" className="text-white hover:text-primary hover:bg-white/5 transition-colors">
                Tecnología
              </Button>
            </Link>
            <Link href="/nosotros">
              <Button variant="ghost" className="text-white hover:text-primary hover:bg-white/5 transition-colors">
                Nosotros
              </Button>
            </Link>
            <Link href="/faqs">
              <Button variant="ghost" className="text-white hover:text-primary hover:bg-white/5 transition-colors">
                FAQs
              </Button>
            </Link>
            <Link href="/nox">
              <Button className="bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-black transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40">
                Conoce a NOX 
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10 animate-fade-in">
            <Link
              href="/servicios"
              className="block w-full text-left px-4 py-3 text-white hover:text-primary hover:bg-white/5 transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/tecnologia"
              className="block w-full text-left px-4 py-3 text-white hover:text-primary hover:bg-white/5 transition-colors"
            >
              Tecnología
            </Link>
            <Link
              href="/nosotros"
              className="block w-full text-left px-4 py-3 text-white hover:text-primary hover:bg-white/5 transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="/faqs"
              className="block w-full text-left px-4 py-3 text-white hover:text-primary hover:bg-white/5 transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="/nox"
              className="block w-full text-left px-4 py-3 text-primary font-semibold hover:bg-primary/10 transition-colors border-t border-primary/20 mt-2"
            >
              Conoce a NOX 🐾
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
