
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { Calendar } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import { useNavigate, useLocation } from 'react-router-dom';

const ReportsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [startDate, setStartDate] = useState<string>('2023-09-01');
  const [endDate, setEndDate] = useState<string>('2023-09-30');
  
  const handleTabChange = (value: string) => {
    if (value === 'production') {
      navigate('/reports/production');
    } else if (value === 'sales') {
      navigate('/reports/sales');
    }
  };
  
  useEffect(() => {
    // If we're on the main reports page without a specific tab, redirect to production reports
    if (location.pathname === '/reports') {
      navigate('/reports/production');
    }
  }, [location.pathname, navigate]);
  
  // Determine which tab is active based on the current route
  const activeTab = location.pathname.includes('/reports/sales') 
    ? 'sales' 
    : 'production';
  
  const handleDateFilter = () => {
    toast({
      title: "Filter periode diterapkan",
      description: `Menampilkan data dari ${startDate} hingga ${endDate}`,
    });
  };

  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Laporan & Analisis</h1>
            <p className="text-muted-foreground mt-1">
              Laporan dan analisis data produksi dan penjualan
            </p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Pilih Periode</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Pilih Periode Laporan</DialogTitle>
                <DialogDescription>
                  Tentukan rentang waktu untuk semua laporan
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
        
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="w-full max-w-md grid grid-cols-2">
            <TabsTrigger value="production">Laporan Produksi</TabsTrigger>
            <TabsTrigger value="sales">Laporan Penjualan</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </PageTransition>
  );
};

export default ReportsPage;
