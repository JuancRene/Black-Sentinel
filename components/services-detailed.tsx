"use client"

import { Eye, Server, Search, Shield, Zap, FileText, CheckCircle2, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Eye,
    title: "Monitoreo avanzado 24/7",
    description:
      "Vigilancia continua de tu infraestructura con alertas tempranas ante cualquier comportamiento anómalo.",
    features: [
      "Detección en tiempo real",
      "Alertas automáticas por email y dashboard",
      "Análisis de logs y eventos de seguridad",
      "Monitoreo de tráfico de red",
      "Supervisión de servicios críticos",
    ],
    ideal: "Empresas que necesitan visibilidad constante de su infraestructura",
    color: "cyan",
  },
  {
    icon: Search,
    title: "Análisis de vulnerabilidades",
    description: "Escaneos profundos y continuos para identificar debilidades antes de que sean explotadas.",
    features: [
      "Escaneo automatizado mensual/semanal",
      "Priorización de vulnerabilidades críticas",
      "Recomendaciones específicas de corrección",
      "Testing de configuraciones",
      "Informes detallados con scoring CVSS",
    ],
    ideal: "Negocios que quieren conocer su superficie de ataque",
    color: "cyan",
  },
  {
    icon: Server,
    title: "Hardening de sistemas",
    description: "Fortalecimiento de servidores, endpoints y configuraciones para reducir vectores de ataque.",
    features: [
      "Configuración segura de sistemas operativos",
      "Eliminación de servicios innecesarios",
      "Políticas de contraseñas robustas",
      "Actualizaciones de seguridad automatizadas",
      "Cierre de puertos y servicios no utilizados",
    ],
    ideal: "Empresas con infraestructura propia o cloud",
    color: "cyan",
  },
  {
    icon: Shield,
    title: "Automatización defensiva",
    description: "Respuestas automáticas ante amenazas detectadas: bloqueos, aislamiento y contención preventiva.",
    features: [
      "Reglas de firewall dinámicas",
      "Bloqueo automático de IPs maliciosas",
      "Aislamiento de servicios comprometidos",
      "Scripts de respuesta personalizados",
      "Integración con sistemas de prevención",
    ],
    ideal: "Organizaciones que buscan reducir tiempo de respuesta",
    color: "cyan",
  },
  {
    icon: Zap,
    title: "Mantenimiento Preventivo y Salud del Sistema",
    description: "Mejora del rendimiento y estabilidad de tus sistemas mientras aumentas la seguridad.",
    features: [
      "Análisis de performance y cuellos de botella",
      "Inventario de Software",
      "Limpieza de archivos temporales y caché",
      "Monitoreo de uso de CPU y RAM",
      "Reducción de costos operativos",
    ],
    ideal: "Empresas que buscan eficiencia y ahorro",
    color: "cyan",
  },
  {
    icon: FileText,
    title: "Reportes y métricas",
    description: "Informes claros y accionables sobre el estado de seguridad de tu infraestructura.",
    features: [
      "Dashboards en tiempo real",
      "Reportes mensuales/semanales/diarios",
      "Métricas de riesgo priorizadas",
      "Tendencias y evolución de seguridad",
      "Recomendaciones estratégicas",
    ],
    ideal: "Líderes que necesitan visibilidad ejecutiva",
    color: "cyan",
  },
]

export function ServicesDetailed() {
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
      className="relative py-24 sm:py-32 px-4 bg-gradient-to-b from-black via-[#0A0A0A] to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-float" />
      <div 
        className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header mejorado */}
        <div 
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Catálogo completo</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary">Servicios</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Soluciones completas de ciberseguridad preventiva diseñadas para proteger tu negocio antes de que ocurra un
            incidente
          </p>
        </div>

        {/* Grid de servicios mejorado */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === index

            return (
              <div
                key={service.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-2 border-primary/20 rounded-3xl p-8 transition-all duration-500 overflow-hidden ${
                  revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                } ${
                  isHovered ? "scale-105 border-primary/60 shadow-2xl shadow-primary/20" : "hover:scale-102"
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Efecto de brillo superior */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                {/* Glow effect en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Contenido */}
                <div className="relative z-10">
                  {/* Ícono mejorado */}
                  <div className="relative mb-6">
                    <div 
                      className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 bg-primary/30 ${
                        isHovered ? "scale-150 opacity-100" : "scale-100 opacity-50"
                      }`}
                    />
                    <div 
                      className={`relative w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isHovered ? "rotate-12 scale-110" : "rotate-0 scale-100"
                      }`}
                    >
                      <Icon className={`w-10 h-10 text-primary transition-all duration-500 ${isHovered ? "scale-125" : "scale-100"}`} />
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-base text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

                  {/* Features con checkmarks mejorados */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-8 h-px bg-primary/50" />
                      Qué incluye
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className="text-gray-300 text-sm flex items-start gap-3 group/feature transition-all duration-300 hover:translate-x-1"
                        >
                          <div className="relative mt-0.5">
                            <CheckCircle2 className="w-5 h-5 text-primary transition-all duration-300 group-hover/feature:scale-110" />
                            <div className="absolute inset-0 bg-primary/30 rounded-full blur-sm opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300" />
                          </div>
                          <span className="group-hover/feature:text-white transition-colors duration-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer con "Ideal para" */}
                  <div className="pt-6 border-t border-primary/10">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                          Ideal para:
                        </p>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {service.ideal}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decoración en esquina */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div 
          className={`mt-20 text-center transition-all duration-1000 delay-500 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50" />
            <Sparkles className="w-5 h-5 text-primary" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          
          <p className="text-lg text-gray-400 mb-4">
            ¿Necesitas una solución personalizada?
          </p>
          <p className="text-sm text-gray-500">
            Todos nuestros servicios se pueden combinar y adaptar según las necesidades específicas de tu empresa.
          </p>
        </div>
      </div>
    </section>
  )
}
