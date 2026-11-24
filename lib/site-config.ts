const companyBrandName = "ARS A Plus"
const companyCategory = "İnşaat"
const addressLine1 = "Merkez Mahallesi Şirin Sokak No 14/3"
const addressLine2 = "AVCILAR/İSTANBUL"

export const siteConfig = {
  companyName: companyBrandName,
  companyCategory,
  companyFullName: `${companyBrandName} ${companyCategory}`,
  legalCompanyName: "ARS APLUS İNŞAAT OTOMOTİV SANAYİ VE TİCARET LİMİTED ŞİRKETİ",
  phone: {
    display: "+90 542 577 65 83",
    href: "tel:+905425776583",
  },
  whatsappUrl: "https://wa.me/905425776583",
  email: "arsaplusinsaat@gmail.com.tr",
  address: {
    line1: addressLine1,
    line2: addressLine2,
    full: `${addressLine1} ${addressLine2}`,
  },
  instagramUrl: "https://www.instagram.com/ars_aplus/",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Merkez+Mahallesi+%C5%9Eirin+Sokak+No+14+Avc%C4%B1lar+%C4%B0stanbul&output=embed",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Merkez+Mahallesi+%C5%9Eirin+Sokak+No+14+Avc%C4%B1lar+%C4%B0stanbul",
} as const
