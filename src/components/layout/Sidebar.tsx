
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  PackageOpen, 
  Package, 
  DollarSign, 
  FileText, 
  Database, 
  Users, 
  Settings,
  ChevronLeft,
  ChevronRight,
  ScissorsSquare,
  Shirt,
  CheckSquare,
  PaintBucket,
  ClipboardList,
  BarChart4,
  ListChecks
} from 'lucide-react';

type SidebarItem = {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: { name: string; path: string, children?: { name: string; path: string }[] }[];
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
      { 
        name: 'Perencanaan Produksi', 
        path: '/production/planning',
        children: [
          { name: 'Bahan Baku & Aksesoris', path: '/production/planning/materials' },
          { name: 'Perencanaan Cutting', path: '/production/planning/cutting' },
          { name: 'Perencanaan Sewing', path: '/production/planning/sewing' },
          { name: 'Perencanaan Finishing', path: '/production/planning/finishing' },
        ]
      },
      { 
        name: 'Proses Produksi', 
        path: '/production/process',
        children: [
          { name: 'Cutting', path: '/production/process/cutting' },
          { name: 'Sewing', path: '/production/process/sewing' },
          { name: 'QC', path: '/production/process/qc' },
          { name: 'Finishing', path: '/production/process/finishing' },
          { name: 'Packaging & Pengiriman', path: '/production/process/packaging' },
        ]
      },
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
      { 
        name: 'Manajemen Pembayaran', 
        path: '/finance/payment',
        children: [
          { name: 'RCA Admin', path: '/finance/payment/rca' },
          { name: 'Potongan/Tambahan', path: '/finance/payment/adjustments' },
        ]
      },
      { 
        name: 'Laporan Keuangan', 
        path: '/finance/reports',
        children: [
          { name: 'Laporan RCA', path: '/finance/reports/rca' },
          { name: 'Laporan Pengeluaran', path: '/finance/reports/expenses' },
        ]
      },
    ]
  },
  { 
    name: 'Laporan & Analisis', 
    path: '/reports', 
    icon: FileText,
    children: [
      { 
        name: 'Laporan Produksi', 
        path: '/reports/production',
        children: [
          { name: 'Laporan Cutting', path: '/reports/production/cutting' },
          { name: 'Laporan Sewing', path: '/reports/production/sewing' },
          { name: 'Laporan QC', path: '/reports/production/qc' },
          { name: 'Laporan Finishing', path: '/reports/production/finishing' },
          { name: 'Perbandingan Finish IN/OUT', path: '/reports/production/comparison' },
        ]
      },
      { 
        name: 'Laporan Penjualan', 
        path: '/reports/sales',
        children: [
          { name: 'Data Penjualan', path: '/reports/sales/data' },
          { name: 'Kinerja Produk', path: '/reports/sales/performance' },
        ]
      },
    ]
  },
  { 
    name: 'Manajemen Data', 
    path: '/data', 
    icon: Database,
    children: [
      { 
        name: 'Data Master', 
        path: '/data/master',
        children: [
          { name: 'Bahan Baku', path: '/data/master/materials' },
          { name: 'Produk', path: '/data/master/products' },
          { name: 'Ukuran', path: '/data/master/sizes' },
          { name: 'Tipe PO', path: '/data/master/potypes' },
          { name: 'Tipe Penjahit', path: '/data/master/tailortypes' },
          { name: 'Data Penjahit', path: '/data/master/tailors' },
          { name: 'Tarif Jahit', path: '/data/master/tailorrates' },
          { name: 'Data Karyawan', path: '/data/master/employees' },
        ]
      },
    ]
  },
  { 
    name: 'Admin & User', 
    path: '/admin', 
    icon: Users,
    children: [
      { 
        name: 'Pengaturan Hak Akses', 
        path: '/admin/access',
        children: [
          { name: 'Menu Creator', path: '/admin/access/menu' },
          { name: 'Manajemen Divisi', path: '/admin/access/divisions' },
          { name: 'Manajemen User', path: '/admin/access/users' },
          { name: 'Audit Log', path: '/admin/access/logs' },
        ]
      },
    ]
  },
];

interface SidebarProps {
  onToggle?: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggle }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});
  const [openSubDropdowns, setOpenSubDropdowns] = useState<{ [key: string]: boolean }>({});
  const location = useLocation();

  const toggleDropdown = (path: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  const toggleSubDropdown = (path: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenSubDropdowns(prev => ({
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
        {!collapsed ? (
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/ef5cfd7d-bc24-41fc-a408-796807c0e8ab.png" 
              alt="Harmas Logo" 
              className="h-8 w-auto"
            />
            <h1 className="text-sidebar-foreground text-lg font-medium truncate">
              Harmas ERP
            </h1>
          </div>
        ) : (
          <img 
            src="/lovable-uploads/ef5cfd7d-bc24-41fc-a408-796807c0e8ab.png" 
            alt="Harmas Logo" 
            className="h-8 w-auto mx-auto"
          />
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
                  <div className="pl-6 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <div key={child.path}>
                        {child.children ? (
                          <>
                            <button
                              onClick={(e) => toggleSubDropdown(child.path, e)}
                              className={cn(
                                "sidebar-item w-full flex justify-between pl-3 text-sm py-2",
                                location.pathname.startsWith(child.path) && "active"
                              )}
                            >
                              <span>{child.name}</span>
                              <ChevronRight 
                                size={14} 
                                className={cn(
                                  "transition-transform", 
                                  openSubDropdowns[child.path] && "rotate-90"
                                )} 
                              />
                            </button>
                            
                            {openSubDropdowns[child.path] && (
                              <div className="pl-4 mt-1 space-y-1">
                                {child.children.map((subChild) => (
                                  <Link
                                    key={subChild.path}
                                    to={subChild.path}
                                    className={cn(
                                      "sidebar-item text-xs py-2 pl-4",
                                      location.pathname === subChild.path && "active"
                                    )}
                                  >
                                    {subChild.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link
                            to={child.path}
                            className={cn(
                              "sidebar-item text-sm py-2 pl-3",
                              location.pathname === child.path && "active"
                            )}
                          >
                            {child.name}
                          </Link>
                        )}
                      </div>
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
