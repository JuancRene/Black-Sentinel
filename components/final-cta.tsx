"use client"

import { Button } from "@/components/ui/button"
import { Shield, ArrowRight, CheckCircle } from "lucide-react"

export function FinalCTA() {
  const handleCTA = () => {
    window.open("https://tally.so/r/b5Z2A7", "_blank")
  }

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-black via-[#0A0A0A] to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse-glow" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-2 border-primary/30 rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 animate-pulse" />

            <div className="relative z-10">
              <div className="mb-8 flex justify-center">
                <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center animate-pulse-glow">
                  <Shield className="w-12 h-12 text-primary" />
                </div>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Protegé tu negocio <span className="text-primary">hoy mismo</span>
              </h2>

              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Ciberseguridad profesional.{" "}
                <span className="text-primary font-semibold">Sin estrés. Sin incidentes.</span>
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-10">
                {["Implementación en 48hs", "Sin contratos largos", "Soporte 24/7"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-400">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={handleCTA}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black font-bold text-lg px-10 py-7 rounded-2xl shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 hover:scale-110 w-full sm:w-auto group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Empezar ahora
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-white/30 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>

                <Button
                  onClick={handleCTA}
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/50 text-primary hover:bg-primary hover:text-black font-bold text-lg px-10 py-7 rounded-2xl transition-all duration-300 hover:scale-110 w-full sm:w-auto bg-transparent"
                >
                  Hablar con el equipo
                </Button>
              </div>

              <p className="text-sm text-gray-500 mt-8">Respuesta en menos de 24 horas • Sin compromiso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
