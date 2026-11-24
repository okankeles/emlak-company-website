"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const properties = [
  {
    id: 1,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arsaplus-1-LuU718Q0hxcBZlpccPh4xQhIPPDJtd.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arsaplus-2-uKwD1hz8G6mozvP3pkwxpprvNTqeqA.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arsaplus-3-0Of2oRx20lk6TDM7ijSyIdi1MEnHPC.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arsaplus-4-pssNFokQA76gA6jzuvhoOieHbiCkJx.jpeg",
    ],
    title: "Avcılar Merkez Mahallesi Kentsel Dönüşümü",
    location: "Avcılar / İstanbul",
    projectType: "KENTSEL DÖNÜŞÜM",
    residentialCount: 11,
    commercialCount: 1,
    progressImages: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avcilar_santiye_1_arsa-6MieqIXPCSQjcNc99Dzs94PQykxx1J.jpg",
        title: "Yıkım ve Arsa Hazırlığı",
        caption: "Eski yapının yıkımı tamamlandı, arsa temizlendi.",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avcilar_santiye_2_temel-Vo2lYIGOv5z4Jk7RBV7PTsIAb3BZT1.jpg",
        title: "Kazı ve Temel Betonu",
        caption: "Kazı tamamlandı, temel betonu döküldü.",
      },
    ],
    description:
      "Avcılar Merkez Mahallesi'nde hayata geçirdiğimiz projemizi, 6306 sayılı Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun kapsamında, yüksek kalite ve standartlarda, yerinde dönüşüm prensibiyle titizlikle sürdürüyoruz.\n\nAlanında uzman profesyonel ekibimiz ve kalite odaklı yaklaşımımızla, kentsel dönüşüm sürecimizi güvenli, modern ve sürdürülebilir yaşam alanları oluşturma hedefiyle hız kesmeden ilerletiyoruz.",
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
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Projelerimiz</h2>
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
                    <h3 className="font-serif text-3xl font-bold text-foreground mb-2">{property.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={16} />
                      <span>{property.location}</span>
                    </div>
                  </div>

                  {/* Project Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                    <div className="bg-muted/50 rounded-lg p-4 text-center">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-2">
                        Konut Sayısı
                      </p>
                      <p className="text-3xl font-bold text-foreground">{property.residentialCount}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4 text-center">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-2">
                        Ticari Sayısı
                      </p>
                      <p className="text-3xl font-bold text-foreground">{property.commercialCount}</p>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-3">
                    {property.description.split("\n\n").map((paragraph, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground leading-relaxed text-pretty">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </div>

              <div className="border-t border-border px-8 py-8">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <h4 className="font-serif text-2xl font-semibold text-foreground">İnşaat Süreci</h4>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Devam Ediyor
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {property.progressImages.map((image, index) => (
                    <article key={image.src}>
                      <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                        <Image
                          src={image.src}
                          alt={`Avcılar Merkez Mahallesi kentsel dönüşüm şantiyesi - ${image.title.toLocaleLowerCase("tr-TR")} aşaması`}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="mt-4 flex items-start gap-3">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="border-l border-accent/50 pl-3">
                          <h5 className="font-semibold text-foreground">{image.title}</h5>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{image.caption}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
