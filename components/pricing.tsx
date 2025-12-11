"use client"

import { Check, Rocket, Zap, Crown, Settings, Sparkles } from "lucide-react"
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
    price: "Por Equipo",
    period: "",
    devices: "Sin mínimos ni máximos",
    description: "¿Tienes pocos equipos o necesidades especiales? ",
    features: [
      "Desde Startups hasta Corporaciones",
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
    <section ref={sectionRef} id="planes" className="py-20 sm:py-28 bg-black relative overflow-hidden">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-float" />
      <div
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[180px] animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header mejorado */}
        <div
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Precios transparentes</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Planes y <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary">Precios</span>
          </h2>
          
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Protección preventiva adaptada a tu negocio. Sin contratos largos. Sin letra chica.
          </p>
          
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 mt-6 text-primary hover:text-primary/80 transition-all text-base sm:text-lg underline underline-offset-4 hover:gap-3 group"
          >
            Ver qué incluye cada servicio
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Grid de planes mejorado */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            const isHovered = hoveredIndex === index
            
            return (
              <div
                key={plan.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] border-2 rounded-3xl p-8 transition-all duration-700 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${
                  plan.highlight
                    ? "border-primary shadow-2xl shadow-primary/20 lg:-mt-4 lg:mb-0 scale-105 lg:scale-110"
                    : plan.isCustom
                      ? "border-purple-500/40 hover:border-purple-500/80 bg-gradient-to-br from-purple-900/10 to-transparent hover:shadow-xl hover:shadow-purple-500/10"
                      : "border-primary/20 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10"
                } ${isHovered && !plan.highlight ? "scale-105 -translate-y-2" : ""}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Efecto de brillo superior */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                
                {/* Glow effect en hover */}
                {plan.highlight && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-xl -z-10 animate-pulse-slow" />
                  </>
                )}

                {/* Badge premium mejorado */}
                {plan.badge && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary blur-md animate-pulse" />
                      <div className="relative bg-gradient-to-r from-primary via-primary/90 to-primary text-black px-6 py-2 rounded-full text-sm font-bold uppercase shadow-2xl shadow-primary/50 flex items-center gap-2">
                        <Crown className="w-4 h-4" />
                        {plan.badge}
                      </div>
                    </div>
                  </div>
                )}

                {/* Contenido de la card */}
                <div className="text-center mb-8 relative z-10">
                  {/* Ícono mejorado */}
                  <div className="relative inline-flex mb-6">
                    <div
                      className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 ${
                        plan.isCustom ? "bg-purple-500/30" : "bg-primary/30"
                      } ${isHovered ? "scale-150 opacity-100" : "scale-100 opacity-50"}`}
                    />
                    <div
                      className={`relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        plan.isCustom 
                          ? "bg-gradient-to-br from-purple-500/20 to-purple-500/5" 
                          : "bg-gradient-to-br from-primary/20 to-primary/5"
                      } ${isHovered ? "rotate-12 scale-110" : "rotate-0 scale-100"}`}
                    >
                      <Icon className={`w-10 h-10 transition-all duration-500 ${plan.isCustom ? "text-purple-400" : "text-primary"} ${isHovered ? "scale-125" : "scale-100"}`} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{plan.description}</p>
                  
                  {/* Precio mejorado */}
                  <div className="mb-3">
                    <span className={`text-5xl font-black transition-all duration-300 ${
                      plan.isCustom 
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600" 
                        : "text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80"
                    } ${isHovered ? "scale-110 inline-block" : ""}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-400 text-lg ml-1">{plan.period}</span>
                    )}
                  </div>
                  
                  <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5">
                    <div className={`w-2 h-2 rounded-full animate-pulse ${plan.isCustom ? "bg-purple-400" : "bg-primary"}`} />
                    <p className="text-sm text-gray-400 font-medium">{plan.devices}</p>
                  </div>
                </div>

                {/* Features mejorados */}
                <div className="space-y-3 mb-8 relative z-10">
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 group/feature transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="relative mt-0.5">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            plan.isCustom
                              ? "bg-gradient-to-br from-purple-500/20 to-purple-500/10 group-hover/feature:from-purple-500/30 group-hover/feature:to-purple-500/20"
                              : "bg-gradient-to-br from-primary/20 to-primary/10 group-hover/feature:from-primary/30 group-hover/feature:to-primary/20"
                          } group-hover/feature:scale-110`}
                        >
                          <Check className={`w-4 h-4 ${plan.isCustom ? "text-purple-400" : "text-primary"}`} />
                        </div>
                        <div
                          className={`absolute inset-0 rounded-full blur-sm transition-opacity duration-300 opacity-0 group-hover/feature:opacity-100 ${
                            plan.isCustom ? "bg-purple-500/30" : "bg-primary/30"
                          }`}
                        />
                      </div>
                      <span className="text-sm text-gray-300 leading-relaxed group-hover/feature:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button mejorado */}
                <Button
                  onClick={handleCTA}
                  className={`w-full relative z-10 overflow-hidden group/btn transition-all duration-300 h-12 text-base font-semibold ${
                    plan.highlight
                      ? "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
                      : plan.isCustom
                        ? "bg-transparent border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-black hover:border-purple-500"
                        : "bg-transparent border-2 border-primary/50 text-primary hover:bg-primary hover:text-black hover:border-primary"
                  } hover:scale-105`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {plan.highlight ? "Solicitar demo" : plan.isCustom ? "Solicitar cotización" : "Solicitar demo"}
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                </Button>
              </div>
            )
          })}
        </div>

        {/* Footer mejorado */}
        <div className="mt-16 text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50" />
            <Sparkles className="w-5 h-5 text-primary" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          
          <p className="text-gray-400 text-sm leading-relaxed">
            ¿Tienes más equipos de los que incluye el plan? No hay problema. Puedes agregar dispositivos adicionales a
            tu plan por un costo unitario preferencial.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500 pt-4">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Cancelación flexible</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Soporte 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Implementación en 48hs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
