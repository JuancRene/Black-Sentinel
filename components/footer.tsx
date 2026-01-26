"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Shield, Mail, MapPin, Phone, Github, Linkedin, Twitter, CheckCircle2, ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const currentYear = new Date().getFullYear()

  // Controlar visibilidad del botón de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 overflow-hidden font-sans">
      
      {/* --- BACKGROUND LAYERS --- */}
      {/* 1. Technical Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* 2. Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#0AB9C3]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0AB9C3]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        
        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* BRAND COLUMN (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={scrollToTop}>
              <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-black border border-white/10 rounded-xl shadow-inner group-hover:border-[#0AB9C3]/50 transition-colors duration-300">
                <Shield className="w-5 h-5 text-[#0AB9C3]" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                BlackSentinel
              </span>
            </div>

            <p className="text-zinc-400 leading-relaxed max-w-sm">
              Protección cibernética de grado militar simplificada para tu empresa. 
              Monitoreo activo, respuesta automática y tranquilidad absoluta.
            </p>

            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-green-500">Sistemas Operativos</span>
            </div>

            {/* Socials */}
            <div className="flex gap-4 pt-2">
                {[Twitter, Github, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#0AB9C3] hover:border-[#0AB9C3] transition-all duration-300">
                        <Icon className="w-4 h-4" />
                    </a>
                ))}
            </div>
          </div>


          {/* CONTACT COLUMN (Span 3) */}
          <div className="lg:col-span-3">
             <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0AB9C3]"></span>
                Contacto
            </h4>
            <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#0AB9C3] mt-0.5 shrink-0" />
                    <span className="text-zinc-400 text-sm">soporte@blacksentinel.com</span>
                </li>
                <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0AB9C3] mt-0.5 shrink-0" />
                    <span className="text-zinc-400 text-sm">Parana,<br/>Entre Rios, Argentina</span>
                </li>
                
            </ul>
          </div>

        </div>

        {/* --- DIVIDER --- */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* --- BOTTOM BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© {currentYear} BlackSentinel Security S.A. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="https://www.blacksentinelsecurity.com/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="https://www.blacksentinelsecurity.com/terminos" className="hover:text-white transition-colors">Términos</Link>
          </div>
        </div>

      </div>

      {/* --- SCROLL TO TOP BUTTON --- */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#0AB9C3] text-black shadow-[0_0_20px_rgba(10,185,195,0.4)] hover:shadow-[0_0_30px_rgba(10,185,195,0.6)] hover:-translate-y-1 transition-all duration-300 ${
            showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Volver arriba"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

    </footer>
  )
}
