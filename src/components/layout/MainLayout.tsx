
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

  const handleSidebarToggle = (collapsed: boolean) => {
    setIsSidebarCollapsed(collapsed);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar onToggle={handleSidebarToggle} />
      <main 
        className={cn(
          "flex-1 overflow-y-auto transition-all duration-300 ease-in-out",
          isSidebarCollapsed ? "ml-20" : "ml-64"
        )}
      >
        <AnimatePresence mode="wait">
          {children || <Outlet />}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default MainLayout;
