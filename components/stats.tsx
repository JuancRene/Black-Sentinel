"use client"

import { Shield, Eye, Zap, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const stats = [
  { icon: Shield, value: "99.9%", label: "Uptime garantizado", numberValue: 99.9, suffix: "%" },
  { icon: Eye, value: "24/7", label: "Monitoreo continuo", customValue: "24/7" },
  { icon: Zap, value: "<5min", label: "Tiempo de respuesta", customValue: "<5min" },
  { icon: Users, value: "100+", label: "Empresas protegidas", numberValue: 100, suffix: "+" },
]

export function Stats() {
  const [revealed, setRevealed] = useState(false)
  const [counters, setCounters] = useState<{ [key: number]: number }>({})
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
      className="py-20 sm:py-24 bg-gradient-to-b from-black via-[#0A0A0A] to-black relative overflow-hidden"
    >
      {/* Efecto de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título opcional */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-fade-in-up">
            Resultados que <span className="text-primary">hablan por sí solos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Números reales de protección y confiabilidad
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
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
                className={`group text-center transition-all duration-700 ${
                  revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative flex flex-col items-center">
                  {/* Contenedor del ícono con efectos mejorados */}
                  <div className="relative mb-6">
                    {/* Glow pulsante de fondo */}
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 animate-pulse" />
                    
                    {/* Card del ícono con glassmorphism */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-primary/20 group-hover:border-primary/40">
                      {/* Efecto de brillo interno */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <Icon className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                      
                      {/* Partículas decorativas en las esquinas */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
                      <div 
                        className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary/60 rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      />
                    </div>
                  </div>

                  {/* Valor numérico con efecto de counter */}
                  <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary/80 to-primary/60 mb-3 group-hover:scale-110 transition-transform duration-300 min-h-[3rem] flex items-center justify-center">
                    {displayValue}
                  </div>

                  {/* Label con underline animado */}
                  <div className="relative text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500" />
                  </div>

                  {/* Línea decorativa vertical */}
                  {index < stats.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-px h-20 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Decoración inferior */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <span>Actualizado en tiempo real</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
