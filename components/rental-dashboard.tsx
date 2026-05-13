"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Home,
  TrendingUp,
  Users,
  AlertCircle,
  Plus,
  Search,
  Calendar,
  DollarSign,
  FileText,
  CheckCircle2,
  Clock,
  XCircle,
} from "lucide-react"
import { useState } from "react"

const stats = [
  {
    title: "Toplam Gayrimenkul",
    value: "24",
    icon: Home,
    change: "+2 bu ay",
    trend: "up",
  },
  {
    title: "Aktif Kiracı",
    value: "18",
    icon: Users,
    change: "75% doluluk",
    trend: "up",
  },
  {
    title: "Aylık Gelir",
    value: "₺125,000",
    icon: TrendingUp,
    change: "+12% geçen aya göre",
    trend: "up",
  },
  {
    title: "Bekleyen Ödemeler",
    value: "3",
    icon: AlertCircle,
    change: "₺18,500",
    trend: "warning",
  },
]

const properties = [
  {
    id: 1,
    name: "Beşiktaş Daire 3+1",
    address: "Beşiktaş, İstanbul",
    tenant: "Ahmet Yılmaz",
    rent: "₺12,500",
    status: "paid",
    nextPayment: "01.12.2024",
    contract: "12 ay",
  },
  {
    id: 2,
    name: "Kadıköy Ofis",
    address: "Kadıköy, İstanbul",
    tenant: "ABC Şirketi",
    rent: "₺25,000",
    status: "paid",
    nextPayment: "05.12.2024",
    contract: "24 ay",
  },
  {
    id: 3,
    name: "Nişantaşı Daire 2+1",
    address: "Şişli, İstanbul",
    tenant: "Ayşe Demir",
    rent: "₺15,000",
    status: "pending",
    nextPayment: "28.11.2024",
    contract: "12 ay",
  },
  {
    id: 4,
    name: "Bodrum Villa",
    address: "Bodrum, Muğla",
    tenant: "-",
    rent: "₺45,000",
    status: "vacant",
    nextPayment: "-",
    contract: "-",
  },
  {
    id: 5,
    name: "Maslak Ofis Katı",
    address: "Maslak, İstanbul",
    tenant: "XYZ Ltd.",
    rent: "₺35,000",
    status: "overdue",
    nextPayment: "15.11.2024",
    contract: "36 ay",
  },
]

const recentPayments = [
  {
    id: 1,
    property: "Beşiktaş Daire 3+1",
    tenant: "Ahmet Yılmaz",
    amount: "₺12,500",
    date: "01.11.2024",
    status: "completed",
  },
  {
    id: 2,
    property: "Kadıköy Ofis",
    tenant: "ABC Şirketi",
    amount: "₺25,000",
    date: "05.11.2024",
    status: "completed",
  },
  {
    id: 3,
    property: "Maslak Ofis Katı",
    tenant: "XYZ Ltd.",
    amount: "₺35,000",
    date: "15.10.2024",
    status: "overdue",
  },
]

export function RentalDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return (
          <Badge className="bg-green-500/10 text-green-700 hover:bg-green-500/20">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Ödendi
          </Badge>
        )
      case "pending":
        return (
          <Badge className="bg-yellow-500/10 text-yellow-700 hover:bg-yellow-500/20">
            <Clock className="w-3 h-3 mr-1" />
            Bekliyor
          </Badge>
        )
      case "overdue":
        return (
          <Badge className="bg-red-500/10 text-red-700 hover:bg-red-500/20">
            <XCircle className="w-3 h-3 mr-1" />
            Gecikmiş
          </Badge>
        )
      case "vacant":
        return (
          <Badge variant="outline">
            <Home className="w-3 h-3 mr-1" />
            Boş
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-border">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                {stat.trend === "warning" && <AlertCircle className="w-5 h-5 text-yellow-600" />}
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground mb-2">{stat.title}</div>
              <div className="text-xs text-muted-foreground">{stat.change}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="properties" className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <TabsList>
            <TabsTrigger value="properties">Gayrimenkuller</TabsTrigger>
            <TabsTrigger value="payments">Ödemeler</TabsTrigger>
            <TabsTrigger value="reports">Raporlar</TabsTrigger>
          </TabsList>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus className="w-4 h-4 mr-2" />
            Yeni Gayrimenkul Ekle
          </Button>
        </div>

        {/* Properties Tab */}
        <TabsContent value="properties" className="space-y-6">
          <Card className="border-border">
            <CardHeader>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <CardTitle>Gayrimenkul Listesi</CardTitle>
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Gayrimenkul ara..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {properties.map((property) => (
                  <Card key={property.id} className="border-border">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-foreground mb-1">{property.name}</h3>
                              <p className="text-sm text-muted-foreground">{property.address}</p>
                            </div>
                            {getStatusBadge(property.status)}
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                            <div>
                              <p className="text-muted-foreground mb-1">Kiracı</p>
                              <p className="font-medium">{property.tenant}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground mb-1">Kira</p>
                              <p className="font-medium">{property.rent}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground mb-1">Sonraki Ödeme</p>
                              <p className="font-medium">{property.nextPayment}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground mb-1">Sözleşme</p>
                              <p className="font-medium">{property.contract}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <FileText className="w-4 h-4 mr-2" />
                            Detay
                          </Button>
                          <Button variant="outline" size="sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            Ödeme
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payments Tab */}
        <TabsContent value="payments" className="space-y-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Son Ödemeler</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPayments.map((payment) => (
                  <div
                    key={payment.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{payment.property}</p>
                        <p className="text-sm text-muted-foreground">{payment.tenant}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">{payment.amount}</p>
                      <p className="text-sm text-muted-foreground">{payment.date}</p>
                    </div>
                    {payment.status === "completed" ? (
                      <Badge className="bg-green-500/10 text-green-700">Tamamlandı</Badge>
                    ) : (
                      <Badge className="bg-red-500/10 text-red-700">Gecikmiş</Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports" className="space-y-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Raporlar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent">
                  <FileText className="w-6 h-6" />
                  Aylık Gelir Raporu
                </Button>
                <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent">
                  <Users className="w-6 h-6" />
                  Kiracı Raporu
                </Button>
                <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent">
                  <TrendingUp className="w-6 h-6" />
                  Yıllık Analiz
                </Button>
                <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent">
                  <Calendar className="w-6 h-6" />
                  Ödeme Takvimi
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
