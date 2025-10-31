"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, SlidersHorizontal } from "lucide-react"
import { useState } from "react"

export function PropertyFilters() {
  const [priceRange, setPriceRange] = useState([0, 50000000])

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <SlidersHorizontal size={20} />
          Filtreler
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search */}
        <div className="space-y-2">
          <Label htmlFor="search">Arama</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input id="search" placeholder="Konum veya proje adı..." className="pl-10" />
          </div>
        </div>

        {/* Property Type */}
        <div className="space-y-2">
          <Label>Emlak Tipi</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Tümü" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tümü</SelectItem>
              <SelectItem value="apartment">Daire</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="office">Ofis</SelectItem>
              <SelectItem value="commercial">Ticari</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label>Şehir</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Tümü" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tümü</SelectItem>
              <SelectItem value="istanbul">İstanbul</SelectItem>
              <SelectItem value="ankara">Ankara</SelectItem>
              <SelectItem value="izmir">İzmir</SelectItem>
              <SelectItem value="antalya">Antalya</SelectItem>
              <SelectItem value="bodrum">Bodrum</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div className="space-y-4">
          <Label>Fiyat Aralığı</Label>
          <Slider value={priceRange} onValueChange={setPriceRange} max={50000000} step={500000} className="w-full" />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{(priceRange[0] / 1000000).toFixed(1)}M ₺</span>
            <span>{(priceRange[1] / 1000000).toFixed(1)}M ₺</span>
          </div>
        </div>

        {/* Bedrooms */}
        <div className="space-y-2">
          <Label>Oda Sayısı</Label>
          <div className="grid grid-cols-4 gap-2">
            {["1+", "2+", "3+", "4+"].map((bed) => (
              <Button key={bed} variant="outline" size="sm" className="h-10 bg-transparent">
                {bed}
              </Button>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3">
          <Label>Özellikler</Label>
          <div className="space-y-2">
            {[
              { id: "parking", label: "Otopark" },
              { id: "pool", label: "Havuz" },
              { id: "gym", label: "Spor Salonu" },
              { id: "security", label: "Güvenlik" },
            ].map((feature) => (
              <div key={feature.id} className="flex items-center gap-2">
                <Checkbox id={feature.id} />
                <Label htmlFor={feature.id} className="text-sm font-normal cursor-pointer">
                  {feature.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Filters */}
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Filtreleri Uygula</Button>
      </CardContent>
    </Card>
  )
}
