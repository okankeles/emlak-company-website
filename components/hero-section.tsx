"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site-config"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/modern-luxury-residential-building-exterior-with-g.jpg"
          alt="Modern mimarili konut projesi"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background/95" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance"
          >
            Kentsel Dönüşüm ve Modern, Güvenilir Mimarinin Öncüsü
          </motion.h1>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/properties"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-7 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Projelerimiz
            </Link>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white px-7 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              İletişime Geç
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#hizmetlerimiz"
          onClick={(event) => {
            event.preventDefault()
            document.getElementById("hizmetlerimiz")?.scrollIntoView({ behavior: "smooth" })
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-label="Hizmetlerimiz bölümüne git"
        >
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center gap-2 text-white/70"
          >
            <span className="text-sm">Keşfet</span>
            <ArrowDown size={20} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  )
}
