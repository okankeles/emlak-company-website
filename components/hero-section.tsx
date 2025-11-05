"use client"

import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/modern-luxury-residential-building-exterior-with-g.jpg"
          alt="Modern mimari dış cephe"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background/95" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 lg:px-8 pt-20 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 text-balance max-w-4xl"
        >
          Kentsel Dönüşüm ve Modern, Güvenilir Mimarinin Öncüsü
        </motion.h1>

        {/* Scroll Indicator — başlığın altı */}
        <Link href="#scroll-target" aria-label="Aşağı kaydır">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center gap-3 mt-6 cursor-pointer select-none"
          >
            <div className="w-9 h-14 rounded-full border border-white/70 bg-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-start justify-center p-2">
              <motion.span
                className="w-1.5 h-3 rounded-full bg-white/90"
                animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white/85 text-base md:text-lg font-medium tracking-wide">Keşfet</span>
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4], y: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="mt-1"
              >
                <ArrowDown size={22} className="text-white/80" />
              </motion.div>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  )
}
