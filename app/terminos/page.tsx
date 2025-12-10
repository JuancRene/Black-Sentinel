import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, AlertTriangle, FileText, Users, Scale, Lock, DollarSign, Globe } from "lucide-react"

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero section */}
        <section className="py-16 border-b border-primary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Términos y Condiciones del Servicio</h1>
              <p className="text-gray-400 text-lg">Última actualización: Enero 2026</p>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                Al contratar nuestros servicios, usted acepta vincularse legalmente por estos Términos y Condiciones con
                Juan Cruz Rene Arenas, CUIT 20453370799, operando bajo el nombre comercial "BlackSentinel".
              </p>
            </div>
          </div>
        </section>

        {/* Content sections */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mt-12">
          <div className="space-y-12">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">1. DESCRIPCIÓN DEL SERVICIO</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p>
                  BlackSentinel presta servicios de Seguridad Informática Gestionada (MSSP). Esto incluye la provisión
                  de licencias de software de terceros (como antivirus Next-Gen, EDR, gestores de parches), monitoreo
                  remoto de activos informáticos, y reportes de estado de seguridad.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">2. OBLIGACIÓN DE MEDIOS (NO DE RESULTADOS)</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p>
                  El CLIENTE reconoce y acepta que la seguridad informática es una disciplina dinámica y que no existe
                  ningún sistema, software o red 100% invulnerable.
                </p>
                <p className="font-semibold text-white">
                  A. BlackSentinel se compromete a una obligación de medios: utilizaremos las mejores prácticas de la
                  industria, tecnología líder y nuestra pericia técnica para proteger sus sistemas.
                </p>
                <p>
                  B. BlackSentinel <span className="text-primary font-semibold">NO garantiza</span> la inmunidad
                  absoluta frente a ciberataques, intrusiones, malware, ransomware o pérdida de datos. La contratación
                  del servicio no constituye un seguro contra hackeos.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">3. LIMITACIÓN DE RESPONSABILIDAD</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p className="font-semibold text-white">
                  EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY APLICABLE EN LA REPÚBLICA ARGENTINA:
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-primary mb-2">
                      A. BlackSentinel NO será responsable por daños indirectos, lucro cesante, pérdida de información
                      comercial, interrupción del negocio o reputación dañada derivada de un incidente de seguridad.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-primary mb-2">
                      B. BlackSentinel NO se hace responsable del pago de rescates (Ransomware) ni de multas
                      regulatorias impuestas al CLIENTE por brechas de datos.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-primary mb-2">
                      C. El límite máximo de responsabilidad monetaria de BlackSentinel ante cualquier reclamo
                      comprobado se limitará estrictamente al monto total abonado por el CLIENTE durante los tres (3)
                      meses anteriores al evento que originó el reclamo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">4. USO DE TECNOLOGÍA DE TERCEROS</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p>
                  Para prestar el servicio, BlackSentinel integra tecnologías de proveedores globales (incluyendo, pero
                  no limitado a: SentinelOne, N-able, OpenAI, Vercel).
                </p>
                <p>
                  El CLIENTE acepta que el funcionamiento del servicio depende de la disponibilidad de estos terceros.
                </p>
                <p className="text-primary font-semibold">
                  BlackSentinel no es responsable por fallos, bugs o interrupciones propias de los servidores de estos
                  proveedores externos.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">5. RESPONSABILIDADES DEL CLIENTE</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p className="font-semibold text-white">La seguridad es compartida. El CLIENTE se compromete a:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>No divulgar sus credenciales de acceso al panel de BlackSentinel.</li>
                  <li>No desactivar intencionalmente los agentes de seguridad instalados en sus equipos.</li>
                  <li>Notificar inmediatamente a BlackSentinel ante cualquier sospecha de intrusión.</li>
                </ul>
                <p className="mt-4 text-primary">
                  BlackSentinel no será responsable por incidentes derivados de la negligencia del personal del CLIENTE
                  (ej: Ingeniería Social, Phishing clickeado voluntariamente, uso de contraseñas débiles compartidas).
                </p>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">6. PAGOS Y SUSCRIPCIÓN</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p>Los servicios se abonan por mes adelantado.</p>
                <p className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  La falta de pago habilitará a BlackSentinel a{" "}
                  <span className="text-primary font-semibold">
                    suspender el monitoreo y las licencias de seguridad sin previo aviso
                  </span>
                  , dejando los equipos del CLIENTE desprotegidos hasta la regularización de la deuda.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">7. CONFIDENCIALIDAD</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p>
                  BlackSentinel mantendrá estricta confidencialidad sobre la información técnica, infraestructura y
                  datos del CLIENTE a los que tenga acceso durante la prestación del servicio.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">8. JURISDICCIÓN Y LEY APLICABLE</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p>
                  Estos términos se rigen por las leyes de la República Argentina. Cualquier disputa se someterá a la
                  jurisdicción exclusiva de los{" "}
                  <span className="text-primary font-semibold">
                    Tribunales Ordinarios de la ciudad de Paraná, Entre Ríos
                  </span>
                  , renunciando a cualquier otro fuero o jurisdicción.
                </p>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="mt-16 bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Tienes preguntas sobre nuestros términos?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Nuestro equipo está disponible para aclarar cualquier duda que tengas sobre nuestros términos y
              condiciones.
            </p>
            <a
              href="https://tally.so/r/b5Z2A7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Contactar a soporte
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
