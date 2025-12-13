"use client"

import { Check, Rocket, Zap, Crown, Settings, Sparkles, Star, Shield } from "lucide-react"
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
    popular: false,
  },
  {
    name: "Plan Pro",
    icon: Zap,
    price: "USD 1.500",
    period: "/ mes",
    badge: "Más Popular",
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
    popular: true,
  },
  {
    name: "Plan Sentinel",
    icon: Crown,
    price: "USD 3.000",
    period: "/ mes",
    badge: "Premium",
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
    popular: false,
  },
  {
    name: "Plan Flexible",
    icon: Settings,
    price: "Por Equipo",
    period: "",
    devices: "Sin límites",
    badge: "A Medida",
    description: "¿Tienes pocos equipos o necesidades especiales?",
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
    popular: false,
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
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-float" />
      <div
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[180px] animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />

      {/* Líneas decorativas superiores */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-primary/50 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-primary/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header mejorado */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm text-primary font-semibold">Precios transparentes</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Planes y{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary animate-gradient bg-[length:200%_auto]">
              Precios
            </span>
          </h2>

          <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-6">
            Protección preventiva adaptada a tu negocio. Sin contratos largos. Sin letra chica.
          </p>

          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all text-base sm:text-lg underline underline-offset-4 hover:gap-3 group"
          >
            Ver qué incluye cada servicio
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Grid de planes ULTRA mejorado */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1400px] mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            const isHovered = hoveredIndex === index

            return (
              <div
                key={plan.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] border-2 rounded-3xl p-8 transition-all duration-700 ${
                  revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                } ${
                  plan.highlight
                    ? "border-primary shadow-2xl shadow-primary/30 lg:-mt-6 lg:mb-0 scale-105 lg:scale-[1.15] z-20"
                    : plan.isCustom
                      ? "border-purple-500/40 hover:border-purple-500/80 bg-gradient-to-br from-purple-900/10 to-transparent hover:shadow-xl hover:shadow-purple-500/10"
                      : "border-primary/20 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10"
                } ${isHovered && !plan.highlight ? "scale-105 -translate-y-3 shadow-2xl" : ""}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Efecto de brillo superior más intenso */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

                {/* Esquinas decorativas para el plan destacado */}
                {plan.highlight && (
                  <>
                    <div className="absolute top-3 left-3 w-12 h-12 border-l-2 border-t-2 border-primary/30 rounded-tl-xl" />
                    <div className="absolute top-3 right-3 w-12 h-12 border-r-2 border-t-2 border-primary/30 rounded-tr-xl" />
                    <div className="absolute bottom-3 left-3 w-12 h-12 border-l-2 border-b-2 border-primary/30 rounded-bl-xl" />
                    <div className="absolute bottom-3 right-3 w-12 h-12 border-r-2 border-b-2 border-primary/30 rounded-br-xl" />
                  </>
                )}

                {/* Glow effect mejorado para destacado */}
                {plan.highlight && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 rounded-3xl" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-xl -z-10 animate-pulse-slow" />
                    <div className="absolute -inset-2 bg-primary/5 rounded-3xl blur-2xl -z-20" />
                  </>
                )}

                {/* Badge premium ULTRA mejorado */}
                {plan.badge && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30">
                    <div className="relative">
                      {/* Glow animado de fondo */}
                      <div
                        className={`absolute inset-0 blur-lg animate-pulse ${
                          plan.isCustom ? "bg-purple-500/60" : "bg-primary/60"
                        }`}
                      />

                      {/* Badge principal */}
                      <div
                        className={`relative ${
                          plan.isCustom
                            ? "bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500"
                            : "bg-gradient-to-r from-primary via-primary/90 to-primary"
                        } text-black px-6 py-2.5 rounded-full text-sm font-black uppercase shadow-2xl shadow-primary/50 flex items-center gap-2 border-2 border-white/20`}
                      >
                        {plan.highlight && <Crown className="w-4 h-4 animate-pulse" />}
                        {plan.isCustom && <Star className="w-4 h-4 animate-pulse" />}
                        {plan.badge}
                      </div>
                    </div>
                  </div>
                )}

                {/* Contenido de la card */}
                <div className="text-center mb-8 relative z-10">
                  {/* Ícono ULTRA mejorado */}
                  <div className="relative inline-flex mb-6">
                    {/* Glow background */}
                    <div
                      className={`absolute inset-0 rounded-2xl blur-2xl transition-all duration-500 ${
                        plan.isCustom ? "bg-purple-500/40" : "bg-primary/40"
                      } ${isHovered ? "scale-[1.8] opacity-100" : "scale-100 opacity-50"}`}
                    />

                    {/* Círculo pulsante de fondo */}
                    {isHovered && (
                      <div
                        className={`absolute inset-0 rounded-full animate-ping ${
                          plan.isCustom ? "bg-purple-500/20" : "bg-primary/20"
                        }`}
                      />
                    )}

                    {/* Icon container */}
                    <div
                      className={`relative w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-500 border-2 ${
                        plan.isCustom
                          ? "bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-purple-500/30"
                          : "bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30"
                      } ${isHovered ? "rotate-12 scale-110 border-primary/60" : "rotate-0 scale-100"}`}
                    >
                      <Icon
                        className={`w-12 h-12 transition-all duration-500 ${
                          plan.isCustom ? "text-purple-400" : "text-primary"
                        } ${isHovered ? "scale-125" : "scale-100"}`}
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">{plan.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 min-h-[3rem]">{plan.description}</p>

                  {/* Precio ULTRA mejorado */}
                  <div className="mb-4">
                    <div
                      className={`text-5xl sm:text-6xl font-black transition-all duration-300 ${
                        plan.isCustom
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"
                          : "text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-primary"
                      } ${isHovered ? "scale-110 inline-block" : ""}`}
                    >
                      {plan.price}
                    </div>
                    {plan.period && <span className="text-gray-400 text-lg ml-2">{plan.period}</span>}
                  </div>

                  {/* Badge de dispositivos mejorado */}
                  <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 hover:bg-white/5 hover:border-white/20 transition-all">
                    <div
                      className={`w-2 h-2 rounded-full animate-pulse ${plan.isCustom ? "bg-purple-400" : "bg-primary"}`}
                    />
                    <p className="text-sm text-gray-400 font-semibold">{plan.devices}</p>
                  </div>
                </div>

                {/* Features ULTRA mejorados */}
                <div className="space-y-3 mb-8 relative z-10">
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 group/feature transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="relative mt-0.5">
                        {/* Check circle con glow */}
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 border ${
                            plan.isCustom
                              ? "bg-gradient-to-br from-purple-500/20 to-purple-500/10 border-purple-500/30 group-hover/feature:from-purple-500/40 group-hover/feature:to-purple-500/20 group-hover/feature:border-purple-500/60"
                              : "bg-gradient-to-br from-primary/20 to-primary/10 border-primary/30 group-hover/feature:from-primary/40 group-hover/feature:to-primary/20 group-hover/feature:border-primary/60"
                          } group-hover/feature:scale-125`}
                        >
                          <Check className={`w-4 h-4 ${plan.isCustom ? "text-purple-400" : "text-primary"}`} />
                        </div>

                        {/* Glow effect */}
                        <div
                          className={`absolute inset-0 rounded-full blur-md transition-opacity duration-300 opacity-0 group-hover/feature:opacity-100 ${
                            plan.isCustom ? "bg-purple-500/40" : "bg-primary/40"
                          }`}
                        />
                      </div>
                      <span className="text-sm text-gray-300 leading-relaxed group-hover/feature:text-white transition-colors duration-300 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button ULTRA mejorado */}
                <Button
                  onClick={handleCTA}
                  className={`w-full relative z-10 overflow-hidden group/btn transition-all duration-300 h-14 text-base sm:text-lg font-bold ${
                    plan.highlight
                      ? "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/60 border-2 border-primary/20"
                      : plan.isCustom
                        ? "bg-transparent border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-black hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30"
                        : "bg-transparent border-2 border-primary/50 text-primary hover:bg-primary hover:text-black hover:border-primary hover:shadow-lg hover:shadow-primary/30"
                  } hover:scale-105`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {plan.popular && (
                      <Star className="w-5 h-5 group-hover/btn:rotate-180 transition-transform duration-500" />
                    )}
                    {plan.highlight ? "Solicitar demo" : plan.isCustom ? "Solicitar cotización" : "Solicitar demo"}
                    <svg
                      className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>

                  {/* Shimmer effect mejorado */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                </Button>
              </div>
            )
          })}
        </div>

        {/* Footer ULTRA mejorado */}
        <div className="mt-20 text-center max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/50" />
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            ¿Tienes más equipos de los que incluye el plan? No hay problema. Puedes agregar dispositivos adicionales a
            tu plan por un costo unitario preferencial.
          </p>

          {/* Trust badges mejorados */}
          <div className="flex flex-wrap justify-center gap-6 text-sm pt-6">
            {[
              { icon: Check, text: "Cancelación flexible", color: "text-green-500" },
              { icon: Shield, text: "Soporte 24/7", color: "text-primary" },
              { icon: Zap, text: "Implementación en 48hs", color: "text-yellow-500" },
            ].map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/5 hover:border-white/20 transition-all duration-300 group"
              >
                <badge.icon className={`w-5 h-5 ${badge.color} group-hover:scale-110 transition-transform`} />
                <span className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
