"use client"

import { Eye, Server, Search, Shield, Zap, FileText, Ban, Check, Activity, Cpu, Lock } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Eye,
    title: "Vigilancia Activa 24/7",
    description: "Tus sistemas nunca duermen, nosotros tampoco. Monitoreo continuo de red y endpoints.",
    features: [
      "Detección de intrusos en tiempo real",
      "Análisis de tráfico anómalo",
      "Respuesta inmediata a incidentes",
      "Logs de auditoría forense",
    ],
    ideal: "Negocios que operan fuera de hora",
  },
  {
    icon: Search,
    title: "Análisis de Vulnerabilidades",
    description: "Encontramos las grietas antes que los atacantes. Escaneos profundos de tu infraestructura.",
    features: [
      "Penetration Testing automatizado",
      "Reportes de riesgo priorizados",
      "Revisión de configuraciones cloud",
      "Compliance check",
    ],
    ideal: "Empresas con datos sensibles",
  },
  {
    icon: Server,
    title: "Hardening de Sistemas",
    description: "Blindaje de servidores y estaciones de trabajo. Cerramos puertas innecesarias.",
    features: [
      "Gestión de parches de seguridad",
      "Políticas de contraseñas robustas",
      "Desactivación de servicios legacy",
      "Cifrado de discos",
    ],
    ideal: "Infraestructura crítica",
  },
  {
    icon: Shield,
    title: "Defensa Autónoma",
    description: "Nuestra IA bloquea ataques conocidos y desconocidos (Zero-day) en milisegundos.",
    features: [
      "Bloqueo de Ransomware por comportamiento",
      "Aislamiento automático de equipos",
      "Rollback de archivos encriptados",
      "Protección sin firmas (Next-Gen)",
    ],
    ideal: "Prevención de parálisis operativa",
  },
  {
    icon: Zap,
    title: "Optimización de Recursos",
    description: "No solo protegemos, hacemos que todo ande mejor. Limpieza y mantenimiento.",
    features: [
      "Inventario de software y hardware",
      "Eliminación de Bloatware",
      "Control de actualizaciones",
      "Métricas de rendimiento",
    ],
    ideal: "Eficiencia operativa",
  },
  {
    icon: FileText,
    title: "Inteligencia y Reportes",
    description: "Traducimos bits y bytes a decisiones de negocio claras.",
    features: [
      "Dashboards ejecutivos en vivo",
      "Resumen mensual de amenazas",
      "ROI de ciberseguridad",
      "Sugerencias de mejora continua",
    ],
    ideal: "Gerentes y Dueños",
  },
  {
    icon: Ban,
    title: "Control de Navegación",
    description: "Filtro de contenido web y control de aplicaciones para mejorar el foco.",
    features: [
      "Bloqueo de sitios maliciosos/phishing",
      "Restricción de redes sociales (opcional)",
      "Control de descargas",
      "Horarios de navegación",
    ],
    ideal: "Productividad y seguridad",
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
      className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden"
    >
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Decorative Glows */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-[#0AB9C3]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-[500px] h-[500px] bg-[#0AB9C3]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0AB9C3]/30 bg-[#0AB9C3]/5 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(10,185,195,0.2)] mb-6">
            <Activity className="w-3 h-3 text-[#0AB9C3]" />
            <span className="text-xs font-semibold text-[#0AB9C3] uppercase tracking-wider">Suite de Seguridad Integral</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Todo lo que hacemos <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0AB9C3] to-teal-500">
              por tu tranquilidad
            </span>
          </h2>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Una arquitectura de defensa en capas diseñada para cubrir cada ángulo de tu infraestructura digital.
          </p>
        </div>

        {/* --- SERVICES GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === index

            return (
              <div
                key={service.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-6 transition-all duration-500 hover:border-[#0AB9C3]/50 hover:shadow-[0_0_30px_-10px_rgba(10,185,195,0.15)] overflow-hidden ${
                  revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Fondo sutil en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0AB9C3]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner Markers (Decoración Tech) */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-[#0AB9C3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-[#0AB9C3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-[#0AB9C3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-[#0AB9C3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* ICONO (Estilo Chip) */}
                  <div className="mb-6 flex justify-between items-start">
                    <div className="relative w-12 h-12 flex items-center justify-center bg-zinc-900 border border-zinc-700 rounded-lg group-hover:border-[#0AB9C3]/50 group-hover:bg-[#0AB9C3]/10 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-zinc-400 group-hover:text-[#0AB9C3] transition-colors duration-300" />
                    </div>
                    {/* Decorative ID number */}
                    <span className="text-[10px] font-mono text-zinc-700 group-hover:text-[#0AB9C3]/50 transition-colors">
                        MOD-0{index + 1}
                    </span>
                  </div>

                  {/* TEXTO */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#0AB9C3] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* FEATURES LIST */}
                  <div className="space-y-3 mb-6 bg-black/20 p-4 rounded-xl border border-white/5">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                         <div className="mt-0.5 w-1 h-1 rounded-full bg-[#0AB9C3]" />
                         <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* FOOTER BADGE */}
                  <div className="mt-auto pt-4 border-t border-zinc-800 flex items-center gap-2">
                     <Cpu className="w-3 h-3 text-zinc-500" />
                     <span className="text-xs text-zinc-500 font-medium uppercase tracking-wide">
                        Target: {service.ideal}
                     </span>
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
