"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Phone } from "lucide-react"
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
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(10, 185, 195, ${particle.opacity})`
        ctx.fill()
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
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-[1]" style={{ opacity: 0.4 }} />

      {/* Grid de fondo animado */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      {/* Efectos de glow mejorados */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Logo mejorado con más efectos */}
          <div className="flex justify-center mb-6 sm:mb-8 animate-fade-in">
            <div className="relative animate-float group">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                {/* Círculo de fondo con pulso */}
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />

                <Image
                  src="/logo-blacksentinel-icon.png"
                  alt="BlackSentinel"
                  width={160}
                  height={160}
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(10,185,195,0.6)]"
                />
              </div>
            </div>
          </div>

          {/* Título con efecto de gradiente animado */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Cuidamos tu negocio</span>
              <span className="block text-primary">para que puedas trabajar tranquilo</span>
            </h1>
          </div>

          {/* Descripción mejorada */}
          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in px-4"
            style={{ animationDelay: "0.4s" }}
          >
            Ciberseguridad gestionada para PyMEs que no pueden darse el lujo de parar.{" "}
            <span className="text-primary font-semibold">Hay personas reales monitoreando tu empresa 24/7.</span>
          </p>

          {/* CTA mejorado con más efectos */}
          <div
            className="pt-6 sm:pt-10 animate-fade-in flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              onClick={handleCTA}
              className="relative bg-primary hover:bg-primary/90 text-black font-bold text-lg sm:text-xl px-8 sm:px-10 py-6 sm:py-7 rounded-2xl shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              {/* Efecto shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

              <span className="relative z-10 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Diagnóstico gratuito
              </span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://wa.me/5493416369108", "_blank")}
              className="border-2 border-primary/50 text-primary hover:bg-primary hover:text-black font-bold text-lg sm:text-xl px-8 sm:px-10 py-6 sm:py-7 rounded-2xl transition-all duration-300 hover:scale-105 group"
            >
              <Phone className="w-5 h-5 mr-2" />
              Hablar por WhatsApp
            </Button>
          </div>

          {/* Mensaje de confianza enfocado en el servicio humano */}
          <p className="text-sm text-gray-500 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            Sin compromiso - Sin contratos largos - Respuesta en menos de 24hs
          </p>

          {/* Nuevos badges enfocados en el apoyo humano, no en la tecnología */}
          <div
            className="flex justify-center gap-6 sm:gap-10 pt-8 sm:pt-10 text-sm sm:text-base text-gray-400 animate-fade-in flex-wrap"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex items-center gap-2 group hover:text-primary transition-colors cursor-default">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>
              <span className="font-medium">Personas reales</span>
            </div>
            <div className="flex items-center gap-2 group hover:text-primary transition-colors cursor-default">
              <div className="relative">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>
              <span className="font-medium">Monitoreo 24/7</span>
            </div>
            <div className="flex items-center gap-2 group hover:text-primary transition-colors cursor-default">
              <div className="relative">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>
              <span className="font-medium">Actuamos por vos</span>
            </div>
          </div>

          {/* Indicador de scroll */}
          <div className="pt-10 animate-bounce" style={{ animationDelay: "1s" }}>
            <div className="inline-flex flex-col items-center gap-2 text-gray-500 hover:text-primary transition-colors cursor-pointer">
              <span className="text-xs uppercase tracking-wider">Conocé más</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
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
