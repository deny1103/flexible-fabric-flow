
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { FilePlus, Plus, Calendar } from 'lucide-react';

interface CuttingReportFormProps {
  onAddReport: (report: any) => void;
  onGenerateReport: (type: string) => void;
}

const CuttingReportForm: React.FC<CuttingReportFormProps> = ({ 
  onAddReport, 
  onGenerateReport 
}) => {
  const handleAddReport = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const newReport = {
      id: Date.now(), // Using timestamp as a temporary ID
      date: formData.get('date') as string,
      title: formData.get('title') as string,
      type: formData.get('type') as string,
      status: 'Pending'
    };
    
    onAddReport(newReport);
    toast({
      title: "Laporan ditambahkan",
      description: "Laporan baru telah berhasil ditambahkan",
    });
    
    // Reset the form
    form.reset();
  };

  return (
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
            <Button onClick={() => onGenerateReport('Harian')} className="flex items-center justify-start gap-2">
              <Calendar size={16} />
              <span>Laporan Harian</span>
            </Button>
            
            <Button onClick={() => onGenerateReport('Mingguan')} className="flex items-center justify-start gap-2">
              <Calendar size={16} />
              <span>Laporan Mingguan</span>
            </Button>
            
            <Button onClick={() => onGenerateReport('Bulanan')} className="flex items-center justify-start gap-2">
              <Calendar size={16} />
              <span>Laporan Bulanan</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CuttingReportForm;
