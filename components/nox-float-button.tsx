"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sparkles } from "lucide-react"

export function NoxFloatButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Mostrar el botón después de un pequeño delay para no abrumar al inicio
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Link href="/nox">
      <div
        className={`fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-40 group transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* --- CHAT BUBBLE (Tooltip) --- */}
        <div
            className={`absolute bottom-full right-0 mb-4 transition-all duration-300 origin-bottom-right ${
                isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
            }`}
        >
          <div className="relative bg-[#050505]/90 border border-[#0AB9C3]/30 rounded-2xl rounded-br-none px-5 py-3 shadow-[0_0_30px_-10px_rgba(10,185,195,0.3)] backdrop-blur-md min-w-[200px]">
            {/* Typing Effect Indicator */}
            <div className="flex items-center gap-2 mb-1">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-mono text-[#0AB9C3] uppercase tracking-wider">NOX System Active</span>
            </div>
            
            <p className="text-sm text-white font-medium leading-snug">
              ¿Todo seguro por acá? <br/>
              <span className="text-zinc-400 text-xs">Hacé clic para conocerme.</span>
            </p>

            {/* Decorative Corner Glow */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#0AB9C3]/20 to-transparent rounded-tr-2xl" />
          </div>
        </div>

        {/* --- NOX AVATAR CONTAINER --- */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 cursor-pointer">
          
          {/* Anillos de energía giratorios */}
          <div className="absolute inset-[-4px] rounded-full border border-[#0AB9C3]/40 border-dashed animate-[spin_8s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-[-4px] rounded-full border border-[#0AB9C3]/20 animate-[spin_8s_linear_infinite_reverse] opacity-50" />

          {/* Glow de fondo */}
          <div className="absolute inset-0 bg-[#0AB9C3] rounded-full blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 animate-pulse" />
          
          {/* Círculo Principal */}
          <div className="relative w-full h-full bg-[#0A0A0A] rounded-full border-2 border-[#0AB9C3]/50 group-hover:border-[#0AB9C3] shadow-lg shadow-[#0AB9C3]/20 transition-all duration-300 overflow-hidden group-hover:scale-105 group-hover:-translate-y-1">
            
            {/* Fondo interior radial */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0AB9C3]/20 to-transparent opacity-50" />
            
            <Image
              src="/images/nox2.png"
              alt="NOX Avatar"
              width={80}
              height={80}
              className="w-full h-full object-contain scale-110 translate-y-1 transition-transform duration-300 group-hover:scale-125 group-hover:translate-y-2"
              priority
            />

            {/* Brillo en el vidrio (Glass reflection) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-full" />
          </div>

          {/* Badge de notificación (opcional, para llamar la atención) */}
          <div className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0AB9C3] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-[#0AB9C3] items-center justify-center">
                <Sparkles className="w-3 h-3 text-black" />
            </span>
          </div>

        </div>
      </div>
    </Link>
  )
}
