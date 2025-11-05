"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3" onClick={() => handleNavClick("/")}>
            <Image
              src="/aplus_insaat_circle.png"
              alt="ARS A Plus İnşaat"
              width={50}
              height={50}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-primary">ARS A Plus</span>
              <span className="text-xs text-muted-foreground">İnşaat</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={() => handleNavClick("/")}
            >
              Anasayfa
            </Link>
            <Link
              href="/properties"
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={() => handleNavClick("/properties")}
            >
              Projeler
            </Link>
            <Link
              href="/hakkimizda"
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={() => handleNavClick("/hakkimizda")}
            >
              Hakkımızda
            </Link>
            <Link
              href="/hizmetler"
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={() => handleNavClick("/hizmetler")}
            >
              Hizmetler
            </Link>
            <Link
              href="/iletisim"
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={() => handleNavClick("/iletisim")}
            >
              İletişim
            </Link>
            <Link href="/kira-takip" onClick={() => handleNavClick("/kira-takip")}>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Kira Takip Sistemi</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-accent transition-colors py-2"
                onClick={() => handleNavClick("/")}
              >
                Anasayfa
              </Link>
              <Link
                href="/properties"
                className="text-sm font-medium hover:text-accent transition-colors py-2"
                onClick={() => handleNavClick("/properties")}
              >
                Projeler
              </Link>
              <Link
                href="/hakkimizda"
                className="text-sm font-medium hover:text-accent transition-colors py-2"
                onClick={() => handleNavClick("/hakkimizda")}
              >
                Hakkımızda
              </Link>
              <Link
                href="/hizmetler"
                className="text-sm font-medium hover:text-accent transition-colors py-2"
                onClick={() => handleNavClick("/hizmetler")}
              >
                Hizmetler
              </Link>
              <Link
                href="/iletisim"
                className="text-sm font-medium hover:text-accent transition-colors py-2"
                onClick={() => handleNavClick("/iletisim")}
              >
                İletişim
              </Link>
              <Link href="/kira-takip" onClick={() => handleNavClick("/kira-takip")}>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                  Kira Takip Sistemi
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
