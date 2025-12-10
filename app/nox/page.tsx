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
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Left */}
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-5xl lg:text-6xl font-bold text-white">Hola, soy NOX.</h1>
                <p className="text-2xl font-semibold text-primary">Tu guardián digital incansable.</p>
                <p className="text-xl text-gray-400 leading-relaxed">
                  La inteligencia artificial que vigila, protege y te avisa en tu idioma. Mientras tú duermes, yo cuido
                  tu negocio.
                </p>
                <Link
                  href="https://tally.so/r/b5Z2A7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-primary/90 text-black font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                >
                  Activar a NOX ahora
                </Link>
              </div>

              {/* Image Right */}
              <div className="relative animate-fade-in">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center shadow-2xl shadow-primary/10 overflow-hidden">
                  <video
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video_Listo_Con_Fondo_Negro-PXtROOKJnVbSe3ZZZi7dznUKO3LClA.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-100"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* The Story */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-white">¿Quién es NOX?</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              No soy un gato común. Nací en el código de BlackSentinel para ser rápido, sigiloso y leal. Mi trabajo es
              simple: detectar amenazas antes de que ocurran y contártelo sin dramas.
            </p>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Visión Nocturna 24/7</h3>
              <p className="text-gray-400 leading-relaxed">
                Monitoreo tus servidores cada segundo. Nunca necesito café ni vacaciones.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Reflejos de Pantera</h3>
              <p className="text-gray-400 leading-relaxed">
                Atrapo virus y amenazas en milisegundos, mucho antes de que puedan hacer daño.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Autocuración</h3>
              <p className="text-gray-400 leading-relaxed">
                Instalo parches y actualizaciones de seguridad automáticamente para que tú no tengas que hacerlo.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Hablo Tu Idioma</h3>
              <p className="text-gray-400 leading-relaxed">
                Nada de códigos raros. Te explico qué pasa con palabras simples que cualquiera puede entender.
              </p>
            </div>
          </div>
        </section>

        {/* NOX Translator Section */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">La diferencia NOX</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Side - Old Way */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-red-500 uppercase tracking-wider">Otros Antivirus</p>
                <div className="bg-gray-950 rounded-xl p-6 shadow-xl border-2 border-red-500/50">
                  <div className="flex items-start gap-3 mb-3">
                    <Terminal className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div className="font-mono text-sm text-red-400">SYSTEM ALERT</div>
                  </div>
                  <p className="font-mono text-sm text-red-400 leading-relaxed">
                    CRITICAL ERROR: 0x8004 Malicious Payload detected in System32. Abort?
                  </p>
                  <div className="mt-4 flex gap-2">
                    <button className="font-mono text-xs bg-red-600 text-white px-3 py-1 rounded">ABORT</button>
                    <button className="font-mono text-xs border border-red-500 text-red-400 px-3 py-1 rounded">
                      IGNORE
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - NOX Way */}
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
                        ¡Hola! Atrapé un virus intentando entrar. Ya lo eliminé y tu PC está segura.
                      </p>
                      <div className="text-xs text-gray-500 mt-2">Hace 2 minutos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Un día en la vida de NOX</h2>

            <div className="relative">
              {/* Glowing gradient timeline line */}
              <div className="absolute left-[31px] top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20 shadow-[0_0_15px_rgba(10,185,195,0.5)]" />

              <div className="space-y-12">
                {/* Timeline Event 1 */}
                <div className="relative flex gap-6 items-start animate-fade-in">
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg shadow-primary/50 flex-shrink-0">
                    <Moon className="w-8 h-8 text-black" />
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">03:15 AM</div>
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-primary/30 transition-all">
                      <p className="text-white font-semibold mb-2">Tú duermes.</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        <span className="text-primary font-semibold">NOX:</span> Bloqueo de acceso no autorizado (IP
                        China). Reporte silencioso.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Event 2 */}
                <div className="relative flex gap-6 items-start animate-fade-in">
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg shadow-primary/50 flex-shrink-0">
                    <Coffee className="w-8 h-8 text-black" />
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">08:50 AM</div>
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-primary/30 transition-all">
                      <p className="text-white font-semibold mb-2">Tú tomas café.</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        <span className="text-primary font-semibold">NOX:</span> Detectado parche crítico de Windows.
                        Instalación automática en segundo plano.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Event 3 */}
                <div className="relative flex gap-6 items-start animate-fade-in">
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg shadow-primary/50 flex-shrink-0">
                    <Briefcase className="w-8 h-8 text-black" />
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">02:30 PM</div>
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-primary/30 transition-all">
                      <p className="text-white font-semibold mb-2">Tú estás en una reunión.</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        <span className="text-primary font-semibold">NOX:</span> Un empleado descarga un archivo
                        sospechoso. NOX lo pone en cuarentena antes de abrirlo.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Event 4 */}
                <div className="relative flex gap-6 items-start animate-fade-in">
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg shadow-primary/50 flex-shrink-0">
                    <Check className="w-8 h-8 text-black" />
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">11:59 PM</div>
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-primary/30 transition-all">
                      <p className="text-white font-semibold mb-2">El día termina.</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        <span className="text-primary font-semibold">NOX:</span> Escaneo de salud completo. Sistema 100%
                        optimizado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Instalación en 3 pasos</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-center">
                  <div className="text-7xl font-bold text-primary/20 mb-4 group-hover:text-primary/30 transition-colors">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Invita a NOX</h3>
                  <p className="text-gray-400 leading-relaxed">Crea tu cuenta en menos de 2 minutos.</p>
                </div>
                {/* Arrow for desktop */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/50 text-4xl">
                  →
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-center">
                  <div className="text-7xl font-bold text-primary/20 mb-4 group-hover:text-primary/30 transition-colors">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Descarga el Agente</h3>
                  <p className="text-gray-400 leading-relaxed">Instalador ligero de solo 5MB.</p>
                </div>
                {/* Arrow for desktop */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/50 text-4xl">
                  →
                </div>
              </div>

              {/* Step 3 */}
              <div className="group">
                <div className="bg-gradient-to-br from-primary/10 to-black border border-primary/30 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-center">
                  <div className="text-7xl font-bold text-primary/40 mb-4 group-hover:text-primary/50 transition-colors">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Relájate</h3>
                  <p className="text-gray-400 leading-relaxed">
                    En cuanto ves el icono en la barra de tareas, ya estás protegido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Preguntas Frecuentes</h2>

            <div className="space-y-4">
              <FAQItem
                question="¿NOX pondrá lenta mi computadora?"
                answer="Para nada. Es ultraligero y consume menos recursos que una pestaña de navegador."
              />
              <FAQItem
                question="¿NOX lee mis archivos privados?"
                answer="No. NOX solo mira la salud del sistema y amenazas de seguridad, nunca tus documentos o correos."
              />
              <FAQItem question="¿Sirve para Windows, Mac y Linux?" answer="Sí, protejo a todos por igual." />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,185,195,0.1),transparent_50%)]" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Listo para dejar la seguridad en mis garras?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Configura NOX en menos de 5 minutos y duerme tranquilo sabiendo que tu negocio está protegido.
            </p>
            <Link
              href="https://tally.so/r/b5Z2A7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-black font-bold px-10 py-5 rounded-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 text-lg"
            >
              {"Quiero a Nox!"}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
