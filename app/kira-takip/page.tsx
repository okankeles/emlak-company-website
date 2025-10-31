import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RentalDashboard } from "@/components/rental-dashboard"

export default function RentalTrackingPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container px-4 lg:px-8">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-balance">Kira Takip Sistemi</h1>
            <p className="text-primary-foreground/90 text-pretty">
              Kiralık gayrimenkullerinizi kolayca yönetin ve takip edin
            </p>
          </div>
        </section>

        {/* Dashboard */}
        <section className="py-8">
          <div className="container px-4 lg:px-8">
            <RentalDashboard />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
