import { Shield, Award, Users, Clock } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Güvenilir Hizmet",
    description:
      "Her geçen gün büyüyen personel ağımız ve bizden aldığımız güç ile sizlere en iyi hizmeti vermeye çalışıyoruz.",
  },
  {
    icon: Award,
    title: "Marka Gücü",
    description: "Tüm projelerimizi size verdiğimiz süre içerisinde teslim ediyoruz.",
  },
  {
    icon: Users,
    title: "Profesyonel Ekip",
    description: "Sektör deneyimi yüksek profesyonel ekibimiz her zaman sizin yanınızda olacaktır.",
  },
  {
    icon: Clock,
    title: "7/24 Destek",
    description:
      "Müşteri temsilcilerimizden dilediğiniz zaman yardım alabilirsiniz. Bize 7 gün 24 saat ulaşabilirsiniz.",
  },
]

export function WhyUsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Neden Biz?</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <reason.icon size={32} />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-primary">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
