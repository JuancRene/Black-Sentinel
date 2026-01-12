"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Base styles: Agregué 'duration-300' para suavidad y 'active:scale-95' para feedback táctil
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold tracking-wide transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 active:scale-95 ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-[#0AB9C3] text-black shadow-[0_0_20px_-5px_rgba(10,185,195,0.4)] hover:bg-[#09a0a9] hover:shadow-[0_0_30px_-5px_rgba(10,185,195,0.6)] hover:-translate-y-0.5",
        
        destructive:
          "bg-red-900/20 text-red-200 border border-red-900/50 hover:bg-red-900/40 hover:border-red-500 hover:text-white shadow-[0_0_15px_-5px_rgba(239,68,68,0.2)]",
        
        outline:
          "border-2 border-white/10 bg-transparent text-zinc-300 hover:border-[#0AB9C3] hover:text-[#0AB9C3] hover:bg-[#0AB9C3]/5 hover:shadow-[0_0_15px_-5px_rgba(10,185,195,0.3)]",
        
        secondary:
          "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 hover:text-white border border-white/5",
        
        ghost:
          "text-zinc-400 hover:bg-white/5 hover:text-white",
        
        link: "text-[#0AB9C3] underline-offset-4 hover:underline",
        
        // Variante extra para efectos de "Brillo" puro sin fondo
        glow: "text-[#0AB9C3] bg-[#0AB9C3]/10 hover:bg-[#0AB9C3]/20 border border-[#0AB9C3]/20 hover:border-[#0AB9C3]/50 shadow-[0_0_15px_-5px_rgba(10,185,195,0.3)]"
      },
      size: {
        default: "h-11 px-6 py-2 has-[>svg]:px-4",
        sm: "h-9 rounded-lg px-4 text-xs has-[>svg]:px-3",
        lg: "h-14 rounded-2xl px-10 text-base has-[>svg]:px-6",
        icon: "h-10 w-10 rounded-xl",
        "icon-sm": "h-8 w-8 rounded-lg",
        "icon-lg": "h-12 w-12 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
