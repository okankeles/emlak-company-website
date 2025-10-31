import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Bed, Bath, Square, ChevronRight } from "lucide-react"
import Link from "next/link"

const properties = [
  {
    id: 1,
    image: "/modern-luxury-apartment-interior-with-city-view.jpg",
    title: "Lüks Rezidans Dairesi",
    location: "Beşiktaş, İstanbul",
    price: "12.500.000 ₺",
    beds: 4,
    baths: 3,
    area: 250,
  },
  {
    id: 2,
    image: "/contemporary-villa-with-pool-and-garden.jpg",
    title: "Deniz Manzaralı Villa",
    location: "Bodrum, Muğla",
    price: "25.000.000 ₺",
    beds: 5,
    baths: 4,
    area: 450,
  },
  {
    id: 3,
    image: "/modern-office-building-exterior-glass-facade.jpg",
    title: "Ticari İşyeri",
    location: "Maslak, İstanbul",
    price: "8.750.000 ₺",
    beds: 0,
    baths: 2,
    area: 180,
  },
]

export function FeaturedProperties() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Öne Çıkan Projeler</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Seçkin portföyümüzden özenle seçilmiş gayrimenkuller
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-sm">
                  {property.price}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-2 text-primary">{property.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin size={16} />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-border pt-4">
                  {property.beds > 0 && (
                    <div className="flex items-center gap-2">
                      <Bed size={18} />
                      <span>{property.beds} Oda</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Bath size={18} />
                    <span>{property.baths} Banyo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square size={18} />
                    <span>{property.area} m²</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/properties">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group bg-transparent"
            >
              Tüm Projeleri Görüntüle
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
