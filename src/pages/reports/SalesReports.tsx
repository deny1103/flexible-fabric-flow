
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { BarChart4, Download, FileText, Plus, Trash, Calendar } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import { useNavigate } from 'react-router-dom';

const SalesReports = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<string>('2023-09-01');
  const [endDate, setEndDate] = useState<string>('2023-09-30');
  const [salesReports, setSalesReports] = useState([
    { id: 1, title: 'Laporan Penjualan Harian - September 2023', type: 'daily', date: '2023-09-30', status: 'Completed' },
    { id: 2, title: 'Laporan Penjualan Mingguan - Q3 2023', type: 'weekly', date: '2023-09-30', status: 'Pending' },
    { id: 3, title: 'Laporan Penjualan Bulanan - Q3 2023', type: 'monthly', date: '2023-09-30', status: 'Completed' },
  ]);

  const handleAddReport = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const newReport = {
      id: salesReports.length + 1,
      title: formData.get('title') as string,
      type: formData.get('type') as string,
      date: formData.get('date') as string,
      status: 'Pending'
    };
    
    setSalesReports([...salesReports, newReport]);
    toast({
      title: "Laporan ditambahkan",
      description: "Laporan penjualan baru telah berhasil ditambahkan",
    });
    
    // Reset the form
    e.currentTarget.reset();
  };

  const handleDeleteReport = (id: number) => {
    setSalesReports(salesReports.filter(report => report.id !== id));
    toast({
      title: "Laporan dihapus",
      description: "Laporan penjualan telah berhasil dihapus",
    });
  };

  const handleDateFilter = () => {
    toast({
      title: "Filter periode diterapkan",
      description: `Menampilkan data dari ${startDate} hingga ${endDate}`,
    });
  };

  const navigateToDetail = (type: string) => {
    if (type === 'daily' || type === 'weekly' || type === 'monthly') {
      navigate('/reports/sales/data');
    } else if (type === 'product') {
      navigate('/reports/sales/performance');
    }
  };

  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Laporan Penjualan</h1>
            <p className="text-muted-foreground mt-1">
              Detail laporan dan analisis penjualan
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus size={16} />
                  <span>Tambah Laporan</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Tambah Laporan Baru</DialogTitle>
                  <DialogDescription>
                    Tambahkan detail laporan penjualan baru ke dalam sistem
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleAddReport}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="title" className="text-right">
                        Judul Laporan
                      </Label>
                      <Input id="title" name="title" className="col-span-3" required />
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="type" className="text-right">
                        Tipe Laporan
                      </Label>
                      <Select name="type" defaultValue="daily">
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Pilih tipe laporan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Harian</SelectItem>
                          <SelectItem value="weekly">Mingguan</SelectItem>
                          <SelectItem value="monthly">Bulanan</SelectItem>
                          <SelectItem value="product">Kinerja Produk</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="date" className="text-right">
                        Tanggal
                      </Label>
                      <Input id="date" name="date" type="date" className="col-span-3" required />
                    </div>
                  </div>
                  
                  <DialogFooter>
                    <Button type="submit">Simpan Laporan</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Periode</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Pilih Periode Laporan</DialogTitle>
                  <DialogDescription>
                    Tentukan rentang waktu untuk laporan
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="startDate" className="text-right">
                      Tanggal Mulai
                    </Label>
                    <Input 
                      id="startDate" 
                      type="date" 
                      value={startDate} 
                      onChange={(e) => setStartDate(e.target.value)}
                      className="col-span-3" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="endDate" className="text-right">
                      Tanggal Akhir
                    </Label>
                    <Input 
                      id="endDate" 
                      type="date" 
                      value={endDate} 
                      onChange={(e) => setEndDate(e.target.value)}
                      className="col-span-3" 
                    />
                  </div>
                </div>
                
                <DialogFooter>
                  <Button onClick={handleDateFilter}>Terapkan Filter</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Periode Aktif</CardTitle>
                <CardDescription>
                  Menampilkan data dari {startDate} hingga {endDate}
                </CardDescription>
              </div>
              <div className="flex space-x-2">
                <Input 
                  type="date" 
                  value={startDate} 
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-40"
                />
                <span className="flex items-center">hingga</span>
                <Input 
                  type="date" 
                  value={endDate} 
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-40"
                />
                <Button onClick={handleDateFilter} size="sm">
                  Terapkan
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigateToDetail('daily')}>
            <CardHeader>
              <CardTitle>Data Penjualan Harian</CardTitle>
              <CardDescription>Laporan penjualan per hari</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-muted-foreground">Klik untuk melihat laporan penjualan harian</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigateToDetail('weekly')}>
            <CardHeader>
              <CardTitle>Data Penjualan Mingguan</CardTitle>
              <CardDescription>Laporan penjualan per minggu</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-muted-foreground">Klik untuk melihat laporan penjualan mingguan</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigateToDetail('monthly')}>
            <CardHeader>
              <CardTitle>Data Penjualan Bulanan</CardTitle>
              <CardDescription>Laporan penjualan per bulan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-muted-foreground">Klik untuk melihat laporan penjualan bulanan</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigateToDetail('product')}>
          <CardHeader>
            <CardTitle>Analisis Kinerja Produk</CardTitle>
            <CardDescription>Analisis performa penjualan per produk</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <p className="text-muted-foreground">Klik untuk melihat analisis kinerja produk</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Daftar Laporan Penjualan</CardTitle>
            <CardDescription>Semua laporan yang telah dibuat</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-md">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="p-3 text-left">Judul Laporan</th>
                    <th className="p-3 text-left">Tipe</th>
                    <th className="p-3 text-left">Tanggal</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {salesReports.map((report) => (
                    <tr key={report.id} className="border-b">
                      <td className="p-3">{report.title}</td>
                      <td className="p-3">
                        {report.type === 'daily' ? 'Harian' : 
                         report.type === 'weekly' ? 'Mingguan' : 
                         report.type === 'monthly' ? 'Bulanan' : 'Kinerja Produk'}
                      </td>
                      <td className="p-3">{report.date}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${report.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {report.status === 'Completed' ? 'Selesai' : 'Tertunda'}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="icon" onClick={(e) => { 
                            e.stopPropagation();
                            toast({ title: "Laporan diunduh" });
                          }}>
                            <Download size={16} />
                          </Button>
                          <Button variant="outline" size="icon" onClick={(e) => { 
                            e.stopPropagation();
                            handleDeleteReport(report.id);
                          }}>
                            <Trash size={16} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
};

export default SalesReports;
