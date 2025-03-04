
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageTransition from '@/components/layout/PageTransition';

const ReportsPage = () => {
  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Laporan & Analisis</h1>
          <p className="text-muted-foreground mt-1">
            Laporan dan analisis data produksi dan penjualan
          </p>
        </div>
        
        <Tabs defaultValue="production" className="w-full">
          <TabsList className="w-full max-w-md grid grid-cols-2">
            <TabsTrigger value="production">Laporan Produksi</TabsTrigger>
            <TabsTrigger value="sales">Laporan Penjualan</TabsTrigger>
          </TabsList>
          
          <TabsContent value="production" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Laporan Cutting</CardTitle>
                  <CardDescription>Laporan proses dan hasil cutting</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[240px] flex items-center justify-center">
                    <p className="text-muted-foreground">Laporan cutting akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Laporan Sewing</CardTitle>
                  <CardDescription>Laporan proses dan hasil sewing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[240px] flex items-center justify-center">
                    <p className="text-muted-foreground">Laporan sewing akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Laporan QC</CardTitle>
                  <CardDescription>Laporan quality control</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[240px] flex items-center justify-center">
                    <p className="text-muted-foreground">Laporan quality control akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Laporan Finishing</CardTitle>
                  <CardDescription>Laporan proses dan hasil finishing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[240px] flex items-center justify-center">
                    <p className="text-muted-foreground">Laporan finishing akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Perbandingan Finish IN vs Finish OUT</CardTitle>
                <CardDescription>Analisis input dan output proses finishing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">Grafik perbandingan finish IN vs OUT akan ditampilkan di sini</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sales" className="mt-6 space-y-6">
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
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  );
};

export default ReportsPage;
