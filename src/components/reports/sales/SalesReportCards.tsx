
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface SalesReportCardsProps {
  onNavigateToDetail: (type: string) => void;
}

const SalesReportCards: React.FC<SalesReportCardsProps> = ({ onNavigateToDetail }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigateToDetail('daily')}>
          <CardHeader>
            <CardTitle>Data Penjualan Harian</CardTitle>
            <CardDescription>Laporan penjualan per hari</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] flex items-center justify-center">
              <p className="text-muted-foreground">Klik untuk melihat laporan penjualan harian</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigateToDetail('weekly')}>
          <CardHeader>
            <CardTitle>Data Penjualan Mingguan</CardTitle>
            <CardDescription>Laporan penjualan per minggu</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] flex items-center justify-center">
              <p className="text-muted-foreground">Klik untuk melihat laporan penjualan mingguan</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigateToDetail('monthly')}>
          <CardHeader>
            <CardTitle>Data Penjualan Bulanan</CardTitle>
            <CardDescription>Laporan penjualan per bulan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] flex items-center justify-center">
              <p className="text-muted-foreground">Klik untuk melihat laporan penjualan bulanan</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigateToDetail('product')}>
        <CardHeader>
          <CardTitle>Analisis Kinerja Produk</CardTitle>
          <CardDescription>Analisis performa penjualan per produk</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center">
            <p className="text-muted-foreground">Klik untuk melihat analisis kinerja produk</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SalesReportCards;
