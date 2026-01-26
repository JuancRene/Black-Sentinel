import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Eye, Zap, Shield, MessageCircle, Terminal, Moon, Coffee, Briefcase, Check, ChevronDown } from "lucide-react"
import Link from "next/link"

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
      <summary className="flex justify-between items-center cursor-pointer text-white font-semibold text-lg list-none">
        <span>{question}</span>
        <ChevronDown className="w-5 h-5 text-primary transition-transform group-open:rotate-180" />
      </summary>
      <p className="mt-4 text-gray-400 leading-relaxed">{answer}</p>
    </details>
  )
}

export default function NoxPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        {/* Hero Section - Tono más amigable */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-5xl lg:text-6xl font-bold text-white">Hola, soy NOX.</h1>
                <p className="text-2xl font-semibold text-primary">Tu guardián digital que nunca duerme.</p>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Soy la inteligencia artificial de BlackSentinel. Mi trabajo es cuidar tu negocio las 24 horas y
                  avisarte si algo anda mal. Pero tranquilo, te hablo en español, no en códigos raros.
                </p>
                <Link
                  href="https://tally.so/r/b5Z2A7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-primary/90 text-black font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                >
                  Quiero que NOX cuide mi negocio
                </Link>
              </div>

              <div className="flex justify-center items-center relative animate-fade-in">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video_Listo_Con_Fondo_Negro-PXtROOKJnVbSe3ZZZi7dznUKO3LClA.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-[0_0_50px_rgba(10,185,195,0.4)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Story - Historia más cercana */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-white">¿Por qué una pantera?</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Porque las panteras son sigilosas, rápidas y protectoras. Ven en la oscuridad cuando otros no pueden. Así
              soy yo: detecto amenazas antes de que te des cuenta, actúo rápido y te cuido sin hacer ruido.
            </p>
          </div>
        </section>

        {/* Feature Grid - Beneficios en lenguaje simple */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Nunca parpadeo</h3>
              <p className="text-gray-400 leading-relaxed">
                Monitoreo tu negocio cada segundo del día. No necesito dormir, ni vacaciones, ni café.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Reacciono al instante</h3>
              <p className="text-gray-400 leading-relaxed">
                Cuando detecto algo sospechoso, actúo en milisegundos. Bloqueo la amenaza antes de que pueda hacer daño.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Me curo solo</h3>
              <p className="text-gray-400 leading-relaxed">
                Mantengo tus sistemas actualizados y parcheados automáticamente. Vos no tenés que hacer nada.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Te hablo claro</h3>
              <p className="text-gray-400 leading-relaxed">
                Nada de mensajes en código. Te explico qué pasó con palabras que cualquiera puede entender.
              </p>
            </div>
          </div>
        </section>

        {/* NOX Translator Section - Comparación más clara */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Así te aviso cuando pasa algo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-red-500 uppercase tracking-wider">Otros sistemas</p>
                <div className="bg-gray-950 rounded-xl p-6 shadow-xl border-2 border-red-500/50">
                  <div className="flex items-start gap-3 mb-3">
                    <Terminal className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div className="font-mono text-sm text-red-400">ALERTA CRÍTICA</div>
                  </div>
                  <p className="font-mono text-sm text-red-400 leading-relaxed">
                    ERROR 0x8004: Payload malicioso detectado en System32. ¿Abortar proceso?
                  </p>
                  <div className="mt-4 flex gap-2">
                    <button className="font-mono text-xs bg-red-600 text-white px-3 py-1 rounded">ABORTAR</button>
                    <button className="font-mono text-xs border border-red-500 text-red-400 px-3 py-1 rounded">
                      IGNORAR
                    </button>
                  </div>
                  <p className="mt-4 text-xs text-red-300">¿Qué significa esto? 🤷</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider">Cómo te avisa NOX</p>
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 shadow-xl border-2 border-primary/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30">
                      <Eye className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white mb-1">NOX</div>
                      <p className="text-gray-300 leading-relaxed">
                        ¡Ey! Atrapé un virus que intentaba entrar a tu sistema. Ya lo eliminé. Tu compu está segura. 👍
                      </p>
                      <div className="text-xs text-gray-500 mt-2">Hace 2 minutos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline - Lenguaje más cotidiano */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Un día conmigo cuidándote</h2>

            <div className="relative">
              <div className="absolute left-[31px] top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20 shadow-[0_0_15px_rgba(10,185,195,0.5)]" />

              <div className="space-y-12">
                <div className="relative flex gap-6 items-start animate-fade-in">
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg shadow-primary/50 flex-shrink-0">
                    <Moon className="w-8 h-8 text-black" />
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">03:15 AM</div>
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-primary/30 transition-all">
                      <p className="text-white font-semibold mb-2">Vos dormís tranquilo.</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        <span className="text-primary font-semibold">NOX:</span> Bloqueé un intento de acceso desde
                        China. Te lo cuento mañana en el reporte.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex gap-6 items-start animate-fade-in">
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg shadow-primary/50 flex-shrink-0">
                    <Coffee className="w-8 h-8 text-black" />
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">08:50 AM</div>
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-primary/30 transition-all">
                      <p className="text-white font-semibold mb-2">Vos tomás el primer café.</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        <span className="text-primary font-semibold">NOX:</span> Actualicé Windows en todos los equipos.
                        No te interrumpí porque fue en segundo plano.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex gap-6 items-start animate-fade-in">
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg shadow-primary/50 flex-shrink-0">
                    <Briefcase className="w-8 h-8 text-black" />
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">02:30 PM</div>
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-primary/30 transition-all">
                      <p className="text-white font-semibold mb-2">Vos estás en una reunión importante.</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        <span className="text-primary font-semibold">NOX:</span> María de contabilidad bajó un archivo
                        sospechoso. Lo puse en cuarentena antes de que lo abriera. Crisis evitada.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex gap-6 items-start animate-fade-in">
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg shadow-primary/50 flex-shrink-0">
                    <Check className="w-8 h-8 text-black" />
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">11:59 PM</div>
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-primary/30 transition-all">
                      <p className="text-white font-semibold mb-2">Termina el día.</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        <span className="text-primary font-semibold">NOX:</span> Hice el escaneo completo. Todo en
                        orden. Tu negocio está sano y protegido.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Steps - Pasos más simples */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Activame en 3 pasos</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-center">
                  <div className="text-7xl font-bold text-primary/20 mb-4 group-hover:text-primary/30 transition-colors">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Completá el formulario</h3>
                  <p className="text-gray-400 leading-relaxed">2 minutos y ya estás.</p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/50 text-4xl">
                  →
                </div>
              </div>

              <div className="relative group">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-center">
                  <div className="text-7xl font-bold text-primary/20 mb-4 group-hover:text-primary/30 transition-colors">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Instalamos el agente</h3>
                  <p className="text-gray-400 leading-relaxed">Nosotros lo hacemos por vos.</p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/50 text-4xl">
                  →
                </div>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-primary/10 to-black border border-primary/30 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-center">
                  <div className="text-7xl font-bold text-primary/40 mb-4 group-hover:text-primary/50 transition-colors">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Listo, estás protegido</h3>
                  <p className="text-gray-400 leading-relaxed">Yo me encargo del resto.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Preguntas más naturales */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Dudas comunes sobre mí</h2>

            <div className="space-y-4">
              <FAQItem
                question="¿NOX va a poner lenta mi computadora?"
                answer="Para nada. Soy más liviano que una pestaña del navegador. Ni te vas a dar cuenta de que estoy ahí."
              />
              <FAQItem
                question="¿NOX lee mis archivos privados?"
                answer="No. Solo miro la salud del sistema y las amenazas de seguridad. Tus documentos, fotos y mails son tuyos. No me meto."
              />
              <FAQItem
                question="¿Funciona en Mac y Windows?"
                answer="Sí, protejo a todos por igual. Mac, Windows y Linux."
              />
            </div>
          </div>
        </section>

        {/* Final CTA - CTA más personal */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,185,195,0.1),transparent_50%)]" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">¿Me dejás cuidar tu negocio?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              En menos de 5 minutos quedás protegido. Vos seguí trabajando tranquilo, yo me encargo del resto.
            </p>
            <Link
              href="https://tally.so/r/b5Z2A7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-black font-bold px-10 py-5 rounded-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 text-lg"
            >
              Activar a NOX ahora
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
