
import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import PageTransition from '@/components/layout/PageTransition';
import CuttingReportForm from '@/components/reports/production/cutting/CuttingReportForm';
import CuttingReportList from '@/components/reports/production/cutting/CuttingReportList';
import CuttingMetrics from '@/components/reports/production/cutting/CuttingMetrics';

interface Report {
  id: number;
  date: string;
  title: string;
  type: string;
  status: string;
}

const CuttingReport = () => {
  const [reports, setReports] = useState<Report[]>([
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

  const handleAddReport = (newReport: Report) => {
    setReports([...reports, newReport]);
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
          
          <CuttingReportForm 
            onAddReport={handleAddReport}
            onGenerateReport={generateReport}
          />
        </div>
        
        <CuttingReportList 
          reports={reports}
          onDeleteReport={handleDeleteReport}
        />
        
        <CuttingMetrics />
      </div>
    </PageTransition>
  );
};

export default CuttingReport;
