"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert("Mesajınız başarıyla gönderildi!")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Ad Soyad *</Label>
          <Input id="name" placeholder="Adınız ve soyadınız" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-posta *</Label>
          <Input id="email" type="email" placeholder="ornek@email.com" required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon *</Label>
          <Input id="phone" type="tel" placeholder="+90 (5__) ___ __ __" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Konu *</Label>
          <Select required>
            <SelectTrigger id="subject">
              <SelectValue placeholder="Konu seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="buy">Gayrimenkul Alımı</SelectItem>
              <SelectItem value="sell">Gayrimenkul Satışı</SelectItem>
              <SelectItem value="rent">Kiralama</SelectItem>
              <SelectItem value="investment">Yatırım Danışmanlığı</SelectItem>
              <SelectItem value="construction">İnşaat Projesi</SelectItem>
              <SelectItem value="other">Diğer</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mesajınız *</Label>
        <Textarea
          id="message"
          placeholder="Mesajınızı buraya yazın..."
          className="min-h-[150px] resize-none"
          required
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Gönderiliyor..."
        ) : (
          <>
            Mesaj Gönder
            <Send className="ml-2 w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  )
}
