
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageTransition from '@/components/layout/PageTransition';

const DataManagementPage = () => {
  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manajemen Data</h1>
          <p className="text-muted-foreground mt-1">
            Pengaturan data master untuk aplikasi
          </p>
        </div>
        
        <Tabs defaultValue="master" className="w-full">
          <TabsList className="w-full max-w-md">
            <TabsTrigger value="master" className="w-full">Data Master</TabsTrigger>
          </TabsList>
          
          <TabsContent value="master" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daftar Bahan Baku</CardTitle>
                  <CardDescription>Manajemen daftar bahan baku</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[240px] flex items-center justify-center">
                    <p className="text-muted-foreground">Daftar bahan baku akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Daftar Produk</CardTitle>
                  <CardDescription>Manajemen daftar produk</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[240px] flex items-center justify-center">
                    <p className="text-muted-foreground">Daftar produk akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Ukuran</CardTitle>
                  <CardDescription>Manajemen ukuran produk</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[240px] flex items-center justify-center">
                    <p className="text-muted-foreground">Daftar ukuran akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Tipe PO</CardTitle>
                  <CardDescription>Manajemen tipe purchase order</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[240px] flex items-center justify-center">
                    <p className="text-muted-foreground">Daftar tipe PO akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Tipe Penjahit</CardTitle>
                  <CardDescription>Manajemen kategori penjahit</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[240px] flex items-center justify-center">
                    <p className="text-muted-foreground">Daftar tipe penjahit akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Data Penjahit</CardTitle>
                  <CardDescription>Manajemen data penjahit</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[240px] flex items-center justify-center">
                    <p className="text-muted-foreground">Daftar penjahit akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Tarif Jahit</CardTitle>
                  <CardDescription>Manajemen tarif penjahitan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[240px] flex items-center justify-center">
                    <p className="text-muted-foreground">Daftar tarif jahit akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Data Karyawan</CardTitle>
                  <CardDescription>Manajemen data karyawan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[240px] flex items-center justify-center">
                    <p className="text-muted-foreground">Daftar karyawan akan ditampilkan di sini</p>
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

export default DataManagementPage;
