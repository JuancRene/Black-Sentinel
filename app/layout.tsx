import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { NoxFloatButton } from "@/components/nox-float-button"

// Optimizamos la carga de la fuente
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "BlackSentinel | Ciberseguridad Activa con IA",
    template: "%s | BlackSentinel"
  },
  description:
    "Protección cibernética gestionada (MDR) para empresas. Combinamos Inteligencia Artificial con expertos humanos para detener ataques antes de que sucedan.",
  generator: "Next.js",
  applicationName: "BlackSentinel Platform",
  keywords: [
    "ciberseguridad argentina", 
    "SOC as a service", 
    "protección ransomware", 
    "seguridad pymes", 
    "antivirus gestionado",
    "NOX IA"
  ],
  authors: [{ name: "BlackSentinel Team" }],
  creator: "BlackSentinel",
  publisher: "BlackSentinel Security",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo-blacksentinel-icon.png",
    apple: "/logo-blacksentinel-icon.png",
  },
  // Open Graph para que se vea bien al compartir en redes
  openGraph: {
    title: "BlackSentinel | Tu negocio blindado",
    description: "Monitoreo 24/7, respuesta a incidentes y prevención de amenazas con IA.",
    url: "https://blacksentinel.com", // Reemplaza con tu URL real cuando la tengas
    siteName: "BlackSentinel",
    images: [
      {
        url: "/og-image.jpg", // Deberías crear una imagen de 1200x630px para esto
        width: 1200,
        height: 630,
        alt: "BlackSentinel Security Dashboard",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body 
        className={`${inter.className} min-h-screen bg-[#050505] text-zinc-50 antialiased selection:bg-[#0AB9C3]/30 selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          
          {/* NOX flota sobre todas las páginas */}
          <NoxFloatButton />
          
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
