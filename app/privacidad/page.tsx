import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Database, Globe, Lock, Eye, User, FileText } from "lucide-react"

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero section */}
        <section className="py-16 border-b border-primary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
                Política de Privacidad y Protección de Datos
              </h1>
              <p className="text-gray-400 text-lg">
                En BlackSentinel nos tomamos la privacidad de sus datos muy en serio. Esta política describe cómo
                recopilamos, usamos y protegemos su información, en cumplimiento con la Ley 25.326 de Protección de
                Datos Personales de la República Argentina.
              </p>
            </div>
          </div>
        </section>

        {/* Content sections */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mt-12">
          <div className="space-y-12">
            {/* Section 1 */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">1. RESPONSABLE DEL TRATAMIENTO</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p>
                  El responsable de la base de datos es{" "}
                  <span className="text-primary font-semibold">Juan Cruz Rene Arenas</span>, con domicilio legal en
                  Paraná, Entre Ríos, Argentina.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">2. QUÉ DATOS RECOLECTAMOS</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p>Para brindar el servicio de seguridad gestionada, nuestros sistemas pueden recopilar:</p>
                <div className="space-y-4 mt-4">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <p className="font-semibold text-white mb-2">Datos de Contacto:</p>
                    <p>Nombre, email corporativo y teléfono del personal autorizado.</p>
                  </div>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <p className="font-semibold text-white mb-2">Datos de Telemetría (Técnicos):</p>
                    <p>
                      Direcciones IP, nombres de equipos (Hostnames), listado de software instalado, versiones de
                      sistema operativo, logs de eventos de seguridad y métricas de rendimiento (CPU/RAM).
                    </p>
                  </div>
                </div>
                <p className="mt-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 text-yellow-200">
                  <span className="font-semibold">Aclaración Importante:</span> BlackSentinel NO accede, lee ni almacena
                  el contenido de los archivos del CLIENTE (Word, Excel, PDFs, etc.), salvo que sea estrictamente
                  necesario para un análisis forense de un archivo infectado y bajo autorización.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">3. FINALIDAD DE LOS DATOS</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p>Los datos se utilizan exclusivamente para:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Detectar y bloquear amenazas informáticas.</li>
                  <li>Generar reportes de estado y auditoría.</li>
                  <li>Gestionar la facturación y el soporte técnico.</li>
                  <li>Mejorar la precisión de nuestros algoritmos de defensa.</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">4. TRANSFERENCIA INTERNACIONAL DE DATOS</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p>
                  El CLIENTE acepta que, debido a la naturaleza tecnológica del servicio, ciertos datos técnicos (logs,
                  hash de archivos, telemetría) pueden ser procesados en servidores ubicados fuera de Argentina
                  (principalmente en <span className="text-primary font-semibold">Estados Unidos o Europa</span>)
                  pertenecientes a nuestros proveedores de infraestructura (ej: N-able, SentinelOne, Supabase).
                </p>
                <p className="text-primary font-semibold">
                  BlackSentinel se asegura de trabajar únicamente con proveedores que adhieren a altos estándares de
                  seguridad y privacidad.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">5. USO DE INTELIGENCIA ARTIFICIAL</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p>
                  Utilizamos tecnologías de IA (como OpenAI) para la redacción de reportes ejecutivos. En este proceso,
                  se envían datos estadísticos y resúmenes de alertas anonimizados.
                </p>
                <p className="text-primary font-semibold">
                  No enviamos información confidencial ni datos personales sensibles a los modelos de IA públicos para
                  su entrenamiento.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">6. SEGURIDAD DE LA INFORMACIÓN</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p>
                  Implementamos medidas técnicas y organizativas (encriptación, control de acceso, autenticación de
                  doble factor) para proteger sus datos contra acceso no autorizado, pérdida o alteración.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">7. DERECHOS DEL TITULAR (DERECHOS ARCO)</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed ml-16">
                <p>
                  El titular de los datos tiene la facultad de ejercer el derecho de{" "}
                  <span className="text-primary font-semibold">acceso</span> a los mismos en forma gratuita, así como a
                  solicitar su <span className="text-primary font-semibold">rectificación o supresión</span>, enviando
                  un correo electrónico a:
                </p>
                <p className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
                  <a
                    href="mailto:contacto@blacksentinelsecurity.com"
                    className="text-primary font-semibold hover:underline"
                  >
                    contacto@blacksentinelsecurity.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="mt-16 bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Preguntas sobre privacidad?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Estamos comprometidos con la protección de tus datos. Contacta con nosotros para cualquier consulta sobre
              privacidad.
            </p>
            <a
              href="mailto:contacto@blacksentinelsecurity.com"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Contactar sobre privacidad
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
