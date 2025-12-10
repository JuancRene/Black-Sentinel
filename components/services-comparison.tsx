"use client"

import { useState } from "react"
import { Check, X, Shield, Zap, Crown, BarChart3 } from "lucide-react"
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
    headerBg: "bg-[#0D0D0D]",
  },
  {
    name: "PRO",
    key: "pro",
    price: "$1.500",
    capacity: "Hasta 75 Dispositivos",
    badge: "Recomendado",
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
    bgColor: "bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A]",
    borderColor: "border-gray-800",
    headerBg: "bg-[#0D0D0D]",
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

  const handleCTA = () => {
    window.open("https://tally.so/r/b5Z2A7", "_blank")
  }

  const renderCell = (value: boolean | string, isFlexible = false) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className={`w-5 h-5 mx-auto ${isFlexible ? "text-purple-400" : "text-primary"}`} />
      ) : (
        <X className="w-4 h-4 text-gray-700 mx-auto" />
      )
    }
    return <span className={`text-sm font-medium ${isFlexible ? "text-purple-300" : "text-gray-300"}`}>{value}</span>
  }

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Comparación <span className="text-primary">Detallada</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 text-pretty">
            Elegí el plan que mejor se adapte a las necesidades de tu empresa
          </p>

          {/* Plan selector for mobile */}
          <div className="md:hidden flex gap-2 justify-center mb-8 flex-wrap">
            {plans.map((plan) => (
              <Button
                key={plan.key}
                onClick={() => setSelectedPlan(selectedPlan === plan.key ? null : plan.key)}
                variant={selectedPlan === plan.key ? "default" : "outline"}
                className="flex-1 min-w-[120px]"
              >
                {plan.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Desktop comparison table */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-900 pt-8">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-8 text-white/60 font-semibold text-sm uppercase tracking-wider w-1/5 bg-black border-r border-gray-900">
                  Características
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.key}
                    className={`p-6 text-center relative ${plan.headerBg} border-r border-gray-900 last:border-r-0 ${
                      plan.featured ? "shadow-lg shadow-primary/10" : ""
                    } ${plan.special ? "shadow-lg shadow-purple-500/10" : ""}`}
                  >
                    {plan.badge && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full z-10 mb-2">
                        <span
                          className={`${
                            plan.special ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-primary"
                          } text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap`}
                        >
                          {plan.badge}
                        </span>
                      </div>
                    )}
                    <div className={`font-bold text-2xl mb-2 ${plan.textColor || "text-white"}`}>{plan.name}</div>
                    <div className={`font-bold mb-2 ${plan.textColor || "text-primary"}`}>
                      {plan.priceSubtext && <div className="text-xs text-gray-400 mb-1">{plan.priceSubtext}</div>}
                      <div className={plan.special ? "text-2xl" : "text-3xl"}>{plan.price}</div>
                    </div>
                    <div className="text-gray-400 text-sm font-medium">{plan.capacity}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((category, categoryIdx) => (
                <>
                  <tr key={`category-${categoryIdx}`} className="bg-gradient-to-r from-gray-950 to-black">
                    <td colSpan={5} className="p-5 border-t border-gray-900">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <category.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-primary font-bold text-base uppercase tracking-wide">
                          {category.category}
                        </span>
                      </div>
                    </td>
                  </tr>
                  {category.features.map((feature, featureIdx) => (
                    <tr
                      key={`feature-${categoryIdx}-${featureIdx}`}
                      className="border-t border-gray-900 hover:bg-gray-950/50 transition-colors group"
                    >
                      <td className="p-5 text-gray-300 font-medium bg-black border-r border-gray-900">
                        {feature.name}
                      </td>
                      <td className={`p-5 text-center ${plans[0].bgColor} border-r border-gray-900`}>
                        {renderCell(feature.starter)}
                      </td>
                      <td
                        className={`p-5 text-center ${plans[1].bgColor} border-r border-gray-900 ${
                          plans[1].featured ? "shadow-inner shadow-primary/5" : ""
                        }`}
                      >
                        {renderCell(feature.pro)}
                      </td>
                      <td className={`p-5 text-center ${plans[2].bgColor} border-r border-gray-900`}>
                        {renderCell(feature.sentinel)}
                      </td>
                      <td
                        className={`p-5 text-center ${plans[3].bgColor} ${
                          plans[3].special ? "shadow-inner shadow-purple-500/5" : ""
                        }`}
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

        {/* Mobile comparison cards */}
        <div className="md:hidden space-y-6">
          {comparisonData.map((category, categoryIdx) => (
            <div key={categoryIdx} className="bg-[#0D0D0D] rounded-xl p-6 border border-gray-900">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-primary font-bold text-sm uppercase tracking-wide">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.features.map((feature, featureIdx) => {
                  const showFeature =
                    !selectedPlan ||
                    selectedPlan === "starter" ||
                    selectedPlan === "pro" ||
                    selectedPlan === "sentinel" ||
                    selectedPlan === "flexible"

                  if (!showFeature && selectedPlan) return null

                  return (
                    <div key={featureIdx} className="border-b border-gray-900 pb-3">
                      <div className="text-white mb-2 font-medium">{feature.name}</div>
                      <div className="grid grid-cols-2 gap-3">
                        {(!selectedPlan || selectedPlan === "starter") && (
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs text-gray-400">Starter:</span>
                            {renderCell(feature.starter)}
                          </div>
                        )}
                        {(!selectedPlan || selectedPlan === "pro") && (
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs text-gray-400">Pro:</span>
                            {renderCell(feature.pro)}
                          </div>
                        )}
                        {(!selectedPlan || selectedPlan === "sentinel") && (
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs text-gray-400">Sentinel:</span>
                            {renderCell(feature.sentinel)}
                          </div>
                        )}
                        {(!selectedPlan || selectedPlan === "flexible") && (
                          <div className="flex items-center justify-between gap-2 col-span-2 bg-purple-900/10 p-2 rounded">
                            <span className="text-xs text-purple-400">Flexible:</span>
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

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">¿No estás seguro qué plan elegir?</p>
          <Button size="lg" onClick={handleCTA} className="bg-primary hover:bg-primary/90 text-black font-bold">
            Hablemos de tu proyecto
          </Button>
        </div>
      </div>
    </section>
  )
}
