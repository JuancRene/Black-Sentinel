"use client"

import { Search, Cpu, Cog, HeadphonesIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Evaluamos tu infraestructura actual",
    description: "Revisamos sistemas, configuraciones y puntos débiles.",
  },
  {
    icon: Cpu,
    number: "02",
    title: "Diseñamos un plan de seguridad preventiva a medida",
    description: "Defensas automatizadas + monitoreo continuo.",
  },
  {
    icon: Cog,
    number: "03",
    title: "Implementamos hardening y automatizaciones",
    description: "Regla por regla, servicio por servicio.",
  },
  {
    icon: HeadphonesIcon,
    number: "04",
    title: "Monitoreamos 24/7 y ajustamos constantemente",
    description: "Siempre al día, siempre un paso adelante.",
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
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-primary font-semibold text-sm">PROCESO</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Cómo <span className="text-primary">trabajamos</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Un proceso claro y estructurado para implementar seguridad preventiva en tu empresa
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.title}
                  className={`relative group bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-2 border-primary/20 rounded-3xl p-8 sm:p-10 hover:border-primary/60 transition-all duration-500 hover:scale-105 hover-lift overflow-hidden ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="absolute top-6 right-6 w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-black font-bold text-xl shadow-2xl shadow-primary/30 group-hover:scale-110 transition-transform duration-300 z-20">
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 flex-shrink-0">
                        <Icon className="w-8 h-8 text-primary group-hover:animate-pulse" />
                      </div>
                      <div className="flex-1 pr-16">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
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
    </section>
  )
}
