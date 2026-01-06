"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

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
    <div className="border border-[#1A1A1A] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#0AB9C3]/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left bg-[#0D0D0D] hover:bg-[#1A1A1A] transition-colors"
      >
        <span className="font-semibold text-white pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#0AB9C3] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="px-6 py-5 bg-black/50 text-gray-300 leading-relaxed">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export function FAQs() {
  return (
    <section id="faqs" className="py-24 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Preguntas que nos hacen seguido</h2>
          <p className="text-xl text-gray-400">Si no encontrás tu duda acá, escribinos. Te respondemos en el día.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
