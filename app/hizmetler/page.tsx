import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Key, TrendingUp, Calculator, CheckCircle2, ArrowRight, Shield, Users } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Kentsel Dönüşüm",
    description:
      "Modern mimari anlayışla tasarlanmış, kaliteli ve güvenli kentsel dönüşüm projeleri gerçekleştiriyoruz.",
    features: ["Proje Tasarımı", "İnşaat Yönetimi", "Kalite Kontrolü", "Anahtar Teslim"],
  },
  {
    icon: TrendingUp,
    title: "İnşaat Projeleri",
    description: "Yüksek standartlarda inşaat projeleri ile şehrin gelişimine katkı sağlıyoruz.",
    features: ["Proje Tasarımı", "İnşaat Yönetimi", "Kalite Kontrolü", "Anahtar Teslim"],
  },
  {
    icon: Key,
    title: "Gayrimenkul Alım-Satım",
    description: "Gayrimenkulünüzü satmak veya satın almak için profesyonel danışmanlık ve hızlı çözümler sunuyoruz.",
    features: ["Piyasa Analizi", "Değerleme Hizmeti", "Hukuki Danışmanlık", "Tapu İşlemleri"],
  },
  {
    icon: Calculator,
    title: "Kira Takip Sistemi",
    description: "Gayrimenkullerinizin kira takibini kolaylaştıran, etkili ve güvenilir bir sistem.",
    features: ["Otomatik Takip", "Raporlama", "Ödemeler", "Kiracı Yönetimi"],
  },
]

const process = [
  {
    step: "01",
    title: "İhtiyaç Analizi",
    description: "Müşterilerimizin ihtiyaçlarını dinliyor ve en uygun çözümleri belirliyoruz.",
  },
  {
    step: "02",
    title: "Proje Sunumu",
    description: "İhtiyaçlara uygun projeleri detaylı olarak sunuyor ve bilgilendirme yapıyoruz.",
  },
  {
    step: "03",
    title: "Sözleşme & Anlaşma",
    description: "Tüm yasal süreçleri şeffaf bir şekilde yönetiyor ve sözleşmeleri hazırlıyoruz.",
  },
  {
    step: "04",
    title: "Teslim & Takip",
    description: "Projeyi teslim ediyor ve sonrasında da müşterilerimize destek olmaya devam ediyoruz.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">Hizmetlerimiz</h1>
              <p className="text-lg text-primary-foreground/90 text-pretty leading-relaxed">
                Gayrimenkul sektöründe ihtiyacınız olan temel hizmetleri profesyonel ekibimizle sunuyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-accent mb-4">Sunduğumuz Hizmetler</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Gayrimenkul ihtiyaçlarınız için kapsamlı çözümler
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-border hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <service.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-accent mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted">
          <div className="container px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-accent mb-4">Çalışma Sürecimiz</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Müşteri memnuniyeti odaklı, şeffaf ve profesyonel süreç
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <Card className="border-border h-full">
                    <CardContent className="p-6">
                      <div className="text-6xl font-bold text-accent/20 mb-4">{item.step}</div>
                      <h3 className="font-serif text-xl font-bold text-accent mb-3">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                  {index < process.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-accent w-8 h-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-accent mb-6">
                  Neden Bizi Seçmelisiniz?
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: Shield,
                      title: "Güvenilir Hizmet",
                      description: "Uzun yılların deneyimi ile güvenilir hizmet sunuyoruz.",
                    },
                    {
                      icon: Users,
                      title: "Profesyonel Ekip",
                      description: "Alanında uzman profesyonellerden oluşan ekibimizle her aşamada yanınızdayız.",
                    },
                    {
                      icon: CheckCircle2,
                      title: "Şeffaf Süreç",
                      description:
                        "Tüm işlemlerimizi şeffaf bir şekilde yürütüyor, müşterilerimizi her adımda bilgilendiriyoruz.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-accent mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/modern-real-estate-office-consultation.jpg"
                  alt="Hizmetlerimiz"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-balance">
              Hizmetlerimiz Hakkında Detaylı Bilgi Almak İster misiniz?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
              Uzman ekibimiz size en uygun çözümü sunmak için hazır
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Bize Ulaşın
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
