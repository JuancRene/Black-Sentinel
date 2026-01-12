"use client"

import { ShieldAlert, FileWarning, MailWarning, PhoneOff, CheckCircle2, AlertTriangle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const problems = [
  {
    id: "ERR_RANSOMWARE",
    icon: ShieldAlert,
    title: "Secuestro de Datos",
    description: "Un clic equivocado y tus servidores quedan encriptados. El negocio se detiene y te exigen un rescate millonario.",
  },
  {
    id: "ERR_DATA_LOSS",
    icon: FileWarning,
    title: "Pérdida Irreversible",
    description: "Fallos de disco, borrados accidentales o robos. Sin backup automático, esa información desaparece para siempre.",
  },
  {
    id: "ERR_PHISHING",
    icon: MailWarning,
    title: "Fraude por Email",
    description: "Correos que imitan a proveedores o bancos. Roban credenciales bancarias y vacían cuentas en minutos.",
  },
  {
    id: "ERR_NO_SUPPORT",
    icon: PhoneOff,
    title: "Soledad Técnica",
    description: "El sistema cae un viernes a la noche y tu técnico no atiende. Cada hora sin sistema es dinero perdido.",
  },
]

export function Stats() {
  const [revealed, setRevealed] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
      className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden"
    >
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Luz Roja de Alerta (Sutil) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm animate-pulse">
            <AlertTriangle className="w-3 h-3 text-red-500" />
            <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Amenazas Activas</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            El costo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">no estar protegido</span>
          </h2>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Los ciberataques no discriminan por tamaño. Estas son las realidades que enfrentan las empresas argentinas todos los días.
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            const isHovered = hoveredIndex === index

            return (
              <div
                key={problem.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative h-full transition-all duration-700 ${
                  revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`relative h-full bg-[#0A0A0A] rounded-2xl p-6 border transition-all duration-500 overflow-hidden ${
                    isHovered 
                        ? "border-red-500/50 shadow-[0_0_30px_-10px_rgba(239,68,68,0.2)]" 
                        : "border-red-900/20 hover:border-red-500/30"
                }`}>
                    
                    {/* Background Pattern (Hazard Stripes) en Hover */}
                    <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                        style={{
                            backgroundImage: 'linear-gradient(45deg, #ef4444 25%, transparent 25%, transparent 50%, #ef4444 50%, #ef4444 75%, transparent 75%, transparent)',
                            backgroundSize: '20px 20px'
                        }}
                    />

                    {/* Icon Container */}
                    <div className="mb-6 relative">
                        <div className={`w-14 h-14 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                            isHovered 
                                ? "bg-red-500/10 border-red-500 text-red-500" 
                                : "bg-zinc-900 border-zinc-800 text-zinc-500 group-hover:text-red-400"
                        }`}>
                            <Icon className="w-7 h-7" />
                        </div>
                        {/* Error Code */}
                        <div className="absolute top-0 right-0 text-[10px] font-mono text-zinc-700 group-hover:text-red-900/50 transition-colors">
                            {problem.id}
                        </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors">
                        {problem.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300">
                        {problem.description}
                    </p>

                    {/* Bottom Status Bar */}
                    <div className="absolute bottom-0 left-0 h-1 bg-red-600 transition-all duration-500" 
                        style={{ width: isHovered ? '100%' : '0%' }} 
                    />
                </div>
              </div>
            )
          })}
        </div>

        {/* --- SOLUTION BRIDGE --- */}
        <div
          className={`relative max-w-3xl mx-auto text-center transition-all duration-1000 delay-500 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
            {/* Connector Line */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-transparent to-[#0AB9C3]/50" />

            <div className="bg-zinc-900/50 border border-[#0AB9C3]/30 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-[#0AB9C3]/60 transition-colors duration-500">
                {/* Glow cyan detrás */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0AB9C3]/5 blur-2xl rounded-full opacity-50 pointer-events-none" />
                
                <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                    No dejes que esto te pase.
                </h3>
                <p className="text-zinc-400 mb-6 relative z-10">
                    BlackSentinel neutraliza estas amenazas antes de que toquen tu sistema.
                </p>
                
                <div className="inline-flex items-center gap-2 text-[#0AB9C3] font-bold text-lg relative z-10">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Tu seguridad, garantizada.</span>
                </div>
            </div>
        </div>

      </div>
    </section>
  )
}
