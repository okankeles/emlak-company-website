"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const properties = [
  {
    id: 1,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3c24da24-5d60-4b02-8832-a22324f8b849-xGOTQRaOAQkVedzRGdSqtv7xLeXdDI.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6531a370-927b-48ca-a485-486e236b23fc-euOFyr6R6J1d4ZFaiXZC4vQsTQTWy7.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e8043269-b164-47cf-bae9-a5fc0a99a0db-NufANPpmJuPMxulpnNnwmZ6hUdcPOl.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7aabb3f7-e7fc-4686-b4b1-e739c9b8163b-UKwQLJrDIJK7UId7P8ucSmPv00UZff.jpg",
    ],
    title: "Proje 1",
    location: "İstanbul",
    projectType: "Daire",
    unitCount: 48,
    unitTypes: "2+1, 3+1",
    area: "93 - 175 m²",
    landArea: "5000 m²",
    deliveryDate: "Aralık 2021",
    salesStatus: "% 100 Satıldı",
    description:
      "Gül Yapı, Çebi Yapı ve Liv Yapı tarafından inşa edilen Gülpark Suits projesi 10 katlı tek blokta 48 daireden oluşuyor. Projede daireler dışında 5 ofis, 5 mağaza ve 1 süpermarket yer alıyor. Gülpark Suits'teki 2+1 daireler brüt 93 ila 140, net 69 ila 103 metrekare, 3+1 daireler brüt 174 ila 175, net 129 ila 130 metrekare olarak tasarlandı. Inşaat alanı 15 bin metrekare.",
  },
]

function ImageCarousel({ images }: { images: string[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="relative overflow-hidden h-80 lg:h-auto bg-muted group">
      {/* Main Image */}
      <img
        src={images[currentImageIndex] || "/placeholder.svg"}
        alt="Project image"
        className="w-full h-full object-cover transition-opacity duration-700"
      />

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentImageIndex ? "bg-white w-8" : "bg-white/50 w-2 hover:bg-white/75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export function FeaturedProperties() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Projelerimiz</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Kentsel dönüşüm ve modern mimaride başarılı projelerimiz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <ImageCarousel images={property.images} />

                {/* Project Details */}
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold mb-3">
                      {property.projectType}
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-primary mb-2">{property.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={16} />
                      <span>{property.location}</span>
                    </div>
                  </div>

                  {/* Project Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-1">
                        Konut Sayısı
                      </p>
                      <p className="text-lg font-bold text-primary">{property.unitCount}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-1">
                        Konut Tipleri
                      </p>
                      <p className="text-lg font-bold text-primary">{property.unitTypes}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-1">
                        Metrekare
                      </p>
                      <p className="text-lg font-bold text-primary">{property.area}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-1">
                        Arsa Alanı
                      </p>
                      <p className="text-lg font-bold text-primary">{property.landArea}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-1">
                        Teslim Tarihi
                      </p>
                      <p className="text-lg font-bold text-primary">{property.deliveryDate}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-1">
                        Satış Durumu
                      </p>
                      <p className="text-lg font-bold text-primary">{property.salesStatus}</p>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">{property.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
