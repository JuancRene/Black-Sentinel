"use client"

import { useState, useEffect, useRef } from "react"
import { Check, X, Shield, Zap, Crown, BarChart3, Sparkles, ArrowRight, Users, HelpCircle, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

// --- DATOS ---
const comparisonData = [
  {
    category: "Protección Core",
    icon: Shield,
    features: [
      { name: "Antivirus Next-Gen + IA", esencial: true, crecimiento: true, profesional: true, corporativo: true },
      { name: "Bloqueo de Ransomware", esencial: true, crecimiento: true, profesional: true, corporativo: true },
      { name: "Monitoreo 24/7", esencial: true, crecimiento: true, profesional: true, corporativo: true },
    ],
  },
  {
    category: "Higiene y Control",
    icon: Zap,
    features: [
      { name: "Control de Productividad", esencial: true, crecimiento: true, profesional: true, corporativo: "Personalizable" },
      { name: "Gestión de Parches", esencial: true, crecimiento: true, profesional: true, corporativo: true },
      { name: "Seguridad de Email", esencial: true, crecimiento: true, profesional: true, corporativo: true },
      { name: "Filtrado Web y DNS", esencial: true, crecimiento: true, profesional: true, corporativo: true },
      { name: "Auditoría de Contraseñas", esencial: false, crecimiento: true, profesional: true, corporativo: true },
    ],
  },
  {
    category: "Seguridad Avanzada",
    icon: Crown,
    features: [
      { name: "Garantía de Rollback", esencial: false, crecimiento: false, profesional: true, corporativo: true },
      { name: "Monitoreo Dark Web", esencial: false, crecimiento: true, profesional: true, corporativo: true },
      { name: "Control de Puertos USB", esencial: false, crecimiento: true, profesional: true, corporativo: true },
    ],
  },
  {
    category: "Gestión y Soporte",
    icon: BarChart3,
    features: [
      {
        name: "Reportes",
        esencial: "Quincenal",
        crecimiento: "Quincenal",
        profesional: "Ejecutivo",
        corporativo: "A medida",
      },
      {
        name: "Soporte Técnico",
        esencial: "24/7",
        crecimiento: "24/7",
        profesional: "24/7 Dedicado",
        corporativo: "Gerente de Cuenta",
      },
    ],
  },
]

const plans = [
  {
    name: "Esencial",
    key: "esencial",
    icon: Users,
    subtitle: "Startups",
    featured: true,
  },
  {
    name: "Crecimiento",
    key: "crecimiento",
    icon: Zap,
    subtitle: "PyMEs",
  },
  {
    name: "Profesional",
    key: "profesional",
    icon: Shield,
    subtitle: "Empresas",
  },
  {
    name: "Corporativo",
    key: "corporativo",
    icon: Crown,
    subtitle: "Enterprise",
    isSpecial: true, // Estilo premium
  },
]

export function ServicesComparison() {
  const [selectedPlanMobile, setSelectedPlanMobile] = useState<string>("crecimiento")
  const [hoveredCol, setHoveredCol] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setRevealed(true)
        })
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleCTA = () => {
    window.open("https://tally.so/r/b5Z2A7", "_blank")
  }

  // Helper para renderizar celdas
  const renderCell = (value: boolean | string, isFeatured = false, isSpecial = false) => {
    if (value === true) {
      return (
        <div className="flex justify-center">
          <div className={`rounded-full p-1 ${isFeatured ? "bg-[#39CFE3]/20" : isSpecial ? "bg-white/20" : "bg-zinc-800"}`}>
            <Check className={`w-4 h-4 ${isFeatured ? "text-[#39CFE3]" : isSpecial ? "text-white" : "text-zinc-400"}`} />
          </div>
        </div>
      )
    }
    if (value === false) {
      return (
        <div className="flex justify-center opacity-20">
          <Minus className="w-4 h-4 text-zinc-500" />
        </div>
      )
    }
    return (
      <span className={`text-xs font-semibold px-2 py-1 rounded-md ${
        isFeatured 
          ? "text-[#39CFE3] bg-[#39CFE3]/10" 
          : isSpecial 
            ? "text-white bg-white/10" 
            : "text-zinc-400 bg-zinc-900"
      }`}>
        {value}
      </span>
    )
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden"
    >
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Glow ambiental */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#39CFE3]/5 blur-[120px] rounded-full pointer-events-none" />


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className={`text-center mb-16 transition-all duration-1000 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39CFE3]/30 bg-[#39CFE3]/5 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(57,207,227,0.2)] mb-6">
            <Sparkles className="w-3 h-3 text-[#39CFE3]" />
            <span className="text-xs font-semibold text-[#39CFE3] uppercase tracking-wider">Detalle Técnico</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Comparativa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39CFE3] to-teal-500">Punto por Punto</span>
          </h2>
          
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Desglosamos cada característica para que sepas exactamente qué protección estás adquiriendo.
          </p>
        </div>

        {/* --- DESKTOP TABLE --- */}
        <div className="hidden lg:block overflow-hidden rounded-3xl border border-zinc-800 bg-[#0A0A0A]/50 backdrop-blur-sm relative">
          
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-6 text-left w-1/4 border-b border-zinc-800 bg-[#0A0A0A]">
                   <span className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Características</span>
                </th>
                {plans.map((plan) => (
                  <th 
                    key={plan.key} 
                    className={`p-6 w-[18%] text-center border-b border-zinc-800 relative transition-colors duration-300 ${
                        hoveredCol === plan.key ? "bg-white/[0.02]" : ""
                    } ${plan.featured ? "bg-[#39CFE3]/5" : ""}`}
                    onMouseEnter={() => setHoveredCol(plan.key)}
                    onMouseLeave={() => setHoveredCol(null)}
                  >
                    {plan.featured && (
                         <div className="absolute top-0 left-0 right-0 h-1 bg-[#39CFE3] shadow-[0_0_10px_#39CFE3]" />
                    )}
                    <div className="flex flex-col items-center gap-2">
                        <plan.icon className={`w-6 h-6 ${
                            plan.featured ? "text-[#39CFE3]" : plan.isSpecial ? "text-white" : "text-zinc-500"
                        }`} />
                        <div>
                            <div className={`font-bold text-lg ${plan.featured ? "text-[#39CFE3]" : "text-white"}`}>{plan.name}</div>
                            <div className="text-xs text-zinc-500 font-normal">{plan.subtitle}</div>
                        </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((section, sIdx) => (
                <>
                  {/* Category Header */}
                  <tr key={sIdx} className="bg-zinc-900/50">
                    <td colSpan={5} className="p-4 border-y border-zinc-800">
                      <div className="flex items-center gap-2 pl-2">
                        <section.icon className="w-4 h-4 text-[#39CFE3]" />
                        <span className="font-bold text-white text-sm tracking-wide">{section.category}</span>
                      </div>
                    </td>
                  </tr>
                  {/* Features */}
                  {section.features.map((feature, fIdx) => (
                    <tr 
                        key={`${sIdx}-${fIdx}`} 
                        className="group border-b border-zinc-800/50 last:border-0 hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="p-4 text-sm text-zinc-300 pl-8 font-medium border-r border-zinc-800/50">
                        {feature.name}
                        {/* Tooltip hint icon just for visuals */}
                        <HelpCircle className="w-3 h-3 text-zinc-700 inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-help" />
                      </td>
                      {plans.map((plan) => (
                        <td 
                            key={plan.key} 
                            className={`p-4 text-center border-r border-zinc-800/50 last:border-0 transition-colors duration-300 ${
                                hoveredCol === plan.key ? "bg-white/[0.02]" : ""
                            } ${plan.featured ? "bg-[#39CFE3]/[0.02]" : ""}`}
                            onMouseEnter={() => setHoveredCol(plan.key)}
                            onMouseLeave={() => setHoveredCol(null)}
                        >
                            {/* @ts-ignore - dynamic access */}
                            {renderCell(feature[plan.key], plan.featured, plan.isSpecial)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- MOBILE VIEW --- */}
        <div className="lg:hidden">
            {/* Plan Selector Pills */}
            <div className="flex overflow-x-auto gap-2 pb-6 no-scrollbar mb-4">
                {plans.map((plan) => (
                    <button
                        key={plan.key}
                        onClick={() => setSelectedPlanMobile(plan.key)}
                        className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                            selectedPlanMobile === plan.key
                                ? plan.featured 
                                    ? "bg-[#39CFE3] text-black border-[#39CFE3]" 
                                    : plan.isSpecial
                                        ? "bg-white text-black border-white"
                                        : "bg-zinc-800 text-white border-zinc-700"
                                : "bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-700"
                        }`}
                    >
                        {plan.name}
                    </button>
                ))}
            </div>

            {/* Mobile Card Content */}
            <div className="bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-6 relative overflow-hidden min-h-[500px]">
                 {/* Dynamic content based on selection */}
                 {plans.map((plan) => (
                     <div key={plan.key} className={`${selectedPlanMobile === plan.key ? "block animate-fade-in" : "hidden"}`}>
                        
                        <div className="text-center mb-8">
                            <div className="inline-block p-3 rounded-2xl bg-zinc-900 mb-4">
                                <plan.icon className={`w-8 h-8 ${plan.featured ? "text-[#39CFE3]" : "text-white"}`} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                            <p className="text-zinc-500 text-sm mt-1">{plan.subtitle}</p>
                        </div>

                        <div className="space-y-8">
                            {comparisonData.map((section, idx) => (
                                <div key={idx}>
                                    <h4 className="text-[#39CFE3] text-xs font-bold uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2">
                                        {section.category}
                                    </h4>
                                    <ul className="space-y-3">
                                        {section.features.map((feature, fIdx) => {
                                             {/* @ts-ignore */}
                                            const val = feature[plan.key];
                                            if (val === false) return null; // Don't show missing features in mobile to save space
                                            
                                            return (
                                                <li key={fIdx} className="flex justify-between items-center text-sm">
                                                    <span className="text-zinc-300">{feature.name}</span>
                                                    <div>
                                                        {renderCell(val, plan.featured, plan.isSpecial)}
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            ))}
                        </div>

                     </div>
                 ))}
            </div>
        </div>

        {/* --- FOOTER CTA --- */}
        <div className="mt-16 text-center">
             <Button
                size="lg"
                onClick={handleCTA}
                className="bg-transparent border border-[#39CFE3] text-[#39CFE3] hover:bg-[#39CFE3] hover:text-black font-bold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 rounded-xl"
             >
                <span className="flex items-center gap-2">
                    Solicitar Asesoría
                    <ArrowRight className="w-5 h-5" />
                </span>
             </Button>
        </div>

      </div>
    </section>
  )
}
