
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageTransition from '@/components/layout/PageTransition';

const AdminPage = () => {
  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin & User Role</h1>
          <p className="text-muted-foreground mt-1">
            Pengaturan dan manajemen pengguna sistem
          </p>
        </div>
        
        <Tabs defaultValue="access" className="w-full">
          <TabsList className="w-full max-w-md">
            <TabsTrigger value="access" className="w-full">Pengaturan Hak Akses</TabsTrigger>
          </TabsList>
          
          <TabsContent value="access" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Menu Creator</CardTitle>
                  <CardDescription>Manajemen daftar menu aplikasi</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <p className="text-muted-foreground">Menu creator akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Manajemen Divisi</CardTitle>
                  <CardDescription>Pengaturan divisi perusahaan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <p className="text-muted-foreground">Daftar divisi akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Manajemen User</CardTitle>
                  <CardDescription>Pengaturan pengguna aplikasi</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <p className="text-muted-foreground">Daftar pengguna akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Audit Log Aktivitas</CardTitle>
                  <CardDescription>Catatan aktivitas pengguna</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <p className="text-muted-foreground">Log aktivitas akan ditampilkan di sini</p>
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

export default AdminPage;
