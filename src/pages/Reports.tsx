
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageTransition from '@/components/layout/PageTransition';
import { useNavigate, useLocation } from 'react-router-dom';

const ReportsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleTabChange = (value: string) => {
    if (value === 'production') {
      navigate('/reports/production');
    } else if (value === 'sales') {
      navigate('/reports/sales');
    }
  };
  
  useEffect(() => {
    // If we're on the main reports page without a specific tab, redirect to production reports
    if (location.pathname === '/reports') {
      navigate('/reports/production');
    }
  }, [location.pathname, navigate]);
  
  // Determine which tab is active based on the current route
  const activeTab = location.pathname.includes('/reports/sales') 
    ? 'sales' 
    : 'production';
  
  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Laporan & Analisis</h1>
          <p className="text-muted-foreground mt-1">
            Laporan dan analisis data produksi dan penjualan
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="w-full max-w-md grid grid-cols-2">
            <TabsTrigger value="production">Laporan Produksi</TabsTrigger>
            <TabsTrigger value="sales">Laporan Penjualan</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </PageTransition>
  );
};

export default ReportsPage;
