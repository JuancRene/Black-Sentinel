"use client"

import { Check, Rocket, Zap, Crown, Users, Sparkles, Shield, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const plans = [
  {
    name: "Esencial",
    icon: Users,
    price: "Desde USD 25",
    period: "/ equipo / mes",
    devices: "hasta 15 equipos",
    description: "Perfecto para arrancar. Protección real para negocios chicos que quieren estar tranquilos.",
    features: [
      "Protección completa en cada equipo",
      "Monitoreo 24/7 por personas reales",
      "Respuesta ante problemas incluida",
      "Reporte semanal en lenguaje simple",
      "Soporte por WhatsApp",
  
    ],
    highlight: false,
    isCustom: false,
    popular: false,
    cta: "Empezar ahora",
  },
  {
    name: "Crecimiento",
    icon: Rocket,
    price: "USD 800",
    period: "/ mes",
    badge: "Más elegido",
    devices: "hasta 35 equipos",
    description: "Para negocios que están creciendo y necesitan más tranquilidad.",
    features: [
      "Todo lo del plan Esencial",
      "Protección de emails contra phishing",
      "Actualizaciones automáticas",
      "Alertas inteligentes",
      "Reporte semanal ejecutivo",
      "Soporte prioritario",
    ],
    highlight: true,
    isCustom: false,
    popular: true,
    cta: "Diagnóstico gratuito",
  },
  {
    name: "Profesional",
    icon: Zap,
    price: "USD 1.500",
    period: "/ mes",
    devices: "hasta 75 equipos",
    description: "Protección completa para empresas que no pueden permitirse ningún problema.",
    features: [
      "Todo lo del plan Crecimiento",
      "Recuperación de datos",
      "Monitoreo de contraseñas filtradas",
      "Filtrado de sitios peligrosos",
      "Reportes detallados",
      "Soporte 24/7 por teléfono",
    ],
    highlight: false,
    isCustom: false,
    popular: false,
    cta: "Hablar con el equipo",
  },
  {
    name: "Corporativo",
    icon: Crown,
    price: "A medida",
    period: "",
    devices: "sin límites",
    badge: "Personalizado",
    description: "¿Tienes más equipos o necesidades especiales? Armamos algo a tu medida.",
    features: [
      "Todo lo del plan Profesional",
      "Configuración personalizada",
      "Reuniones de estrategia",
      "Capacitación para tu equipo",
      "Gerente de cuenta dedicado",
      "SLA garantizado",
    ],
    highlight: false,
    isCustom: true,
    popular: false,
    cta: "Pedir cotización",
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
                className={`group relative bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] border-2 rounded-3xl p-6 transition-all duration-500 ${
                  revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                } ${
                  plan.highlight
                    ? "border-primary shadow-xl shadow-primary/20 lg:scale-105 z-10"
                    : plan.isCustom
                      ? "border-purple-500/30 hover:border-purple-500/60"
                      : "border-primary/20 hover:border-primary/50"
                } ${isHovered && !plan.highlight ? "scale-105 -translate-y-2 shadow-xl" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                    <div
                      className={`${
                        plan.isCustom
                          ? "bg-gradient-to-r from-purple-500 to-pink-500"
                          : "bg-gradient-to-r from-primary to-primary/90"
                      } text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase shadow-lg`}
                    >
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="relative inline-flex mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                        plan.isCustom
                          ? "bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-purple-500/30"
                          : "bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30"
                      }`}
                    >
                      <Icon className={`w-8 h-8 ${plan.isCustom ? "text-purple-400" : "text-primary"}`} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 min-h-[2.5rem]">{plan.description}</p>

                  <div className="mb-2">
                    <span className={`text-3xl font-black ${plan.isCustom ? "text-purple-400" : "text-primary"}`}>
                      {plan.price}
                    </span>
                    {plan.period && <span className="text-gray-400 text-sm ml-1">{plan.period}</span>}
                  </div>

                  <div className="inline-flex items-center gap-2 bg-black/30 border border-white/10 rounded-full px-3 py-1 text-xs text-gray-400">
                    <div className={`w-1.5 h-1.5 rounded-full ${plan.isCustom ? "bg-purple-400" : "bg-primary"}`} />
                    {plan.devices}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.isCustom ? "text-purple-400" : "text-primary"}`}
                      />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={handleCTA}
                  className={`w-full font-bold transition-all duration-300 h-12 ${
                    plan.highlight
                      ? "bg-primary hover:bg-primary/90 text-black shadow-lg shadow-primary/30"
                      : plan.isCustom
                        ? "bg-transparent border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-black"
                        : "bg-transparent border-2 border-primary/50 text-primary hover:bg-primary hover:text-black"
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
