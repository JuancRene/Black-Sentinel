"use client"

import { ShieldOff, Lock, Mail, Phone, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const problems = [
  {
    icon: ShieldOff,
    title: "Negocio parado por un ataque",
    description: "Ransomware que encripta todo y te pide rescate. Días sin poder facturar ni atender clientes.",
    color: "from-red-500/20 to-orange-500/10",
  },
  {
    icon: Lock,
    title: "Información encriptada",
    description: "Tus archivos, bases de datos y documentos secuestrados. Sin acceso a nada de tu empresa.",
    color: "from-purple-500/20 to-pink-500/10",
  },
  {
    icon: Mail,
    title: "Correos falsos que roban contraseñas",
    description: "Phishing que parece de tu banco o proveedor. Un click y perdés el acceso a todo.",
    color: "from-yellow-500/20 to-orange-500/10",
  },
  {
    icon: Phone,
    title: "No saber a quién llamar",
    description: "Pasa algo grave un domingo y no tenés a nadie que te ayude. Nosotros estamos siempre.",
    color: "from-blue-500/20 to-cyan-500/10",
  },
]

export function Stats() {
  const [revealed, setRevealed] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
      className="relative py-24 sm:py-32 bg-gradient-to-b from-black via-[#0A0A0A] to-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm">
            <ShieldOff className="w-4 h-4 text-red-400" />
            <span className="text-red-400 font-bold text-sm uppercase tracking-wide">Problemas que evitamos</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Esto le pasa a negocios <span className="text-red-400">todos los días</span>
          </h2>

          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            No hace falta ser una empresa grande para ser víctima. Los ataques no discriminan por tamaño.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            const isHovered = hoveredIndex === index

            return (
              <div
                key={problem.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group text-center transition-all duration-700 ${
                  revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <div
                    className={`relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-3xl p-8 border-2 border-red-500/20 transition-all duration-500 ${
                      isHovered ? "border-red-500/50 scale-105 shadow-xl shadow-red-500/10 -translate-y-2" : ""
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}
                    />

                    <div className="relative mb-5 inline-flex">
                      <div
                        className={`relative w-20 h-20 bg-gradient-to-br from-red-500/20 to-red-500/5 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-red-500/30 transition-all duration-500 ${
                          isHovered ? "scale-110 border-red-500/50" : "scale-100"
                        }`}
                      >
                        <Icon
                          className={`w-10 h-10 text-red-400 transition-all duration-500 ${
                            isHovered ? "scale-110" : "scale-100"
                          }`}
                        />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                      {problem.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-500 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Con BlackSentinel, estos problemas no te van a pasar</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
