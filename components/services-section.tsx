import { Building2, Key, FileCheck, RotateCcw } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: RotateCcw,
    title: "Kentsel Dönüşüm",
    description:
      "Eski binaların modern standartlara uyarlanması ve şehirlerin yeniden hayata döndürülmesi projelerinde öncü konumdayız.",
  },
  {
    icon: Building2,
    title: "İnşaat Projeleri",
    description:
      "Modern mimari anlayışla, yüksek kalite standartlarında inşaat projelerimiz hakkında detaylı bilgi alabilirsiniz.",
  },
  {
    icon: Key,
    title: "Gayrimenkul Alım-Satım",
    description: "Türkiye'nin tüm bölgelerinde geniş portföyümüz ile hayalinizdeki mülkü bulmanıza yardımcı oluyoruz.",
  },
  {
    icon: FileCheck,
    title: "Kira Takip Sistemi",
    description: "Dijital kira takip sistemimiz ile tüm süreçlerinizi kolayca yönetin. 7/24 online erişim imkanı.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Hizmetlerimiz</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <div className="w-12 h-0.5 bg-accent mb-4" />
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
