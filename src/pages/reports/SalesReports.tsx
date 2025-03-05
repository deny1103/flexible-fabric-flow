
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import PageTransition from '@/components/layout/PageTransition';
import { useNavigate } from 'react-router-dom';
import SalesReportForm from '@/components/reports/sales/SalesReportForm';
import PeriodSelector from '@/components/reports/common/PeriodSelector';
import ActivePeriodCard from '@/components/reports/common/ActivePeriodCard';
import SalesReportCards from '@/components/reports/sales/SalesReportCards';
import SalesReportList from '@/components/reports/sales/SalesReportList';

interface SalesReport {
  id: number;
  title: string;
  type: string;
  date: string;
  status: string;
}

const SalesReports = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<string>('2023-09-01');
  const [endDate, setEndDate] = useState<string>('2023-09-30');
  const [salesReports, setSalesReports] = useState<SalesReport[]>([
    { id: 1, title: 'Laporan Penjualan Harian - September 2023', type: 'daily', date: '2023-09-30', status: 'Completed' },
    { id: 2, title: 'Laporan Penjualan Mingguan - Q3 2023', type: 'weekly', date: '2023-09-30', status: 'Pending' },
    { id: 3, title: 'Laporan Penjualan Bulanan - Q3 2023', type: 'monthly', date: '2023-09-30', status: 'Completed' },
  ]);

  const handleAddReport = (newReport: SalesReport) => {
    setSalesReports([...salesReports, newReport]);
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
            <SalesReportForm onAddReport={handleAddReport} />
            
            <PeriodSelector
              startDate={startDate}
              endDate={endDate}
              onStartDateChange={setStartDate}
              onEndDateChange={setEndDate}
              onApplyFilter={handleDateFilter}
            />
          </div>
        </div>
        
        <ActivePeriodCard
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          onApplyFilter={handleDateFilter}
        />
        
        <SalesReportCards onNavigateToDetail={navigateToDetail} />
        
        <SalesReportList
          reports={salesReports}
          onDeleteReport={handleDeleteReport}
        />
      </div>
    </PageTransition>
  );
};

export default SalesReports;
