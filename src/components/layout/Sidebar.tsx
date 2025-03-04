
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  PackageOpen, 
  LayoutDashboard, 
  Package, 
  DollarSign, 
  FileText, 
  Database, 
  Users, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

type SidebarItem = {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: { name: string; path: string }[];
};

const sidebarItems: SidebarItem[] = [
  { 
    name: 'Dashboard', 
    path: '/', 
    icon: Home 
  },
  { 
    name: 'Produksi',
    path: '/production', 
    icon: Package,
    children: [
      { name: 'Perencanaan Produksi', path: '/production/planning' },
      { name: 'Proses Produksi', path: '/production/process' },
    ]
  },
  { 
    name: 'Inventory & Gudang', 
    path: '/inventory', 
    icon: PackageOpen,
    children: [
      { name: 'Manajemen Stok', path: '/inventory/stock' },
      { name: 'Penerimaan & Pengeluaran', path: '/inventory/movement' },
      { name: 'Monitoring Stok', path: '/inventory/monitoring' },
    ]
  },
  { 
    name: 'Keuangan', 
    path: '/finance', 
    icon: DollarSign,
    children: [
      { name: 'Manajemen Pembayaran', path: '/finance/payments' },
      { name: 'Laporan Keuangan', path: '/finance/reports' },
    ]
  },
  { 
    name: 'Laporan & Analisis', 
    path: '/reports', 
    icon: FileText,
    children: [
      { name: 'Laporan Produksi', path: '/reports/production' },
      { name: 'Laporan Penjualan', path: '/reports/sales' },
    ]
  },
  { 
    name: 'Manajemen Data', 
    path: '/data', 
    icon: Database,
    children: [
      { name: 'Data Master', path: '/data/master' },
    ]
  },
  { 
    name: 'Admin & User', 
    path: '/admin', 
    icon: Users,
    children: [
      { name: 'Pengaturan Hak Akses', path: '/admin/access' },
    ]
  },
];

interface SidebarProps {
  onToggle?: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggle }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});
  const location = useLocation();

  const toggleDropdown = (path: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleCollapse = () => {
    const newCollapsedState = !collapsed;
    setCollapsed(newCollapsedState);
    if (onToggle) {
      onToggle(newCollapsedState);
    }
  };

  return (
    <div 
      className={cn(
        "h-screen bg-sidebar fixed flex flex-col border-r border-sidebar-border transition-all duration-300 ease-in-out z-30",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
        {!collapsed && (
          <h1 className="text-sidebar-foreground text-lg font-medium truncate">
            Production App
          </h1>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleCollapse}
          className="text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto py-4 space-y-1 px-2">
        {sidebarItems.map((item) => (
          <div key={item.path} className="mb-1">
            {item.children ? (
              <>
                <button
                  onClick={() => toggleDropdown(item.path)}
                  className={cn(
                    "sidebar-item w-full flex justify-between",
                    isActive(item.path) && "active"
                  )}
                >
                  <div className="flex items-center">
                    <item.icon className={cn("h-5 w-5 mr-2", collapsed && "mr-0")} />
                    {!collapsed && <span>{item.name}</span>}
                  </div>
                  {!collapsed && (
                    <ChevronRight 
                      size={16} 
                      className={cn(
                        "transition-transform", 
                        openDropdowns[item.path] && "rotate-90"
                      )} 
                    />
                  )}
                </button>
                
                {!collapsed && openDropdowns[item.path] && (
                  <div className="pl-9 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={cn(
                          "sidebar-item text-sm py-2",
                          location.pathname === child.path && "active"
                        )}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.path}
                className={cn(
                  "sidebar-item",
                  isActive(item.path) && "active"
                )}
              >
                <item.icon className={cn("h-5 w-5 mr-2", collapsed && "mr-0")} />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent w-full flex items-center justify-center"
        >
          <Settings size={20} />
          {!collapsed && <span className="ml-2">Pengaturan</span>}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
