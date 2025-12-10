"use client"

import { Shield, Zap, Brain, Wrench } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const benefits = [
  {
    icon: Shield,
    title: "Protección que piensa",
    description:
      "No usamos firmas de virus obsoletas. Nuestra IA analiza el comportamiento de tus archivos para detener ataques de Día Cero y Ransomware al instante.",
  },
  {
    icon: Zap,
    title: "Rendimiento sin interrupciones",
    description:
      "Seguridad robusta no significa PCs lentas. Nuestros agentes son invisibles para el usuario, garantizando máxima protección con mínimo impacto en el rendimiento.",
  },
  {
    icon: Brain,
    title: "Inteligencia que se entiende",
    description:
      "Transformamos millones de logs de datos en reportes ejecutivos simples. Sabrás exactamente qué pasó, cuándo pasó y cómo lo resolvimos.",
  },
  {
    icon: Wrench,
    title: 'Mantenimiento "Manos Libres"',
    description:
      "Actualizaciones, parches de seguridad y limpieza de disco automatizada. Tu equipo se enfoca en trabajar; nosotros, en que los equipos funcionen.",
  },
]

export function WhyBlackSentinel() {
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
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-32 bg-gradient-to-b from-black via-[#0A0A0A] to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[140px] animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-primary font-semibold text-sm">¿POR QUÉ ELEGIRNOS?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            4 Razones por las que tu empresa
            <br />
            necesita <span className="text-primary">BlackSentinel</span> hoy
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Ciberseguridad inteligente que se adapta a tu empresa sin complicar tu operación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className={`group bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-2 border-primary/20 hover:border-primary/60 rounded-3xl p-8 sm:p-10 transition-all duration-500 hover:scale-105 hover-lift glass-effect relative overflow-hidden ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl group-hover:shadow-primary/50">
                      <Icon className="w-8 h-8 text-primary group-hover:animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
