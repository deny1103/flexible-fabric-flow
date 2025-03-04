
import React, { useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageTransition from '@/components/layout/PageTransition';
import { useNavigate, useLocation } from 'react-router-dom';

const DataManagementPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleTabChange = (value: string) => {
    if (value === 'master') {
      navigate('/data/master');
    }
    // Add more tab navigation options as needed
  };
  
  useEffect(() => {
    // If we're on the main data management page without a specific tab, redirect to master data
    if (location.pathname === '/data') {
      navigate('/data/master');
    }
  }, [location.pathname, navigate]);
  
  // Determine which tab is active based on the current route
  const activeTab = 'master'; // Only one tab for now
  
  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manajemen Data</h1>
          <p className="text-muted-foreground mt-1">
            Pengaturan data master untuk aplikasi
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="w-full max-w-md">
            <TabsTrigger value="master" className="w-full">Data Master</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </PageTransition>
  );
};

export default DataManagementPage;
