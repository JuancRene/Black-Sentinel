import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { NoxTeaser } from "@/components/nox-teaser"
import { WhyBlackSentinel } from "@/components/why-blacksentinel"
import { HowWeWork } from "@/components/how-we-work"
import { Pricing } from "@/components/pricing"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { NoxFloatButton } from "@/components/nox-float-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Stats />
      <NoxTeaser />
      <WhyBlackSentinel />
      <HowWeWork />
      <Pricing />
      <FinalCTA />
      <Footer />
      <NoxFloatButton />
    </main>
  )
}
