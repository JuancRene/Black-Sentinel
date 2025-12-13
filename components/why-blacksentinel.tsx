"use client"

import { Shield, Zap, Brain, Wrench, Sparkles, CheckCircle2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const benefits = [
  {
    icon: Shield,
    title: "Protección que piensa",
    description:
      "No usamos firmas de virus obsoletas. Nuestra IA analiza el comportamiento de tus archivos para detener ataques de Día Cero y Ransomware al instante.",
    highlights: ["IA avanzada", "Día Cero", "Ransomware"],
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: Zap,
    title: "Rendimiento sin interrupciones",
    description:
      "Seguridad robusta no significa PCs lentas. Nuestros agentes son invisibles para el usuario, garantizando máxima protección con mínimo impacto en el rendimiento.",
    highlights: ["Invisible", "Máxima protección", "Mínimo impacto"],
    color: "from-yellow-500/20 to-orange-500/10",
  },
  {
    icon: Brain,
    title: "Inteligencia que se entiende",
    description:
      "Transformamos millones de logs de datos en reportes ejecutivos simples. Sabrás exactamente qué pasó, cuándo pasó y cómo lo resolvimos.",
    highlights: ["Reportes simples", "Visibilidad total", "Accionable"],
    color: "from-purple-500/20 to-pink-500/10",
  },
  {
    icon: Wrench,
    title: 'Mantenimiento "Manos Libres"',
    description:
      "Actualizaciones, parches de seguridad y limpieza de disco automatizada. Tu equipo se enfoca en trabajar; nosotros, en que los equipos funcionen.",
    highlights: ["Automatizado", "Sin intervención", "Siempre actualizado"],
    color: "from-green-500/20 to-emerald-500/10",
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
          className={`text-center mb-20 transition-all duration-1000 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary font-bold text-sm uppercase tracking-wide">¿Por qué elegirnos?</span>
          </div>
          
          {/* Título principal */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            <span className="block mb-2">4 Razones por las que</span>
            <span className="block">tu empresa necesita</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary animate-gradient bg-[length:200%_auto]">
              BlackSentinel
            </span>{" "}
            <span className="text-primary">hoy</span>
          </h2>
          
          {/* Subtítulo */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Ciberseguridad inteligente que se adapta a tu empresa sin complicar tu operación.
          </p>
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
                className={`group relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-2 border-primary/20 hover:border-primary/60 rounded-3xl p-8 sm:p-10 transition-all duration-500 overflow-hidden ${
                  revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${isHovered ? "scale-105 shadow-2xl shadow-primary/20" : ""}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Efecto de brillo superior */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                
                {/* Glow animado de fondo */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                {/* Número de index decorativo */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <span className="text-primary font-black text-xl">{index + 1}</span>
                </div>

                <div className="relative z-10">
                  {/* Ícono ULTRA mejorado */}
                  <div className="mb-6 relative inline-flex">
                    {/* Glow background */}
                    <div className={`absolute inset-0 bg-primary/40 rounded-2xl blur-2xl transition-all duration-500 ${
                      isHovered ? "scale-[1.8] opacity-100" : "scale-100 opacity-50"
                    }`} />
                    
                    {/* Círculo pulsante */}
                    {isHovered && (
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                    )}
                    
                    {/* Icon container */}
                    <div className={`relative w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border-2 border-primary/30 transition-all duration-500 ${
                      isHovered ? "rotate-12 scale-110 border-primary/60 shadow-xl shadow-primary/30" : "rotate-0 scale-100"
                    }`}>
                      <Icon className={`w-10 h-10 text-primary transition-all duration-500 ${
                        isHovered ? "scale-125" : "scale-100"
                      }`} />
                    </div>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-base sm:text-lg text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors mb-6">
                    {benefit.description}
                  </p>

                  {/* Highlights nuevos */}
                  <div className="flex flex-wrap gap-2">
                    {benefit.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-sm border border-primary/20 rounded-full text-xs font-semibold text-primary group-hover:bg-primary/10 group-hover:border-primary/40 transition-all duration-300"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Esquinas decorativas */}
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary/20 rounded-br-xl group-hover:border-primary/40 transition-colors" />
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/20 rounded-tl-xl group-hover:border-primary/40 transition-colors" />
              </div>
            )
          })}
        </div>

        {/* CTA Section adicional */}
        <div 
          className={`mt-20 text-center transition-all duration-1000 delay-500 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/50" />
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          
          <p className="text-lg text-gray-400 mb-4">
            ¿Listo para proteger tu empresa con inteligencia artificial?
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Demo gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Setup en 48hs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
