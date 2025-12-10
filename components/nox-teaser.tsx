"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function NoxTeaser() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-b from-black via-slate-900/50 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Text */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              No estás solo.
              <br />
              <span className="text-primary">Hay una IA cuidando tu espalda.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Conoce a <span className="font-bold text-primary">NOX</span>, nuestro agente autónomo que monitorea tu
              infraestructura 24/7.
            </p>
            <div className="pt-4">
              <Link href="/nox">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 group bg-transparent"
                >
                  Ver a NOX en acción
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side - NOX Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-float">
              <Image
                src="/images/nox4.png"
                alt="NOX - BlackSentinel AI Mascot"
                width={320}
                height={320}
                className="w-full h-full object-contain drop-shadow-[0_0_60px_rgba(10,185,195,0.6)]"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50 rounded-tl-xl animate-pulse" />
              <div
                className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50 rounded-br-xl animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
