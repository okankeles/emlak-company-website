import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">İletişim</h1>
              <p className="text-lg text-primary-foreground/90 text-pretty leading-relaxed">
                Sorularınız, talepleriniz veya projelerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.
                Profesyonel ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 bg-background">
          <div className="container px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6">İletişim Bilgileri</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Size en kısa sürede dönüş yapabilmemiz için lütfen iletişim formunu doldurun veya aşağıdaki iletişim
                    bilgilerinden bize ulaşın.
                  </p>
                </div>

                <Card className="border-border">
                  <CardContent className="p-6 space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Merkez Mahallesi Şirin Sokak No 14/3
                          <br />
                          AVCILAR/İSTANBUL
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                        <a
                          href="https://wa.me/905425776583"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          +90 542 577 65 83
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">E-posta</h3>
                        <p className="text-sm text-muted-foreground">arsaplusinsaat@gmail.com.tr</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Çalışma Saatleri</h3>
                        <p className="text-sm text-muted-foreground">Pazartesi - Cuma: 09:00 - 18:00</p>
                        <p className="text-sm text-muted-foreground">Cumartesi: 10:00 - 16:00</p>
                        <p className="text-sm text-muted-foreground">Pazar: Kapalı</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-border">
                  <CardContent className="p-8">
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Bize Mesaj Gönderin</h2>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted">
          <div className="container px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Ofisimizi Ziyaret Edin</h2>
              <p className="text-muted-foreground">Merkez Mahallesi Şirin Sokak No 14/3 AVCILAR/İSTANBUL</p>
            </div>
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              <div className="flex flex-col gap-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ofis_2-ZUXu66X0PPeup2W3CivdtQds2wjZvv.jpg"
                    alt="ARS A Plus İnşaat Avcılar ofisi - karşılama alanı"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ofis_1-5FRzEnkAyVJx23UeC0ONrzJdniKxcG.jpg"
                    alt="ARS A Plus İnşaat Avcılar ofisi - çalışma alanı"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Avcılar&apos;daki ofisimizde sizi ağırlamaktan memnuniyet duyarız. Ziyaretinizden önce WhatsApp üzerinden
                  randevu almanızı öneririz.
                </p>
              </div>

              <div className="flex h-full flex-col gap-4">
                <iframe
                  title="ARS A Plus İnşaat ofis konumu"
                  src="https://www.google.com/maps?q=Merkez+Mahallesi+%C5%9Eirin+Sokak+No+14+Avc%C4%B1lar+%C4%B0stanbul&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full min-h-[400px] w-full rounded-lg border-0"
                />
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Merkez+Mahallesi+%C5%9Eirin+Sokak+No+14+Avc%C4%B1lar+%C4%B0stanbul"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Yol Tarifi Al
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://wa.me/905425776583" target="_blank" rel="noopener noreferrer">
                      WhatsApp&apos;tan Yazın
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
