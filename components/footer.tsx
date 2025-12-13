"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Shield, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-b from-black via-[#0A0A0A] to-black border-t border-primary/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Description - Mejorado */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer" onClick={scrollToTop}>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                <Image
                  src="/logo-blacksentinel-icon.png"
                  alt="BlackSentinel Logo"
                  width={48}
                  height={48}
                  className="relative w-12 h-12 object-contain drop-shadow-[0_0_20px_rgba(0,198,214,0.6)] group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-2xl font-black text-white group-hover:text-primary transition-colors duration-300">
                BlackSentinel
              </span>
            </div>
            
            <p className="text-lg font-semibold text-primary mb-3">
              Vigilancia inteligente. Protección real.
            </p>
            
            <p className="text-gray-400 text-base mb-6 max-w-md leading-relaxed">
              Ciberseguridad potenciada por IA para empresas modernas. Detectamos amenazas antes de que sucedan.
            </p>

            {/* Contact Info mejorado */}
            <div className="space-y-3">
              <a 
                href="mailto:contacto@blacksentinel.com"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm group-hover:translate-x-1 transition-transform">
                  contacto@blacksentinel.com
                </span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">Argentina • Protección Global</span>
              </div>
            </div>
          </div>

          {/* Quick Links - Mejorado */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full" />
              Enlaces rápidos
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Servicios", href: "/servicios" },
                { name: "Preguntas Frecuentes", href: "/faqs" },
                { name: "Tecnología", href: "/tecnologia" },
                { name: "Nosotros", href: "/nosotros" },
                { name: "Conoce a NOX", href: "/nox" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onMouseEnter={() => setHoveredLink(item.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="group flex items-center gap-2 text-gray-400 hover:text-primary transition-all duration-300"
                  >
                    <ArrowUpRight 
                      className={`w-4 h-4 transition-all duration-300 ${
                        hoveredLink === item.name ? "translate-x-1 -translate-y-1" : ""
                      }`} 
                    />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Mejorado */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full" />
              Servicios Core
            </h3>
            <ul className="space-y-3">
              {[
                { icon: Shield, text: "Monitoreo 24/7" },
                { icon: Shield, text: "Análisis de vulnerabilidades" },
                { icon: Shield, text: "Hardening de sistemas" },
                { icon: Shield, text: "Automatización defensiva" },
              ].map((service, idx) => (
                <li 
                  key={idx}
                  className="group flex items-start gap-3 text-gray-400 hover:text-gray-300 transition-all duration-300"
                >
                  <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm group-hover:translate-x-1 transition-transform">
                    {service.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator con decoración */}
        <div className="relative mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
        </div>

        {/* Bottom Bar - Mejorado */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center lg:text-left">
            <p className="text-gray-500 text-sm">
              © 2025 BlackSentinel. Protección Inteligente.
            </p>
            <div className="hidden sm:block w-1 h-1 bg-gray-700 rounded-full" />
            <p className="text-gray-600 text-xs">
              Todos los derechos reservados.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { name: "Términos y Condiciones", href: "/terminos" },
              { name: "Privacidad", href: "/privacidad" },
              { name: "Reembolsos", href: "/reembolsos" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-500 hover:text-primary transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="group fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 z-50"
          aria-label="Volver arriba"
        >
          <svg 
            className="w-5 h-5 text-black group-hover:-translate-y-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-full" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full" />
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  )
}
