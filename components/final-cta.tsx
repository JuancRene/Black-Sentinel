"use client"

import { Button } from "@/components/ui/button"
import { Shield, ArrowRight, CheckCircle, Sparkles, Zap, Lock } from "lucide-react"
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleCTA = () => {
    window.open("https://wa.me/5493436988390", "_blank")
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/5493436988390", "_blank")
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-[#050505]"
    >
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Base Grid (Malla técnica) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      {/* 2. Ambient Glow (Luz ambiental cian) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#39CFE3]/10 blur-[120px] rounded-full pointer-events-none" />

      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* --- BADGE SUPERIOR --- */}
          <div
            className={`flex justify-center mb-10 transition-all duration-700 ease-out ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#39CFE3]/30 bg-[#39CFE3]/5 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(57,207,227,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39CFE3] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39CFE3]"></span>
              </span>
              <span className="text-xs font-semibold text-[#39CFE3] uppercase tracking-wider">Seguridad Empresarial Activa</span>
            </div>
          </div>

          {/* --- MAIN CARD --- */}
          <div
            className={`relative group rounded-3xl p-1 transition-all duration-1000 ${
              revealed ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            {/* Borde degradado animado */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#39CFE3]/40 via-transparent to-[#39CFE3]/10 rounded-3xl blur-sm opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
            
            {/* Contenido de la tarjeta */}
            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-[22px] p-8 sm:p-16 text-center overflow-hidden shadow-2xl">
              
              {/* Efecto de vidrio (ruido sutil) */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>
              
              {/* Resplandor superior interno */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#39CFE3] to-transparent opacity-50" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[100px] bg-[#39CFE3]/10 blur-[50px] rounded-full pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                
                {/* ICONO CENTRAL */}
                <div className="mb-8 relative group/icon">
                  <div className="absolute inset-0 bg-[#39CFE3]/20 rounded-2xl blur-xl group-hover/icon:blur-2xl transition-all duration-500 opacity-0 group-hover/icon:opacity-100" />
                  <div className="relative w-24 h-24 bg-gradient-to-br from-zinc-800 to-black border border-white/10 rounded-2xl flex items-center justify-center shadow-inner ring-1 ring-white/5">
                    <Shield className="w-10 h-10 text-[#39CFE3] drop-shadow-[0_0_15px_rgba(57,207,227,0.5)]" />
                  </div>
                  {/* Badge flotante sobre el icono */}
                  <div className="absolute -top-3 -right-3 bg-zinc-900 border border-[#39CFE3]/30 p-1.5 rounded-lg shadow-lg rotate-12">
                     <Lock className="w-4 h-4 text-[#39CFE3]" />
                  </div>
                </div>

                {/* COPYWRITING */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                  Protegé tu negocio <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#39CFE3] to-white animate-gradient bg-[length:200%_auto]">
                    antes de que sea tarde
                  </span>
                </h2>

                <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Ciberseguridad de nivel corporativo simplificada para tu empresa.
                  <br/> <span className="text-white font-medium">Sin técnicos, sin complicaciones, sin incidentes.</span>
                </p>

                {/* PILLS DE CARACTERÍSTICAS */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {[
                    { icon: Zap, text: "Setup en 48hs" },
                    { icon: CheckCircle, text: "Sin permanencia" },
                    { icon: Shield, text: "Monitoreo 24/7" },
                  ].map((item, idx) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-white/5 rounded-full hover:border-[#39CFE3]/30 transition-colors duration-300"
                    >
                      <item.icon className="w-4 h-4 text-[#39CFE3]" />
                      <span className="text-sm text-zinc-300 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* BOTONES DE ACCIÓN */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Button
                    onClick={handleCTA}
                    onMouseEnter={() => setIsHoveringPrimary(true)}
                    onMouseLeave={() => setIsHoveringPrimary(false)}
                    className="group relative h-14 px-8 rounded-xl bg-[#39CFE3] hover:bg-[#09a0a9] text-black font-bold text-lg overflow-hidden transition-all duration-300 shadow-[0_0_20px_-5px_rgba(57,207,227,0.4)] hover:shadow-[0_0_30px_-5px_rgba(57,207,227,0.6)] hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12" />
                    <span className="relative flex items-center gap-2">
                      <Sparkles className={`w-5 h-5 transition-transform duration-500 ${isHoveringPrimary ? "rotate-180 scale-110" : ""}`} />
                      Empezar ahora
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>

                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="h-14 px-8 rounded-xl border-zinc-700 bg-transparent text-white hover:bg-zinc-800 hover:text-white font-medium text-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Hablar con un experto
                  </Button>
                </div>

                {/* FOOTER TEXT */}
                <p className="mt-8 text-sm text-zinc-500">
                  Plan Gratuito disponible para auditoría inicial.
                </p>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
