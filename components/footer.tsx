"use client"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-black border-t border-primary/20 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Logo & description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-blacksentinel-icon.png"
                alt="BlackSentinel Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-white">BlackSentinel</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-4 max-w-md">Vigilancia inteligente. Protección real.</p>
            <p className="text-gray-500 text-xs sm:text-sm">Ciberseguridad potenciada por IA para empresas modernas.</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-400 hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              {["Tecnología", "Nosotros"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      scrollToSection(
                        item
                          .toLowerCase()
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, ""),
                      )
                    }
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li>Monitoreo 24/7</li>
              <li>Análisis de vulnerabilidades</li>
              <li>Hardening de sistemas</li>
              <li>Automatización defensiva</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © 2026 BlackSentinel. Protección Inteligente. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs sm:text-sm text-gray-500">
            <Link href="/terminos" className="hover:text-primary transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="/privacidad" className="hover:text-primary transition-colors">
              Privacidad
            </Link>
            <Link href="/reembolsos" className="hover:text-primary transition-colors">
              Reembolsos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
