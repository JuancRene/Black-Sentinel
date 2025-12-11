"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Sparkles } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleCTA = () => {
    window.open("https://tally.so/r/b5Z2A7", "_blank")
  }

  // Animación de partículas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    interface Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }

    const particles: Particle[] = []
    const particleCount = 100

    // Crear partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        // Mover partícula
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Rebotar en los bordes
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Dibujar partícula
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(10, 185, 195, ${particle.opacity})`
        ctx.fill()

        // Conectar partículas cercanas
        particles.slice(i + 1).forEach((p2) => {
          const dx = particle.x - p2.x
          const dy = particle.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(10, 185, 195, ${0.15 * (1 - distance / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener("resize", resizeCanvas)
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
    >
      {/* Canvas de partículas - ahora más visible */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ opacity: 0.6 }}
      />

      {/* Grid de fondo animado */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] animate-[pulse_20s_ease-in-out_infinite]" />

      {/* Efectos de glow mejorados */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-primary/25 rounded-full blur-[130px] animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Líneas de escaneo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Logo mejorado con más efectos */}
          <div className="flex justify-center mb-6 sm:mb-8 animate-fade-in">
            <div className="relative animate-float group">
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 flex items-center justify-center">
                {/* Círculo de fondo con pulso */}
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-75" />
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
                
                <Image
                  src="/logo-blacksentinel-icon.png"
                  alt="BlackSentinel Eye Logo"
                  width={192}
                  height={192}
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_40px_rgba(10,185,195,0.8)] group-hover:drop-shadow-[0_0_80px_rgba(10,185,195,1)] transition-all duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Esquinas animadas mejoradas */}
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

          {/* Título con efecto de gradiente animado */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              <span className="block bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                BlackSentinel
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary animate-pulse-glow">
              Vigilancia inteligente.
              <br />
              <span className="inline-block animate-fade-in" style={{ animationDelay: "0.5s" }}>
                Protección real.
              </span>
            </p>
          </div>

          {/* Descripción mejorada */}
          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in px-4"
            style={{ animationDelay: "0.4s" }}
          >
            Ciberseguridad preventiva potenciada por IA. Detectamos amenazas antes de que sucedan.{" "}
            <span className="text-primary font-semibold inline-block hover:scale-110 transition-transform">
              Monitoreo 24/7, respuesta automática.
            </span>
          </p>

          {/* CTA mejorado con más efectos */}
          <div
            className="pt-6 sm:pt-10 animate-fade-in flex flex-col items-center gap-4"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              onClick={handleCTA}
              className="relative bg-primary hover:bg-primary/90 text-black font-bold text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 rounded-2xl shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:shadow-3xl transition-all duration-300 hover:scale-110 group overflow-hidden"
            >
              {/* Efecto shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              
              <span className="relative z-10 flex items-center gap-2">
                <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Proteger mi empresa ahora
              </span>
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
              
              {/* Efecto de glow en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-white/30 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            
            <p className="text-sm text-gray-500 animate-pulse">
              Sin contratos largos • Implementación en 48hs
            </p>
          </div>

          {/* Badges mejorados */}
          <div
            className="flex justify-center gap-6 sm:gap-12 pt-8 sm:pt-12 text-sm sm:text-base text-gray-400 animate-fade-in flex-wrap"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex items-center gap-2 group hover:text-primary transition-colors cursor-default">
              <div className="relative">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse group-hover:scale-150 transition-transform" />
                <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping opacity-75" />
              </div>
              <span className="font-medium">Monitoreo 24/7</span>
            </div>
            <div className="flex items-center gap-2 group hover:text-primary transition-colors cursor-default">
              <div className="relative">
                <div
                  className="w-2 h-2 bg-primary rounded-full animate-pulse group-hover:scale-150 transition-transform"
                  style={{ animationDelay: "0.3s" }}
                />
                <div
                  className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping opacity-75"
                  style={{ animationDelay: "0.3s" }}
                />
              </div>
              <span className="font-medium">Detección IA</span>
            </div>
            <div className="flex items-center gap-2 group hover:text-primary transition-colors cursor-default">
              <div className="relative">
                <div
                  className="w-2 h-2 bg-primary rounded-full animate-pulse group-hover:scale-150 transition-transform"
                  style={{ animationDelay: "0.6s" }}
                />
                <div
                  className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping opacity-75"
                  style={{ animationDelay: "0.6s" }}
                />
              </div>
              <span className="font-medium">Prevención total</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="pt-12 animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            <div className="inline-flex flex-col items-center gap-2 text-gray-500 hover:text-primary transition-colors cursor-pointer">
              <span className="text-xs uppercase tracking-wider">Descubre más</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Agregar estos estilos en globals.css si no existen:
/*
@keyframes scan {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
}

.animate-scan {
  animation: scan 3s ease-in-out infinite;
}

@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  animation: gradient 3s ease infinite;
}
*/
