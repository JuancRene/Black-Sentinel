"use client"

import { useState, useEffect, useRef } from "react"
import { Check, X, Shield, Zap, Crown, BarChart3, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const comparisonData = [
  {
    category: "PROTECCIÓN CORE",
    icon: Shield,
    features: [
      { name: "Antivirus Next-Gen + IA", starter: true, pro: true, sentinel: true, flexible: true },
      { name: "Bloqueo de Ransomware", starter: true, pro: true, sentinel: true, flexible: true },
      { name: "Monitoreo 24/7", starter: true, pro: true, sentinel: true, flexible: true },
    ],
  },
  {
    category: "HIGIENE Y MEJORAS",
    icon: Zap,
    features: [
      { name: "Gestión de Parches", starter: false, pro: true, sentinel: true, flexible: "Opcional" },
      { name: "Seguridad de Email", starter: false, pro: true, sentinel: true, flexible: "Opcional" },
      { name: "Filtrado Web y DNS", starter: false, pro: true, sentinel: true, flexible: "Opcional" },
      { name: "Auditoría de Contraseñas", starter: false, pro: true, sentinel: true, flexible: "Opcional" },
    ],
  },
  {
    category: "AVANZADO",
    icon: Crown,
    features: [
      { name: "Garantía de Rollback", starter: false, pro: false, sentinel: true, flexible: "Opcional" },
      { name: "Monitoreo Dark Web", starter: false, pro: false, sentinel: true, flexible: "Opcional" },
      { name: "Control USB", starter: false, pro: false, sentinel: true, flexible: "Opcional" },
    ],
  },
  {
    category: "GESTIÓN",
    icon: BarChart3,
    features: [
      {
        name: "Reportes",
        starter: "Semanal Auto",
        pro: "Semanal Insights",
        sentinel: "Semanal Ejecutivo",
        flexible: "A Elección",
      },
      { name: "Reunión de Estrategia", starter: false, pro: false, sentinel: true, flexible: "A cotizar" },
      { name: "Soporte", starter: "Email", pro: "Prioritario", sentinel: "24/7", flexible: "Directo" },
    ],
  },
]

const plans = [
  {
    name: "STARTER",
    key: "starter",
    price: "$800",
    capacity: "Hasta 35 Dispositivos",
    bgColor: "bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A]",
    borderColor: "border-gray-800",
    headerBg: "bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]",
  },
  {
    name: "PRO",
    key: "pro",
    price: "$1.500",
    capacity: "Hasta 75 Dispositivos",
    badge: "Más Popular",
    bgColor: "bg-gradient-to-br from-primary/5 to-primary/10",
    borderColor: "border-primary/40",
    headerBg: "bg-gradient-to-br from-primary/20 to-primary/10",
    featured: true,
  },
  {
    name: "SENTINEL",
    key: "sentinel",
    price: "$3.000",
    capacity: "Hasta 120 Dispositivos",
    badge: "Premium",
    bgColor: "bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A]",
    borderColor: "border-primary/30",
    headerBg: "bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]",
  },
  {
    name: "FLEXIBLE",
    key: "flexible",
    price: "$25/equipo",
    priceSubtext: "(desde)",
    capacity: "Sin límites",
    badge: "A Medida",
    bgColor: "bg-gradient-to-br from-purple-950/30 to-pink-950/20",
    borderColor: "border-purple-500/40",
    headerBg: "bg-gradient-to-br from-purple-900/30 to-pink-900/20",
    textColor: "text-purple-300",
    special: true,
  },
]

export function ServicesComparison() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)
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

  const renderCell = (value: boolean | string, isFlexible = false) => {
    if (typeof value === "boolean") {
      return value ? (
        <div className="relative group/check">
          <Check className={`w-5 h-5 mx-auto transition-all duration-300 group-hover/check:scale-125 ${isFlexible ? "text-purple-400" : "text-primary"}`} />
          <div className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover/check:opacity-100 transition-opacity duration-300 ${isFlexible ? "bg-purple-400/30" : "bg-primary/30"}`} />
        </div>
      ) : (
        <X className="w-4 h-4 text-gray-700 mx-auto opacity-50" />
      )
    }
    return (
      <span className={`text-sm font-medium transition-colors duration-300 ${isFlexible ? "text-purple-300" : "text-gray-300"}`}>
        {value}
      </span>
    )
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 bg-gradient-to-b from-black via-[#0A0A0A] to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] animate-float" />
      <div 
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header mejorado */}
        <div 
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Comparativa completa</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Comparación{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary">
              Detallada
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Elegí el plan que mejor se adapte a las necesidades de tu empresa
          </p>

          {/* Plan selector para mobile mejorado */}
          <div className="md:hidden flex gap-3 justify-center mb-8 flex-wrap">
            {plans.map((plan) => (
              <Button
                key={plan.key}
                onClick={() => setSelectedPlan(selectedPlan === plan.key ? null : plan.key)}
                variant={selectedPlan === plan.key ? "default" : "outline"}
                className={`flex-1 min-w-[120px] transition-all duration-300 ${
                  selectedPlan === plan.key 
                    ? plan.special 
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-500" 
                      : "bg-primary text-black border-primary"
                    : "border-gray-700 hover:border-primary"
                }`}
              >
                {plan.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Desktop comparison table mejorada */}
        <div 
          className={`hidden md:block overflow-hidden rounded-3xl border-2 border-gray-900/50 shadow-2xl transition-all duration-1000 delay-200 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-8 text-white/60 font-semibold text-sm uppercase tracking-wider w-1/5 bg-black/80 backdrop-blur-sm border-r border-gray-900/50">
                    Características
                  </th>
                  {plans.map((plan, idx) => (
                    <th
                      key={plan.key}
                      onMouseEnter={() => setHoveredPlan(plan.key)}
                      onMouseLeave={() => setHoveredPlan(null)}
                      className={`p-6 text-center relative ${plan.headerBg} border-r border-gray-900/50 last:border-r-0 transition-all duration-500 ${
                        plan.featured ? "shadow-lg shadow-primary/10" : ""
                      } ${plan.special ? "shadow-lg shadow-purple-500/10" : ""} ${
                        hoveredPlan === plan.key ? "scale-105 z-10" : ""
                      }`}
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      {/* Badge mejorado */}
                      {plan.badge && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                          <div className="relative">
                            <div className={`absolute inset-0 blur-lg ${
                              plan.special ? "bg-purple-500/50" : "bg-primary/50"
                            } animate-pulse`} />
                            
                          </div>
                        </div>
                      )}
                      
                      {/* Nombre del plan */}
                      <div className={`font-black text-2xl mb-2 transition-all duration-300 ${
                        plan.textColor || "text-white"
                      } ${hoveredPlan === plan.key ? "scale-110" : ""}`}>
                        {plan.name}
                      </div>
                      
                      {/* Precio */}
                      <div className={`font-bold mb-2 transition-all duration-300 ${
                        plan.textColor || "text-primary"
                      } ${hoveredPlan === plan.key ? "scale-110" : ""}`}>
                        {plan.priceSubtext && (
                          <div className="text-xs text-gray-400 mb-1">{plan.priceSubtext}</div>
                        )}
                        <div className={plan.special ? "text-2xl" : "text-3xl"}>{plan.price}</div>
                      </div>
                      
                      {/* Capacidad */}
                      <div className="text-gray-400 text-sm font-medium">{plan.capacity}</div>

                      {/* Glow effect en hover */}
                      {hoveredPlan === plan.key && (
                        <div className={`absolute inset-0 ${
                          plan.special ? "bg-purple-500/5" : "bg-primary/5"
                        } pointer-events-none`} />
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((category, categoryIdx) => (
                  <>
                    {/* Categoría header mejorada */}
                    <tr key={`category-${categoryIdx}`} className="bg-gradient-to-r from-gray-950/80 to-black/80 backdrop-blur-sm">
                      <td colSpan={5} className="p-6 border-t border-gray-900/50">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className="absolute inset-0 bg-primary/30 rounded-xl blur-md animate-pulse" />
                            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                              <category.icon className="w-6 h-6 text-primary" />
                            </div>
                          </div>
                          <span className="text-primary font-black text-base uppercase tracking-wider">
                            {category.category}
                          </span>
                        </div>
                      </td>
                    </tr>
                    
                    {/* Features */}
                    {category.features.map((feature, featureIdx) => (
                      <tr
                        key={`feature-${categoryIdx}-${featureIdx}`}
                        className="border-t border-gray-900/50 hover:bg-gray-950/50 transition-all duration-300 group"
                      >
                        <td className="p-5 text-gray-300 font-medium bg-black/80 backdrop-blur-sm border-r border-gray-900/50 group-hover:text-white transition-colors">
                          {feature.name}
                        </td>
                        <td className={`p-5 text-center ${plans[0].bgColor} border-r border-gray-900/50 transition-all duration-300 ${
                          hoveredPlan === "starter" ? "bg-primary/5" : ""
                        }`}>
                          {renderCell(feature.starter)}
                        </td>
                        <td
                          className={`p-5 text-center ${plans[1].bgColor} border-r border-gray-900/50 transition-all duration-300 ${
                            plans[1].featured ? "shadow-inner shadow-primary/5" : ""
                          } ${hoveredPlan === "pro" ? "bg-primary/10" : ""}`}
                        >
                          {renderCell(feature.pro)}
                        </td>
                        <td className={`p-5 text-center ${plans[2].bgColor} border-r border-gray-900/50 transition-all duration-300 ${
                          hoveredPlan === "sentinel" ? "bg-primary/5" : ""
                        }`}>
                          {renderCell(feature.sentinel)}
                        </td>
                        <td
                          className={`p-5 text-center ${plans[3].bgColor} transition-all duration-300 ${
                            plans[3].special ? "shadow-inner shadow-purple-500/5" : ""
                          } ${hoveredPlan === "flexible" ? "bg-purple-500/10" : ""}`}
                        >
                          {renderCell(feature.flexible, true)}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile comparison cards mejoradas */}
        <div className="md:hidden space-y-6">
          {comparisonData.map((category, categoryIdx) => (
            <div 
              key={categoryIdx} 
              className={`bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-2xl p-6 border-2 border-gray-900/50 transition-all duration-700 ${
                revealed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${categoryIdx * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/30 rounded-xl blur-md animate-pulse" />
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-primary font-bold text-sm uppercase tracking-wide">{category.category}</h3>
              </div>
              <div className="space-y-5">
                {category.features.map((feature, featureIdx) => {
                  const showFeature =
                    !selectedPlan ||
                    selectedPlan === "starter" ||
                    selectedPlan === "pro" ||
                    selectedPlan === "sentinel" ||
                    selectedPlan === "flexible"

                  if (!showFeature && selectedPlan) return null

                  return (
                    <div key={featureIdx} className="border-b border-gray-900/50 pb-4 last:border-0">
                      <div className="text-white mb-3 font-semibold">{feature.name}</div>
                      <div className="grid grid-cols-2 gap-3">
                        {(!selectedPlan || selectedPlan === "starter") && (
                          <div className="flex items-center justify-between gap-2 bg-black/30 p-2 rounded-lg">
                            <span className="text-xs text-gray-400 font-medium">Starter:</span>
                            {renderCell(feature.starter)}
                          </div>
                        )}
                        {(!selectedPlan || selectedPlan === "pro") && (
                          <div className="flex items-center justify-between gap-2 bg-primary/5 p-2 rounded-lg border border-primary/20">
                            <span className="text-xs text-primary font-medium">Pro:</span>
                            {renderCell(feature.pro)}
                          </div>
                        )}
                        {(!selectedPlan || selectedPlan === "sentinel") && (
                          <div className="flex items-center justify-between gap-2 bg-black/30 p-2 rounded-lg">
                            <span className="text-xs text-gray-400 font-medium">Sentinel:</span>
                            {renderCell(feature.sentinel)}
                          </div>
                        )}
                        {(!selectedPlan || selectedPlan === "flexible") && (
                          <div className="flex items-center justify-between gap-2 col-span-2 bg-purple-900/20 p-2 rounded-lg border border-purple-500/30">
                            <span className="text-xs text-purple-400 font-medium">Flexible:</span>
                            {renderCell(feature.flexible, true)}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section mejorada */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50" />
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          
          <p className="text-lg text-gray-400 mb-6">
            ¿No estás seguro qué plan elegir?
          </p>
          
          <Button 
            size="lg" 
            onClick={handleCTA} 
            className="group relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-bold px-8 py-6 text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Hablemos de tu proyecto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          </Button>
        </div>
      </div>
    </section>
  )
}
