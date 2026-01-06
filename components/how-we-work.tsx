"use client"

import { ClipboardCheck, Eye, Bell, Wrench, HeadphonesIcon, Sparkles } from "lucide-react"
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
      className="py-20 sm:py-32 bg-gradient-to-b from-black via-[#0A0A0A] to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary font-bold text-sm uppercase tracking-wide">Así de simple</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Cómo <span className="text-primary">te cuidamos</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Sin complicaciones. Sin que tengas que entender de tecnología. Nosotros nos ocupamos de todo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.title}
                    className={`relative group flex gap-6 items-start transition-all duration-700 ${revealed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Step number */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-primary/20 rounded-2xl p-6 group-hover:border-primary/40 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
