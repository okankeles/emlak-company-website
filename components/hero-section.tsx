"use client"

import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useCallback } from "react"

/** Momentum / spring hissi veren custom smooth scroll */
function momentumScrollTo(target: HTMLElement, opts?: { offset?: number }) {
  if (typeof window === "undefined" || !target) return
  const offset = opts?.offset ?? 80 // sabit navbar yüksekliği için (≈ h-20)

  const start = window.scrollY
  const end =
    target.getBoundingClientRect().top + window.scrollY - offset

  const distance = end - start

  // Mesafeye göre süre: yakında kısa, uzakta uzun (600ms–1400ms)
  const duration = Math.min(1400, Math.max(600, Math.abs(distance) * 0.6))

  // Ease-out-back (hafif overshoot → momentum hissi)
  const easeOutBack = (t: number) => {
    const c1 = 1.70158
    const c3 = c1 + 1
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2)
  }

  let startTime: number | null = null

  const step = (ts: number) => {
    if (startTime === null) startTime = ts
    const p = Math.min((ts - startTime) / duration, 1)
    const eased = easeOutBack(p)
    window.scrollTo(0, start + distance * eased)
    if (p < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export function HeroSection() {
  const handleScroll = useCallback(() => {
    const el = document.getElementById("scroll-target")
    if (el) momentumScrollTo(el, { offset: 80 })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
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

      {/* CONTENT */}
      <div className="container relative z-10 px-4 lg:px-8 pt-20 flex flex-col items-center text-center">
        {/* Başlık */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 text-balance max-w-4xl"
        >
          Kentsel Dönüşüm ve Modern, Güvenilir Mimarinin Öncüsü
        </motion.h1>

        {/* Scroll Indicator — Başlığın hemen altı */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col items-center gap-3 mt-6 cursor-pointer select-none"
          onClick={handleScroll}
          aria-label="Aşağı kaydır"
        >
          {/* Mouse Outline */}
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
      </div>
    </section>
  )
}
