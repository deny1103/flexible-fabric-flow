
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { Plus } from 'lucide-react';

interface SalesReportFormProps {
  onAddReport: (report: any) => void;
}

const SalesReportForm: React.FC<SalesReportFormProps> = ({ onAddReport }) => {
  const handleAddReport = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const newReport = {
      id: Date.now(), // Using timestamp as a temporary ID
      title: formData.get('title') as string,
      type: formData.get('type') as string,
      date: formData.get('date') as string,
      status: 'Pending'
    };
    
    onAddReport(newReport);
    toast({
      title: "Laporan ditambahkan",
      description: "Laporan penjualan baru telah berhasil ditambahkan",
    });
    
    // Reset the form
    e.currentTarget.reset();
  };

  return (
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
  );
};

export default SalesReportForm;
