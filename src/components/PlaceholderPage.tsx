
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import PageTransition from '@/components/layout/PageTransition';

interface PlaceholderPageProps {
  title: string;
  description: string;
  path: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description, path }) => {
  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          <p className="text-muted-foreground mt-1">{description}</p>
        </div>
        
        <Card>
          <CardContent className="pt-6">
            <div className="h-[300px] flex flex-col items-center justify-center">
              <p className="text-lg font-medium text-center">{title}</p>
              <p className="text-muted-foreground text-center mt-2">Path: {path}</p>
              <p className="text-muted-foreground text-center mt-4">
                This is a placeholder page for the route. Content will be implemented in future iterations.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
};

export default PlaceholderPage;
