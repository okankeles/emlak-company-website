import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PropertyFilters } from "@/components/property-filters"
import { PropertyGrid } from "@/components/property-grid"

export default function PropertiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container px-4 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">Tüm Projeler</h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl text-pretty">
              Geniş portföyümüzden size en uygun gayrimenkulü bulun
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <aside className="lg:col-span-1">
                <PropertyFilters />
              </aside>

              {/* Property Grid */}
              <div className="lg:col-span-3">
                <PropertyGrid />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
