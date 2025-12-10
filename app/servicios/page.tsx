import { Header } from "@/components/header"
import { ServicesDetailed } from "@/components/services-detailed"
import { ServicesComparison } from "@/components/services-comparison"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="pt-20">
        <ServicesDetailed />
        <ServicesComparison />
      </div>
      <FinalCTA />
      <Footer />
    </main>
  )
}
