
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PageTransition from '@/components/layout/PageTransition';

const SalesReports = () => {
  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Laporan Penjualan</h1>
          <p className="text-muted-foreground mt-1">
            Detail laporan dan analisis penjualan
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Penjualan Harian</CardTitle>
              <CardDescription>Laporan penjualan per hari</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-muted-foreground">Laporan penjualan harian akan ditampilkan di sini</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Data Penjualan Mingguan</CardTitle>
              <CardDescription>Laporan penjualan per minggu</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-muted-foreground">Laporan penjualan mingguan akan ditampilkan di sini</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Data Penjualan Bulanan</CardTitle>
              <CardDescription>Laporan penjualan per bulan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-muted-foreground">Laporan penjualan bulanan akan ditampilkan di sini</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Analisis Kinerja Produk</CardTitle>
            <CardDescription>Analisis performa penjualan per produk</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <p className="text-muted-foreground">Grafik analisis kinerja produk akan ditampilkan di sini</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
};

export default SalesReports;
