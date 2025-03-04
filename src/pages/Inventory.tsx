
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge'; // Fix casing to lowercase
import PageTransition from '@/components/layout/PageTransition';

const InventoryPage = () => {
  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Inventory & Gudang</h1>
          <p className="text-muted-foreground mt-1">
            Manajemen inventaris bahan baku dan produk jadi
          </p>
        </div>
        
        <Tabs defaultValue="stock" className="w-full">
          <TabsList className="w-full max-w-md grid grid-cols-3">
            <TabsTrigger value="stock">Manajemen Stok</TabsTrigger>
            <TabsTrigger value="movement">Penerimaan & Pengeluaran</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring Stok</TabsTrigger>
          </TabsList>
          
          <TabsContent value="stock" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Data Inventory Bahan Baku</CardTitle>
                  <CardDescription>Daftar dan ketersediaan bahan baku</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Kain Katun 30s', code: 'FBR-001', stock: '125kg', minStock: '50kg', status: 'Baik' },
                      { name: 'Kain PE 20s', code: 'FBR-002', stock: '80kg', minStock: '40kg', status: 'Baik' },
                      { name: 'Kain Fleece', code: 'FBR-003', stock: '30kg', minStock: '35kg', status: 'Menipis' },
                      { name: 'Benang Jahit', code: 'ACC-001', stock: '45 lusin', minStock: '20 lusin', status: 'Baik' },
                      { name: 'Kancing Kemeja', code: 'ACC-002', stock: '2000 pcs', minStock: '1000 pcs', status: 'Baik' },
                    ].map((item) => (
                      <div key={item.code} className="flex justify-between items-center p-3 bg-background rounded-lg border">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-xs text-muted-foreground">Kode: {item.code}</p>
                        </div>
                        <div className="text-right">
                          <p>{item.stock} <span className="text-xs text-muted-foreground">(Min: {item.minStock})</span></p>
                          <Badge 
                            variant={item.status === 'Baik' ? 'success' : item.status === 'Menipis' ? 'warning' : 'destructive'}
                            className="mt-1"
                          >
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Data Stok Produk Jadi</CardTitle>
                  <CardDescription>Daftar dan ketersediaan produk jadi</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Kemeja Print Sablon', code: 'PFN-001', stock: '120 pcs', size: 'S, M, L, XL', status: 'Tersedia' },
                      { name: 'Kaos Polos Hitam', code: 'PFN-002', stock: '85 pcs', size: 'M, L, XL', status: 'Tersedia' },
                      { name: 'Jaket Hoodie', code: 'PFN-003', stock: '15 pcs', size: 'L, XL', status: 'Terbatas' },
                      { name: 'Celana Training', code: 'PFN-004', stock: '0 pcs', size: 'All Size', status: 'Habis' },
                    ].map((item) => (
                      <div key={item.code} className="flex justify-between items-center p-3 bg-background rounded-lg border">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-xs text-muted-foreground">Kode: {item.code} | Ukuran: {item.size}</p>
                        </div>
                        <div className="text-right">
                          <p>{item.stock}</p>
                          <Badge 
                            variant={
                              item.status === 'Tersedia' ? 'success' : 
                              item.status === 'Terbatas' ? 'warning' : 
                              'destructive'
                            }
                            className="mt-1"
                          >
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="movement" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Input Data & Log Data Gudang IN</CardTitle>
                  <CardDescription>Pencatatan penerimaan barang</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <p className="text-muted-foreground">Form dan log data penerimaan barang akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Input Data & Log Data Gudang OUT</CardTitle>
                  <CardDescription>Pencatatan pengeluaran barang</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <p className="text-muted-foreground">Form dan log data pengeluaran barang akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="monitoring" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notifikasi Stok Menipis</CardTitle>
                  <CardDescription>Peringatan bahan baku hampir habis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Kain Fleece', code: 'FBR-003', current: '30kg', min: '35kg', status: 'Menipis' },
                      { name: 'Label Brand', code: 'ACC-005', current: '250 pcs', min: '300 pcs', status: 'Menipis' },
                      { name: 'Resleting YKK', code: 'ACC-008', current: '45 pcs', min: '50 pcs', status: 'Menipis' },
                    ].map((item) => (
                      <div key={item.code} className="flex justify-between items-center p-3 bg-background rounded-lg border">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-xs text-muted-foreground">Kode: {item.code}</p>
                        </div>
                        <div className="text-right">
                          <p>
                            <span className="text-orange-500 font-medium">{item.current}</span>
                            <span className="text-xs text-muted-foreground"> / min {item.min}</span>
                          </p>
                          <Badge variant="warning" className="mt-1">
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Analisis Penggunaan Bahan</CardTitle>
                  <CardDescription>Tren dan pola konsumsi bahan baku</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <p className="text-muted-foreground">Grafik analisis penggunaan bahan akan ditampilkan di sini</p>
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

export default InventoryPage;
