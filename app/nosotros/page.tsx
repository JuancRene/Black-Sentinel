import { Shield, Zap, Globe, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                No vendemos software.
                <span className="block mt-2 text-primary">
                  Vendemos la certeza de que tu negocio seguirá operando mañana.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                En BlackSentinel, estamos redefiniendo el estándar de seguridad para empresas en Latinoamérica.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-red-950/30 to-red-900/10 border border-red-800/30 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">El Problema</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Durante años, la ciberseguridad avanzada fue un lujo exclusivo de las grandes corporaciones y los
                  bancos. Las PyMEs tenían que conformarse con un antivirus gratuito y "cruzar los dedos". Pero los
                  hackers no discriminan por tamaño; atacan donde ven puertas abiertas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Nuestra Misión</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  BlackSentinel nació con un objetivo claro:{" "}
                  <span className="text-primary font-semibold">Democratizar la ciberseguridad de élite.</span> Desde
                  nuestra base en Argentina, hemos construido una arquitectura de defensa que combina la potencia de
                  motores de grado militar (utilizados por gobiernos globales) con la accesibilidad de la Inteligencia
                  Artificial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">¿Quiénes Somos?</h2>
              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                Somos un equipo de especialistas en defensa digital que cree en la protección proactiva. No esperamos a
                que suene la alarma; cazamos las amenazas antes de que toquen tus datos. Creemos que un reporte de
                seguridad no debería necesitar un traductor. Por eso, utilizamos IA para explicarte qué está pasando en
                tu red en tu propio idioma.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              <div className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Tecnología Zero-Trust</h3>
                <p className="text-gray-400 leading-relaxed">
                  No confiamos en nada ni en nadie por defecto. Nuestra infraestructura analiza cada archivo, cada
                  conexión y cada proceso en tiempo real.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Globe className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Gestión Integral (360°)</h3>
                <p className="text-gray-400 leading-relaxed">
                  Gestionamos la salud completa de tu ecosistema digital: desde actualizaciones hasta auditoría de
                  contraseñas y monitoreo en la Dark Web.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Resiliencia Operativa</h3>
                <p className="text-gray-400 leading-relaxed">
                  Nuestra tecnología de Rollback nos permite revertir ataques de Ransomware en minutos, garantizando la
                  continuidad de tu negocio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/20 to-purple-900/10 border border-primary/30 rounded-2xl p-8 sm:p-12 backdrop-blur-sm text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Nuestra Promesa</h2>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  Mientras tú te ocupas de vender, crecer y gestionar tu equipo, nosotros somos los{" "}
                  <span className="text-primary font-semibold">guardianes invisibles</span> que aseguran que tus
                  sistemas estén siempre arriba, tus datos blindados y tu reputación intacta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Letter Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Una carta de nuestro fundador</h2>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 sm:p-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4 text-gray-300 text-lg leading-relaxed">
                    <p>
                      "Creé BlackSentinel porque vi demasiadas empresas perder años de trabajo por un clic equivocado o
                      una contraseña débil.
                    </p>
                    <p>
                      La tecnología para evitar esto existía, pero era compleja, costosa y difícil de gestionar. Me
                      propuse cambiar eso. Quería construir una plataforma que fuera tan robusta como para detener a un
                      hacker ruso, pero tan simple que cualquier dueño de negocio pudiera entender su reporte mensual.
                    </p>
                    <p>
                      Hoy, BlackSentinel protege activos críticos en toda la región, permitiendo que los emprendedores
                      duerman tranquilos sabiendo que hay una inteligencia artificial despierta cuidando su esfuerzo."
                    </p>
                    <div className="pt-4 border-t border-gray-800">
                      <p className="text-white font-semibold">— Juan Cruz R.</p>
                      <p className="text-gray-400 text-base">Fundador de BlackSentinel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                BlackSentinel es tu departamento de{" "}
                <span className="text-primary">Ciberseguridad externo, disponible 24/7.</span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="https://tally.so/r/b5Z2A7" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-6 text-lg relative overflow-hidden group"
                  >
                    <span className="relative z-10">Comenzar ahora</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-white to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </Button>
                </Link>
                <Link href="/servicios">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg bg-transparent"
                  >
                    Ver nuestros servicios
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
