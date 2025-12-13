"use client"

import { Shield, Eye, Zap, Users, Sparkles, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const stats = [
  { 
    icon: Shield, 
    value: "99.9%", 
    label: "Uptime garantizado", 
    numberValue: 99.9, 
    suffix: "%",
    description: "Disponibilidad",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  { 
    icon: Eye, 
    value: "24/7", 
    label: "Monitoreo continuo", 
    customValue: "24/7",
    description: "Sin pausas",
    color: "from-purple-500/20 to-pink-500/10",
  },
  { 
    icon: Zap, 
    value: "<5min", 
    label: "Tiempo de respuesta", 
    customValue: "<5min",
    description: "Reacción rápida",
    color: "from-yellow-500/20 to-orange-500/10",
  },
  { 
    icon: Users, 
    value: "100+", 
    label: "Empresas protegidas", 
    numberValue: 100, 
    suffix: "+",
    description: "Clientes activos",
    color: "from-green-500/20 to-emerald-500/10",
  },
]

export function Stats() {
  const [revealed, setRevealed] = useState(false)
  const [counters, setCounters] = useState<{ [key: number]: number }>({})
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true)
            // Iniciar contadores cuando la sección sea visible
            stats.forEach((stat, index) => {
              if (stat.numberValue) {
                animateCounter(index, stat.numberValue)
              }
            })
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

  const animateCounter = (index: number, target: number) => {
    const duration = 2000 // 2 segundos
    const steps = 60
    const increment = target / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current += increment
      
      if (step >= steps) {
        current = target
        clearInterval(timer)
      }

      setCounters(prev => ({ ...prev, [index]: current }))
    }, duration / steps)
  }

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 sm:py-32 bg-gradient-to-b from-black via-[#0A0A0A] to-black overflow-hidden"
    >
      {/* Background Effects Mejorados */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
      
      {/* Multiple Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-float" />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Líneas decorativas superiores */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-primary/50 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-primary/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header ULTRA mejorado */}
        <div 
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary font-bold text-sm uppercase tracking-wide">Métricas en vivo</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Resultados que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary animate-gradient bg-[length:200%_auto]">
              hablan por sí solos
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Números reales de protección y confiabilidad
          </p>
        </div>

        {/* Stats Grid ULTRA mejorado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const isHovered = hoveredIndex === index
            let displayValue = stat.value

            // Si tiene numberValue y ya se animó, mostrar el valor animado
            if (stat.numberValue && counters[index] !== undefined) {
              if (stat.suffix === "%") {
                displayValue = `${counters[index].toFixed(1)}${stat.suffix}`
              } else if (stat.suffix === "+") {
                displayValue = `${Math.floor(counters[index])}${stat.suffix}`
              }
            } else if (stat.customValue) {
              displayValue = stat.customValue
            }

            return (
              <div
                key={stat.label}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group text-center transition-all duration-700 ${
                  revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  {/* Card principal con gradiente único */}
                  <div className={`relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-3xl p-8 border-2 border-primary/20 transition-all duration-500 ${
                    isHovered ? "border-primary/60 scale-105 shadow-2xl shadow-primary/20 -translate-y-3" : ""
                  }`}>
                    {/* Efecto de brillo superior */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    
                    {/* Glow animado de fondo con color único */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`} />

                    {/* Contenedor del ícono MEJORADO */}
                    <div className="relative mb-6 inline-flex">
                      {/* Glow pulsante de fondo MÁS GRANDE */}
                      <div className={`absolute inset-0 bg-primary/40 rounded-2xl blur-2xl transition-all duration-500 ${
                        isHovered ? "scale-[2] opacity-100" : "scale-100 opacity-50"
                      } animate-pulse`} />
                      
                      {/* Círculo pulsante adicional */}
                      {isHovered && (
                        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                      )}
                      
                      {/* Card del ícono */}
                      <div className={`relative w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-primary/30 transition-all duration-500 ${
                        isHovered ? "rotate-12 scale-110 border-primary/60 shadow-xl shadow-primary/30" : "rotate-0 scale-100"
                      }`}>
                        <Icon className={`w-12 h-12 text-primary transition-all duration-500 ${
                          isHovered ? "scale-125" : "scale-100"
                        }`} />
                        
                        {/* Partículas decorativas */}
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full animate-ping" />
                        <div 
                          className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary/60 rounded-full animate-ping"
                          style={{ animationDelay: "0.5s" }}
                        />
                      </div>
                    </div>

                    {/* Valor numérico ULTRA mejorado */}
                    <div className={`text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary/90 to-primary mb-3 transition-transform duration-300 min-h-[4rem] flex items-center justify-center ${
                      isHovered ? "scale-110" : ""
                    }`}>
                      {displayValue}
                    </div>

                    {/* Description badge nuevo */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full mb-3">
                      <Sparkles className="w-3 h-3 text-primary" />
                      <span className="text-xs font-semibold text-primary">{stat.description}</span>
                    </div>

                    {/* Label con underline animado */}
                    <div className="relative text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium">
                      {stat.label}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500" />
                    </div>

                    {/* Esquinas decorativas */}
                    <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-primary/20 rounded-br-xl group-hover:border-primary/40 transition-colors" />
                    <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-primary/20 rounded-tl-xl group-hover:border-primary/40 transition-colors" />
                  </div>

                  {/* Línea divisoria vertical (desktop) */}
                  {index < stats.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust section mejorada */}
        <div 
          className={`text-center transition-all duration-1000 delay-500 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-500 font-medium">Actualizado en tiempo real</span>
            </div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          {/* Trust badges adicionales */}
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-sm border border-primary/10 rounded-full">
              <Shield className="w-3 h-3 text-primary" />
              <span>Datos verificados</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-sm border border-primary/10 rounded-full">
              <TrendingUp className="w-3 h-3 text-primary" />
              <span>Tendencia positiva</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-sm border border-primary/10 rounded-full">
              <Sparkles className="w-3 h-3 text-primary" />
              <span>Crecimiento constante</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
