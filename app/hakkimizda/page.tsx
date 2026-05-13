import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Building2, TrendingUp, Target, Eye, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">Hakkımızda</h1>
              <p className="text-lg text-primary-foreground/90 text-pretty leading-relaxed">
                ARS A Plus İnşaat olarak, Türkiye'nin en prestijli gayrimenkul projelerinde yerinizi almanız için
                çalışıyoruz. Yılların deneyimi ve güvenilir hizmet anlayışımızla yanınızdayız.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">Hikayemiz</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    ARS A Plus İnşaat, gayrimenkul sektöründe uzun yılların deneyimi ile müşterilerine en kaliteli
                    hizmeti sunmayı ilke edinmiş bir şirkettir. Kuruluşumuzdan bu yana, müşteri memnuniyetini ön planda
                    tutarak sektörde öncü bir konuma geldik.
                  </p>
                  <p>
                    Türkiye'nin dört bir yanında gerçekleştirdiğimiz projelerle, binlerce ailenin hayallerini
                    gerçekleştirmelerine yardımcı olduk. Modern yaşam alanlarından lüks villalara, ticari
                    gayrimenkullerden yatırım amaçlı projelere kadar geniş bir yelpazede hizmet sunuyoruz.
                  </p>
                  <p>
                    Profesyonel ekibimiz, sektördeki en güncel gelişmeleri takip ederek müşterilerimize en iyi
                    danışmanlık hizmetini sunmaktadır. Güven, şeffaflık ve kalite, çalışma prensiplerimizin temelini
                    oluşturur.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/modern-office-team-meeting.jpg"
                  alt="ARS A Plus İnşaat Ekibi"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-8 rounded-lg shadow-xl">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-sm">Yıllık Deneyim</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted">
          <div className="container px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Building2, value: "500+", label: "Tamamlanan Proje" },
                { icon: Users, value: "2000+", label: "Mutlu Müşteri" },
                { icon: Award, value: "25+", label: "Ödül" },
                { icon: TrendingUp, value: "₺5M+", label: "Toplam Satış" },
              ].map((stat, index) => (
                <Card key={index} className="text-center border-border">
                  <CardContent className="pt-8 pb-6">
                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-background">
          <div className="container px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-border">
                <CardContent className="pt-8 pb-6">
                  <Target className="w-12 h-12 text-accent mb-4" />
                  <h3 className="font-serif text-2xl font-bold text-primary mb-4">Misyonumuz</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kentsel dönüşüm projeleriyle şehrin dokusuna değer katmak, güvenli, estetik ve sürdürülebilir yaşam
                    alanları inşa etmek. Her adımda modern teknolojiyi ve güçlü iletişimi merkeze alarak, insan odaklı
                    çözümler üretmek.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-8 pb-6">
                  <Eye className="w-12 h-12 text-accent mb-4" />
                  <h3 className="font-serif text-2xl font-bold text-primary mb-4">Vizyonumuz</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Geleceğin şehirlerini bugünden şekillendiren, yenilikçi ve güvenilir bir inşaat markası olmak.
                    Modern tasarım anlayışıyla, her projede kaliteyi, güveni ve sürdürülebilirliği ön planda tutmak.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-8 pb-6">
                  <Heart className="w-12 h-12 text-accent mb-4" />
                  <h3 className="font-serif text-2xl font-bold text-primary mb-4">Değerlerimiz</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Güven, şeffaflık, müşteri odaklılık, kalite, yenilikçilik ve sürdürülebilirlik ilkelerimizle hareket
                    ederek her projede mükemmelliği hedefliyoruz.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted">
          <div className="container px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Ekibimiz</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Alanında uzman profesyonellerden oluşan ekibimizle hizmetinizdeyiz
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    name: "Murat Alüste",
                    role: "Kurucu & Genel Müdür",
                  },
                  {
                    name: "Erkan Keleş",
                    role: "İnşaat Müdürü",
                  },
                ].map((member, index) => (
                  <Card key={index} className="border-border text-center">
                    <CardContent className="p-8">
                      <h3 className="font-serif text-xl font-bold text-primary mb-2">{member.name}</h3>
                      <p className="text-muted-foreground">{member.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-balance">
              Hayalinizdeki Gayrimenkul İçin Bizimle İletişime Geçin
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
              Profesyonel ekibimiz size en uygun projeyi bulmak için hazır
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="https://wa.me/905425776583" target="_blank" rel="noopener noreferrer">
                İletişime Geç
              </a>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
