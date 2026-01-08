"use client"

import { Eye, Server, Search, Shield, Zap, FileText, CheckCircle2, Sparkles, Heart, Ban } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Eye,
    title: "Te cuidamos las 24 horas",
    description: "Monitoreamos tu negocio todo el tiempo. Si algo raro pasa, nos enteramos antes que vos y actuamos.",
    features: [
      "Vigilancia continua",
      "Te avisamos si hay problemas",
      "Detectamos comportamientos sospechosos",
      "Controlamos tu red",
      "Cuidamos lo importante",
    ],
    ideal: "Negocios que quieren dormir tranquilos",
    color: "cyan",
  },
  {
    icon: Search,
    title: "Encontramos las puertas abiertas",
    description: "Revisamos tu infraestructura buscando debilidades que los hackers podrían usar para entrar.",
    features: [
      "Escaneos periódicos",
      "Te decimos qué arreglar primero",
      "Recomendaciones claras",
      "Revisamos configuraciones",
      "Reportes que se entienden",
    ],
    ideal: "Negocios que quieren saber dónde están parados",
    color: "cyan",
  },
  {
    icon: Server,
    title: "Blindamos tus sistemas",
    description: "Configuramos todo para que sea más difícil de atacar. Cerramos puertas y ponemos candados.",
    features: [
      "Configuración segura",
      "Quitamos lo que no necesitás",
      "Contraseñas más fuertes",
      "Actualizaciones automáticas",
      "Cerramos accesos innecesarios",
    ],
    ideal: "Negocios con servidores propios o en la nube",
    color: "cyan",
  },
  {
    icon: Shield,
    title: "Defensa automática",
    description:
      "Si detectamos un ataque, actuamos automáticamente: bloqueamos, aislamos y protegemos sin que tengas que hacer nada.",
    features: [
      "Bloqueo automático de amenazas",
      "Aislamiento de equipos infectados",
      "Contención preventiva",
      "Respuestas personalizadas",
      "Protección integrada",
    ],
    ideal: "Negocios que no pueden darse el lujo de parar",
    color: "cyan",
  },
  {
    icon: Zap,
    title: "Mantenemos todo funcionando",
    description: "Nos aseguramos de que tus equipos estén sanos, actualizados y funcionando bien.",
    features: [
      "Revisamos el rendimiento",
      "Inventario de software",
      "Limpieza periódica",
      "Control de recursos",
      "Menos problemas técnicos",
    ],
    ideal: "Negocios que quieren eficiencia",
    color: "cyan",
  },
  {
    icon: FileText,
    title: "Reportes que se entienden",
    description: "Te contamos cómo está tu seguridad en palabras simples. Sin jerga técnica, sin confusión.",
    features: [
      "Dashboards claros",
      "Reportes periódicos",
      "Priorización de riesgos",
      "Tendencias y mejoras",
      "Recomendaciones prácticas",
    ],
    ideal: "Dueños de negocio que quieren estar informados",
    color: "cyan",
  },
  {
    icon: Ban,
    title: "Control de productividad",
    description:
      "Bloqueamos sitios que distraen a tus empleados durante el horario laboral. Más foco, menos distracciones.",
    features: [
      "Bloqueo de redes sociales",
      "Filtrado de contenido no laboral",
      "Horarios personalizables",
      "Reportes de uso de internet",
      "Listas blancas y negras",
    ],
    ideal: "Negocios que quieren mejorar la productividad",
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
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-float" />
      <div
        className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Nuevo título emocional */}
        <div
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Cuidamos cada detalle</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Todo lo que hacemos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary">
              por tu negocio
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Protección completa para que vos te enfoques en lo que importa: hacer crecer tu empresa
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
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
                } ${isHovered ? "scale-105 border-primary/60 shadow-2xl shadow-primary/20" : "hover:scale-102"}`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
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
                      <Icon
                        className={`w-10 h-10 text-primary transition-all duration-500 ${isHovered ? "scale-125" : "scale-100"}`}
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-base text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

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

                  <div className="pt-6 border-t border-primary/10">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Ideal para:</p>
                        <p className="text-sm text-gray-400 leading-relaxed">{service.ideal}</p>
                      </div>
                    </div>
                  </div>
                </div>

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

          <p className="text-lg text-gray-400 mb-4">¿No sabés por dónde empezar?</p>
          <p className="text-sm text-gray-500">
            Te ayudamos a elegir lo que realmente necesita tu negocio. Sin vueltas, sin venderte lo que no necesitás.
          </p>
        </div>
      </div>
    </section>
  )
}
