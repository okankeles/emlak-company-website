import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Bed, Bath, Square, Heart, Share2 } from "lucide-react"

interface Property {
  id: number
  image: string
  title: string
  location: string
  price: string
  beds: number
  baths: number
  area: number
  type: string
  features: string[]
}

interface PropertyCardProps {
  property: Property
  viewMode?: "grid" | "list"
}

export function PropertyCard({ property, viewMode = "grid" }: PropertyCardProps) {
  if (viewMode === "list") {
    return (
      <Card className="overflow-hidden border-border hover:shadow-lg transition-all duration-300 group">
        <div className="flex flex-col sm:flex-row">
          <div className="relative sm:w-80 h-64 sm:h-auto overflow-hidden flex-shrink-0">
            <img
              src={property.image || "/placeholder.svg"}
              alt={property.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">{property.type}</Badge>
            <div className="absolute top-4 right-4 flex gap-2">
              <Button size="icon" variant="secondary" className="h-9 w-9 rounded-full">
                <Heart size={16} />
              </Button>
              <Button size="icon" variant="secondary" className="h-9 w-9 rounded-full">
                <Share2 size={16} />
              </Button>
            </div>
          </div>
          <CardContent className="flex-1 p-6">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="font-serif text-2xl font-bold mb-2 text-foreground">{property.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin size={16} />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {property.features.map((feature) => (
                    <Badge key={feature} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-border pt-4 mb-4">
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
                <div className="flex items-center justify-between">
                  <div className="font-bold text-2xl text-foreground">{property.price}</div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Detayları Gör</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">{property.type}</Badge>
        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            size="icon"
            variant="secondary"
            className="h-9 w-9 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart size={16} />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-9 w-9 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Share2 size={16} />
          </Button>
        </div>
        <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm">
          {property.price}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-bold mb-2 text-foreground">{property.title}</h3>
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin size={16} />
          <span className="text-sm">{property.location}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {property.features.slice(0, 2).map((feature) => (
            <Badge key={feature} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4 mb-4">
          {property.beds > 0 && (
            <div className="flex items-center gap-2">
              <Bed size={18} />
              <span>{property.beds}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Bath size={18} />
            <span>{property.baths}</span>
          </div>
          <div className="flex items-center gap-2">
            <Square size={18} />
            <span>{property.area} m²</span>
          </div>
        </div>
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Detayları Gör</Button>
      </CardContent>
    </Card>
  )
}
