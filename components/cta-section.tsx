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
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
            Hayalinizdeki Mülkü Birlikte Bulalım
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
            Uzman ekibimiz size en uygun gayrimenkul çözümlerini sunmak için hazır. Hemen iletişime geçin, ücretsiz
            danışmanlık hizmetimizden yararlanın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 group">
              Ücretsiz Danışmanlık
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm text-base px-8 py-6"
            >
              +90 (212) 555 0000
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
