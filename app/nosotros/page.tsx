import { Shield, Award, Heart, Users, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section - Tono emocional para PyMEs */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Somos tu equipo de seguridad.
                <span className="block mt-2 text-primary">Solo que no tenés que contratarlos en planta.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Entendemos que tu prioridad es hacer crecer tu negocio, no convertirte en experto en ciberseguridad. Por
                eso existimos.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Section - Problema desde la perspectiva PyME */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-red-950/30 to-red-900/10 border border-red-800/30 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">El problema que nadie te cuenta</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  La seguridad informática siempre fue cosa de empresas grandes con presupuestos enormes. Las PyMEs
                  quedaron a la deriva, con un antivirus gratuito y la esperanza de que "a mí no me va a pasar". Pero
                  los hackers no discriminan por tamaño: atacan donde ven puertas abiertas. Y las PyMEs suelen tener
                  muchas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section - Misión enfocada en PyMEs */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Por eso creamos BlackSentinel</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Queríamos que cualquier PyME pudiera tener la misma protección que usan los bancos, pero{" "}
                  <span className="text-primary font-semibold">
                    sin el precio de banco y sin la complejidad técnica.
                  </span>{" "}
                  Desde Argentina, construimos un servicio que combina tecnología de primer nivel con atención humana
                  real. Porque cuando tenés un problema, querés hablar con alguien que te entienda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section - Enfoque en el acompañamiento */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">¿Cómo trabajamos?</h2>
              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                No somos un software que instalás y te olvidas. Somos un equipo de personas que cuida tu negocio como si
                fuera el nuestro.
              </p>
            </div>

            {/* Three Pillars - Valores desde perspectiva PyME */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              <div className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Prevención, no parches</h3>
                <p className="text-gray-400 leading-relaxed">
                  No esperamos a que pase algo malo para actuar. Monitoreamos todo el tiempo y actuamos antes de que
                  tengas un problema.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Personas reales</h3>
                <p className="text-gray-400 leading-relaxed">
                  Cuando nos escribís, te responde una persona. No un bot, no un ticket que se pierde. Alguien que
                  conoce tu caso y te ayuda.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Tu tranquilidad primero</h3>
                <p className="text-gray-400 leading-relaxed">
                  Nuestro trabajo es que puedas dormir tranquilo sabiendo que alguien está cuidando tu negocio mientras
                  descansás.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Promise Section - Promesa emocional */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/20 to-purple-900/10 border border-primary/30 rounded-2xl p-8 sm:p-12 backdrop-blur-sm text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Nuestra promesa</h2>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  Mientras vos te ocupás de vender, atender clientes y hacer crecer tu negocio, nosotros somos los{" "}
                  <span className="text-primary font-semibold">guardianes invisibles</span> que se aseguran de que todo
                  siga funcionando, que tus datos estén seguros y que no pierdas ni un día de trabajo por un ataque
                  informático.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Letter - Carta más cercana */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Por qué hago esto</h2>
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
                      "Vi a demasiados negocios perder todo por un clic en el mail equivocado o una contraseña débil.
                    </p>
                    <p>
                      La tecnología para evitarlo existía, pero era carísima y complicada. Decidí cambiar eso. Quería
                      construir algo que fuera tan fuerte como para frenar a un hacker profesional, pero tan simple que
                      cualquier dueño de negocio pudiera entender qué está pasando con su seguridad.
                    </p>
                    <p>
                      Hoy, BlackSentinel protege negocios en toda la región. Y cada noche, cuando me voy a dormir, sé
                      que hay empresarios que descansan tranquilos porque nosotros estamos vigilando."
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

        {/* CTA Section - CTA más humano */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                ¿Querés conocernos?
                <span className="block mt-2 text-primary">Charlemos sin compromiso.</span>
              </h2>
              <p className="text-xl text-gray-400">
                Te contamos cómo funciona, respondemos tus dudas y te hacemos un diagnóstico gratuito de tu situación
                actual.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="https://tally.so/r/b5Z2A7" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-6 text-lg relative overflow-hidden group"
                  >
                    <span className="relative z-10">Agendar una charla</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-white to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </Button>
                </Link>
                <Link href="https://wa.me/5493435186929" target="_blank">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg bg-transparent"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Escribinos por WhatsApp
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
