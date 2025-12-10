"use client"

import { Check, Rocket, Zap, Crown, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const plans = [
  {
    name: "Plan Starter",
    icon: Rocket,
    price: "USD 800",
    period: "/ mes",
    devices: "hasta 35 dispositivos",
    description: "Para pequeñas empresas que necesitan protección real sin complejidad.",
    features: [
      "Protección Antivirus Next-Gen",
      "Análisis mensual de vulnerabilidades",
      "Hardening básico de servidores/servicios críticos",
      "Monitoreo 24/7 con alertas esenciales",
      "Revisión de configuración de firewall",
      "Panel de riesgo + Reporte Semanal Ejecutivo",
    ],
    highlight: false,
    isCustom: false,
  },
  {
    name: "Plan Pro",
    icon: Zap,
    price: "USD 1.500",
    period: "/ mes",
    devices: "hasta 75 dispositivos",
    description: "Ideal para negocios con mayor superficie de ataque.",
    features: [
      "Todo lo del Starter",
      "Protección de Email (Anti-Phishing)",
      "Gestión de Parches y Actualizaciones",
      "Hardening avanzado",
      "Auditoría continua de puertos y servicios",
      "Auditoría de Fortaleza de Contraseñas",
      "Alertas inteligentes basadas en comportamiento",
      "Filtrado de Contenido Web",
      "Reportes semanales + reportes de estado detallados",
    ],
    highlight: true,
    isCustom: false,
  },
  {
    name: "Plan Sentinel",
    icon: Crown,
    price: "USD 3.000",
    period: "/ mes",
    badge: "premium",
    devices: "hasta 120 dispositivos",
    description: "Protección empresarial de nivel superior.",
    features: [
      "Todo lo del Pro",
      "Garantía de Rollback (Recuperación de Datos)",
      "Monitoreo de Dark Web (Identidad)",
      "Automatización defensiva avanzada",
      "Detección en tiempo real de anomalías críticas",
      "Análisis de riesgo diario",
      "Control de integridad de archivos (FIM)",
      "Monitoreo profundo de infraestructura",
      "Reuniones de estrategia de seguridad",
    ],
    highlight: false,
    isCustom: false,
  },
  {
    name: "Plan Flexible",
    icon: Settings,
    price: "Cotización por Equipo",
    period: "",
    devices: "Sin mínimos ni máximos",
    description: "¿Tienes pocos equipos o necesidades especiales? Adaptamos el costo a tu tamaño.",
    features: [
      "Desde Startups (5 PCs) hasta Corporaciones",
      "Pagas solo por lo que usas",
      "Servicios seleccionados según tu presupuesto",
      "Ideal para estudios profesionales y PyMEs",
      "Escalabilidad según crecimiento",
      "Integraciones personalizadas",
      "Soporte dedicado",
      "Capacitación personalizada según necesidades",
    ],
    highlight: false,
    isCustom: true,
  },
]

export function Pricing() {
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

  const handleCTA = () => {
    window.open("https://tally.so/r/b5Z2A7", "_blank")
  }

  return (
    <section ref={sectionRef} id="planes" className="py-16 sm:py-24 bg-black relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] animate-float" />
      <div
        className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Planes y <span className="text-primary">Precios</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            Protección preventiva adaptada a tu negocio. Sin contratos largos. Sin letra chica.
          </p>
          <Link
            href="/servicios"
            className="inline-block mt-4 text-primary hover:text-primary/80 transition-colors text-sm sm:text-base underline underline-offset-4"
          >
            Ver qué incluye cada servicio →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`relative bg-[#1A1A1A] border-2 rounded-2xl p-8 transition-all duration-700 hover:scale-105 hover-lift backdrop-blur-sm ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${
                  plan.highlight
                    ? "border-primary shadow-lg shadow-primary/30 lg:-mt-4 lg:mb-0 animate-pulse-glow"
                    : plan.isCustom
                      ? "border-purple-500/40 hover:border-purple-500/80 bg-gradient-to-br from-purple-900/10 to-transparent"
                      : "border-primary/20 hover:border-primary/60"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {plan.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-2xl" />
                )}

                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-sm font-bold uppercase shadow-lg shadow-primary/50 animate-bounce">
                    {plan.badge}
                  </div>
                )}

                <div className="text-center mb-6 relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 hover:rotate-12 hover:scale-110 ${plan.isCustom ? "bg-purple-500/10 hover:bg-purple-500/20" : "bg-primary/10 hover:bg-primary/20"}`}
                  >
                    <Icon className={`w-8 h-8 ${plan.isCustom ? "text-purple-400" : "text-primary"}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className={`text-4xl font-bold ${plan.isCustom ? "text-purple-400" : "text-primary"}`}>
                      {plan.price}
                    </span>
                    {plan.period && <span className="text-gray-400 text-lg"> {plan.period}</span>}
                  </div>
                  <p className="text-sm text-gray-500 font-medium">{plan.devices}</p>
                </div>

                <div className="space-y-4 mb-6 relative z-10">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/feature">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 transition-all duration-300 group-hover/feature:scale-110 ${plan.isCustom ? "bg-purple-500/20 group-hover/feature:bg-purple-500/30" : "bg-primary/20 group-hover/feature:bg-primary/30"}`}
                      >
                        <Check className={`w-3 h-3 ${plan.isCustom ? "text-purple-400" : "text-primary"}`} />
                      </div>
                      <span className="text-sm text-gray-300 leading-relaxed group-hover/feature:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={handleCTA}
                  className={`w-full relative z-10 overflow-hidden group/btn transition-all duration-300 hover:scale-105 ${
                    plan.highlight
                      ? "bg-primary hover:bg-primary/90 text-black"
                      : plan.isCustom
                        ? "bg-transparent border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-black"
                        : "bg-transparent border-2 border-primary/50 text-primary hover:bg-primary hover:text-black"
                  }`}
                >
                  <span className="relative z-10">
                    {plan.highlight ? "Solicitar demo" : plan.isCustom ? "Solicitar cotización" : "Solicitar demo"}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                </Button>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-gray-400 text-sm leading-relaxed">
            ¿Tienes más equipos de los que incluye el plan? No hay problema. Puedes agregar dispositivos adicionales a
            tu plan por un costo unitario preferencial.
          </p>
        </div>
      </div>
    </section>
  )
}
