"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Matías González",
    role: "CEO, Empresa de Logística",
    content:
      "BlackSentinel nos dio tranquilidad real. Desde que lo implementamos no tuvimos ni un susto: todo se detecta y se corrige antes.",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0A0A0A] to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Lo que dicen nuestros <span className="text-primary">clientes</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial card */}
          <div className="bg-[#1A1A1A] border-2 border-primary/20 rounded-2xl p-6 sm:p-10 md:p-12 min-h-[300px] sm:min-h-[280px] flex flex-col justify-between">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-primary text-primary" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-base sm:text-lg md:text-xl text-gray-300 text-center mb-6 sm:mb-8 leading-relaxed flex-grow">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <div className="font-semibold text-white text-base sm:text-lg">{testimonials[currentIndex].name}</div>
              <div className="text-sm sm:text-base text-primary">{testimonials[currentIndex].role}</div>
            </div>
          </div>

          {/* Navigation buttons - only show if multiple testimonials */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="border-primary/50 text-primary hover:bg-primary hover:text-black rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-transparent"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>

              {/* Dots indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrentIndex(index)
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary w-8" : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="border-primary/50 text-primary hover:bg-primary hover:text-black rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-transparent"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
