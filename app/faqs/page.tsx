import { Header } from "@/components/header"
import { FAQs } from "@/components/faqs"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="pt-20">
        <FAQs />
      </div>
      <FinalCTA />
      <Footer />
    </main>
  )
}
