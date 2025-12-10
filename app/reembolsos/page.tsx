import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Calendar, CreditCard, XCircle, AlertCircle } from "lucide-react"

export default function ReembolsosPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero section */}
        <section className="py-16 border-b border-primary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
                Política de Cancelaciones y Reembolsos
              </h1>
              <p className="text-gray-400 text-lg">Última actualización: Enero 2026</p>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                En BlackSentinel, nos esforzamos por ofrecer un servicio de ciberseguridad de clase mundial. Sin
                embargo, entendemos que las circunstancias pueden cambiar. Esta política detalla sus derechos y
                obligaciones respecto a cancelaciones y devoluciones.
              </p>
            </div>
          </div>
        </section>

        {/* Content sections */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mt-12">
          <div className="space-y-12">
            {/* Derecho de arrepentimiento */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">1. DERECHO DE ARREPENTIMIENTO (14 DÍAS)</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p>
                  Ofrecemos una garantía de devolución de dinero de{" "}
                  <span className="text-primary font-semibold">catorce (14) días corridos</span>. Si no esta satisfecho
                  con el software dentro de los primeros 14 días de su suscripción, puede solicitar un reembolso
                  completo.
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-3">
                  <p className="font-semibold text-white">Condición:</p>
                  <p>
                    Para ejercer este derecho, el CLIENTE debe notificar a BlackSentinel mediante el "Botón de
                    Arrepentimiento" en nuestra web o enviando un correo a{" "}
                    <span className="text-primary">reembolsos@blacksentinelsecurity.com </span>.
                  </p>
                </div>

                <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                  <p className="font-semibold text-green-400 mb-2">Reembolso:</p>
                  <p>
                    Si se ejerce este derecho en tiempo y forma, BlackSentinel reintegrará el 100% del importe abonado
                    en concepto de alta o primer mes, sin penalidades.
                  </p>
                </div>
              </div>
            </div>

            {/* Suscripciones mensuales */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">2. SUSCRIPCIONES MENSUALES Y CANCELACIÓN</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p>BlackSentinel opera bajo un modelo de suscripción mensual con pago por adelantado.</p>

                <div className="space-y-4">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <p className="font-semibold text-white mb-2">Cancelación en cualquier momento:</p>
                    <p>
                      El CLIENTE puede solicitar la baja del servicio en cualquier momento. No exigimos contratos de
                      permanencia forzosa (salvo que se haya firmado un acuerdo corporativo específico que indique lo
                      contrario).
                    </p>
                  </div>

                  <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4">
                    <p className="font-semibold text-yellow-400 mb-2">Ciclo de Facturación:</p>
                    <p>
                      La cancelación se hará efectiva al finalizar el ciclo de facturación actual.{" "}
                      <span className="text-yellow-300 font-semibold">
                        No se realizarán reembolsos prorrateados por los días no utilizados del mes en curso.
                      </span>
                    </p>
                  </div>

                  <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4">
                    <p className="font-semibold text-white mb-2">Ejemplo:</p>
                    <p>
                      Si usted pagó el servicio el día 1 de abril y solicita la baja el día 15 de abril, el servicio
                      seguirá activo hasta el 30 de abril. No se realizarán reembolsos prorrateados por los días no
                      utilizados del mes en curso.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reembolsos por fallas */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">3. REEMBOLSOS POR FALLAS DE SERVICIO (SLA)</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p>
                  Si BlackSentinel no cumple con los niveles de servicio garantizados (ej: interrupción total del
                  monitoreo por más de 24 horas continuas debido a fallas en nuestra infraestructura):
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <p>
                    El CLIENTE tendrá derecho a solicitar un{" "}
                    <span className="text-primary font-semibold">Crédito de Servicio</span> proporcional al tiempo de
                    inactividad, que se descontará de la próxima factura.
                  </p>
                </div>

                <p className="text-sm text-gray-400">
                  Estos créditos no son canjeables por dinero en efectivo, salvo que el CLIENTE decida rescindir el
                  contrato definitivamente por incumplimiento grave y reiterado de BlackSentinel.
                </p>
              </div>
            </div>

            {/* Excepciones */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">4. EXCEPCIONES (LO QUE NO ES REEMBOLSABLE)</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p className="font-semibold text-red-400">No se otorgarán reembolsos en los siguientes casos:</p>

                <div className="space-y-3">
                  <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                    <p className="font-semibold text-white mb-2">A. Cambio de opinión:</p>
                    <p>
                      Si el CLIENTE decide dar de baja el servicio porque &quot;encontró una opción más barata&quot;
                      después de pasados los 14 días de prueba.
                    </p>
                  </div>

                  <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                    <p className="font-semibold text-white mb-2">B. Incidentes de seguridad:</p>
                    <p>
                      Si el CLIENTE sufre un incidente de seguridad (virus, ransomware) y solicita la devolución del
                      dinero alegando que "el sistema no funcionó". Como se establece en los Términos y Condiciones,
                      nuestra obligación es de medios y no de resultados infalibles.
                    </p>
                  </div>

                  <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                    <p className="font-semibold text-white mb-2">C. Servicios ejecutados:</p>
                    <p>
                      Servicios de auditoría o configuración inicial que ya hayan sido ejecutados por nuestro personal
                      técnico.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Proceso de solicitud */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">5. PROCESO DE SOLICITUD</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p>
                  Para solicitar una baja o un reclamo de facturación, por favor contacte a nuestro equipo
                  administrativo escribiendo a{" "}
                  <span className="text-primary font-semibold">reembolsos@blacksentinelsecurity.com </span> con el
                  asunto "Solicitud de Baja/Reembolso - Black Sentinel".
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <p>
                    Los reembolsos aprobados se procesarán al mismo medio de pago utilizado para la compra en un plazo
                    de <span className="text-primary font-semibold">5 a 10 días hábiles</span>, dependiendo de los
                    tiempos bancarios.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="mt-16 bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">¿Querés ejercer tu derecho de arrepentimiento?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              Si estás dentro de los primeros 10 días de tu contratación, podés ejercer tu derecho de arrepentimiento
              completando el siguiente formulario. Te devolveremos el 100% de tu pago sin penalidades.
            </p>
            <a
              href="https://tally.so/r/RGxP7d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-black font-semibold px-10 py-5 rounded-lg transition-all duration-300 hover:scale-105 text-lg shadow-lg shadow-primary/20"
            >
              Botón de Arrepentimiento
            </a>
            <p className="text-gray-500 text-sm mt-6">
              Para otros temas de cancelación o consultas administrativas, escribinos a{" "}
              <a href="mailto:contacto@blacksentinelsecurity.com" className="text-primary hover:underline">
                contacto@blacksentinelsecurity.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
