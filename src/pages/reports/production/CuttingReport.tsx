
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { FileText, Trash, Download, FilePlus, Plus, Calendar } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';

const CuttingReport = () => {
  const [reports, setReports] = useState([
    { id: 1, date: '2023-09-15', title: 'Cutting Report - September Week 2', type: 'Daily', status: 'Completed' },
    { id: 2, date: '2023-09-22', title: 'Cutting Report - September Week 3', type: 'Weekly', status: 'Completed' },
    { id: 3, date: '2023-09-30', title: 'Cutting Report - September Final', type: 'Monthly', status: 'Pending' },
  ]);

  const handleDeleteReport = (id: number) => {
    setReports(reports.filter(report => report.id !== id));
    toast({
      title: "Laporan dihapus",
      description: "Laporan telah berhasil dihapus dari sistem",
    });
  };

  const handleAddReport = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const newReport = {
      id: reports.length + 1,
      date: formData.get('date') as string,
      title: formData.get('title') as string,
      type: formData.get('type') as string,
      status: 'Pending'
    };
    
    setReports([...reports, newReport]);
    toast({
      title: "Laporan ditambahkan",
      description: "Laporan baru telah berhasil ditambahkan",
    });
    
    // Reset the form
    form.reset();
  };

  const generateReport = (type: string) => {
    toast({
      title: "Laporan sedang dibuat",
      description: `Laporan ${type} sedang dibuat dan akan siap dalam beberapa saat`,
    });
  };

  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Laporan Cutting</h1>
            <p className="text-muted-foreground mt-1">
              Laporan dan analisis data cutting produksi
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
                    Tambahkan detail laporan cutting baru ke dalam sistem
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleAddReport}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="title" className="text-right">
                        Judul
                      </Label>
                      <Input id="title" name="title" className="col-span-3" required />
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="date" className="text-right">
                        Tanggal
                      </Label>
                      <Input id="date" name="date" type="date" className="col-span-3" required />
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="type" className="text-right">
                        Tipe Laporan
                      </Label>
                      <Select name="type" defaultValue="Daily">
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Pilih tipe laporan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Daily">Harian</SelectItem>
                          <SelectItem value="Weekly">Mingguan</SelectItem>
                          <SelectItem value="Monthly">Bulanan</SelectItem>
                        </SelectContent>
                      </Select>
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
                  <FilePlus size={16} />
                  <span>Buat Laporan</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Buat Laporan Cutting</DialogTitle>
                  <DialogDescription>
                    Pilih tipe laporan yang ingin dibuat
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <Button onClick={() => generateReport('Harian')} className="flex items-center justify-start gap-2">
                    <Calendar size={16} />
                    <span>Laporan Harian</span>
                  </Button>
                  
                  <Button onClick={() => generateReport('Mingguan')} className="flex items-center justify-start gap-2">
                    <Calendar size={16} />
                    <span>Laporan Mingguan</span>
                  </Button>
                  
                  <Button onClick={() => generateReport('Bulanan')} className="flex items-center justify-start gap-2">
                    <Calendar size={16} />
                    <span>Laporan Bulanan</span>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">Semua</TabsTrigger>
            <TabsTrigger value="daily">Harian</TabsTrigger>
            <TabsTrigger value="weekly">Mingguan</TabsTrigger>
            <TabsTrigger value="monthly">Bulanan</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <div className="border rounded-md">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="p-3 text-left">Tanggal</th>
                    <th className="p-3 text-left">Judul Laporan</th>
                    <th className="p-3 text-left">Tipe</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr key={report.id} className="border-b">
                      <td className="p-3">{report.date}</td>
                      <td className="p-3">{report.title}</td>
                      <td className="p-3">{report.type === 'Daily' ? 'Harian' : report.type === 'Weekly' ? 'Mingguan' : 'Bulanan'}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${report.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {report.status === 'Completed' ? 'Selesai' : 'Tertunda'}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="icon" onClick={() => toast({ title: "Laporan diunduh" })}>
                            <Download size={16} />
                          </Button>
                          <Button variant="outline" size="icon" onClick={() => handleDeleteReport(report.id)}>
                            <Trash size={16} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          {/* Tabs for filtered content */}
          <TabsContent value="daily" className="space-y-4">
            {/* Similar table structure showing only daily reports */}
            <div className="border rounded-md">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="p-3 text-left">Tanggal</th>
                    <th className="p-3 text-left">Judul Laporan</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {reports
                    .filter(report => report.type === 'Daily')
                    .map((report) => (
                      <tr key={report.id} className="border-b">
                        <td className="p-3">{report.date}</td>
                        <td className="p-3">{report.title}</td>
                        <td className="p-3">
                          <span className={`px-2 py-1 text-xs rounded-full ${report.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {report.status === 'Completed' ? 'Selesai' : 'Tertunda'}
                          </span>
                        </td>
                        <td className="p-3">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="icon" onClick={() => toast({ title: "Laporan diunduh" })}>
                              <Download size={16} />
                            </Button>
                            <Button variant="outline" size="icon" onClick={() => handleDeleteReport(report.id)}>
                              <Trash size={16} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          {/* Reuse same structure for weekly and monthly */}
          <TabsContent value="weekly" className="space-y-4">
            {/* Similar table structure showing only weekly reports */}
            <div className="border rounded-md">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="p-3 text-left">Tanggal</th>
                    <th className="p-3 text-left">Judul Laporan</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {reports
                    .filter(report => report.type === 'Weekly')
                    .map((report) => (
                      <tr key={report.id} className="border-b">
                        <td className="p-3">{report.date}</td>
                        <td className="p-3">{report.title}</td>
                        <td className="p-3">
                          <span className={`px-2 py-1 text-xs rounded-full ${report.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {report.status === 'Completed' ? 'Selesai' : 'Tertunda'}
                          </span>
                        </td>
                        <td className="p-3">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="icon" onClick={() => toast({ title: "Laporan diunduh" })}>
                              <Download size={16} />
                            </Button>
                            <Button variant="outline" size="icon" onClick={() => handleDeleteReport(report.id)}>
                              <Trash size={16} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          <TabsContent value="monthly" className="space-y-4">
            {/* Similar table structure showing only monthly reports */}
            <div className="border rounded-md">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="p-3 text-left">Tanggal</th>
                    <th className="p-3 text-left">Judul Laporan</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {reports
                    .filter(report => report.type === 'Monthly')
                    .map((report) => (
                      <tr key={report.id} className="border-b">
                        <td className="p-3">{report.date}</td>
                        <td className="p-3">{report.title}</td>
                        <td className="p-3">
                          <span className={`px-2 py-1 text-xs rounded-full ${report.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {report.status === 'Completed' ? 'Selesai' : 'Tertunda'}
                          </span>
                        </td>
                        <td className="p-3">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="icon" onClick={() => toast({ title: "Laporan diunduh" })}>
                              <Download size={16} />
                            </Button>
                            <Button variant="outline" size="icon" onClick={() => handleDeleteReport(report.id)}>
                              <Trash size={16} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
        
        <Card>
          <CardHeader>
            <CardTitle>Metrik & Statistik Cutting</CardTitle>
            <CardDescription>Statistik kinerja proses cutting (minggu ini)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Cutting</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,248</div>
                  <p className="text-xs text-muted-foreground">+8.2% dari minggu lalu</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Efisiensi Material</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">92.6%</div>
                  <p className="text-xs text-muted-foreground">+1.2% dari minggu lalu</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Kecepatan Cutting</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">124 unit/jam</div>
                  <p className="text-xs text-muted-foreground">+3.5% dari minggu lalu</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
};

export default CuttingReport;
