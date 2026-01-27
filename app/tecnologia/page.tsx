import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Brain, Network, Lock, Zap, Activity, Database, Cloud, Globe, Users, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Cómo te protegemos - BlackSentinel",
  description: "Conocé las herramientas que usamos para cuidar tu negocio. Sin complicaciones, sin jerga técnica.",
}

export default function TecnologiaPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section - Nuevo tono emocional para PyMEs */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary animate-fade-in">
              <Heart className="w-4 h-4" />
              <span>Protección sin complicaciones</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up">
              No necesitás entender
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-gradient">
                cómo funciona para estar protegido
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Nosotros nos encargamos de la parte técnica. Vos solo recibís la tranquilidad de saber que tu negocio está
              cuidado.
            </p>
          </div>
        </div>
      </section>

      {/* Stack Principal - Lenguaje simplificado para PyMEs */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              ¿Qué <span className="text-primary">herramientas usamos</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Las mismas que usan los bancos y las empresas grandes, pero adaptadas para negocios como el tuyo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Protección inteligente",
                icon: Shield,
                category: "TU ESCUDO DIGITAL",
                description:
                  "Un guardián que aprende y detecta amenazas que los antivirus comunes no ven. Bloquea ataques antes de que hagan daño.",
                features: ["Aprende de cada amenaza", "Detecta virus nuevos", "Actúa automáticamente"],
              },
              {
                name: "Recuperación instantánea",
                icon: Database,
                category: "TU RED DE SEGURIDAD",
                description:
                  "Si un ransomware intenta encriptar tus archivos, lo detectamos y recuperamos todo en segundos. Es como tener un botón de 'deshacer' para ataques.",
                features: ["Detecta ransomware", "Recupera archivos automáticamente", "Volvés a trabajar rápido"],
              },
              {
                name: "Actualizaciones automáticas",
                icon: Zap,
                category: "SIEMPRE AL DÍA",
                description:
                  "Windows y tus programas siempre actualizados sin que tengas que hacer nada. Cerramos las puertas que los hackers usan para entrar.",
                features: ["Se actualiza solo", "No te interrumpe", "Cierra vulnerabilidades"],
              },
              {
                name: "Chequeo de salud",
                icon: Activity,
                category: "REVISIÓN CONSTANTE",
                description:
                  "Escaneamos tu red continuamente buscando problemas de configuración, puertos abiertos y riesgos que podrían ser explotados.",
                features: ["Escaneo continuo", "Reportes claros", "Prioriza lo urgente"],
              },
              {
                name: "Navegación segura",
                icon: Globe,
                category: "INTERNET SIN RIESGOS",
                description:
                  "Bloqueamos sitios peligrosos y phishing antes de que tu equipo pueda acceder. Tu gente puede trabajar tranquila sin caer en trampas.",
                features: ["Bloquea sitios falsos", "Protege contra phishing", "Navegación productiva"],
              },
              {
                name: "Vigilancia de contraseñas",
                icon: Users,
                category: "TUS CREDENCIALES PROTEGIDAS",
                description:
                  "Monitoreamos si las contraseñas de tu equipo fueron filtradas en la Dark Web y te avisamos para que las cambien.",
                features: ["Monitoreo de filtraciones", "Alertas tempranas", "Recomendaciones claras"],
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
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

      {/* Proveedores - N-Able y Sentinel One */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Potenciado por los <span className="text-primary">mejores del mercado</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Trabajamos con los líderes de la industria de ciberseguridad para brindarte protección de nivel empresarial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* N-Able */}
            <div className="group flex flex-col items-center text-center p-8 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 h-full">
              <div className="mb-6 h-32 w-full flex items-center justify-center bg-white/5 rounded-lg">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview-349ADTXGyIBjqk8Za9tB0zBV0o12wv.png" 
                  alt="N-Able Logo" 
                  className="max-h-24 max-w-xs object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">N-Able</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
                Líder global en soluciones de seguridad y mantenimiento de sistemas. Proporciona la infraestructura de monitoreo y actualización automática que mantiene tu negocio siempre protegido.
              </p>
              <div className="space-y-2 text-xs text-gray-500 border-t border-white/10 pt-4 w-full">
                <p>✓ Actualizaciones automáticas</p>
                <p>✓ Monitoreo 24/7</p>
                <p>✓ Gestión remota de sistemas</p>
              </div>
            </div>

            {/* Sentinel One */}
            <div className="group flex flex-col items-center text-center p-8 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 h-full">
              <div className="mb-6 h-32 w-full flex items-center justify-center bg-white/5 rounded-lg">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%281%29-TkqoqQ94wsAFXD5fvWNmYMEfZ2sM66.png" 
                  alt="SentinelOne Logo" 
                  className="max-h-24 max-w-xs object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">SentinelOne</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
                Plataforma de protección de endpoints con IA de última generación. Detecta y bloquea amenazas en tiempo real, incluyendo ransomware y ataques zero-day.
              </p>
              <div className="space-y-2 text-xs text-gray-500 border-t border-white/10 pt-4 w-full">
                <p>✓ Detección de amenazas con IA</p>
                <p>✓ Recuperación de ransomware</p>
                <p>✓ Protección de endpoints</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Esta combinación de tecnologías nos permite ofrecerte seguridad de nivel empresarial,<br />
              personalizada para las necesidades de tu negocio.
            </p>
          </div>
        </div>
      </section>

      {/* IA Section - Explicación simple para no-técnicos */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              ¿Cómo sabe <span className="text-primary">qué es peligroso</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Usamos inteligencia artificial que aprende de millones de ataques para reconocer amenazas, incluso las
              nuevas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Aprende de los ataques",
                description:
                  "Nuestra IA estudió millones de virus y ataques. Por eso reconoce amenazas que otros sistemas no detectan.",
                items: [
                  "Detecta comportamientos sospechosos",
                  "Identifica amenazas nuevas",
                  "Cada vez es más precisa",
                  "Menos falsas alarmas",
                ],
              },
              {
                icon: Zap,
                title: "Actúa sin que lo notes",
                description:
                  "Cuando detecta algo malo, actúa inmediatamente. Bloquea, aísla y protege sin interrumpir tu trabajo.",
                items: [
                  "Bloqueo automático de amenazas",
                  "Aislamiento de equipos infectados",
                  "Reportes que se generan solos",
                  "Actualización continua de defensas",
                ],
              },
              {
                icon: Activity,
                title: "Monitoreo en tiempo real",
                description:
                  "Procesamos miles de eventos por segundo para detectar problemas en el momento exacto que ocurren.",
                items: ["Vigilancia 24/7", "Correlación de eventos", "Alertas inteligentes", "Dashboards actualizados"],
              },
              {
                icon: Cloud,
                title: "Información global de amenazas",
                description:
                  "Nos conectamos con bases de datos mundiales de amenazas para estar siempre un paso adelante de los atacantes.",
                items: [
                  "Inteligencia de amenazas global",
                  "Actualización automática",
                  "Análisis de reputación",
                  "Contexto de cada amenaza",
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

      {/* Infraestructura - Simplificado para PyMEs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-primary">Seguro</span> y confiable
              </h2>
              <p className="text-gray-400 text-lg">Tu información está protegida y disponible cuando la necesitás.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Cloud className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Funciona en la nube</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    No necesitás servidores propios
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Compatible con AWS, Azure, Google
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Se adapta a tu infraestructura
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Tus datos protegidos</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Todo encriptado
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Backups automáticos
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Historial de actividad
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Network className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Siempre disponible</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Sistema redundante
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    99.9% de disponibilidad
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Recuperación automática
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Cumplimiento legal</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Cumple normativas argentinas
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Compatible con GDPR
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Auditorías regulares
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Nuevo CTA emocional */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold">
              No necesitás ser experto
              <span className="block mt-2 text-primary">para tener seguridad de expertos</span>
            </h2>
            <p className="text-xl text-gray-400">Nosotros ponemos la tecnología. Vos solo disfrutás la tranquilidad.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="https://tally.so/r/b5Z2A7" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 h-12 text-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">Quiero mi diagnóstico gratis</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
              </Link>
              <Link href="https://wa.me/5493435186929" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10 px-8 h-12 text-lg bg-transparent"
                >
                  Hablar por WhatsApp
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
