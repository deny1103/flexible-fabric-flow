
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageTransition from '@/components/layout/PageTransition';

const MasterData = () => {
  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Data Master</h1>
          <p className="text-muted-foreground mt-1">
            Manajemen data master aplikasi
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle>Daftar Bahan Baku</CardTitle>
                <CardDescription>Manajemen daftar bahan baku</CardDescription>
              </div>
              <Badge variant="outline">25 items</Badge>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-muted-foreground">Daftar bahan baku akan ditampilkan di sini</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle>Daftar Produk</CardTitle>
                <CardDescription>Manajemen daftar produk</CardDescription>
              </div>
              <Badge variant="outline">18 items</Badge>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-muted-foreground">Daftar produk akan ditampilkan di sini</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle>Ukuran</CardTitle>
                <CardDescription>Manajemen ukuran produk</CardDescription>
              </div>
              <Badge variant="outline">6 items</Badge>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-muted-foreground">Daftar ukuran akan ditampilkan di sini</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle>Tipe PO</CardTitle>
                <CardDescription>Manajemen tipe purchase order</CardDescription>
              </div>
              <Badge variant="outline">4 items</Badge>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-muted-foreground">Daftar tipe PO akan ditampilkan di sini</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle>Tipe Penjahit</CardTitle>
                <CardDescription>Manajemen kategori penjahit</CardDescription>
              </div>
              <Badge variant="outline">3 items</Badge>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-muted-foreground">Daftar tipe penjahit akan ditampilkan di sini</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle>Data Penjahit</CardTitle>
                <CardDescription>Manajemen data penjahit</CardDescription>
              </div>
              <Badge variant="outline">42 items</Badge>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-muted-foreground">Daftar penjahit akan ditampilkan di sini</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle>Tarif Jahit</CardTitle>
                <CardDescription>Manajemen tarif penjahitan</CardDescription>
              </div>
              <Badge variant="outline">15 items</Badge>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-muted-foreground">Daftar tarif jahit akan ditampilkan di sini</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle>Data Karyawan</CardTitle>
                <CardDescription>Manajemen data karyawan</CardDescription>
              </div>
              <Badge variant="outline">56 items</Badge>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-muted-foreground">Daftar karyawan akan ditampilkan di sini</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
};

export default MasterData;
