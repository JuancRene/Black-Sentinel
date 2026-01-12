"use client"

import { useState } from "react"
import { ChevronDown, ShieldCheck } from "lucide-react"

const faqs = [
  {
    question: "¿Qué pasa si mi negocio sufre un ataque mientras ustedes me cuidan?",
    answer:
      "Nuestro trabajo es evitar que eso pase. Detectamos amenazas antes de que hagan daño y actuamos automáticamente para bloquearlas. Si algo llegara a pasar, te avisamos inmediatamente y te acompañamos en la solución. Pero ojo: no hacemos recuperación post-ataque (eso es otro servicio). Nosotros somos prevención pura.",
  },
  {
    question: "¿Necesito saber de tecnología para usar esto?",
    answer:
      "Para nada. BlackSentinel está pensado para dueños de negocio que no quieren complicarse. Nosotros nos encargamos de todo lo técnico. Vos solo recibís reportes claros y nos escribís si tenés alguna duda. Así de simple.",
  },
  {
    question: "¿Esto es como un antivirus?",
    answer:
      "Es mucho más. Un antivirus es una herramienta que instalás y te olvidas (hasta que falla). Nosotros somos un equipo de personas + tecnología que cuida todo tu negocio: monitoreamos 24/7, actualizamos todo automáticamente, detectamos comportamientos sospechosos, y te avisamos si hay algo raro. Es la diferencia entre tener una alarma y tener un guardia de seguridad.",
  },
  {
    question: "¿Qué tipo de negocios pueden contratarlos?",
    answer:
      "Cualquier PyME que dependa de sus computadoras, datos o internet para funcionar. Trabajamos con e-commerce, estudios contables, agencias, empresas de software, comercios con sistemas, y cualquier negocio que no pueda darse el lujo de parar por un ataque informático.",
  },
  {
    question: "¿Cuánto tarda en estar funcionando?",
    answer:
      "Dependiendo del tamaño de tu negocio, entre 2 y 7 días ya estás protegido. Nosotros hacemos toda la instalación y configuración. No tenés que hacer nada técnico.",
  },
  {
    question: "¿Cómo me avisan si pasa algo?",
    answer:
      "Te avisamos por el canal que prefieras: WhatsApp, email, o por el dashboard. Y no te mandamos alertas crípticas llenas de códigos. Te explicamos en palabras simples qué pasó y qué hicimos al respecto.",
  },
  {
    question: "¿Hay contrato de permanencia?",
    answer: "No. Pagás mes a mes y podés cancelar cuando quieras. Sin letra chica, sin penalidades.",
  },
  {
    question: "¿Qué pasa si tengo más equipos de los que incluye mi plan?",
    answer:
      "No hay problema. Podés agregar equipos adicionales por un costo preferencial. Contactanos y te pasamos las tarifas según tu volumen.",
  },
  {
    question: "¿Funciona si tengo todo en la nube (AWS, Azure, Google)?",
    answer:
      "Sí. De hecho, tenemos experiencia especial en entornos cloud. Aplicamos las mismas protecciones adaptadas a cada plataforma.",
  },
  {
    question: "¿Tienen soporte? ¿Les puedo escribir si tengo una duda?",
    answer:
      "Sí, siempre. Tenés soporte por WhatsApp, email y videollamada (según tu plan). Y te responde una persona real que conoce tu caso, no un bot.",
  },
  {
    question: "¿Puedo cambiar de plan después?",
    answer: "Sí, podés escalar a un plan más completo en cualquier momento sin perder nada de lo ya configurado.",
  },
  {
    question: "¿Qué diferencia hay entre los planes?",
    answer:
      "Básicamente, la cantidad de equipos cubiertos y algunas funciones extra como monitoreo de Dark Web, control de USB, o reportes ejecutivos. Pero todos los planes incluyen la protección core: antivirus inteligente, monitoreo 24/7 y bloqueo de ransomware.",
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`group border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-[#0AB9C3] bg-[#0AB9C3]/5 shadow-[0_0_20px_-10px_rgba(10,185,195,0.3)]"
          : "border-zinc-800 bg-zinc-900/30 hover:border-zinc-700"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
      >
        <span className={`font-medium pr-4 transition-colors duration-300 ${isOpen ? "text-white" : "text-zinc-300 group-hover:text-white"}`}>
          {question}
        </span>
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
            isOpen ? "bg-[#0AB9C3] rotate-180" : "bg-zinc-800 group-hover:bg-zinc-700"
          }`}
        >
          <ChevronDown
            className={`w-5 h-5 transition-colors duration-300 ${isOpen ? "text-black" : "text-zinc-400"}`}
          />
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-0 text-zinc-400 leading-relaxed border-t border-transparent">
             {/* Línea decorativa sutil solo cuando está abierto */}
             <div className="w-full h-px bg-gradient-to-r from-[#0AB9C3]/20 to-transparent mb-4"></div>
            {answer}
          </div>
        </div>
      </div>
    </div>
  )
}

export function FAQs() {
  return (
    <section id="faqs" className="relative py-24 px-4 bg-[#050505] overflow-hidden">
      {/* Fondo decorativo sutil (Radial Gradient) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0AB9C3]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-3xl mx-auto z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-2">
            <ShieldCheck className="w-4 h-4 text-[#0AB9C3] mr-2" />
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Dudas Frecuentes</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Todo lo que necesitás saber sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0AB9C3] to-teal-600">tu seguridad</span>
          </h2>
          
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Si no encontrás tu duda acá, escribinos. Te respondemos en el día con una solución clara.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
