import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/aplus_insaat_logo_transparent.png"
                alt="ARS A Plus İnşaat"
                width={50}
                height={50}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold">ARS A Plus</span>
                <span className="text-xs text-primary-foreground/70">İnşaat</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
              Kentsel dönüşüm ve modern mimaride Türkiye'nin güvenilir çözüm ortağınız.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Projeler
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              <li className="text-sm text-primary-foreground/80">Gayrimenkul Alım-Satım</li>
              <li className="text-sm text-primary-foreground/80">Konut Kiralama</li>
              <li className="text-sm text-primary-foreground/80">İnşaat Projeleri</li>
              <li className="text-sm text-primary-foreground/80">Kira Takip Sistemi</li>
              <li className="text-sm text-primary-foreground/80">Danışmanlık Hizmetleri</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  Maslak Mahallesi, Büyükdere Caddesi No:123, Sarıyer/İstanbul
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">+90 535 206 45 96</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">arsaplusinsaat@gmail.com.tr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">© 2025 ARS A Plus İnşaat. Tüm hakları saklıdır.</p>
            <div className="flex gap-6">
              <Link href="/gizlilik" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
