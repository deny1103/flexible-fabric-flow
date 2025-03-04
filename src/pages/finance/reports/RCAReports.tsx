
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { BarChart4, Download, FileText, Calendar, Printer } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';

const RCAReports = () => {
  const [startDate, setStartDate] = useState<string>('2023-09-01');
  const [endDate, setEndDate] = useState<string>('2023-09-30');
  const [rcaType, setRcaType] = useState<string>('all');
  
  const handleGenerateReport = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const reportType = formData.get('reportType') as string;
    const startDate = formData.get('startDate') as string;
    const endDate = formData.get('endDate') as string;
    const rcaType = formData.get('rcaType') as string;
    
    toast({
      title: "Laporan dibuat",
      description: `Laporan ${reportType} untuk periode ${startDate} hingga ${endDate} sedang diproses`,
    });
  };

  const downloadReport = (format: string) => {
    toast({
      title: "Laporan diunduh",
      description: `Laporan RCA dalam format ${format} sedang diunduh`,
    });
  };

  const printReport = () => {
    toast({
      title: "Mencetak laporan",
      description: "Laporan RCA dikirim ke printer",
    });
  };

  const weekData = [
    { week: 'Minggu 1', gaji: 12000000, maklun: 8500000, fullOrder: 15000000 },
    { week: 'Minggu 2', gaji: 13500000, maklun: 9200000, fullOrder: 18000000 },
    { week: 'Minggu 3', gaji: 11800000, maklun: 7800000, fullOrder: 14000000 },
    { week: 'Minggu 4', gaji: 14200000, maklun: 9800000, fullOrder: 22000000 },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
  };

  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Laporan RCA</h1>
            <p className="text-muted-foreground mt-1">
              Laporan RCA keuangan produksi
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <FileText size={16} />
                  <span>Buat Laporan Baru</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Buat Laporan RCA</DialogTitle>
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
                      <Select name="reportType" defaultValue="summary">
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Pilih jenis laporan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="summary">Ringkasan</SelectItem>
                          <SelectItem value="detail">Detail</SelectItem>
                          <SelectItem value="comparison">Perbandingan</SelectItem>
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
                      <Label htmlFor="rcaType" className="text-right">
                        Tipe RCA
                      </Label>
                      <Select name="rcaType" value={rcaType} onValueChange={setRcaType}>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Pilih tipe RCA" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Semua</SelectItem>
                          <SelectItem value="gaji">Gaji</SelectItem>
                          <SelectItem value="maklun">Maklun</SelectItem>
                          <SelectItem value="fullOrder">Full Order</SelectItem>
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
                  <span>Unduh Laporan</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Unduh Laporan RCA</DialogTitle>
                  <DialogDescription>
                    Pilih format unduhan laporan
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
                <CardDescription>Atur periode dan filter untuk laporan</CardDescription>
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
                <Select value={rcaType} onValueChange={setRcaType}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Pilih tipe RCA" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua</SelectItem>
                    <SelectItem value="gaji">Gaji</SelectItem>
                    <SelectItem value="maklun">Maklun</SelectItem>
                    <SelectItem value="fullOrder">Full Order</SelectItem>
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
        
        <Tabs defaultValue="summary" className="w-full">
          <TabsList>
            <TabsTrigger value="summary">Ringkasan</TabsTrigger>
            <TabsTrigger value="weekly">Mingguan</TabsTrigger>
            <TabsTrigger value="comparison">Perbandingan</TabsTrigger>
          </TabsList>
          
          <TabsContent value="summary" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total RCA Gaji</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp 51.500.000</div>
                  <p className="text-xs text-muted-foreground">Periode: 1 - 30 Sep 2023</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total RCA Maklun</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp 35.300.000</div>
                  <p className="text-xs text-muted-foreground">Periode: 1 - 30 Sep 2023</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total RCA Full Order</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp 69.000.000</div>
                  <p className="text-xs text-muted-foreground">Periode: 1 - 30 Sep 2023</p>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Grafik Ringkasan RCA</CardTitle>
                <CardDescription>Distribusi RCA berdasarkan tipe</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex flex-col items-center justify-center">
                  <BarChart4 size={80} className="text-gray-300 mb-4" />
                  <p className="text-muted-foreground">Grafik ringkasan RCA akan ditampilkan di sini</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="weekly" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Laporan RCA Mingguan</CardTitle>
                <CardDescription>Rincian RCA per minggu</CardDescription>
              </CardHeader>
              <CardContent>
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Minggu</th>
                      <th className="text-right p-4">RCA Gaji</th>
                      <th className="text-right p-4">RCA Maklun</th>
                      <th className="text-right p-4">RCA Full Order</th>
                      <th className="text-right p-4">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weekData.map((week, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-4">{week.week}</td>
                        <td className="p-4 text-right">{formatCurrency(week.gaji)}</td>
                        <td className="p-4 text-right">{formatCurrency(week.maklun)}</td>
                        <td className="p-4 text-right">{formatCurrency(week.fullOrder)}</td>
                        <td className="p-4 text-right font-bold">{formatCurrency(week.gaji + week.maklun + week.fullOrder)}</td>
                      </tr>
                    ))}
                    <tr className="bg-gray-50">
                      <td className="p-4 font-bold">Total</td>
                      <td className="p-4 text-right font-bold">{formatCurrency(weekData.reduce((sum, week) => sum + week.gaji, 0))}</td>
                      <td className="p-4 text-right font-bold">{formatCurrency(weekData.reduce((sum, week) => sum + week.maklun, 0))}</td>
                      <td className="p-4 text-right font-bold">{formatCurrency(weekData.reduce((sum, week) => sum + week.fullOrder, 0))}</td>
                      <td className="p-4 text-right font-bold">{formatCurrency(weekData.reduce((sum, week) => sum + week.gaji + week.maklun + week.fullOrder, 0))}</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Tren Mingguan</CardTitle>
                <CardDescription>Grafik tren RCA mingguan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex flex-col items-center justify-center">
                  <BarChart4 size={80} className="text-gray-300 mb-4" />
                  <p className="text-muted-foreground">Grafik tren mingguan akan ditampilkan di sini</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="comparison" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Perbandingan RCA dengan Periode Sebelumnya</CardTitle>
                <CardDescription>Perbandingan dengan bulan Agustus 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Kategori</th>
                      <th className="text-right p-4">Agustus 2023</th>
                      <th className="text-right p-4">September 2023</th>
                      <th className="text-right p-4">Selisih</th>
                      <th className="text-right p-4">Persentase</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">RCA Gaji</td>
                      <td className="p-4 text-right">Rp 48.500.000</td>
                      <td className="p-4 text-right">Rp 51.500.000</td>
                      <td className="p-4 text-right text-green-600">+Rp 3.000.000</td>
                      <td className="p-4 text-right text-green-600">+6.18%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">RCA Maklun</td>
                      <td className="p-4 text-right">Rp 38.800.000</td>
                      <td className="p-4 text-right">Rp 35.300.000</td>
                      <td className="p-4 text-right text-red-600">-Rp 3.500.000</td>
                      <td className="p-4 text-right text-red-600">-9.02%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">RCA Full Order</td>
                      <td className="p-4 text-right">Rp 62.000.000</td>
                      <td className="p-4 text-right">Rp 69.000.000</td>
                      <td className="p-4 text-right text-green-600">+Rp 7.000.000</td>
                      <td className="p-4 text-right text-green-600">+11.29%</td>
                    </tr>
                    <tr className="bg-gray-50 font-bold">
                      <td className="p-4">Total</td>
                      <td className="p-4 text-right">Rp 149.300.000</td>
                      <td className="p-4 text-right">Rp 155.800.000</td>
                      <td className="p-4 text-right text-green-600">+Rp 6.500.000</td>
                      <td className="p-4 text-right text-green-600">+4.35%</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Grafik Perbandingan</CardTitle>
                <CardDescription>Visualisasi perbandingan periode</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex flex-col items-center justify-center">
                  <BarChart4 size={80} className="text-gray-300 mb-4" />
                  <p className="text-muted-foreground">Grafik perbandingan akan ditampilkan di sini</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  );
};

export default RCAReports;
