"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, Shield, Clock, Zap, Cpu, Activity } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function NoxTeaser() {
  const [revealed, setRevealed] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden bg-[#050505]"
    >
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Luz ambiental detrás de NOX */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#0AB9C3]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          
          {/* --- LEFT SIDE: TEXTO --- */}
          <div
            className={`space-y-8 text-center md:text-left transition-all duration-1000 ${
              revealed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Badge de Sistema */}
            <div className="inline-flex items-center gap-2 bg-[#0AB9C3]/5 border border-[#0AB9C3]/20 rounded-full px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0AB9C3] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0AB9C3]"></span>
              </span>
              <span className="text-xs font-mono font-semibold text-[#0AB9C3] uppercase tracking-wider">Entidad de Defensa IA</span>
            </div>

            {/* Título */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              No estás solo. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
                Alguien cuida tu espalda.
              </span>
            </h2>

            {/* Descripción */}
            <p className="text-lg text-zinc-400 leading-relaxed max-w-lg mx-auto md:mx-0">
              Conocé a <strong className="text-white">NOX</strong>, el núcleo de inteligencia que vive dentro de BlackSentinel. 
              Él no duerme, no se distrae y procesa millones de amenazas por segundo para que vos puedas descansar.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 { icon: Eye, title: "Visión Global", desc: "Monitoreo 24/7" },
                 { icon: Zap, title: "Reacción Instantánea", desc: "Bloqueo en <1ms" },
                 { icon: Cpu, title: "Aprendizaje Continuo", desc: "IA Adaptativa" },
                 { icon: Shield, title: "Defensa Activa", desc: "Sin falsos positivos" }
               ].map((item, i) => (
                 <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#0AB9C3]/30 transition-colors duration-300">
                    <div className="mt-1 w-8 h-8 rounded-lg bg-[#0AB9C3]/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-[#0AB9C3]" />
                    </div>
                    <div>
                        <h4 className="text-white font-medium text-sm">{item.title}</h4>
                        <p className="text-zinc-500 text-xs">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            {/* Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/nox">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-[#0AB9C3] hover:bg-[#09a0a9] text-black font-bold rounded-xl shadow-[0_0_20px_-5px_rgba(10,185,195,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(10,185,195,0.6)]"
                >
                  <span className="flex items-center gap-2">
                    Conocer a NOX
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* --- RIGHT SIDE: NOX VISUALIZATION --- */}
          <div
            className={`flex justify-center items-center relative transition-all duration-1000 delay-300 ${
              revealed ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* IMAGEN CENTRAL SIN MARCO */}
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] flex items-center justify-center animate-float">
                <Image
                    src="/images/nox4.png"
                    alt="NOX Character"
                    width={500}
                    height={500}
                    className="object-contain drop-shadow-[0_0_50px_rgba(10,185,195,0.4)] w-full h-full"
                />
            </div>
          </div>
        </div>

        {/* --- STATS BAR (HUD STYLE) --- */}
        <div 
            className={`mt-20 relative max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
                revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
            <div className="absolute inset-0 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-sm" />
            <div className="relative grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                {[
                    { label: "Amenazas Bloqueadas", value: "+10k", sub: "Este mes" },
                    { label: "Uptime Garantizado", value: "99.9%", sub: "Servicio continuo" },
                    { label: "Tiempo de Respuesta", value: "0.2s", sub: "Velocidad IA" },
                    { label: "Empresas Seguras", value: "150+", sub: "En Argentina" },
                ].map((stat, idx) => (
                    <div key={idx} className="p-6 text-center group hover:bg-white/5 transition-colors duration-300 first:rounded-l-2xl last:rounded-r-2xl">
                        <div className="text-3xl font-bold text-white mb-1 group-hover:text-[#0AB9C3] transition-colors">{stat.value}</div>
                        <div className="text-sm font-medium text-zinc-400 mb-1">{stat.label}</div>
                        <div className="text-xs text-zinc-600 font-mono">{stat.sub}</div>
                    </div>
                ))}
            </div>
            {/* Decoración inferior de la barra */}
            <div className="absolute -bottom-1 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#0AB9C3]/50 to-transparent" />
        </div>

      </div>
    </section>
  )
}
