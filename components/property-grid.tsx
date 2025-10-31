"use client"

import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LayoutGrid, List } from "lucide-react"
import { useState } from "react"

const allProperties = [
  {
    id: 1,
    image: "/modern-luxury-apartment-interior-with-city-view.jpg",
    title: "Lüks Rezidans Dairesi",
    location: "Beşiktaş, İstanbul",
    price: "12.500.000 ₺",
    beds: 4,
    baths: 3,
    area: 250,
    type: "Satılık",
    features: ["Otopark", "Güvenlik", "Spor Salonu"],
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
    type: "Satılık",
    features: ["Havuz", "Bahçe", "Deniz Manzarası"],
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
    type: "Kiralık",
    features: ["Otopark", "Güvenlik", "Merkezi Konum"],
  },
  {
    id: 4,
    image: "/modern-apartment-exterior.png",
    title: "Yeni Proje Dairesi",
    location: "Kadıköy, İstanbul",
    price: "6.250.000 ₺",
    beds: 3,
    baths: 2,
    area: 145,
    type: "Satılık",
    features: ["Otopark", "Asansör", "Balkon"],
  },
  {
    id: 5,
    image: "/luxury-penthouse-terrace-view.jpg",
    title: "Çatı Katı Dubleks",
    location: "Nişantaşı, İstanbul",
    price: "18.900.000 ₺",
    beds: 5,
    baths: 4,
    area: 320,
    type: "Satılık",
    features: ["Teras", "Jakuzi", "Şömine"],
  },
  {
    id: 6,
    image: "/seaside-villa-with-infinity-pool.jpg",
    title: "Sahil Villa",
    location: "Çeşme, İzmir",
    price: "22.500.000 ₺",
    beds: 6,
    baths: 5,
    area: 500,
    type: "Satılık",
    features: ["Havuz", "Özel Plaj", "Bahçe"],
  },
  {
    id: 7,
    image: "/modern-studio-apartment.png",
    title: "Stüdyo Daire",
    location: "Beyoğlu, İstanbul",
    price: "3.750.000 ₺",
    beds: 1,
    baths: 1,
    area: 55,
    type: "Satılık",
    features: ["Merkezi Konum", "Yeni Bina", "Asansör"],
  },
  {
    id: 8,
    image: "/luxury-residential-complex.png",
    title: "Rezidans Kompleksi",
    location: "Ataşehir, İstanbul",
    price: "9.500.000 ₺",
    beds: 3,
    baths: 2,
    area: 165,
    type: "Satılık",
    features: ["Havuz", "Spor Salonu", "Güvenlik"],
  },
  {
    id: 9,
    image: "/commercial-office-space-interior.jpg",
    title: "Ofis Katı",
    location: "Levent, İstanbul",
    price: "15.000.000 ₺",
    beds: 0,
    baths: 3,
    area: 280,
    type: "Kiralık",
    features: ["Otopark", "Güvenlik", "Merkezi Konum"],
  },
]

export function PropertyGrid() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="space-y-6">
      {/* Header with sorting and view options */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border">
        <p className="text-muted-foreground">
          <span className="font-semibold text-foreground">{allProperties.length}</span> emlak bulundu
        </p>

        <div className="flex items-center gap-3">
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">En Yeni</SelectItem>
              <SelectItem value="price-low">Fiyat: Düşükten Yükseğe</SelectItem>
              <SelectItem value="price-high">Fiyat: Yüksekten Düşüğe</SelectItem>
              <SelectItem value="area">Alan: Büyükten Küçüğe</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-1 border border-border rounded-md p-1">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="h-8 w-8 p-0"
            >
              <LayoutGrid size={16} />
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="h-8 w-8 p-0"
            >
              <List size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Property Grid */}
      <div
        className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "flex flex-col gap-6"}
      >
        {allProperties.map((property) => (
          <PropertyCard key={property.id} property={property} viewMode={viewMode} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 pt-8">
        <Button variant="outline" disabled>
          Önceki
        </Button>
        <Button variant="secondary">1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">Sonraki</Button>
      </div>
    </div>
  )
}
