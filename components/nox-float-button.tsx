"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export function NoxFloatButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href="/nox">
      <div
        className="fixed bottom-8 right-8 z-50 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Chat Bubble Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-4 animate-fade-in">
            <div className="bg-slate-900 border border-primary/30 rounded-2xl px-4 py-3 shadow-2xl shadow-primary/20 backdrop-blur-sm">
              <p className="text-sm text-white whitespace-nowrap">¿Todo seguro? Soy NOX.</p>
            </div>
            {/* Arrow */}
            <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-slate-900" />
          </div>
        )}

        {/* NOX Avatar */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 cursor-pointer">
          <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
          <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-full border-2 border-primary/50 group-hover:border-primary shadow-2xl shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-300 overflow-hidden group-hover:scale-110">
            <Image
              src="/images/nox2.png"
              alt="NOX"
              width={80}
              height={80}
              className="w-full h-full object-contain scale-125"
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
