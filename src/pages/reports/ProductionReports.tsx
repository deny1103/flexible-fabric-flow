
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { Calendar, Download, FileText, Plus, Trash, ScissorsSquare, Shirt, CheckSquare, PaintBucket } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import { useNavigate } from 'react-router-dom';

const ProductionReports = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<string>('2023-09-01');
  const [endDate, setEndDate] = useState<string>('2023-09-30');
  const [reports, setReports] = useState([
    { id: 1, title: 'Laporan Cutting - September 2023', type: 'cutting', date: '2023-09-30', status: 'Completed' },
    { id: 2, title: 'Laporan Sewing - September 2023', type: 'sewing', date: '2023-09-30', status: 'Pending' },
    { id: 3, title: 'Laporan QC - September 2023', type: 'qc', date: '2023-09-30', status: 'Completed' },
    { id: 4, title: 'Laporan Finishing - September 2023', type: 'finishing', date: '2023-09-30', status: 'Pending' },
    { id: 5, title: 'Perbandingan Finish IN/OUT - Q3 2023', type: 'comparison', date: '2023-09-30', status: 'Completed' },
  ]);

  const handleAddReport = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const newReport = {
      id: reports.length + 1,
      title: formData.get('title') as string,
      type: formData.get('type') as string,
      date: formData.get('date') as string,
      status: 'Pending'
    };
    
    setReports([...reports, newReport]);
    toast({
      title: "Laporan ditambahkan",
      description: "Laporan produksi baru telah berhasil ditambahkan",
    });
    
    // Reset the form
    e.currentTarget.reset();
  };

  const handleDeleteReport = (id: number) => {
    setReports(reports.filter(report => report.id !== id));
    toast({
      title: "Laporan dihapus",
      description: "Laporan produksi telah berhasil dihapus",
    });
  };

  const handleDateFilter = () => {
    toast({
      title: "Filter periode diterapkan",
      description: `Menampilkan data dari ${startDate} hingga ${endDate}`,
    });
  };

  const navigateToDetail = (type: string) => {
    if (type === 'cutting') {
      navigate('/reports/production/cutting');
    } else if (type === 'sewing') {
      navigate('/reports/production/sewing');
    } else if (type === 'qc') {
      navigate('/reports/production/qc');
    } else if (type === 'finishing') {
      navigate('/reports/production/finishing');
    } else if (type === 'comparison') {
      navigate('/reports/production/comparison');
    }
  };

  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Laporan Produksi</h1>
            <p className="text-muted-foreground mt-1">
              Detail laporan dan analisis produksi
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
                    Tambahkan detail laporan produksi baru ke dalam sistem
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
                      <Select name="type" defaultValue="cutting">
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Pilih tipe laporan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cutting">Cutting</SelectItem>
                          <SelectItem value="sewing">Sewing</SelectItem>
                          <SelectItem value="qc">QC</SelectItem>
                          <SelectItem value="finishing">Finishing</SelectItem>
                          <SelectItem value="comparison">Perbandingan Finish IN/OUT</SelectItem>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigateToDetail('cutting')}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <ScissorsSquare className="h-5 w-5" />
                <div>
                  <CardTitle>Laporan Cutting</CardTitle>
                  <CardDescription>Laporan proses dan hasil cutting</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-muted-foreground">Klik untuk melihat laporan cutting</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigateToDetail('sewing')}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shirt className="h-5 w-5" />
                <div>
                  <CardTitle>Laporan Sewing</CardTitle>
                  <CardDescription>Laporan proses dan hasil sewing</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-muted-foreground">Klik untuk melihat laporan sewing</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigateToDetail('qc')}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckSquare className="h-5 w-5" />
                <div>
                  <CardTitle>Laporan QC</CardTitle>
                  <CardDescription>Laporan quality control</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-muted-foreground">Klik untuk melihat laporan quality control</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigateToDetail('finishing')}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <PaintBucket className="h-5 w-5" />
                <div>
                  <CardTitle>Laporan Finishing</CardTitle>
                  <CardDescription>Laporan proses dan hasil finishing</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-muted-foreground">Klik untuk melihat laporan finishing</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigateToDetail('comparison')}>
          <CardHeader>
            <CardTitle>Perbandingan Finish IN vs Finish OUT</CardTitle>
            <CardDescription>Analisis input dan output proses finishing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <p className="text-muted-foreground">Klik untuk melihat grafik perbandingan finish IN vs OUT</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Daftar Laporan Produksi</CardTitle>
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
                  {reports.map((report) => (
                    <tr key={report.id} className="border-b">
                      <td className="p-3">{report.title}</td>
                      <td className="p-3">
                        {report.type === 'cutting' ? 'Cutting' : 
                         report.type === 'sewing' ? 'Sewing' : 
                         report.type === 'qc' ? 'QC' : 
                         report.type === 'finishing' ? 'Finishing' : 'Perbandingan Finish IN/OUT'}
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

export default ProductionReports;
