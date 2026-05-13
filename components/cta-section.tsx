import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">İletişime Geçin</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
            Sorularınız ve projeleriniz için bizimle iletişime geçin. Profesyonel ekibimiz size en uygun çözümleri
            sunmaya hazır.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 group"
          >
            <a href="https://wa.me/905425776583" target="_blank" rel="noopener noreferrer">
              İletişime Geç
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
