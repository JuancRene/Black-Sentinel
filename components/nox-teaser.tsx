"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function NoxTeaser() {
  const [revealed, setRevealed] = useState(false)
  const [isImageHovered, setIsImageHovered] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-black via-[#0A0A0A] to-black"
    >
      {/* Background Effects Mejorados */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Glows múltiples */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/15 rounded-full blur-[180px] animate-pulse-glow" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div 
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Líneas decorativas */}
      <div className="absolute top-0 left-1/4 w-px h-24 bg-gradient-to-b from-primary/50 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-px h-24 bg-gradient-to-t from-primary/50 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Text Mejorado */}
          <div 
            className={`space-y-8 text-center md:text-left transition-all duration-1000 ${
              revealed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <Eye className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">Conoce a tu vigilante IA</span>
            </div>

            {/* Título principal */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
              No estás solo.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary animate-gradient bg-[length:200%_auto]">
                Hay una IA cuidando tu espalda.
              </span>
            </h2>

            {/* Descripción mejorada */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Conoce a{" "}
              <span className="relative inline-block">
                <span className="font-black text-primary text-2xl sm:text-3xl">NOX</span>
                <Sparkles className="absolute -top-1 -right-5 w-4 h-4 text-primary animate-pulse" />
              </span>
              , nuestro agente autónomo que monitorea tu infraestructura 24/7.
            </p>

            {/* Features rápidas */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {[
                { icon: Eye, text: "Monitoreo continuo" },
                { icon: Zap, text: "Respuesta instantánea" },
                { icon: Sparkles, text: "IA avanzada" },
              ].map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm border border-primary/20 rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-gray-400">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button mejorado */}
            <div className="pt-4">
              <Link href="/nox">
                <Button
                  size="lg"
                  className="group relative bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 hover:scale-110 overflow-hidden px-8 py-6 text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40"
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                    Ver a NOX en acción
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>

            {/* Trust badge */}
            <p className="text-sm text-gray-500 flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Activo ahora mismo, protegiendo +100 empresas
            </p>
          </div>

          {/* Right Side - NOX Image Mejorada */}
          <div 
            className={`flex justify-center md:justify-end transition-all duration-1000 delay-300 ${
              revealed ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div 
              className="relative"
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              {/* Container con efectos */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]">
                
                {/* Círculos de fondo animados */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
                <div 
                  className="absolute inset-4 bg-primary/10 rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                
                {/* Anillos orbitales */}
                <div className={`absolute inset-0 border-2 border-primary/30 rounded-full transition-all duration-700 ${
                  isImageHovered ? "scale-110 rotate-180" : "scale-100 rotate-0"
                }`} />
                <div 
                  className={`absolute inset-8 border border-primary/20 rounded-full transition-all duration-700 ${
                    isImageHovered ? "scale-90 -rotate-180" : "scale-100 rotate-0"
                  }`} 
                  style={{ animationDelay: "0.3s" }}
                />

                {/* NOX Image con animación float */}
                <div className={`relative animate-float transition-transform duration-500 ${
                  isImageHovered ? "scale-110" : "scale-100"
                }`}>
                  <Image
                    src="/images/nox4.png"
                    alt="NOX - BlackSentinel AI Mascot"
                    width={448}
                    height={448}
                    className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_80px_rgba(0,198,214,0.8)] transition-all duration-500"
                    priority
                  />
                </div>

                {/* Esquinas decorativas mejoradas */}
                <div className="absolute -top-6 -left-6 w-16 h-16 border-l-2 border-t-2 border-primary/50 rounded-tl-2xl animate-pulse" />
                <div
                  className="absolute -bottom-6 -right-6 w-16 h-16 border-r-2 border-b-2 border-primary/50 rounded-br-2xl animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="absolute -top-6 -right-6 w-12 h-12 border-r-2 border-t-2 border-primary/30 rounded-tr-2xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute -bottom-6 -left-6 w-12 h-12 border-l-2 border-b-2 border-primary/30 rounded-bl-2xl animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                />

                {/* Partículas decorativas */}
                <div className="absolute top-1/4 -left-4 w-3 h-3 bg-primary rounded-full animate-ping" />
                <div 
                  className="absolute top-3/4 -right-4 w-2 h-2 bg-primary/60 rounded-full animate-ping"
                  style={{ animationDelay: "0.5s" }}
                />
                <div 
                  className="absolute bottom-1/4 -left-2 w-2 h-2 bg-primary/40 rounded-full animate-ping"
                  style={{ animationDelay: "1s" }}
                />

                {/* Texto flotante "Watching..." */}
                {isImageHovered && (
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <div className="bg-black/80 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 animate-fade-in">
                      <span className="text-sm text-primary font-semibold flex items-center gap-2">
                        <Eye className="w-4 h-4 animate-pulse" />
                        Vigilando tu infraestructura...
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Decoraciones adicionales */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* Stats section adicional */}
        <div 
          className={`mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto transition-all duration-1000 delay-600 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "24/7", label: "Vigilancia activa" },
            { value: "<1s", label: "Tiempo de detección" },
            { value: "100%", label: "Automatizado" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
