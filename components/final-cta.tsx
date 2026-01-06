"use client"

import { Button } from "@/components/ui/button"
import { Shield, ArrowRight, CheckCircle, Sparkles, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function FinalCTA() {
  const [revealed, setRevealed] = useState(false)
  const [isHoveringPrimary, setIsHoveringPrimary] = useState(false)
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

  const handleCTA = () => {
    window.open("https://tally.so/r/b5Z2A7", "_blank")
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/5493416369108", "_blank")
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-gradient-to-b from-black via-[#0A0A0A] to-black overflow-hidden"
    >
      {/* Background Effects Mejorados */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* Líneas decorativas */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-primary/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge superior */}
          <div
            className={`flex justify-center mb-8 transition-all duration-1000 ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2.5 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">Última oportunidad de proteger tu empresa</span>
            </div>
          </div>

          {/* Card principal mejorada */}
          <div
            className={`relative bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-[#1A1A1A] border-2 border-primary/40 rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-2xl shadow-primary/20 transition-all duration-1000 ${
              revealed ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            {/* Efecto de brillo superior */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

            {/* Glow animado de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 animate-pulse-slow" />

            {/* Esquinas decorativas */}
            <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary/30 rounded-tl-2xl" />
            <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-primary/30 rounded-tr-2xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-primary/30 rounded-bl-2xl" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/30 rounded-br-2xl" />

            <div className="relative z-10">
              {/* Icono Shield mejorado */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/40 rounded-3xl blur-2xl animate-pulse-glow" />
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-primary/30 shadow-lg shadow-primary/30">
                    <Shield className="w-12 h-12 sm:w-14 sm:h-14 text-primary drop-shadow-[0_0_10px_rgba(0,198,214,0.8)]" />
                  </div>
                  {/* Partículas decorativas */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full animate-ping" />
                  <div
                    className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary/60 rounded-full animate-ping"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
              </div>

              {/* Título principal */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                Protegé tu negocio{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary animate-gradient bg-[length:200%_auto]">
                  hoy mismo
                </span>
              </h2>

              {/* Subtítulo */}
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Ciberseguridad profesional. <span className="text-primary font-bold">Sin estrés. Sin incidentes.</span>
              </p>

              {/* Features badges mejorados */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
                {[
                  { icon: Zap, text: "Implementación en 48hs" },
                  { icon: CheckCircle, text: "Sin contratos largos" },
                  { icon: Shield, text: "Soporte 24/7" },
                ].map((item, idx) => (
                  <div
                    key={item.text}
                    className="group flex items-center gap-3 px-5 py-3 bg-black/50 backdrop-blur-sm border border-primary/20 rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 font-medium transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs mejorados */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  onClick={handleCTA}
                  onMouseEnter={() => setIsHoveringPrimary(true)}
                  onMouseLeave={() => setIsHoveringPrimary(false)}
                  size="lg"
                  className="relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-bold text-lg sm:text-xl px-10 sm:px-12 py-7 sm:py-8 rounded-2xl shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 hover:scale-110 w-full sm:w-auto group overflow-hidden"
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Sparkles
                      className={`w-5 h-5 transition-transform duration-300 ${isHoveringPrimary ? "rotate-180" : ""}`}
                    />
                    Empezar ahora
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>

                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  variant="outline"
                  className="group border-2 border-primary/50 text-primary hover:bg-primary hover:text-black hover:border-primary font-bold text-lg sm:text-xl px-10 sm:px-12 py-7 sm:py-8 rounded-2xl transition-all duration-300 hover:scale-110 w-full sm:w-auto bg-transparent relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Hablar con el equipo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl" />
                </Button>
              </div>

              {/* Footer info mejorado */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Respuesta en menos de 24 horas</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-gray-700 rounded-full" />
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Sin compromiso</span>
                </div>
              </div>
            </div>

            {/* Decoración inferior */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          </div>

          {/* Trust badges adicionales */}
          <div
            className={`mt-12 text-center transition-all duration-1000 delay-300 ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Datos encriptados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span>Setup rápido</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
