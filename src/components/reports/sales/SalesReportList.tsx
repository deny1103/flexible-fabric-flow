
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Download, Trash } from 'lucide-react';

interface SalesReport {
  id: number;
  title: string;
  type: string;
  date: string;
  status: string;
}

interface SalesReportListProps {
  reports: SalesReport[];
  onDeleteReport: (id: number) => void;
}

const SalesReportList: React.FC<SalesReportListProps> = ({ reports, onDeleteReport }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Daftar Laporan Penjualan</CardTitle>
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
                    {report.type === 'daily' ? 'Harian' : 
                     report.type === 'weekly' ? 'Mingguan' : 
                     report.type === 'monthly' ? 'Bulanan' : 'Kinerja Produk'}
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
                        onDeleteReport(report.id);
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
  );
};

export default SalesReportList;
