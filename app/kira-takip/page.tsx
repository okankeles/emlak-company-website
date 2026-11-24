import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Clock, FileText, TrendingUp } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const upcomingFeatures = [
  { icon: DollarSign, title: "Ödeme Takibi" },
  { icon: Clock, title: "Otomatik Hatırlatmalar" },
  { icon: FileText, title: "Sözleşme ve Belge Yönetimi" },
  { icon: TrendingUp, title: "Raporlama" },
]

export default function RentalTrackingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <section className="flex min-h-[70vh] items-center bg-primary py-16 text-primary-foreground md:py-20">
          <div className="container px-4 lg:px-8">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <Badge className="mb-5 rounded-full border-transparent bg-accent px-3 py-1 text-accent-foreground hover:bg-accent">
                Yakında
              </Badge>
              <h1 className="mb-5 font-serif text-4xl font-bold text-balance md:text-5xl">Kira Takip Sistemi</h1>
              <p className="mb-10 max-w-3xl text-lg leading-relaxed text-primary-foreground/90 text-pretty">
                Ev sahipleri ve kiracılar için kira ödemelerini, sözleşmeleri ve hatırlatmaları tek yerden
                yönetebileceğiniz dijital kira takip sistemimiz üzerinde çalışıyoruz. Çok yakında sizlerle.
              </p>

              <div className="mb-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {upcomingFeatures.map((feature) => (
                  <Card key={feature.title} className="border-primary-foreground/15 bg-background text-foreground">
                    <CardHeader className="flex min-h-36 flex-col items-center justify-center gap-3 p-5 text-center">
                      <feature.icon aria-hidden="true" className="size-8 text-accent" />
                      <CardTitle className="text-base leading-snug">{feature.title}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a
                  href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent("Kira Takip Sistemi hakkında bilgi almak istiyorum")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Haberdar Olmak İçin Yazın
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
