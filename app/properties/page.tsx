import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FeaturedProperties } from "@/components/featured-properties"

export default function PropertiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container px-4 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">Projelerimiz</h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl text-pretty">
              Kentsel dönüşüm ve modern mimaride başarılı projelerimiz
            </p>
          </div>
        </section>

        {/* Main Content */}
        <FeaturedProperties />
      </div>
      <Footer />
    </main>
  )
}
