import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { WhyBlackSentinel } from "@/components/why-blacksentinel"
import { HowWeWork } from "@/components/how-we-work"
import { Pricing } from "@/components/pricing"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Stats />
      <WhyBlackSentinel />
      <HowWeWork />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}
