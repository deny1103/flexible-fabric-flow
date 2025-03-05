
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ActivePeriodCardProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onApplyFilter: () => void;
}

const ActivePeriodCard: React.FC<ActivePeriodCardProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onApplyFilter,
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Periode Aktif</CardTitle>
            <CardDescription>
              Menampilkan data dari {startDate} hingga {endDate}
            </CardDescription>
          </div>
          <div className="flex space-x-2">
            <Input 
              type="date" 
              value={startDate} 
              onChange={(e) => onStartDateChange(e.target.value)}
              className="w-40"
            />
            <span className="flex items-center">hingga</span>
            <Input 
              type="date" 
              value={endDate} 
              onChange={(e) => onEndDateChange(e.target.value)}
              className="w-40"
            />
            <Button onClick={onApplyFilter} size="sm">
              Terapkan
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ActivePeriodCard;
