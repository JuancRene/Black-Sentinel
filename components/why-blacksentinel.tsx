"use client"

import { Shield, Users, Clock, HeadphonesIcon, Sparkles, CheckCircle2, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const comparison = [
  { feature: "Es un programa", antivirus: true, blacksentinel: false, bsText: "Es un servicio con personas" },
  { feature: "Solo te avisa", antivirus: true, blacksentinel: false, bsText: "Actuamos por vos" },
  { feature: "Si pasa algo, estás solo", antivirus: true, blacksentinel: false, bsText: "Hay alguien que te ayuda" },
  {
    feature: "Configuración por tu cuenta",
    antivirus: true,
    blacksentinel: false,
    bsText: "Nosotros lo configuramos todo",
  },
  { feature: "Soporte automatizado", antivirus: true, blacksentinel: false, bsText: "Personas reales 24/7" },
]

const benefits = [
  {
    icon: Users,
    title: "Personas reales monitoreando",
    description: "No es solo software. Hay un equipo de seguridad cuidando tu negocio las 24 horas, los 7 días.",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: HeadphonesIcon,
    title: "Actuamos cuando pasa algo",
    description: "No te mandamos un mail y chau. Si detectamos algo, lo resolvemos. Vos ni te enterás.",
    color: "from-green-500/20 to-emerald-500/10",
  },
  {
    icon: Clock,
    title: "Acompañamiento todos los días",
    description: "No te dejamos solo después de instalar. Estamos siempre, ajustando, mejorando, cuidando.",
    color: "from-purple-500/20 to-pink-500/10",
  },
  {
    icon: Shield,
    title: "Vos no tenés que saber de tecnología",
    description: "Nosotros nos ocupamos de todo. Vos ocupate de tu negocio, de tus clientes, de crecer.",
    color: "from-yellow-500/20 to-orange-500/10",
  },
]

export function WhyBlackSentinel() {
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
      className="relative py-24 sm:py-32 bg-gradient-to-b from-black via-[#0A0A0A] to-black overflow-hidden"
    >
      {/* Background Effects Mejorados */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />

      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[140px] animate-float" />
      <div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px] animate-float"
        style={{ animationDelay: "3s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />

      {/* Líneas decorativas */}
      <div className="absolute top-0 left-1/3 w-px h-24 bg-gradient-to-b from-primary/50 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-primary/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header ULTRA mejorado */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary font-bold text-sm uppercase tracking-wide">No somos un antivirus</span>
          </div>

          {/* Título principal */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            La diferencia está en <span className="text-primary">las personas</span>
          </h2>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Un antivirus es un programa. BlackSentinel es un equipo de personas que cuida tu negocio como si fuera
            propio.
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto mb-20 transition-all duration-1000 delay-200 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-2 border-primary/20 rounded-3xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-black/50">
              <div className="p-4 sm:p-6 text-center border-r border-primary/10"></div>
              <div className="p-4 sm:p-6 text-center border-r border-primary/10">
                <span className="text-gray-400 font-semibold text-sm sm:text-base">Antivirus tradicional</span>
              </div>
              <div className="p-4 sm:p-6 text-center bg-primary/10">
                <span className="text-primary font-bold text-sm sm:text-base">BlackSentinel</span>
              </div>
            </div>

            {/* Rows */}
            {comparison.map((item, idx) => (
              <div key={idx} className="grid grid-cols-3 border-t border-primary/10">
                <div className="p-4 sm:p-6 text-sm sm:text-base text-gray-300 border-r border-primary/10 flex items-center">
                  {item.feature}
                </div>
                <div className="p-4 sm:p-6 text-center border-r border-primary/10 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <div className="p-4 sm:p-6 text-center bg-primary/5 flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-primary font-medium hidden sm:inline">{item.bsText}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid de beneficios ULTRA mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const isHovered = hoveredIndex === index

            return (
              <div
                key={benefit.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-2 border-primary/20 hover:border-primary/50 rounded-3xl p-8 transition-all duration-500 overflow-hidden ${
                  revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${isHovered ? "scale-105 shadow-xl shadow-primary/10" : ""}`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />

                <div className="relative z-10">
                  <div className="mb-5 relative inline-flex">
                    <div
                      className={`relative w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/30 transition-all duration-500 ${
                        isHovered ? "scale-110 border-primary/50" : "scale-100"
                      }`}
                    >
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
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

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
