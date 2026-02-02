"use client"

import { Shield, Users, Clock, HeadphonesIcon, Sparkles, Check, X, Zap, Cpu } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Datos de comparación
const comparison = [
  { feature: "Tipo de solución", antivirus: "Software pasivo", blacksentinel: "Software + Humanos Expertos" },
  { feature: "Respuesta ante ataques", antivirus: "Te envía una alerta", blacksentinel: "Bloquea y resuelve por vos" },
  { feature: "Soporte Técnico", antivirus: "Tickets / Chatbot", blacksentinel: "WhatsApp directo con ingenieros" },
  { feature: "Configuración", antivirus: "Lo hacés vos mismo", blacksentinel: "Lo hacemos nosotros (Llave en mano)" },
  { feature: "Mantenimiento", antivirus: "Automático (falla a veces)", blacksentinel: "Gestionado y supervisado" },
]

// Datos de beneficios
const benefits = [
  {
    icon: Users,
    title: "Inteligencia Humana",
    description: "La IA detecta, pero nuestros expertos deciden. Evitamos falsos positivos y entendemos el contexto de tu negocio.",
  },
  {
    icon: Zap,
    title: "Acción, no solo Alerta",
    description: "Un antivirus te avisa que tenés un problema. Nosotros entramos, aislamos la amenaza y limpiamos el sistema.",
  },
  {
    icon: Clock,
    title: "Vigilancia Continua",
    description: "Tu empresa no cierra digitalmente. Nuestro Centro de Operaciones de Seguridad (SOC) monitorea 24/7.",
  },
  {
    icon: Shield,
    title: "Cero Fricción",
    description: "Sin configuraciones complejas para vos. Nos ocupamos de la tecnología para que vos te ocupes de facturar.",
  },
]

export function WhyBlackSentinel() {
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
      { threshold: 0.1 },
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
      
      {/* Glow central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#39CFE3]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39CFE3]/30 bg-[#39CFE3]/5 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(57,207,227,0.2)] mb-6">
            <Sparkles className="w-3 h-3 text-[#39CFE3]" />
            <span className="text-xs font-semibold text-[#39CFE3] uppercase tracking-wider">Evolución de la Seguridad</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            La diferencia es <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39CFE3] to-teal-500">humana</span>
          </h2>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Un antivirus es una herramienta. BlackSentinel es un socio estratégico que combina tecnología de punta con expertos reales.
          </p>
        </div>

        {/* --- COMPARISON TABLE (TECH SPEC STYLE) --- */}
        <div 
            className={`max-w-5xl mx-auto mb-24 transition-all duration-1000 delay-200 ${
                revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            <div className="relative rounded-3xl border border-zinc-800 bg-[#0A0A0A]/80 backdrop-blur-sm overflow-hidden">
                
                {/* Table Header */}
                <div className="grid grid-cols-12 border-b border-zinc-800 bg-zinc-900/50">
                    <div className="col-span-4 md:col-span-4 p-6 hidden md:block"></div> {/* Espacio vacío */}
                    
                    {/* Antivirus Header */}
                    <div className="col-span-6 md:col-span-4 p-6 text-center border-l border-zinc-800 relative">
                        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Legacy System</div>
                        <h3 className="text-zinc-400 font-bold text-lg">Antivirus Tradicional</h3>
                    </div>

                    {/* BlackSentinel Header */}
                    <div className="col-span-6 md:col-span-4 p-6 text-center border-l border-zinc-800 bg-[#39CFE3]/5 relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-[#39CFE3] shadow-[0_0_15px_#39CFE3]" />
                        <div className="text-xs font-mono text-[#39CFE3] uppercase tracking-widest mb-2 flex justify-center items-center gap-2">
                             Active Defense <span className="w-2 h-2 rounded-full bg-[#39CFE3] animate-pulse"></span>
                        </div>
                        <h3 className="text-white font-bold text-xl">BlackSentinel</h3>
                    </div>
                </div>

                {/* Table Rows */}
                {comparison.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-12 border-b border-zinc-800/50 hover:bg-white/[0.02] transition-colors last:border-0 group">
                        
                        {/* Feature Name */}
                        <div className="col-span-12 md:col-span-4 p-4 md:p-6 flex items-center md:justify-end md:text-right border-b md:border-b-0 border-zinc-800/50 bg-zinc-900/20 md:bg-transparent">
                            <span className="text-sm font-medium text-zinc-300 uppercase tracking-wide">{row.feature}</span>
                        </div>

                        {/* Antivirus Value */}
                        <div className="col-span-6 md:col-span-4 p-4 md:p-6 flex items-center justify-center text-center border-r md:border-l border-zinc-800/50">
                            <div className="flex flex-col items-center gap-2 opacity-50 grayscale group-hover:grayscale-0 transition-all">
                                <span className="text-sm font-medium text-zinc-400">{row.antivirus}</span>
                                {row.antivirus.includes("Software") || row.antivirus.includes("Alert") || row.antivirus.includes("Tickets") || row.antivirus.includes("vos") ? (
                                     <X className="w-4 h-4 text-red-500" />
                                ) : null}
                            </div>
                        </div>

                        {/* BlackSentinel Value */}
                        <div className="col-span-6 md:col-span-4 p-4 md:p-6 flex items-center justify-center text-center border-l border-zinc-800/50 bg-[#39CFE3]/[0.02]">
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-sm font-bold text-white">{row.blacksentinel}</span>
                                <Check className="w-4 h-4 text-[#39CFE3]" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* --- BENEFITS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const isHovered = hoveredIndex === index

            return (
              <div
                key={benefit.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-8 transition-all duration-500 overflow-hidden ${
                  revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                {/* Border Hover Effect */}
                <div className={`absolute inset-0 border-2 border-[#39CFE3] rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none ${
                    isHovered ? "opacity-100" : ""
                }`} />

                {/* Background Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#39CFE3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col items-start">
                    {/* Icon Box */}
                    <div className="mb-6 relative">
                        <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-700 group-hover:border-[#39CFE3] group-hover:bg-[#39CFE3] transition-all duration-300">
                             <Icon className="w-7 h-7 text-zinc-400 group-hover:text-black transition-colors" />
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                        {benefit.title}
                    </h3>
                    
                    <p className="text-zinc-400 leading-relaxed text-sm group-hover:text-zinc-300 transition-colors">
                        {benefit.description}
                    </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
