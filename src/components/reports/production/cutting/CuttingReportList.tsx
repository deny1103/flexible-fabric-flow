
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { toast } from '@/components/ui/use-toast';
import { Download, Trash } from 'lucide-react';

interface Report {
  id: number;
  date: string;
  title: string;
  type: string;
  status: string;
}

interface CuttingReportListProps {
  reports: Report[];
  onDeleteReport: (id: number) => void;
}

const CuttingReportList: React.FC<CuttingReportListProps> = ({ 
  reports, 
  onDeleteReport 
}) => {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList>
        <TabsTrigger value="all">Semua</TabsTrigger>
        <TabsTrigger value="daily">Harian</TabsTrigger>
        <TabsTrigger value="weekly">Mingguan</TabsTrigger>
        <TabsTrigger value="monthly">Bulanan</TabsTrigger>
      </TabsList>
      
      <TabsContent value="all" className="space-y-4">
        <ReportTable 
          reports={reports} 
          onDeleteReport={onDeleteReport} 
        />
      </TabsContent>
      
      <TabsContent value="daily" className="space-y-4">
        <ReportTable 
          reports={reports.filter(report => report.type === 'Daily')} 
          onDeleteReport={onDeleteReport} 
        />
      </TabsContent>
      
      <TabsContent value="weekly" className="space-y-4">
        <ReportTable 
          reports={reports.filter(report => report.type === 'Weekly')} 
          onDeleteReport={onDeleteReport} 
        />
      </TabsContent>
      
      <TabsContent value="monthly" className="space-y-4">
        <ReportTable 
          reports={reports.filter(report => report.type === 'Monthly')} 
          onDeleteReport={onDeleteReport} 
        />
      </TabsContent>
    </Tabs>
  );
};

interface ReportTableProps {
  reports: Report[];
  onDeleteReport: (id: number) => void;
}

const ReportTable: React.FC<ReportTableProps> = ({ reports, onDeleteReport }) => {
  return (
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
                  <Button variant="outline" size="icon" onClick={() => onDeleteReport(report.id)}>
                    <Trash size={16} />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CuttingReportList;
