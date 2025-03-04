
import React from 'react';
import { Bell, Package, TrendingUp, Users, ShoppingCart, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge'; // Fix casing to lowercase
import { cn } from '@/lib/utils'; // Import cn function
import StatCard from '@/components/dashboard/StatCard';
import PageTransition from '@/components/layout/PageTransition';

const DashboardPage = () => {
  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Ringkasan dan statistik produksi terkini
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="h-9">
              <Bell className="h-4 w-4 mr-2" />
              <span className="relative">
                Notifikasi
                <Badge variant="destructive" size="sm" className="absolute -top-1 -right-4 flex items-center justify-center h-4 w-4 p-0">
                  3
                </Badge>
              </span>
            </Button>
            <Button size="sm" className="h-9">Ringkasan Hari Ini</Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
            <TabsTrigger value="overview">Ringkasan</TabsTrigger>
            <TabsTrigger value="statistics">Statistik</TabsTrigger>
            <TabsTrigger value="notifications">
              Notifikasi
              <Badge variant="destructive" size="sm" className="ml-1">3</Badge>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard 
                title="Total Produksi Hari Ini" 
                value="248" 
                description="Target: 300 pcs" 
                trend="up"
                trendValue="+12% dari kemarin"
                icon={Package}
              />
              <StatCard 
                title="Efisiensi Produksi" 
                value="82.6%" 
                description="Target: 85%" 
                trend="neutral"
                trendValue="0% dari kemarin"
                icon={TrendingUp}
              />
              <StatCard 
                title="Stok Bahan Baku" 
                value="12" 
                description="Bahan dibawah minimum" 
                trend="down"
                trendValue="-3 sejak kemarin"
                icon={ShoppingCart}
              />
              <StatCard 
                title="Kehadiran Karyawan" 
                value="92%" 
                description="178/194 Karyawan" 
                trend="up"
                trendValue="+2% dari kemarin"
                icon={Users}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Status Produksi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { stage: 'Cutting', completed: 85, target: 100, status: 'In Progress' },
                      { stage: 'Sewing', completed: 65, target: 95, status: 'In Progress' },
                      { stage: 'Quality Control', completed: 50, target: 90, status: 'In Progress' },
                      { stage: 'Finishing', completed: 30, target: 85, status: 'In Progress' },
                      { stage: 'Packaging', completed: 10, target: 80, status: 'Pending' },
                    ].map((item) => (
                      <div key={item.stage} className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">{item.stage}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.completed}/{item.target} selesai
                          </p>
                        </div>
                        <Badge 
                          variant={
                            item.status === 'Complete' ? 'success' : 
                            item.status === 'In Progress' ? 'info' : 
                            item.status === 'Pending' ? 'warning' : 'default'
                          }
                        >
                          {item.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Statistik Harian</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <p className="text-muted-foreground">Grafik statistik produksi akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="statistics" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Statistik Harian</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center">
                  <p className="text-muted-foreground">Grafik detail statistik harian akan ditampilkan di sini</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Notifikasi & Pemberitahuan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      title: 'Stok Kain Katun Menipis', 
                      description: 'Stok kain katun black 30s tersisa 25kg (di bawah minimum)', 
                      time: '10 menit yang lalu',
                      type: 'warning'
                    },
                    { 
                      title: 'Target Cutting Tercapai', 
                      description: 'Tim cutting telah mencapai target harian 100 pcs untuk PO #2023051', 
                      time: '45 menit yang lalu',
                      type: 'success'
                    },
                    { 
                      title: 'QC Menemukan Cacat Produksi', 
                      description: 'Ditemukan 5 pcs produk cacat jahitan pada batch #B22046', 
                      time: '1 jam yang lalu',
                      type: 'error'
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-background border">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                        item.type === 'warning' && "bg-yellow-100 text-yellow-800",
                        item.type === 'success' && "bg-green-100 text-green-800",
                        item.type === 'error' && "bg-red-100 text-red-800",
                      )}>
                        <AlertCircle className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{item.title}</p>
                          <span className="text-xs text-muted-foreground">{item.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  );
};

export default DashboardPage;
