
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { Plus, Trash, FileText, Edit } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';

type Size = {
  id: number;
  code: string;
  name: string;
  category: string;
  description: string;
};

const SizesMaster = () => {
  const [sizes, setSizes] = useState<Size[]>([
    { id: 1, code: 'S', name: 'Small', category: 'Dewasa', description: 'Ukuran kecil untuk dewasa' },
    { id: 2, code: 'M', name: 'Medium', category: 'Dewasa', description: 'Ukuran sedang untuk dewasa' },
    { id: 3, code: 'L', name: 'Large', category: 'Dewasa', description: 'Ukuran besar untuk dewasa' },
    { id: 4, code: 'XL', name: 'Extra Large', category: 'Dewasa', description: 'Ukuran ekstra besar untuk dewasa' },
    { id: 5, code: 'XXL', name: 'Double Extra Large', category: 'Dewasa', description: 'Ukuran ekstra besar plus untuk dewasa' },
    { id: 6, code: 'S-K', name: 'Small Kids', category: 'Anak', description: 'Ukuran kecil untuk anak-anak' },
  ]);
  
  const [sizeToDelete, setSizeToDelete] = useState<number | null>(null);
  
  const handleAddSize = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const newSize: Size = {
      id: sizes.length > 0 ? Math.max(...sizes.map(s => s.id)) + 1 : 1,
      code: formData.get('code') as string,
      name: formData.get('name') as string,
      category: formData.get('category') as string,
      description: formData.get('description') as string,
    };
    
    setSizes([...sizes, newSize]);
    toast({
      title: "Ukuran ditambahkan",
      description: `Ukuran ${newSize.name} telah berhasil ditambahkan`,
    });
    
    // Reset the form
    e.currentTarget.reset();
  };

  const handleDeleteSize = (id: number) => {
    setSizes(sizes.filter(size => size.id !== id));
    toast({
      title: "Ukuran dihapus",
      description: "Data ukuran telah berhasil dihapus",
    });
    setSizeToDelete(null);
  };

  const generateSizeReport = () => {
    toast({
      title: "Laporan ukuran",
      description: "Laporan data ukuran sedang dibuat dan akan tersedia segera",
    });
  };

  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Ukuran</h1>
            <p className="text-muted-foreground mt-1">
              Manajemen data master ukuran produk
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus size={16} />
                  <span>Tambah Ukuran</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Tambah Ukuran Baru</DialogTitle>
                  <DialogDescription>
                    Tambahkan data ukuran baru ke dalam sistem
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleAddSize}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="code" className="text-right">
                        Kode
                      </Label>
                      <Input id="code" name="code" className="col-span-3" required />
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Nama
                      </Label>
                      <Input id="name" name="name" className="col-span-3" required />
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="category" className="text-right">
                        Kategori
                      </Label>
                      <Select name="category" defaultValue="Dewasa">
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Pilih kategori" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Dewasa">Dewasa</SelectItem>
                          <SelectItem value="Anak">Anak</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="description" className="text-right">
                        Deskripsi
                      </Label>
                      <Input id="description" name="description" className="col-span-3" />
                    </div>
                  </div>
                  
                  <DialogFooter>
                    <Button type="submit">Simpan</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" className="flex items-center gap-2" onClick={generateSizeReport}>
              <FileText size={16} />
              <span>Buat Laporan</span>
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">Semua</TabsTrigger>
            <TabsTrigger value="adult">Dewasa</TabsTrigger>
            <TabsTrigger value="kids">Anak</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Kode</th>
                      <th className="text-left p-4">Nama</th>
                      <th className="text-left p-4">Kategori</th>
                      <th className="text-left p-4">Deskripsi</th>
                      <th className="text-right p-4">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizes.map((size) => (
                      <tr key={size.id} className="border-b">
                        <td className="p-4 font-medium">{size.code}</td>
                        <td className="p-4">{size.name}</td>
                        <td className="p-4">
                          <Badge variant={size.category === 'Dewasa' ? 'default' : 'secondary'}>
                            {size.category}
                          </Badge>
                        </td>
                        <td className="p-4">{size.description}</td>
                        <td className="p-4 text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="ghost" size="icon">
                              <Edit size={16} />
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="ghost" size="icon" onClick={() => setSizeToDelete(size.id)}>
                                  <Trash size={16} />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Hapus Ukuran</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Apakah Anda yakin ingin menghapus ukuran {size.name}?
                                    Tindakan ini tidak dapat dibatalkan.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Batal</AlertDialogCancel>
                                  <AlertDialogAction onClick={() => handleDeleteSize(size.id)}>
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
          
          <TabsContent value="adult" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Kode</th>
                      <th className="text-left p-4">Nama</th>
                      <th className="text-left p-4">Deskripsi</th>
                      <th className="text-right p-4">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizes
                      .filter(size => size.category === 'Dewasa')
                      .map((size) => (
                        <tr key={size.id} className="border-b">
                          <td className="p-4 font-medium">{size.code}</td>
                          <td className="p-4">{size.name}</td>
                          <td className="p-4">{size.description}</td>
                          <td className="p-4 text-right">
                            <div className="flex justify-end space-x-2">
                              <Button variant="ghost" size="icon">
                                <Edit size={16} />
                              </Button>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="ghost" size="icon" onClick={() => setSizeToDelete(size.id)}>
                                    <Trash size={16} />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Hapus Ukuran</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Apakah Anda yakin ingin menghapus ukuran {size.name}?
                                      Tindakan ini tidak dapat dibatalkan.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Batal</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => handleDeleteSize(size.id)}>
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
          
          <TabsContent value="kids" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Kode</th>
                      <th className="text-left p-4">Nama</th>
                      <th className="text-left p-4">Deskripsi</th>
                      <th className="text-right p-4">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizes
                      .filter(size => size.category === 'Anak')
                      .map((size) => (
                        <tr key={size.id} className="border-b">
                          <td className="p-4 font-medium">{size.code}</td>
                          <td className="p-4">{size.name}</td>
                          <td className="p-4">{size.description}</td>
                          <td className="p-4 text-right">
                            <div className="flex justify-end space-x-2">
                              <Button variant="ghost" size="icon">
                                <Edit size={16} />
                              </Button>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="ghost" size="icon" onClick={() => setSizeToDelete(size.id)}>
                                    <Trash size={16} />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Hapus Ukuran</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Apakah Anda yakin ingin menghapus ukuran {size.name}?
                                      Tindakan ini tidak dapat dibatalkan.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Batal</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => handleDeleteSize(size.id)}>
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

export default SizesMaster;
