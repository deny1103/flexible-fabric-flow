
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CalendarIcon } from 'lucide-react';

interface ActivePeriodCardProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onApplyFilter: () => void;
  title?: string;
  description?: string;
  buttonText?: string;
}

const ActivePeriodCard: React.FC<ActivePeriodCardProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onApplyFilter,
  title = "Periode Aktif",
  description,
  buttonText = "Terapkan",
}) => {
  const defaultDescription = `Menampilkan data dari ${startDate} hingga ${endDate}`;

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
              {description || defaultDescription}
            </CardDescription>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-muted-foreground hidden md:block" />
              <Input 
                type="date" 
                value={startDate} 
                onChange={(e) => onStartDateChange(e.target.value)}
                className="w-full md:w-40"
              />
            </div>
            <span className="hidden md:flex items-center mx-1">hingga</span>
            <span className="flex md:hidden items-center mx-1">-</span>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-muted-foreground hidden md:block" />
              <Input 
                type="date" 
                value={endDate} 
                onChange={(e) => onEndDateChange(e.target.value)}
                className="w-full md:w-40"
              />
            </div>
            <Button onClick={onApplyFilter} size="sm" className="mt-2 md:mt-0">
              {buttonText}
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ActivePeriodCard;
