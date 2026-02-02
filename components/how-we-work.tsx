"use client"

import { ClipboardCheck, Eye, Bell, Wrench, HeadphonesIcon, Sparkles, ArrowDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Diagnóstico inicial gratuito",
    description: "Miramos cómo está tu negocio hoy. Sin compromiso, sin letra chica. Te contamos qué encontramos.",
  },
  {
    icon: Eye,
    number: "02",
    title: "Monitoreo permanente",
    description: "Instalamos protección y empezamos a cuidarte 24/7. Vos seguís trabajando normal.",
  },
  {
    icon: Bell,
    number: "03",
    title: "Alertas tempranas",
    description: "Si detectamos algo raro, actuamos antes de que sea un problema. Te avisamos solo si hace falta.",
  },
  {
    icon: Wrench,
    number: "04",
    title: "Respuesta ante incidentes",
    description: "Si pasa algo, lo resolvemos nosotros. No te dejamos solo con un problema técnico.",
  },
  {
    icon: HeadphonesIcon,
    number: "05",
    title: "Acompañamiento continuo",
    description: "Reuniones periódicas, reportes claros, y siempre alguien disponible para tus dudas.",
  },
]

export function HowWeWork() {
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
      className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden"
    >
      {/* --- BACKGROUND LAYERS --- */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Glow lateral */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#39CFE3]/5 blur-[120px] rounded-full pointer-events-none" />


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39CFE3]/30 bg-[#39CFE3]/5 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(57,207,227,0.2)] mb-6">
            <Sparkles className="w-3 h-3 text-[#39CFE3]" />
            <span className="text-xs font-semibold text-[#39CFE3] uppercase tracking-wider">Proceso Simplificado</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Cómo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39CFE3] to-teal-500">te cuidamos</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Sin complicaciones técnicas. Nosotros nos ocupamos de la seguridad para que vos te ocupes de tu negocio.
          </p>
        </div>

        {/* --- TIMELINE CONTAINER --- */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Línea vertical conectora */}
          <div className="absolute left-[27px] sm:left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-[#39CFE3]/50 via-[#39CFE3]/20 to-transparent z-0" />

          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.title}
                  className={`relative flex gap-6 sm:gap-10 items-stretch transition-all duration-700 ${
                    revealed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* --- NODE / ICONO (Timeline) --- */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-[#0A0A0A] border border-[#39CFE3]/30 flex items-center justify-center shadow-[0_0_20px_-5px_rgba(57,207,227,0.3)] group-hover:border-[#39CFE3] transition-colors duration-500">
                      <div className="absolute inset-0 bg-[#39CFE3]/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#39CFE3]" />
                    </div>
                  </div>

                  {/* --- CONTENT CARD --- */}
                  <div className="flex-1 group">
                    <div className="relative h-full bg-zinc-900/40 border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-[#39CFE3]/40 hover:bg-zinc-900/60 transition-all duration-500 overflow-hidden">
                      
                      {/* Efecto de brillo en hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#39CFE3]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Número gigante de fondo (Watermark) */}
                      <div className="absolute -right-4 -top-6 text-[8rem] font-bold text-white/[0.02] select-none pointer-events-none group-hover:text-[#39CFE3]/[0.05] transition-colors duration-500 leading-none">
                        {step.number}
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-[#39CFE3] text-sm font-mono font-bold tracking-widest border border-[#39CFE3]/20 px-2 py-1 rounded bg-[#39CFE3]/5">
                                PASO {step.number}
                            </span>
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#39CFE3] transition-colors duration-300">
                          {step.title}
                        </h3>
                        
                        <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
                          {step.description}
                        </p>
                      </div>

                      {/* Flecha decorativa que aparece en hover */}
                      <div className="absolute bottom-6 right-6 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                        <ArrowDown className="w-5 h-5 text-[#39CFE3] -rotate-90" />
                      </div>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
