
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageTransition from '@/components/layout/PageTransition';

const FinancePage = () => {
  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Keuangan & Pembayaran</h1>
          <p className="text-muted-foreground mt-1">
            Manajemen keuangan dan pembayaran produksi
          </p>
        </div>
        
        <Tabs defaultValue="payments" className="w-full">
          <TabsList className="w-full max-w-md grid grid-cols-2">
            <TabsTrigger value="payments">Manajemen Pembayaran</TabsTrigger>
            <TabsTrigger value="reports">Laporan Keuangan</TabsTrigger>
          </TabsList>
          
          <TabsContent value="payments" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>RCA Admin</CardTitle>
                <CardDescription>Manajemen rekening, gaji, dan pembayaran</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="salary" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="salary">Gaji</TabsTrigger>
                    <TabsTrigger value="maklun">Maklun</TabsTrigger>
                    <TabsTrigger value="fullorder">Full Order</TabsTrigger>
                  </TabsList>
                  <TabsContent value="salary" className="mt-4">
                    <div className="h-[300px] flex items-center justify-center">
                      <p className="text-muted-foreground">Data Penggajian Karyawan akan ditampilkan di sini</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="maklun" className="mt-4">
                    <div className="h-[300px] flex items-center justify-center">
                      <p className="text-muted-foreground">Data Pembayaran Maklun akan ditampilkan di sini</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="fullorder" className="mt-4">
                    <div className="h-[300px] flex items-center justify-center">
                      <p className="text-muted-foreground">Data Pembayaran Full Order akan ditampilkan di sini</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Potongan/Tambahan</CardTitle>
                <CardDescription>Penambahan dan pengurangan gaji</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="permissions" className="w-full">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="permissions">Izin</TabsTrigger>
                    <TabsTrigger value="leave">Cuti</TabsTrigger>
                    <TabsTrigger value="sick">Sakit</TabsTrigger>
                    <TabsTrigger value="overtime">Lembur</TabsTrigger>
                    <TabsTrigger value="bonus">Bonus</TabsTrigger>
                  </TabsList>
                  <TabsContent value="permissions" className="mt-4">
                    <div className="h-[240px] flex items-center justify-center">
                      <p className="text-muted-foreground">Data Izin Karyawan akan ditampilkan di sini</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="leave" className="mt-4">
                    <div className="h-[240px] flex items-center justify-center">
                      <p className="text-muted-foreground">Data Cuti Karyawan akan ditampilkan di sini</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="sick" className="mt-4">
                    <div className="h-[240px] flex items-center justify-center">
                      <p className="text-muted-foreground">Data Sakit Karyawan akan ditampilkan di sini</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="overtime" className="mt-4">
                    <div className="h-[240px] flex items-center justify-center">
                      <p className="text-muted-foreground">Data Lembur Karyawan akan ditampilkan di sini</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="bonus" className="mt-4">
                    <div className="h-[240px] flex items-center justify-center">
                      <p className="text-muted-foreground">Data Bonus Karyawan akan ditampilkan di sini</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Laporan RCA</CardTitle>
                  <CardDescription>Laporan rekening keuangan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <p className="text-muted-foreground">Laporan RCA akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Laporan Pengeluaran Produksi</CardTitle>
                  <CardDescription>Laporan biaya produksi</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <p className="text-muted-foreground">Laporan pengeluaran produksi akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  );
};

export default FinancePage;
