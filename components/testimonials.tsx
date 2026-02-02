"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Star, Quote, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Matías González",
    role: "CEO, Logística Express",
    image: null, // Si tienes fotos, pon la URL aquí
    content:
      "BlackSentinel nos dio tranquilidad real. Antes vivíamos con miedo al ransomware. Desde que lo implementamos, la operación fluye sin interrupciones y dormimos tranquilos.",
    rating: 5,
  },
  {
    name: "Sofía Martínez",
    role: "Socia, Estudio Contable SM",
    image: null,
    content:
      "Manejamos datos muy sensibles de terceros. Necesitábamos algo más que un antivirus gratis. La respuesta del equipo técnico cuando tuvimos una duda fue inmediata.",
    rating: 5,
  },
  {
    name: "Lucas Viale",
    role: "CTO, TechSolutions",
    image: null,
    content:
      "Lo que más valoro es que no consumen recursos de mis máquinas. La seguridad es invisible pero potente. Los reportes semanales son excelentes para presentar al directorio.",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  // Duración de cada slide en ms
  const SLIDE_DURATION = 8000 
  // Frecuencia de actualización de la barra en ms
  const TICK = 100

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setProgress(0)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setProgress(0)
    setIsAutoPlaying(false)
  }

  // Manejo del Autoplay y Barra de Progreso
  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          nextSlide()
          return 0
        }
        return oldProgress + (100 / (SLIDE_DURATION / TICK))
      })
    }, TICK)

    return () => clearInterval(timer)
  }, [isAutoPlaying, nextSlide])

  return (
    <section className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 mb-4 bg-zinc-900 rounded-full border border-zinc-800">
             <div className="flex -space-x-2 mr-3">
                {[1,2,3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full bg-zinc-800 border border-black flex items-center justify-center text-[10px] text-zinc-500">
                        <User className="w-3 h-3" />
                    </div>
                ))}
             </div>
             <span className="text-xs text-zinc-400 font-medium pr-2">Confianza comprobada</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ellos ya están <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39CFE3] to-teal-500">protegidos</span>
          </h2>
        </div>

        {/* --- MAIN CARD --- */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Decorative Quote Icon Behind */}
          <div className="absolute -top-10 -left-10 text-zinc-800 opacity-50 hidden md:block">
            <Quote className="w-32 h-32" />
          </div>

          <div 
            className="relative bg-[#0A0A0A] border border-zinc-800 rounded-3xl p-8 sm:p-12 min-h-[350px] flex flex-col justify-center overflow-hidden group hover:border-[#39CFE3]/30 transition-colors duration-500"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
             {/* Glow effect on hover */}
             <div className="absolute inset-0 bg-gradient-to-b from-[#39CFE3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

             {/* Content with Animation Key */}
             <div key={currentIndex} className="relative z-10 animate-fade-in">
                
                {/* Rating */}
                <div className="flex justify-center mb-8 gap-1">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#39CFE3] text-[#39CFE3] drop-shadow-[0_0_8px_rgba(57,207,227,0.5)]" />
                    ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-xl sm:text-2xl md:text-3xl text-zinc-200 text-center font-medium leading-relaxed mb-10">
                    "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-3 text-zinc-400">
                         {/* Placeholder avatar or real image */}
                         <User className="w-6 h-6" />
                    </div>
                    <div className="text-white font-bold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-[#39CFE3] text-sm font-medium">{testimonials[currentIndex].role}</div>
                </div>
             </div>

             {/* Progress Bar (Bottom Line) */}
             <div className="absolute bottom-0 left-0 h-1 bg-zinc-900 w-full">
                <div 
                    className="h-full bg-[#39CFE3] transition-all duration-100 ease-linear shadow-[0_0_10px_#39CFE3]"
                    style={{ width: `${progress}%` }}
                />
             </div>
          </div>

          {/* --- CONTROLS --- */}
          <div className="flex justify-between items-center mt-8 px-4">
             {/* Previous Button */}
             <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full w-12 h-12 border-zinc-800 bg-transparent text-zinc-400 hover:text-white hover:border-[#39CFE3] hover:bg-[#39CFE3]/10 transition-all"
             >
                <ChevronLeft className="w-6 h-6" />
             </Button>

             {/* Dots */}
             <div className="flex gap-3">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentIndex(index)
                            setProgress(0)
                            setIsAutoPlaying(false)
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                                ? "w-8 bg-[#39CFE3] shadow-[0_0_8px_#39CFE3]" 
                                : "w-2 bg-zinc-700 hover:bg-zinc-500"
                        }`}
                    />
                ))}
             </div>

             {/* Next Button */}
             <Button
                variant="outline"
                size="icon"
                onClick={() => {
                    nextSlide()
                    setIsAutoPlaying(false)
                }}
                className="rounded-full w-12 h-12 border-zinc-800 bg-transparent text-zinc-400 hover:text-white hover:border-[#39CFE3] hover:bg-[#39CFE3]/10 transition-all"
             >
                <ChevronRight className="w-6 h-6" />
             </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
