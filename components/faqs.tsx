"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "¿BlackSentinel responde a incidentes de ciberseguridad?",
    answer:
      "No. Nuestro enfoque es 100% preventivo. Nos especializamos en evitar incidentes mediante hardening, monitoreo continuo y detección temprana. Si estás buscando respuesta reactiva, remediación post-ataque o recuperación, ese servicio no forma parte de nuestra propuesta.",
  },
  {
    question: "¿Qué significa 'seguridad preventiva'?",
    answer:
      "Es un modelo donde el objetivo principal es detectar debilidades antes de que se conviertan en ataques reales. Incluye: Hardening de sistemas, Análisis de vulnerabilidades, Monitoreo 24/7, Alertas anticipadas, y Reglas automáticas para bloquear riesgos. Con este enfoque, reducimos significativamente la posibilidad de sufrir incidentes.",
  },
  {
    question: "¿Necesito tener conocimientos técnicos para usar la plataforma?",
    answer:
      "No. BlackSentinel está pensado para empresas que no quieren perder tiempo con configuraciones. Te entregamos dashboards simples, métricas claras y reportes entendibles.",
  },
  {
    question: "¿Qué tipo de empresas pueden contratar el servicio?",
    answer:
      "Trabajamos con: Pymes, E-commerce, Empresas de software, Agencias, Estudios contables y legales, Emprendimientos con infraestructura digital. Si tu negocio depende de sistemas, datos o Internet, te sirve BlackSentinel.",
  },
  {
    question: "¿Qué diferencia tiene BlackSentinel respecto a un antivirus o firewall común?",
    answer:
      "Un antivirus o firewall es una herramienta puntual. Nosotros ofrecemos un ecosistema completo de prevención, que incluye: Hardening continuo, Automatización defensiva, Monitoreo 24/7, Análisis de comportamiento, y Reportes y métricas de riesgo. Protegemos todo tu entorno, no solo un dispositivo.",
  },
  {
    question: "¿Qué pasa si detectan una amenaza?",
    answer:
      "Te avisamos de inmediato y se ejecutan acciones preventivas automatizadas (según el plan contratado), como bloquear puertos, servicios o actividades anómalas. Recordá que no hacemos respuesta post-incidente, pero sí evitamos que avance.",
  },
  {
    question: "¿Necesito instalar algo?",
    answer:
      "Depende del entorno. En algunos casos se instala un agente liviano de monitoreo; en otros, se trabaja vía APIs o desde la nube. Nosotros nos encargamos de toda la implementación.",
  },
  {
    question: "¿Cómo son los reportes?",
    answer:
      "Recibirás reportes: Mensuales (Plan Starter), Semanales (Plan Pro), Diarios + estratégicos (Plan Sentinel). Incluyen: Vulnerabilidades detectadas, Riesgos priorizados, Actividad inusual, y Recomendaciones claras.",
  },
  {
    question: "¿Cuánto tiempo toma la implementación?",
    answer:
      "En promedio: Starter: 48 horas, Pro: 3 a 5 días, Sentinel: 7 a 10 días. Depende del tamaño de tu infraestructura.",
  },
  {
    question: "¿Ofrecen soporte técnico?",
    answer:
      "Sí. Ofrecemos soporte por WhatsApp, email y videollamada (según el plan). El soporte se enfoca en prevención, configuraciones y monitoreo, no en respuesta ante incidentes.",
  },
  {
    question: "¿Puedo cambiar de plan más adelante?",
    answer: "Sí. Podés escalar a un plan superior en cualquier momento sin perder lo ya configurado.",
  },
  {
    question: "¿Funciona con servidores cloud como AWS, Azure o GCP?",
    answer:
      "Sí. Especializarnos en entornos cloud es parte clave del servicio. Aplicamos hardening, monitoreo y automatización específicos para cada plataforma.",
  },
  {
    question: "¿Hay contrato de permanencia?",
    answer: "No. Se paga mes a mes y podés cancelar cuando quieras.",
  },
  {
    question: "¿Qué beneficios concretos voy a notar en mi empresa?",
    answer:
      "Menos incidentes, Menor exposición a ataques, Infraestructura más estable, Menos tiempo perdido por problemas técnicos, Mayor tranquilidad para vos y tu equipo, y Protección continua sin tener que estar encima.",
  },
  {
    question: "¿Qué pasa si tengo más dispositivos de los que incluye mi plan?",
    answer:
      "¿Tienes más equipos de los que incluye el plan? No hay problema. Puedes agregar dispositivos adicionales a tu plan por un costo unitario preferencial. Contactanos para conocer las tarifas según tu volumen de equipos adicionales.",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
          <p className="text-xl text-gray-400">Todo lo que necesitás saber sobre BlackSentinel</p>
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
