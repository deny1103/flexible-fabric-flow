
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { Calendar } from 'lucide-react';

interface PeriodSelectorProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onApplyFilter: () => void;
}

const PeriodSelector: React.FC<PeriodSelectorProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onApplyFilter,
}) => {
  return (
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
              onChange={(e) => onStartDateChange(e.target.value)}
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
              onChange={(e) => onEndDateChange(e.target.value)}
              className="col-span-3" 
            />
          </div>
        </div>
        
        <DialogFooter>
          <Button onClick={onApplyFilter}>Terapkan Filter</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PeriodSelector;
