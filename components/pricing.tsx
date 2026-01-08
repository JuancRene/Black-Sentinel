"use client"

import { Check, Rocket, Zap, Crown, Users, Sparkles, Shield, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const plans = [
  {
    name: "Esencial",
    icon: Users,
    price: "USD 25",
    period: "/ equipo / mes",
    devices: "1 a 15 equipos",
    description: "La opción inteligente para comenzar. Protección completa sin complicaciones.",
    features: [
      "Protección completa",
      "Monitoreo 24/7",
      "Soporte técnico vía WhatsApp",
      "Protección de emails ",
      "Control de productividad",
      "Reportes semanales",
      "Actualizaciones críticas",
    ],
    highlight: true,
    isCustom: false,
    popular: true,
    cta: "Empezar ahora",
    badge: "MÁS ELEGIDO",
  },
  {
    name: "Crecimiento",
    icon: Rocket,
    price: "USD 800",
    period: "/ mes",
    devices: "hasta 35 equipos",
    description: "Para negocios que están escalando y necesitan más control.",
    features: [
      "Todo lo de Esencial",
      "Monitoreo 24/7",
      "Soporte técnico prioritario",
      "Actualizaciones de SO y Apps",
      "Alertas inteligentes",
    ],
    highlight: false,
    isCustom: false,
    popular: false,
    cta: "Empezar ahora",
  },
  {
    name: "Profesional",
    icon: Zap,
    price: "USD 1.500",
    period: "/ mes",
    devices: "hasta 75 equipos",
    description: "Protección avanzada para empresas que no pueden parar.",
    features: [
      "Todo lo de Crecimiento",
      "Monitoreo 24/7",
      "Soporte 24/7 por teléfono",
      "Reportes mensuales detallados",
      "Gestión total de parches",
      "Filtrado web (bloqueo de sitios)",
      "Backup y recuperación de datos",
      "Monitoreo de contraseñas ",
    ],
    highlight: false,
    isCustom: false,
    popular: false,
    cta: "Empezar ahora",
  },
  {
    name: "Corporativo",
    icon: Crown,
    price: "A medida",
    period: "",
    devices: "sin límites",
    description: "Solución personalizada para grandes organizaciones.",
    features: ["Todo lo de Profesional", "Gerente dedicado", "SLA personalizado", "Auditoría continua"],
    highlight: false,
    isCustom: true,
    popular: false,
    cta: "Cotizar",
  },
]

export function Pricing() {
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

  const handleCTA = () => {
    window.open("https://tally.so/r/b5Z2A7", "_blank")
  }

  return (
    <section
      ref={sectionRef}
      id="planes"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-black via-[#0A0A0A] to-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-float" />
      <div
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[180px] animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm text-primary font-semibold">Precios claros, sin sorpresas</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Planes pensados para <span className="text-primary">tu negocio</span>
          </h2>

          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
            No importa si tienes 5 computadoras o 100. Hay un plan para ti. Y puedes empezar sin compromiso.
          </p>

          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all text-base underline underline-offset-4"
          >
            Ver detalle de cada servicio
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            const isHovered = hoveredIndex === index

            return (
              <div
                key={plan.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative rounded-3xl p-6 transition-all duration-500 ${
                  revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                } ${
                  plan.highlight
                    ? "bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] border-2 border-primary shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] hover:scale-105"
                    : index === 1
                      ? "bg-gradient-to-b from-orange-500/5 via-[#1A1A1A] to-[#0F0F0F] border-2 border-orange-500/30 hover:border-orange-500/60 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] hover:scale-[1.02]"
                      : index === 2
                        ? "bg-gradient-to-b from-blue-500/5 via-[#1A1A1A] to-[#0F0F0F] border-2 border-blue-500/30 hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] hover:scale-[1.02]"
                        : "bg-gradient-to-b from-purple-500/5 via-[#1A1A1A] to-[#0F0F0F] border-2 border-purple-500/30 hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
                } ${isHovered && plan.highlight ? "scale-105" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                    <div
                      className={`${
                        plan.isCustom ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-primary"
                      } text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase shadow-lg whitespace-nowrap`}
                    >
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="relative inline-flex mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                        plan.highlight
                          ? "bg-gradient-to-br from-primary/20 to-primary/5 border-primary"
                          : index === 1
                            ? "bg-gradient-to-br from-orange-500/20 to-orange-500/5 border-orange-500/50 group-hover:border-orange-500"
                            : index === 2
                              ? "bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-blue-500/50 group-hover:border-blue-500"
                              : "bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-purple-500/50 group-hover:border-purple-500"
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 transition-colors ${
                          plan.highlight
                            ? "text-primary"
                            : index === 1
                              ? "text-orange-400 group-hover:text-orange-300"
                              : index === 2
                                ? "text-blue-400 group-hover:text-blue-300"
                                : "text-purple-400 group-hover:text-purple-300"
                        }`}
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 min-h-[2.5rem]">{plan.description}</p>

                  <div className="mb-2">
                    <span
                      className={`text-4xl font-black ${
                        plan.highlight
                          ? "text-primary"
                          : index === 1
                            ? "text-orange-400"
                            : index === 2
                              ? "text-blue-400"
                              : "text-purple-400"
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && <span className="text-gray-400 text-sm ml-1">{plan.period}</span>}
                  </div>

                  <div
                    className={`inline-flex items-center gap-2 bg-black/40 border rounded-full px-3 py-1 text-xs ${
                      plan.highlight
                        ? "border-primary/30 text-primary"
                        : index === 1
                          ? "border-orange-500/30 text-orange-400"
                          : index === 2
                            ? "border-blue-500/30 text-blue-400"
                            : "border-purple-500/30 text-purple-400"
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        plan.highlight
                          ? "bg-primary"
                          : index === 1
                            ? "bg-orange-400"
                            : index === 2
                              ? "bg-blue-400"
                              : "bg-purple-400"
                      }`}
                    />
                    {plan.devices}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => {
                    return (
                      <div key={idx} className="flex items-start gap-2">
                        <Check
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            plan.highlight
                              ? "text-primary"
                              : index === 1
                                ? "text-orange-400"
                                : index === 2
                                  ? "text-blue-400"
                                  : "text-purple-400"
                          }`}
                        />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    )
                  })}
                </div>

                <Button
                  onClick={handleCTA}
                  className={`w-full font-bold transition-all duration-300 h-12 ${
                    plan.highlight
                      ? "bg-primary hover:bg-primary/90 text-black shadow-lg shadow-primary/50 hover:shadow-primary/70"
                      : index === 1
                        ? "bg-orange-500/10 border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-black hover:border-orange-500"
                        : index === 2
                          ? "bg-blue-500/10 border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-black hover:border-blue-500"
                          : "bg-transparent border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-black"
                  } hover:scale-105`}
                >
                  {plan.cta}
                </Button>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center space-y-6">
          <p className="text-gray-400">¿No estás seguro cuál te conviene? Te ayudamos a elegir sin compromiso.</p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: Shield, text: "Diagnóstico gratuito" },
              { icon: Phone, text: "Soporte humano" },
              { icon: Check, text: "Cancelas cuando quieras" },
            ].map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 bg-black/30 border border-white/10 rounded-full"
              >
                <badge.icon className="w-4 h-4 text-primary" />
                <span className="text-gray-400">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
