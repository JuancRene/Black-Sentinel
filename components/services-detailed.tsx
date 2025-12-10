import { Eye, Server, Search, Shield, Zap, FileText } from "lucide-react"

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
  },
]

export function ServicesDetailed() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nuestros <span className="text-primary">Servicios</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluciones completas de ciberseguridad preventiva diseñadas para proteger tu negocio antes de que ocurra un
            incidente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-[#0D0D0D] border-2 border-[#1A1A1A] rounded-xl p-8 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">Qué incluye:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#1A1A1A]">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Ideal para:</p>
                  <p className="text-sm text-gray-400">{service.ideal}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
