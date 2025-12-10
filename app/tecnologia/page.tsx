import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Cpu, Brain, Network, Lock, Zap, Activity, Database, Cloud, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Tecnología - BlackSentinel",
  description:
    "Descubre las tecnologías de IA y automatización que utilizamos para proteger tu empresa. Monitoreo inteligente, análisis predictivo y defensa autónoma.",
}

export default function TecnologiaPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary animate-fade-in">
              <Cpu className="w-4 h-4" />
              <span>Stack Tecnológico</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up">
              Tecnología que
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-gradient">
                Protege tu Empresa
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Combinamos herramientas de última generación con inteligencia artificial avanzada para crear un escudo
              digital indestructible.
            </p>
          </div>
        </div>
      </section>

      {/* Stack Principal */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Nuestro <span className="text-primary">Stack Principal</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tecnologías enterprise premium que garantizan protección de nivel mundial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Next-Gen EDR & IA",
                icon: Shield,
                category: "ENDPOINT PROTECTION",
                description:
                  "Detección y respuesta ante amenazas en tiempo real utilizando Inteligencia Artificial. Bloqueamos ataques que los antivirus tradicionales no ven.",
                features: ["Protección basada en IA", "Detección de Día Cero", "Respuesta automatizada"],
              },
              {
                name: "Anti-Ransomware con Rollback",
                icon: Database,
                category: "DATA PROTECTION",
                description:
                  "Tecnología patentada que detecta la encriptación maliciosa y revierte los cambios automáticamente, recuperando tus archivos en segundos.",
                features: ["Detección de ransomware", "Rollback automático", "Recuperación instantánea"],
              },
              {
                name: "Patch Management",
                icon: Zap,
                category: "VULNERABILITY PREVENTION",
                description:
                  "Mantenemos Windows y tus aplicaciones críticas siempre actualizadas. Cerramos las brechas de seguridad antes de que sean explotadas.",
                features: ["Actualizaciones automáticas", "Gestión centralizada", "Zero-day protection"],
              },
              {
                name: "Auditoría de Vulnerabilidades",
                icon: Activity,
                category: "SECURITY ASSESSMENT",
                description:
                  "Escaneo continuo de tu red para detectar puertos abiertos, configuraciones débiles y riesgos de seguridad en tus dispositivos.",
                features: ["Escaneo continuo", "Reportes detallados", "Priorización de riesgos"],
              },
              {
                name: "Filtrado Web & DNS",
                icon: Globe,
                category: "WEB SECURITY",
                description:
                  "Control total sobre la navegación. Bloqueamos sitios maliciosos, phishing y contenido inapropiado para mantener la productividad y seguridad.",
                features: ["Filtrado de contenido", "Protección anti-phishing", "Control de acceso"],
              },
              {
                name: "Protección de Identidad",
                icon: Users,
                category: "IDENTITY MONITORING",
                description:
                  "Monitoreo proactivo de credenciales. Te alertamos si las contraseñas de tu equipo han sido filtradas en la Dark Web.",
                features: ["Monitoreo de Dark Web", "Alertas de credenciales", "Auditoría de contraseñas"],
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Corner Badge */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-[40px] rounded-tr-2xl flex items-start justify-end p-3">
                  <tech.icon className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-primary font-semibold tracking-wider uppercase">{tech.category}</span>
                    <h3 className="text-2xl font-bold mt-1 group-hover:text-primary transition-colors">{tech.name}</h3>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">{tech.description}</p>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    {tech.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IA y Automatización */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Potenciado por <span className="text-primary">Inteligencia Artificial</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Nuestros algoritmos de IA aprenden, predicen y responden automáticamente a amenazas emergentes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Machine Learning Avanzado",
                description:
                  "Modelos entrenados con millones de patrones de ataque para detectar amenazas conocidas y desconocidas.",
                items: [
                  "Detección de anomalías de comportamiento",
                  "Clasificación automática de amenazas",
                  "Análisis predictivo de riesgos",
                  "Reducción de falsos positivos mediante aprendizaje continuo",
                ],
              },
              {
                icon: Zap,
                title: "Automatización Inteligente",
                description:
                  "Scripts y playbooks que ejecutan respuestas inmediatas sin intervención humana cuando detectan amenazas.",
                items: [
                  "Bloqueo automático de IPs maliciosas",
                  "Aislamiento de sistemas comprometidos",
                  "Generación automática de reportes",
                  "Actualización continua de reglas de firewall",
                ],
              },
              {
                icon: Activity,
                title: "Análisis en Tiempo Real",
                description:
                  "Procesamiento de millones de eventos por segundo para identificar amenazas en el momento exacto que ocurren.",
                items: [
                  "Stream processing de logs y eventos",
                  "Correlación de eventos multi-fuente",
                  "Alertas inteligentes basadas en contexto",
                  "Dashboards actualizados en tiempo real",
                ],
              },
              {
                icon: Cloud,
                title: "Threat Intelligence",
                description:
                  "Integración con feeds globales de amenazas para mantener actualizadas las defensas contra ataques emergentes.",
                items: [
                  "Integración con bases de datos de amenazas globales",
                  "Actualización automática de IOCs",
                  "Análisis de reputación de IPs y dominios",
                  "Información contextual de amenazas detectadas",
                ],
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infraestructura */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-primary">Infraestructura</span> y Deployment
              </h2>
              <p className="text-gray-400 text-lg">
                Arquitectura diseñada para escalabilidad, redundancia y alta disponibilidad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Cloud className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Cloud & On-Premise</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Deployment flexible según necesidades
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Compatible con AWS, Azure, GCP
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Instalación on-premise disponible
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Almacenamiento Seguro</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Encriptación de datos en reposo y tránsito
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Backups automáticos diarios
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Retención configurable de logs
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Network className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Alta Disponibilidad</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Arquitectura redundante
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    SLA de 99.9% uptime
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Failover automático
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Compliance</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    ISO 27001 ready
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    GDPR compliant
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Auditorías de seguridad regulares
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold">
              ¿Listo para proteger tu empresa con
              <span className="block mt-2 text-primary">tecnología de última generación?</span>
            </h2>
            <p className="text-xl text-gray-400">
              Agenda una demo y descubre cómo nuestro stack tecnológico puede defender tu infraestructura.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="https://tally.so/r/b5Z2A7" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 h-12 text-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">Solicitar demo</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
              </Link>
              <Link href="/servicios">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10 px-8 h-12 text-lg bg-transparent"
                >
                  Ver servicios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
