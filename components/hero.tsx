"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Sparkles } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const handleCTA = () => {
    window.open("https://tally.so/r/b5Z2A7", "_blank")
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] animate-[pulse_20s_ease-in-out_infinite]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-primary/25 rounded-full blur-[130px] animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="flex justify-center mb-6 sm:mb-8 animate-fade-in">
            <div className="relative animate-float group">
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 flex items-center justify-center">
                <Image
                  src="/logo-blacksentinel-icon.png"
                  alt="BlackSentinel Eye Logo"
                  width={192}
                  height={192}
                  className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(10,185,195,0.8)] group-hover:drop-shadow-[0_0_60px_rgba(10,185,195,1)] transition-all duration-500"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-12 h-12 border-l-2 border-t-2 border-primary/50 rounded-tl-2xl animate-pulse" />
              <div
                className="absolute -bottom-6 -right-6 w-12 h-12 border-r-2 border-b-2 border-primary/50 rounded-br-2xl animate-pulse"
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
            </div>
          </div>

          <div className="flex justify-center mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              <span className="block bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent animate-gradient">
                BlackSentinel
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary animate-pulse-glow">
              Vigilancia inteligente.
              <br />
              Protección real.
            </p>
          </div>

          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in px-4"
            style={{ animationDelay: "0.4s" }}
          >
            Ciberseguridad preventiva potenciada por IA. Detectamos amenazas antes de que sucedan.{" "}
            <span className="text-primary font-semibold">Monitoreo 24/7, respuesta automática.</span>
          </p>

          <div
            className="pt-6 sm:pt-10 animate-fade-in flex flex-col items-center gap-4"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              onClick={handleCTA}
              className="bg-primary hover:bg-primary/90 text-black font-bold text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 rounded-2xl shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:shadow-3xl transition-all duration-300 hover:scale-110 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Proteger mi empresa ahora
              </span>
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-white/30 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <p className="text-sm text-gray-500">Sin contratos largos • Implementación en 48hs</p>
          </div>

          <div
            className="flex justify-center gap-6 sm:gap-12 pt-8 sm:pt-12 text-sm sm:text-base text-gray-400 animate-fade-in flex-wrap"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex items-center gap-2 group hover:text-primary transition-colors">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse group-hover:scale-150 transition-transform" />
              <span>Monitoreo 24/7</span>
            </div>
            <div className="flex items-center gap-2 group hover:text-primary transition-colors">
              <div
                className="w-2 h-2 bg-primary rounded-full animate-pulse group-hover:scale-150 transition-transform"
                style={{ animationDelay: "0.3s" }}
              />
              <span>Detección IA</span>
            </div>
            <div className="flex items-center gap-2 group hover:text-primary transition-colors">
              <div
                className="w-2 h-2 bg-primary rounded-full animate-pulse group-hover:scale-150 transition-transform"
                style={{ animationDelay: "0.6s" }}
              />
              <span>Prevención total</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
