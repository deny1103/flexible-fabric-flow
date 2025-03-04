
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { FileText, Download, Printer, BarChart4, Calendar } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';

const SalesData = () => {
  const [startDate, setStartDate] = useState<string>('2023-09-01');
  const [endDate, setEndDate] = useState<string>('2023-09-30');
  const [productCategory, setProductCategory] = useState<string>('all');
  
  const handleGenerateReport = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const reportType = formData.get('reportType') as string;
    const startDate = formData.get('startDate') as string;
    const endDate = formData.get('endDate') as string;
    
    toast({
      title: "Laporan dibuat",
      description: `Laporan ${reportType} untuk periode ${startDate} hingga ${endDate} sedang diproses`,
    });
  };

  const downloadReport = (format: string) => {
    toast({
      title: "Laporan diunduh",
      description: `Laporan penjualan dalam format ${format} sedang diunduh`,
    });
  };

  const printReport = () => {
    toast({
      title: "Mencetak laporan",
      description: "Laporan penjualan dikirim ke printer",
    });
  };

  const salesData = [
    { date: '01/09/2023', orders: 32, amount: 25600000, items: 120 },
    { date: '02/09/2023', orders: 28, amount: 21200000, items: 98 },
    { date: '03/09/2023', orders: 35, amount: 28500000, items: 142 },
    { date: '04/09/2023', orders: 30, amount: 24000000, items: 115 },
    { date: '05/09/2023', orders: 42, amount: 33600000, items: 156 },
  ];

  const weeklySalesData = [
    { week: 'Minggu 1 (1-7 Sep)', orders: 215, amount: 172000000, items: 830 },
    { week: 'Minggu 2 (8-14 Sep)', orders: 245, amount: 196000000, items: 920 },
    { week: 'Minggu 3 (15-21 Sep)', orders: 228, amount: 182400000, items: 875 },
    { week: 'Minggu 4 (22-30 Sep)', orders: 260, amount: 208000000, items: 990 },
  ];

  const monthlySalesData = [
    { month: 'Juli 2023', orders: 820, amount: 656000000, items: 3280 },
    { month: 'Agustus 2023', orders: 910, amount: 728000000, items: 3640 },
    { month: 'September 2023', orders: 948, amount: 758400000, items: 3615 },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
  };

  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Data Penjualan</h1>
            <p className="text-muted-foreground mt-1">
              Data penjualan harian, mingguan, dan bulanan
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <FileText size={16} />
                  <span>Buat Laporan</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Buat Laporan Penjualan</DialogTitle>
                  <DialogDescription>
                    Pilih jenis dan periode laporan yang ingin dibuat
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleGenerateReport}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="reportType" className="text-right">
                        Jenis Laporan
                      </Label>
                      <Select name="reportType" defaultValue="daily">
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Pilih jenis laporan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Harian</SelectItem>
                          <SelectItem value="weekly">Mingguan</SelectItem>
                          <SelectItem value="monthly">Bulanan</SelectItem>
                          <SelectItem value="custom">Kustom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="startDate" className="text-right">
                        Tanggal Mulai
                      </Label>
                      <Input id="startDate" name="startDate" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="col-span-3" required />
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="endDate" className="text-right">
                        Tanggal Akhir
                      </Label>
                      <Input id="endDate" name="endDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="col-span-3" required />
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="productCategory" className="text-right">
                        Kategori Produk
                      </Label>
                      <Select name="productCategory" value={productCategory} onValueChange={setProductCategory}>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Pilih kategori produk" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Semua Produk</SelectItem>
                          <SelectItem value="uniform">Seragam</SelectItem>
                          <SelectItem value="shirt">Kemeja</SelectItem>
                          <SelectItem value="pants">Celana</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <DialogFooter>
                    <Button type="submit">Buat Laporan</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download size={16} />
                  <span>Unduh Data</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Unduh Data Penjualan</DialogTitle>
                  <DialogDescription>
                    Pilih format unduhan data
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <Button onClick={() => downloadReport('PDF')} className="flex items-center justify-start gap-2">
                    <FileText size={16} />
                    <span>Unduh PDF</span>
                  </Button>
                  
                  <Button onClick={() => downloadReport('Excel')} className="flex items-center justify-start gap-2">
                    <FileText size={16} />
                    <span>Unduh Excel</span>
                  </Button>
                  
                  <Button onClick={() => downloadReport('CSV')} className="flex items-center justify-start gap-2">
                    <FileText size={16} />
                    <span>Unduh CSV</span>
                  </Button>
                  
                  <Button onClick={printReport} className="flex items-center justify-start gap-2">
                    <Printer size={16} />
                    <span>Cetak Laporan</span>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Filter & Periode</CardTitle>
                <CardDescription>Atur periode dan filter untuk data penjualan</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Input 
                  type="date" 
                  value={startDate} 
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-40"
                />
                <span>hingga</span>
                <Input 
                  type="date" 
                  value={endDate} 
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-40"
                />
                <Select value={productCategory} onValueChange={setProductCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Kategori Produk" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Produk</SelectItem>
                    <SelectItem value="uniform">Seragam</SelectItem>
                    <SelectItem value="shirt">Kemeja</SelectItem>
                    <SelectItem value="pants">Celana</SelectItem>
                  </SelectContent>
                </Select>
                <Button 
                  onClick={() => toast({ title: "Filter diterapkan" })}
                  size="sm"
                >
                  Terapkan
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Pesanan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">948</div>
              <p className="text-xs text-muted-foreground">+4.2% dari bulan lalu</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Pendapatan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rp 758.400.000</div>
              <p className="text-xs text-muted-foreground">+4.18% dari bulan lalu</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Jumlah Item Terjual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3,615</div>
              <p className="text-xs text-muted-foreground">-0.69% dari bulan lalu</p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="daily" className="w-full">
          <TabsList>
            <TabsTrigger value="daily">Harian</TabsTrigger>
            <TabsTrigger value="weekly">Mingguan</TabsTrigger>
            <TabsTrigger value="monthly">Bulanan</TabsTrigger>
          </TabsList>
          
          <TabsContent value="daily" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Penjualan Harian</CardTitle>
                <CardDescription>Data penjualan 5 hari terakhir</CardDescription>
              </CardHeader>
              <CardContent>
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Tanggal</th>
                      <th className="text-right p-4">Pesanan</th>
                      <th className="text-right p-4">Pendapatan</th>
                      <th className="text-right p-4">Item Terjual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesData.map((day, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-4">{day.date}</td>
                        <td className="p-4 text-right">{day.orders}</td>
                        <td className="p-4 text-right">{formatCurrency(day.amount)}</td>
                        <td className="p-4 text-right">{day.items}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Grafik Penjualan Harian</CardTitle>
                <CardDescription>Tren penjualan harian selama 1 bulan terakhir</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex flex-col items-center justify-center">
                  <BarChart4 size={80} className="text-gray-300 mb-4" />
                  <p className="text-muted-foreground">Grafik penjualan harian akan ditampilkan di sini</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="weekly" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Penjualan Mingguan</CardTitle>
                <CardDescription>Data penjualan per minggu (September 2023)</CardDescription>
              </CardHeader>
              <CardContent>
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Minggu</th>
                      <th className="text-right p-4">Pesanan</th>
                      <th className="text-right p-4">Pendapatan</th>
                      <th className="text-right p-4">Item Terjual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weeklySalesData.map((week, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-4">{week.week}</td>
                        <td className="p-4 text-right">{week.orders}</td>
                        <td className="p-4 text-right">{formatCurrency(week.amount)}</td>
                        <td className="p-4 text-right">{week.items}</td>
                      </tr>
                    ))}
                    <tr className="bg-gray-50 font-bold">
                      <td className="p-4">Total</td>
                      <td className="p-4 text-right">{weeklySalesData.reduce((sum, week) => sum + week.orders, 0)}</td>
                      <td className="p-4 text-right">{formatCurrency(weeklySalesData.reduce((sum, week) => sum + week.amount, 0))}</td>
                      <td className="p-4 text-right">{weeklySalesData.reduce((sum, week) => sum + week.items, 0)}</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Grafik Penjualan Mingguan</CardTitle>
                <CardDescription>Tren penjualan mingguan selama 3 bulan terakhir</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex flex-col items-center justify-center">
                  <BarChart4 size={80} className="text-gray-300 mb-4" />
                  <p className="text-muted-foreground">Grafik penjualan mingguan akan ditampilkan di sini</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="monthly" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Penjualan Bulanan</CardTitle>
                <CardDescription>Data penjualan per bulan (3 bulan terakhir)</CardDescription>
              </CardHeader>
              <CardContent>
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Bulan</th>
                      <th className="text-right p-4">Pesanan</th>
                      <th className="text-right p-4">Pendapatan</th>
                      <th className="text-right p-4">Item Terjual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlySalesData.map((month, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-4">{month.month}</td>
                        <td className="p-4 text-right">{month.orders}</td>
                        <td className="p-4 text-right">{formatCurrency(month.amount)}</td>
                        <td className="p-4 text-right">{month.items}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Grafik Penjualan Bulanan</CardTitle>
                <CardDescription>Tren penjualan bulanan selama 12 bulan terakhir</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex flex-col items-center justify-center">
                  <BarChart4 size={80} className="text-gray-300 mb-4" />
                  <p className="text-muted-foreground">Grafik penjualan bulanan akan ditampilkan di sini</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  );
};

export default SalesData;
