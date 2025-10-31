import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturedProperties } from "@/components/featured-properties"
import { StatsSection } from "@/components/stats-section"
import { WhyUsSection } from "@/components/why-us-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <FeaturedProperties />
      <StatsSection />
      <WhyUsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
