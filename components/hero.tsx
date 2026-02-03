"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Phone, Sparkles, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleCTA = () => {
    window.open("https://tally.so/r/b5Z2A7", "_blank")
  }

  // --- LÓGICA DE PARTÍCULAS OPTIMIZADA ---
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

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
      pulse: number
    }

    const particles: Particle[] = []
    // Ajustamos cantidad según dispositivo
    const particleCount = window.innerWidth < 768 ? 30 : 60

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2, // Velocidad más suave
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * 0.02,
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Rebotar suavemente
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Efecto de parpadeo (Pulse)
        particle.opacity += particle.pulse
        if (particle.opacity >= 0.6 || particle.opacity <= 0.1) particle.pulse *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        // Color Cyan exacto de la marca (#39CFE3)
        ctx.fillStyle = `rgba(57, 207, 227, ${particle.opacity})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener("resize", resizeCanvas)
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* --- FONDO --- */}
      <div className="absolute inset-0 bg-[#050505]">
        {/* Canvas de partículas */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />
        
        {/* Grid Técnico */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        
        {/* Luz Ambiental (Spotlight superior) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#39CFE3]/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* --- BADGE SUPERIOR --- */}
          <div className="flex justify-center mb-8 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39CFE3]/30 bg-[#39CFE3]/5 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(57,207,227,0.2)]">
               <Shield className="w-3 h-3 text-[#39CFE3]" />
               <span className="text-xs font-semibold text-[#39CFE3] uppercase tracking-wider">Sistema de Protección Activo</span>
            </div>
          </div>

          {/* --- LOGO ANIMADO (HUD) --- */}
          <div className="flex justify-center mb-10 relative animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
            <div className="relative group cursor-default">
              {/* Anillos de radar */}
              <div className="absolute inset-0 rounded-full border border-[#39CFE3]/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-[#39CFE3]/10 border-dashed animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Glow central */}
              <div className="absolute inset-0 bg-[#39CFE3]/20 blur-2xl rounded-full animate-pulse" />
              
              {/* Logo Image */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full border border-white/5">
                <Image
                  src="/logo-blacksentinel-icon.png"
                  alt="BlackSentinel"
                  width={260}
                  height={160}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-[0_0_15px_rgba(57,207,227,0.8)]"
                />
              </div>
            </div>
          </div>

          {/* --- TITULO PRINCIPAL --- */}
          <div className="space-y-6 mb-8 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
              Tu negocio, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500">
                blindado.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
  Monitoreo de ciberseguridad gestionado por humanos e IA.
  <span className="block text-white font-medium mt-2">

    <br />
    Nosotros nos ocupamos de la tecnología, vos de tu negocio.
  </span>
</p>

          </div>

          {/* --- CTAS --- */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]"
          >
            <Button
              size="lg"
              onClick={handleCTA}
              className="relative h-14 px-8 bg-[#39CFE3] hover:bg-[#23BECF] text-black font-bold text-lg rounded-xl shadow-[0_0_20px_-5px_rgba(57,207,227,0.5)] hover:shadow-[0_0_30px_-5px_rgba(57,207,227,0.7)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto overflow-hidden group"
            >
               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12" />
               <span className="relative flex items-center gap-2">
                 <Shield className="w-5 h-5" />
                 Diagnóstico Gratuito
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://wa.me/5493416369108", "_blank")}
              className="h-14 px-8 border-zinc-700 text-white hover:bg-zinc-800 hover:text-white font-medium text-lg rounded-xl transition-all duration-300 w-full sm:w-auto hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 mr-2 text-[#39CFE3]" />
              Hablar por WhatsApp
            </Button>
          </div>

          {/* --- TRUST BADGES (Glass bar) --- */}
          <div
            className="mt-16 inline-flex flex-wrap justify-center gap-4 sm:gap-8 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm animate-fade-in opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]"
          >
            {[
              { text: "Soporte Humano Real", icon: CheckCircle2 },
              { text: "Instalación en 48hs", icon: Sparkles },
              { text: "Sin contratos largos", icon: Shield },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 group cursor-default">
                <item.icon className="w-5 h-5 text-[#39CFE3] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      {/* Decorative Gradient Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />
    </section>
  )
}
