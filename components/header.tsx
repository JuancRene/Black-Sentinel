"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Controlar el efecto de scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "/servicios", label: "Servicios" },
    { href: "/tecnologia", label: "Tecnología" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/faqs", label: "FAQs" },
  ]

  const isActiveLink = (href: string) => pathname === href

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-[#39CFE3]/20 py-3 shadow-[0_0_20px_-10px_rgba(57,207,227,0.2)]"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* --- LOGO --- */}
            <Link
              href="/"
              className="relative flex items-center gap-3 group z-50"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                 {/* Efecto de glow detrás del logo */}
                <div className="absolute inset-0 bg-[#39CFE3] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <Image
                  src="/logo-blacksentinel-icon.png"
                  alt="BlackSentinel Logo"
                  width={48}
                  height={48}
                  className="relative w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
              <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? "text-white" : "text-white"}`}>
                BlackSentinel
              </span>
            </Link>

            {/* --- DESKTOP NAVIGATION --- */}
            <nav className="hidden md:flex items-center gap-1">
              <div className="flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5 backdrop-blur-sm mr-4">
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="relative px-4 py-2 group">
                        <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                            isActiveLink(link.href) ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                        }`}>
                            {link.label}
                        </span>
                        {/* Indicador activo (punto brillante) */}
                        {isActiveLink(link.href) && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#39CFE3] rounded-full shadow-[0_0_10px_#39CFE3]" />
                        )}
                        {/* Fondo hover sutil */}
                        <span className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                    </Link>
                ))}
              </div>


            </nav>

            {/* --- MOBILE MENU TOGGLE --- */}
            <button
              className="md:hidden relative z-50 p-2 text-zinc-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY --- */}
      {/* Mueve el menú fuera del header para que ocupe toda la pantalla correctamente */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-[#050505] transition-all duration-500 flex flex-col pt-24 px-6 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        {/* Background Effects dentro del menú */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#39CFE3]/10 blur-[100px] rounded-full pointer-events-none" />
        
        <nav className="flex flex-col gap-2 relative z-10">
          {navLinks.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-white/10 hover:bg-white/5 ${
                 isActiveLink(link.href) ? "bg-white/5 border-white/10" : ""
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span className={`text-lg font-medium ${isActiveLink(link.href) ? "text-[#39CFE3]" : "text-zinc-300 group-hover:text-white"}`}>
                {link.label}
              </span>
              <ChevronRight className={`w-5 h-5 text-zinc-500 group-hover:text-[#39CFE3] transition-colors ${isActiveLink(link.href) ? "text-[#39CFE3]" : ""}`} />
            </Link>
          ))}


        </nav>

        {/* Footer info en móvil */}
        <div className="mt-auto pb-8 text-center">
            <p className="text-zinc-600 text-sm">BlackSentinel Security © 2025</p>
        </div>
      </div>
    </>
  )
}
