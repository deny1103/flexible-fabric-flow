
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/Badge';
import PageTransition from '@/components/layout/PageTransition';

const ProductionPage = () => {
  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Produksi</h1>
          <p className="text-muted-foreground mt-1">
            Manajemen dan monitoring produksi garmen
          </p>
        </div>
        
        <Tabs defaultValue="planning" className="w-full">
          <TabsList className="w-full max-w-md grid grid-cols-2">
            <TabsTrigger value="planning">Perencanaan Produksi</TabsTrigger>
            <TabsTrigger value="process">Proses Produksi</TabsTrigger>
          </TabsList>
          
          <TabsContent value="planning" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Perencanaan Bahan Baku & Aksesoris</CardTitle>
                  <CardDescription>Manajemen kebutuhan material produksi</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-background p-4 rounded-lg border">
                      <p className="font-medium">PO #2023051 - Kemeja Print Sablon</p>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Kain Katun 30s</span>
                          <span>120 kg</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Benang Jahit</span>
                          <span>24 lusin</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Kancing Kemeja</span>
                          <span>1200 pcs</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-background p-4 rounded-lg border">
                      <p className="font-medium">PO #2023052 - Kaos Polos Reguler</p>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Kain PE 20s</span>
                          <span>80 kg</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Benang Jahit</span>
                          <span>15 lusin</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Label Tag</span>
                          <span>500 pcs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Perencanaan Cutting</CardTitle>
                  <CardDescription>Jadwal dan alokasi proses cutting</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-background p-4 rounded-lg border">
                      <div className="flex justify-between">
                        <p className="font-medium">PO #2023051</p>
                        <Badge>Prioritas</Badge>
                      </div>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Jadwal Cutting</span>
                          <span>12 Mei 2023</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Target Produksi</span>
                          <span>250 pcs</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>PIC</span>
                          <span>Dedi Santoso</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-background p-4 rounded-lg border">
                      <div className="flex justify-between">
                        <p className="font-medium">PO #2023052</p>
                        <Badge variant="secondary">Normal</Badge>
                      </div>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Jadwal Cutting</span>
                          <span>14 Mei 2023</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Target Produksi</span>
                          <span>500 pcs</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>PIC</span>
                          <span>Irman Wijaya</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Perencanaan Sewing</CardTitle>
                  <CardDescription>Jadwal dan alokasi proses sewing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[180px] flex items-center justify-center">
                    <p className="text-muted-foreground">Data perencanaan sewing akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Perencanaan Finishing</CardTitle>
                  <CardDescription>Jadwal dan alokasi proses finishing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[180px] flex items-center justify-center">
                    <p className="text-muted-foreground">Data perencanaan finishing akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="process" className="mt-6 space-y-6">
            <Tabs defaultValue="cutting" className="w-full">
              <TabsList className="w-full max-w-xl mb-6 grid grid-cols-4">
                <TabsTrigger value="cutting">Cutting</TabsTrigger>
                <TabsTrigger value="sewing">Sewing</TabsTrigger>
                <TabsTrigger value="qc">QC</TabsTrigger>
                <TabsTrigger value="finishing">Finishing</TabsTrigger>
              </TabsList>
              
              <TabsContent value="cutting" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Surat Instruksi Cutting</CardTitle>
                    <CardDescription>Instruksi dan petunjuk proses cutting</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[240px] flex items-center justify-center">
                      <p className="text-muted-foreground">Daftar instruksi cutting akan ditampilkan di sini</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Realisasi Cutting</CardTitle>
                    <CardDescription>Data aktual hasil proses cutting</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[240px] flex items-center justify-center">
                      <p className="text-muted-foreground">Data realisasi cutting akan ditampilkan di sini</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="sewing" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Input Data & Log Data Sewing</CardTitle>
                    <CardDescription>Pencatatan proses sewing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[500px] flex items-center justify-center">
                      <p className="text-muted-foreground">Form dan log data sewing akan ditampilkan di sini</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="qc" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Input Data & Log Data QC</CardTitle>
                    <CardDescription>Pencatatan proses quality control</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[500px] flex items-center justify-center">
                      <p className="text-muted-foreground">Form dan log data quality control akan ditampilkan di sini</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="finishing" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Input Data & Log Data Finishing</CardTitle>
                    <CardDescription>Pencatatan proses finishing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[500px] flex items-center justify-center">
                      <p className="text-muted-foreground">Form dan log data finishing akan ditampilkan di sini</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  );
};

export default ProductionPage;
