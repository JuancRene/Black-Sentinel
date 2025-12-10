"use client"

import { Search, Eye, Server, Cog, Cloud } from "lucide-react"

const services = [
  {
    icon: Eye,
    title: "Monitoreo 24/7",
    description: "Eventos, logs y comportamiento del sistema bajo vigilancia constante.",
  },
  {
    icon: Search,
    title: "Análisis de vulnerabilidades",
    description: "Escaneos recurrentes + priorización clara de riesgos.",
  },
  {
    icon: Server,
    title: "Hardening de servidores y endpoints",
    description: "Fortalecimiento extremo de configuraciones.",
  },
  {
    icon: Cog,
    title: "Automatización defensiva",
    description: "Scripts, reglas y acciones automáticas que bloquean riesgos antes de que crezcan.",
  },
  {
    icon: Cloud,
    title: "Seguridad Cloud",
    description: "Mejores prácticas para AWS, Azure o GCP.",
  },
]

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Soluciones integrales de ciberseguridad potenciadas por IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-[#1A1A1A] border-2 border-primary/20 rounded-2xl p-6 sm:p-8 hover:border-primary/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
