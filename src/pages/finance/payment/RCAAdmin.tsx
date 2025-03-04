
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { FilePlus, Plus, Trash, FileText, Download } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';

type RCARecord = {
  id: number;
  date: string;
  type: 'Gaji' | 'Maklun' | 'Full Order';
  poNumber: string;
  amount: number;
  status: 'Pending' | 'Approved' | 'Paid';
};

const RCAAdmin = () => {
  const [records, setRecords] = useState<RCARecord[]>([
    { id: 1, date: '2023-09-15', type: 'Gaji', poNumber: 'PO-001', amount: 15000000, status: 'Approved' },
    { id: 2, date: '2023-09-18', type: 'Maklun', poNumber: 'PO-002', amount: 8500000, status: 'Pending' },
    { id: 3, date: '2023-09-22', type: 'Full Order', poNumber: 'PO-003', amount: 25000000, status: 'Paid' },
  ]);
  
  const handleAddRecord = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const newRecord: RCARecord = {
      id: records.length > 0 ? Math.max(...records.map(r => r.id)) + 1 : 1,
      date: formData.get('date') as string,
      type: formData.get('type') as 'Gaji' | 'Maklun' | 'Full Order',
      poNumber: formData.get('poNumber') as string,
      amount: Number(formData.get('amount')),
      status: 'Pending',
    };
    
    setRecords([...records, newRecord]);
    toast({
      title: "RCA ditambahkan",
      description: `RCA untuk ${newRecord.poNumber} telah berhasil ditambahkan`,
    });
    
    // Reset the form
    e.currentTarget.reset();
  };

  const handleDeleteRecord = (id: number) => {
    setRecords(records.filter(record => record.id !== id));
    toast({
      title: "RCA dihapus",
      description: "Data RCA telah berhasil dihapus",
    });
  };

  const generateReport = (type: string) => {
    toast({
      title: "Laporan sedang dibuat",
      description: `Laporan RCA ${type} sedang dibuat dan akan tersedia segera`,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
  };

  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">RCA Admin</h1>
            <p className="text-muted-foreground mt-1">
              RCA Gaji, Maklun, Full Order
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus size={16} />
                  <span>Tambah RCA</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Tambah RCA Baru</DialogTitle>
                  <DialogDescription>
                    Tambahkan data RCA baru ke dalam sistem
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleAddRecord}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="date" className="text-right">
                        Tanggal
                      </Label>
                      <Input id="date" name="date" type="date" className="col-span-3" required />
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="type" className="text-right">
                        Tipe RCA
                      </Label>
                      <Select name="type" defaultValue="Gaji">
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Pilih tipe RCA" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Gaji">Gaji</SelectItem>
                          <SelectItem value="Maklun">Maklun</SelectItem>
                          <SelectItem value="Full Order">Full Order</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="poNumber" className="text-right">
                        Nomor PO
                      </Label>
                      <Input id="poNumber" name="poNumber" className="col-span-3" required />
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="amount" className="text-right">
                        Jumlah
                      </Label>
                      <Input id="amount" name="amount" type="number" className="col-span-3" required />
                    </div>
                  </div>
                  
                  <DialogFooter>
                    <Button type="submit">Simpan</Button>
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
                  <DialogTitle>Buat Laporan RCA</DialogTitle>
                  <DialogDescription>
                    Pilih tipe laporan yang ingin dibuat
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <Button onClick={() => generateReport('Gaji')} className="flex items-center justify-start gap-2">
                    <FileText size={16} />
                    <span>Laporan RCA Gaji</span>
                  </Button>
                  
                  <Button onClick={() => generateReport('Maklun')} className="flex items-center justify-start gap-2">
                    <FileText size={16} />
                    <span>Laporan RCA Maklun</span>
                  </Button>
                  
                  <Button onClick={() => generateReport('Full Order')} className="flex items-center justify-start gap-2">
                    <FileText size={16} />
                    <span>Laporan RCA Full Order</span>
                  </Button>
                  
                  <Button onClick={() => generateReport('Semua Tipe')} className="flex items-center justify-start gap-2">
                    <FileText size={16} />
                    <span>Laporan RCA Lengkap</span>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">Semua</TabsTrigger>
            <TabsTrigger value="gaji">Gaji</TabsTrigger>
            <TabsTrigger value="maklun">Maklun</TabsTrigger>
            <TabsTrigger value="fullorder">Full Order</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Tanggal</th>
                      <th className="text-left p-4">Tipe RCA</th>
                      <th className="text-left p-4">Nomor PO</th>
                      <th className="text-right p-4">Jumlah</th>
                      <th className="text-left p-4">Status</th>
                      <th className="text-right p-4">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records.map((record) => (
                      <tr key={record.id} className="border-b">
                        <td className="p-4">{record.date}</td>
                        <td className="p-4">{record.type}</td>
                        <td className="p-4">{record.poNumber}</td>
                        <td className="p-4 text-right">{formatCurrency(record.amount)}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 text-xs rounded-full 
                            ${record.status === 'Approved' ? 'bg-blue-100 text-blue-800' : 
                              record.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                              'bg-yellow-100 text-yellow-800'}`}>
                            {record.status}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="ghost" size="icon" onClick={() => toast({ title: "Laporan diunduh" })}>
                              <Download size={16} />
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <Trash size={16} />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Hapus RCA</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Apakah Anda yakin ingin menghapus RCA untuk {record.poNumber}?
                                    Tindakan ini tidak dapat dibatalkan.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Batal</AlertDialogCancel>
                                  <AlertDialogAction onClick={() => handleDeleteRecord(record.id)}>
                                    Hapus
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Filter views for other tabs */}
          <TabsContent value="gaji" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Tanggal</th>
                      <th className="text-left p-4">Nomor PO</th>
                      <th className="text-right p-4">Jumlah</th>
                      <th className="text-left p-4">Status</th>
                      <th className="text-right p-4">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records
                      .filter(record => record.type === 'Gaji')
                      .map((record) => (
                        <tr key={record.id} className="border-b">
                          <td className="p-4">{record.date}</td>
                          <td className="p-4">{record.poNumber}</td>
                          <td className="p-4 text-right">{formatCurrency(record.amount)}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 text-xs rounded-full 
                              ${record.status === 'Approved' ? 'bg-blue-100 text-blue-800' : 
                                record.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                                'bg-yellow-100 text-yellow-800'}`}>
                              {record.status}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex justify-end space-x-2">
                              <Button variant="ghost" size="icon" onClick={() => toast({ title: "Laporan diunduh" })}>
                                <Download size={16} />
                              </Button>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <Trash size={16} />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Hapus RCA</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Apakah Anda yakin ingin menghapus RCA untuk {record.poNumber}?
                                      Tindakan ini tidak dapat dibatalkan.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Batal</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => handleDeleteRecord(record.id)}>
                                      Hapus
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Create similar TabsContent for maklun and fullorder tabs */}
          <TabsContent value="maklun" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Tanggal</th>
                      <th className="text-left p-4">Nomor PO</th>
                      <th className="text-right p-4">Jumlah</th>
                      <th className="text-left p-4">Status</th>
                      <th className="text-right p-4">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records
                      .filter(record => record.type === 'Maklun')
                      .map((record) => (
                        <tr key={record.id} className="border-b">
                          <td className="p-4">{record.date}</td>
                          <td className="p-4">{record.poNumber}</td>
                          <td className="p-4 text-right">{formatCurrency(record.amount)}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 text-xs rounded-full 
                              ${record.status === 'Approved' ? 'bg-blue-100 text-blue-800' : 
                                record.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                                'bg-yellow-100 text-yellow-800'}`}>
                              {record.status}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex justify-end space-x-2">
                              <Button variant="ghost" size="icon" onClick={() => toast({ title: "Laporan diunduh" })}>
                                <Download size={16} />
                              </Button>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <Trash size={16} />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Hapus RCA</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Apakah Anda yakin ingin menghapus RCA untuk {record.poNumber}?
                                      Tindakan ini tidak dapat dibatalkan.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Batal</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => handleDeleteRecord(record.id)}>
                                      Hapus
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="fullorder" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Tanggal</th>
                      <th className="text-left p-4">Nomor PO</th>
                      <th className="text-right p-4">Jumlah</th>
                      <th className="text-left p-4">Status</th>
                      <th className="text-right p-4">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records
                      .filter(record => record.type === 'Full Order')
                      .map((record) => (
                        <tr key={record.id} className="border-b">
                          <td className="p-4">{record.date}</td>
                          <td className="p-4">{record.poNumber}</td>
                          <td className="p-4 text-right">{formatCurrency(record.amount)}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 text-xs rounded-full 
                              ${record.status === 'Approved' ? 'bg-blue-100 text-blue-800' : 
                                record.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                                'bg-yellow-100 text-yellow-800'}`}>
                              {record.status}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex justify-end space-x-2">
                              <Button variant="ghost" size="icon" onClick={() => toast({ title: "Laporan diunduh" })}>
                                <Download size={16} />
                              </Button>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <Trash size={16} />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Hapus RCA</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Apakah Anda yakin ingin menghapus RCA untuk {record.poNumber}?
                                      Tindakan ini tidak dapat dibatalkan.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Batal</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => handleDeleteRecord(record.id)}>
                                      Hapus
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  );
};

export default RCAAdmin;
