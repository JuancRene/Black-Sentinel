"use client"

import { Check, Rocket, Zap, Crown, Users, Sparkles, Shield, Phone, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const plans = [
  {
    name: "Esencial",
    icon: Users,
    price: "USD 25",
    period: "/ equipo / mes",
    devices: "1 a 15 equipos",
    description: "Protección base sólida para negocios que inician.",
    features: [
      "Antivirus Next-Gen",
      "Monitoreo 24/7",
      "Soporte vía WhatsApp",
      "Protección de emails",
      "Reportes semanales",
    ],
    highlight: true,
    badge: "RECOMENDADO",
    cta: "Elegir Esencial",
  },
  {
    name: "Crecimiento",
    icon: Rocket,
    price: "USD 800",
    period: "/ mes (Flat Fee)",
    devices: "hasta 35 equipos",
    description: "La opción inteligente. Control total y soporte prioritario.",
    features: [
      "Todo lo de Esencial",
      "Soporte Prioritario <2hs",
      "Actualización de Apps",
      "Alertas predictivas IA",
      "Control de productividad",
    ],
    highlight: false,
    cta: "Empezar Ahora",
  },
  {
    name: "Profesional",
    icon: Zap,
    price: "USD 1.500",
    period: "/ mes (Flat Fee)",
    devices: "hasta 75 equipos",
    description: "Seguridad ofensiva para empresas que no pueden parar.",
    features: [
      "Todo lo de Crecimiento",
      "Mesa de Ayuda 24/7",
      "Gestión de parches",
      "Filtrado Web y USB",
      "Backup de datos críticos",
      "Gestor de contraseñas",
    ],
    highlight: false,
    cta: "Elegir Profesional",
  },
  {
    name: "Corporativo",
    icon: Crown,
    price: "A medida",
    period: "Consultar",
    devices: "Sin límites",
    description: "Arquitectura de seguridad personalizada y dedicada.",
    features: ["Todo lo de Profesional", "Gerente de cuenta dedicado", "SLA Personalizado", "Auditoría de cumplimiento", "Simulación de ataques"],
    highlight: false,
    isCustom: true,
    cta: "Hablar con Ventas",
  },
]

export function Pricing() {
  const [revealed, setRevealed] = useState(false)
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

  const handleCTA = () => {
    window.open("https://tally.so/r/b5Z2A7", "_blank")
  }

  return (
    <section
      ref={sectionRef}
      id="planes"
      className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden"
    >
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Glows ambientales */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0AB9C3]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0AB9C3]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0AB9C3]/30 bg-[#0AB9C3]/5 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(10,185,195,0.2)] mb-6">
            <Sparkles className="w-3 h-3 text-[#0AB9C3]" />
            <span className="text-xs font-semibold text-[#0AB9C3] uppercase tracking-wider">Inversión Transparente</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Planes a la medida de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0AB9C3] to-teal-500">tu riesgo</span>
          </h2>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
            Sin contratos forzosos. Sin costos ocultos. Cancelás cuando querés.
            <br />
            <Link href="/servicios" className="text-[#0AB9C3] hover:underline underline-offset-4 text-sm font-medium mt-2 inline-block">
              Comparar características detalladas →
            </Link>
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            
            return (
              <div
                key={plan.name}
                className={`relative group rounded-3xl p-1 transition-all duration-500 ${
                    revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Borde Brillante para el destacado */}
                <div 
                    className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
                        plan.highlight 
                            ? "bg-gradient-to-b from-[#0AB9C3] via-[#0AB9C3]/20 to-transparent opacity-100" 
                            : "bg-white/10 opacity-0 group-hover:opacity-100"
                    }`} 
                />

                {/* --- CONTENIDO TARJETA --- */}
                <div className="relative h-full bg-[#0A0A0A] rounded-[22px] p-6 flex flex-col overflow-hidden">
                    
                    {/* Efecto Escáner en Hover */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0AB9C3]/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 pointer-events-none" />

                    {/* Badge destacado */}
                    {plan.highlight && (
                        <div className="absolute top-0 inset-x-0 flex justify-center -mt-3">
                            <span className="bg-[#0AB9C3] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_#0AB9C3]">
                                {plan.badge}
                            </span>
                        </div>
                    )}

                    {/* Header Tarjeta */}
                    <div className="mb-6">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                            plan.highlight ? "bg-[#0AB9C3]/20 text-[#0AB9C3]" : "bg-zinc-900 text-zinc-500 group-hover:text-white group-hover:bg-zinc-800"
                        }`}>
                            <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-sm text-zinc-400 min-h-[40px] leading-relaxed">
                            {plan.description}
                        </p>
                    </div>

                    {/* Precio */}
                    <div className="mb-6 pb-6 border-b border-white/5">
                        <div className="flex items-baseline gap-1">
                            <span className={`text-3xl font-bold ${plan.highlight ? "text-[#0AB9C3]" : "text-white"}`}>
                                {plan.price}
                            </span>
                        </div>
                        <span className="text-xs text-zinc-500 font-medium uppercase tracking-wide">
                            {plan.period}
                        </span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8 flex-grow">
                        {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm">
                                <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                    plan.highlight ? "text-[#0AB9C3]" : "text-zinc-600 group-hover:text-[#0AB9C3]"
                                }`} />
                                <span className="text-zinc-300">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                        onClick={handleCTA}
                        className={`w-full rounded-xl py-6 font-bold transition-all duration-300 ${
                            plan.highlight
                                ? "bg-[#0AB9C3] hover:bg-[#09a0a9] text-black shadow-[0_0_20px_-5px_rgba(10,185,195,0.4)] hover:shadow-[0_0_30px_-5px_rgba(10,185,195,0.6)]"
                                : "bg-zinc-900 hover:bg-zinc-800 text-white border border-white/5 hover:border-white/20"
                        }`}
                    >
                        {plan.cta}
                    </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* --- GARANTÍAS INFERIORES --- */}
        <div className="mt-20 border-t border-white/5 pt-10">
             <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                {[
                    { icon: Shield, text: "Diagnóstico inicial bonificado" },
                    { icon: Phone, text: "Hablas con humanos, no bots" },
                    { icon: HelpCircle, text: "Soporte incluído en todos los planes" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                        <div className="p-2 rounded-full bg-[#0AB9C3]/10 text-[#0AB9C3] group-hover:bg-[#0AB9C3] group-hover:text-black transition-colors duration-300">
                             <item.icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">
                            {item.text}
                        </span>
                    </div>
                ))}
             </div>
        </div>

      </div>
    </section>
  )
}
