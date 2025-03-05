
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CuttingMetrics: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Metrik & Statistik Cutting</CardTitle>
        <CardDescription>Statistik kinerja proses cutting (minggu ini)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricCard 
            title="Total Cutting" 
            value="1,248" 
            change="+8.2% dari minggu lalu" 
          />
          
          <MetricCard 
            title="Efisiensi Material" 
            value="92.6%" 
            change="+1.2% dari minggu lalu" 
          />
          
          <MetricCard 
            title="Kecepatan Cutting" 
            value="124 unit/jam" 
            change="+3.5% dari minggu lalu" 
          />
        </div>
      </CardContent>
    </Card>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{change}</p>
      </CardContent>
    </Card>
  );
};

export default CuttingMetrics;
