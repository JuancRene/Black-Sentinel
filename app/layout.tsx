import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BlackSentinel",
  description:
    "Ciberseguridad potenciada por Inteligencia Artificial para empresas que necesitan velocidad, precisión y costos accesibles.",
  generator: "v0.app",
  keywords: ["ciberseguridad", "IA", "inteligencia artificial", "SOC", "pentesting", "monitoreo", "seguridad"],
  icons: {
    icon: "/logo-blacksentinel-icon.png",
    apple: "/logo-blacksentinel-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
